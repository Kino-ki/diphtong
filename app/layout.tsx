import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { LanguageProvider } from "../components/language/LangContext";
import MobileNav from "@/components/navigation/MobileNav";
import { Analytics } from "@vercel/analytics/next";
import NewFooter from "@/components/navigation/NewFooter";

import SmoothWrapper from "@/components/SmoothWrapper";
import SplashScreenWrapper from "@/components/SplashScreenWrapper";
export const metadata: Metadata = {
  title: "Diphtong Web",
  description:
    "Freelance Web Developer. I design and develop websites for artists and small businesses looking to combine aesthetics, performance, and brand clarity.",
  keywords: [
    "web development",
    "artist",
    "growing business ",
    "custom",
    "WordPress",
    "accessibility",
    "portfolio",
    "Montreal",
  ],
  icons: {
    icon: "/images/bgdragon.svg",
  },
  openGraph: {
    title: "Home | Diphtong Web",
    description:
      "I design and develop websites for artists and small businesses looking to combine aesthetics, performance, and brand clarity.",
    type: "website",
    url: "https://diphtongweb.com/home",
    siteName: "Diphtong Web",
    images: [
      {
        url: "https://diphtongweb.com/images/bgdragon.svg",
        width: 1000,
        height: 1000,
        alt: "diphtong web opengraph photo",
      },
    ],
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
