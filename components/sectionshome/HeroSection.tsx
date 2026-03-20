"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import diphtexte from "@/public/images/logo/vertical.svg";
import { useLanguage } from "@/components/language/LangContext";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

const HERO_READY_EVENT = "diphtong:hero-ready";
const SPLASH_HIDDEN_EVENT = "diphtong:splash-hidden";

export default function HeroSection() {
  const { dictionary } = useLanguage();
  const hero = dictionary.homepage;
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const txtRef = useRef<HTMLHeadingElement | null>(null);
  const creativRef = useRef<HTMLHeadingElement | null>(null);
  const introStartedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const dispatchReady = () => {
      window.dispatchEvent(new Event(HERO_READY_EVENT));
    };

    if (video.readyState >= 2) {
      dispatchReady();
      return;
    }

    video.addEventListener("loadeddata", dispatchReady, { once: true });
    video.addEventListener("canplay", dispatchReady, { once: true });

    return () => {
      video.removeEventListener("loadeddata", dispatchReady);
      video.removeEventListener("canplay", dispatchReady);
    };
  }, []);

  const handlePause = () => {
    setIsPlaying(!isPlaying);
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const shouldAnimateIntro =
      sessionStorage.getItem("hasSeenSplash") !== "true";

    gsap.fromTo(
      heroTextRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: heroTextRef.current,
          start: "bottom 80%",
          end: "bottom 70%",
          // markers: true,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      },
    );

    if (!shouldAnimateIntro) {
      gsap.set(videoRef.current, { opacity: 1 });
      gsap.set(txtRef.current, { opacity: 1, y: 0 });
      gsap.set(creativRef.current, { opacity: 1, y: 0 });
      introStartedRef.current = true;
      return;
    }

    gsap.set(videoRef.current, { opacity: 0 });
    gsap.set(txtRef.current, { opacity: 0, y: 50 });
    gsap.set(creativRef.current, { opacity: 0, y: 20 });

    const introTl = gsap
      .timeline({ paused: true })
      .to(videoRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      })
      .to(
        creativRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        ">0.1",
      )
      .to(
        txtRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        ">0.1",
      );

    const startIntro = () => {
      if (introStartedRef.current) return;
      introStartedRef.current = true;
      introTl.play(0);
    };

    if (sessionStorage.getItem("hasSeenSplash") === "true") {
      startIntro();
    } else {
      window.addEventListener(SPLASH_HIDDEN_EVENT, startIntro, { once: true });
    }

    return () => {
      introTl.kill();
      window.removeEventListener(SPLASH_HIDDEN_EVENT, startIntro);
    };
  }, []);

  return (
    <div
      ref={heroTextRef}
      className="h-[100svh] w-full relative overflow-x-hidden"
    >
      <div className="w-full h-full">
        <video
          ref={videoRef}
          loop
          autoPlay
          playsInline
          muted
          preload="auto"
          poster="/images/poster.jpg"
          className="h-full w-full object-cover "
        >
          <source src="/images/bghero.webm" type="video/webm" />
          <source src="/images/bghero.mp4" type="video/mp4" />
        </video>
        <button
          onClick={handlePause}
          className="absolute bottom-1 right-2 md:bottom-8 md:right-8 z-30  rounded-full opacity-60"
        >
          {isPlaying ? (
            <Image
              src="/images/ICONS/pause.png"
              alt="pause icon"
              width={50}
              height={50}
            />
          ) : (
            <Image
              src="/images/ICONS/playicon.png"
              alt="play icon"
              width={50}
              height={50}
            />
          )}
        </button>
      </div>
      <div className="h-full w-full backdrop-blur-[1px] bg-black/20 z-10 absolute inset-0 ">
        <div className="h-full w-full lg:pt-[18rem] 2xl:pt-[22rem] lg:pb-32 2xl:pb-40 flex justify-center">
          <div className=" flex flex-col py-10 md:py-20 lg:py-0 justify-evenly lg:justify-between w-[95%]  font-figtree">
            <div className="lg:hidden flex justify-center  h-[50svh] md:h-[50svh] w-[50svw] md:w-[40svw] mx-auto relative ">
              <Image
                src={diphtexte}
                alt="diph logo"
                fill
                className="opacity-80"
              />
            </div>
            <h1
              ref={creativRef}
              className=" font-figtree opacity-0  capitalize tracking-widest md:tracking-[0.4rem] lg:tracking-[0.3rem] 2xl:tracking-[0.4rem]  text-3xl md:text-3xl/5  2xl:text-4xl/5  flex text-center lg:text-end justify-center lg:justify-end  "
            >
              {hero.heroh2}
            </h1>

            <h2
              ref={txtRef}
              className="font-urbanistl opacity-0 lg:px-20 2xl:px-40  text-md md:text-xl lg:text-3xl 2xl:text-4xl tracking-wider md:tracking-[0.3rem] 2xl:tracking-[0.3rem] 2xl:leading-[4rem] flex justify-center text-center font-semibold "
            >
              {hero.heroh3}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
