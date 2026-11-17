"use client";
import { CtaBtn } from "../Buttons";
import { useLanguage } from "../language/LangContext";

export default function HowCollab() {
  const { language, dictionary } = useLanguage();
  const collab = dictionary.homepage.collaboration;
  return (
    <div className="h-[100svh] pagpadding font-urbanistr flex flex-col gap-16">
      <section className="flex flex-col gap-4">
        <p className="text-graytext underline md: text-xl uppercase">
          {" "}
          {collab.eyebrow}{" "}
        </p>
        <h2 className="font-akira text-5xl w-4/5 whitespace-pre-line">
          {" "}
          {collab.h2}{" "}
        </h2>
        <p className="w-3/5 "> {collab.content} </p>
      </section>
      <section>
        {collab.steps.map((step) => (
          <div
            key={step.h3}
            className="grid grid-cols-1 gap-y-4 border-y border-wlite/25 px-5 pt-8 pb-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-x-12 md:px-12 md:pt-11"
          >
            <h3 className="font-akira text-2xl md:text-3xl">{step.h3}</h3>
            <p className="min-w-0">{step.content}</p>
          </div>
        ))}
      </section>
      <section className="flex justify-between -mt-5">
        <p>{collab.closing} </p>
        <CtaBtn text={collab.button} href="/collaboration#steps" />
      </section>
    </div>
  );
}
