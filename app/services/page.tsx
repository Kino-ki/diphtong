"use client";
import { GetAQuoteButton } from "@/components/Buttons";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useLanguage } from "../../components/language/LangContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  getSmoother,
  renderContentItem,
  scrollToHashOnLoad,
} from "@/components/HelperFunctions";
import { useGSAP } from "@gsap/react";

export default function Services() {
  const { dictionary, language } = useLanguage();
  const services = dictionary.servicesPage;
  const {
    aboutPage: { cta },
  } = dictionary;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [isRouteReady, setIsRouteReady] = useState(false);

  useLayoutEffect(() => {
    setIsRouteReady(false);

    const startedAt = Date.now();
    const interval = setInterval(() => {
      const smoother = getSmoother();

      if (!smoother) {
        if (Date.now() - startedAt > 3000) {
          clearInterval(interval);
        }
        return;
      }

      clearInterval(interval);
      smoother.scrollTo(0, false);
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        scrollToHashOnLoad();
        setIsRouteReady(true);
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      if (!isRouteReady) return;

      const el = titleRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          el,
          { scale: 1, xPercent: 0 },
          {
            xPercent: 8,
            scale: 0.5,
            transformOrigin: "left left",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 10%",
              end: "bottom 60%",
              scrub: 2,
              pin: true,
              // markers: true,
            },
          },
        );
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          el,
          { scale: 1, xPercent: 0 },
          {
            xPercent: 8,
            scale: 0.5,
            transformOrigin: "left left",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "bottom 20%",
              scrub: 1,
              pin: true,
              // markers: true,
            },
          },
        );
      });

      return () => {
        mm.revert();
      };
    },
    { scope: titleRef, dependencies: [language, isRouteReady] },
  );

  return (
    <div className="flex flex-col justify-start   h-auto  bg-diphblack">
      <div className="  ">
        <div className="flex flex-col pb-12  lg:pb-32 pt-[5%]">
          <h1
            ref={titleRef}
            className=" lg:h-[100svh] font-menlob  uppercase text-[15vw] lg:text-[12vw]  px-5 md:px-[5%] "
          >
            {" "}
            {services.h1.map((h, i) => (
              <p key={i}>{h} </p>
            ))}{" "}
          </h1>
          <p
            data-speed="1.33"
            className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl tracking-wide px-[10%] pt-20 md:pb-10 lg:pt-0 lg:pb-32  "
          >
            {services.textintro.map(renderContentItem)}
          </p>
          <div
            data-speed="1.2"
            className="flex flex-col lg:flex-row px-[10%] md:justify-center gap-2 pb-10  lg:pb-10"
          >
            {services.introarray.map(renderContentItem)}
          </div>
        </div>
        {/* ------------------------------SERVICE ARRAY -------------------------------------------------- */}
        <div className="flex flex-col lg:px-[10%]">
          {services?.servicearray.map((service, i) => (
            <div
              id={service.id}
              key={service.id}
              className={`flex flex-col  py-6 md:py-24 px-3 md:px-5  text-start   ${
                i % 2 === 0
                  ? "bg-diphblack text-wlite border-8 border-wlite"
                  : "bg-wlite text-diphblack"
              } `}
            >
              <div className="flex md:gap-10 justify-between md:justify-start h-fit pb-10 ">
                <h2 className=" font-urbanistmed font-semibold text-center text-3xl md:text-6xl tracking-wider uppercase w-full p-5">
                  {service.serv.h2}
                </h2>
              </div>
              <div className="flex md:gap-10 items-start overflow-hidden md:px-5 ">
                <div className="flex flex-col gap-8   pt-5">
                  <p className=" font-urbanistr px-2 md:px-5 md:text-2xl md:tracking-wide md:leading-loose ">
                    {service.serv.content.map(renderContentItem)}
                  </p>
                  <div className="flex flex-col md:flex-row md:justify-evenly md:py-5 h-fit  md:mx-12">
                    <div className="h-full flex flex-col justify-center md:pt-5 md:w-2/5 lg:w-auto">
                      <h3 className="font-menlob p-2  md:p-0 text-xl md:text-2xl  ">
                        {service.serv.h3}
                      </h3>
                    </div>
                    <ul className="md:w-3/5">
                      {service.serv.webdevarray.map((el, i) => (
                        <li
                          className="md:text-2xl p-2 py-2 md:py-5 font-urbanistmed "
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
                        typeof c === "string" ? c : <b key={i}>{c.bold}</b>,
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-diphblack text-wlite h-[60svh] md:h-[50svh] lg:h-[6 0svh] flex flex-col gap-20 justify-center px-5 ">
        <h3 className="text-3xl md:text-5xl lg:text-6xl text-center">{cta}</h3>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" w-fit mx-auto"
        >
          <GetAQuoteButton
            isHovered={isHovered}
            divclass="w-60 md:w-96 text-center px-5"
          />
        </div>
      </div>
    </div>
  );
}
