"use client";
import { useLanguage } from "@/components/language/LangContext";
import Link from "next/link";

export default function SectionServices() {
  const { dictionary } = useLanguage();

  const services = dictionary.homepage.services;

  return (
    <div className="flex flex-col gap-10 font-urbanistr text-xl  py-16 text-wlite px-5 md:px-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl md:text-[3.4rem] xl:text-8xl ">
          {services.h2}{" "}
        </h2>
        <p className="text-base md:text-xl ">{services.h2content}</p>
      </div>
      <div className="flex flex-col justify-center  xl:py-20  lg:bg-rectangleservices bg-center bg-contain bg-no-repeat ">
        <div className=" h-full flex flex-col gap-20 md:grid lg:grid-cols-2 md:gap-32">
          {services.servarray.map((serv, i) => (
            <div key={i} className="flex flex-col gap-5 2xl:px-[150px] ">
              <div className="flex flex-col md:flex-row  md:gap-5 align-middle font-akira md:text-3xl">
                <p className=" text-3xl md:text-5xl flex flex-col justify-center">
                  {" "}
                  {serv.id}
                  {""}
                </p>
                <h3 className="text-2xl md:text-3xl flex flex-col justify-center">
                  {" "}
                  {serv.h3}{" "}
                </h3>
              </div>
              <p className=" text-lg md:text-xl">{serv.content} </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center md:justify-start  2xl:px-[150px]">
        <Link href="/services" className="btn hover:ring-1 hover:ring-wlite ">
          <p className="text-base md:text-xl">{services.button}</p>
        </Link>
      </div>
    </div>
  );
}
