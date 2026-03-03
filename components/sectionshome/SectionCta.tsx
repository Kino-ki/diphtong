"use client";
import { useLanguage } from "@/components/language/LangContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

export default function SectionCta() {
  const { dictionary, language } = useLanguage();
  const home = dictionary.homepage;
  const txtRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.to(".opa", {
          opacity: 0,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: txtRef.current,
            start: "top top",
            end: "center top",
            // markers: true,
            scrub: 1,
          },
        });
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.to(".opa", {
          opacity: 0,
          ease: "power2.out",
          stagger: 0.3,

          scrollTrigger: {
            trigger: txtRef.current,
            start: "top top",
            end: "30% top",
            // markers: true,
            scrub: 1,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: txtRef },
  );
  return (
    <div className="">
      <div className=" bg-diphblack h-[130svh] flex flex-col justify-center">
        {/* ---------------------firsttext on black bg */}
        <div
          ref={txtRef}
          className=" text-wlite  lg:pb-60 px-5 md:px-32 lg:px-40 flex flex-col gap-16"
        >
          <p className=" opa text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-urbanistr leading-9 md:leading-[2.5rem] xl:leading-[3rem] 2xl:leading-[3.5rem] tracking-wide text-start ">
            {home.firsttext}
          </p>
          <div className="  z-10  flex justify-start   ">
            <button className="btn hover:ring-1 hover:ring-wlite transition-all ease-in-out  ">
              <Link href="/contact">
                <p className="text-wlite font-urbanistmed text-base lg:text-xl ">
                  {language === "EN"
                    ? "start your project today"
                    : "discutons de votre projet"}
                </p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
