"use client";
import { useLanguage } from "@/components/language/LangContext";

export default function SectionServices() {
  const { dictionary } = useLanguage();

  const services = dictionary.homepage.services;

  return (
    <div className="flex md:min-h-[220svh] font-urbanistr border-b border-wlite ">
      {/* ----------------------ARTISTS ---------------------- */}
      <div className="bg-wlite w-1/2  text-diphblack py-[60svh] px-10">
        <div data-speed="1.1" className="flex flex-col text-2xl">
          <h3 className="text-[6rem]  "> {services.artists.h3} </h3>
          <p className=" lg:py-20">
            {services.artists.content.map((part, i) =>
              typeof part === "string" ? part : <b key={i}>{part.bold}</b>
            )}{" "}
          </p>
          <div className="flex flex-col gap-5">
            <h4 className="text-graytext">{services.artists.delivery}</h4>
            {services.artists.deliveryarray.map((service, i) => (
              <p className="py-1 text-xl" key={i}>
                {service}
              </p>
            ))}
            <p className="lg:py-20">
              {services.artists.h4.map((part, i) =>
                typeof part === "string" ? part : <b key={i}>{part.bold}</b>
              )}{" "}
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------BUSINESS ---------------------- */}
      <div className="w-1/2 flex flex-col text-wlite py-[9rem] ">
        <h2 className="font-menlor text-[6rem]  text-center">{services.h2}</h2>
        <div data-speed="1.2" className="lg:pt-[89svh] px-10 ">
          <h3 className="text-[6rem]  "> {services.business.h3} </h3>
          <div className="flex flex-col text-2xl">
            <p className=" lg:py-20">
              {services.business.content.map((part, i) =>
                typeof part === "string" ? part : <b key={i}>{part.bold}</b>
              )}{" "}
            </p>
            <div className="flex flex-col gap-5">
              <h4 className="text-graytext">{services.business.delivery}</h4>
              {services.business.deliveryarray.map((service, i) => (
                <p className="py-1 text-xl" key={i}>
                  {service}
                </p>
              ))}
              <p className="lg:py-20">
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
