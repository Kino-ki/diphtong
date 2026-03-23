"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { dictionaries, Language } from "./i18n";

type LanguageContextType = {
  language: Language;
  dictionary: (typeof dictionaries)[Language];
  handleLanguageChange: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function syncDocumentLanguage(language: Language) {
  if (language === "EN") {
    document.documentElement.classList.add("EN");
    document.documentElement.lang = "en";
  } else {
    document.documentElement.classList.remove("EN");
    document.documentElement.lang = "fr";
  }

  localStorage.setItem("language", language);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");
  const [isReady, setIsReady] = useState(false);
  const hasInitializedRef = useRef(false);

  useLayoutEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language | null;
    const nextLanguage = storedLanguage === "FR" ? "FR" : "EN";

    syncDocumentLanguage(nextLanguage);
    hasInitializedRef.current = true;

    if (nextLanguage !== language) {
      setLanguage(nextLanguage);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!hasInitializedRef.current) return;

    syncDocumentLanguage(language);
  }, [language]);

  const handleLanguageChange = () => {
    const nextLanguage = language === "FR" ? "EN" : "FR";

    syncDocumentLanguage(nextLanguage);
    setLanguage(nextLanguage);
    window.location.reload();
  };

  const value = useMemo(
    () => ({
      language,
      dictionary: dictionaries[language],
      handleLanguageChange,
    }),
    [language],
  );

  if (!isReady) return null;

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
