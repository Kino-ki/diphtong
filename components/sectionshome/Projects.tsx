"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import Image from "next/image";
import gsap from "gsap";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Projects() {
  const { language } = useLanguage();
  const { EN } = data;
  const englishdata = EN.projservSection;
  // const frenchdata = FR.projservSection;

  const titleRef = useRef<HTMLDivElement | null>(null);
  const blurOverlayRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const mm = gsap.matchMedia();

    mm.add(
      // Desktop
      "(min-width: 1024px)",
      () => {
        gsap.to(titleRef.current, {
          xPercent: -34.2,
          yPercent: 30,
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
    );
    mm.add(
      // Mobile
      "(max-width: 1023px)",
      () => {
        gsap.to(titleRef.current, {
          xPercent: 0,
          yPercent: 0,
          scale: 0.8,
          ease: "sine.inOut",
          duration: 2,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 20%",
            end: "bottom top",
            scrub: 1,
            // markers: true,
          },
        });
      }
    );
  }, []);

  useEffect(() => {
    if (isHovered) {
      // Fade in
      gsap.fromTo(
        blurOverlayRef.current,
        { backdropFilter: "blur(10px)" },
        {
          backdropFilter: "blur(0px)",
          duration: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [isHovered]);

  return (
    <div className=" flex flex-col bg-wlite border-t-8 lg:border-none border-black text-[#1e1e1e]  ">
      {language === "EN" ? (
        <div className="flex flex-col justify-center  relative">
          <div className="w-full h-fit  border-b-2 md:border-none border-[#999696] mt-20 md:pt-40 mb-20 ">
            <p
              ref={titleRef}
              className="text-[11svw]  md:text-[18vh]  font-urbanistr font-semibold md:underline text-center md:text-start -mb-5 tracking-wider text-[#999696]"
            >
              FEATURED WORKS{" "}
            </p>
          </div>
          <div className=" relative md:pb-32 pb-20">
            {englishdata?.works.map((work, index) => (
              <section
                onMouseEnter={() => {
                  setIsHovered(true);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
                key={index}
              >
                <Link
                  href={work.link}
                  className=" px-3 flex flex-col-reverse gap-5 py-6 md:px-10 md:py-8 border-b border-[#999696]"
                >
                  <div className="flex justify-center md:justify-start">
                    <h2 className="font-menlob  text-center md:text-start font-semibold  text-3xl md:text-6xl uppercase tracking-[0.1rem] md:tracking-[0.2rem] mb-5 ">
                      {work.title}
                    </h2>
                  </div>
                  <div className="md:flex hidden justify-center md:justify-start gap-2  md:gap-4 ">
                    {work.serv?.length > 0 &&
                      work.serv.map((service) => (
                        <p
                          key={service}
                          className="capitalize text-sm  font-urbanistl md:font-figtree text-[#7a7878]  "
                        >
                          {service}
                        </p>
                      ))}
                  </div>
                  {isHovered && work.id === hoveredIndex?.toString() && (
                    <div className="absolute  hidden   lg:flex h-[95%] lg:w-fit right-24 -top-5">
                      <Image
                        src={work.imageSrc}
                        alt="image"
                        width={250}
                        height={200}
                        className=""
                      />
                      <div
                        ref={blurOverlayRef}
                        className="absolute inset-0  lg:w-60 bg-transparent pointer-events-none"
                      />
                    </div>
                  )}
                </Link>
              </section>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
