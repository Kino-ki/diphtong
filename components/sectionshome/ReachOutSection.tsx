"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/language/LangContext";
import ContactForm from "../ContactForm";
import CalendlyWidget from "@/components/CalendlyWidget";

gsap.registerPlugin(ScrollTrigger);
export default function ReachOutSection() {
  const { language, dictionary } = useLanguage();
  const reachout = dictionary.homepage.reachoutsection;

  return (
    <div className="flex  h-full   relative py-40 ">
      <div className="flex flex-col w-full md:mt-5  items-center relative">
        <h2 className=" text-[6rem] flex text-center w-[80%] justify-center  my-16 lg:mt-3 font menlor tracking-wide leading-tight  ">
          {reachout.h2}
        </h2>
        <p className="lg:py-10 text-2xl  w-[60%] "> {reachout.content} </p>
        <div className=" flex justify-center items-center md:w-3/5 md:mt-20 my-10  h-[80svh] ">
          <ContactForm lang={language} />
        </div>
        <div className="w-full flex justify-center ">
          <CalendlyWidget />
        </div>
      </div>
    </div>
  );
}
