import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

import { LanguageContextProvider } from "./contexts/LangContext";
import MobileNav from "@/components/MobileNav";
import NewFooter from "@/components/NewFooter";

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
        <LanguageContextProvider>
          <div id="smooth-wrapper">
            <header className="">
              <NavBar />
              <MobileNav />
            </header>
            <div id="smooth-content">
              <main className="text-wlite z-10 ">{children}</main>
              <footer className="">
                <NewFooter />
              </footer>
            </div>
          </div>
        </LanguageContextProvider>
      </body>
    </html>
  );
}
