"use client";

import HeroSection from "@/components/sectionshome/HeroSection";
import ReachOutSection from "@/components/sectionshome/ReachOutSection";
import SectionCta from "@/components/sectionshome/SectionCta";
import SectionWhyUs from "@/components/sectionshome/SectionWhyUs";
// import PreHomeSlides from "@/components/sectionshome/PreHomeSlides";
// import HomeHorizontalScroll from "@/components/sectionshome/HomeHorizontalScroll";
import SectionServices from "@/components/sectionshome/SectionServices";
import Projects from "@/components/sectionshome/Projects";
// import gsap from "gsap";
// import { ScrollSmoother, ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function HomePage() {
  return (
    <div>
      <div className="relative">
        <div className="">
          <HeroSection />
          <SectionCta />
          <div className="z-0">
            <SectionWhyUs />
          </div>
          <div className=" bg-wlite z-10 relative ">
            {/* <PreHomeSlides />
            <HomeHorizontalScroll /> */}
            <Projects />
          </div>
          <SectionServices />
        </div>
        <ReachOutSection />
      </div>
    </div>
  );
}
