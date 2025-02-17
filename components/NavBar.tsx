"use client";

import Image from "next/image";
import diphtext from "@/public/images/dIphtongtext.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangButton } from "./Buttons";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  // ----------------------scroll monitor function
  useEffect(() => {
    // if (pathname !== "/home") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // ------------------------GSAP function

  useEffect(() => {
    if (!logoRef.current) return;
    if (pathname !== "/home") return;
    const ref = logoRef.current;
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

    requestAnimationFrame(() => ScrollTrigger.refresh());

    // Cleanup function
    return () => {
      tl.kill(); // Kill the timeline
      gsap.set(ref, { clearProps: "all" });
    };
  }, [logoRef.current, pathname]);

  return (
    <div
      key={pathname}
      className={`fixed top-0 z-40 w-full  text-wlite pl-16 pr-3 text-[1.1rem]/5 font-menlor flex  ${
        scrollY > 200 ? "mix-blend-difference" : ""
      }  tracking-[0.25rem]`}
    >
      <div className="flex justify-between w-full pt-3">
        <ul className="flex gap-20   ">
          <li className="">
            <Link href="/services">SERVICES</Link>
          </li>

          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="">OUR PROJECTS</li>
        </ul>
        <div className=" top-2">
          <Link href="/">
            <Image
              ref={logoRef}
              src={diphtext}
              width={350}
              height={50}
              alt="text"
              className=""
            />
          </Link>
        </div>

        <ul className=" text-wlite  flex ">
          <li>CONTACT US</li>
          <div className="flex flex-col justify-start"></div>
        </ul>
      </div>
      <div className="flex flex-col justify-center pl-8">
        <LangButton />
      </div>
    </div>
  );
}
