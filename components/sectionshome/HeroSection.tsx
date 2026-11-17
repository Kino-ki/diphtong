"use client";
import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/components/language/LangContext";
import { CtaBtn } from "../Buttons";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { dictionary } = useLanguage();
  const hero = dictionary.homepage.hero;
  const heroRef = useRef<HTMLDivElement | null>(null);
  const brushRef = useRef<HTMLImageElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const transition = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: () =>
              `+=${heroRef.current?.offsetHeight ?? window.innerHeight}`,
            scrub: 1,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        transition.to(
          brushRef.current,
          {
            rotation: -360,
            scale: 8,
            ease: "none",
            duration: 1,
          },
          0,
        );
        transition.to(
          contentRef.current,
          {
            autoAlpha: 0,
            ease: "none",
            duration: 0.16,
          },
          0,
        );
        transition.to(
          heroRef.current,
          {
            backgroundColor: "#E5E5E5",
            ease: "none",
            duration: 0.12,
          },
          0.88,
        );
        transition.to(
          brushRef.current,
          {
            autoAlpha: 0,
            ease: "none",
            duration: 0.05,
          },
          0.95,
        );
      });

      return () => media.revert();
    },
    { scope: heroRef },
  );

  return (
    <div
      ref={heroRef}
      className="relative z-10 isolate h-[100svh] overflow-hidden bg-diphblack"
    >
      <Image
        ref={brushRef}
        src="/images/brushcirc.png"
        width={801}
        height={846}
        alt=""
        aria-hidden="true"
        priority
        className="pointer-events-none absolute right-0 top-0 z-0 w-[90vw] max-w-none origin-center will-change-transform md:w-[803px] lg:w-[35vw]"
      />

      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col justify-around px-8 md:px-[32px] lg:flex-row lg:justify-between 2xl:px-[66px]"
      >
        <section className="flex flex-col justify-center mix-blend-difference">
          <h1 className="w-fit text-center font-akira text-8xl md:text-start md:text-[160px] md:leading-[150px] 2xl:text-[200px] 2xl:leading-[200px]">
            Diph <br />
            tong
            <span className="ml-auto block w-1/2 text-end text-sm leading-none md:w-full md:text-lg 2xl:text-lg">
              {hero.tagline}
            </span>
          </h1>
        </section>
        <section className="flex flex-col gap-8 text-center font-urbanistr md:text-end lg:h-full lg:justify-end 2xl:gap-[52px] md:pb-20 2xl:pb-[105px]">
          <div className="flex flex-col gap-3">
            <p className="font-urbanistl text-base 2xl:text-2xl">
              {hero.textone}{" "}
            </p>
            <p className="text-lg font-urbanistr 2xl:text-[32px]">
              {hero.texttwo}{" "}
            </p>
          </div>
          <div className="mx-auto flex flex-col justify-end gap-4 md:mx-0 md:flex-row 2xl:gap-8">
            <CtaBtn text={hero.collabbutton} href="/collaboration#agencies" />
            <CtaBtn text={hero.contactbutton} href="/contact" />
          </div>
        </section>
      </div>
    </div>
  );
}
