import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useLanguage } from "@/components/language/LangContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function CollabProjects({ speed }: { speed: string }) {
  const { dictionary } = useLanguage();
  const {
    projectsPage: { collavoratives },
  } = dictionary;
  const projArray = collavoratives.projects;

  return (
    <div
      id={collavoratives.id}
      data-speed={speed}
      className="inner h-[110svh] bg-wlite  md:px-12 px-5"
    >
      <div className="flex h-full justify-between bg-diphblack  ">
        <div className="flex flex-col text-wlite px-5 md:px-16 2xl:px-24   py-10 lg:w-3/4">
          <h2 className=" text-4xl md:text-6xl 2xl:text-8xl capitalize py-12 md:py-20  underline underline-offset-8">
            {collavoratives.h1}
          </h2>
          {projArray.map((p, i) => (
            <div className="flex flex-col gap-5 " key={i}>
              <a href={p.href} target="_blank">
                <h3 className=" border-b border-transparent hover:border-wlite w-fit transition-all ease-in-out duration-300 text-2xl md:text-4xl 2xl:text-6xl capitalize">
                  {p.projectName}
                </h3>
              </a>
              <p className="md:text-xl 2xl:text-2xl/10 ">
                {" "}
                {p.projecDescription}{" "}
              </p>
            </div>
          ))}
        </div>
        <div className="h-full bg-wlite w-1/2 lg:flex hidden"></div>
      </div>
    </div>
  );
}
