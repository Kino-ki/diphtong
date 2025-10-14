"use client";

import gsap from "gsap";
// import { useLayoutEffect } from "react";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Analogizing from "@/components/projectSection/analogizing";
import BeancesProject from "@/components/projectSection/beances";
import Esther from "@/components/projectSection/esther";
import ProjNav from "@/components/navigation/ProjNav";
import CollabProjects from "@/components/projectSection/CollabProjects";
import UpcomingProjects from "@/components/projectSection/UpcomingProjects";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-diphblack relative">
      <ProjNav />
      {/*  --------------------------------ANALOG----------------------------- */}

      <section
        id="analogizing"
        data-speed="1"
        className="h-[110svh] overflow-hidden "
      >
        <Analogizing speed="0.5" />
      </section>
      {/*  --------------------------------BEANCES----------------------------- */}
      <section
        data-speed="1"
        id="beances_editions"
        className="outer relative h-[110svh] bg-beancesprojmobile overflow-hidden  "
      >
        <BeancesProject speed="0.5" />
      </section>

      {/* ------------------------esther ----------------------------------- */}
      <section
        id="esther_portfolio"
        data-speed="1"
        className=" outer h-[110svh]  overflow-hidden bg-estherprojmobile bg-auto lg:bg-black "
      >
        <Esther speed={0.5} />
      </section>
      {/* ---------------------------OTHER ------------------------------------ */}
      <section
        data-speed="1"
        className=" outer h-[110svh]  overflow-hidden bg-auto lg:bg-diphblack "
      >
        <CollabProjects speed="0.5" />
      </section>
      <section
        data-speed="1"
        className=" outer h-[110svh]  overflow-hidden bg-auto lg:bg-diphblack "
      >
        <UpcomingProjects speed="0.5" />
      </section>
    </div>
  );
}
