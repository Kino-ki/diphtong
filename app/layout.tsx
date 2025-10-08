import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";

import { LanguageProvider } from "../components/language/LangContext";
import MobileNav from "@/components/navigation/MobileNav";
import NewFooter from "@/components/navigation/NewFooter";
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
      <body className=" ">
        <LanguageProvider>
          <div id="smooth-wrapper">
            <header className="">
              <NavBar />
              <MobileNav />
            </header>
            <div id="smooth-content">
              <SmoothWrapper>
                <main className="text-wlite z-10 ">{children}</main>
              </SmoothWrapper>
              <footer className="">
                <NewFooter />
              </footer>
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
