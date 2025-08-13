"use client";

import { gsap } from "gsap";
import { Observer } from "gsap/all";
// import { useRef, useEffect } from "react";
import chinook from "@/public/images/chinook.jpg";
import { useLanguage } from "../contexts/LangContext";
import data from "@/data/content.json";
import Image from "next/image";

gsap.registerPlugin(Observer);

export default function AboutPage() {
  const { language } = useLanguage();
  const { EN, FR } = data;
  const frenchdata = FR.aboutPage;
  const englishdata = EN.aboutPage;

  // const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  // const imagesRef = useRef<(HTMLElement | null)[]>([]);
  // const currentIndexRef = useRef(-1);
  // const animatingRef = useRef(false);

  // useEffect(() => {
  //   // Get references to all DOM elements
  //   const sections = sectionsRef.current;
  //   const outerWrappers = gsap.utils.toArray(".outer");
  //   const innerWrappers = gsap.utils.toArray(".inner");
  //   const images = imagesRef.current;
  //   const wrap = gsap.utils.wrap(0, sections.length);

  //   gsap.set(outerWrappers, { yPercent: 100 });
  //   gsap.set(innerWrappers, { yPercent: -100 });

  //   function gotoSection(index: number, direction: number) {
  //     if (animatingRef.current) return; // Prevent new animations while one is running
  //     animatingRef.current = true;
  //     index = wrap(index);

  //     const fromTop = direction === -1,
  //       dFactor = fromTop ? -1 : 1,
  //       tl = gsap.timeline({
  //         defaults: { duration: 1.25, ease: "power1.inOut" },
  //         onComplete: () => {
  //           animatingRef.current = false;
  //         },
  //       });

  //     if (currentIndexRef.current >= 0) {
  //       gsap.set(sections[currentIndexRef.current], { zIndex: 0 });
  //       tl.to(images[currentIndexRef.current], {
  //         yPercent: -15 * dFactor,
  //         delay: 0.2,
  //       }).set(sections[currentIndexRef.current], { autoAlpha: 0 });
  //       tl.call(() => {
  //         currentIndexRef.current = index;
  //       });
  //     }

  //     gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  //     tl.fromTo(
  //       [outerWrappers[index], innerWrappers[index]],
  //       {
  //         yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
  //       },
  //       {
  //         yPercent: 0,
  //       },
  //       0
  //     ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

  //     currentIndexRef.current = index;
  //   }

  //   Observer.create({
  //     // target: sections,
  //     type: "wheel,touch",
  //     wheelSpeed: -1,
  //     onDown: () =>
  //       !animatingRef.current && gotoSection(currentIndexRef.current - 1, -1),
  //     onUp: () =>
  //       !animatingRef.current && gotoSection(currentIndexRef.current + 1, 1),
  //     tolerance: 10,
  //     preventDefault: true,
  //   });

  //   // Initialize first section
  //   gotoSection(0, 1);

  //   // Cleanup function
  //   return () => {
  //     Observer.getAll().forEach((observer) => observer.kill());
  //   };
  // }, []);

  return (
    <div className="text-black bg-wlite font-urbanistr">
      {language === "EN" ? (
        <div className="flex flex-col gap-20 pb-60 ">
          <div className="flex">
            <Image src={chinook} alt="chinook" width={550} />
          </div>
          <section className="flex justify-start w-1/2 pr-5   ">
            <div className=" flex flex-col justify-center ">
              <p className="text-3xl text-end tracking-wide leading-relaxed md:mt-10 ">
                {englishdata.firstSection}{" "}
              </p>
            </div>
          </section>
          <section className="flex justify-end  ">
            <div className=" flex flex-col w-1/2  justify-center pl-5 ">
              <h2 className="text-5xl font-menlob flex justify-center pb-20">
                {englishdata.secondSection.title}
              </h2>
              <p className="text-3xl text-start tracking-wide leading-relaxed ">
                {englishdata.secondSection.content}
              </p>
            </div>
          </section>
          <section className="flex justify-start ">
            <div className=" flex flex-col w-1/2  justify-center pr-5 ">
              <h2 className="text-5xl font-menlob flex justify-center pb-20">
                {englishdata.thirdSection.title}
              </h2>
              <p className="text-3xl text-end tracking-wide leading-relaxed ">
                {englishdata.thirdSection.content}
              </p>
            </div>
          </section>
          <section className="flex justify-end  ">
            <div className=" flex flex-col w-1/2  justify-center pl-5">
              <h2 className="text-5xl font-menlob flex justify-center pb-20">
                {englishdata.lastSection.title}
              </h2>
              <p className="text-xl text-start font-menlor  leading-relaxed ">
                {englishdata.lastSection.content}
              </p>
            </div>
          </section>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
