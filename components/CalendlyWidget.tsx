"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Script from "next/script";

declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function CalendlyWidget() {
  const pathname = usePathname();

  useEffect(() => {
    const loadCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/faiza-fehri-dev/new-meeting",
          text: "Schedule a meeting",
          color: "#d9d9d9",
          textColor: "#1a1a1a",
        });
      }
    };

    // Wait until Calendly is available
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        loadCalendly();
        clearInterval(checkCalendly);
      }
    }, 500);

    // 🛑 Cleanup: Remove Calendly widget when leaving the page
    return () => {
      const badge = document.querySelector(".calendly-badge-widget");
      if (badge) badge.remove();
      clearInterval(checkCalendly);
    };
  }, []);

  return (
    <>
      {/* Load Calendly styles */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Load Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url: "https://calendly.com/faiza-fehri-dev/new-meeting",
              text: "Schedule a meeting",
              color: "#d9d9d9",
              textColor: "#1a1a1a",
            });
          }
        }}
      />
    </>
  );
}
