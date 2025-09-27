"use client";

import { useEffect, useState } from "react";

export function useMousePosition(isHovered: boolean) {
  const [yPosition, setYPosition] = useState({ y: 0 });

  useEffect(() => {
    if (isHovered) {
      const updateMousePosition = (event: MouseEvent) => {
        setYPosition({ y: event.clientY });
      };

      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, [isHovered]);

  return yPosition;
}
