"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import diphtexte from "@/public/images/logo/vertical.svg";
import { useLanguage } from "@/components/language/LangContext";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { dictionary } = useLanguage();
  const hero = dictionary.homepage;

  const heroTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroTextRef.current,
        start: "bottom 80%",
        end: "bottom 70%",
        // markers: true,
        scrub: 1,
      },
    });
    tl.fromTo(
      heroTextRef.current,
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      {
        opacity: 0,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div
      ref={heroTextRef}
      className="h-[100vh] bg-mobileherogif bg-left  md:bg-herogif  md:bg-contain relative "
    >
      <div className="h-full w-full backdrop-blur-[1px] bg-black/30  ">
        <div className="h-full w-full md:pt-[22rem] md:pb-40 flex justify-center">
          <div className=" flex flex-col justify-evenly md:justify-between w-[95%] font-figtree">
            <div className="md:hidden flex justify-center">
              <Image src={diphtexte} alt="diph logo" width={180} />
            </div>
            <h1 className=" font-figtree  capitalize tracking-widest md:tracking-[0.6rem] text-3xl md:text-4xl/5 flex justify-center md:justify-end  ">
              {hero.heroh2}
            </h1>

            <h2 className="font-figtreel lg:px-40 capitalize text-xl md:text-4xl tracking-wider md:tracking-[0.5rem] lg:leading-[4rem] flex justify-center text-center font-semibold ">
              {hero.heroh3}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
