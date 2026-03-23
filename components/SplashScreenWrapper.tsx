"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SplashScreen from "./SplashScreen";
import { usePathname } from "next/navigation";

const HERO_READY_EVENT = "diphtong:hero-ready";
const SPLASH_HIDDEN_EVENT = "diphtong:splash-hidden";
const SPLASH_CHECK_DELAY = 150;
const SPLASH_MIN_DURATION = 2000;
const SPLASH_MAX_DURATION = 7000;

export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCheckingSplash, setIsCheckingSplash] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const heroReadyRef = useRef(false);

  useLayoutEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash") === "true";
    const isHome = pathname === "/home";
    let minTimer: ReturnType<typeof setTimeout> | null = null;
    let maxTimer: ReturnType<typeof setTimeout> | null = null;

    if (!isHome || hasSeenSplash) {
      setIsCheckingSplash(false);
      setShowSplash(false);
      setTimerDone(false);
      setHeroReady(false);
      setIsFadingOut(false);
      heroReadyRef.current = false;
      return;
    }

    setIsCheckingSplash(true);
    setShowSplash(false);
    setTimerDone(false);
    setHeroReady(false);
    setIsFadingOut(false);
    heroReadyRef.current = false;

    const handleHeroReady = () => {
      heroReadyRef.current = true;
      setHeroReady(true);
    };

    window.addEventListener(HERO_READY_EVENT, handleHeroReady);

    const checkTimer = setTimeout(() => {
      if (heroReadyRef.current) {
        setIsCheckingSplash(false);
        sessionStorage.setItem("hasSeenSplash", "true");
        window.dispatchEvent(new Event(SPLASH_HIDDEN_EVENT));
        return;
      }

      setIsCheckingSplash(false);
      setShowSplash(true);

      minTimer = setTimeout(() => {
        setTimerDone(true);
      }, SPLASH_MIN_DURATION);

      maxTimer = setTimeout(() => {
        heroReadyRef.current = true;
        setHeroReady(true);
        setTimerDone(true);
      }, SPLASH_MAX_DURATION);
    }, SPLASH_CHECK_DELAY);

    return () => {
      clearTimeout(checkTimer);
      if (minTimer) clearTimeout(minTimer);
      if (maxTimer) clearTimeout(maxTimer);
      window.removeEventListener(HERO_READY_EVENT, handleHeroReady);
    };
  }, [pathname]);

  useEffect(() => {
    if (!showSplash || isFadingOut || !timerDone || !heroReady) return;

    setIsFadingOut(true);
  }, [heroReady, isFadingOut, showSplash, timerDone]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isCheckingSplash || showSplash) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isCheckingSplash, showSplash]);

  const finishLoading = () => {
    setShowSplash(false);
    setIsFadingOut(false);
    sessionStorage.setItem("hasSeenSplash", "true");
    window.dispatchEvent(new Event(SPLASH_HIDDEN_EVENT));
  };

  return (
    <>
      {children}
      {isCheckingSplash && <div className="fixed inset-0 z-[998] bg-diphblack" />}
      {showSplash && (
        <SplashScreen
          finishLoading={finishLoading}
          isVisible={!isFadingOut}
        />
      )}
    </>
  );
}
