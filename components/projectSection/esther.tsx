import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLanguage } from "@/components/language/LangContext";
import { renderContentItem } from "../HelperFunctions";
import { VisitWebsite } from "../Buttons";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Esther({ speed }: { speed: number }) {
  const { dictionary } = useLanguage();
  const estherProject = dictionary.projectsPage.estherProject;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      data-speed={speed}
      className="h-full bg-diphblack  font-urbanistr flex flex-col lg:flex-row "
    >
      <div className="flex flex-col justify-center gap-4 lg:gap-16 2xl:gap-12 h-[70%] lg:h-full md:h-2/3  lg:w-2/3  p-5 md:p-12 2xl:p-20 pt-20">
        <div className="  flex   lg:h-auto">
          <div className="flex  flex-col 2xl:flex-row  md:px-5 lg:px-0 ">
            <h1 className="font-estherfont uppercase text-[#CFEB98] md:text-start text-[2.4rem] md:text-7xl lg:text-6xl 2xl:text-7xl ">
              {estherProject.h1}
            </h1>
            <h2 className="uppercase text-lg md:text-2xl flex justify-end  items-end">
              {estherProject.subtitle}{" "}
              <span className="capitalize ">&nbsp;portfolio</span>{" "}
            </h2>
          </div>
        </div>
        <ul className="flex  text-graytext capitalize gap-6 md:text-xl justify-center md:justify-start ">
          {estherProject.services.map((s, i) => (
            <li key={i}>{s} </li>
          ))}
        </ul>
        <div className=" ">
          <p className="md:text-xl 2xl:text-2xl/10 pt-10 md:pt-0 pb-12">
            {estherProject.content.map(renderContentItem)}
          </p>
        </div>
      </div>
      <div className="  lg:w-[45%] 2xl:w-[44.5%] bg-bgesther bg-left-top bg-auto  h-[30%] md:h-1/2 lg:h-full my-auto  lg:mx-auto flex flex-col md:pt-0 pt-10 md:justify-center items-center">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="  "
        >
          <VisitWebsite
            href={estherProject.href}
            isHovered={isHovered}
            divClass="shadow-2xl bg-diphblack   "
            hoverborder="border-graytext"
            border="border-wlite"
          />
        </div>
      </div>
    </div>
  );
}
