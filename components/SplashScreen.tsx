"use client";
import Image from "next/image";
import dragon from "@/public/images/bgdragon.svg";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function SplashScreen({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(finishLoading, 700); // wait for fade out
    }, 2000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  useGSAP(() => {
    gsap.to(logoRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: 30,
    });
    gsap.to(logoRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 10,
    });
  });

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-diphblack transition-opacity ease-out duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        ref={logoRef}
        src={dragon}
        width={600}
        height={600}
        alt="logo"
        className=""
      />
    </div>
  );
}
