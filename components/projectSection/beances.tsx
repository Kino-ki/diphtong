import Image from "next/image";
import beancestwo from "@/public/images/projectsPage/beancestwo.svg";
import beancestitle from "@/public/images/projectsPage/beancesh1.svg";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useLanguage } from "@/components/language/LangContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { renderContentItem } from "../HelperFunctions";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function BeancesProject({ speed }: { speed: string }) {
  const { language, dictionary } = useLanguage();

  const beancesProject = dictionary.projectsPage.beancesProject;
  return (
    <div
      data-speed={speed}
      className="inner h-[120svh] bg-white flex flex-col  px-5  pt-16 md:pt-0 bg-beancesflowerjmobile bg-bottom bg-auto bg-no-repeat  md:bg-left  text-[#4c4c4c]  md:bg-cover md:bg-bgbeances"
    >
      <div className="lg:p-[5%] py-20 md:pl-[7%] flex md:flex-row flex-col gap-5 md:items-end ">
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
      <div className="flex md:flex-row flex-col md:justify-end ">
        <p className="md:w-1/2 font-urbanistr md:text-2xl/loose md:tracking-widest text-pretty ">
          {" "}
          {beancesProject.content.map(renderContentItem)}
        </p>
        <div className=" flex flex-col text-lg font-menlob gap-10 pt-20  lg:pt-0 pr-[5%] lg:w-1/4 mx-auto lg:mx-0">
          <button
            type="button"
            className="p-5 rounded-lg border border-[#4c4c4c] capitalize  "
          >
            {" "}
            {language === "EN" ? "discover project" : "découvrir"}
          </button>
          <button
            type="button"
            className="p-5 rounded-lg bg-white border border-[#4c4c4c] capitalize"
          >
            <a href={beancesProject.href} target="_blank">
              {language === "EN" ? "visit website" : "visiter site web"}
            </a>
          </button>
        </div>
      </div>
      <div className="hidden md:flex justify-center pt-[2%]">
        <Image
          src={beancestwo}
          width={1000}
          height={200}
          alt="beances picture"
          className="pointer-events-none"
        />
      </div>
    </div>
  );
}
