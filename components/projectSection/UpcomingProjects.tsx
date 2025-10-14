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
        <div className="flex flex-col  px-16 2xl:px-24 py-10 w-3/4">
          <h2 className="text-6xl 2xl:text-8xl capitalize py-20  underline underline-offset-8">
            {upcomingProjects.h1}
          </h2>

          <div className="flex flex-col  ">
            {projArray.map((p, i) => (
              <h3
                key={i}
                className={`text-4xl 2xl:text-5xl capitalize ${
                  i === 1 ? " py-6 2xl:py-10" : ""
                }`}
              >
                {p}
              </h3>
            ))}
          </div>
        </div>
        <div className="bg-diphblack w-1/2 h-full"></div>
      </div>
    </div>
  );
}
