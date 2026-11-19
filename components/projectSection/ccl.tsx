"use client";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLanguage } from "../language/LangContext";
import { renderContentItem } from "../HelperFunctions";
import { VisitWebsite } from "../Buttons";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Ccl() {
  const { dictionary } = useLanguage();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const {
    projectsPage: { CclProject },
  } = dictionary;

  return (
    <div
      className="h-full bg-bgccl bg-cover font-urbanistr flex flex-col lg:flex-row text-black"
      id="ccl"
    >
      <div className="flex flex-col justify-center gap-4 lg:justify-evenly h-[70%] md:h-2/3 lg:h-full lg:w-2/3  p-5 md:p-12 2xl:p-20">
        <div className=" px-10  flex justify-center lg:justify-start items-end md:items-center h-full lg:h-auto">
          <h1 className="text-6xl md:text-4xl text-black font-urbanistr ">
            {" "}
            {CclProject.h1}{" "}
          </h1>
        </div>
        <ul className="flex  text-graytext capitalize gap-6 md:text-xl justify-center md:justify-start lg:px-10 ">
          {CclProject.services.map((s, i) => (
            <li key={i}>{s} </li>
          ))}
        </ul>
        <div className=" lg:px-10 pt-10 md:pt-0 ">
          <p className="md:text-xl 2xl:text-2xl/10  lg:pb-12">
            {CclProject.content.map(renderContentItem)}
          </p>
        </div>
      </div>
      <div className=" lg:w-1/2  bg-left bg-cover bg-no-repeat h-[30%] md:h-1/2 lg:h-full md:my-auto  lg:mx-auto flex flex-col pt-10 md:pt-0 md:justify-center items-center">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" bg-[#FF4D25] "
        >
          <VisitWebsite
            href={CclProject.href}
            isHovered={isHovered}
            divClass="shadow-3xl  text-[#D2ECFF] "
            hoverborder="border-graytext"
            border="border-[#1675BC]"
          />
        </div>
      </div>
    </div>
  );
}
