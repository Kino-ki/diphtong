"use client";

import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

let smoother: ScrollSmoother | null = null; // global variable

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
      });
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    },
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
