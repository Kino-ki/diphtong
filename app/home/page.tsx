"use client";

import { useEffect, useRef } from "react";
import diphlogo from "@/public/images/bgdragon.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import Image from "next/image";
import HeroSection from "@/components/sectionshome/HeroSection";
import ReachOutSection from "@/components/ReachOutSection";
import SectionCta from "@/components/sectionshome/SectionCta";
import SectionWhyUs from "@/components/sectionshome/SectionWhyUs";
import PreHomeSlides from "@/components/sectionshome/PreHomeSlides";
import HomeHorizontalScroll from "@/components/sectionshome/HomeHorizontalScroll";
import SectionServices from "@/components/sectionshome/SectionServices";
import Projects from "@/components/sectionshome/Projects";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function HomePage() {
  const bgImageRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({ smooth: 1.5, effects: true });
    smoother.effects("imgdragon", { speed: 1, lag: 0 });
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
      backgroundColor: "#c3c3c3",
      duration: 10,
      ease: "power1.out",
      scrollTrigger: {
        trigger: bgRef.current,
        // markers: true,
        // pin: true,
        start: "top 10%",
        end: "bottom 60%",
        scrub: -10,
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);
  return (
    <div>
      <div className="bg-diphblack relative -z-0 ">
        {/* <div
          ref={bgImageRef}
          className=" fixed bottom-5 left-5 opacity-[0.5] z-50 mix-blend-difference"
        >
          <Image id="imgdragon" src={diphlogo} width={60} alt="logo" />
        </div> */}
        <div className="">
          <HeroSection />
          <SectionCta />
          <SectionWhyUs />
          <div className="mt-5 bg-wlite">
            <PreHomeSlides />
            <HomeHorizontalScroll />
            <Projects />
          </div>
          <SectionServices />
        </div>
        <ReachOutSection />
      </div>
    </div>
  );
}
