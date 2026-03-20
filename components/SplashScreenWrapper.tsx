"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { usePathname } from "next/navigation";

const HERO_READY_EVENT = "diphtong:hero-ready";
const SPLASH_HIDDEN_EVENT = "diphtong:splash-hidden";
const SPLASH_MIN_DURATION = 2000;
const SPLASH_MAX_DURATION = 7000;

export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(pathname === "/home");
  const [timerDone, setTimerDone] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useLayoutEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash") === "true";
    const isHome = pathname === "/home";

    if (!isHome || hasSeenSplash) {
      setShowSplash(false);
      setTimerDone(false);
      setHeroReady(false);
      setIsFadingOut(false);
      return;
    }

    setShowSplash(true);
    setTimerDone(false);
    setHeroReady(false);
    setIsFadingOut(false);

    const handleHeroReady = () => {
      setHeroReady(true);
    };

    window.addEventListener(HERO_READY_EVENT, handleHeroReady);

    const minTimer = setTimeout(() => {
      setTimerDone(true);
    }, SPLASH_MIN_DURATION);

    const maxTimer = setTimeout(() => {
      setHeroReady(true);
      setTimerDone(true);
    }, SPLASH_MAX_DURATION);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener(HERO_READY_EVENT, handleHeroReady);
    };
  }, [pathname]);

  useEffect(() => {
    if (!showSplash || isFadingOut || !timerDone || !heroReady) return;

    setIsFadingOut(true);
  }, [heroReady, isFadingOut, showSplash, timerDone]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (showSplash) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showSplash]);

  const finishLoading = () => {
    setShowSplash(false);
    setIsFadingOut(false);
    sessionStorage.setItem("hasSeenSplash", "true");
    window.dispatchEvent(new Event(SPLASH_HIDDEN_EVENT));
  };

  return (
    <>
      {children}
      {showSplash && (
        <SplashScreen
          finishLoading={finishLoading}
          isVisible={!isFadingOut}
        />
      )}
    </>
  );
}
