"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHorizontalScroll() {
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const isPaused = { current: false };

  useEffect(() => {
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

    const tl = gsap.to(slidesRef.current, {
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
      tl.kill();
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <div ref={slidesRef} className="flex ">
        {/* -------------------SLIDE ONE ------------------------- */}
        <div className="slide flex h-[105vh] w-[100vw] bg-wlite  shrink-0">
          <div className="h-full w-[40%]  bg-slideone bg-cover "></div>
          <div className="h-full flex flex-col justify-between py-60 text-black ">
            <h1 className=" font-menlor text-5xl tracking-widest text-center leading-[5rem] text-[#999696]">
              Understanding <br />{" "}
              <span className="text-black "> Your Needs</span>
            </h1>
            <p className="flex justify-center text-center mx-auto text-xl font-urbanistr w-[60%]">
              `&quot;We Listen & Plan`&quot; We start by understanding your
              business, goals, and vision. Through a strategy session, we define
              your needs and outline the best approach for your website. Key
              points: Discovery call / consultation Understanding your brand &
              audience Defining project goals & scope
            </p>
          </div>
        </div>
        {/* -------------------SLIDE TWO ------------------------- */}

        <div className="slide flex shrink-0 w-[100vw] h-[105vh] flex-col justify-between text-black py-40 bg-bgslidetwo bg-cover">
          <h1 className=" font-menlor text-4xl text-center">
            Creating a Website{" "}
            <span className="text-[#999696] ">
              <br />
              Your Users Will Love
            </span>
          </h1>
          <p className="flex justify-center text-center mx-auto text-xl font-urbanistr w-[60%]">
            We Design for Your Audience A beautiful website is great, but a
            website that engages and converts is even better. We design with
            your users in mind, ensuring a seamless experience that reflects
            your brand and drives action. Key points: Intuitive, user-friendly
            design Fast, responsive, and accessible on all devices Optimized to
            convert visitors into customers
          </p>
        </div>
        {/* -------------------SLIDE THREE ------------------------- */}

        <div className=" slide h-[105vh] shrink-0 flex w-[120vw] bg-wlite">
          <div className="h-full bg-slidetwopic bg-cover w-[50%] "></div>
          <div className="flex flex-col justify-center  pl-20 w-full text-black gap-40 ">
            <h1 className="font-menlor text-4xl text-start">
              Launching & Helping <br />{" "}
              <span className="text-[#999696] ">Your Business Grow</span>{" "}
            </h1>
            <p className="flex justify-center text-start text-xl font-urbanistr w-[60%] ">
              We Launch & Support Your Success Your website isn’t just a
              project—it’s a tool to help your business thrive. We ensure a
              smooth launch and provide ongoing support so your site stays fast,
              secure, and ready to grow with you. 📌 Key points: Hassle-free
              launch & optimization Performance tracking & updates Continuous
              support to help your business evolve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
