import Image from "next/image";
import beancestitle from "@/public/images/projectsPage/beancesh1.svg";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useLanguage } from "@/components/language/LangContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { renderContentItem } from "../HelperFunctions";
import { VisitWebsite } from "../Buttons";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function BeancesProject({ speed }: { speed: string }) {
  const { dictionary } = useLanguage();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const beancesProject = dictionary.projectsPage.beancesProject;
  return (
    <div
      data-speed={speed}
      className="inner h-[110svh] bg-[#E5E5E5] flex  bg-beancesflowerjmobile text-[#4c4c4c]  md:bg-cover md:bg-bgbeances"
    >
      <div className="2xl:px-[7%]  lg:py-0 flex flex-col justify-center gap-16 2xl:gap-0 2xl:justify-evenly w-2/3 p-12 2xl:p-20 ">
        <div>
          <Image
            src={beancestitle}
            width={600}
            height={100}
            alt="beances editions"
            className="pointer-events-none"
          />
          <h1 className="uppercase text-end md:text-2xl tracking-widest font-menlor">
            {beancesProject.subtitle}
          </h1>
        </div>
        <p className=" font-urbanistr text-xl 2xl:text-2xl/10 md:tracking-widest text-pretty ">
          {" "}
          {beancesProject.content.map(renderContentItem)}
        </p>
      </div>
      <div className="bg-bgbeancesmauve w-1/2 h-full my-auto mx-auto flex flex-col justify-center items-center bg-left bg-auto 2xl:bg-cover">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" w-fit "
        >
          <VisitWebsite
            isHovered={isHovered}
            href={beancesProject.href}
            divClass="border-[3px] shadow-2xl bg-[#E5E5E5]  2xl:w-80"
            hoverborder="border-graytext"
            border="border-diphblack"
          />
        </div>
      </div>
    </div>
  );
}
