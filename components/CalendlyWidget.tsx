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
        className="px-6 md:px-8 py-4 md:py-5 bg-wlite rounded-xl text-diphblack font-figtree uppercase 2xl:text-xl hover:bg-white transition-colors ease-in-out duration-400"
      >
        {language === "EN" ? "or book a meeting" : "or prendre rdv"}
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
