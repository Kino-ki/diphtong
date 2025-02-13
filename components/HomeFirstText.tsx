"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HomeFirstText() {
  const firstTextRef = useRef<HTMLDivElement | null>(null);
  const secondTextRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!firstTextRef.current || !secondTextRef.current) return;

    // Timeline for the first text
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: firstTextRef.current,

        start: "top 20%",
        end: "bottom 20%",
        scrub: 2,
      },
    });

    tl1
      .fromTo(
        firstTextRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut" }
      )
      .to(firstTextRef.current, {
        opacity: 1,
        duration: 2,
      })
      .to(firstTextRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: secondTextRef.current,
        start: "center top",
        end: "2000vh top",
        scrub: 1,
      },
    });

    tl2
      .fromTo(
        secondTextRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut" }
      )
      .to(secondTextRef.current, {
        opacity: 0,
        duration: 2,
      });

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <div className="relative  h-[100vh] bg-black z-0">
      {" "}
      <div className="flex flex-col justify-center h-[100vh] relative">
        <div
          ref={firstTextRef}
          className="fixed top-[40%] items-center flex flex-col gap-20 w-full h-full opacity-0 bg-black"
        >
          <h1 className="flex justify-center font-urbanistr font-semibold w-[70%] text-6xl text-center tracking-[1rem]">
            Transform Your Online Presence & Grow Your Business
          </h1>
          <div className="flex justify-center items-center">
            <button className="bg-wlite rounded-lg text-black py-3 px-2">
              <p className="mx-auto w-[70%] text-xl tracking-wider">
                Got an Idea? Let’s Talk!
              </p>
            </button>
          </div>
        </div>
        <div className=" "></div>
        <div
          ref={secondTextRef}
          className="fixed h-[120vh] top-[35%] left-0 w-full flex justify-center px-[12%] opacity-0"
        >
          <p className=" font-urbanistr text-center text-4xl tracking-[0.2rem] leading-[3.5rem] text-pretty">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. sed vitae
            tempor nisl. nulla malesuada feugiat dolor sed tincidunt. vivamus
            mauris ipsum, porttitor eu rutrum in, malesuada a purus. duis at
            vulputate sem. morbi metus nibh, efficitur at aliquam in, vulputate
            sed libero. nulla quis iaculis orci, non euismod elit. duis eget
            sollicitudin erat. pellentesque in nisi ac lacus pretium efficitur.
          </p>
        </div>
      </div>
    </div>
  );
}
