"use client";
import { useLanguage } from "@/components/language/LangContext";
import Image from "next/image";
import gsap from "gsap";
import { useRef, useState } from "react";
import Link from "next/link";
// import { useMousePosition } from "../MousePosition";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
  const { dictionary } = useLanguage();

  const works = dictionary.homepage.projservSection;

  const titleRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const floatImgRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // const yPosition = useMousePosition(isHovered);

  useGSAP(() => {
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
    return () => {
      mm.revert();
    };
  });

  // useEffect(() => {
  //   if (!isHovered) return;
  //   const img = floatImgRef.current;
  //   if (!img) return;

  //   gsap.to(img, {
  //     y: yPosition.y - img.offsetHeight / 2,
  //     duration: 0.15,
  //     ease: "power1.out",
  //   });
  // }, [isHovered, yPosition]);

  return (
    <div className=" flex flex-col bg-wlite border-t-8 lg:border-none border-black text-[#1e1e1e] overflow-hidden ">
      <div className="flex flex-col justify-center  relative">
        <div className="w-full h-fit  border-b-2 md:border-none border-[#999696] mt-20 md:pt-40 lg:mb-10 2xl:mb-20 ">
          <h2
            ref={titleRef}
            className=" lg:text-[10svw] xl:text-[11svw] uppercase 2xl:text-[18vh]  font-urbanistr font-semibold md:underline text-center md:text-start -mb-5 tracking-wider text-[#999696]"
          >
            {works.workstitle}
          </h2>
        </div>
        <div className=" relative md:pb-32 pb-20">
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
            >
              <Link
                href={work.link}
                className=" px-3 flex flex-col-reverse gap-5 py-6 md:px-10 2xl:py-8 border-b border-[#999696]"
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
                        className="capitalize text-sm  font-urbanistl md:font-figtree text-[#7a7878]  "
                      >
                        {service}
                      </p>
                    ))}
                </div>
              </Link>
            </section>
          ))}
        </div>
        {isHovered && hoveredIndex !== null && (
          <div
            // onMouseEnter={() => setIsHovered(true)}
            ref={floatImgRef}
            className="absolute  hidden lg:flex  h-[55%] bottom-20 lg:w-32 2xl:w-40 lg:right-5 xl:right-12 2xl:right-36 pointer-events-none "
          >
            <Image
              src={works.works[hoveredIndex].imageSrc}
              alt="image"
              fill
              className="lg:object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
