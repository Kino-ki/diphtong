"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

export default function ProjServ() {
  gsap.registerPlugin(ScrollTrigger);

  const { language } = useLanguage();
  const { EN, FR } = data;
  const worksdetailsRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const workstitlesRefs = useRef<Record<string, HTMLElement | null>>({});
  const textRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const englishdata = EN.projservSection;
  const frenchdata = FR.projservSection;
  console.log(englishdata.works);

  // function horizontalLoop(items, { speed = 1, reversed = false } = {}) {
  //   items = gsap.utils.toArray(items);
  //   const tl = gsap.timeline({ repeat: -1, paused: false });
  //   let totalWidth = 0;

  //   items.forEach((el) => {
  //     totalWidth += el.offsetWidth;
  //   });

  //   items.forEach((el, i) => {
  //     const direction = (i % 2 === 0 ? 1 : -1) * (reversed ? -1 : 1);
  //     const duration = totalWidth / (speed * 100); // adjust speed multiplier if needed

  //     tl.to(
  //       el,
  //       {
  //         x: `-=${el.offsetWidth * direction}`,
  //         duration,
  //         ease: "none",
  //       },
  //       0
  //     );
  //   });

  //   return tl;
  // }

  useEffect(() => {
    if (!titleRef.current) return;

    if (titleRef.current) {
      gsap.to(titleRef.current, {
        xPercent: -34.2,
        yPercent: 50,
        scale: 0.3,
        ease: "sine.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
          end: "top top",
          scrub: 1,
          // markers: true,
        },
      });
    }
    //  MARQUEE ANIMATION
    // if (textRef.current) {
    //   ScrollTrigger.create({
    //     trigger: textRef.current,
    //     start: "bottom bottom",
    //     end: "bottom top",
    //     // markers: true,
    //     pin: true,
    //     // pinSpacing: true,
    //   });
    // }
    // const marqueeElements = textRef.current?.querySelectorAll(".marquee");
    // if (marqueeElements?.length) {
    //   marqueeElements.forEach((el, i) => {
    //     horizontalLoop([el, el.cloneNode(true)], {
    //       speed: 1 + i * 0.2,
    //       reversed: i % 2 !== 0,
    //     });
    //   });
    // }
    // SECTIONS PINNING
    englishdata?.works.forEach((work, index) => {
      const titleEl = workstitlesRefs.current[work.id];
      const isLast = index === englishdata.works.length - 1;
      if (titleEl && !isLast) {
        ScrollTrigger.create({
          trigger: titleEl,
          start: "top top",
          end: "90% 5%",

          // markers: true,
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      }
      if (titleEl && isLast) {
        ScrollTrigger.create({
          trigger: titleEl,
          start: "top top",
          end: "90% 5%",
          // markers: true,
          pin: true,
          pinSpacing: true,
          scrub: true,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <div className=" flex flex-col  bg-wlite text-black ">
      {language === "EN" ? (
        <div className="flex flex-col justify-center  relative">
          <div
            className="overflow-hidden  h-[50vh] "
            // ref={textRef}
          >
            <p
              ref={titleRef}
              className="md:text-[18vh] pt-40 font-urbanistr tracking-wider text-[#999696]"
            >
              FEATURED WORKS{" "}
            </p>
            {/* {[
              "top-[20%] ",
              // "top-[25%] rotate-180",
              // "top-[45%] scale-150",
              // "bottom-[15%] rotate-180 scale-50",
              // "bottom-[10%]",
            ].map((pos, i) => (
              <div
                key={i}
                className={`marquee absolute ${pos} w-max  whitespace-nowrap`}
                style={{
                  left: i % 2 === 0 ? "0" : "auto",
                  right: i % 2 !== 0 ? "0" : "auto",
                }}
              >
                <p className="font-menlor text-[#999696] md:text-[14vh] font-semibold pointer-events-none tracking-widest">
                  FEATURED WORKS&nbsp;&nbsp;FEATURED WORKS&nbsp;&nbsp;FEATURED
                  WORKS&nbsp;&nbsp;FEATURED WORKS&nbsp;&nbsp;FEATURED
                  WORKS&nbsp;&nbsp;FEATURED WORKS&nbsp;&nbsp;FEATURED
                  WORKS&nbsp;&nbsp;FEATURED WORKS&nbsp;&nbsp;FEATURED
                  WORKS&nbsp;&nbsp;FEATURED WORKS&nbsp;&nbsp;FEATURED
                  WORKS&nbsp;&nbsp;FEATURED WORKS
                </p>
              </div>
            ))} */}
          </div>
          {/* -----------------PROJECTS List ------------------- */}
          {englishdata?.works.map((work, index) => (
            <section
              key={index}
              className={`py-10 px-3 bg-wlite flex justify-between h-[100vh]  `}
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
                    className="font-menlob font-semibold text-5xl md:text-8xl uppercase tracking-[0.4rem] my-5    "
                  >
                    {work.title}
                  </h2>
                  <div className="flex gap-2 md:px-5 md:gap-4 ">
                    {work.serv?.length > 0 &&
                      work.serv.map((service) => (
                        <p key={service} className="capitalize">
                          {service}
                        </p>
                      ))}
                  </div>
                </div>

                <div className="flex flex-col h-full justify-around font-urbanistr text-xl">
                  <div className=" text-lg md:text-3xl  w-full pl-5 text-start md:text-end tracking-wider leading-9">
                    <p>{work.description}</p>
                  </div>
                  <div className="  text-rouge font-menlor text-base mx-auto p-8   flex flex-col gap-8">
                    <p>{work.testimonial}</p>
                    <p className="text-sm "> -{work.author}- </p>
                  </div>
                </div>
              </div>

              <div className=" flex  flex-col items-center w-[45%] relative ">
                <div
                  className={`flex gap-10 ${index === 0 ? "md:mt-8" : "mt-24"}`}
                >
                  {work.imageSrc && (
                    <div className=" w-fit h-fit">
                      <Image
                        src={work.imageSrc}
                        alt="project image"
                        width={index === 0 ? 600 : 750}
                        height={index === 0 ? 400 : 500}
                        className="rounded-lg"
                      />
                      {/* <div className=" absolute  inset-0 z-0"></div> */}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="outline-1 shadow-xl outline mx-auto p-3 px-6 rounded-md hover:font-semibold absolute bottom-40 transition-all ease-in-out bg-wlite"
                >
                  <Link href={work.link}>
                    <p className="tracking-wider text-xl font-menlor  ">
                      Discover Project
                    </p>
                  </Link>
                </button>
              </div>
            </section>
          ))}
        </div>
      ) : (
        // ---------------------------FRENCH -----------------
        <div className="flex flex-col justify-center">
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
                <p className="font-menlor md:text-[10vw] tracking-widest">
                  NOS PROJETS&nbsp;&nbsp;NOS PROJETS&nbsp;&nbsp; NOS
                  PROJETS&nbsp;NOS PROJETS&nbsp;NOS PROJETS&nbsp;NOS PROJETS
                </p>
              </div>
            ))}
          </div>
          {/* -----------------PROJECTS List ------------------- */}
          {frenchdata?.works.map((work) => (
            <section
              key={work.id}
              className="py-10 px-3 overflow-hidden bg-wlite flex justify-between h-[100vh]  backdrop-blur-[150px]"
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
                    className="font-menlob font-semibold text-5xl md:text-8xl uppercase tracking-[0.4rem] my-5    "
                  >
                    {work.title}
                  </h2>
                  <div className="flex gap-2 md:gap-4 ">
                    {work.serv.map((service) => (
                      <p
                        key={service}
                        className="font-urbanistr text-sm md:text-base tracking-wider px-3 md:px-5"
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col h-full justify-around font-urbanistr text-xl">
                  <div className=" text-lg md:text-3xl  w-full pl-5 text-start md:text-end tracking-wider leading-9">
                    <p>{work.description}</p>
                  </div>
                  <div className="  text-rouge font-menlor text-base mx-auto p-8   flex flex-col gap-8">
                    <p>{work.testimonial}</p>
                    <p className="text-sm "> -{work.author}- </p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col   justify-between py-32  ">
                <div className="h-fit w-fit relative">
                  {/* <Image
                    src={work.imageSrc}
                    unoptimized
                    alt="project image"
                    width={650}
                    height={700}
                    className="shadow-lg"
                  /> */}
                  <div className="h-full w-full absolute inset-0 "></div>
                </div>
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
        </div>
      )}
    </div>
  );
}
