"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
gsap.registerPlugin(ScrollTrigger);

export default function HomeFirstText() {
  const firstTextRef = useRef<HTMLDivElement | null>(null);
  const secondTextRef = useRef<HTMLDivElement | null>(null);

  const { language } = useLanguage();
  const { EN, FR } = data;

  const englishhome = EN.homepage;
  const frenchhome = FR.homepage;

  useEffect(() => {
    if (!firstTextRef.current || !secondTextRef.current) return;

    // Timeline for the first text
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: firstTextRef.current,
        // markers: true,
        pin: true,
        start: "top 35%",
        end: "bottom top",
        scrub: 2,
      },
    });

    tl1
      .fromTo(
        firstTextRef.current,
        { opacity: 0 },
        { opacity: 1, z: 0, duration: 2, ease: "power2.inOut" }
      )
      .to(firstTextRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        z: 0,
      });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: secondTextRef.current,
        pin: true,
        pinSpacing: true,
        // markers: true,
        start: "top 30%",
        end: "bottom top",
        scrub: 2,
      },
    });

    tl2
      .fromTo(
        secondTextRef.current,
        { opacity: 0 },
        { opacity: 1, z: 0, duration: 2, ease: "power2.inOut" }
      )
      .to(secondTextRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",

        z: 0,
      });

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <div className="relative ">
      {" "}
      {language === "EN" ? (
        <div className="flex flex-col h-fit ">
          <div
            ref={firstTextRef}
            className=" flex flex-col justify-start h-[100svh] items-center gap-20 w-full  z-10 "
          >
            <h1 className="flex justify-center capitalize font-urbanistr font-semibold w-[80%] text-3xl/normal md:text-6xl/relaxed text-center tracking-wider md:tracking-[1rem]">
              {englishhome.firsttext}
            </h1>
            <div className="flex justify-center items-center ">
              <Link href="/contact" className="">
                <button className="bg-wlite rounded-lg text-black py-3 md:px-2">
                  <p className="mx-auto w-[70%] text-md md:text-xl tracking-wider font-semibold">
                    Got an Idea? Let’s Talk!
                  </p>
                </button>
              </Link>
            </div>
          </div>
          <div
            ref={secondTextRef}
            className=" h-[100svh] w-full flex flex-col justify-start text-pretty px-[5%] md:px-[12%]   z-0"
          >
            <p className=" font-urbanistr text-center text-xl/relaxed md:text-4xl md:tracking-[0.2rem] md:leading-[3.5rem] text-pretty">
              {englishhome.secondtext}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center h-[100vh] relative">
          <div
            ref={firstTextRef}
            className="fixed top-[24%] md:top-[35%] items-center flex flex-col gap-20 w-full h-full opacity-0 z-10"
          >
            <h1 className="flex justify-center font-urbanistr capitalize font-semibold w-[80%] text-4xl/normal md:text-6xl/relaxed text-center tracking-wider md:tracking-[0.8rem]">
              {frenchhome.firsttext}
            </h1>
            <div className="flex justify-center items-center ">
              <Link href="/contact" className="">
                <button className="bg-wlite rounded-lg text-black py-3">
                  <p className="mx-auto w-[70%] text-lg md:text-xl font-semibold tracking-wider">
                    Vous avez une idée ? Parlons-en !
                  </p>
                </button>
              </Link>
            </div>
          </div>
          <div className=" "></div>
          <div
            ref={secondTextRef}
            className="fixed h-[120vh] top-[20%] md:top-[35%] left-0 w-full flex justify-center text-pretty px-[5%] md:px-[12%] opacity-0 z-0"
          >
            <p className=" font-urbanistr text-center text-2xl/relaxed md:text-4xl md:tracking-[0.2rem] md:leading-[3.5rem] text-pretty">
              {frenchhome.secondtext}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
