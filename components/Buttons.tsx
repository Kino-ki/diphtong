"use client";

import { useLanguage } from "@/app/contexts/LangContext";
import arrow from "@/public/images/servicearrow.svg";
import Image from "next/image";

export function ContactButton() {
  return (
    <div>
      <button className="bg-white p-3 rounded-md w-40">
        <p className="text-black text-base">hit us up</p>
      </button>
    </div>
  );
}

export function GetAQuoteButton() {
  return (
    <button className="bg-transparent p-3 border mx-auto w-60 py-5 border-blue-100 rounded-md flex justify-between gap-3 items-center">
      <p className="text-white text-base tracking-wider flex justify-center w-full uppercase font-figtree ">
        Get a free quote
      </p>
      <Image src={arrow} width={8} height={5} alt="arrow" />
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
