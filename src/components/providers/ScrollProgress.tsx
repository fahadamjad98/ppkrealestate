"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin gold reading-progress bar fixed to the very top of the viewport.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[var(--z-nav)] h-0.5 origin-left bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500"
    />
  );
}
