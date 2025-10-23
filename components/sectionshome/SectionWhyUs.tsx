"use client";
import { useLanguage } from "@/components/language/LangContext";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export default function SectionWhyUs() {
  const { dictionary } = useLanguage();
  const whyus = dictionary.homepage.whyus;

  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    bgRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        {
          backgroundColor: "#c3c3c3",
        },
        {
          backgroundColor: "#191919",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "top 60%",
            scrub: 1,
            // markers: true,
          },
        }
      );
    });
  });

  return (
    <div id="" className="">
      <div className="flex flex-col bg-wlite font-urbanistr">
        <div className="h-[95svh] flex flex-col lg:px-10 ">
          <div className="w-2/5 flex flex-col gap-[3rem]  ">
            <h2 className="text-5xl text-diphblack lg:pt-[10.75rem] ">
              {whyus.h2}
            </h2>
            <p className="text-[#595959] text-3xl">{whyus.content}</p>
          </div>
          <div className="h-full flex flex-col justify-center px-[8rem] ">
            <h4 className="text-black text-center text-5xl font-urbanistl leading-[4rem] ">
              {whyus.h4}
            </h4>
          </div>
        </div>
        {/* ----------------------------PILLARS---------------------------------- */}
        <div className="h-[100svh] flex flex-col gap-10 ">
          <h3 className="font-menlor text-4xl text-diphblack px-14">
            {" "}
            {whyus.h3}{" "}
          </h3>
          <ul className="flex flex-col gap-10 w-full">
            {whyus.pillars.map((pillar, i) => (
              <li
                key={i}
                className={`flex ${i === 1 ? "justify-end" : "justify-start"}`}
              >
                <div
                  ref={(el) => {
                    bgRefs.current[i] = el;
                  }}
                  className="flex flex-col justify-center gap-5 text-3xl text-start w-2/3 bg-diphblack  h-[23svh] px-20 "
                >
                  <h4>
                    {" "}
                    <b> {pillar.title} </b>
                  </h4>
                  <p> {pillar.content} </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
