"use client";
import { useLanguage } from "@/components/language/LangContext";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function SectionWhyUs() {
  const { dictionary } = useLanguage();
  const whyus = dictionary.homepage.whyus;
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    bgRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        {
          backgroundColor: "#E5E5E5",
        },
        {
          backgroundColor: "#191919",
          scrollTrigger: {
            trigger: el,
            start: "top 65%",
            end: "top 60%",
            scrub: 1,
            // markers: true,
          },
        },
      );
    });
  });

  return (
    <div id="" className="">
      {/* why choose us */}
      <div
        data-speed="1"
        className=" md:h-[100svh]  flex md:flex-row flex-col  "
      >
        <div className="md:w-1/2 h-[100svh] bg-diphblack flex flex-col justify-center pb-20  px-5 lg:px-10">
          <h2
            data-speed="0.6"
            className=" text-4xl md:text-5xl lg:text-5xl 2xl:text-7xl/relaxed text-wlite pt-12 md:pt-20 lg:pt-[10.75rem] text-end "
          >
            {whyus.h21}
          </h2>
        </div>
        <div className="h-[100svh] md:w-1/2 md:h-full z-10 bg-wlite text-diphblack flex flex-col justify-start md:justify-center pb-20 px-5 lg:px-10">
          <h2
            data-speed="0.6"
            className=" text-4xl md:text-5xl lg:text-5xl 2xl:text-7xl/relaxed pt-12 md:pt-20 lg:pt-[10.75rem]  "
          >
            {whyus.h22}
          </h2>
        </div>
      </div>
      <div className="flex flex-col bg-wlite font-urbanistr ">
        {/* content */}
        <div className="flex flex-col md:flex-row ">
          <div className="  md:w-1/2 flex flex-col justify-center h-[100svh] overflow-hidden">
            <ul
              data-speed="0.5"
              className="text-diphblack  px-5 lg:px-6 2xl:px-12 flex flex-col gap-32"
            >
              {whyus.pillars.slice(0, 2).map((pillar, i) => (
                <li key={i} className="flex md:flex-row flex-col  gap-5 ">
                  <p className="font-akira text-3xl md:text-5xl flex flex-col justify-center">
                    0{i + 1}{" "}
                  </p>
                  <div className="flex flex-col">
                    <h4 className="text-4xl"> {pillar.title}</h4>
                    <p className="text-lg  lg:text-xl/8 2xl:text-2xl/10">
                      {pillar.content}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[100svh] md:w-1/2 bg-diphblack flex flex-col justify-evenly gap-60 md:gap-10  px-5 lg:px-10 overflow-hidden">
            <ul data-speed="0.4" className="text-wlite flex flex-col">
              {whyus.pillars.slice(2).map((pillar, i) => (
                <li key={i} className="flex md:flex-row flex-col gap-5">
                  <p className="font-akira text-3xl md:text-5xl flex flex-col justify-center">
                    0{i + 3}{" "}
                  </p>
                  <div className="flex flex-col">
                    <h4 className="text-4xl">{pillar.title}</h4>
                    <p className="text-lg lg:text-xl/8 2xl:text-2xl/10">
                      {pillar.content}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Link
                data-speed="0.4"
                href="/about"
                className="btn flex justify-center hover:ring-1 hover:ring-wlite "
              >
                <p className="font-urbanistmed text-base lg:text-xl ">
                  {whyus.button}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
