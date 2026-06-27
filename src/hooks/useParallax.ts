"use client";

import { useScroll, useTransform, useSpring, type MotionValue } from "motion/react";
import { useRef, type RefObject } from "react";

interface ParallaxOptions {
  /** Travel distance in px across the element's scroll range. Negative = up. */
  distance?: number;
  /** Smooth the motion with a spring. */
  smooth?: boolean;
}

/**
 * Scroll-linked vertical parallax. Returns a ref to attach to the tracked
 * element and a MotionValue<number> (px) to feed into `style={{ y }}`.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>({
  distance = 120,
  smooth = true,
}: ParallaxOptions = {}): {
  ref: RefObject<T | null>;
  y: MotionValue<number>;
} {
  const ref = useRef<T>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return { ref, y: smooth ? y : raw };
}
