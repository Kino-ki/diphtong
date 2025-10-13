import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/language/LangContext";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PreHomeSlides() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const sectionsNameRef = useRef<HTMLDivElement | null>(null);

  const { dictionary } = useLanguage();
  const phslides = dictionary.homepage.horizontalScroll;

  useEffect(() => {
    if (!titleRef.current) return;

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
              start: "top 60%",
              end: "bottom 15%",
              scrub: 2,
              pin: true,
              // markers: true,
            },
          }
        );
        // gsap.fromTo(
        //   sectionsNameRef.current,
        //   {
        //     yPercent: 0,
        //   },
        //   {
        //     yPercent: -50,
        //     scrollTrigger: {
        //       trigger: sectionsNameRef.current,
        //       start: "top bottom",
        //       end: "bottom 60%",
        //       scrub: 1,
        //       // markers: true,
        //     },
        //   }
        // );
      });

      return () => mm.revert();
    }
  }, []);

  return (
    <div className="bg-wlite md:h-auto  h-[60svh] md:pb-20  ">
      <div
        // data-speed="1"
        className="flex flex-col justify-start w-full pb-40"
      >
        <div className="border-b md:border-none  border-black my-12 md:my-0  ">
          <h2
            ref={titleRef}
            className="flex text-start  w-full text-[16vw]  font-urbanistr font-semibold md:font-medium tracking-wider md:-mb-0 -mb-5 text-black capitalize"
          >
            {phslides.intro.h2}
          </h2>
        </div>
        <div
          ref={sectionsNameRef}
          className=" flex flex-col  md:flex-row md:justify-between md:py-5 mdparallax "
        >
          <div
            data-speed="0.65"
            className="flex flex-col gap-5 md:w-[45%]  px-2 md:px-12"
          >
            <p className="text-[#7a7878]  text-lg md:text-4xl/relaxed text-center md:text-start tracking-wider font-urbanistb  ">
              {phslides.intro.subtitle}
            </p>
            <p className="text-2xl/10 text-diphblack">{phslides.intro.text}</p>
          </div>
          <div
            data-speed="1.5"
            className="parallax bg-diphblack  flex flex-col text-base md:text-xl mx-5 md:mx-0 pt-10 md:pt-0  text-wlite font-figtree md:w-[40%]  "
          >
            <h3 className="md:py-10 py-8 md:pl-5 text-center md:text-start ">
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
            <h3 className="md:py-10 py-8 md:pl-5 text-center md:text-start ">
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
