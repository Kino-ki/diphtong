"use client";

import { CtaBtn } from "../Buttons";
import { useLanguage } from "../language/LangContext";

export default function CollabHero() {
  const { dictionary } = useLanguage();

  const collab = dictionary.collaboration.hero;
  return (
    <div className="h-[100svh] pagpadding   font-urbanistr text-wlite flex flex-col  lg:flex-row bg-contain md:bg-auto justify-around md:justify-center lg:justify-between bg-collabbrush bg-left bg-no-repeat ">
      <section className="flex flex-col justify-center mix-blend-difference">
        <p className="w-fit  font-akira text-8xl text-start md:text-[160px] md:leading-[150px] 2xl:text-[200px] 2xl:leading-[200px]">
          Diph <br />
          tong
        </p>
      </section>
      <section className="flex flex-col justify-center items-start lg:items-end gap-4 mix-blend-difference">
        <h1 className="whitespace-pre-line text-xl md:text-3xl 2xl:text-3xl lg:w-3/4 2xl:ml-auto">
          {collab.h1}
        </h1>
        <p className="font-urbanistl text-base md:text-2xl lg:w-3/4  2xl:ml-auto">
          {" "}
          {collab.content}{" "}
        </p>
        <div className="  flex flex-col items-start justify-start gap-4  lg:w-3/4 xl:ml-auto md:flex-row 2xl:gap-8 pt-9">
          <CtaBtn text={collab.collabbutton} href="/collaboration#steps" />
          <CtaBtn text={collab.contactbutton} href="/contact" />
        </div>
      </section>
    </div>
  );
}
