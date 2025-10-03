"use client";

import { useLanguage } from "@/components/language/LangContext";
import arrow from "@/public/images/servicearrow.svg";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export function ContactButton({
  textsize,
  width,
  height,
}: {
  textsize: string;
  width: string;
  height: string;
}) {
  return (
    <div>
      <button
        type="button"
        className={`bg-wlite hover:bg-white transition-all ease-in-out duration-200 p-3 rounded-md ${height} ${width}`}
      >
        <a href="/contact">
          <p className={`text-black  ${textsize}`}>hit us up</p>
        </a>
      </button>
    </div>
  );
}

export function GetAQuoteButton({
  divclass,
  isHovered,
}: {
  divclass: string;
  isHovered: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (!buttonRef.current || !textRef.current) return;

    const overlay = buttonRef.current.querySelector(
      "span.absolute"
    ) as HTMLElement;

    if (isHovered) {
      gsap.to(overlay, {
        x: "0%",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(textRef.current, {
        color: "#000000",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(overlay, {
        x: "-100%",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(textRef.current, {
        color: "#ffffff",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isHovered]);

  const { language } = useLanguage();
  return (
    <button
      ref={buttonRef}
      className={` relative overflow-hidden border mx-auto ${divclass} py-5 border-wlite rounded-md flex justify-between gap-3 items-center`}
    >
      <a href="/contact" className="">
        <span
          ref={textRef}
          className="relative z-10 text-wlite text-base tracking-wider flex justify-center w-full uppercase font-figtree"
        >
          {language === "EN" ? "Get a free quote" : "Évaluation"}
        </span>
      </a>
      <Image src={arrow} width={8} height={5} alt="arrow" />
      <span className="absolute inset-0 bg-[#c3c3c3] -left-full" />
    </button>
  );
}

export function LangButton() {
  const { language, handleLanguageChange } = useLanguage();
  return (
    <button
      className=" flex flex-col justify-center "
      onClick={handleLanguageChange}
    >
      <div>
        <p className="font-menlor text-[1.1rem]/5  tracking-[0.25rem] w-full h-full ">
          {language === "EN" ? "FR" : "EN"}
        </p>
      </div>
    </button>
  );
}
