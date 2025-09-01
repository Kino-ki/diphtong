import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);

export default function PreHomeSlides() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const sectionsNameRef = useRef<HTMLDivElement | null>(null);

  const { language } = useLanguage();

  const { EN, FR } = data;
  const englishslides = EN.horizontalScroll;
  const frenchslides = FR.horizontalScroll;

  useEffect(() => {
    // -------------------------H1 ANIMATIOON--------------------------------------------------------
    if (!titleRef.current) return;
    console.log("fuck it", ScrollSmoother.get()?.content());

    const mm = gsap.matchMedia();

    mm.add(
      // -------------------DESKTOP-----------------------------------------

      "(min-width: 1024px)",
      () => {
        ScrollTrigger.create({
          trigger: titleRef.current?.parentElement?.parentElement,
          start: "top 60%",
          end: "center top",
          pin: true,
          pinSpacing: true, // keeps space so layout doesn't jump
          // markers: true,
        });

        gsap.to(titleRef.current, {
          xPercent: -35.5,
          yPercent: 0,
          scale: 0.25,
          ease: "sine.inOut",
          duration: 2,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "bottom 50%",
            end: "bottom top",
            scrub: 2,
            // markers: true,
          },
        });
      }
    );

    // ------------------Mobile=----------------------------------------

    mm.add("(max-width: 1023px)", () => {
      ScrollTrigger.create({
        trigger: titleRef.current?.parentElement?.parentElement, // the bg-wlite div
        start: "top 75%",
        end: "top center",
        pin: true,
        pinSpacing: true, // keeps space so layout doesn't jump
        // markers: true,
      });
      gsap.to(titleRef.current, {
        xPercent: -10,
        yPercent: 0,
        scale: 0.7,
        ease: "sine.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
          //   markers: true,
        },
      });
    });

    // -------------------------CONTENT ANIMATIOON--------------------------------------------------------

    const parallaxEffect = document.querySelector(".parallax");
    const desktopparallaxEffect = document.querySelector(".mdparallax");
    if (!sectionsNameRef) return;

    if (sectionsNameRef) {
      const mm2 = gsap.matchMedia();

      // -------------------DESKTOP-----------------------------------------
      mm2.add("(min-width: 1024px)", () => {
        const parentdivtl = gsap.timeline({
          scrollTrigger: {
            trigger: desktopparallaxEffect,
            start: "top center",
            end: "top 20%",
            // markers: true,
            pin: false,
            scrub: 1,
          },
        });
        parentdivtl.fromTo(
          desktopparallaxEffect,
          {
            yPercent: 120,
            duration: 3,
            ease: "none",
          },
          {
            yPercent: 30,
            duration: 3,

            ease: "none",
          }
        );

        const childivtl = gsap.timeline({
          scrollTrigger: {
            trigger: parallaxEffect,
            start: "top bottom",
            end: "bottom top",
            // markers: true,
            pin: false,
            scrub: 1,
          },
        });

        childivtl.fromTo(
          parallaxEffect,
          {
            yPercent: 10,
            duration: 3,
            ease: "none",
          },
          {
            yPercent: -60,
            duration: 3,

            ease: "none",
          }
        );
      });

      // ------------------Mobile=----------------------------------------

      mm2.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: desktopparallaxEffect,
            start: "top bottom",
            end: "top 20%  ",
            // markers: true,
            pin: false,
            scrub: 1,
          },
        });
        tl.fromTo(
          desktopparallaxEffect,
          {
            yPercent: 30,
            duration: 3,
            ease: "none",
          },
          {
            yPercent: 0,
            duration: 3,

            ease: "none",
          }
        );
      });
    }
  }, []);

  return (
    <div className="bg-wlite md:h-[150svh]  h-[120svh] md:pb-20 ">
      {language === "EN" ? (
        <div className="flex flex-col justify-start w-full pb-40">
          <div className="border-b md:h-1 md:border-none  border-black my-12 md:my-0  ">
            <p
              ref={titleRef}
              className="flex text-start  w-full text-[6vw]  font-urbanistr font-semibold md:font-medium tracking-wider md:-mb-0 -mb-5 text-black capitalize"
            >
              {englishslides.intro.h1}
            </p>
          </div>
          <div className=" flex flex-col  md:flex-row md:justify-between md:py-5 mdparallax ">
            <p className="text-[#7a7878]  text-lg md:text-3xl/relaxed text-center md:text-start tracking-wider font-urbanistb  md:w-[45%] px-2 md:px-10">
              {englishslides.intro.text}
            </p>
            <div
              ref={sectionsNameRef}
              className="parallax bg-diphblack  flex flex-col text-base md:text-xl mx-5 md:mx-0 pt-10 md:pt-0  text-wlite font-figtree md:w-[40%]  "
            >
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
