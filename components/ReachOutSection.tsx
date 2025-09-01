"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/app/contexts/LangContext";
import data from "@/data/content.json";
import ContactForm from "./ContactForm";
import CalendlyWidget from "@/components/CalendlyWidget";

gsap.registerPlugin(ScrollTrigger);
export default function ReachOutSection() {
  // const textRef = useRef<HTMLDivElement | null>(null);
  const { language } = useLanguage();
  const { EN, FR } = data;

  const englishhome = EN.homepage;
  const frenchhome = FR.homepage;

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: textRef.current,
  //       // markers: true,
  //       start: "top center",
  //       end: "bottom bottom",
  //       scrub: 1,
  //     },
  //   });
  //   tl.fromTo(
  //     textRef.current,
  //     { opacity: 0 },
  //     { opacity: 1, duration: 2, ease: "power2.inOut" }
  //   )
  //     .to(textRef.current, {
  //       opacity: 1,
  //       duration: 2,
  //     })
  //     .to(textRef.current, {
  //       opacity: 0,
  //       duration: 2,
  //       ease: "power2.inOut",
  //     });
  // }, []);
  return (
    <div className=" ">
      <div className="flex  h-full      ">
        {language === "EN" ? (
          <div className="flex flex-col w-full md:mt-5  items-center">
            <h2
              // ref={textRef}
              className=" text-[6rem] flex text-center  justify-center  my-16 lg:mt-3   font menlor tracking-wider  "
            >
              {englishhome.reachoutsection.h2}
            </h2>
            <p className="lg:py-10 text-2xl lg:mx-[8%] ">
              {" "}
              {englishhome.reachoutsection.content}{" "}
            </p>
            <div className=" flex justify-center items-center md:w-3/5 md:my-20 my-10  h-[100svh] ">
              <ContactForm lang={language} />
            </div>
            <CalendlyWidget />
          </div>
        ) : (
          <div className="flex flex-col w-full mt-20  items-center ">
            <h1 className=" text-4xl flex flex-col justify-center my-20 font menlor uppercase  ">
              {frenchhome.reachoutcontent}
            </h1>
            <div className=" flex justify-center items-center   w-1/2 my-auto h-[100svh] ">
              <ContactForm lang={language} />
            </div>
            <CalendlyWidget />
          </div>
        )}
      </div>
    </div>
  );
}
