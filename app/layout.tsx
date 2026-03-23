import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { LanguageProvider } from "../components/language/LangContext";
import MobileNav from "@/components/navigation/MobileNav";
import { Analytics } from "@vercel/analytics/next";
import NewFooter from "@/components/navigation/NewFooter";

import SmoothWrapper from "@/components/SmoothWrapper";
import SplashScreenWrapper from "@/components/SplashScreenWrapper";

const akiraExpanded = localFont({
  src: "../public/fonts/akira-expanded-demo.otf",
  variable: "--font-akira-expanded",
  display: "swap",
  preload: false,
});

const menloRegular = localFont({
  src: "../public/fonts/Menlo-Regular.ttf",
  variable: "--font-menlo-regular",
  display: "swap",
  preload: true,
});

const menloBold = localFont({
  src: "../public/fonts/Menlo-Bold.ttf",
  variable: "--font-menlo-bold",
  display: "swap",
  preload: false,
});

const urbanistLight = localFont({
  src: "../public/fonts/Urbanist-Light.ttf",
  variable: "--font-urbanist-light",
  display: "swap",
  preload: true,
});

const urbanistRegular = localFont({
  src: "../public/fonts/Urbanist-Regular.ttf",
  variable: "--font-urbanist-regular",
  display: "swap",
  preload: false,
});

const urbanistMedium = localFont({
  src: "../public/fonts/Urbanist-Medium.ttf",
  variable: "--font-urbanist-medium",
  display: "swap",
  preload: false,
});

const figtreeSemiBold = localFont({
  src: "../public/fonts/Figtree-SemiBold.ttf",
  variable: "--font-figtree-semibold",
  display: "swap",
  preload: true,
});

const figtreeLight = localFont({
  src: "../public/fonts/Figtree-Light.ttf",
  variable: "--font-figtree-light",
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

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
    url: "https://diphtong.ca/home",
    siteName: "Diphtong Web",
    images: [
      {
        url: "https://diphtong.ca/images/bgdragon.svg",
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
    <html>
      <body
        className={`${akiraExpanded.variable} ${menloRegular.variable} ${menloBold.variable} ${urbanistLight.variable} ${urbanistRegular.variable} ${urbanistMedium.variable} ${figtreeSemiBold.variable} ${figtreeLight.variable} ${inter.variable} bg-diphblack relative overflow-x-hidden`}
      >
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
