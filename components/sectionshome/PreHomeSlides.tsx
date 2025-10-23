import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language/LangContext";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useGSAP } from "@gsap/react";

export default function PreHomeSlides() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const sectionsNameRef = useRef<HTMLDivElement | null>(null);

  const { dictionary } = useLanguage();
  const phslides = dictionary.homepage.horizontalScroll;
  const [speed, setSpeed] = useState("1.3");

  useEffect(() => {
    const updateSpeed = () => {
      setSpeed(window.innerWidth < 900 ? "0.9" : "1.3");
    };
    updateSpeed(); // set once on mount
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  useGSAP(() => {
    if (!titleRef.current) return;
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);

    if (titleRef.current) {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          titleRef.current,
          { scale: 1, xPercent: 0.5 },
          {
            scale: 0.4,
            transformOrigin: "left left",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 480px",
              end: "+=500",
              scrub: 1,
              pin: true,
              pinSpacing: false,
              // markers: true,
            },
          }
        );
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          titleRef.current,
          { scale: 1, xPercent: 0.5 },
          {
            scale: 0.9,
            transformOrigin: "left left",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 70%",
              end: "+=500",
              scrub: 1,
              pin: true,
              // pinSpacing: false,
              // markers: true,
            },
          }
        );
      });

      return () => mm.revert();
    }
  }, []);

  return (
    <div className="bg-wlite md:h-auto  lg:pb-20  ">
      <div className="flex flex-col justify-start w-full pb-40">
        <div className=" my-12 mb-20 lg:mb-80 2xl:mb-48  ">
          <h2
            data-speed="0.9"
            ref={titleRef}
            className="flex text-start  w-full  text-[16vw]  font-urbanistr font-semibold md:font-medium tracking-wider md:-mb-0  text-black capitalize"
          >
            {phslides.intro.h2}
          </h2>
        </div>
        <div
          ref={sectionsNameRef}
          className=" flex flex-col  lg:flex-row md:justify-between md:py-5  "
        >
          <div
            data-speed="0.9"
            className="flex flex-col gap-5 lg:w-1/2 2xl:w-[45%]  px-5 lg:px-6 2xl:px-12"
          >
            <p className="text-[#7a7878]  text-lg md:text-3xl lg:text-3xl/10 2xl:text-4xl/relaxed text-start tracking-wider font-urbanistb  ">
              {phslides.intro.subtitle}
            </p>
            <p className=" md:text-lg lg:text-xl/8 2xl:text-2xl/10 text-diphblack">
              {phslides.intro.text}
            </p>
          </div>
          <div
            data-speed={speed}
            className=" bg-diphblack  flex flex-col text-base md:text-xl lg:text-lg 2xl:text-xl mx-5 lg:mx-0 mt-20 lg:mt-0  text-wlite font-figtree lg:w-[40%] h-fit  "
          >
            <h3 className="md:py-10 py-8 md:pl-5 text-center md:text-start h-fit ">
              {" "}
              {phslides.firstSlide.h3.map((p) =>
                typeof p === "string" ? p : p.gray
              )}
            </h3>
            <h3 className="w-full md:pl-5 border-b border-t border-wlite md:py-10 py-8 text-center md:text-start ">
              {phslides.secondSlide.h3.map((p) =>
                typeof p === "string" ? p : p.gray
              )}
            </h3>
            <h3 className="md:py-10 py-8 md:pl-5 text-center md:text-start h-fit ">
              {phslides.thirdSlide.h3.map((p) =>
                typeof p === "string" ? p : p.gray
              )}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
