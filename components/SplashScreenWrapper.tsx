"use client";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { usePathname } from "next/navigation";

export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState<boolean>(
    pathname === "/home" ? true : false,
  );

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash") === "true";

    const timeoutDuration = hasSeenSplash ? 0 : 4000;
    if (pathname === "/home" && !hasSeenSplash) {
      setShowSplash(true);

      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, timeoutDuration);
      return () => clearTimeout(timeout);
    } else if (pathname !== "/home") {
      setShowSplash(false);
    }
  }, [pathname]);
  const finishLoading = () => {
    setShowSplash(false);
    sessionStorage.setItem("hasSeenSplash", "true");
  };

  return showSplash ? <SplashScreen finishLoading={finishLoading} /> : children;
}
