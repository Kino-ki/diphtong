"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "../../components/language/LangContext";
import Link from "next/link";
import CalendlyWidget from "@/components/CalendlyWidget";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Contact() {
  const { language, dictionary } = useLanguage();

  const contact = dictionary.contactPage;

  const pinnedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
      const st = ScrollTrigger.create({
        trigger: pinnedRef.current,
        start: "top top",
        endTrigger: ".endtrigger",
        end: "top 80%",
        pin: true,
        // markers: true,
      });
      return () => {
        st.kill();
      };
    });

    return () => {
      mm.revert();
      smoother.kill();
    };
  }, []);

  return (
    <div className="bg-diphblack px-3  md:px-10 text-wlite  ">
      <div className="flex flex-col gap-12 md:flex-row  ">
        <div
          ref={pinnedRef}
          className="flex flex-col h-[100svh]  md:w-[40%] md:sticky md:top-0 md:self-start"
        >
          <div className="h-[20%] " />
          <h1 className="font-menlob  text-[20vw] md:text-[9rem]  uppercase ">
            {" "}
            {contact.PageTitle}{" "}
          </h1>
          <h2 className="md:font-figtree font-urbanistl md:uppercase md:w-2/3 text-xl md:text-3xl tracking-wider text-end mx-auto ">
            {contact.h2}
          </h2>
        </div>

        <div className="flex flex-col lg:gap-52 md:py-24 md:w-[60%] md:items-end overflow-y-auto ">
          <div className=" lg:w-full h-[80svh] md:h-[100svh]  mx-auto md:px-10 ">
            <h3 className="md:font-urbanistmed  md:uppercase text-lg md:text-3xl  md:py-20  md:pb-32 tracking-wider text-center">
              {contact.h3}
            </h3>
            <ContactForm lang={language} />
          </div>
          <div className=" w-full flex justify-center endtrigger">
            <CalendlyWidget />
          </div>
          {/* ----------------------------contact info------------------- */}
          <div className="flex md:flex-row flex-col text-center md:text-start gap-10 mx-auto text-wlite  md:pb-20">
            <div className="flex flex-col justify-between  gap-5 md:w-1/2 ">
              <h2 className="font font-menlob text-xl md:text-3xl">
                {contact.contactInfo}
              </h2>
              <p className="font-urbanistr text-lg md:text-2xl md:w-2/3 md:pr-10 leading-10 ">
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
