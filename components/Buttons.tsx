"use client";

import { useLanguage } from "@/components/language/LangContext";
import arrow from "@/public/images/servicearrow.svg";
import blackarrow from "@/public/images/blackservicearrow.svg";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

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

gsap.registerPlugin(ScrollTrigger);

export function ContactButton({
  textsize,
  width,
  height,
}: {
  textsize: string;
  width: string;
  height: string;
}) {
  const { language } = useLanguage();
  return (
    <button
      type="button"
      className={`bg-wlite hover:bg-white transition-all ease-in-out duration-200 p-3 px-6 capitalize rounded-md font-figtree ${height} ${width}`}
    >
      <a href="/contact">
        <p className={`text-black  ${textsize}`}>
          {" "}
          {language === "EN" ? "hit us up" : "contactez-nous"}{" "}
        </p>
      </a>
    </button>
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
      className={` relative overflow-hidden border ${divclass}  border-wlite rounded-md  `}
    >
      <a
        href="/contact"
        className="  w-full h-full flex justify-between gap-3 "
      >
        <p
          ref={textRef}
          className="relative z-10 text-wlite text-base tracking-wider flex justify-start w-full uppercase font-figtree  py-5"
        >
          {language === "EN" ? "Get a free quote" : "Évaluation"}
        </p>
        <Image
          src={isHovered ? blackarrow : arrow}
          width={8}
          height={5}
          alt="arrow"
          className="z-10"
        />
      </a>
      <span className="absolute inset-0 bg-wlite -left-full" />
    </button>
  );
}

export function VisitWebsite({
  href,
  isHovered,
  divClass,
  hoverborder,
  border = "",
}: {
  href: string;
  isHovered: boolean;
  divClass: string;
  hoverborder: string;
  border: string;
}) {
  const { language } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  return (
    <button
      ref={buttonRef}
      className={` ${divClass}  rounded-xl py-5 px-20  transition-colors ease-in-out duration-200 s ${
        isHovered ? hoverborder : border
      } `}
    >
      <a href={href} target="_blank" className="text-2xl font-figtree ">
        {" "}
        <p
          ref={textRef}
          className={`${
            isHovered ? "scale-95" : ""
          } transition-transform ease-in-out duration-200`}
        >
          {language === "EN" ? "Visit Website" : "Voir Site Web"}{" "}
        </p>
      </a>
    </button>
  );
}
