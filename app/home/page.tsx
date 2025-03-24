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
gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const bgImageRef = useRef<HTMLDivElement | null>(null);

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

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);
  return (
    <div className="bg-black relative -z-0 ">
      <div
        ref={bgImageRef}
        className=" fixed inset-0 my-auto h-fit w-fit mx-auto opacity-[0.08] -z-20 "
      >
        <Image src={diphlogo} width={750} height={500} alt="logo" />
      </div>
      <div className="">
        <HeroSection />
      </div>
      <div className="">
        <HomeFirstText />
      </div>
      <div className="h-[100vh] "> </div>
      <HomeHorizontalScroll />
      <div className="z-30 relative">
        <ProjServ />
      </div>
    </div>
  );
}
