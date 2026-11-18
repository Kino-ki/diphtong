"use client";

import { useLanguage } from "../language/LangContext";

export default function AgencyClients() {
  const { dictionary } = useLanguage();
  const agency = dictionary.collaboration.agencySupport;

  return (
    <div
      id="agencies"
      className=" min-h-screen pagpadding font-urbanistr flex flex-col lg:gap-10 text-wlite gap-8  xl:gap-8 2xl:gap-20 "
    >
      <section className="flex flex-col gap-5 md:w-4/5">
        <h2 className="font-akira text-2xl leading-tight md:text-5xl">
          {agency.h2}
        </h2>
        <p className=" md:max-w-2xl  text-sm md:text-base ">{agency.intro}</p>
      </section>

      <section className=" lg:bg-rectangleservices bg-center bg-contain bg-no-repeat  2xl:py-5 ">
        <div className="grid grid-cols-1  gap-y-2 lg:grid-cols-2 2xl:gap-y-16 ">
          {agency.cases.map((agencyCase, index) => (
            <article
              key={index}
              className={`pt-5 pb-2 xl:pb-5 lg:pt-7 px-5 2xl:px-20  2xl:py-6 xl:hover:bg-wlite xl:hover:text-diphblack xl:mt-1 2xl:mt-0 ${index % 2 === 0 ? "xl:mr-5 " : "2xl:-ml-1"} `}
            >
              <div className="mb-5 flex items-start gap-4 md:mb-7">
                <h3 className="font-akira text-lg leading-snug md:text-2xl underline w-2/3">
                  {agencyCase.h3}
                </h3>
              </div>

              <div className="space-y-2  ">
                {agencyCase.need && (
                  <p className=" leading-relaxed uppercase text-sm">
                    {agencyCase.need}
                  </p>
                )}
                <p className="text-base leading-relaxed md:text-lg">
                  {agencyCase.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
