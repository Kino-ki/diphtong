"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import diphtexte from "@/public/images/vertical.svg";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { language } = useLanguage();
  const { EN, FR } = data;

  const englishhome = EN.homepage;
  const frenchhome = FR.homepage;

  const firstTextRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: firstTextRef.current,
        start: "300px top",
        end: "600px 700px",
        scrub: 3,
      },
    });
    tl.fromTo(
      firstTextRef.current,
      {
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
      },
      {
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      ref={firstTextRef}
      className="h-[100vh] bg-herogif bg-auto md:bg-contain relative "
    >
      <div className="h-full w-full  bg-black/30 fixed ">
        <div className="h-full w-full md:pt-[22rem] md:pb-40 flex justify-center">
          <div className=" flex flex-col justify-evenly md:justify-between w-[95%] font-figtree">
            <div className="md:hidden flex justify-center">
              <Image src={diphtexte} alt="diph logo" width={180} />
            </div>
            {language === "EN" ? (
              <h2 className=" font-figtree  capitalize tracking-widest md:tracking-[0.8rem] text-3xl md:text-4xl/5 flex justify-center md:justify-end  ">
                {englishhome.heroh2}
              </h2>
            ) : (
              <h2 className=" font-figtree capitalize tracking-widest md:tracking-[0.8rem] text-3xl md:text-4xl/5 flex justify-center md:justify-end ">
                {frenchhome.heroh2}
              </h2>
            )}

            {language === "EN" ? (
              <h3 className="font-figtreel capitalize text-xl md:text-4xl tracking-wider md:tracking-[1rem] flex justify-center text-center font-semibold ">
                {englishhome.heroh3}
              </h3>
            ) : (
              <h3 className="font-figtreel capitalize text-xl md:text-4xl tracking-wider md:tracking-[0.8rem] flex justify-center text-center font-semibold ">
                {frenchhome.heroh3}
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
