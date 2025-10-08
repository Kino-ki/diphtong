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
    <div id={collavoratives.id} data-speed={speed} className="inner h-[110svh]">
      <div className="flex h-full justify-between  ">
        <div className="flex flex-col text-wlite lg:px-24   py-10">
          <h2 className="text-8xl capitalize py-20  underline underline-offset-8">
            {collavoratives.h1}
          </h2>
          {projArray.map((p, i) => (
            <div className="flex flex-col gap-5 py-20" key={i}>
              <a href={p.href} target="_blank">
                <h3 className=" border-b border-transparent hover:border-wlite w-fit transition-all ease-in-out duration-300 text-6xl capitalize">
                  {p.projectName}
                </h3>
              </a>
              <p className="text-2xl/10 w-2/3  p-5 "> {p.projecDescription} </p>
            </div>
          ))}
        </div>
        <div className="h-full bg-wlite w-1/3"></div>
      </div>
    </div>
  );
}
