"use client";

import Image from "next/image";
import diphtext from "@/public/images/dIphtongtext.svg";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function NavBar() {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  // ----------------------scroll monitor function
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ------------------------GSAP function
  useEffect(() => {
    if (!logoRef.current) return;

    const imageWidth = 350;
    const viewportWidth = window.innerWidth;

    const scaleFactor = imageWidth ? (viewportWidth * 0.95) / imageWidth : 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "400px top",
        scrub: true,
      },
    });

    tl.from(logoRef.current, {
      scale: scaleFactor,
      y: "12rem",
      x: "-55%",
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      className={`fixed top-0 z-40 w-full  text-wlite px-16 text-[1.1rem]/5 font-menlor  ${
        scrollY > 200 ? "mix-blend-difference" : ""
      }  tracking-[0.25rem]`}
    >
      <div className="flex justify-between w-full pt-3">
        <ul className="flex gap-20   ">
          <li className="">SERVICES</li>
          <li>ABOUT</li>
          <li className="">OUR PROJECTS</li>
        </ul>
        <div ref={logoRef} className=" top-2">
          <Image src={diphtext} width={350} alt="text" className="" />
        </div>

        <ul className=" text-wlite ">
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}
