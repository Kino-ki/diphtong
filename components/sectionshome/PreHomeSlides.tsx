import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PreHomeSlides() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const sectionsNameRef = useRef<HTMLDivElement | null>(null);

  const { language } = useLanguage();

  const { EN, FR } = data;
  const englishslides = EN.horizontalScroll;
  const frenchslides = FR.horizontalScroll;

  useEffect(() => {
    if (!titleRef.current) return;

    if (titleRef.current) {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          titleRef.current,
          { scale: 1, xPercent: 0.4 }, // starting size
          {
            scale: 0.4, // target size while scrolling
            transformOrigin: "left left",
            ease: "none",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 70%",
              end: "bottom 20%",
              scrub: true, // smooth scrubbing
              pin: true, // keep element pinned
              // markers: true, // debug
            },
          }
        );
        gsap.fromTo(
          sectionsNameRef.current,
          {
            yPercent: 0,
          },
          {
            yPercent: -30,
            scrollTrigger: {
              trigger: sectionsNameRef.current,
              start: "top bottom",
              end: "bottom 60%",
              scrub: 1,
              // markers: true,
            },
          }
        );
      });

      return () => mm.revert();
    }
  }, []);

  return (
    <div className="bg-wlite md:h-auto  h-[120svh] md:pb-20 ">
      {language === "EN" ? (
        <div className="flex flex-col justify-start w-full pb-40">
          <div className="border-b md:border-none  border-black my-12 md:my-0  ">
            <h3
              ref={titleRef}
              className="flex text-start  w-full text-[6vw]  font-urbanistr font-semibold md:font-medium tracking-wider md:-mb-0 -mb-5 text-black capitalize"
            >
              {englishslides.intro.h1}
            </h3>
          </div>
          <div
            ref={sectionsNameRef}
            className=" flex flex-col  md:flex-row md:justify-between md:py-5 mdparallax "
          >
            <p className="text-[#7a7878]  text-lg md:text-3xl/relaxed text-center md:text-start tracking-wider font-urbanistb  md:w-[45%] px-2 md:px-5">
              {englishslides.intro.text}
            </p>
            <div className="parallax bg-diphblack  flex flex-col text-base md:text-xl mx-5 md:mx-0 pt-10 md:pt-0  text-wlite font-figtree md:w-[40%]  ">
              <p className="md:py-10 py-8 md:pl-5 text-center md:text-start ">
                {" "}
                {englishslides.firstSlide}
              </p>
              <p className="w-full md:pl-5 border-b border-t border-wlite md:py-10 py-8 text-center md:text-start ">
                {englishslides.secondSlide}
              </p>
              <p className="md:py-10 py-8 md:pl-5 text-center md:text-start ">
                {englishslides.thirdSlide}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-start w-full pb-40">
          <p
            ref={titleRef}
            className="flex  text-start w-full text-[12vw]  font-urbanistr tracking-wider   text-[#323232] capitalize"
          >
            {frenchslides.intro.h1}
          </p>
          <div className=" flex flex-col md:flex-row md:justify-between ">
            <p className="text-[#999696] text-md md:text-3xl/relaxed tracking-wider font-urbanistb  md:w-2/5 px-2 md:px-10">
              {frenchslides.intro.text}
            </p>
            <div
              ref={sectionsNameRef}
              className="parallax flex flex-col text-xl md:text-base  text-[#323232] font-menlor md:w-1/3  "
            >
              <p className="py-10 pl-5"> {frenchslides.firstSlide}</p>
              <p className="w-full pl-5 border-b border-t border-[#999696] py-10">
                {frenchslides.secondSlide}
              </p>
              <p className="py-10 pl-5">{frenchslides.thirdSlide}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
