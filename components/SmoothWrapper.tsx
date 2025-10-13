// components/SmoothWrapper.tsx
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother: ScrollSmoother | null = null; // global variable

export function getSmoother() {
  return smoother;
}

export default function SmoothWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check if smoother already exists (avoid multiple inits on route changes)
    if (ScrollSmoother.get()) return;

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
    });

    return () => {
      smoother?.kill();
      smoother = null;
    };
  }, []);

  return <>{children}</>;
}
