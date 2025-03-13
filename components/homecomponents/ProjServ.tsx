"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import { useEffect, useRef, useState } from "react";

export default function ProjServ() {
  const { language } = useLanguage();
  const { EN, FR } = data;
  const worksdetailsRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [hoverIndex, setHoverIndex] = useState<string | null>(null);
  console.log("hoverIndex", hoverIndex);

  const englishdata = EN.projservSection;
  const frenchdata = FR.projservSection;

  const handleMouseEnter = (id: string) => {
    setHoverIndex(id);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  useEffect(() => {});
  return (
    <div className=" flex flex-col  z-50">
      {language === "EN" ? (
        <div className="flex flex-col ">
          <h1 className="flex justify-end font-menlor uppercase tracking-widest text-3xl pr-10 pb-20">
            {englishdata.workstitle}
          </h1>
          {englishdata.works.map((work, i) => (
            <div
              key={work.id}
              onMouseEnter={() => handleMouseEnter(work.id)}
              onMouseLeave={handleMouseLeave}
              className={`${
                i === 1 && "border-t border-b py-10 border-wlite mx-3"
              }  `}
            >
              <h2
                className={`font-urbanistr text-2xl tracking-[0.4rem] my-5 px-10 capitalize `}
              >
                {work.title}
              </h2>
              <div
                ref={(el) => {
                  worksdetailsRefs.current[work.id] = el;
                }}
                className="flex gap-12 px-16 py-10 "
              >
                {work.serv.map((service) => (
                  <div key={service}>
                    <p className="font-urbanistmed text-xl">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <div className="h-[100vh]">
        <h1></h1>
      </div>
    </div>
  );
}
