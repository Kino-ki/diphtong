"use client";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Analogizing({ speed }: { speed: string }) {
  return (
    <div
      data-speed={speed}
      className="h-full  bg-bganalogf  bg-wlite font-urbanistr"
    >
      <div className="  bg-[#E5E5E5]/50  backdrop-blur-[2px]  h-full w-full text-6xl flex flex-col ">
        <h1 className="text-6xl text-black">Analogizing</h1>
      </div>
    </div>
  );
}
