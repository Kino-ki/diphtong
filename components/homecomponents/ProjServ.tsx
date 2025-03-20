"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjServ() {
  gsap.registerPlugin(ScrollTrigger);

  const { language } = useLanguage();
  const { EN, FR } = data;
  const worksdetailsRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [sectionIndex, setSectionIndex] = useState<string | null>(null);
  console.log("hoverIndex", sectionIndex);

  const englishdata = EN.projservSection;
  const frenchdata = FR.projservSection;
  // console.log(frenchdata);

  const handleMouseEnter = (id: string) => {
    setSectionIndex(id);
  };
  const handleMouseLeave = () => {
    setSectionIndex(null);
  };

  useEffect(() => {
    if (!sectionIndex) return;
    const target = worksdetailsRefs.current[sectionIndex];
    console.log("target", target);

    if (!target) return;

    // gsap.to(target, {
    //   height: "auto",
    //   duration: 1,
    //   scrub: 1,
    //   ease: "power2.out",
    // });

    // return () => {
    //   gsap.to(target, {
    //     height: 0,
    //     opacity: 0,
    //     duration: 1.5,
    //     ease: "power2.inOut",
    //   });
    // };
  }, [sectionIndex]);
  return (
    <div className=" flex flex-col  z-50">
      {language === "EN" ? (
        <div className="flex flex-col ">
          <h1 className="flex justify-end font-menlob uppercase tracking-widest text-4xl pr-10 pb-20">
            {englishdata.workstitle}
          </h1>
          {/* -----------------PROJECTS List ------------------- */}
          {englishdata?.works.map((work, i) => (
            <section
              key={work.id}
              onMouseEnter={() => handleMouseEnter(work.id)}
              onMouseLeave={handleMouseLeave}
              className={`${
                i === 1 && "border-t border-b py-10 border-wlite mx-3"
              } overflow-hidden  bg-red-600`}
            >
              <div className="flex flex-col ">
                <h2
                  className={`font-urbanistmed text-3xl uppercase tracking-[0.4rem] my-5 px-10 `}
                >
                  {work.title}
                </h2>
                <div className="flex gap-10 px-12 ">
                  {work.serv.map((service) => (
                    <p key={service} className="font-urbanistr text-base">
                      {service}
                    </p>
                  ))}
                </div>
              </div>
              <div
                ref={(el) => {
                  worksdetailsRefs.current[work.id] = el;
                }}
                className=" inner flex justify-between px-12 py-20 "
              >
                <div>
                  <Image
                    src={work.imageSrc}
                    alt="project image"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="flex flex-col justify-around w-1/2 font-urbanistr text-xl">
                  <div className="w-2/3 mx-auto">
                    <p>{work.description}</p>
                  </div>
                  <div className="bg-wlite/80 w-3/4 mx-auto p-10 rounded-xl text-black text-center flex flex-col gap-8">
                    <p>{work.testimonial}</p>
                    <p className="text-base font-menlor"> {work.author} </p>
                  </div>
                  <button
                    type="button"
                    className="outline-1 outline mx-auto p-3 px-6 rounded-md"
                  >
                    <p className="tracking-wider font-menlor ">
                      Discover Project
                    </p>
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
