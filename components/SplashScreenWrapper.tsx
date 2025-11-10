"use client";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { usePathname } from "next/navigation";

export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash") === "true";
    const timeoutDuration = hasSeenSplash ? 1000 : 4000;
    if (pathname === "/" || pathname === "/home") {
      setShowSplash(true);

      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, timeoutDuration);
      return () => clearTimeout(timeout);
    } else {
      setShowSplash(false);
    }
  }, [pathname]);
  const finishLoading = () => {
    setShowSplash(false);
    sessionStorage.setItem("hasSeenSplash", "true");
  };

  return showSplash ? <SplashScreen finishLoading={finishLoading} /> : children;
}
