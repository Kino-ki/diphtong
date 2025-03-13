"use client";

import { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";
import { useLanguage } from "@/app/contexts/LangContext";

export default function CalendlyWidget() {
  const [rootId, setRootId] = useState<HTMLElement | null>(null);

  const { language } = useLanguage();

  useEffect(() => {
    setRootId(document.body);
  }, []);

  return (
    <div>
      {language === "EN" ? (
        <div>
          <PopupWidget
            url="https://calendly.com/faiza-fehri-dev/new-meeting"
            rootElement={rootId as HTMLElement}
            text="Click here to schedule a meeting"
            textColor="#000000"
            color="#d9d9d9"
          />
        </div>
      ) : (
        <div>
          <PopupWidget
            url="https://calendly.com/faiza-fehri-dev/new-meeting"
            rootElement={rootId as HTMLElement}
            text="Prenez rendez-vous avec nous"
            textColor="#000000"
            color="#d9d9d9"
          />
        </div>
      )}
    </div>
  );
}
