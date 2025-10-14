"use client";

import gsap from "gsap";
import { useLanguage } from "@/components/language/LangContext";
import founderPic from "@/public/images/founder.png";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GetAQuoteButton } from "@/components/Buttons";
import { renderContentItem } from "@/components/HelperFunctions";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function AboutPage() {
  const { dictionary } = useLanguage();

  const about = dictionary.aboutPage;

  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const bgRefs = useRef<(HTMLElement | null)[]>([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!pinnedRef.current) return;

    ScrollSmoother.create({
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
    });

    const mm = gsap.matchMedia();
    const el = pinnedRef.current;

    mm.add("(min-width:1024px)", () => {
      // Pin left column

      ScrollTrigger.create({
        trigger: el,
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
        bgTriggers.forEach((st) => st.kill());
        mm.revert();
      };
    });
    mm.add("(max-width:1023px)", () => {
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
        bgTriggers.forEach((st) => st.kill());
        mm.revert();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className=" bg-diphblack text-wlite font-urbanistl">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row px-5 md:px-10 lg:px-12 2xl:px-20">
          {/* ----------------------------LEFT SIDE flex col ----------------------------------------------- */}
          <div
            ref={pinnedRef}
            className="lg:w-[40%]  flex flex-col lg:h-[100svh] "
          >
            <div className=" lg:h-[20svh] " />
            <h1 className=" text-8xl md:text-9xl lg:text-8xl/normal 2xl:text-9xl/normal lg:h-[80%] 2xl:pr-20 pt-20 md:py-12 lg:py-0  ">
              {about.h1}{" "}
            </h1>
          </div>
          {/* ----------------------------RIGHT SIDE flex col ----------------------------------------------- */}

          <div className="lg:w-[60%] flex flex-col bg-wlite text-diphblack">
            <div className="h-[100svh] lg:h-[100svh] flex flex-col justify-end gap-12 2xl:gap-20 p-10 md:p-20 2xl:pb-40 border-b-8 border-diphblack">
              <h2 className=" text-3xl/relaxed md:text-5xl/relaxed lg:text-4xl/relaxed 2xl:text-5xl/relaxed tracking-widest font-urbanistr">
                {about.h1description}
              </h2>
              <p className="md:text-xl/8 2xl:text-2xl/10 tracking-wider md:pb-32 pb-0 lg:pb-0 ">
                {about.firsttext.map(renderContentItem)}
              </p>
            </div>

            <div className="2xl:h-[100svh] flex flex-col  justify-end  p-10 md:p-20 2xl:pb-40">
              <h2 className="text-3xl/relaxed md:text-5xl/relaxed lg:text-4xl/relaxed 2xl:text-5xl/relaxed tracking-widest font-urbanistr pb-12 2xl:py-20">
                {about.secondSectionspecial.h3}
              </h2>
              <p className="md:text-xl/8 2xl:text-2xl/10 tracking-wider ">
                {about.secondSectionspecial.specialcontent.map(
                  renderContentItem
                )}
              </p>
              <ul className="md:text-xl/8 2xl:text-2xl font-urbanistmed py-8 2xl:py-12 tracking-wider">
                {about.secondSectionspecial.specialarray.map((spacial, i) => (
                  <li className="py-1" key={i}>
                    {" "}
                    {spacial}{" "}
                  </li>
                ))}
              </ul>
              <p className="md:text-xl/8 2xl:text-2xl/10 font-urbanistr tracking-wider ">
                {about.secondSectionspecial.specialend.map(renderContentItem)}
              </p>
            </div>

            <div className="2xl:h-[100svh] flex flex-col justify-end p-10 md:px-20 2xl:p-20 pb-40  border-b-8 border-diphblack endtrigger">
              <h2 className=" text-3xl/relaxed md:text-5xl/relaxed lg:text-5xl/relaxed tracking-widest font-urbanistr pb-12 2xl:py-20">
                {about.thirdSectionhow.h3}
              </h2>
              <p className="md:text-xl/8 2xl:text-2xl/10 tracking-wider ">
                {about.thirdSectionhow.howcontent.map(renderContentItem)}
              </p>
              <ul className="md:text-lg/8 2xl:text-xl/9 font-urbanistr py-10 tracking-wider">
                {about.thirdSectionhow.howarray.map((how, i) => (
                  <li className="py-1 first-letter:capitalize " key={i}>
                    {typeof how === "string" ? how : <b key={i}>{how.bold}</b>}
                  </li>
                ))}
              </ul>
              <p className="md:text-xl/8 2xl:text-2xl/10 font-urbanistr pb-10">
                {about.thirdSectionhow.maintenance.map(renderContentItem)}
              </p>
              <p className="text-xl md:text-2xl/8 2xl:text-3xl/10 ">
                {about.thirdSectionhow.creationend.map(renderContentItem)}
              </p>
            </div>
          </div>
        </div>
        {/* -------------------------------Second section VALUES & FOUNDER ------------------------------------------------- */}
        <div className="bg-wlite pl-5 md:pl-12 2xl:pl-20 text-diphblack mx-5 md:mx-10 lg:mr-12 2xl:mr-20 flex flex-col gap-12 2xl:gap-0">
          {/* ----------------------------LEFT SIDE flex col ----------------------------------------------- */}
          <div className="w-full 2xl:h-[100svh] flex flex-col justify-start py-10 ">
            <h2 className="text-5xl md:text-6xl tracking-widest font-urbanistr py-12 md:py-20">
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
                      className="md:text-xl 2xl:text-4xl py-8 md:py-10 px-5 bg-diphblack text-wlite"
                    >
                      {value.map(renderContentItem)}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:h-[100svh] flex flex-col md:flex-row justify-between py-10 ">
            <div className="flex flex-col md:w-1/2 ">
              <h2 className="text-5xl md:text-6xl tracking-widest font-urbanistr py-20">
                {about.founderNote.h3}
              </h2>
              <p className="text-lg/loose md:text-2xl 2xl:text-3xl/loose">
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
        <div className="bg-diphblack text-wlite h-[60svh] md:h-[50svh] lg:h-[80svh] flex flex-col gap-20 justify-center px-5 md:px-12 lg:px-0">
          <h3 className="text-3xl md:text-5xl lg:text-6xl  text-center">
            {about.cta}
          </h3>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=" w-fit mx-auto"
          >
            <GetAQuoteButton
              isHovered={isHovered}
              divclass="w-60 md:w-96  text-center  px-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
