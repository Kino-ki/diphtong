"use client";

import { useLanguage } from "@/components/language/LangContext";
import ContactForm from "../ContactForm";
import CalendlyWidget from "@/components/CalendlyWidget";

export default function ReachOutSection() {
  const { language, dictionary } = useLanguage();
  const reachout = dictionary.homepage.reachoutsection;

  return (
    <div
      id="widget"
      className="flex  relative px-8 md:px-[32px] 2xl:px-[66px]  border-y-2 border-wlite min-h-[80svh] "
    >
      <div className="flex flex-col pt-10 md:pt-20 xl:pb-10 2xl:pb-0   lg:flex-row justify-between  gap-4 md:gap-12 lg:gap-0 font-urbanistr w-full relative">
        <div className="flex flex-col  lg:w-1/2 gap-2 lg:gap-0  ">
          <p className="md:text-lg uppercase font-urbanistmed">
            {reachout.cta}
          </p>
          <p className="font-akira text-6xl md:text-9xl xl:text-8xl 2xl:text-9xl">
            Diph <br /> tong
          </p>
          <h2 className="  flex  md:w-[80%]  lg:mt-3 font-akira lg:text-base text-start ">
            {reachout.h2}
          </h2>
          <p className="lg:py-10 text-sm md:text-lg  lg:w-[80%] ">
            {" "}
            {reachout.content}{" "}
          </p>

          <div className="w-full flex lg:justify-start py-5 lg:py-0">
            <CalendlyWidget />
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-1/2  ">
          <div className="h-[80svh] lg:h-[70svh]">
            <ContactForm lang={language} />
          </div>
        </div>
      </div>
    </div>
  );
}
