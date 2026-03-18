import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { getSmoother } from "./SmoothWrapper";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
type ContentItem =
  | string
  | { bold: string }
  | { br: string }
  | { a: { txt: string; href: string } }
  | { b: { txt: string; href: string } };
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function waitForSmoother(timeout = 100): Promise<ScrollSmoother | null> {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const smoother = getSmoother();

      if (smoother) {
        clearInterval(interval);
        resolve(smoother);
      }
    }, 50);

    // Fallback in case smoother never exists
    setTimeout(() => {
      clearInterval(interval);
      resolve(null);
    }, timeout);
  });
}

export function scrollToHashOnLoad() {
  const interval = setInterval(() => {
    const smoother = getSmoother();
    if (!smoother) return;

    clearInterval(interval);

    const hash = window.location.hash;

    if (!hash) return;

    gsap.to(smoother, {
      scrollTop: smoother.offset(hash, "top top"),
      duration: 1,
    });
  }, 50);
}

export function smoothScrollTo(target: string | null) {
  const smoother = getSmoother();

  if (!smoother) {
    console.warn("ScrollSmoother not initialized yet.");
    return;
  }
  if (!target) return;
  // If target starts with "#", remove it to avoid double ##
  const id = target.startsWith("#") ? target.slice(1) : target;
  const elem = document.getElementById(id);

  if (!elem) {
    console.warn(`Element with id "${id}" not found.`);
    return;
  }

  smoother.scrollTo(elem, true, "top top");
}

export function navigateWithScroll(
  router: AppRouterInstance,
  path: string,
  hash: string,
) {
  // 1. navigate sans hash (important)
  router.push(path);

  // 2. attendre que la page soit prête
  const interval = setInterval(() => {
    const smoother = getSmoother();
    const elem = document.getElementById(hash);

    if (!smoother || !elem) return;

    clearInterval(interval);

    // 3. scroll GSAP propre
    smoother.scrollTo(elem, false, "top top");
  }, 100);
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
          smoothScrollTo(e.currentTarget.getAttribute("href"));
          // e.preventDefault();
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
          smoothScrollTo(e.currentTarget.getAttribute("href"));
          // e.preventDefault();
        }}
      >
        {" "}
        {a.b.txt}{" "}
      </a>
    );
  return null;
}
