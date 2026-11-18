"use client";

import { useLanguage } from "../language/LangContext";

export default function FAQ() {
  const { dictionary } = useLanguage();
  const faq = dictionary.collaboration.faq;

  return (
    <section className="bg-diphblack pagpadding  font-urbanistr text-wlite">
      <h2 className="mb-10 text-center font-akira text-3xl md:mb-14 md:text-5xl">
        {faq.h2}
      </h2>

      <div className=" border-t border-diphblack/20">
        {faq.items.map((item) => (
          <details
            key={item.question}
            className="group border-b border-diphblack/20 bg-wlite text-diphblack"
          >
            <summary className="flex cursor-pointer list-none items-center justify-start gap-6 px-5 py-6 text-left text-base font-semibold marker:hidden md:px-8 md:py-7 md:text-lg [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 shrink-0 transition-transform duration-300 group-open:rotate-180"
              >
                <path
                  d="m4 8 8 8 8-8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </summary>
            <div className="px-5 pb-7 md:px-8 md:pb-9">
              <p className="max-w-4xl text-sm leading-relaxed md:text-base">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
