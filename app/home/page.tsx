"use client";

import { useRef, useEffect } from "react";
import diphlogo from "@/public/images/bgdragon.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import HomeFirstText from "@/components/homecomponents/HomeFirstText";
import HomeHorizontalScroll from "@/components/homecomponents/HomeHorizontalScroll";
import HeroSection from "@/components/homecomponents/HeroSection";
import ProjServ from "@/components/homecomponents/ProjServ";
import ServicesSection from "@/components/homecomponents/ServicesSections";
import ReachOutSection from "@/components/ReachOutSection";
gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const bgImageRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(bgImageRef.current, {
      rotation: 360,
      ease: "power1.in",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
      },
    });
    gsap.to(bgRef.current, {
      backgroundColor: "#d9d9d9",
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: bgRef.current,
        // markers: true,
        // pin: true,
        start: "top 10%",
        end: "80% 70%",
        scrub: -10,
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);
  return (
    <div className="bg-black relative -z-0 ">
      <div
        ref={bgImageRef}
        className=" fixed bottom-5 left-5 opacity-[0.5] z-50 mix-blend-difference"
      >
        <Image src={diphlogo} width={60} height={60} alt="logo" />
      </div>
      <div className="-z-0">
        <HeroSection />
      </div>
      <div className="-z-0 relative">
        <HomeFirstText />
      </div>
      <div ref={bgRef} className="h-[150vh]"></div>
      <div className="z-10 relative">
        <ProjServ />
      </div>
      <div className="z-30 relative ">
        <HomeHorizontalScroll />
        <ServicesSection />
      </div>
      <div className="z-30 relative">
        <ReachOutSection />
      </div>
    </div>
  );
}
