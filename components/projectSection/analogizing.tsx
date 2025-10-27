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
      className="h-full bg-[#E5E5E5]  font-urbanistr flex flex-col lg:flex-row text-diphblack"
    >
      <div className="flex flex-col justify-center gap-4 lg:justify-evenly h-[70%] md:h-2/3 lg:h-full lg:w-2/3  p-5 md:p-12 2xl:p-20">
        <div className=" px-10  flex justify-center lg:justify-start items-end md:items-center h-full lg:h-auto">
          <h1 className="text-6xl md:text-8xl text-black font-urbanistr ">
            {" "}
            {AnalogProject.h1}{" "}
          </h1>
        </div>
        <ul className="flex  text-graytext capitalize gap-6 md:text-xl justify-center md:justify-start lg:px-10 ">
          {AnalogProject.services.map((s, i) => (
            <li key={i}>{s} </li>
          ))}
        </ul>
        <div className=" lg:px-10 pt-10 md:pt-0 ">
          <p className="md:text-xl 2xl:text-2xl/10  lg:pb-12">
            {AnalogProject.content.map(renderContentItem)}
          </p>
        </div>
      </div>
      <div className=" lg:w-1/2 bg-bganalogf bg-left-bottom bg-auto h-[30%] md:h-1/2 lg:h-full md:my-auto  lg:mx-auto flex flex-col pt-10 md:pt-0 md:justify-center items-center">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" bg-[#E5E5E5]  "
        >
          <VisitWebsite
            href={AnalogProject.href}
            isHovered={isHovered}
            divClass="shadow-2xl  "
            hoverborder="border-graytext"
            border="border-diphblack"
          />
        </div>
      </div>
    </div>
  );
}
