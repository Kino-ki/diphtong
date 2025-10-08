"use client";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLanguage } from "../language/LangContext";
import { renderContentItem } from "../HelperFunctions";
import { VisitWebsite } from "../Buttons";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Analogizing({ speed }: { speed: string }) {
  const { dictionary } = useLanguage();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const {
    projectsPage: { AnalogProject },
  } = dictionary;

  return (
    <div
      data-speed={speed}
      className="h-full bg-[#E5E5E5]  font-urbanistr flex  text-diphblack"
    >
      <div className="flex flex-col justify-evenly w-2/3  p-20">
        <div className="  flex justify-center">
          <h1 className="text-8xl text-black font-urbanistr ">
            {" "}
            {AnalogProject.h1}{" "}
          </h1>
        </div>
        <div className=" px-10  ">
          <p className="text-2xl/10">
            {AnalogProject.content.map(renderContentItem)}
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-bganalogf h-full my-auto mx-auto flex flex-col justify-center items-center">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" bg-[#E5E5E5]  "
        >
          <VisitWebsite
            href={AnalogProject.href}
            isHovered={isHovered}
            divClass="shadow-2xl border-[3px] "
            hoverborder="border-graytext"
            border="border-diphblack"
          />
        </div>
      </div>
    </div>
  );
}
