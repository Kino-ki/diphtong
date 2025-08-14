"use client";
import { ContactButton, GetAQuoteButton } from "@/components/Buttons";
import arrowimg from "@/public/images/servicearrow.svg";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import content from "@/data/content.json";
import serviceImg from "@/public/images/servicesImg.svg";
import { useLanguage } from "../contexts/LangContext";

export default function Services() {
  const { language } = useLanguage();

  const [hoverIndex, setHoverIndex] = useState<string | null>(null);
  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const { EN, FR } = content;

  const englishServices = EN.servicesPage;
  const frenchServices = FR.servicesPage;

  const handleMouseEnter = (id: string) => {
    setHoverIndex(id);
  };

  const handleMouseLeave = (id: string) => {
    console.log("id:", id, "num", Number(id));

    if (Number(id) !== englishServices.length) {
      setHoverIndex(null);
    }
  };

  const handleTouch = (id: string) => {
    if (!hoverIndex) {
      setHoverIndex(id);
    } else {
      setHoverIndex(null);
    }
  };

  useEffect(() => {
    if (!hoverIndex) return;

    const target = serviceRefs.current[hoverIndex];

    if (!target) return;

    gsap.to(target, {
      height: "auto",
      // opacity: 1,
      duration: 1,
      scrub: 1,
      ease: "power2.out",
    });

    return () => {
      gsap.to(target, {
        height: 0,
        // opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
    };
  }, [hoverIndex]);

  return (
    <div className="flex flex-col justify-start pt-[6%] px-5 md:px-[15%] h-auto pb-40">
      {language === "EN" ? (
        <div className=" ">
          {englishServices?.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={() => handleMouseLeave(service.id)}
              className="flex flex-col  py-6 md:py-10 border-b px-5 border-wlite "
            >
              <div
                onTouchStart={() => handleTouch(service.id)}
                className="flex md:gap-10 justify-between md:justify-start h-fit "
              >
                <h2 className="text-white font-menlor font-semibold text-xl md:text-4xl uppercase py-3 ">
                  {service.serviceName}
                </h2>
                <div className=" w-3 md:w-10 flex flex-col justify-center">
                  <Image
                    src={arrowimg}
                    alt="arrow"
                    className="object-contain"
                  />
                </div>
              </div>
              <div
                ref={(el) => {
                  serviceRefs.current[service.id] = el;
                }}
                className="flex md:gap-10 items-start overflow-hidden  h-0"
              >
                <div className=" ">
                  <Image
                    src={serviceImg}
                    width={3}
                    height={5}
                    alt="image"
                    className="h-fit"
                  />
                </div>
                <div className="flex flex-col gap-8 md:gap-12 pt-5">
                  <p
                    id={service.serviceName}
                    className=" font-urbanistr md:w-[70%] px-2 md:px-5 md:text-xl "
                  >
                    {service.firstText}
                  </p>
                  <h3 className="font-menlor font-semibold text-white text-lg md:text-xl">
                    {service.subservice}
                  </h3>
                  <div className="flex flex-col gap-5 md:flex-row md:gap-10 text-sm px-2">
                    <p className="md:w-[15%]">{service.secondText}</p>
                    <p className="md:w-[15%]">{service.thirdText}</p>
                    <div className="md:pl-40 flex flex-row justify-end py-5 md:flex-col md:justify-center">
                      <ContactButton
                        height="md:h-16"
                        width="md:w-36 w-32"
                        textsize="md:text-lg text-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {frenchServices?.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave(service.id)}
              className="flex flex-col py-10 border-b px-5 border-wlite"
            >
              <div className="flex gap-10">
                <h2 className="text-white font-menlor font-semibold text-4xl uppercase py-3">
                  {service.serviceName}
                </h2>
                <Image src={arrowimg} width={15} height={15} alt="arrow" />
              </div>
              <div
                ref={(el) => {
                  serviceRefs.current[service.id] = el;
                }}
                className="flex gap-10 items-start overflow-hidden  h-0"
              >
                <div className=" ">
                  <Image
                    src={serviceImg}
                    width={3}
                    height={5}
                    alt="image"
                    className="h-fit"
                  />
                </div>
                <div className="flex flex-col gap-12 pt-5">
                  <p className="font-urbanistr w-[70%] px-5 text-xl ">
                    {service.firstText}
                  </p>
                  <h3 className="font-menlor font-semibold text-white text-xl">
                    {service.subservice}
                  </h3>
                  <div className="flex gap-10 text-sm px-2">
                    <p className="w-[15%]">{service.secondText}</p>
                    <p className="w-[15%]">{service.thirdText}</p>
                    <div className="pl-40">
                      <ContactButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end w-full">
        <div className="mt-[5%] flex justify-end items-end ">
          <GetAQuoteButton />
        </div>
      </div>
    </div>
  );
}
