"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const firstSectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "300px top",
        end: "600px 700px",
        scrub: 3,
      },
    });
    tl.fromTo(
      firstSectionRef.current,
      {
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
      },
      { opacity: 0, duration: 3, ease: "power2.inOut" }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div ref={firstSectionRef} className="h-[100vh] bg-herogif relative z-30 ">
      <div className="h-full w-full backdrop-blur-[1.5px] bg-black/75 fixed z-10 ">
        <div className="h-full w-full pt-[22rem] pb-40 flex justify-center">
          <div className=" flex flex-col justify-between w-[95%] font-figtree">
            <h2 className=" font-figtree tracking-[0.8rem] text-4xl/5 flex justify-end ">
              Creative Web Agency.
            </h2>
            <h3 className="font-figtreel text-4xl tracking-[1rem] flex justify-center font-semibold ">
              We Craft Custom Solutions For Your Business.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
