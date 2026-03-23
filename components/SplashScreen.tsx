"use client";
import Image from "next/image";
import dragon from "@/public/images/bgdragon.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function SplashScreen({
  finishLoading,
  isVisible,
}: {
  finishLoading: () => void;
  isVisible: boolean;
}) {
  const logoRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      gsap.to(logoRef.current, {
        rotation: 360,
        repeat: -1,
        ease: "none",
        duration: 20,
      });
      gsap.to(logoRef.current, {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 10,
      });

      return () => {
        gsap.killTweensOf(logoRef.current);
      };
    },
    { dependencies: [] },
  );

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-diphblack transition-opacity  ease-out duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onTransitionEnd={() => {
        if (!isVisible) finishLoading();
      }}
    >
      <Image
        ref={logoRef}
        src={dragon}
        width={100}
        height={100}
        alt="logo"
        loading="eager"
        className=""
      />
    </div>
  );
}
