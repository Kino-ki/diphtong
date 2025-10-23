import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { getSmoother } from "./SmoothWrapper";
type ContentItem =
  | string
  | { bold: string }
  | { br: string }
  | { a: { txt: string; href: string } };
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function waitForSmoother(timeout = 100): Promise<ScrollSmoother | null> {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const smoother = getSmoother();
      console.log("smoother", smoother);

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
  const smoother = ScrollSmoother.create({
    smooth: 1.2,
    effects: true,
  });
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
  return null;
}
