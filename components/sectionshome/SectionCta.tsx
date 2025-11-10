"use client";
import { useLanguage } from "@/components/language/LangContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
// import { BarCode, HorizLine } from "./BarCode";

export default function SectionCta() {
  const { dictionary } = useLanguage();
  const home = dictionary.homepage;

  const txtRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.to(".opa", {
          opacity: 0,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: txtRef.current,
            start: "top 20%",
            end: "center top",
            // markers: true,
            scrub: 1,
          },
        });
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.to(".opa", {
          opacity: 0,
          ease: "power2.out",
          stagger: 0.3,

          scrollTrigger: {
            trigger: txtRef.current,
            start: "top 10%",
            end: "center top",
            // markers: true,
            scrub: 1,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: txtRef }
  );
  return (
    <div className="">
      <div className=" bg-diphblack h-[120svh] flex flex-col justify-center">
        {/* ---------------------firsttext on black bg */}
        <div
          ref={txtRef}
          className=" text-wlite  lg:pb-60 px-5 md:pl-[3.4rem]  md:pr-[10rem]"
        >
          <p className=" opa text-xl md:text-3xl 2xl:text-4xl font-urbanistr leading-9 md:leading-[3.5rem] 2xl:leading-[4.25rem] tracking-wide text-center ">
            {home.firsttext}
          </p>
          <div className="  z-10 py-20 flex justify-end opa">
            <button className="bg-wlite mx-auto px-[1.5rem] py-6 md:py-[1.8rem] md:w-[25rem] rounded-md hover:bg-white transition-all ease-in-out duration-400">
              <Link href="/contact">
                <p className="text-diphblack font-urbanistmed text-xl md:text-2xl ">
                  Start Your Project Today
                </p>
              </Link>
            </button>
          </div>
        </div>
        {/* ---------------------secondtext on white bg */}
        {/* <div className="flex flex-col lg:flex-row justify-between mr-[0.2rem] h-full  px-5 lg:px-0">
          <div data-speed="" className="flex flex-col lg:w-1/3 w-4/5 ">
            <div className="lg:h-[30svh] "></div>
            <div className="bg-wlite relative  w-full flex flex-col justify-center lg:h-full min-h-[60svh]   mt-32 ">
              <p className="text-diphblack px-[2rem] text-xl md:text-2xl md:leading-[3rem] 2xl:text-3xl text-start  2xl:leading-[4.6rem] tracking-wider ">
                {home.ctaleft.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
            </div>
          </div>
          <div className=" lg:w-1/2 flex flex-col justify-start lg:mx-[3rem] relative items-end ">
            <div className="absolute h-full w-full overflow-hidden  lg:flex hidden">
              <BarCode
                height={320}
                strokeWidth={25}
                x={0}
                start="top 50%"
                scrub={0.2}
              />
            </div>
            <div className="absolute top-[35%] h-fit w-full overflow-hidden  lg:flex hidden">
              <HorizLine width={400} strokeWidth={50} x={0} />
            </div>
            <div className="h-[10svh] lg:h-0 "></div>

            <div className="lg:h-[100svh] min-h-[35svh] w-4/5 lg:w-full bg-wlite flex flex-col justify-center md:justify-end py-[5rem]  ">
              <p className="text-diphblack text-xl md:text-2xl md:leading-[3rem] 2xl:text-3xl px-[2rem] lg:text-center 2xl:leading-[3rem] tracking-wider ">
                {" "}
                {home.ctaright.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
            </div> */}
        {/* <div className="h-[16rem] flex flex-col justify-center mx-auto z-10">
          <button className="bg-wlite mx-auto px-[1.5rem] py-6 md:py-[2rem] md:w-[25rem] rounded-md hover:bg-white transition-all ease-in-out duration-400">
            <Link href="/contact">
              <p className="text-diphblack font-urbanistmed text-xl md:text-2xl">
                Start Your Project Today
              </p>
            </Link>
          </button>
        </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
