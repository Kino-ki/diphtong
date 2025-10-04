"use client";

import { PopupWidget } from "react-calendly";
import { useLanguage } from "@/components/language/LangContext";

export default function CalendlyWidget() {
  const { language } = useLanguage();

  return (
    <>
      <button
        onClick={() =>
          document
            .querySelector<HTMLDivElement>(".calendly-badge-content")
            ?.click()
        }
        className="px-8 py-5 bg-wlite rounded-xl text-diphblack font-figtree text-2xl  hover:bg-white transition-colors ease-in-out duration-400"
      >
        {language === "EN"
          ? "Click here to schedule a meeting with us"
          : "Cliquez ici pour prendre un rendez-vous"}
      </button>

      <PopupWidget
        url="https://calendly.com/faiza-fehri-dev/new-meeting"
        rootElement={document.body} // escape ScrollSmoother
        text="" // disable Calendly's default floating button
        color="transparent"
        textColor="transparent"
      />
    </>
  );
}
