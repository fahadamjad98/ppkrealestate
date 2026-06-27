"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE_IN_OUT, EASE_OUT_EXPO } from "@/lib/animations";
import { BRAND } from "@/lib/constants";

/**
 * First-paint loading transition. Shows once per session: a centred wordmark
 * with a filling progress rule, then panels slide away to reveal the page.
 * Locks scroll while visible and collapses to an instant exit for users who
 * have already seen it this session or prefer reduced motion.
 */
export function Preloader() {
  const [show, setShow] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    const seen = sessionStorage.getItem("ppk-preloaded");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const skip = Boolean(seen) || prefersReduced;

    if (!skip) document.documentElement.style.overflow = "hidden";

    // setState is scheduled in the timer callback — never synchronously in the
    // effect body — so a skip still unmounts cleanly without a layout flash.
    const timer = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("ppk-preloaded", "1");
    }, skip ? 0 : 2100);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = "";
  }, [show]);

  const d = (value: number) => (reduced ? 0 : value);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[var(--z-loader)] flex items-center justify-center bg-ink-950"
          exit={{ opacity: 1 }}
        >
          {/* Sliding cover panel */}
          <motion.div
            className="absolute inset-0 origin-bottom bg-ink-900"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: d(0.9), ease: EASE_IN_OUT, delay: d(0.1) }}
          />
          <div className="relative flex flex-col items-center gap-6">
            <motion.span
              className="text-eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: d(0.6), ease: EASE_OUT_EXPO }}
            >
              {BRAND.shortName} Real Estate
            </motion.span>

            <div className="overflow-hidden">
              <motion.span
                className="font-display block text-3xl text-cream-50 sm:text-4xl"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ duration: d(0.9), ease: EASE_OUT_EXPO, delay: d(0.15) }}
              >
                {BRAND.tagline}
              </motion.span>
            </div>

            <div className="mt-2 h-px w-48 overflow-hidden bg-ink-700">
              <motion.div
                className="h-full w-full origin-left bg-gradient-to-r from-gold-500 to-gold-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: d(1.7), ease: EASE_OUT_EXPO }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
