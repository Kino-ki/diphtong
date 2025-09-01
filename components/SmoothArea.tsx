"use client";

import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothArea({
  children,
  smooth = 1.5,
}: {
  children: React.ReactNode;
  smooth?: number;
}) {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth,
      effects: true,
    });

    return () => smoother.kill();
  }, [smooth]);

  return <>{children}</>;
}
