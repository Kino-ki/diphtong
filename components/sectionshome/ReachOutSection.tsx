"use client";

import { useLanguage } from "@/components/language/LangContext";
import ContactForm from "../ContactForm";
import CalendlyWidget from "@/components/CalendlyWidget";

export default function ReachOutSection() {
  const { language, dictionary } = useLanguage();
  const reachout = dictionary.homepage.reachoutsection;

  return (
    <div id="widget" className="flex  relative py-10 lg:py-20 px-5 lg:px-10 ">
      <div className="flex flex-col lg:flex-row justify-between md:mt-5 gap-5 lg:gap-0 font-urbanistr  relative">
        <div className="flex flex-col lg:w-1/2 gap-8 lg:gap-0 ">
          <h2 className=" text-[2.5rem]  lg:text-[3.5rem] xl:text-[4rem] 2xl:text-8xl flex  md:w-[80%]  lg:mt-3  text-start ">
            {reachout.h2}
          </h2>
          <p className="lg:py-10 text-lg md:text-xl   lg:w-[80%] ">
            {" "}
            {reachout.content}{" "}
          </p>
          <div className="w-full flex lg:justify-start py-5 lg:py-0">
            <CalendlyWidget />
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-1/2">
          <div className=" flex justify-center items-center w-full  md:mt-20 mt-10 h-[80svh] lg:h-[80svh] ">
            <ContactForm lang={language} />
          </div>
        </div>
      </div>
    </div>
  );
}
