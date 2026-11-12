"use client";
import { useState } from "react";
import constructiontruck from "@/public/images/icons8-digger-light.png";
import Image from "next/image";
export default function MaintenancePage() {
  const [language, setLanguage] = useState<"EN" | "FR">("EN");

  return (
    <div className="h-[100svh] bg-diphblack flex flex-col ">
      <section className="flex  pt-6 pl-6">
        <button
          type="button"
          className="flex flex-col justify-center"
          onClick={() => setLanguage((current) => (current === "EN" ? "FR" : "EN"))}
          aria-label={language === "EN" ? "Passer en français" : "Switch to English"}
        >
          <span className="font-akira hover:text-graytext text-2xl lg:text-[1.1rem]/5">
            {language === "EN" ? "FR" : "EN"}
          </span>
        </button>
      </section>
      <section className="flex flex-col justify-center align-middle h-full">
        <div className="flex justify-center">
          <Image
            src={constructiontruck}
            width={100}
            height={100}
            alt="truck icon"
          />
        </div>
        <h1 className="font-akira flex justify-center text-6xl">
          {language === "EN" ? "we're under construction" : "Travaux en cours"}
        </h1>
      </section>
      <section className="flex justify-end font-akira p-12">
        <p>
          {language === "EN"
            ? "Check out our projetcs"
            : "Decouvrez nos projets"}{" "}
          <span className="hover:underline hover:text-graytext ">
            <a href="/projects">{language === "EN" ? "here" : "ici"}</a>
          </span>
        </p>
      </section>
    </div>
  );
}
