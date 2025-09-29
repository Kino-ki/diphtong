"use client";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Analogizing() {
  return <div className="h-[100svh] bg-cover bg-bganalog"></div>;
}
