import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";

import { LanguageProvider } from "../components/language/LangContext";
import MobileNav from "@/components/navigation/MobileNav";
import NewFooter from "@/components/navigation/NewFooter";
import ProjNav from "@/components/navigation/ProjNav";
import SmoothWrapper from "@/components/SmoothWrapper";

export const metadata: Metadata = {
  title: "Diphtong Web Agency | Agence Web Diphtong",
  description: "Creative web agency",
  icons: {
    icon: "/images/bgdragon.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-diphblack relative ">
        <LanguageProvider>
          <header className="">
            <NavBar />
            <MobileNav />
            <ProjNav />
          </header>
          <SmoothWrapper>
            <main className="text-wlite ">{children}</main>
            <footer className="">
              <NewFooter />
            </footer>
          </SmoothWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
