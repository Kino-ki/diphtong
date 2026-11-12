"use client";
import { LangButton } from "@/components/Buttons";
import { useLanguage } from "@/components/language/LangContext";
import constructiontruck from "@/public/images/icons8-digger-light.png";
import Image from "next/image";
export default function MaintenancePage() {
  const { language } = useLanguage();
  console.log(language);

  return (
    <div className="h-[100svh] bg-diphblack flex flex-col ">
      <section className="flex  pt-6 pl-6">
        <LangButton />
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
