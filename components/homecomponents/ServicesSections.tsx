"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";

export default function ServicesSection() {
  const { language } = useLanguage();
  const { EN, FR } = data;

  const englishdata = EN.projservSection;
  const frenchdata = FR.projservSection;

  return (
    <div>
      {language === "EN" ? (
        <div className=" bg-black text-wlite   py-20 flex flex-col border-b-2 border-wlite ">
          <h1 className=" border-b-4 border-wlite w-2/3 md:w-1/3 px-3 md:px-10  font-menlob uppercase tracking-widest text-2xl md:text-5xl pr-10">
            {englishdata.servicestitle}
          </h1>
          <div className="flex flex-col justify-evenly  h-full md:my-24 my-16 px-5 lg:px-96 ">
            {englishdata?.servicesList.map((service, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 md:gap-0 md:flex-row  md:justify-between md:my-8 my-5"
              >
                <h2 className="font-menlor text-xl md:text-4xl capitalize flex md:flex-col justify-center ">
                  {service.serviceName}
                </h2>
                <p className="md:w-1/2 text-md md:text-xl font-urbanistr tracking-widest text-center md:text-start">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" bg-black text-wlite h-[100svh]  pt-20 flex flex-col">
          <div className=" fixed inset-0 my-auto h-fit w-fit mx-auto opacity-[0.05] "></div>
          <div className="flex flex-col items-end">
            <h1 className=" border-b-4 border-wlite  font-menlob uppercase tracking-widest  text-5xl pr-10">
              {frenchdata.servicestitle}
            </h1>
          </div>
          <div className="flex flex-col  justify-evenly  h-full my-20 px-96 ">
            {frenchdata?.servicesList.map((service, index) => (
              <div key={index} className="flex my-16 relative">
                <h2 className="font-menlor absolute bottom-0 text-4xl capitalize ">
                  {service.serviceName}
                </h2>
                <p className="w-1/2 text-xl absolute top-0 right-0 font-urbanistr tracking-widest">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
