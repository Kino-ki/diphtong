"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import one from "@/public/images/1.svg";
import two from "@/public/images/2.svg";
import three from "@/public/images/3.svg";
import Image from "next/image";
// import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHorizontalScroll() {
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const isPaused = { current: false };
  const { language } = useLanguage();

  // const { EN, FR } = data;
  // const englishslides = EN.horizontalScroll;
  // const frenchslides = FR.horizontalScroll;

  useEffect(() => {
    if (!slidesRef.current) return;
    const mm = gsap.matchMedia();

    mm.add(
      // Desktop
      "(min-width: 1024px)",
      () => {
        const slides = gsap.utils.toArray(".slide");

        function pauseScroll() {
          if (!isPaused.current) {
            isPaused.current = true;
            setTimeout(() => {
              isPaused.current = false;
            }, 1000);
          }
        }
        gsap.to(slidesRef.current, {
          xPercent: -100 * (slides.length - 1),
          ease: "power1.inOut",
          duration: 10,
          scrollTrigger: {
            trigger: slidesRef.current,

            start: "2% top",
            end: () => `+=${slidesRef.current!.offsetWidth}`,
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (self.direction !== 0) pauseScroll();
            },
          },
        });
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <div className="bg-wlite">
      {language === "EN" ? (
        <div className=" overflow-hidden pb-10 lg:pb-0">
          <div
            ref={slidesRef}
            className="flex flex-col gap-0 lg:gap-5 lg:flex-row "
          >
            {/* -------------------SLIDE ONE ------------------------- */}
            <section className="slide flex lg:flex-row flex-col gap-5 lg:gap-0 lg:h-[103vh] lg:w-[100vw] bg-wlite  lg:shrink-0 relative ">
              <div className="h-full w-[30%] hidden lg:flex  bg-slideone bg-cover "></div>
              <Image
                src={one}
                width={250}
                height={100}
                alt="one"
                className="relative lg:absolute   lg:bottom-10 lg:right-10"
              />

              <div className="h-full flex flex-col lg:gap-10  text-black  lg:py-40 lg:w-[55%] lg:px-40 ">
                <h1
                  className=" font-menlor absolute lg:relative lg:top-0 px-5 top-[5%] text-start  font-medium text-[3.4rem] hyphens-auto  lg:tracking-widest leading-[5rem] lg:leading-[5rem] text-[#999696]"
                  lang="de"
                >
                  Understanding <br />{" "}
                  <span className="text-black "> Your Needs</span>
                </h1>
                <p className="flex flex-col text-lg px-5  lg:text-2xl/relaxed font-urbanistr   pb-5 h-full">
                  &quot;We Listen & Plan&quot; <br /> We start by understanding
                  your business, goals, and vision. <br /> Through a strategy
                  session, we define your needs and outline the best approach
                  for your website.
                  <br /> Key points: <br /> Discovery call / consultation
                  Understanding your brand & audience Defining project goals &
                  scope
                </p>
              </div>
            </section>
            {/* -------------------SLIDE TWO ------------------------- */}

            <section className="slide px-5 lg:px-0 flex lg:flex-row flex-col gap-5 relative lg:shrink-0  lg:w-[90vw] lg:h-[103vh] text-black lg:py-40 ">
              <Image
                src={two}
                width={250}
                height={100}
                alt="3"
                className="relative lg:absolute lg:bottom-10 lg:left-[70%]"
              />
              <div className="h-full flex flex-col lg:mx-10 lg:gap-10 lg:w-[60%]">
                <h1 className=" absolute lg:relative lg:top-0  top-[5%] lg:mx-auto  font-menlor text-[3.4rem] text-start">
                  <span className="text-[#999696] ">Creating a Website </span>
                  <br />
                  Your Users Will Love
                </h1>
                <p className="fflex flex-col justify-end text-lg  lg:mx-auto lg:text-2xl/relaxed font-urbanistr lg:w-[60%]  pb-5 h-full ">
                  We Design for Your Audience <br /> A beautiful website is
                  great, but a website that engages and converts is even better.
                  We design with your users in mind, ensuring a seamless
                  experience that reflects your brand and drives action. <br />{" "}
                  Key points: <br /> Intuitive, user-friendly design
                  <br /> Fast, responsive, and accessible on all devices <br />{" "}
                  Optimized to convert visitors into customers
                </p>
              </div>
            </section>
            {/* -------------------SLIDE THREE ------------------------- */}

            <section className=" flex lg:flex-row flex-col gap-5 relative slide lg:h-[103vh] lg:shrink-0 w-screen lg:w-[100vw]  px-5 lg:px-0">
              <Image
                src={three}
                width={250}
                height={100}
                alt="3"
                className=" relative lg:absolute lg:bottom-10 lg:right-40"
              />
              <div className=" bg-slidetwopic  bg-cover lg:w-[50%] "></div>
              <div className="flex flex-col justify-center  lg:pl-20 w-full text-black lg:gap-10 ">
                <h1 className="absolute lg:relative lg:top-0  top-[5%]   font-menlor text-[3.4rem] text-start">
                  Launching & Helping <br />{" "}
                  <span className="text-[#999696] ">Your Business Grow</span>{" "}
                </h1>
                <p className="flex justify-center lg:mx-10 text-start  text-lg lg:text-2xl/relaxed  font-urbanistr lg:w-[60%] ">
                  We Launch & Support Your Success <br /> Your website isn’t
                  just a project—it’s a tool to help your business thrive.{" "}
                  <br /> We ensure a smooth launch and provide ongoing support
                  so your site stays fast, secure, and ready to grow with you.{" "}
                  <br /> Key points: <br /> Hassle-free launch & optimization{" "}
                  <br /> Performance tracking & updates <br /> Continuous
                  support to help your business evolve
                </p>
              </div>
            </section>
          </div>
        </div>
      ) : (
        // ------------------------------------------------FRENCH ------------
        <div className=" overflow-hidden bg-wlite">
          <div ref={slidesRef} className="flex ">
            {/* -------------------SLIDE ONE ------------------------- */}
            <section className="slide flex h-[103vh] w-[100vw] bg-wlite  lg:shrink-0 relative">
              <div className="h-full lg:w-[30%]  bg-slideone bg-cover "></div>
              <Image
                src={one}
                width={250}
                height={100}
                alt="one"
                className="absolute bottom-1/4 right-[10%]"
              />
              <div className="h-full flex flex-col justify-between lg:py-[8%] text-black ">
                <h1 className=" font-menlor font-medium lg:text-[3.4rem]  tracking-widest text-center lg:leading-[5rem] text-[#999696]">
                  Understanding <br />{" "}
                  <span className="text-black "> Your Needs</span>
                </h1>
                <p className="flex flex-col justify-end text-center mx-auto text-3xl/relaxed font-urbanistr w-[60%] pb-5 h-full">
                  &quot;We Listen & Plan&quot; <br /> We start by understanding
                  your business, goals, and vision. <br /> Through a strategy
                  session, we define your needs and outline the best approach
                  for your website.
                  <br /> Key points: <br /> Discovery call / consultation
                  Understanding your brand & audience Defining project goals &
                  scope
                </p>
              </div>
            </section>
            {/* -------------------SLIDE TWO ------------------------- */}

            <section className="slide flex justify-center shrink-0 w-[100vw] h-[103vh] text-black py-40 bg-bgslidetwo bg-cover">
              <div className="h-full flex flex-col gap-40 w-[60%]">
                <h1 className=" font-menlor text-[3.4rem] text-start">
                  <span className="text-[#999696] ">Creating a Website </span>
                  <br />
                  Your Users Will Love
                </h1>
                <p className="flex justify-start text-start  text-2xl/relaxed font-urbanistr ">
                  We Design for Your Audience <br /> A beautiful website is
                  great, but a website that engages and converts is even better.
                  We design with your users in mind, ensuring a seamless
                  experience that reflects your brand and drives action. <br />{" "}
                  Key points: <br /> Intuitive, user-friendly design
                  <br /> Fast, responsive, and accessible on all devices <br />{" "}
                  Optimized to convert visitors into customers
                </p>
              </div>
            </section>
            {/* -------------------SLIDE THREE ------------------------- */}

            <section className=" slide h-[103vh] shrink-0 flex w-[120vw] bg-wlite relative">
              <Image
                src={three}
                width={250}
                height={100}
                alt="3"
                className=" absolute bottom-10 left-[70%]"
              />
              <div className=" bg-slidetwopic bg-cover w-[50%] "></div>
              <div className="flex flex-col justify-center  pl-20 w-full text-black gap-40 ">
                <h1 className="font-menlor text-[3.4rem] text-start">
                  Launching & Helping <br />{" "}
                  <span className="text-[#999696] ">Your Business Grow</span>{" "}
                </h1>
                <p className="flex justify-center text-start text-2xl/relaxed  font-urbanistr w-[60%] ">
                  We Launch & Support Your Success <br /> Your website isn’t
                  just a project—it’s a tool to help your business thrive.{" "}
                  <br /> We ensure a smooth launch and provide ongoing support
                  so your site stays fast, secure, and ready to grow with you.{" "}
                  <br /> Key points: <br /> Hassle-free launch & optimization{" "}
                  <br /> Performance tracking & updates <br /> Continuous
                  support to help your business evolve
                </p>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
