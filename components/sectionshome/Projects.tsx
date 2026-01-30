"use client";
import { useLanguage } from "@/components/language/LangContext";
import Image from "next/image";
import gsap from "gsap";
import { useRef, useState } from "react";
import Link from "next/link";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
  const { dictionary } = useLanguage();

  const works = dictionary.homepage.projservSection;
  const len = works.works.length;

  const titleRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    const mm = gsap.matchMedia();

    mm.add(
      // Desktop
      "(min-width: 1024px)",
      () => {
        gsap.to(titleRef.current, {
          xPercent: 2,
          scale: 0.3,
          ease: "sine.inOut",
          transformOrigin: "left bottom",
          duration: 2,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%",
            end: "top top",
            scrub: 1,
            // markers: true,
          },
        });
      },
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
            trigger: triggerRef.current,
            start: "top 20%",
            end: "bottom top",
            scrub: 1,
            // markers: true,
          },
        });
      },
    );
    return () => {
      mm.revert();
    };
  });

  return (
    <div
      ref={triggerRef}
      className=" flex flex-col bg-wlite border-t-8 lg:border-none border-black text-[#1e1e1e] overflow-hidden "
    >
      <div className="flex flex-col justify-center  relative ">
        <div className="w-full h-fit  border-b-2 lg:border-none border-[#999696] my-10 lg:mt-20 md:pt-40  lg:mb-10 2xl:mb-10 ">
          <h2
            ref={titleRef}
            className="text-[11svw]  md:text-[10svw] lg:text-[10svw] xl:text-[11svw] uppercase 2xl:text-[18vh]   font-urbanistr font-semibold lg:underline text-center md:text-start -mb-5 tracking-wider text-[#999696]"
          >
            {works.workstitle}
          </h2>
        </div>
        {works.works.map((work, index) => (
          <section
            onPointerMove={() => {
              setIsHovered(true);
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setHoveredIndex(null);
            }}
            key={index}
            className={`flex gap-8 flex-row items-center ${index !== len - 1 && "border-b border-[#999696]"} px-3 md:px-10`}
          >
            {isHovered && hoveredIndex === index && (
              <div className="w-[260px] h-[161px] relative border  border-[#999696] ">
                <Image
                  src={work.imageSrc}
                  alt="image"
                  fill
                  className="object-cover object-center "
                />
              </div>
            )}
            <Link
              href={work.link}
              className={` flex flex-col-reverse gap-5 py-6  2xl:py-8  `}
            >
              <div className="flex justify-center md:justify-start">
                <h3 className="font-menlob  text-center md:text-start font-semibold  text-3xl lg:text-5xl 2xl:text-6xl uppercase tracking-[0.1rem] md:tracking-[0.2rem] mb-5 ">
                  {work.title}
                </h3>
              </div>
              <div className="md:flex hidden justify-center md:justify-start gap-2  md:gap-4 ">
                {work.serv?.length > 0 &&
                  work.serv.map((service) => (
                    <p
                      key={service}
                      className="capitalize text-sm  font-urbanistl md:font-figtree text-[#525252]  "
                    >
                      {service}
                    </p>
                  ))}
              </div>
            </Link>
          </section>
        ))}
      </div>
      <div className=" md:px-10 px-5 flex justify-center lg:justify-start pt-8 xl:pt-10 pb-16 lg:pb-20">
        <Link
          href="/projects"
          className="blackbtn hover:ring-1 hover:ring-[#525252]"
        >
          <p className="text-base md:text-xl text-[#525252] ">
            {" "}
            {works.button}{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}
