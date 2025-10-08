"use client";
import Image from "next/image";
import logo from "@/public/images/logo/logofooter.svg";
import { ContactButton } from "../Buttons";
import { useLanguage } from "../language/LangContext";

export default function NewFooter() {
  const { dictionary } = useLanguage();
  const footer = dictionary.footer;
  return (
    <div className="h-[80svh] bg-diphblack text-wlite border-y-4 border-y-wlite flex flex-col lg:gap-6 lg:px-5 lg:py-5 ">
      <div className="flex justify-evenly h-1/2 lg:py-5">
        <div className="flex flex-col justify-center gap-10 w-[25%] ">
          <h2 className="font-urbanistl uppercase text-4xl">
            {" "}
            {footer.services.h2}{" "}
          </h2>
          <ul className="capitalize text-xl font-menlor flex flex-col lg:gap-3">
            {footer.services.servicearray.map((s, i) => (
              <li key={i} className="">
                <a
                  className="hover:underline capitalize"
                  target="_blank"
                  href={`/services/#${s.id}`}
                >
                  {s.h3}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-10 w-[25%] ">
          <h2 className="font-urbanistl uppercase text-4xl">{footer.h22} </h2>
          <ul className="capitalize text-xl font-menlor flex flex-col lg:gap-3">
            <li>
              <a className="hover:underline" href="/about" target="_blank">
                {footer.about}
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/projects" target="_blank">
                {footer.projects}
              </a>
            </li>
            <li>
              <p> {footer.sitemap}</p>
            </li>
            <li>
              <a className="hover:underline" href="/contact" target="_blank">
                {footer.contact}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex font-urbanistr gap-20 w-[50%] my-auto justify-center  ">
          <h2 className="font-urbanistmed text-3xl tracking-widest">
            {footer.cta.map((c, i) =>
              typeof c === "string" ? (
                c
              ) : (
                <span key={i}>
                  {" "}
                  <br /> {c.br}{" "}
                </span>
              )
            )}
          </h2>
          <div className=" w-[30%] ">
            <ContactButton
              textsize="text-3xl"
              width="w-full"
              height="md:h-20"
            />
          </div>
        </div>
      </div>
      <div className="relative flex  w-full h-[65%]  pointer-events-none">
        <Image
          src={logo}
          alt="logo footer"
          width={1900}
          height={900}
          className="  object-fill pointer-events-none"
        />
      </div>
    </div>
  );
}
