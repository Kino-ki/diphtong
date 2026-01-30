"use client";

import { ContactButton } from "../Buttons";
import { useLanguage } from "../language/LangContext";

export default function NewFooter() {
  const { dictionary } = useLanguage();
  const footer = dictionary.footer;
  return (
    <div className=" md:h-[50svh]  bg-diphblack text-wlite border-y-2 border-y-wlite flex flex-col lg:gap-6 lg:px-5 py-10 lg:py-5   ">
      <div className="flex flex-col gap-12 md:flex-row justify-evenly px-5 lg:py-5">
        <div className="md:hidden flex flex-col font-urbanistr gap-5  justify-end ">
          <h2 className="font-urbanistmed text-2xl  tracking-widest text-center   ">
            {footer.cta.map((c, i) =>
              typeof c === "string" ? c : <span key={i}> {c.br} </span>,
            )}
          </h2>
          <div className=" 2xl:w-[30%] w-[50%]  mx-auto ">
            <ContactButton textsize="text-xl " width="w-full" height=" h-14" />
          </div>
        </div>
        <div className="flex  gap-6 lg:items-start items-center  flex-col justify-start md:gap-10  md:w-[25%] ">
          <h2 className="font-urbanistl w-1/2 md:w-full  uppercase text-xl md:text-2xl lg:text-4xl text-center md:text-start  ">
            {" "}
            {footer.services.h2}{" "}
          </h2>
          <ul className="capitalize lg:text-xl font-menlor flex flex-col gap-3 w-1/2 md:w-full ">
            {footer.services.servicearray.map((s, i) => (
              <li key={i} className="md:text-start text-center">
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
        <div className="flex gap-6  items-center md:items-start  flex-col justify-start md:gap-10  md:w-[25%]   ">
          <h2 className="font-urbanistl  w-1/2 md:w-full uppercase text-xl md:text-2xl lg:text-4xl text-center md:text-start ">
            {footer.h22}{" "}
          </h2>
          <ul className="capitalize lg:text-xl font-menlor flex flex-col gap-3 w-1/2 md:w-full md:text-start text-center ">
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
              <a className="hover:underline" href="/contact" target="_blank">
                {footer.contact}
              </a>
            </li>
          </ul>
        </div>
        <div className=" hidden md:flex flex-col lg:flex-row font-urbanistr lg:gap-12 2xl:gap-20 md:w-[50%] my-auto justify-center  ">
          <h2 className="font-urbanistmed text-xl lg:text-3xl tracking-widest text-center md:text-start lg:w-[50%] ">
            {footer.cta.map((c, i) =>
              typeof c === "string" ? c : <span key={i}> {c.br} </span>,
            )}
          </h2>
          <div className=" 2xl:w-[30%] w-[50%] py-10 lg:py-0 mx-auto md:mx-0">
            <ContactButton
              textsize="text-xl lg:text-2xl 2xl:text-xl"
              width="w-full"
              height="2xl:h-16 h-16"
            />
          </div>
        </div>
      </div>
      {/* <div className="relative flex items-center px-5  w-full h-[65%] md:pt-0 pt-12  pointer-events-none">
        <Image
          src={logo}
          alt="logo footer"
          width={1900}
          height={900}
          className="  object-fill object-center pointer-events-none opacity-85"
        />
      </div> */}
    </div>
  );
}
