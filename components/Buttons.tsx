"use client";

import { useLanguage } from "@/app/contexts/LangContext";
import arrow from "@/public/images/servicearrow.svg";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/contact">
          <p className={`text-black  ${textsize}`}>hit us up</p>
        </Link>
      </button>
    </div>
  );
}

export function GetAQuoteButton() {
  const { language } = useLanguage();
  return (
    <button className="bg-transparent p-3 border mx-auto w-60 py-5 border-blue-100 rounded-md flex justify-between gap-3 items-center">
      <Link href="/contact">
        {language === "EN" ? (
          <p className="text-white text-base tracking-wider flex justify-center w-full uppercase font-figtree ">
            Get a free quote
          </p>
        ) : (
          <p className="text-white text-base tracking-wider flex justify-center w-full uppercase font-figtree ">
            Evaluation
          </p>
        )}
      </Link>
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
