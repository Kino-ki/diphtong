"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "../language/LangContext";

export default function RisksComponent() {
  const { dictionary } = useLanguage();
  const risks = dictionary.collaboration.securityDisclosure;
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = contentRef.current;
    if (!panel) return;

    panel.inert = !isOpen;

    gsap.to(panel, {
      height: isOpen ? "auto" : 0,
      autoAlpha: isOpen ? 1 : 0,
      duration: isOpen ? 0.55 : 0.4,
      ease: isOpen ? "power2.out" : "power2.inOut",
      overwrite: "auto",
    });
  }, [isOpen]);

  return (
    <section className="border-y-[1px] border-b-graytext bg-wlite text-diphblack">
      <button
        type="button"
        className="flex w-full items-center justify-start gap-6 px-8 py-6 text-left md:px-[48px] md:py-8 2xl:px-[66px]"
        aria-expanded={isOpen}
        aria-controls="security-risks-content"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="font-urbanistmed font-semibold text-sm uppercase md:text-base">
          {risks.h2}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={`h-6 w-6 shrink-0 transition-transform duration-300 md:h-8 md:w-8 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m4 8 8 8 8-8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <div
        ref={contentRef}
        id="security-risks-content"
        aria-hidden={!isOpen}
        style={{ height: 0, opacity: 0, visibility: "hidden" }}
        className="overflow-hidden"
      >
        <div className="border-t border-diphblack/15 px-8 py-8 md:px-[48px] md:py-10 2xl:pb-24 2xl:px-[100px]">
          <div className="flex max-w-5xl flex-col gap-10 md:gap-12">
            {risks.items.map((item) => (
              <article key={item.h3}>
                <h3 className="mb-4 font-akira text-base uppercase md:text-lg">
                  {item.h3}
                </h3>
                <p className="text-sm leading-relaxed md:text-base">
                  {item.content}{" "}
                  {item.sources.map((source, index) => (
                    <span key={source.label}>
                      {index > 0 ? " · " : " "}
                      {source.href ? (
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2 hover:opacity-70"
                        >
                          {source.label}
                        </a>
                      ) : (
                        <span>{source.label}</span>
                      )}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
