"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import diphtexte from "@/public/images/logo/vertical.svg";
import { useLanguage } from "@/components/language/LangContext";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const { dictionary } = useLanguage();
  const hero = dictionary.homepage;
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePause = () => {
    setIsPlaying(!isPlaying);
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroTextRef.current,
        start: "bottom 80%",
        end: "bottom 70%",
        // markers: true,
        scrub: 1,
      },
    });
    tl.fromTo(
      heroTextRef.current,
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      {
        opacity: 0,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <div ref={heroTextRef} className="h-[100svh] w-[100svw] relative ">
      <div className="w-full h-full">
        <video
          ref={videoRef}
          loop
          autoPlay
          playsInline
          muted
          poster="/images/poster.jpg"
          className="h-full w-full object-cover "
        >
          <source src="/images/bghero.webm" type="video/webm" />
          <source src="/images/bghero.mp4" type="video/mp4" />
        </video>
        <button
          onClick={handlePause}
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 p-2 rounded-full opacity-70"
        >
          {isPlaying ? (
            <Image
              src="/images/icons/pause.png"
              alt="pause icon"
              width={50}
              height={50}
            />
          ) : (
            <Image
              src="/images/icons/playicon.png"
              alt="play icon"
              width={50}
              height={50}
            />
          )}
        </button>
      </div>
      <div className="h-full w-full backdrop-blur-[1px] bg-black/20 z-10 absolute inset-0 ">
        <div className="h-full w-full lg:pt-[18rem] 2xl:pt-[22rem] lg:pb-32 2xl:pb-40 flex justify-center">
          <div className=" flex flex-col justify-evenly lg:justify-between w-[95%] font-figtree">
            <div className="lg:hidden flex justify-center  h-[60svh] w-[80svw] mx-auto relative ">
              <Image src={diphtexte} alt="diph logo" fill />
            </div>
            <h1 className=" font-figtree  capitalize tracking-widest md:tracking-[0.6rem] lg:tracking-[0.3rem] 2xl:tracking-[0.6rem]  text-3xl md:text-3xl/5  2xl:text-4xl/5 flex justify-center lg:justify-end  ">
              {hero.heroh2}
            </h1>

            <h2 className="font-figtreel lg:px-20 2xl:px-40 capitalize text-xl md:text-2xl lg:text-3xl 2xl:text-4xl tracking-wider md:tracking-[0.4rem] 2xl:tracking-[0.5rem] 2xl:leading-[4rem] flex justify-center text-center font-semibold ">
              {hero.heroh3}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
