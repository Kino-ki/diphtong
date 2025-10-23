"use client";
import { useLanguage } from "@/components/language/LangContext";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function SectionWhyUs() {
  const { dictionary } = useLanguage();
  const whyus = dictionary.homepage.whyus;

  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    bgRefs.current.forEach((el) => {
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("min-width:1024px", () => {
        gsap.fromTo(
          el,
          {
            backgroundColor: "#c3c3c3",
          },
          {
            backgroundColor: "#191919",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 60%",
              scrub: 1,
              markers: true,
            },
          }
        );
      });
      mm.add("max-width:1023px", () => {
        gsap.fromTo(
          el,
          {
            backgroundColor: "#c3c3c3",
          },
          {
            backgroundColor: "#191919",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 60%",
              scrub: 1,
              markers: true,
            },
          }
        );
      });
      return () => {
        mm.revert();
      };
    });
  });

  return (
    <div id="" className="">
      <div className="flex flex-col bg-wlite font-urbanistr">
        <div className="lg:h-[95svh] flex flex-col px-5 lg:px-10 ">
          <div className=" md:w-4/5 lg:w-1/2 2xl:w-2/5 flex flex-col gap-6 md:gap-12 lg:gap-[3rem]  ">
            <h2 className=" text-3xl md:text-5xl lg:text-4xl 2xl:text-5xl text-diphblack pt-12 md:pt-20 lg:pt-[10.75rem] ">
              {whyus.h2}
            </h2>
            <p className="text-[#595959]  text-lg md:text-2xl  2xl:text-3xl">
              {whyus.content}
            </p>
          </div>
          <div className="h-[50svh] lg:h-full  flex flex-col justify-center px-5 lg:px-[8rem] ">
            <h4 className="text-black text-center text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-urbanistl leading-10 lg:leading-[4rem] font-semibold ">
              {whyus.h4}
            </h4>
          </div>
        </div>
        {/* ----------------------------PILLARS---------------------------------- */}
        <div className="lg:h-[100svh] flex flex-col gap-10 ">
          <h3 className="font-menlor text-xl lg:text-3xl 2xl:text-4xl text-diphblack px-5 md:px-10 lg:px-14">
            {" "}
            {whyus.h3}{" "}
          </h3>
          <ul className="flex flex-col gap-10 w-full">
            {whyus.pillars.map((pillar, i) => (
              <li
                key={i}
                className={`flex ${i === 1 ? "justify-end" : "justify-start"}`}
              >
                <div
                  ref={(el) => {
                    bgRefs.current[i] = el;
                  }}
                  className="flex flex-col justify-center gap-5 lg:text-2xl 2xl:text-3xl text-start w-full lg:w-2/3 bg-diphblack lg:py-8 2xl:py-16 px-20 "
                >
                  <h4>
                    {" "}
                    <b> {pillar.title} </b>
                  </h4>
                  <p> {pillar.content} </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
