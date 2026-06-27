"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  /** Pixels scrolled from the top. */
  y: number;
  /** True once the user has scrolled past `threshold`. */
  scrolled: boolean;
  /** "up" | "down" — direction of the most recent scroll. */
  direction: "up" | "down";
}

/**
 * Lightweight scroll observer for navbar state and direction-aware UI.
 * Uses rAF-throttled scroll reads to stay off the critical path.
 */
export function useScroll(threshold = 24): ScrollState {
  const [state, setState] = useState<ScrollState>({
    y: 0,
    scrolled: false,
    direction: "up",
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const direction = y > lastY && y > threshold ? "down" : "up";
      setState({ y, scrolled: y > threshold, direction });
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
