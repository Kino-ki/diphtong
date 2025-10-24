"use client";
import Link from "next/link";
import { useLanguage } from "@/components/language/LangContext";

export default function NotFound() {
  const { language } = useLanguage();
  return (
    <div className="h-[100svh] flex flex-col items-center justify-center ">
      <div className="flex flex-col gap-12 md:items-center md:px-0 px-2">
        <h1 className="font-akira text-6xl md:w-full w-2/3">
          404
          {language === "EN"
            ? " this page does not exist"
            : " cette page n'existe pas"}
        </h1>
        <div className="flex flex-row gap-2 justify-center ">
          <p className="font-urbanistl text-4xl e">
            {language === "EN" ? "Return to " : "Revenir à la "}
          </p>
          <Link href="/home">
            <p className="font-urbanistl text-4xl capitalize underline underline-offset-4">
              {" "}
              {language === "EN" ? " home page" : " page d'accueil"}{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
