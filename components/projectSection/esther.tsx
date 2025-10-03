import Image from "next/image";
import estherone from "@/public/images/projectsPage/estherone.svg";
import esthertwo from "@/public/images/projectsPage/esthertwo.svg";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLanguage } from "@/components/language/LangContext";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Esther({ speed }: { speed: number }) {
  const { language, dictionary } = useLanguage();
  const estherProject = dictionary.projectsPage.estherProject;
  return (
    <div
      data-speed={speed}
      className="inner  h-[100svh] flex flex-col p-[5%] pt-16  md:bg-diphblack bg-estherprojmobilellipse bg-top bg-cover"
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
        <div className=" md:flex hidden w-full justify-end ml-4">
          <Image
            src={esthertwo}
            width={1000}
            height={100}
            alt="second editor picture"
            className="pointer-events-none"
          />
        </div>
        <div className=" flex md:flex-row pt-10 md:pt-0 flex-col md:justify-between">
          <div className="flex justify-end md:justify-start ">
            <p className=" w-2/3 md:w-1/2 md:-mt-10 font-urbanistr md:text-2xl/loose tracking-widest text-pretty ">
              {estherProject.content}
            </p>
          </div>
          <div className=" flex flex-col  md:text-lg font-menlob gap-10 pt-[3%] mx-auto  pr-[5%] w-2/3 ">
            <button
              type="button"
              className="p-5 rounded-lg border border-wlite capitalize"
            >
              {language === "EN" ? "discover project" : "découvrir"}
            </button>
            <button
              type="button"
              className="p-5 rounded-lg border border-wlite capitalize"
            >
              <a href={estherProject.href} target="_blank">
                {" "}
                {language === "EN" ? "visit website" : "visiter site web"}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
