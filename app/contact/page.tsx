"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "../contexts/LangContext";
import content from "@/data/content.json";
import Link from "next/link";
import CalendlyWidget from "@/components/CalendlyWidget";

export default function Contact() {
  const { language } = useLanguage();

  const { EN, FR } = content;

  const englishcontact = EN.contactPage;
  const frenchcontact = FR.contactPage;

  return (
    <div className="bg-black pb-40 pt-52 px-40 text-wlite">
      <CalendlyWidget />
      {language === "EN" ? (
        <div className="flex flex-col gap-16">
          <h1 className="font-menlob tracking-widest text-8xl flex justify-center uppercase">
            {" "}
            {englishcontact.PageTitle}{" "}
          </h1>
          <div className="flex justify-center pt-10">
            <p className="font-urbanistr uppercase text-xl tracking-wider">
              {englishcontact.pageText}
            </p>
          </div>

          <div className=" my-20 lg:px-60">
            <ContactForm lang={language} />
          </div>
          <div className="flex lg:px-40 text-white">
            <div className="flex flex-col justify-between  gap-10 w-1/2 ">
              <h2 className="font font-menlob text-3xl">
                {englishcontact.contactInfo}
              </h2>
              <p className="font-urbanistr text-2xl w-1/2 pr-10 leading-10 ">
                {" "}
                {englishcontact.adress}{" "}
              </p>
            </div>
            {/* --------------------------LINKS------------------------------------- */}
            <div className="flex flex-col  w-1/2 gap-10 my-auto">
              <div className=" flex justify-end ">
                <Link
                  className="font-akira text-4xl"
                  href={"https://www.linkedin.com/in/faiza-fehri/"}
                  target="_blank"
                >
                  {" "}
                  linkedIn
                </Link>
              </div>
              <div className=" flex justify-end">
                <Link
                  className="font-akira text-4xl"
                  href={"https://github.com/Kino-ki"}
                  target="_blank"
                >
                  {" "}
                  github
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // -----------------------------------FRENCH
        <div className="flex flex-col gap-16">
          <h1 className="font-menlob tracking-widest text-8xl flex justify-center uppercase">
            {" "}
            {frenchcontact.PageTitle}{" "}
          </h1>
          <div className="flex justify-center pt-10">
            <p className="font-urbanistr uppercase text-xl tracking-wider">
              {frenchcontact.pageText}
            </p>
          </div>

          <div className=" my-20 lg:px-60">
            <ContactForm lang={language} />
          </div>
          <div className="flex lg:px-40 text-white">
            <div className="flex flex-col justify-between  gap-10 w-1/2 ">
              <h2 className="font font-menlob text-3xl">
                {frenchcontact.contactInfo}
              </h2>
              <p className="font-urbanistr text-2xl w-1/2 pr-10 leading-10 ">
                {" "}
                {frenchcontact.adress}{" "}
              </p>
            </div>
            {/* --------------------------LINKS------------------------------------- */}
            <div className="flex flex-col  w-1/2 gap-10 my-auto">
              <div className=" flex justify-end ">
                <Link
                  className="font-akira text-4xl"
                  href={"https://www.linkedin.com/in/faiza-fehri/"}
                  target="_blank"
                >
                  {" "}
                  linkedIn
                </Link>
              </div>
              <div className=" flex justify-end">
                <Link
                  className="font-akira text-4xl"
                  href={"https://github.com/Kino-ki"}
                  target="_blank"
                >
                  {" "}
                  github
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
