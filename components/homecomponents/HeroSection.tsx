"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { language } = useLanguage();
  const { EN, FR } = data;

  const englishhome = EN.homepage;
  const frenchhome = FR.homepage;

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
      {
        opacity: 0,
        duration: 3,
        pin: true,
        ease: "power2.inOut",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      ref={firstSectionRef}
      className="h-[100vh] bg-herogif bg-cover relative "
    >
      <div className="h-full w-full backdrop-blur-[1.5px] bg-black/75 fixed z-10 ">
        <div className="h-full w-full pt-[22rem] pb-40 flex justify-center">
          <div className=" flex flex-col justify-between w-[95%] font-figtree">
            {language === "EN" ? (
              <h2 className=" font-figtree  capitalize tracking-[0.8rem] text-4xl/5 flex justify-end ">
                {englishhome.heroh2}
              </h2>
            ) : (
              <h2 className=" font-figtree capitalize tracking-[0.8rem] text-4xl/5 flex justify-end ">
                {frenchhome.heroh2}
              </h2>
            )}

            {language === "EN" ? (
              <h3 className="font-figtreel capitalize text-4xl tracking-[1rem] flex justify-center text-center font-semibold ">
                {englishhome.heroh3}
              </h3>
            ) : (
              <h3 className="font-figtreel capitalize text-4xl tracking-[0.8rem] flex justify-center text-center font-semibold ">
                {frenchhome.heroh3}
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
