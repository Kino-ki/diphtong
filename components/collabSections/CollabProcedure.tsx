"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../language/LangContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CollabProcedure() {
  const { dictionary } = useLanguage();
  const collab = dictionary.collaboration.collaboration;
  const cta = dictionary.collaboration.cta;
  const rootRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [connectors, setConnectors] = useState<{
    width: number;
    height: number;
    paths: string[];
  } | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const measureConnectors = () => {
      const trackRect = track.getBoundingClientRect();
      const panels = panelRefs.current.slice(0, collab.steps.length);
      if (
        panels.length !== collab.steps.length ||
        panels.some((panel) => !panel)
      ) {
        return;
      }

      const rects = panels.map((panel) => {
        const rect = panel!.getBoundingClientRect();
        return {
          left: rect.left - trackRect.left,
          right: rect.right - trackRect.left,
          top: rect.top - trackRect.top,
          bottom: rect.bottom - trackRect.top,
        };
      });

      const paths = rects.slice(0, -1).map((rect, index) => {
        const next = rects[index + 1];
        const nextCenterY = (next.top + next.bottom) / 2;
        const movesDown = next.top > rect.top;
        const startX = (rect.left + rect.right) / 2;
        const startY = movesDown ? rect.bottom : rect.top;
        return `M ${startX} ${startY} V ${nextCenterY} H ${next.left}`;
      });

      setConnectors({
        width: track.scrollWidth,
        height: viewport.clientHeight,
        paths,
      });
    };

    measureConnectors();
    const observer = new ResizeObserver(measureConnectors);
    observer.observe(track);
    panelRefs.current.forEach((panel) => panel && observer.observe(panel));
    window.addEventListener("resize", measureConnectors);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureConnectors);
    };
  }, [collab.steps.length]);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(min-width: 768px)", () => {
        const scene = sceneRef.current;
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!scene || !viewport || !track) return;

        const horizontalSpeed = 1.15;
        const getDistance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: scene,
            start: "top 3%",
            end: () => `+=${getDistance() / horizontalSpeed}`,
            // markers: true,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: rootRef, dependencies: [collab.steps.length] },
  );

  return (
    <div id="steps" ref={rootRef} className="font-urbanistr text-wlite pagpadding">
      <section
        ref={sceneRef}
        className="flex min-h-screen flex-col  md:min-h-[720px]  "
      >
        <div className="max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-wide text-graytext md:text-base">
            {collab.eyebrow}
          </p>
          <h2 className="mb-5 whitespace-pre-line font-akira text-3xl leading-tight md:text-4xl 2xl:text-5xl">
            {collab.h2}
          </h2>
          <p className="max-w-4xl text-sm leading-relaxed md:text-base">
            {collab.content}
          </p>
        </div>

        <div
          ref={viewportRef}
          className="mt-12 md:mt-32 md:h-[64vh] md:max-h-[600px] md:min-h-[440px] "
        >
          <div
            ref={trackRef}
            className="relative flex flex-col gap-10 md:h-full md:w-max md:flex-row md:items-start md:gap-0"
          >
            {connectors && (
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-0 hidden overflow-visible md:block"
                width={connectors.width}
                height={connectors.height}
                viewBox={`0 0 ${connectors.width} ${connectors.height}`}
                preserveAspectRatio="none"
              >
                {connectors.paths.map((path, index) => (
                  <path
                    key={index}
                    d={path}
                    fill="none"
                    stroke="#898787"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
            )}
            {collab.steps.map((step, index) => (
              <article
                key={step.id}
                className={`flex w-full items-start gap-4 md:w-[calc(100vw_-_114px)] md:gap-[53px] md:-mr-[31vw] 2xl:w-[1586px] 2xl:-mr-[528px] ${
                  index % 2 === 1 ? "md:mt-[30vh]" : ""
                }`}
              >
                <span className="shrink-0 pt-2 font-akira text-3xl md:w-[105px] md:text-[60px] md:leading-none">
                  {step.id}
                </span>
                <div
                  ref={(element) => {
                    panelRefs.current[index] = element;
                  }}
                  className="relative z-10 min-w-0 flex-1 border border-graytext/70 bg-diphblack p-4 md:w-[calc(100vw_-_272px)] md:flex-none md:p-6 2xl:w-[1428px]"
                >
                  <h3 className="mb-4 text-lg md:text-2xl">{step.h3}</h3>
                  <div className="mb-4 h-px w-full bg-graytext/70" />
                  <p className="mb-3 text-xs uppercase leading-relaxed text-graytext md:text-sm">
                    {step.outcome}
                  </p>
                  <p className="text-sm leading-relaxed md:text-base">
                    {step.content}
                  </p>
                </div>
              </article>
            ))}
            <div
              aria-hidden="true"
              className="hidden shrink-0 md:block md:w-[31vw] 2xl:w-[528px]"
            />
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center gap-6">
        <p className="max-w-3xl text-xl md:text-xl">{cta.content}</p>
        <Link
          href="/contact"
          className="border border-wlite px-6 py-4 text-center text-sm hover:bg-wlite hover:text-diphblack md:text-base"
        >
          {cta.button}
        </Link>
      </section>
    </div>
  );
}
