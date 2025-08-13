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
    const outerWrapper = gsap.utils.toArray<HTMLElement>(".outer");
    outerWrapper.forEach((container, index) => {
      const inner = container.querySelector<HTMLElement>(".inner");
      if (!outerWrapper) return;
      if (outerWrapper && index != 0) {
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
          container,
          {
            yPercent: 0,
            ease: "none",
          },
          {
            yPercent: -10,
            ease: "none",
          }
        );

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: inner,
            start: "top bottom",
            end: "bottom top",
            // markers: true,
            scrub: 1,
            pin: false,
          },
        });
        tl2.fromTo(
          inner,
          {
            yPercent: -10,
            ease: "none",
          },
          {
            yPercent: 0,
            ease: "none",
          }
        );
      }
    });
  }, []);

  return (
    <div>
      {language === "EN" ? (
        <div className="flex flex-col">
          {/* ------------------------esther ----------------------------------- */}
          <section
            id="portfolio"
            className=" outer h-[100svh]  overflow-hidden bg-estherprojmobile bg-auto md:bg-[#151414] "
          >
            <div className="inner  h-[100svh] flex flex-col p-[5%] pt-16  md:bg-[#151414] bg-estherprojmobilellipse bg-top bg-cover">
              <div className="flex  flex-col md:flex-row">
                <h1 className="font-estherfont uppercase text-[#CFEB98] text-center md:text-start text-[2.4rem] md:text-7xl ">
                  {englishprojects.estherProject.h1}
                </h1>
                <h2 className="uppercase text-lg md:text-2xl flex justify-end  items-end">
                  {englishprojects.estherProject.subtitle}{" "}
                  <span className="capitalize ">&nbsp;portfolio</span>{" "}
                </h2>
              </div>
              <div className="flex flex-col gap-8 mt-[2%] ">
                <div className="md:flex flex-col hidden  justify-center h-[25%]  overflow-hidden">
                  <Image
                    src={estherone}
                    width={1800}
                    height={100}
                    alt="first editor picture"
                  />
                </div>
                <div className=" md:flex hidden w-full justify-end ml-4">
                  <Image
                    src={esthertwo}
                    width={1000}
                    height={100}
                    alt="second editor picture"
                  />
                </div>
                <div className=" flex md:flex-row pt-10 md:pt-0 flex-col md:justify-between">
                  <div className="flex justify-end md:justify-start ">
                    <p className=" w-2/3 md:w-1/2  font-urbanistr md:text-2xl/loose tracking-widest text-pretty ">
                      {" "}
                      {englishprojects.estherProject.content}{" "}
                    </p>
                  </div>
                  <div className=" flex flex-col md:text-lg font-menlob gap-10 pt-[3%] mx-auto  pr-[5%] w-2/3 md:w-1/3">
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
            className="outer relative h-[100svh] bg-beancesprojmobile  bg-white overflow-hidden  "
          >
            <div className="inner h-[100svh] bg-white flex flex-col pt-16 md:pt-0 bg-beancesflowerjmobile bg-bottom md:bg-left bg-contain bg-no-repeat  text-[#4c4c4c]  md:bg-cover md:bg-bgbeances">
              <div className="p-[5%] md:pl-[7%] flex md:flex-row flex-col gap-5 md:items-end ">
                <Image
                  src={beancestitle}
                  width={600}
                  height={100}
                  alt="beances editions"
                />
                <h1 className="uppercase text-center md:text-2xl tracking-widest font-menlor">
                  {englishprojects.beancesProject.subtitle}
                </h1>
              </div>
              <div className="flex md:flex-row flex-col md:justify-end ">
                <p className="md:w-1/2 font-urbanistr md:text-2xl/loose md:tracking-widest text-pretty ">
                  {" "}
                  {englishprojects.beancesProject.content}{" "}
                </p>
                <div className=" flex flex-col text-lg font-menlob gap-10 pt-[3%]  pr-[5%] md:w-1/4">
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
              <div className="hidden md:flex justify-center pt-[2%]">
                <Image
                  src={beancestwo}
                  width={1000}
                  height={200}
                  alt="beances picture"
                />
              </div>
            </div>
          </section>
          <section id="collaboratives" className="h-[100svh] overflow-hidden ">
            <div className="outer">
              <div className="inner flex flex-col  ">
                <div className="">
                  <h1 className="text-wlite text-5xl font-menlob uppercase tracking-wider">
                    {englishprojects.collavoratives.h1}{" "}
                  </h1>
                </div>
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
