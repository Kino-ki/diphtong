"use client";

import { useLanguage } from "../language/LangContext";

export default function AgencyClients() {
  const { dictionary } = useLanguage();
  const agency = dictionary.collaboration.agencySupport;

  return (
    <div
      id="agencies"
      className="min-h-screen pagpadding font-urbanistr flex flex-col gap-12 text-wlite "
    >
      <section className="flex flex-col gap-5 w-4/5">
        <h2 className="font-akira text-3xl leading-tight md:text-5xl">
          {agency.h2}
        </h2>
        <p className="text-lg md:max-w-2xl md:text-xl">{agency.intro}</p>
      </section>

      <section className=" bg-rectangleservices bg-center bg-contain bg-no-repeat  2xl:py-5 ">
        <div className="grid grid-cols-1  gap-y-12 md:grid-cols-2 md:gap-y-16 ">
          {agency.cases.map((agencyCase, index) => (
            <article
              key={index}
              className={`pt-5 md:pt-7 px-5 2xl:px-20  2xl:py-6 hover:bg-wlite hover:text-diphblack ${index % 2 === 0 ? "2xl:mr-5" : "2xl:-ml-1"} `}
            >
              <div className="mb-5 flex items-start gap-4 md:mb-7">
                <h3 className="font-akira text-xl leading-snug md:text-2xl underline w-2/3">
                  {agencyCase.h3}
                </h3>
              </div>

              <div className="space-y-4  md:space-y-2">
                {agencyCase.need && (
                  <p className="text-base leading-relaxed uppercase md:text-sm">
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
