"use client";

// import diphlogo from "@/public/images/bgdragon.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import Image from "next/image";
import HeroSection from "@/components/sectionshome/HeroSection";
import ReachOutSection from "@/components/sectionshome/ReachOutSection";
import SectionCta from "@/components/sectionshome/SectionCta";
import SectionWhyUs from "@/components/sectionshome/SectionWhyUs";
import PreHomeSlides from "@/components/sectionshome/PreHomeSlides";
import HomeHorizontalScroll from "@/components/sectionshome/HomeHorizontalScroll";
import SectionServices from "@/components/sectionshome/SectionServices";
import Projects from "@/components/sectionshome/Projects";
import { useEffect } from "react";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function HomePage() {
  // const bgImageRef = useRef<HTMLDivElement | null>(null);
  // const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
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
          <div className=" bg-wlite">
            <SectionWhyUs />
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
