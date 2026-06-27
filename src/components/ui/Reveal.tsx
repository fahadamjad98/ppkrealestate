"use client";

import { motion, type Variants } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  /** Render as a list/item parent that staggers children using its variants. */
  as?: "div" | "li" | "ul" | "span";
}

/**
 * Generic scroll-into-view reveal. Defaults to a fade-up; pass custom variants
 * (e.g. staggerContainer) for parent/child orchestration.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
