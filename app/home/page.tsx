"use client";

import { useRef, useEffect } from "react";
import diphlogo from "@/public/images/bgdragon.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import HomeFirstText from "@/components/HomeFirstText";
import HomeHorizontalScroll from "@/components/HomeHorizontalScroll";
import HeroSection from "@/components/HeroSection";
gsap.registerPlugin(ScrollTrigger);

import esthergif from "@/public/images/estherhome.gif";
import beancesgif from "@/public/images/beanceshomes.gif";

export default function HomePage() {
  const bgImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(bgImageRef.current, {
      rotation: 360,
      markers: true,
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
    <div className="bg-black relative ">
      <div
        ref={bgImageRef}
        className=" fixed inset-0 my-auto h-fit w-fit mx-auto opacity-[0.08] z-10"
      >
        <Image src={diphlogo} width={750} height={500} alt="logo" />
      </div>
      <HeroSection />
      <HomeFirstText />
      <div className="h-[50vh] "> </div>
      <HomeHorizontalScroll />
      <div className="flex justify-center">
        <Image
          src={esthergif}
          width={1000}
          height={500}
          alt="esther"
          className="z-50"
        />
        <Image
          src={beancesgif}
          width={1000}
          height={500}
          alt="esther"
          className="z-50"
        />
      </div>
    </div>
  );
}
