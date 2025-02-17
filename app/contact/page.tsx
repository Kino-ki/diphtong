"use client";

import { useLanguage } from "../contexts/LangContext";
import content from "@/data/content.json";
export default function Contact() {
  const { language } = useLanguage();

  const { EN, FR } = content;

  const englishcontact = EN.contactPage;
  const frenchcontact = FR.contactPage;
  return (
    <div className="bg-black h-[100vh] pt-52 px-40 text-wlite">
      {language === "EN" ? (
        <div className="flex flex-col gap-12">
          <h1 className="font-menlob tracking-widest text-8xl flex justify-center uppercase">
            {" "}
            {englishcontact.PageTitle}{" "}
          </h1>
          <div className="flex justify-center pt-10">
            <p className="font-urbanistr uppercase text-xl tracking-wider">
              {englishcontact.pageText}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h1> {frenchcontact.PageTitle} </h1>
        </div>
      )}
    </div>
  );
}
