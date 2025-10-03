"use client";

import gsap from "gsap";
import { useLayoutEffect } from "react";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Analogizing from "@/components/projectSection/analogizing";
import BeancesProject from "@/components/projectSection/beances";
import Esther from "@/components/projectSection/esther";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ProjectsPage() {
  useLayoutEffect(() => {
    const init = () => {
      if (ScrollSmoother.get()) ScrollSmoother.get()?.kill();

      ScrollSmoother.create({
        smooth: 3,
        effects: true,
        smoothTouch: 0.1,
      });
    };

    if (document.readyState === "complete") {
      init();
    } else {
      window.addEventListener("load", init);
      return () => window.removeEventListener("load", init);
    }
  }, []);

  return (
    <div className="flex flex-col bg-diphblack ">
      {/*  --------------------------------ANALOG----------------------------- */}

      <section
        id="analogizing"
        data-speed="1"
        className="h-[110svh] overflow-hidden "
      >
        <Analogizing speed="0.5" />
      </section>
      <div data-speed="2" className="w-full h-[50svh] bg-diphblack"></div>
      {/*  --------------------------------BEANCES----------------------------- */}
      <section
        data-speed="1"
        id="beances"
        className="outer relative h-[110svh] bg-beancesprojmobile  bg-white overflow-hidden  "
      >
        <BeancesProject speed="0.5" />
      </section>
      <div data-speed="2" className="w-full  h-[50svh] bg-diphblack"></div>

      {/* ------------------------esther ----------------------------------- */}
      <section
        id="portfolio"
        data-speed="1"
        className=" outer h-[100svh]  overflow-hidden bg-estherprojmobile bg-auto lg:bg-black "
      >
        <Esther speed={0.5} />
      </section>
    </div>
  );
}
