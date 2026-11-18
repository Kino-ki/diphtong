"use client";
import { CtaBtn } from "../Buttons";
import { useLanguage } from "../language/LangContext";

export default function HowCollab() {
  const { dictionary } = useLanguage();
  const collab = dictionary.homepage.collaboration;
  return (
    <div className="md:h-[100svh]  xl:h-auto 2xl:h-[100svh] pagpadding font-urbanistr flex flex-col gap-8 md:gap-20 xl:gap-8 2xl:gap-20">
      <section className="flex flex-col gap-4 xl:gap-2 2xl:gap-4">
        <p className="text-graytext underline text-sm md:text-xl uppercase">
          {" "}
          {collab.eyebrow}{" "}
        </p>
        <h2 className="font-akira text-2xl md:text-5xl md:w-4/5 whitespace-pre-line">
          {" "}
          {collab.h2}{" "}
        </h2>
        <p className=" md:w-4/5 lg:w-3/5 text-sm md:text-base">
          {" "}
          {collab.content}{" "}
        </p>
      </section>
      <section>
        {collab.steps.map((step) => (
          <div
            key={step.h3}
            className="grid grid-cols-1 gap-y-4 md:gap-y-4 border-y border-wlite/25  pt-6 pb-5 md:pb-7 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)] md:gap-x-12 px-4 lg:px-12 md:pt-11"
          >
            <h3 className="font-akira text-lg md:text-3xl">{step.h3}</h3>
            <p className="min-w-0 md:text-xl">{step.content}</p>
          </div>
        ))}
      </section>
      <section className="flex flex-col md:items-start gap-8 md:gap-0 items-center md:flex-row md:justify-between mt-6 md:mt-0 ">
        <p className="md:text-lg text-center md:text-start">
          {collab.closing}{" "}
        </p>
        <CtaBtn text={collab.button} href="/collaboration#steps" />
      </section>
    </div>
  );
}
