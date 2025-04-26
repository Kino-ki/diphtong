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
        <div className=" bg-black text-wlite h-[100svh]  pt-20 flex flex-col">
          <div className=" fixed inset-0 my-auto h-fit w-fit mx-auto opacity-[0.08] "></div>
          <div className="flex flex-col items-end">
            <h1 className=" border-b-4 border-wlite  font-menlob uppercase tracking-widest  text-5xl pr-10">
              {englishdata.servicestitle}
            </h1>
          </div>
          <div className="flex flex-col  justify-evenly  h-full my-20 px-96 ">
            {englishdata?.servicesList.map((service, index) => (
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
