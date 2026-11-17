"use client";

import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

let smoother: ScrollSmoother | null = null;
const PENDING_SCROLL_KEY = "diphtong:pending-scroll-target";

function scrollToHash(hash: string) {
  let attempts = 0;
  const encodedId = hash.replace(/^#/, "");
  let id = encodedId;
  try {
    id = decodeURIComponent(encodedId);
  } catch {
    // Keep the original id if the URL contains a malformed escape sequence.
  }

  const tryScroll = () => {
    const target = document.getElementById(id);

    if (!smoother || !target) {
      attempts += 1;
      if (attempts < 120) requestAnimationFrame(tryScroll);
      return;
    }

    ScrollTrigger.refresh();
    smoother.scrollTo(target, true, "top top");
  };

  requestAnimationFrame(() => requestAnimationFrame(tryScroll));
}

export default function SmoothWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const pendingHash = useRef<string | null>(null);

  useGSAP(
    () => {
      smoother = ScrollSmoother.create({
        smooth: 1.3,
        effects: true,
        // iOS: sync scroll-driven transforms to a normalized scroll position so
        // parallax/scrub/pin animations stop jittering during momentum scroll,
        // and stabilize measurements against the address-bar show/hide resize.
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      return () => {
        smoother?.kill();
        smoother = null;
      };
    },
    { dependencies: [pathname] },
  );

  useEffect(() => {
    const storedHash = sessionStorage.getItem(PENDING_SCROLL_KEY);
    const requestedHash = pendingHash.current || storedHash || window.location.hash;
    if (!requestedHash) return;

    const hash = requestedHash.startsWith("#")
      ? requestedHash
      : `#${requestedHash}`;

    pendingHash.current = null;
    sessionStorage.removeItem(PENDING_SCROLL_KEY);
    if (window.location.hash !== hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}${hash}`,
      );
    }

    scrollToHash(hash);
  }, [pathname]);

  useEffect(() => {
    const handleHashClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const source = event.target;
      if (!(source instanceof Element)) return;

      const link = source.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank") return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || !url.hash) return;

      event.preventDefault();
      const currentPath = `${window.location.pathname}${window.location.search}`;
      const destination = `${url.pathname}${url.search}`;

      if (destination === currentPath) {
        window.history.pushState(null, "", `${destination}${url.hash}`);
        scrollToHash(url.hash);
        return;
      }

      pendingHash.current = url.hash;
      router.push(destination, { scroll: false });
    };

    const handlePopState = () => {
      if (window.location.hash) {
        scrollToHash(window.location.hash);
      } else {
        smoother?.scrollTo(0, true);
      }
    };

    window.addEventListener("click", handleHashClick, true);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("click", handleHashClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

export function getSmoother() {
  return smoother;
}
