"use client";

import { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";<

import { useLanguage } from "@/components/language/LangContext";

export default function CalendlyWidget({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [rootId, setRootId] = useState<HTMLElement | null>(null);

  const { language } = useLanguage();

  useEffect(() => {
    if (sectionRef.current) {
      setRootId(sectionRef.current);
    } else {
      setRootId(document.body);
    }
  }, [sectionRef]);

  if (!rootId) return null; // guard

  return (
    <div>
      <PopupWidget
        url="https://calendly.com/faiza-fehri-dev/new-meeting"
        rootElement={rootId as HTMLDivElement}
        text={
          language === "EN"
            ? "Click here to schedule a meeting"
            : "Prenez rendez-vous avec nous"
        }
        textColor="#000000"
        color="#d9d9d9"
      />
    </div>
  );
}
