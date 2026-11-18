"use client";

import HeroSection from "@/components/sectionshome/HeroSection";
import ReachOutSection from "@/components/sectionshome/ReachOutSection";
import Projects from "@/components/sectionshome/Projects";
import InterversionSect from "@/components/sectionshome/InterversionSect";
import HowCollab from "@/components/sectionshome/HowCollab";

export default function HomePage() {
  return (
    <div>
      <div className="relative">
        <div className="">
          <HeroSection />
          <div aria-hidden="true" className="h-[100svh] bg-wlite" />
          <InterversionSect />
          <div className="  z-10 relative lg:-mt-2 ">
            <Projects />
            <HowCollab />
          </div>
        </div>
        <ReachOutSection />
      </div>
    </div>
  );
}
