"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { scrollToHashOnLoad } from "@/components/HelperFunctions";
import Analogizing from "@/components/projectSection/analogizing";
import BeancesProject from "@/components/projectSection/beances";
import Esther from "@/components/projectSection/esther";
import CollabProjects from "@/components/projectSection/CollabProjects";
import UpcomingProjects from "@/components/projectSection/UpcomingProjects";
import Plt from "@/components/projectSection/plt";
import Ccl from "@/components/projectSection/ccl";

export default function ProjectsPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      scrollToHashOnLoad();
    });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="flex flex-col bg-diphblack ">
      {/*  --------------------------------PLT----------------------------- */}

      <section data-speed="1" className=" outer relative h-[110svh]   ">
        <div data-speed="0.5" className="h-full inner">
          <Plt />
        </div>
      </section>
      {/*  --------------------------------CCL----------------------------- */}

      <section
        data-speed="1"
        className=" outer relative h-[110svh] overflow-hidden "
      >
        <div data-speed="0.5" className="h-full inner">
          <Ccl />
        </div>
      </section>
      {/*  --------------------------------ANALOG----------------------------- */}

      <section
        data-speed="1"
        className=" outer relative h-[120svh] overflow-hidden  "
      >
        <div data-speed="0.5" className="h-full  inner">
          <Analogizing />
        </div>
      </section>
      {/*  --------------------------------BEANCES----------------------------- */}
      <section
        id="beances"
        data-speed="1"
        className="outer relative h-[120svh] bg-beancesprojmobile overflow-hidden"
      >
        <div data-speed="0.5" className="inner h-full">
          <BeancesProject />
        </div>
      </section>

      {/* ------------------------esther ----------------------------------- */}
      <section
        id="esther_portfolio"
        className=" outer h-[120svh] overflow-hidden bg-auto lg:bg-black "
        data-speed="1"
      >
        <div data-speed="0.5" className=" h-full inner">
          <Esther />
        </div>
      </section>
    </div>
  );
}
