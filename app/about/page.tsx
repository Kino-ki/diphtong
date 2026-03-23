"use client";

import gsap from "gsap";
import { useLanguage } from "@/components/language/LangContext";
// import founderPic from "@/public/images/founder.png";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
import { GetAQuoteButton } from "@/components/Buttons";
import { getSmoother, renderContentItem } from "@/components/HelperFunctions";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import Link from "next/link";

export default function AboutPage() {
  const { dictionary, language } = useLanguage();

  const about = dictionary.aboutPage;

  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const endtrigger = useRef<HTMLDivElement | null>(null);
  const bgRefs = useRef<(HTMLElement | null)[]>([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isRouteReady, setIsRouteReady] = useState(false);

  useLayoutEffect(() => {
    setIsRouteReady(false);

    const startedAt = Date.now();
    const interval = setInterval(() => {
      const smoother = getSmoother();

      if (!smoother) {
        if (Date.now() - startedAt > 3000) {
          clearInterval(interval);
        }
        return;
      }

      clearInterval(interval);
      smoother.scrollTo(0, false);
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        setIsRouteReady(true);
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useGSAP(
    () => {
      if (!isRouteReady) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const mm = gsap.matchMedia();

      mm.add("(min-width:1024px)", () => {
        gsap.fromTo(
          pinnedRef.current,
          { scale: 1 },
          {
            scale: 1,
            transformOrigin: "left left",

            ease: "sine.inOut",
            duration: 0.5,
            scrollTrigger: {
              trigger: pinnedRef.current,
              start: "top 20%",
              pin: true,
              endTrigger: endtrigger.current,
              end: "top top",
              scrub: 1,
              // markers: true,
            },
          },
        );

        // Animate background color on values
        const bgTriggers: ScrollTrigger[] = [];
        bgRefs.current.forEach((el) => {
          if (!el) return;
          const tween = gsap.fromTo(
            el,
            { backgroundColor: "#c3c3c3" },
            {
              backgroundColor: "#191919",
              scrollTrigger: {
                trigger: el,
                start: "top 70%",
                end: "top 60%",
                toggleActions: "play none none none",
                // scrub: 1,
                // markers: true,
              },
            },
          );
          bgTriggers.push(tween.scrollTrigger as ScrollTrigger);
        });
      });
      mm.add("(max-width:1023px)", () => {
        const bgTriggers: ScrollTrigger[] = [];
        bgRefs.current.forEach((el) => {
          if (!el) return;
          const tween = gsap.fromTo(
            el,
            { backgroundColor: "#E5E5E5" },
            {
              backgroundColor: "#161616",
              scrollTrigger: {
                trigger: el,
                start: "top 70%",
                end: "top 60%",
                toggleActions: "play none none none",
                // scrub: 1,
                // markers: true,
              },
            },
          );
          bgTriggers.push(tween.scrollTrigger as ScrollTrigger);
        });
      });
      return () => {
        mm.revert();
      };
    },
    { scope: pinnedRef, dependencies: [language, isRouteReady] },
  );

  return (
    <div className=" bg-diphblack text-wlite font-urbanistr">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row px-5 md:px-10 lg:px-12 2xl:px-20">
          {/* ----------------------------LEFT SIDE flex col ----------------------------------------------- */}
          <div className="lg:w-[40%]  flex flex-col lg:h-[100svh] ">
            <div className=" lg:h-[20svh] " />
            <h1
              ref={pinnedRef}
              className=" text-8xl md:text-9xl lg:text-8xl/normal 2xl:text-9xl/none  2xl:pr-20 pt-20 md:py-12 lg:py-0 font-urbanistl  "
            >
              {about.h1}{" "}
            </h1>
          </div>
          {/* ----------------------------RIGHT SIDE flex col ----------------------------------------------- */}

          <div className="lg:w-[60%] flex flex-col  text-diphblack ">
            <div className=" bg-wlite min-h-[100svh] lg:min-h-[100svh] flex flex-col justify-end gap-12 2xl:gap-20 p-10 md:p-20 2xl:pb-40 border-b-8 border-diphblack">
              <h2 className=" text-3xl/relaxed md:text-5xl/relaxed lg:text-4xl/relaxed 2xl:text-5xl/relaxed tracking-widest font-urbanistr">
                {about.h1description}
              </h2>
              <p className="md:text-xl/8 2xl:text-2xl/10 tracking-wider md:pb-32 pb-0 lg:pb-0 ">
                {about.firsttext}
              </p>
            </div>

            <div className=" 2xl:min-h-[100svh] flex flex-col  justify-end  p-10 md:p-20 2xl:pb-40 bg-wlite ">
              <h2 className="text-3xl/relaxed md:text-5xl/relaxed lg:text-4xl/relaxed 2xl:text-5xl/relaxed tracking-widest font-urbanistr pb-5 md:pb-12 2xl:py-20">
                {about.secondSectionspecial.h3}
              </h2>
              <p className="md:text-xl/8 2xl:text-2xl/10 tracking-wider ">
                {about.secondSectionspecial.specialcontent.map(
                  renderContentItem,
                )}
              </p>
              <ul className="md:text-xl/8 2xl:text-2xl font-urbanistmed py-4 md:py-8 2xl:py-12 tracking-wider">
                {about.secondSectionspecial.specialarray.map((spacial, i) => (
                  <li className="py-1" key={i}>
                    {" "}
                    {spacial}{" "}
                  </li>
                ))}
              </ul>
              <p className="md:text-xl/8 2xl:text-2xl/10 font-urbanistr tracking-wider ">
                {about.secondSectionspecial.specialend.map(renderContentItem)}
              </p>
            </div>
            <Link
              href="/projects"
              className=" min-h-[15svh] md:min-h-[20svh] lg:min-h-[30svh] border-x-4 flex flex-col justify-center border-wlite hover:border-x-[24px] transition-all ease-in-out duration-200"
            >
              <p className="text-wlite text-xl md:text-5xl lg:text-6xl flex flex-col justify-center items-center hover:scale-110 h-full w-full transition-all ease-in-out duration-200">
                {about.projcta}
              </p>
            </Link>
            <div
              ref={endtrigger}
              className=" flex flex-col justify-end p-10 md:px-20 2xl:py-40  bg-wlite  "
            >
              <h2 className=" text-3xl/relaxed md:text-5xl/relaxed lg:text-5xl/relaxed tracking-widest font-urbanistr pb-5 md:pb-12 2xl:pb-20">
                {about.thirdSectionhow.h3}
              </h2>
              <p className="md:text-xl/8 2xl:text-2xl/10 tracking-wider">
                {about.thirdSectionhow.howcontent.map(renderContentItem)}
              </p>
            </div>
            <Link
              href="/services"
              className="min-h-[15svh] md:min-h-[20svh] lg:min-h-[30svh] flex flex-col justify-center border-x-4  border-wlite hover:border-x-[24px] transition-all ease-in-out duration-200"
            >
              <p className="text-wlite text-xl md:text-5xl lg:text-6xl flex flex-col justify-center items-center hover:scale-110 h-full w-full transition-all ease-in-out duration-200">
                {about.servcta}
              </p>
            </Link>
          </div>
        </div>
        {/* -------------------------------Second section VALUES & FOUNDER ------------------------------------------------- */}
        <div className="bg-wlite pl-5 md:pl-12 2xl:pl-20 text-diphblack mx-5 md:mx-10 lg:mx-12 2xl:mx-20 flex flex-col gap-12 2xl:gap-0 lg:-mt-2">
          {/* ----------------------------LEFT SIDE flex col ----------------------------------------------- */}
          <div className="w-full 2xl:min-h-[100svh] flex flex-col justify-start py-10 ">
            <h2 className="text-5xl md:text-6xl tracking-widest font-urbanistr py-12 md:py-20">
              {about.fourthsectionValues.h3}
            </h2>
            <div className="">
              <ul className="flex flex-col gap-10">
                {about.fourthsectionValues.valuesArray.map((value, i) => (
                  <li key={i}>
                    <h3
                      ref={(el) => {
                        bgRefs.current[i] = el;
                      }}
                      className="md:text-xl 2xl:text-3xl py-8 md:py-10 px-5 bg-diphblack text-wlite"
                    >
                      {value.map(renderContentItem)}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:h-[70svh] flex flex-col  pb-8 px-5 ">
            <div className="flex flex-col  ">
              <h2 className="text-5xl md:text-6xl tracking-widest font-urbanistr md:py-20 pb-10">
                {about.founderNote.h3}
              </h2>
              <p className="text-lg/loose md:text-2xl 2xl:text-3xl/loose ">
                {about.founderNote.content}
              </p>
            </div>
          </div>
          {/* ----------------------------RIGHT SIDE flex col ----------------------------------------------- */}
        </div>
        <div className="bg-diphblack text-wlite h-[60svh] md:h-[50svh] lg:h-[70svh] flex flex-col gap-20 justify-center px-5 md:px-12 lg:px-32">
          <h3 className="text-3xl md:text-5xl lg:text-6xl  text-center">
            {about.cta}
          </h3>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=" w-fit mx-auto"
          >
            <GetAQuoteButton
              isHovered={isHovered}
              divclass="w-60 md:w-96  text-center  px-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
