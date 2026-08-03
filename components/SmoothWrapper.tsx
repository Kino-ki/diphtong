"use client";

import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

let smoother: ScrollSmoother | null = null;

export default function SmoothWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

export function getSmoother() {
  return smoother;
}
