"use client";
import { ContactButton, GetAQuoteButton } from "@/components/Buttons";
import arrowimg from "@/public/images/servicearrow.svg";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import serviceImg from "@/public/images/servicesImg.svg";
import { useLanguage } from "../../components/language/LangContext";

export default function Services() {
  const { dictionary } = useLanguage();
  const services = dictionary.servicesPage;

  const [hoverIndex, setHoverIndex] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const frenchServices = FR.servicesPage;

  const handleMouseEnter = (id: string) => {
    setHoverIndex(id);
  };

  const handleMouseLeave = (id: string) => {
    if (Number(id) !== services.length) {
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
      height: "80vh",
      duration: 1,
      ease: "power2.out",
    });

    return () => {
      gsap.to(target, {
        height: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
    };
  }, [hoverIndex]);

  return (
    <div className="flex flex-col justify-start pt-[6%] px-5 md:px-[5%] h-auto pb-40 bg-diphblack">
      <div className=" ">
        <div className="flex lg:hidden  pt-14 pb-10   ">
          <h1 className="font-menlob uppercase text-[12vw]">Our Services</h1>
        </div>
        {services?.map((service) => (
          <div
            key={service.id}
            onPointerMove={() => handleMouseEnter(service.id)}
            onMouseLeave={() => handleMouseLeave(service.id)}
            className="flex flex-col  py-6 md:py-10 border-b px-5 border-wlite text-start"
          >
            <div
              onTouchStart={() => handleTouch(service.id)}
              className="flex md:gap-10 justify-between md:justify-start h-fit "
            >
              <h2 className="text-wlite font-menlor font-semibold text-xl md:text-4xl uppercase py-3 ">
                {service.serv.h2}
              </h2>
              <div className=" w-3 md:w-10 flex flex-col justify-center">
                <Image
                  src={arrowimg}
                  alt="arrow"
                  className={`object-contain  `}
                />
              </div>
            </div>
            <div
              ref={(el) => {
                serviceRefs.current[service.id] = el;
              }}
              className="flex md:gap-10 items-start overflow-hidden  h-0 "
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
              <div className="flex flex-col gap-8   pt-5">
                <p className=" font-urbanistr px-2 md:px-5 md:text-2xl md:tracking-wide md:leading-loose ">
                  {service.serv.content.map((c, i) =>
                    typeof c === "string" ? c : <b key={i}>{c.bold}</b>
                  )}
                </p>
                <div className="flex justify-evenly py-5 h-fit  mx-12">
                  <div className="h-full flex flex-col justify-center pt-5 ">
                    <h3 className="font-menlor font-semibold text-lg md:text-2xl">
                      {service.serv.h3}
                    </h3>
                  </div>
                  <ul className="">
                    {service.serv.webdevarray.map((el, i) => (
                      <li
                        className="text-2xl p-2  py-5 font-urbanistl border-b border-diphblack"
                        key={i}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between">
                  <p className=" font-urbanistr  px-2 md:px-5 md:text-2xl md:tracking-wide md:leading-loose">
                    {service.serv.conclusion.map((c, i) =>
                      typeof c === "string" ? c : <b key={i}>{c.bold}</b>
                    )}
                  </p>

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

      <div className="flex justify-end w-full">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-[5%] flex justify-end items-end "
        >
          <GetAQuoteButton isHovered={isHovered} divclass="w-60 px-5" />
        </div>
      </div>
    </div>
  );
}
