"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "motion/react";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places to show (auto-detected from the value if omitted). */
  decimals?: number;
  /** Re-run the count every time it scrolls into view (default: once). */
  repeat?: boolean;
  className?: string;
}

/**
 * Counts from 0 to `value` with a spring when scrolled into view.
 * Uses tabular numerals so the width never jitters during the count.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals,
  repeat = false,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: !repeat, amount: 0.6 });

  const places = decimals ?? (Number.isInteger(value) ? 0 : 1);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 18,
    mass: 1,
  });
  const display = useTransform(spring, (latest) =>
    latest.toLocaleString("en-US", {
      minimumFractionDigits: places,
      maximumFractionDigits: places,
    }),
  );

  useEffect(() => {
    // Count up when in view; reset to 0 when out (so it replays on re-entry).
    motionValue.set(inView ? value : 0);
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className={cn("tnum", className)}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
