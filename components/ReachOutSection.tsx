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
  const textRef = useRef<HTMLDivElement | null>(null);
  const { language } = useLanguage();
  const { EN, FR } = data;

  const englishhome = EN.homepage;
  const frenchhome = FR.homepage;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        // markers: true,
        start: "top center",
        // end: "bottom center",
        scrub: 1,
      },
    });
    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.inOut" }
    )
      .to(textRef.current, {
        opacity: 1,
        duration: 2,
      })
      .to(textRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      });
  }, []);
  return (
    <div ref={textRef} className=" z-40 ">
      <div className="flex  h-full mx-[10%]     ">
        {language === "EN" ? (
          <div className="flex flex-col w-full mt-20  items-center">
            <h1 className=" text-4xl flex flex-col justify-center my-32 font menlor tracking-wider  ">
              {englishhome.reachoutcontent}
            </h1>
            <div className=" flex justify-center items-center  w-3/5 my-auto h-[100svh] ">
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
