"use client";

import { gsap } from "gsap";
import { Observer } from "gsap/all";
import { useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LangContext";
import data from "@/data/content.json";

gsap.registerPlugin(Observer);

export default function AboutPage() {
  const { language } = useLanguage();
  const { EN, FR } = data;
  const frenchdata = FR.aboutPage;
  console.log(frenchdata);

  const englishdata = EN.aboutPage;

  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLElement | null)[]>([]);
  const currentIndexRef = useRef(-1);
  const animatingRef = useRef(false);

  useEffect(() => {
    // Get references to all DOM elements
    const sections = sectionsRef.current;
    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");
    const images = imagesRef.current;
    const wrap = gsap.utils.wrap(0, sections.length);

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index: number, direction: number) {
      if (animatingRef.current) return; // Prevent new animations while one is running
      animatingRef.current = true;
      index = wrap(index);

      const fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => {
            animatingRef.current = false;
          },
        });

      if (currentIndexRef.current >= 0) {
        gsap.set(sections[currentIndexRef.current], { zIndex: 0 });
        tl.to(images[currentIndexRef.current], {
          yPercent: -15 * dFactor,
          delay: 0.2,
        }).set(sections[currentIndexRef.current], { autoAlpha: 0 });
        tl.call(() => {
          currentIndexRef.current = index;
        });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      currentIndexRef.current = index;
    }

    Observer.create({
      // target: sections,
      type: "wheel,touch",
      wheelSpeed: -1,
      onDown: () =>
        !animatingRef.current && gotoSection(currentIndexRef.current - 1, -1),
      onUp: () =>
        !animatingRef.current && gotoSection(currentIndexRef.current + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    // Initialize first section
    gotoSection(0, 1);

    // Cleanup function
    return () => {
      Observer.getAll().forEach((observer) => observer.kill());
    };
  }, []);

  return (
    <div className="text-rouge bg-wlite">
      {language === "EN" ? (
        <div className="flex flex-col h-[100vh] ">
          {/* --------- FIRST SECTION ------------------- */}
          <section
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className=" h-full w-full  fixed  inset-0"
          >
            {/* Outer div for sliding effect */}
            <div className="outer bg-wlite overflow-y-hidden w-full h-full">
              {/* Inner div for sliding effect */}
              <div className="inner overflow-y-hidden w-full h-full">
                {/* Background image */}
                <div
                  ref={(el) => {
                    if (el && !imagesRef.current.includes(el)) {
                      imagesRef.current.push(el);
                    }
                  }}
                  className="h-full w-full bg-wlite bg-contain flex flex-col justify-center"
                >
                  {/* <div className="my-auto mx-auto w-[70%] h-[85%]"> */}
                  <div className="bg-diphlogo10 bg-repeat-space h-full w-full  flex flex-col justify-center">
                    <div className="flex justify-end">
                      <p className="w-[60%] p-8 bg-wlite font-urbanistb flex justify-center tracking-widest leading-[3.5rem] text-4xl text-start text-pretty">
                        {englishdata.firstSection}
                      </p>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* ------------- SECOND SECTION ---------------------------- */}
          <section
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className=" h-[100vh] inset-0 fixed  "
          >
            {/* Outer div for sliding effect */}
            <div className="outer overflow-y-hidden w-full h-full ">
              {/* Inner div for sliding effect */}
              <div className="inner overflow-y-hidden w-full h-full bg-wlite">
                {/* Background image */}
                <div
                  ref={(el) => {
                    if (el && !imagesRef.current.includes(el)) {
                      imagesRef.current.push(el);
                    }
                  }}
                  className="h-full bg-diphlogo10 bg-repeat-space  flex flex-col justify-center  "
                >
                  <div className="flex  justify-between px-10">
                    <h1 className="section-heading uppercase font-menlor text-6xl w-1/3 my-auto p-20 bg-wlite  ">
                      {englishdata.secondSection.title}
                    </h1>
                    <p className="font-urbanistr text-4xl text-start h-[100vh] tracking-widest w-1/2 leading-[3rem] mx-auto p-20 bg-wlite">
                      {englishdata.secondSection.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --------------------- THIRD SECTION -------------------------------- */}
          <section
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className=" h-[100vh] inset-0 fixed"
          >
            {/* Outer div for sliding effect */}
            <div className="outer overflow-y-hidden w-full h-full">
              {/* Inner div for sliding effect */}
              <div className="inner overflow-y-hidden w-full h-full bg-wlite">
                {/* Background image */}
                <div
                  ref={(el) => {
                    if (el && !imagesRef.current.includes(el)) {
                      imagesRef.current.push(el);
                    }
                  }}
                  className="h-full bg-diphlogo10 bg-repeat-space flex "
                >
                  <div className="flex flex-col justify-center gap-12 bg-wlite m-28">
                    <h2 className="section-heading uppercase font-menlor text-5xl text-center mx-auto p-10">
                      {englishdata.thirdSection.title}
                    </h2>
                    <p className="font-urbanistr text-4xl text-center flex justify-center p-10  tracking-widest w-2/3 leading-[3rem]">
                      {englishdata.thirdSection.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------- FOURTH SECTION -------------------------------- */}
          <section
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="h-[100vh] inset-0 fixed "
          >
            {/* Outer div for sliding effect */}
            <div className="outer overflow-y-hidden w-full h-full">
              {/* Inner div for sliding effect */}
              <div className="inner overflow-y-hidden w-full h-full">
                {/* Background image */}
                <div
                  ref={(el) => {
                    if (el && !imagesRef.current.includes(el)) {
                      imagesRef.current.push(el);
                    }
                  }}
                  className="h-full bg-wlite bg-no-repeat bg-center flex flex-col justify-center gap-16"
                >
                  <h1 className="section-heading uppercase font-menlor text-5xl text-center">
                    {englishdata.lastSection.title}
                  </h1>
                  <p className="font-urbanistmed text-xl px-[20%] text-center flex justify-center tracking-wider leading-8">
                    {englishdata.lastSection.content}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
