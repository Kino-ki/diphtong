"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import constructiontruck from "@/public/images/icons8-digger-light.png";
import Image from "next/image";

type LetterMotion = {
  midpointX: number;
  landingY: number;
  finalX: number;
  finalRotation: number;
  duration: number;
};

export default function MaintenancePage() {
  const [language, setLanguage] = useState<"EN" | "FR">("EN");
  const fallAreaRef = useRef<HTMLElement>(null);
  const fallTextRef = useRef<HTMLSpanElement>(null);
  const truckRef = useRef<HTMLSpanElement>(null);
  const fallTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const letterMotionsRef = useRef(new Map<HTMLElement, LetterMotion>());
  const title =
    language === "EN" ? "we're under construction" : "Travaux en cours";

  useEffect(() => {
    return () => {
      fallTimelineRef.current?.kill();
    };
  }, []);

  const animateByTruck = (direction: "forward" | "backward") => {
    const area = fallAreaRef.current;
    const text = fallTextRef.current;
    const truck = truckRef.current;
    if (!area || !text || !truck) return;

    const areaBottom = area.getBoundingClientRect().bottom;
    const textRect = text.getBoundingClientRect();
    const textWidth = textRect.width;
    if (!textWidth) return;
    const letters = Array.from(
      text.querySelectorAll<HTMLElement>("[data-fall-letter]"),
    );
    fallTimelineRef.current?.kill();
    gsap.killTweensOf(letters);
    gsap.killTweensOf(truck);
    const currentTruckX = gsap.utils.clamp(
      0,
      textWidth,
      Number(gsap.getProperty(truck, "x")) || 0,
    );

    const timeline = gsap.timeline({ paused: true });
    const driveDuration = 2.2;
    const targetTruckX = direction === "forward" ? textWidth : 0;
    const travelDuration =
      (Math.abs(targetTruckX - currentTruckX) / textWidth) * driveDuration;

    timeline.to(
      truck,
      {
        x: targetTruckX,
        duration: travelDuration,
        ease: "none",
      },
      0,
    );

    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const currentX = Number(gsap.getProperty(letter, "x")) || 0;
      const currentY = Number(gsap.getProperty(letter, "y")) || 0;
      const midpointX = gsap.utils.clamp(
        0,
        textWidth,
        rect.left + rect.width / 2 - currentX - textRect.left,
      );
      const motion = letterMotionsRef.current.get(letter);

      if (direction === "forward") {
        if (midpointX < currentTruckX || !travelDuration) return;

        const letterMotion: LetterMotion =
          currentTruckX === 0 || !motion
            ? {
                midpointX,
                landingY: Math.max(0, areaBottom - rect.bottom + currentY - 4),
                finalX: gsap.utils.random(-70, 70),
                finalRotation: gsap.utils.random(-24, 24),
                duration: gsap.utils.random(0.75, 1.3),
              }
            : { ...motion, midpointX };
        letterMotionsRef.current.set(letter, letterMotion);

        const startTime =
          ((midpointX - currentTruckX) / textWidth) * driveDuration;
        timeline
          .to(
            letter,
            {
              x: letterMotion.finalX + gsap.utils.random(-8, 8),
              y: letterMotion.landingY + 10,
              rotation: letterMotion.finalRotation + gsap.utils.random(-6, 6),
              duration: letterMotion.duration,
              ease: "power2.in",
            },
            startTime,
          )
          .to(
            letter,
            {
              x: letterMotion.finalX - gsap.utils.random(-3, 3),
              y: letterMotion.landingY - 3,
              rotation: letterMotion.finalRotation * 0.9,
              duration: 0.2,
              ease: "power2.out",
            },
            startTime + letterMotion.duration,
          )
          .to(
            letter,
            {
              x: letterMotion.finalX,
              y: letterMotion.landingY,
              rotation: letterMotion.finalRotation,
              duration: 0.16,
              ease: "power1.inOut",
            },
            startTime + letterMotion.duration + 0.2,
          );
      } else {
        if (midpointX > currentTruckX || !travelDuration) return;

        const letterMotion = motion ?? {
          midpointX,
          landingY: Math.max(0, areaBottom - rect.bottom + currentY - 4),
          finalX: currentX,
          finalRotation: Number(gsap.getProperty(letter, "rotation")) || 0,
          duration: 0.9,
        };
        const returnStartTime =
          ((currentTruckX - midpointX) / textWidth) * driveDuration;

        timeline.to(
          letter,
          {
            x: 0,
            y: 0,
            rotation: 0,
            duration: letterMotion.duration,
            ease: "power2.out",
          },
          returnStartTime,
        );
      }
    });

    fallTimelineRef.current = timeline;
    timeline.play();
  };

  return (
    <div className="h-[100svh] bg-diphblack flex flex-col ">
      <section className="flex  pt-6 pl-6">
        <button
          type="button"
          className="flex flex-col justify-center"
          onClick={() =>
            setLanguage((current) => (current === "EN" ? "FR" : "EN"))
          }
          aria-label={
            language === "EN" ? "Passer en français" : "Switch to English"
          }
        >
          <span className="font-akira hover:text-graytext text-2xl lg:text-[1.1rem]/5">
            {language === "EN" ? "FR" : "EN"}
          </span>
        </button>
      </section>
      <section
        ref={fallAreaRef}
        className="flex flex-col justify-center align-middle h-full"
      >
        <div className="flex justify-center">
          <div
            className="relative inline-block px-[100px] pt-24"
            onMouseEnter={() => animateByTruck("forward")}
            onMouseLeave={() => animateByTruck("backward")}
          >
            <h1 aria-label={title} className="font-akira text-center text-6xl">
              <span ref={fallTextRef} className="relative inline-block">
                <span
                  ref={truckRef}
                  className="pointer-events-none absolute -top-24 left-0 z-10"
                >
                  <Image
                    src={constructiontruck}
                    width={100}
                    height={100}
                    alt="construction truck"
                  />
                </span>
                {Array.from(title).map((character, index) =>
                  character === " " ? (
                    " "
                  ) : (
                    <span
                      key={index}
                      data-fall-letter=""
                      className="inline-block pointer-events-none"
                    >
                      {character}
                    </span>
                  ),
                )}
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="grid w-full grid-cols-3 items-center pb-6 font-akira">
        <p className="col-start-2 justify-self-center text-2xl">Diphtong</p>
        <p className="col-start-3 justify-self-end pr-12 text-right">
          {language === "EN"
            ? "Check out our projects"
            : "Découvrez nos projets"}{" "}
          <span className="hover:underline hover:text-graytext">
            <a href="/projects">{language === "EN" ? "here" : "ici"}</a>
          </span>
        </p>
      </section>
    </div>
  );
}
