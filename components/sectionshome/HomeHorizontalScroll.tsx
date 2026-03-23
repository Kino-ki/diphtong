"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import one from "@/public/images/1.svg";
import two from "@/public/images/2.svg";
import three from "@/public/images/3.svg";
import Image from "next/image";
import { useLanguage } from "@/components/language/LangContext";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function HomeHorizontalScroll() {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { dictionary, language } = useLanguage();
  const slidecontent = dictionary.homepage.horizontalScroll;
  const { firstSlide, secondSlide, thirdSlide } = slidecontent;

  useGSAP(
    () => {
      if (!pinRef.current || !slidesRef.current) return;
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px)",
        () => {
          const pin = pinRef.current;
          const track = slidesRef.current;
          const slides = track?.querySelectorAll(".slide");

          if (!pin || !track || !slides) return;

          function pauseScroll() {
            if (!isPausedRef.current) {
              isPausedRef.current = true;
              pauseTimeoutRef.current = setTimeout(() => {
                isPausedRef.current = false;
              }, 1000);
            }
          }

          const tween = gsap.to(track, {
            xPercent: -100 * (slides.length - 1),
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: pin,
              start: "top top",
              end: () => `+=${track.offsetWidth}`,
              pin: true,
              pinSpacing: true,
              scrub: 1.5,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: 1,
              onUpdate: (self) => {
                if (self.direction !== 0) pauseScroll();
              },
            },
          });

          return () => {
            tween.kill();
          };
        },
      );

      return () => {
        if (pauseTimeoutRef.current) {
          clearTimeout(pauseTimeoutRef.current);
          pauseTimeoutRef.current = null;
        }
        isPausedRef.current = false;
        mm.revert();
      };
    },
    { scope: pinRef, dependencies: [language] },
  );

  return (
    <div className="bg-wlite">
      <div ref={pinRef} className="pb-10 lg:pb-0 lg:h-[103svh]">
        <div className="overflow-hidden h-full">
          <div
            ref={slidesRef}
            className="flex flex-col gap-16 lg:gap-5 lg:flex-row h-full"
          >
          {/* -------------------SLIDE ONE ------------------------- */}
          <section className="slide flex lg:flex-row flex-col gap-5 lg:gap-0 lg:h-[103svh] lg:w-[100svw] bg-wlite  lg:shrink-0 relative ">
            <div className="h-full w-[30%] hidden lg:flex  bg-slideone bg-cover "></div>
            <div className="relative flex justify-end lg:absolute lg:bottom-10 lg:right-10">
              <Image
                src={one}
                width={250}
                height={100}
                alt="one"
                className="w-[50%] md:w-[30%] lg:w-[90%] px-5"
              />
            </div>

            <div className="h-full flex flex-col lg:justify-center lg:gap-16  2xl:gap-10  text-diphblack  lg:w-[60%] lg:px-20 2xl:px-40 ">
              <h4 className=" font-menlor capitalize absolute lg:relative lg:top-0 px-5 top-[5%] text-start  font-medium text-[2.5rem] md:text-[3.5rem]  hyphens-auto  lg:tracking-wider  ">
                {firstSlide.h3.map((p, i) =>
                  typeof p === "string" ? (
                    p
                  ) : (
                    <span
                      key={i}
                      className="text-[#999696] text-[2.5rem] md:text-[3.4rem] "
                    >
                      {" "}
                      {p.gray} <br />{" "}
                    </span>
                  ),
                )}
              </h4>
              <div className="flex flex-col gap-8 text-lg px-5 md:text-xl  2xl:text-2xl/normal font-urbanistr  ">
                <p>{firstSlide.txtone}</p>
                <p className="font-semibold"> {firstSlide.txttwo}</p>
                <p>{firstSlide.txtthree}</p>
              </div>
            </div>
          </section>
          {/* -------------------SLIDE TWO ------------------------- */}

          <section className="slide px-5 lg:px-0 flex lg:flex-row flex-col gap-10 relative lg:shrink-0  lg:w-[90svw] lg:h-[103svh] text-black lg:py-40 ">
            <div className="relative flex justify-end  lg:absolute md:flex md:justify-end lg:bottom-10 lg:left-[70%]">
              <Image
                src={two}
                width={250}
                height={100}
                alt="3"
                className="w-[45%] md:w-[25%] lg:w-[90%] "
              />
            </div>
            <div className="h-full flex flex-col justify-center lg:gap-10 lg:w-[70%]">
              <h4 className=" absolute lg:relative lg:top-0  top-[5%]  md:w-2/3 lg:w-full font-menlor text-[2.5rem] md:text-[3.4rem] text-start capitalize  ">
                {secondSlide.h3.map((p, i) =>
                  typeof p === "string" ? (
                    p
                  ) : (
                    <span
                      key={i}
                      className="text-[#999696] text-[2.5rem] md:text-[3.4rem]"
                    >
                      {" "}
                      {p.gray} <br />{" "}
                    </span>
                  ),
                )}
              </h4>
              <div className="flex flex-col gap-8  text-lg md:text-xl lg:w-[80%] 2xl:text-2xl/normal font-urbanistr   ">
                <p>{secondSlide.txtone}</p>
                <p>{secondSlide.txttwo}</p>
                <p>{secondSlide.txtthree}</p>
              </div>
            </div>
          </section>
          {/* -------------------SLIDE THREE ------------------------- */}

          <section className=" flex lg:flex-row flex-col gap-5 relative slide lg:h-[103svh] lg:shrink-0 w-screen lg:w-[100svw]  px-5 lg:px-0">
            <div className="relative flex justify-end lg:absolute lg:bottom-10 lg:right-10">
              <Image
                src={three}
                width={250}
                height={100}
                alt="3"
                className=" w-[40%] md:w-[30%] lg:w-[90%]  "
              />
            </div>
            <div className=" bg-slidetwopic  bg-cover lg:w-[50%] "></div>
            <div className="flex flex-col justify-center  lg:pl-20 w-full text-black lg:gap-10 ">
              <h4 className="absolute  md:w-2/3 lg:w-full lg:relative lg:top-0  top-[5%] capitalize  font-menlor text-[2.5rem] md:text-[3.4rem] text-start">
                {thirdSlide.h3.map((p, i) =>
                  typeof p === "string" ? (
                    <span key={i}>
                      {" "}
                      {p} <br />
                    </span>
                  ) : (
                    <span
                      key={i}
                      className="text-[#999696] text-[2.5rem] md:text-[3.4rem]"
                    >
                      {" "}
                      {p.gray}{" "}
                    </span>
                  ),
                )}
              </h4>
              <div className="flex flex-col gap-8  text-lg md:text-xl lg:w-[80%] 2xl:text-2xl/normal font-urbanistr">
                <p>{thirdSlide.txtone}</p>
                <p>{thirdSlide.txttwo}</p>
                <p>{thirdSlide.txtthree}</p>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
}
