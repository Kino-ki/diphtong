"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";

export default function SectionWhyUs() {
  const { language } = useLanguage();
  const { EN, FR } = data;

  const englishhome = EN.homepage;
  const frenchhome = FR.homepage;

  return (
    <div id="smooth-content">
      {language === "EN" ? (
        <div className="flex flex-col bg-wlite font-urbanistr">
          <div className="h-[95svh] flex flex-col lg:px-10 ">
            <div className="w-2/5 flex flex-col gap-[3rem]  ">
              <h2 className="text-5xl text-diphblack lg:pt-[10.75rem] ">
                {englishhome.whyus.h2}
              </h2>
              <p className="text-[#595959] text-3xl">
                {englishhome.whyus.content}
              </p>
            </div>
            <div className="h-full flex flex-col justify-center px-[8rem] ">
              <h4 className="text-black text-center text-5xl font-urbanistl leading-[4rem] ">
                {englishhome.whyus.h4}
              </h4>
            </div>
          </div>
          {/* ----------------------------PILLARS---------------------------------- */}
          <div className="h-[100svh] flex flex-col gap-10 ">
            <h3 className="font-menlor text-4xl text-diphblack px-14">
              {" "}
              {englishhome.whyus.h3}{" "}
            </h3>
            <div className="flex flex-col gap-10 w-full ">
              {englishhome.whyus.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className={`flex ${
                    i === 1 ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex flex-col justify-center gap-5 text-3xl text-start w-2/3 bg-diphblack h-[23svh] px-20 ">
                    <p>
                      {" "}
                      <b> {pillar.title} </b>
                    </p>
                    <p> {pillar.content} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div> {} </div>
      )}
    </div>
  );
}
