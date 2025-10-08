import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useLanguage } from "@/components/language/LangContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function UpcomingProjects({ speed }: { speed: string }) {
  const { dictionary } = useLanguage();
  const {
    projectsPage: { upcomingProjects },
  } = dictionary;
  const projArray = upcomingProjects.projects;

  return (
    <div
      id={upcomingProjects.id}
      data-speed={speed}
      className="inner h-[110svh]  bg-wlite text-diphblack"
    >
      <div className="flex h-full justify-between ">
        <div className="flex flex-col  lg:px-24 py-10">
          <h2 className="text-8xl capitalize py-20  underline underline-offset-8">
            {upcomingProjects.h1}
          </h2>

          <div className="flex flex-col  ">
            {projArray.map((p, i) => (
              <h3 key={i} className="text-5xl capitalize py-5">
                {p}
              </h3>
            ))}
          </div>
        </div>
        <div className="bg-diphblack w-1/3 h-full"></div>
      </div>
    </div>
  );
}
