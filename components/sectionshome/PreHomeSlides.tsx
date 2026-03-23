import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useLanguage } from "@/components/language/LangContext";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useGSAP } from "@gsap/react";

export default function PreHomeSlides() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const sectionsNameRef = useRef<HTMLDivElement | null>(null);

  const { dictionary, language } = useLanguage();
  const phslides = dictionary.homepage.horizontalScroll;

  useGSAP(
    () => {
      const title = titleRef.current;
      if (!title) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          title,
          { scale: 1, xPercent: 0.5 },
          {
            scale: 0.3,
            transformOrigin: "left left",
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 480px",
              end: "+=500",
              scrub: 1,
              pin: true,
              pinSpacing: false,
              // markers: true,
            },
          },
        );
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          title,
          { scale: 1 },
          {
            scale: 0.5,
            yPercent: 40,
            transformOrigin: "left left",
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 70%",
              end: "+=500",
              scrub: 1,
              pin: true,
              pinSpacing: true,
              // markers: true,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionsNameRef, dependencies: [language] },
  );

  return (
    <div className="bg-wlite md:h-auto  lg:pb-20  ">
      <div className="flex flex-col justify-start w-full pb-40 ">
        <div className=" pt-8 mb-10 lg:mb-80 2xl:mb-52 px-5 md:px-10 lg:px-0 flex flex-col justify-end ">
          <h2
            data-speed="0.9"
            ref={titleRef}
            className="flex  text-center md:text-start w-full  text-[16vw]  font-urbanistl  tracking-wider text-diphblack capitalize"
          >
            {phslides.intro.h2}
          </h2>
        </div>
        <div
          ref={sectionsNameRef}
          className=" flex flex-col  lg:flex-row md:justify-between items-center   "
        >
          <div
            data-speed="0.9"
            className="flex flex-col gap-5 lg:w-1/2 2xl:w-[45%]  px-5 md:px-10"
          >
            <p className="text-[#7a7878]  text-lg md:text-3xl lg:text-3xl/10 2xl:text-4xl/10 text-start tracking-wider font-urbanistb  ">
              {phslides.intro.subtitle}
            </p>
            <p className=" md:text-lg lg:text-xl/8 2xl:text-2xl/10 text-diphblack">
              {phslides.intro.text}
            </p>
          </div>
          <div className=" lg:bg-diphblack  flex flex-col justify-center text-base md:text-xl lg:text-lg 2xl:text-xl mx-5 lg:mx-0 mt-20 lg:mt-0 text-diphblack lg:text-wlite font-figtree w-full lg:w-[40%] h-fit">
            <h3 className="md:py-10 py-8 px-5 text-center lg:text-start h-fit border border-diphblack ">
              {" "}
              {phslides.firstSlide.h3.map((p) =>
                typeof p === "string" ? p : p.gray,
              )}
            </h3>
            <h3 className="w-full px-5 border-b border-t lg:border-wlite md:py-10 py-8 text-center lg:text-start">
              {phslides.secondSlide.h3.map((p) =>
                typeof p === "string" ? p : p.gray,
              )}
            </h3>
            <h3 className="md:py-10 py-8 px-5  lg:text-start h-fit text-center border border-diphblack">
              {phslides.thirdSlide.h3.map((p) =>
                typeof p === "string" ? p : p.gray,
              )}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
