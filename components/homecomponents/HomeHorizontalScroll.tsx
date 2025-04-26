"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import one from "@/public/images/1.svg";
import three from "@/public/images/3.svg";
import Image from "next/image";
import data from "@/data/content.json";
import { useLanguage } from "@/app/contexts/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHorizontalScroll() {
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const sectionsNameRef = useRef<HTMLDivElement | null>(null);
  const isPaused = { current: false };
  const { language } = useLanguage();

  const { EN, FR } = data;
  const englishslides = EN.horizontalScroll;
  const frenchslides = FR.horizontalScroll;

  useEffect(() => {
    if (!titleRef.current) return;

    if (titleRef.current) {
      gsap.to(titleRef.current, {
        xPercent: -34,
        // yPercent: 40,.
        scale: 0.3,
        ease: "sine.inOut",
        duration: 2,
        // stagger: 1,

        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });
    }
    if (!slidesRef.current) return;
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

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <div>
      {language === "EN" ? (
        <div className=" overflow-hidden bg-wlite">
          <div className="flex flex-col justify-start w-full">
            <p
              ref={titleRef}
              className="flex text-start w-full text-[12vw] font-urbanistr tracking-wider  text-black capitalize"
            >
              {englishslides.intro.h1}
            </p>
            <div className=" flex  justify-between pt-[10%]">
              <p className="text-[#999696]  text-3xl/relaxed tracking-wider font-urbanistb py-20 w-1/3 px-10">
                {englishslides.intro.text}
              </p>
              <div
                ref={sectionsNameRef}
                className="flex flex-col  text-base text-[#323232] font-menlor w-1/3  "
              >
                <p className="py-10 pl-5"> {englishslides.firstSlide}</p>
                <p className="w-full pl-5 border-b border-t border-[#999696] py-10">
                  {englishslides.secondSlide}
                </p>
                <p className="py-10 pl-5">{englishslides.thirdSlide}</p>
              </div>
            </div>
          </div>
          <div ref={slidesRef} className="flex ">
            {/* -------------------SLIDE ONE ------------------------- */}
            <section className="slide flex h-[103vh] w-[100vw] bg-wlite  shrink-0 relative">
              <div className="h-full w-[30%]  bg-slideone bg-cover "></div>
              <Image
                src={one}
                width={250}
                height={100}
                alt="one"
                className="absolute bottom-1/4 right-[10%]"
              />
              <div className="h-full flex flex-col justify-between py-[8%] text-black ">
                <h1 className=" font-menlor font-medium text-[3.4rem]  tracking-widest text-center leading-[5rem] text-[#999696]">
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
      ) : (
        // ------------------------------------------------FRENCH ------------
        <div className=" overflow-hidden bg-wlite">
          <div className="flex flex-col justify-start w-full">
            <p
              ref={titleRef}
              className="flex text-start w-full text-[12vw] font-urbanistr tracking-wider  text-black capitalize"
            >
              {frenchslides.intro.h1}
            </p>
            <div className=" flex  justify-between pt-[10%]">
              <p className="text-[#999696]  text-3xl/relaxed tracking-wider font-urbanistb py-20 w-1/3 px-10">
                {frenchslides.intro.text}
              </p>
              <div
                ref={sectionsNameRef}
                className="flex flex-col  text-base text-[#323232] font-menlor w-1/3  "
              >
                <p className="py-10 pl-5"> {frenchslides.firstSlide}</p>
                <p className="w-full pl-5 border-b border-t border-[#999696] py-10">
                  {frenchslides.secondSlide}
                </p>
                <p className="py-10 pl-5">{frenchslides.thirdSlide}</p>
              </div>
            </div>
          </div>
          <div ref={slidesRef} className="flex ">
            {/* -------------------SLIDE ONE ------------------------- */}
            <section className="slide flex h-[103vh] w-[100vw] bg-wlite  shrink-0 relative">
              <div className="h-full w-[30%]  bg-slideone bg-cover "></div>
              <Image
                src={one}
                width={250}
                height={100}
                alt="one"
                className="absolute bottom-1/4 right-[10%]"
              />
              <div className="h-full flex flex-col justify-between py-[8%] text-black ">
                <h1 className=" font-menlor font-medium text-[3.4rem]  tracking-widest text-center leading-[5rem] text-[#999696]">
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
