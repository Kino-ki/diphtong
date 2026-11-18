import Link from "next/link";
import { useLanguage } from "../language/LangContext";

export default function InterversionSect() {
  const { dictionary } = useLanguage();
  const services = dictionary.homepage.services;
  return (
    <div className="md:min-h-[100svh] bg-wlite  pagpadding text-diphblack font-urbanistr flex flex-col gap-4 md:gap-24 xl:gap-8 2xl:gap-16 ">
      <section className="flex flex-col gap-4 xl:gap-2 2xl:gap-4">
        <p className="text-graytext underline text-sm md:text-xl uppercase">
          {" "}
          {services.eyebrow}{" "}
        </p>
        <h2 className="font-akira text-2xl md:text-5xl lg:w-3/5 text-pretty">
          {" "}
          {services.h2}{" "}
        </h2>
        <p className="text-sm md:text-base md:w-4/5 lg:w-3/5 ">
          {" "}
          {services.h2content}{" "}
        </p>
      </section>

      <section className=" grid w-full grid-cols-1 px-5  md:grid-cols-3 md:px-0 md:h-[36svh]   md:py-0 py-4 ">
        {services.servarray.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col gap-2 md:gap-8 md:min-h-52 items-center px-5 py-8 leading-relaxed md:px-7 bg-diphblack text-wlite md:bg-wlite md:text-diphblack  ${
              index === 0
                ? "md:justify-start md:pl-0 md:text-center"
                : index === 1
                  ? "md:justify-center md:border-y-0 border-y border-wlite/70 md:border-l md:border-diphblack/70 md:text-center"
                  : "md:justify-end md:border-l md:border-diphblack/70 md:pr-0 md:text-center"
            } text-center`}
          >
            <p className=" uppercase font-urbanistmed text-xl 2xl:text-3xl">
              {service.h3}
            </p>
            <p className="text-base md:text-xl ">{service.content}</p>
          </div>
        ))}
      </section>
      <section className="flex flex-col justify-center  items-center gap-4 2xl:gap-12 xl:mt-3 mt-6  ">
        <p className="md:text-lg md:text-start text-center">
          {services.closing}
        </p>
        <Link
          href="/contact"
          className="blackbtn hover:ring-1 hover:ring-[#525252] md:px-[24px] py-4 md:py-[30px] text-center font-urbanistr text-sm md:text-[16px] hover:shadow-md active:scale-95"
        >
          <p className=" text-[#525252] "> {services.button} </p>
        </Link>
      </section>
    </div>
  );
}
