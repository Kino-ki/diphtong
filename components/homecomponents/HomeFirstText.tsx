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

        start: "top 20%",
        end: "bottom 20%",
        scrub: 2,
      },
    });

    tl1
      .fromTo(
        firstTextRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut" }
      )
      .to(firstTextRef.current, {
        opacity: 1,
        duration: 2,
      })
      .to(firstTextRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        z: 0,
      });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: secondTextRef.current,
        start: "center top",
        end: "2000vh top",
        scrub: 1,
      },
    });

    tl2
      .fromTo(
        secondTextRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut" }
      )
      .to(secondTextRef.current, {
        opacity: 0,
        duration: 2,
        z: 0,
      });

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <div className="relative  h-[100vh]">
      {" "}
      {language === "EN" ? (
        <div className="flex flex-col justify-center h-[100vh] relative">
          <div
            ref={firstTextRef}
            className="fixed top-[40%] items-center flex flex-col gap-20 w-full h-full opacity-0 "
          >
            <h1 className="flex justify-center capitalize font-urbanistr font-semibold w-[80%] text-6xl text-center tracking-[1rem]">
              {englishhome.firsttext}
            </h1>
            <div className="flex justify-center items-center ">
              <Link href="/contact" className="">
                <button className="bg-wlite rounded-lg text-black py-3 px-2">
                  <p className="mx-auto w-[70%] text-xl tracking-wider font-semibold">
                    Got an Idea? Let’s Talk!
                  </p>
                </button>
              </Link>
            </div>
          </div>
          <div className=" "></div>
          <div
            ref={secondTextRef}
            className="fixed h-[120vh] top-[35%] left-0 w-full flex justify-center px-[12%] opacity-0"
          >
            <p className=" font-urbanistr text-center text-4xl tracking-[0.2rem] leading-[3.5rem] text-pretty">
              {englishhome.secondtext}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center h-[100vh] relative">
          <div
            ref={firstTextRef}
            className="fixed top-[35%] items-center flex flex-col gap-20 w-full h-full opacity-0 "
          >
            <h1 className="flex justify-center font-urbanistr capitalize font-semibold w-[80%] text-6xl/relaxed text-center tracking-[0.8rem]">
              {frenchhome.firsttext}
            </h1>
            <div className="flex justify-center items-center ">
              <Link href="/contact" className="">
                <button className="bg-wlite rounded-lg text-black py-3">
                  <p className="mx-auto w-[70%] text-xl font-semibold tracking-wider">
                    Vous avez une idée ? Parlons-en !
                  </p>
                </button>
              </Link>
            </div>
          </div>
          <div className=" "></div>
          <div
            ref={secondTextRef}
            className="fixed h-[120vh] top-[35%] left-0 w-full flex justify-center px-[12%] opacity-0"
          >
            <p className=" font-urbanistr text-center text-4xl tracking-[0.2rem] leading-[3.5rem] text-pretty">
              {frenchhome.secondtext}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
