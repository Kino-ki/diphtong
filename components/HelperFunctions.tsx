import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { getSmoother } from "./SmoothWrapper";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type ContentItem =
  | string
  | { bold: string }
  | { br: string }
  | { a: { txt: string; href: string } }
  | { b: { txt: string; href: string } };
type SmootherInstance = NonNullable<ReturnType<typeof getSmoother>>;

const PENDING_SCROLL_KEY = "diphtong:pending-scroll-target";

function getHashId(target: string | null) {
  if (!target) return null;
  if (target.startsWith("#")) return target.slice(1);

  const hashIndex = target.indexOf("#");
  return hashIndex >= 0 ? target.slice(hashIndex + 1) : null;
}

export function waitForSmoother(timeout = 100): Promise<SmootherInstance | null> {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const smoother = getSmoother();

      if (smoother) {
        clearInterval(interval);
        resolve(smoother);
      }
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      resolve(null);
    }, timeout);
  });
}

export function scrollToHashOnLoad() {
  const startedAt = Date.now();
  const interval = setInterval(() => {
    const smoother = getSmoother();
    const locationHash = getHashId(window.location.hash);
    const pendingHash = sessionStorage.getItem(PENDING_SCROLL_KEY);
    const targetId = locationHash || pendingHash;
    const elem = targetId ? document.getElementById(targetId) : null;

    if (!smoother || !targetId || !elem) {
      if (Date.now() - startedAt > 3000) {
        clearInterval(interval);
        sessionStorage.removeItem(PENDING_SCROLL_KEY);
      }
      return;
    }

    clearInterval(interval);
    sessionStorage.removeItem(PENDING_SCROLL_KEY);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      smoother.scrollTo(elem, false, "top top");
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });
  }, 50);
}

export function smoothScrollTo(target: string | null) {
  const smoother = getSmoother();

  if (!smoother) {
    console.warn("ScrollSmoother not initialized yet.");
    return;
  }

  const id = getHashId(target);
  if (!id) return;

  const elem = document.getElementById(id);

  if (!elem) {
    console.warn(`Element with id "${id}" not found.`);
    return;
  }

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    smoother.scrollTo(elem, true, "top top");
  });
}

export function navigateWithScroll(
  router: AppRouterInstance,
  path: string,
  hash: string,
) {
  sessionStorage.setItem(PENDING_SCROLL_KEY, hash);
  router.push(path);
}

export function renderContentItem(a: ContentItem, i: number) {
  if (typeof a === "string") return a;
  if ("bold" in a) return <b key={i}>{a.bold}</b>;
  if ("br" in a)
    return (
      <span className="" key={i}>
        <br />
        <br />
        {a.br}
      </span>
    );
  if ("a" in a)
    return (
      <a
        className="font-semibold hover:underline transition-all ease-in-out duration-200"
        key={i}
        href={a.a.href}
        onClick={(e) => {
          const href = e.currentTarget.getAttribute("href");

          if (href?.startsWith("#")) {
            e.preventDefault();
            smoothScrollTo(href);
          }
        }}
      >
        {" "}
        {a.a.txt}{" "}
      </a>
    );
  if ("b" in a)
    return (
      <a
        className="btn text-lg md:text-xl xl:text-2xl 2xl:text-3xl btn uppercase  hover:ring-1 ring-wlite"
        key={i}
        href={a.b.href}
        onClick={(e) => {
          const href = e.currentTarget.getAttribute("href");

          if (href?.startsWith("#")) {
            e.preventDefault();
            smoothScrollTo(href);
          }
        }}
      >
        {" "}
        {a.b.txt}{" "}
      </a>
    );
  return null;
}
