"use client";

import { CtaBtn } from "../Buttons";
import { useLanguage } from "../language/LangContext";

export default function CollabHero() {
  const { dictionary } = useLanguage();

  const collab = dictionary.collaboration.hero;
  return (
    <div className="h-[100svh] pagpadding font-urbanistr text-wlite flex md:flex-row justify-between bg-collabbrush bg-left bg-no-repeat ">
      <section className="flex flex-col justify-center mix-blend-difference">
        <p className="w-fit text-center font-akira text-8xl md:text-start md:text-[160px] md:leading-[150px] 2xl:text-[200px] 2xl:leading-[200px]">
          Diph <br />
          tong
        </p>
      </section>
      <section className="flex flex-col justify-center text-start gap-4">
        <h1 className="whitespace-pre-line text-4xl 2xl:w-2/3 2xl:ml-auto">
          {collab.h1}
        </h1>
        <p className="font-urbanistl text-2xl 2xl:w-2/3 2xl:ml-auto">
          {" "}
          {collab.content}{" "}
        </p>
        <div className="mx-auto flex flex-col justify-start gap-4 md:mx-0 2xl:w-2/3 2xl:ml-auto md:flex-row 2xl:gap-8 2xl:pt-9">
          <CtaBtn text={collab.collabbutton} href="/collaboration#steps" />
          <CtaBtn text={collab.contactbutton} href="/contact" />
        </div>
      </section>
    </div>
  );
}
