"use client";

import { PopupModal } from "react-calendly";
import { useLanguage } from "@/components/language/LangContext";
import { useEffect, useState } from "react";

export default function CalendlyWidget() {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border border-wlite px-[24px] py-4 md:py-[30px] text-center font-urbanistr text-sm md:text-[16px] text-wlite hover:ring-2 ring-wlite active:scale-95 "
      >
        {language === "EN" ? "book a meeting" : "prendre un rendez-vous"}
      </button>

      {isClient && open && (
        <PopupModal
          open
          url="https://calendly.com/faiza-fehri-dev/new-meeting"
          rootElement={document.body}
          onModalClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
