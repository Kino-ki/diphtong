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
  const textRef = useRef<HTMLDivElement | null>(null);

  const englishdata = EN.projservSection;
  const frenchdata = FR.projservSection;

  function horizontalLoop(items, { speed = 1, reversed = false } = {}) {
    items = gsap.utils.toArray(items);
    const tl = gsap.timeline({ repeat: -1, paused: false });
    let totalWidth = 0;

    items.forEach((el) => {
      totalWidth += el.offsetWidth;
    });

    items.forEach((el, i) => {
      const direction = (i % 2 === 0 ? 1 : -1) * (reversed ? -1 : 1);
      const duration = totalWidth / (speed * 100); // adjust speed multiplier if needed

      tl.to(
        el,
        {
          x: `-=${el.offsetWidth * direction}`,
          duration,
          ease: "none",
        },
        0
      );
    });

    return tl;
  }

  useEffect(() => {
    if (textRef.current) {
      ScrollTrigger.create({
        trigger: textRef.current,
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
    }

    const marqueeElements = textRef.current?.querySelectorAll(".marquee");
    if (marqueeElements?.length) {
      marqueeElements.forEach((el, i) => {
        horizontalLoop([el, el.cloneNode(true)], {
          speed: 1 + i * 0.2,
          reversed: i % 2 !== 0,
        });
      });
    }
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
    <div className=" flex flex-col  bg-wlite pb-4 text-rouge z-50 ">
      {language === "EN" ? (
        <div className="flex flex-col justify-center  relative">
          <div className="overflow-hidden h-[100vh] " ref={textRef}>
            {[
              "top-[5%] scale-125",
              "top-[25%] rotate-180",
              "top-[45%] scale-150",
              "bottom-[15%] rotate-180 scale-50",
              "bottom-1",
            ].map((pos, i) => (
              <div
                key={i}
                className={`marquee absolute ${pos} w-max whitespace-nowrap`}
                style={{
                  left: i % 2 === 0 ? "0" : "auto",
                  right: i % 2 !== 0 ? "0" : "auto",
                }}
              >
                <p className="font-menlor text-[10vw] tracking-widest">
                  FEATURED WORKS&nbsp;&nbsp;FEATURED WORKS&nbsp;&nbsp;FEATURED
                  WORKS&nbsp;FEATURED WORKS&nbsp;FEATURED WORKS&nbsp;FEATURED
                  WORKS
                </p>
              </div>
            ))}
          </div>
          {/* -----------------PROJECTS List ------------------- */}
          {englishdata?.works.map((work) => (
            <section
              key={work.id}
              className="py-10 px-3 overflow-hidden bg-wlite flex justify-between h-[100vh]  backdrop-blur-[150px] scale-"
              ref={(el) => {
                workstitlesRefs.current[work.id] = el;
              }}
            >
              <div className="flex flex-col w-3/5">
                <div className="  ">
                  <h2
                    ref={(el) => {
                      worksdetailsRefs.current[work.id] = el;
                    }}
                    className="font-menlob font-semibold text-8xl uppercase tracking-[0.4rem] my-5    "
                  >
                    {work.title}
                  </h2>
                  <div className="flex gap-4 ">
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

                <div className="flex flex-col h-full justify-around font-urbanistr text-xl">
                  <div className=" text-3xl  w-full pl-5 text-end tracking-wider leading-9">
                    <p>{work.description}</p>
                  </div>
                  <div className="  text-rouge font-menlor text-base mx-auto p-8   flex flex-col gap-8">
                    <p>{work.testimonial}</p>
                    <p className="text-sm "> -{work.author}- </p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col   justify-between py-32  ">
                <Image
                  src={work.imageSrc}
                  alt="project image"
                  width={650}
                  height={700}
                  className="shadow-lg"
                />
                <button
                  type="button"
                  className="outline-1 outline mx-auto p-3 px-6 rounded-md hover:font-semibold transition-all ease-in-out "
                >
                  <p className="tracking-wider text-xl font-menlor  ">
                    Discover Project
                  </p>
                </button>
              </div>
            </section>
          ))}
          {/* -------------------------------------SERVICES PAGE ----------------------------------- */}
          <div className=" bg-green-100 text-black h-[100svh] z-50 pt-20  mx-4 flex flex-col ">
            <div className="flex flex-col items-end">
              <h1 className=" border-b-4 border-rouge  font-menlob uppercase tracking-widest  text-5xl pr-10">
                {englishdata.servicestitle}
              </h1>
            </div>
            <div className="flex flex-col  justify-evenly  h-full my-20 px-96 ">
              {englishdata?.servicesList.map((service, index) => (
                <div key={index} className="flex my-16 relative">
                  <h2 className="font-menlor absolute bottom-0 text-4xl capitalize ">
                    {service.serviceName}
                  </h2>
                  <p className="w-1/2 text-xl absolute top-0 right-0 font-urbanistr tracking-widest">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          {/* <h1 className="absolute z-50 top-[3%] border-b-2 border-[#fff7e0] right-6 font-menlob uppercase tracking-widest text-4xl pr-10">
            {frenchdata.workstitle}
          </h1> */}
          {/* -----------------PROJECTS List ------------------- */}
          {frenchdata?.works.map((work) => (
            <section
              key={work.id}
              className="py-10 px-3 overflow-hidden bg-rouge/90 backdrop-blur-3xl"
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
          {/* -------------------------------------SERVICES PAGE ----------------------------------- */}
          <div className=" bg-green-100 text-rouge h-[95svh] z-50 pt-20  mx-4 flex flex-col ">
            <div className="flex flex-col items-end">
              <h1 className=" border-b-4 border-rouge  font-menlob uppercase tracking-widest  text-5xl pr-10">
                {frenchdata.servicestitle}
              </h1>
            </div>
            <div className="flex mx-auto my-40 ">
              {frenchdata?.servicesName.map((service) => (
                <h2
                  className="font-urbanistmed text-5xl border-x-2 px-4 border-rouge capitalize "
                  key={service}
                >
                  {service}
                </h2>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
