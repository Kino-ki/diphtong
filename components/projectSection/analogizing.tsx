"use client";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLanguage } from "../language/LangContext";
import { renderContentItem } from "../HelperFunctions";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Analogizing({ speed }: { speed: string }) {
  const { dictionary } = useLanguage();
  const {
    projectsPage: { AnalogProject },
  } = dictionary;

  return (
    <div
      data-speed={speed}
      className="h-full  bg-bganalogf bg-contain bg-wlite font-urbanistr p-20 flex-col text-diphblack"
    >
      <div className=" w-1/2 flex justify-center py-8">
        <h1 className="text-8xl text-black font-urbanistr ">
          {" "}
          {AnalogProject.h1}{" "}
        </h1>
      </div>
      <div className="w-2/3 py-16">
        <p className="text-2xl/10">
          {AnalogProject.content.map(renderContentItem)}
        </p>
      </div>
    </div>
  );
}
