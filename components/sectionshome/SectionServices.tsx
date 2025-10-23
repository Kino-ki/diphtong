"use client";
import { useLanguage } from "@/components/language/LangContext";
import { useEffect, useState } from "react";

export default function SectionServices() {
  const { dictionary } = useLanguage();
  const [speed, setSpeed] = useState("1.3");

  const services = dictionary.homepage.services;

  useEffect(() => {
    const updateSpeed = () => {
      setSpeed(window.innerWidth < 900 ? "1" : "1.3");
    };
    updateSpeed(); // set once on mount
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:min-h-[220svh] font-urbanistr border-b border-wlite ">
      {/* ----------------------ARTISTS ---------------------- */}
      <div className="bg-wlite lg:w-1/2  text-diphblack py-20  lg:py-[50svh] px-5 md:px-10">
        <div data-speed={speed} className="flex flex-col text-xl md:text-2xl">
          <h3 className=" text-4xl md:text-5xl  lg:text-[5rem] 2xl:text-[6rem]  ">
            {" "}
            {services.artists.h3}{" "}
          </h3>
          <p className="py-10  lg:py-20">
            {services.artists.content.map((part, i) =>
              typeof part === "string" ? part : <b key={i}>{part.bold}</b>
            )}{" "}
          </p>
          <div className="flex flex-col gap-5">
            <h4 className="text-graytext underline">
              {services.artists.delivery}
            </h4>
            {services.artists.deliveryarray.map((service, i) => (
              <p className="md:py-1 text-lg lg:text-xl" key={i}>
                {service}
              </p>
            ))}
            <p className="py-10 lg:py-20">
              {services.artists.h4.map((part, i) =>
                typeof part === "string" ? part : <b key={i}>{part.bold}</b>
              )}{" "}
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------BUSINESS ---------------------- */}
      <div className="lg:w-1/2 flex flex-col text-wlite py-20 lg:py-[9rem] ">
        <h2 className="font-menlor text-[11svw] md:text-[10svw] lg:text-[4rem] 2xl:text-[6rem]  text-center">
          {services.h2}
        </h2>
        <div
          data-speed={speed}
          className=" pt-20 lg:pt-[40svh] 2xl:pt-[70svh] px-5 md:px-10 "
        >
          <h3 className=" text-4xl md:text-5xl lg:text-[5rem] 2xl:text-[6rem]  ">
            {" "}
            {services.business.h3}{" "}
          </h3>
          <div className="flex flex-col text-xl  md:text-2xl">
            <p className=" py-10 lg:py-20">
              {services.business.content.map((part, i) =>
                typeof part === "string" ? part : <b key={i}>{part.bold}</b>
              )}{" "}
            </p>
            <div className="flex flex-col gap-5">
              <h4 className="text-graytext underline">
                {services.business.delivery}
              </h4>
              {services.business.deliveryarray.map((service, i) => (
                <p className="md:py-1 text-lg lg:text-xl" key={i}>
                  {service}
                </p>
              ))}
              <p className="py-10 lg:py-20">
                {services.business.h4.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
