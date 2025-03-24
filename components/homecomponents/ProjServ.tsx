"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function ProjServ() {
  gsap.registerPlugin(ScrollTrigger);

  const { language } = useLanguage();
  const { EN, FR } = data;
  const worksdetailsRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const workstitlesRefs = useRef<Record<string, HTMLElement | null>>({});
  // const [sectionIndex, setSectionIndex] = useState<string | null>(null);

  const englishdata = EN.projservSection;
  const frenchdata = FR.projservSection;

  useEffect(() => {
    englishdata?.works.forEach((work) => {
      const titleEl = workstitlesRefs.current[work.id];

      if (titleEl) {
        ScrollTrigger.create({
          trigger: titleEl,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <div className=" flex flex-col bg-[#9e0000]  pb-4 text-green-100 z-50 border-t-[20px] border-t-wlite ">
      {language === "EN" ? (
        <div className="flex flex-col justify-center  relative">
          <h1 className="absolute z-50 top-[3%] border-b-2 border-[#fff7e0] right-6 font-menlob uppercase tracking-widest text-4xl pr-10">
            {englishdata.workstitle}
          </h1>
          {/* -----------------PROJECTS List ------------------- */}
          {englishdata?.works.map((work) => (
            <section
              key={work.id}
              className="py-10 px-3 overflow-hidden bg-[#9e0000]/90 backdrop-blur-3xl"
              ref={(el) => {
                workstitlesRefs.current[work.id] = el;
              }}
            >
              <div className="flex flex-col pb-5 ">
                <h2
                  ref={(el) => {
                    worksdetailsRefs.current[work.id] = el;
                  }}
                  className="font-menlob font-semibold text-5xl uppercase tracking-[0.4rem] my-5 px-10   "
                >
                  {work.title}
                </h2>
                <div className="flex gap-10 px-12 ">
                  {work.serv.map((service) => (
                    <p
                      key={service}
                      className="font-urbanistr text-base tracking-wider "
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
              <div className=" inner flex justify-between px-12 py-20 ">
                <div>
                  <Image
                    src={work.imageSrc}
                    alt="project image"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="flex flex-col justify-around w-1/2 font-urbanistmed text-xl">
                  <div className="w-4/5 text-2xl  mx-auto">
                    <p>{work.description}</p>
                  </div>
                  <div className="  text-[#fff7e0] border-y-2 border-[#fff7e0] font-menlor w-2/3 text-base mx-auto p-8  text-center flex flex-col gap-8">
                    <p>{work.testimonial}</p>
                    <p className="text-sm "> {work.author} </p>
                  </div>
                  <button
                    type="button"
                    className="outline-1 outline mx-auto p-3 px-6 rounded-md hover:font-semibold transition-all ease-in-out "
                  >
                    <p className="tracking-wider font-menlor  ">
                      Discover Project
                    </p>
                  </button>
                </div>
              </div>
            </section>
          ))}
          <div className=" bg-green-100 text-[#9e0000] h-[95svh] z-50 pt-20  mx-4 flex flex-col ">
            <div className="flex flex-col items-end">
              <h1 className=" border-b-4 border-[#9e0000]  font-menlob uppercase tracking-widest  text-5xl pr-10">
                {englishdata.servicestitle}
              </h1>
            </div>
            <div className="flex mx-auto my-40 ">
              {englishdata?.servicesName.map((service) => (
                <h2
                  className="font-urbanistmed text-5xl border-x-2 px-4 border-[#9e0000] capitalize "
                  key={service}
                >
                  {service}
                </h2>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <h1 className="absolute z-50 top-[3%] border-b-2 border-[#fff7e0] right-6 font-menlob uppercase tracking-widest text-4xl pr-10">
            {frenchdata.workstitle}
          </h1>
          {/* -----------------PROJECTS List ------------------- */}
          {frenchdata?.works.map((work) => (
            <section
              key={work.id}
              className="py-10 px-3 overflow-hidden bg-[#9e0000]/90 backdrop-blur-3xl"
              ref={(el) => {
                workstitlesRefs.current[work.id] = el;
              }}
            >
              <div className="flex flex-col pb-5 ">
                <h2
                  ref={(el) => {
                    worksdetailsRefs.current[work.id] = el;
                  }}
                  className="font-menlob font-semibold text-5xl uppercase tracking-[0.4rem] my-5 px-10   "
                >
                  {work.title}
                </h2>
                <div className="flex gap-10 px-12 ">
                  {work.serv.map((service) => (
                    <p
                      key={service}
                      className="font-urbanistr text-base tracking-wider "
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
              <div className=" inner flex justify-between px-12 py-20 border-t border-[#fff7e0]">
                <div>
                  <Image
                    src={work.imageSrc}
                    alt="project image"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="flex flex-col justify-around w-1/2 font-urbanistmed text-xl">
                  <div className="w-3/4 text-2xl  mx-auto">
                    <p>{work.description}</p>
                  </div>
                  <div className="  text-[#fff7e0] font-menlor w-2/3 text-base bg-black/60 mx-auto p-8 rounded-md  text-center flex flex-col gap-8">
                    <p>{work.testimonial}</p>
                    <p className="text-sm "> {work.author} </p>
                  </div>
                  <button
                    type="button"
                    className="outline-1 outline mx-auto p-3 px-6 rounded-md hover:font-semibold transition-all ease-in-out "
                  >
                    <p className="tracking-wider font-menlor  ">
                      Découvrir le projet
                    </p>
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
