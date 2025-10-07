"use client";
import { GetAQuoteButton } from "@/components/Buttons";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useLanguage } from "../../components/language/LangContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Services() {
  const { dictionary } = useLanguage();
  const services = dictionary.servicesPage;
  const {
    aboutPage: { cta },
  } = dictionary;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });
    if (!titleRef.current) return;

    if (titleRef.current) {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          titleRef.current,
          { scale: 1, xPercent: 0 },
          {
            scale: 0.5,
            transformOrigin: "left left",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 10%",
              end: "bottom 60%",
              scrub: 2,
              pin: true,
              // markers: true,
            },
          }
        );
      });

      return () => mm.revert();
    }
  }, []);

  return (
    <div className="flex flex-col justify-start   h-auto  bg-diphblack">
      <div className="  ">
        <div className="flex flex-col pb-32 pt-[6%]">
          <h1
            ref={titleRef}
            className="lg:h-[100svh] font-menlob uppercase text-[12vw] px-5 md:px-[5%] "
          >
            {" "}
            {services.h1}{" "}
          </h1>
          <p
            data-speed="1.2"
            className="lg:text-4xl/normal tracking-wide px-[10%]  py-20"
          >
            {services.textintro.map((s, i) =>
              typeof s === "string" ? s : <b key={i}> {s.bold} </b>
            )}
          </p>
        </div>
        {/* ------------------------------SERVICE ARRAY -------------------------------------------------- */}
        <div className="flex flex-col md:px-[10%]">
          {services?.servicearray.map((service, i) => (
            <div
              id={service.id}
              key={service.id}
              className={`flex flex-col  py-6 md:py-24 px-5  text-start   ${
                i % 2 === 0
                  ? "bg-diphblack text-wlite border-8 border-wlite/90"
                  : "bg-wlite/90 text-diphblack"
              } `}
            >
              <div className="flex md:gap-10 justify-between md:justify-start h-fit pb-10 ">
                <h2 className=" font-urbanistmed font-semibold text-center text-xl md:text-6xl tracking-wider uppercase w-full p-5">
                  {service.serv.h2}
                </h2>
              </div>
              <div className="flex md:gap-10 items-start overflow-hidden px-5 ">
                <div className="flex flex-col gap-8   pt-5">
                  <p className=" font-urbanistr px-2 md:px-5 md:text-2xl md:tracking-wide md:leading-loose ">
                    {service.serv.content.map((c, i) =>
                      typeof c === "string" ? c : <b key={i}>{c.bold}</b>
                    )}
                  </p>
                  <div className="flex justify-evenly py-5 h-fit  mx-12">
                    <div className="h-full flex flex-col justify-center pt-5 ">
                      <h3 className="font-menlob  text-lg md:text-2xl">
                        {service.serv.h3}
                      </h3>
                    </div>
                    <ul className="">
                      {service.serv.webdevarray.map((el, i) => (
                        <li
                          className="text-2xl p-2  py-5 font-urbanistmed "
                          key={i}
                        >
                          {el}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between">
                    <p className=" font-urbanistr  px-2 md:px-5 md:text-2xl md:tracking-wide md:leading-loose">
                      {service.serv.conclusion.map((c, i) =>
                        typeof c === "string" ? c : <b key={i}>{c.bold}</b>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-diphblack text-wlite h-[80svh] flex flex-col gap-20 justify-center ">
        <h3 className="text-6xl text-center">{cta}</h3>
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
  );
}
