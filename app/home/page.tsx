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

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  return (
    <div>
      <div className="relative">
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
