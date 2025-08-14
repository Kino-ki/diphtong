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
    <div className="bg-black pb-20 md:pb-40 px-3  md:px-10 text-wlite  ">
      <CalendlyWidget />
      {language === "EN" ? (
        <div className="flex flex-col gap-12 md:flex-row  ">
          <div className="flex flex-col text-center md:text-start  md:pt-20 pt-10  md:w-[48%] md:sticky md:top-0 md:self-start ">
            <h1 className="font-menlob  text-[20vw] md:text-[9rem]  uppercase ">
              {" "}
              {englishcontact.PageTitle}{" "}
            </h1>
            <h2 className="md:font-figtree font-urbanistl md:uppercase md:w-2/3 text-xl md:text-3xl py-8 md:py-20 tracking-wider">
              {englishcontact.h2}
            </h2>
          </div>

          <div className="flex flex-col md:pt-10 pt-12 md:w-3/5 md:items-end overflow-y-auto ">
            <div className=" lg:w-full h-[80svh] md:h-[100svh]  mx-auto md:px-10 ">
              <h3 className="md:font-figtree font-urbanistl md:uppercase text-lg md:text-xl py-8 md:py-20 md:pb-20 tracking-wider">
                {englishcontact.h3}
              </h3>
              <ContactForm lang={language} />
            </div>
            {/* ----------------------------contact info------------------- */}
            <div className="flex md:flex-row flex-col text-center md:text-start gap-10 mx-auto text-white ">
              <div className="flex flex-col justify-between  gap-10 md:w-1/2 ">
                <h2 className="font font-menlob text-xl md:text-3xl">
                  {englishcontact.contactInfo}
                </h2>
                <p className="font-urbanistr text-lg md:text-2xl md:w-1/2 md:pr-10 leading-10 ">
                  {" "}
                  {englishcontact.adress}{" "}
                </p>
              </div>
              {/* --------------------------LINKS------------------------------------- */}
              <div className="flex flex-col  md:w-1/2 gap-10 my-auto ">
                <div className=" flex md:justify-end  justify-center">
                  <Link
                    className="font-akira text-2xl md:text-4xl"
                    href={"https://www.linkedin.com/in/faiza-fehri/"}
                    target="_blank"
                  >
                    {" "}
                    linkedIn
                  </Link>
                </div>
                <div className=" flex md:justify-end justify-center">
                  <Link
                    className="font-akira text-2xl md:text-4xl"
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
              {frenchcontact.h2}
            </p>
          </div>

          <div className=" my-20 lg:px-60 h-[100vh]">
            <h3>{englishcontact.h3}</h3>

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
