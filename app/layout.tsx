import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";

import { LanguageProvider } from "../components/language/LangContext";
import MobileNav from "@/components/navigation/MobileNav";
import { Analytics } from "@vercel/analytics/next";
import NewFooter from "@/components/navigation/NewFooter";
// import ProjNav from "@/components/navigation/ProjNav";
import SmoothWrapper from "@/components/SmoothWrapper";
import SplashScreenWrapper from "@/components/SplashScreenWrapper";

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
        <SplashScreenWrapper>
          <LanguageProvider>
            <header className="">
              <NavBar />
              <MobileNav />
              {/* <ProjNav /> */}
            </header>
            <SmoothWrapper>
              <main className="text-wlite  ">
                {children}

                <Analytics />
              </main>
              <footer className="">
                <NewFooter />
              </footer>
            </SmoothWrapper>
          </LanguageProvider>
        </SplashScreenWrapper>
      </body>
    </html>
  );
}
