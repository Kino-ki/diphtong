"use client";
interface LanguageContextType {
  language: string;
  handleLanguageChange: () => void;
}
import { createContext, useContext, useEffect, useMemo, useState } from "react";
// Création
const LanguageContext = createContext<LanguageContextType | null>(null);

// Contenu
export function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<string>("EN");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
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

  const languageContextValues = useMemo(
    () => ({ language, handleLanguageChange }),
    [language]
  );

  return (
    <LanguageContext.Provider value={languageContextValues}>
      {children}
    </LanguageContext.Provider>
  );
}

// Utilisation
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
};
