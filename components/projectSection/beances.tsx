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

export default function BeancesProject() {
  const { dictionary } = useLanguage();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const beancesProject = dictionary.projectsPage.beancesProject;
  return (
    <div
      // id="beances"
      className=" h-[110svh] bg-[#E5E5E5] flex flex-col lg:flex-row text-[#4c4c4c]  md:bg-cover md:bg-bgbeances"
    >
      <div className="2xl:px-[7%]  lg:py-0 flex flex-col justify-center gap-4 lg:gap-12 2xl:gap-0 2xl:justify-evenly h-[70%] md:h-2/3 lg:h-full lg:w-2/3 p-5 md:p-12 2xl:p-20 pt-10 ">
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
        <ul className="flex  text-graytext capitalize gap-6 md:text-xl justify-center md:justify-start ">
          {beancesProject.services.map((s, i) => (
            <li key={i}>{s} </li>
          ))}
        </ul>
        <p className=" font-urbanistr md:text-xl 2xl:text-2xl/10 md:tracking-widest text-pretty ">
          {" "}
          {beancesProject.content.map(renderContentItem)}
        </p>
      </div>
      <div className="bg-bgbeancesmauve lg:w-1/2 h-[30%] md:h-1/2 lg:h-full pt-10 md:pt-0 md:my-auto lg:mx-auto flex flex-col md:justify-center items-center bg-left bg-cover md:bg-auto 2xl:bg-cover">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" w-fit "
        >
          <VisitWebsite
            isHovered={isHovered}
            href={beancesProject.href}
            divClass=" shadow-2xl bg-[#E5E5E5]   2xl:w-80"
            hoverborder="border-[#4c4c4c]"
            border="border-diphblack"
          />
        </div>
      </div>
    </div>
  );
}
