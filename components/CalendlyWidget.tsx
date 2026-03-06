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
        className="btn hover:ring-1 hover:ring-wlite text-sm md:text-base"
      >
        {language === "EN" ? "book a meeting" : "prenez un rendez-vous"}
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
