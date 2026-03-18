import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useLanguage } from "@/components/language/LangContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function UpcomingProjects() {
  const { dictionary } = useLanguage();
  const {
    projectsPage: { upcomingProjects },
  } = dictionary;
  const projArray = upcomingProjects.projects;

  return (
    <div
      id={upcomingProjects.id}
      className=" h-[110svh] bg-diphblack  md:px-12 px-5  "
    >
      <div className="flex h-full justify-between  bg-wlite text-diphblack">
        <div className="flex flex-col px-5 md:px-16 2xl:px-24 py-10 lg:w-3/4">
          <h2 className="text-4xl md:text-6xl lg:text-5xl 2xl:text-7xl capitalize py-12 md:py-20  underline underline-offset-8">
            {upcomingProjects.h1}
          </h2>

          <div className="flex flex-col  ">
            {projArray.map((p, i) => (
              <h3
                key={i}
                className={`text-2xl md:text-4xl lg:text-3xl  capitalize ${
                  i === 1 ? " py-6 2xl:py-10" : ""
                }`}
              >
                {p}
              </h3>
            ))}
          </div>
        </div>
        <div className="bg-diphblack w-1/2 h-full  lg:flex hidden"></div>
      </div>
    </div>
  );
}
