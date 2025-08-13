"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import Image from "next/image";
import gsap from "gsap";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ProjServ() {
  const { language } = useLanguage();
  const { EN, FR } = data;
  const englishdata = EN.projservSection;
  const frenchdata = FR.projservSection;

  const titleRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>();

  useEffect(() => {
    if (!titleRef.current) return;

    if (titleRef.current) {
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
  }, []);

  return (
    <div className=" flex flex-col bg-wlite text-[#1e1e1e]  ">
      {language === "EN" ? (
        <div className="flex flex-col justify-center  relative">
          <p
            ref={titleRef}
            className="md:text-[18vh] pt-40 font-urbanistr tracking-wider text-[#999696]"
          >
            FEATURED WORKS{" "}
          </p>
          <div className=" relative md:pb-32 pb-20">
            {englishdata?.works.map((work, index) => (
              <section
                onMouseEnter={() => {
                  setIsHovered(true);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => setIsHovered(false)}
                key={index}
              >
                <Link
                  href={work.link}
                  className=" px-3 flex flex-col-reverse gap-5 py-6 md:px-10 md:py-8 border-b border-[#b7b5b5]"
                >
                  <div className="flex justify-center md:justify-start">
                    <h2 className="font-menlob  text-center md:text-start font-semibold  text-2xl md:text-6xl uppercase tracking-[0.1rem] md:tracking-[0.2rem] mb-5 ">
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
                    <div className="absolute  hidden lg:flex h-[95%] w-96 right-24 -top-5">
                      <Image
                        src={work.imageSrc}
                        alt="image"
                        fill
                        className=""
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
