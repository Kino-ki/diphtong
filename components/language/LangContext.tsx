"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, Language } from "./i18n";

type LanguageContextType = {
  language: Language;
  dictionary: (typeof dictionaries)[Language];
  handleLanguageChange: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language | null;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    if (language === "EN") {
      document.documentElement.classList.add("EN");
    } else {
      document.documentElement.classList.remove("EN");
    }
    localStorage.setItem("language", language);
  }, [language]);

  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === "FR" ? "EN" : "FR"));
  };

  const value = useMemo(
    () => ({
      language,
      dictionary: dictionaries[language],
      handleLanguageChange,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
