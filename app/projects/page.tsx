"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LangContext";
import data from "@/data/content.json";
import estherone from "@/public/images/projectsPage/estherone.svg";
import esthertwo from "@/public/images/projectsPage/esthertwo.svg";
import beancestwo from "@/public/images/projectsPage/beancestwo.svg";
import beancestitle from "@/public/images/projectsPage/beancesh1.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const { language } = useLanguage();
  const { EN, FR } = data;
  const englishprojects = EN.projectsPage;
  const frenchprojects = FR.projectsPage;
  useEffect(() => {
    // const innerWrappers = gsap.utils.toArray(".inner");
    gsap.utils.toArray<HTMLElement>(".outer").forEach((container, index) => {
      const inner = container.querySelector<HTMLElement>(".inner");
      if (!inner) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          // markers: true,
          scrub: 1,
          pin: false,
        },
      });
      tl.fromTo(
        inner,
        {
          yPercent: -12,
          ease: "none",
        },
        {
          yPercent: 12,
          ease: "none",
        }
      );
    });
  }, []);

  return (
    <div>
      {language === "EN" ? (
        <div className="flex flex-col">
          <section
            id="portfolio"
            className=" outer h-[100svh] overflow-hidden bg-[#151414] "
          >
            <div className="inner flex flex-col p-[5%] bg-[#151414]">
              <div className="flex  ">
                <h1 className="font-estherfont uppercase text-[#CFEB98] text-7xl ">
                  {englishprojects.estherProject.h1}
                </h1>
                <h2 className="uppercase text-2xl flex items-end">
                  {englishprojects.estherProject.subtitle}{" "}
                  <span className="capitalize ">&nbsp;portfolio</span>{" "}
                </h2>
              </div>
              <div className="flex flex-col gap-8 mt-[2%] ">
                <div className="flex flex-col justify-center h-[25%]  overflow-hidden">
                  <Image
                    src={estherone}
                    width={1800}
                    height={100}
                    alt="first editor picture"
                  />
                </div>
                <div className=" flex w-full justify-end ml-4">
                  <Image
                    src={esthertwo}
                    width={1000}
                    height={100}
                    alt="second editor picture"
                  />
                </div>
                <div className=" flex justify-between">
                  <p className="w-1/2 font-urbanistr text-2xl/loose tracking-widest text-pretty ">
                    {" "}
                    {englishprojects.estherProject.content}{" "}
                  </p>
                  <div className=" flex flex-col text-lg font-menlob gap-10 pt-[3%]  pr-[5%] w-1/3">
                    <button
                      type="button"
                      className="p-5 rounded-lg border border-wlite capitalize"
                    >
                      {" "}
                      discover project{" "}
                    </button>
                    <button
                      type="button"
                      className="p-5 rounded-lg border border-wlite capitalize"
                    >
                      {" "}
                      visit website{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  --------------------------------BEANCES----------------------------- */}
          <section
            id="beances"
            className="outer bg-white h-[100svh] overflow-hidden "
          >
            <div className="inner bg-white flex flex-col h-full text-[#4c4c4c]  bg-bgbeances bg-cover">
              <div className="p-[5%] pl-[7%] flex gap-5 items-end ">
                <Image
                  src={beancestitle}
                  width={600}
                  height={100}
                  alt="beances editions"
                />
                <h1 className="uppercase text-2xl tracking-widest font-menlor">
                  {englishprojects.beancesProject.subtitle}
                </h1>
              </div>
              <div className="flex justify-end ">
                <p className="w-1/2 font-urbanistr text-2xl/loose tracking-widest text-pretty ">
                  {" "}
                  {englishprojects.beancesProject.content}{" "}
                </p>
                <div className=" flex flex-col text-lg font-menlob gap-10 pt-[3%]  pr-[5%] w-1/4">
                  <button
                    type="button"
                    className="p-5 rounded-lg border border-[#4c4c4c] capitalize"
                  >
                    {" "}
                    discover project{" "}
                  </button>
                  <button
                    type="button"
                    className="p-5 rounded-lg border border-[#4c4c4c] capitalize"
                  >
                    {" "}
                    visit website{" "}
                  </button>
                </div>
              </div>
              <div className="flex justify-center pt-[2%]">
                <Image
                  src={beancestwo}
                  width={1000}
                  height={200}
                  alt="beances picture"
                />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div> {frenchprojects.beancesProject.h1} </div>
      )}
    </div>
  );
}
