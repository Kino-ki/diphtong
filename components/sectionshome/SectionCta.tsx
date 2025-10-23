"use client";
import { useLanguage } from "@/components/language/LangContext";
import Link from "next/link";
import { BarCode, HorizLine } from "./BarCode";

export default function SectionCta() {
  const { dictionary } = useLanguage();
  const home = dictionary.homepage;

  return (
    <div className="overflow-hidden">
      <div className=" bg-diphblack flex flex-col w-[100svw]">
        {/* ---------------------firsttext on black bg */}
        <div className="h-[85svh] text-white flex flex-col justify-center ">
          <p className="pl-[3.4rem]  pr-[10rem] text-4xl font-urbanistr leading-[4.25rem] tracking-wide ">
            {home.firsttext}
          </p>
        </div>
        {/* ---------------------secondtext on white bg */}
        <div className="flex justify-between mr-[0.2rem] h-full ">
          <div data-speed="" className="flex flex-col w-1/3 ">
            <div className="h-[30svh]  "></div>
            <div className="bg-wlite relative h-full w-full flex flex-col justify-center">
              <p className="text-diphblack px-[2rem] text-3xl text-start leading-[4.6rem] tracking-wider ">
                {home.ctaleft.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-start mx-[3rem] relative ">
            <div className="absolute h-full w-full overflow-hidden ">
              <BarCode
                height={400}
                strokeWidth={25}
                x={0}
                start="top 50%"
                scrub={0.2}
              />
            </div>
            <div className="absolute top-[35%] h-fit w-full overflow-hidden  ">
              <HorizLine width={400} strokeWidth={50} x={0} />
            </div>
            <div className="h-[100svh] bg-wlite flex flex-col justify-end py-[5rem] ">
              <p className="text-diphblack text-3xl px-[2rem] text-center leading-[3rem] tracking-wider ">
                {" "}
                {home.ctaright.map((part, i) =>
                  typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                )}
              </p>
            </div>
            <div className="h-[16rem] flex flex-col justify-center ">
              <button className="bg-wlite mx-auto px-[1.5rem] py-[2rem] w-[25rem] rounded-md hover:bg-wlite/85 transition-all ease-in-out duration-400">
                <Link href="/contact">
                  <p className="text-diphblack font-urbanistmed text-2xl">
                    Start Your Project Today
                  </p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
