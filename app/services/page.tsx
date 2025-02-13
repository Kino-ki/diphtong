"use client";
import { ContactButton, GetAQuoteButton } from "@/components/Buttons";
import arrowimg from "@/public/images/servicearrow.svg";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import content from "@/data/content.json";
import serviceImg from "@/public/images/servicesImg.svg";

export default function Services() {
  const [hoverIndex, setHoverIndex] = useState<string | null>(null);
  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleMouseEnter = (id: string) => {
    setHoverIndex(id);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const { servicesPage } = content?.english || {};

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
    <div className="flex flex-col justify-start pt-[6%] px-[15%] h-auto pb-40">
      {servicesPage?.map((service, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(service.id)}
          onMouseLeave={handleMouseLeave}
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
      <div className="mt-[5%] flex justify-end items-end  w-full  ">
        <GetAQuoteButton />
      </div>
    </div>
  );
}
