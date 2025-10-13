"use client";

import Image from "next/image";
import diphtext from "@/public/images/logo/dIphtongtext.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangButton } from "../Buttons";
import { useLanguage } from "../language/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const { dictionary } = useLanguage();
  const {
    navbar: { services, about, contact, proj },
  } = dictionary;

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/home") return;
    // ----------------------scroll monitor function
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    if (window.scrollY > 50) return;
    const imageWidth = 350;
    const viewportWidth = window.innerWidth;
    const scaleFactor = imageWidth ? (viewportWidth * 0.95) / imageWidth : 1;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        {
          scale: scaleFactor, // initial big size
          y: "12rem",
          x: "-56%",
          transformOrigin: "center center",
        },
        {
          scale: 1, // normal size when scrolled
          y: "0rem",
          x: "0%",
          ease: "power2.out",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "400px top",
            scrub: true,
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div
      id="navbar"
      key={pathname}
      className={`fixed top-0 z-40 w-full  text-wlite px-5 2xl:pl-16 pr-3 text-[1.1rem]/5 font-menlor uppercase lg:flex hidden ${
        pathname.includes("/home") && scrollY < 400
          ? ""
          : "mix-blend-difference"
      }  tracking-[0.25rem]`}
    >
      <div className="flex justify-between w-full pt-3">
        <ul className="flex gap-12 2xl:gap-20   ">
          <li className="">
            <a href="/services">{services} </a>
          </li>

          <li>
            <a href="/about">{about} </a>
          </li>
          <li className="">
            <a href="/projects">{proj} </a>
          </li>
        </ul>
        <div id="" className=" top-2">
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
          <li>
            <a href="/contact">{contact} </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center pl-8">
        <LangButton />
      </div>
    </div>
  );
}
