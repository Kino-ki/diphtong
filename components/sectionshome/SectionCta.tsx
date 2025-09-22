"use client";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";
import Link from "next/link";

export default function SectionCta() {
  const { language } = useLanguage();
  const { EN, FR } = data;

  const englishhome = EN.homepage;
  const frenchhome = FR.homepage;

  return (
    <div>
      {language === "EN" ? (
        <div className=" bg-diphblack flex flex-col ">
          {/* ---------------------firsttext on black bg */}
          <div className="h-[85svh] text-white flex flex-col justify-center ">
            <p className="pl-[3.4rem]  pr-[10rem] text-4xl font-urbanistr leading-[4.25rem] tracking-wide ">
              {englishhome.firsttext}
            </p>
          </div>
          {/* ---------------------secondtext on white bg */}
          <div className="flex justify-between mr-[0.2rem] h-full ">
            <div data-speed="" className="flex flex-col w-1/3">
              <div className="h-[30svh]  "></div>
              <div className="bg-wlite  h-[100svh] w-full flex flex-col justify-center">
                <p className="text-diphblack px-[2rem] text-3xl text-start leading-[4.6rem] tracking-wider ">
                  {englishhome.ctaleft.map((part, i) =>
                    typeof part === "string" ? part : <b key={i}>{part.bold}</b>
                  )}
                </p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-start mx-[3rem] ">
              <div className="h-[100svh] bg-wlite flex flex-col justify-end py-[5rem] ">
                <p className="text-diphblack text-3xl px-[2rem] text-center leading-[3rem] tracking-wider ">
                  {" "}
                  {englishhome.ctaright.map((part, i) =>
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
      ) : (
        <div className=" bg-diphblack flex flex-col">
          {/* ---------------------firsttext on black bg */}
          <div className="h-[85svh] text-white flex flex-col justify-center ">
            <p className="pl-[3.4rem]  pr-[10rem] text-[2rem] font-urbanistr leading-[4.25rem] tracking-wide ">
              We craft websites that blend creativity, performance, and
              strategy. Whether you’re an artist seeking a stunning online
              portfolio or a small business owner wanting to grow your brand, we
              design and develop websites that captivate your audience, load at
              lightning speed, and deliver measurable results.
            </p>
          </div>
          {/* ---------------------secondtext on white bg */}
          <div className="flex justify-between mr-[0.2rem] h-full ">
            <div className="flex flex-col w-1/3">
              <div className="h-[30svh]  "></div>
              <div className="bg-wlite h-[100svh] w-full">
                <p className="text-diphblack">
                  Tailored for artists, creators, and entrepreneurs who need
                  more than just a website—they need a digital presence that
                  sells their story.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-start">
              <div className="h-[100svh] bg-wlite ">
                <p className="text-diphblack">
                  {" "}
                  Built with modern design, seamless navigation, and
                  future-proof technology.
                </p>
              </div>
              <div className="h-[16rem] flex flex-col justify-center ">
                <button className="bg-wlite mx-auto px-[1.5rem] py-[2rem] ">
                  <p className="text-diphblack font-urbanistmed text-lg">
                    Start Your Project Today
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
