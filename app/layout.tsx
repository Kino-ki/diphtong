import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import { LanguageContextProvider } from "./contexts/LangContext";
import MobileNav from "@/components/MobileNav";
import { gsap } from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

export const metadata: Metadata = {
  title: "Diphtong Web Agency | Agence Web Diphtong",
  description: "Creative web agency",
  icons: {
    icon: "/images/bgdragon.svg",
  },
};

gsap.registerPlugin(ScrollSmoother);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="smoot-wrapper" className="  bg-black">
        <LanguageContextProvider>
          <header className="">
            <NavBar />
            <MobileNav />
          </header>
          <div id="smooth-content">
            <main className="text-wlite z-10 ">{children}</main>
            <footer className="">
              <Footer />
            </footer>
          </div>
        </LanguageContextProvider>
      </body>
    </html>
  );
}
