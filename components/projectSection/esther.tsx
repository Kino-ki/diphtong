import Image from "next/image";
import estherone from "@/public/images/projectsPage/estherone.svg";
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
      className="inner  h-[110svh] flex flex-col pl-12 lg:py-32 2xl:p-[5%] pt-16  md:bg-diphblack  bg-top bg-cover"
    >
      <div className="flex  flex-col md:flex-row">
        <h1 className="font-estherfont uppercase text-[#CFEB98] text-center md:text-start text-[2.4rem] md:text-7xl ">
          {estherProject.h1}
        </h1>
        <h2 className="uppercase text-lg md:text-2xl flex justify-end  items-end">
          {estherProject.subtitle}{" "}
          <span className="capitalize ">&nbsp;portfolio</span>{" "}
        </h2>
      </div>
      <div className="flex flex-col gap-8 mt-[2%]  ">
        <div className="md:flex flex-col hidden  justify-center h-[25%]  overflow-hidden">
          <Image
            src={estherone}
            width={1800}
            height={100}
            alt="first editor picture"
            className="pointer-events-none"
          />
        </div>
        <div className=" flex md:flex-row pt-10 md:py-10 flex-col md:justify-between">
          <div className="flex justify-end md:justify-start  w-2/3 ">
            <p className=" font-urbanistr text-xl 2xl:text-2xl/10 tracking-widest text-pretty ">
              {estherProject.content.map(renderContentItem)}
            </p>
          </div>
          <div className=" flex flex-col justify-center h-full pb-20  mx-auto w-1/2 items-center">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className=""
            >
              <VisitWebsite
                isHovered={isHovered}
                href={estherProject.href}
                divClass="border-[3px] 2xl:w-80 "
                border="border-graytext"
                hoverborder="border-wlite"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
