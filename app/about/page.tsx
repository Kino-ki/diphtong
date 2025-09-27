"use client";

import data from "@/data/content.json";
import gsap from "gsap";
import { useLanguage } from "@/app/contexts/LangContext";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function AboutPage() {
  const { language } = useLanguage();
  const { EN, FR } = data;
  const englishabout = EN.aboutPage;
  const frenshabout = FR.aboutPage;
  const pinnedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    });
    if (!pinnedRef.current) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
      const st = ScrollTrigger.create({
        trigger: pinnedRef.current,
        start: "top top",
        endTrigger: ".endtrigger",
        end: "top top",
        pin: true,
        markers: true,
      });
      return () => st.kill();
    });
    return () => {
      mm.revert();
      smoother.kill();
    };
  }, []);

  return (
    <div className="bg-wlite text-diphblack px-20 font-urbanistl">
      {language === "EN" ? (
        <div className="flex">
          <div className="w-[40%]">
            <div
              ref={pinnedRef}
              className=" flex flex-col h-[100svh] border-r border-r-[#a8a6a6]/20 "
            >
              <div className="h-[20%] " />
              <h1 className=" text-9xl h-[80%] ">{englishabout.h1} </h1>
            </div>
          </div>
          <div className="w-[60%] flex flex-col ">
            <div className="h-[100svh] flex flex-col justify-end gap-20 p-20 pb-40">
              <h2 className="text-5xl tracking-widest font-urbanistr">
                {englishabout.h1description}
              </h2>
              <p className="text-2xl tracking-wider ">
                {englishabout.firsttext.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
            </div>
            <div className="h-[100svh] flex flex-col justify-end  p-20 pb-40">
              <h2 className="text-5xl tracking-widest font-urbanistr py-20">
                {englishabout.secondSectionspecial.h3}
              </h2>
              <p className="text-2xl tracking-wider ">
                {englishabout.secondSectionspecial.specialcontent.map(
                  (part, i) =>
                    typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
              <ul className="text-2xl font-urbanistmed py-10 tracking-wider">
                {englishabout.secondSectionspecial.specialarray.map(
                  (spacial, i) => (
                    <li className="py-1" key={i}>
                      {" "}
                      {spacial}{" "}
                    </li>
                  )
                )}
                <p className="text-2xl tracking-wider pt-10">
                  {englishabout.secondSectionspecial.specialend.map((part, i) =>
                    typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                  )}
                </p>
              </ul>
            </div>
            <div className="h-[100svh] flex flex-col justify-end  p-20 pb-40 endtrigger">
              <h2 className="text-5xl tracking-widest font-urbanistr py-20">
                {englishabout.thirdSectionhow.h3}
              </h2>
              <p className="text-3xl tracking-wider ">
                {englishabout.thirdSectionhow.howcontent.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
              <ul className="text-2xl font-urbanistmed py-10 tracking-wider">
                {englishabout.thirdSectionhow.howarray.map((how, i) => (
                  <li className="py-3" key={i}>
                    {typeof how === "string" ? how : <b key={i}>{how.bold}</b>}
                  </li>
                ))}
                <p className="text-2xl tracking-wider pt-10">
                  {/* {englishabout.thirdSectionhow.specialend.map((part, i) =>
                    typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                  )} */}
                </p>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>coucou</div>
      )}
    </div>
  );
}
