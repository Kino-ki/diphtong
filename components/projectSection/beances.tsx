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
      className="inner h-[110svh] bg-[#E5E5E5] flex flex-col justify-evenly px-5  bg-beancesflowerjmobile bg-bottom bg-auto bg-no-repeat  md:bg-left  text-[#4c4c4c]  md:bg-cover md:bg-bgbeances"
    >
      <div className="lg:px-[7%]  lg:py-0 flex md:flex-row flex-col gap-5 md:items-end ">
        <Image
          src={beancestitle}
          width={600}
          height={100}
          alt="beances editions"
          className="pointer-events-none"
        />
        <h1 className="uppercase text-center md:text-2xl tracking-widest font-menlor">
          {beancesProject.subtitle}
        </h1>
      </div>
      <div className="flex lg:flex-row pb-10  flex-col lg:justify-evenly  ">
        <div className="w-[15%] "></div>
        <div className=" w-[50%] ">
          <p className=" font-urbanistr md:text-2xl/loose md:tracking-widest text-pretty ">
            {" "}
            {beancesProject.content.map(renderContentItem)}
          </p>
        </div>
        <div className=" flex flex-col my-auto pb-20 w-1/5">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=" w-fit "
          >
            <VisitWebsite
              isHovered={isHovered}
              href={beancesProject.href}
              divClass="border-[3px] shadow-2xl w-80"
              hoverborder="border-graytext"
              border="border-diphblack"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
