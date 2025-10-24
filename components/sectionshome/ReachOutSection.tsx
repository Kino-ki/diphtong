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
      className="flex  h-full   relative py-10 lg:py-40 px-5 md:px-10 lg:px-0 "
    >
      <div className="flex flex-col w-full md:mt-5 gap-5 lg:gap-0 items-center relative">
        <h2 className=" text-[2.5rem] lg:text-[5rem] 2xl:text-[6rem] flex text-center lg:w-[80%] justify-center  my-16 lg:mt-3 font menlor tracking-wide leading-tight  ">
          {reachout.h2}
        </h2>
        <p className="lg:py-10 md:text-xl lg:text-2xl  lg:w-[60%] ">
          {" "}
          {reachout.content}{" "}
        </p>
        <div className=" flex justify-center items-center w-full lg:w-3/5 md:mt-20 mt-10 h-[80svh] lg:h-[80svh] ">
          <ContactForm lang={language} />
        </div>
        <div className="w-full flex justify-center py-5 lg:py-0">
          <CalendlyWidget />
        </div>
      </div>
    </div>
  );
}
