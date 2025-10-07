"use client";

import gsap from "gsap";
import { useLanguage } from "@/components/language/LangContext";
import founderPic from "@/public/images/founder.png";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GetAQuoteButton } from "@/components/Buttons";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function AboutPage() {
  const { dictionary } = useLanguage();

  const about = dictionary.aboutPage;

  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const bgRefs = useRef<(HTMLElement | null)[]>([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!pinnedRef.current) return;

    // ScrollSmoother (make sure wrapper/content exist in DOM!)
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
      // Pin left column
      const st = ScrollTrigger.create({
        trigger: pinnedRef.current,
        start: "top top",
        endTrigger: ".endtrigger",
        end: "top top",
        pin: true,
        // markers: true,
      });

      // Animate background color on values
      const bgTriggers: ScrollTrigger[] = [];
      bgRefs.current.forEach((el) => {
        if (!el) return;
        const tween = gsap.fromTo(
          el,
          { backgroundColor: "#c3c3c3" },
          {
            backgroundColor: "#191919",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 60%",
              toggleActions: "play none none none",
              // scrub: 1,
              // markers: true,
            },
          }
        );
        bgTriggers.push(tween.scrollTrigger as ScrollTrigger);
      });

      return () => {
        st.kill();
        bgTriggers.forEach((st) => st.kill());
      };
    });

    return () => {
      mm.revert();
      smoother.kill();
    };
  }, []);

  return (
    <div className=" bg-diphblack text-wlite font-urbanistl">
      <div className="flex flex-col">
        <div className="flex px-20">
          {/* ----------------------------LEFT SIDE flex col ----------------------------------------------- */}
          <div
            ref={pinnedRef}
            className="w-[40%]  flex flex-col h-[100svh] border-r border-r-[#888888]/20 "
          >
            <div className="h-[20%] " />
            <h1 className=" text-9xl/normal h-[80%] pr-20  ">{about.h1} </h1>
          </div>
          {/* ----------------------------RIGHT SIDE flex col ----------------------------------------------- */}

          <div className="w-[60%] flex flex-col bg-wlite text-diphblack">
            <div className="h-[100svh] flex flex-col justify-end gap-20 p-20 pb-40 border-b-8 border-diphblack">
              <h2 className="text-5xl/relaxed tracking-widest font-urbanistr">
                {about.h1description}
              </h2>
              <p className="text-2xl/10 tracking-wider ">
                {about.firsttext.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
            </div>
            <div className="h-[100svh] flex flex-col justify-end  p-20 pb-40">
              <h2 className="text-5xl/relaxed tracking-widest font-urbanistr py-20">
                {about.secondSectionspecial.h3}
              </h2>
              <p className="text-2xl/10 tracking-wider ">
                {about.secondSectionspecial.specialcontent.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
              <ul className="text-2xl font-urbanistmed py-10 tracking-wider">
                {about.secondSectionspecial.specialarray.map((spacial, i) => (
                  <li className="py-1" key={i}>
                    {" "}
                    {spacial}{" "}
                  </li>
                ))}
                <p className="text-2xl/10 font-urbanistr tracking-wider pt-10">
                  {about.secondSectionspecial.specialend.map((part, i) =>
                    typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                  )}
                </p>
              </ul>
            </div>
            <div className="h-[100svh] flex flex-col justify-end  p-20 pb-40  border-b-8 border-diphblack endtrigger">
              <h2 className="text-5xl tracking-widest font-urbanistr py-20">
                {about.thirdSectionhow.h3}
              </h2>
              <p className="text-3xl/10 tracking-wider ">
                {about.thirdSectionhow.howcontent.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
              <ul className="text-xl font-urbanistmed py-10 tracking-wider">
                {about.thirdSectionhow.howarray.map((how, i) => (
                  <li className="py-1 first-letter:capitalize " key={i}>
                    {typeof how === "string" ? how : <b key={i}>{how.bold}</b>}
                  </li>
                ))}
              </ul>
              <p className="text-2xl/10 font-urbanistr pb-10">
                {about.thirdSectionhow.maintenance.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
              <p className="text-3xl/10 ">
                {about.thirdSectionhow.creationend.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
            </div>
          </div>
        </div>
        {/* -------------------------------Second section VALUES & FOUNDER ------------------------------------------------- */}
        <div className="bg-wlite pl-20 text-diphblack mr-20">
          {/* ----------------------------LEFT SIDE flex col ----------------------------------------------- */}
          <div className="w-full h-[100svh] flex flex-col justify-start py-10 ">
            <h2 className="text-6xl tracking-widest font-urbanistr py-20">
              {about.fourthsectionValues.h3}
            </h2>
            <div className="">
              <ul className="flex flex-col gap-10">
                {about.fourthsectionValues.valuesArray.map((value, i) => (
                  <li key={i}>
                    <h3
                      ref={(el) => {
                        bgRefs.current[i] = el;
                      }}
                      className="text-4xl py-10 px-5 bg-diphblack text-wlite"
                    >
                      {value.map((v, i) =>
                        typeof v === "string" ? v : <b key={i}> {v.bold} </b>
                      )}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full h-[100svh] flex justify-between py-10 ">
            <div className="flex flex-col w-1/2 ">
              <h2 className="text-6xl tracking-widest font-urbanistr py-20">
                {about.founderNote.h3}
              </h2>
              <p className="text-3xl leading-loose">
                {about.founderNote.content}
              </p>
            </div>
            <div className="">
              <Image
                src={founderPic}
                width={500}
                height={500}
                alt="founder picture"
              />
            </div>
          </div>
          {/* ----------------------------RIGHT SIDE flex col ----------------------------------------------- */}
        </div>
        <div className="bg-diphblack text-wlite h-[80svh] flex flex-col gap-20 justify-center ">
          <h3 className="text-6xl text-center">{about.cta}</h3>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=" w-fit mx-auto"
          >
            <GetAQuoteButton
              isHovered={isHovered}
              divclass="w-96 text-center px-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
