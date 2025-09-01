"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";

export default function SectionServices() {
  const { language } = useLanguage();
  const { EN, FR } = data;

  const englishhome = EN.homepage;
  const frenchhome = FR.homepage;

  return (
    <div>
      {language === "EN" ? (
        <div className="flex h-[200svh] font-urbanistr border-b-8 border-wlite ">
          {/* ----------------------ARTISTS ---------------------- */}
          <div className="bg-wlite w-1/2 h-full text-diphblack py-[60svh] px-10">
            <h3 className="text-[6rem]  ">
              {" "}
              {englishhome.services.artists.h3}{" "}
            </h3>
            <div className="flex flex-col text-2xl">
              <p className=" lg:py-20">
                {englishhome.services.artists.content.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}{" "}
              </p>
              <div className="flex flex-col gap-5">
                <p className="text-graytext">
                  {englishhome.services.artists.delivery}
                </p>
                <div className="">
                  {englishhome.services.artists.deliveryarray.map(
                    (service, i) => (
                      <p className="py-3" key={i}>
                        {service}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------BUSINESS ---------------------- */}
          <div className="w-1/2 flex flex-col text-wlite py-[9rem] ">
            <h2 className="font-menlor text-[6rem]  text-center">
              {englishhome.services.h2}
            </h2>
            <div className="lg:pt-[89svh] px-10 ">
              <h3 className="text-[6rem]  ">
                {" "}
                {englishhome.services.business.h3}{" "}
              </h3>
              <div className="flex flex-col text-2xl">
                <p className=" lg:py-20">
                  {englishhome.services.business.content.map((part, i) =>
                    typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                  )}{" "}
                </p>
                <div className="flex flex-col gap-5">
                  <p className="text-graytext">
                    {englishhome.services.business.delivery}
                  </p>
                  <div className="">
                    {englishhome.services.business.deliveryarray.map(
                      (service, i) => (
                        <p className="py-3" key={i}>
                          {service}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
