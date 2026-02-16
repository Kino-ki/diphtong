"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "../../components/language/LangContext";
import Link from "next/link";
import CalendlyWidget from "@/components/CalendlyWidget";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { language, dictionary } = useLanguage();

  const contact = dictionary.contactPage;

  const pinnedRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
      gsap.fromTo(
        pinnedRef.current,
        { scale: 1 },
        {
          scale: 1,
          transformOrigin: "left left",

          ease: "sine.inOut",
          duration: 0.5,
          scrollTrigger: {
            trigger: pinnedRef.current,
            start: "top 20%",
            pin: true,
            endTrigger: ".endtrigger",
            end: "top 50%",
            scrub: 1,
            // markers: true,
          },
        },
      );
    });
    mm.add("(max-width:1023px)", () => {
      ScrollTrigger.create({
        trigger: pinnedRef.current,
        start: "top top",
        // endTrigger: ".endtrigger",
        end: "bottom top",
        pin: false,
        // markers: true,
      });
    });
    return () => {
      mm.revert();
    };
  });

  return (
    <div className="bg-diphblack px-3  md:px-10 text-wlite  ">
      <div className="flex flex-col gap-12 lg:flex-row  ">
        <div
          ref={pinnedRef}
          className="flex flex-col justify-center  w-full lg:w-[40%] lg:sticky md:top-0 md:self-start items-center lg:h-[60svh] "
        >
          {/* <div className="lg:h-[20%] h-10  " /> */}
          <div className="flex flex-col gap-8 ">
            <h1 className="font-menlob  text-[20vw] md:text-[9rem] lg:text-[7rem] 2xl:text-[9rem] uppercase ">
              {" "}
              {contact.PageTitle}{" "}
            </h1>
            <h2 className="md:font-figtree font-urbanistl lg:uppercase  text-xl md:text-3xl tracking-wider text-start xl:px-4">
              {contact.h2}
            </h2>
            <div className=" w-full flex justify-start endtrigger xl:px-4">
              <CalendlyWidget />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20 lg:gap-20 2xl:gap-20 lg:py-24 lg:w-[60%] md:items-end overflow-y-auto  ">
          <div className=" lg:w-full h-[80svh] md:h-[100svh]  mx-auto lg:px-10 ">
            <h3 className="lg:font-urbanistmed  uppercase text-lg md:text-3xl lg:text-2xl 2xl:text-3xl  py-10 md:py-20 lg:py-12 xl:py-16 md:pb-32 tracking-wider text-center">
              {contact.h3}
            </h3>
            <ContactForm lang={language} />
          </div>

          {/* ----------------------------contact info------------------- */}
          <div className="flex md:flex-row flex-col text-center md:text-start  gap-10 mx-auto text-wlite  md:py-20 pb-10">
            <div className="flex flex-col justify-between  gap-5 md:w-1/2 ">
              <h2 className="font font-menlob text-2xl md:text-3xl">
                {contact.contactInfo}
              </h2>
              <p className="font-urbanistr text-lg md:text-2xl md:w-2/3 lg:w-full 2xl:w-2/3 md:pr-10 leading-10 ">
                {" "}
                {contact.adress}{" "}
              </p>
            </div>
            {/* --------------------------LINKS------------------------------------- */}
            <div className="flex flex-col  md:w-1/2 gap-5 my-auto ">
              <div className=" flex md:justify-end  justify-center">
                <Link
                  className="font-akira text-2xl md:text-4xl hover:text-white transition-colors ease-in-out duration-150"
                  href={"https://www.linkedin.com/in/faiza-fehri/"}
                  target="_blank"
                >
                  {" "}
                  linkedIn
                </Link>
              </div>
              <div className=" flex md:justify-end justify-center">
                <Link
                  className="font-akira text-2xl md:text-4xl hover:text-white transition-colors ease-in-out duration-150"
                  href={"https://github.com/Kino-ki"}
                  target="_blank"
                >
                  {" "}
                  github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
