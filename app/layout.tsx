import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { LanguageContextProvider } from "./contexts/LangContext";

export const metadata: Metadata = {
  title: "Diphtong Web Agency",
  description: "Creative web agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="  bg-black">
        <LanguageContextProvider>
          <header className="">
            <NavBar />
          </header>
          <main className="text-wlite z-10 ">{children}</main>
          <footer className="relative z-50">
            <Footer />
          </footer>
        </LanguageContextProvider>
      </body>
    </html>
  );
}
