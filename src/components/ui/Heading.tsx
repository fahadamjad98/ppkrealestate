"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { lineReveal, staggerContainer, viewportOnce } from "@/lib/animations";

type Level = "display" | "h1" | "h2" | "h3";

const levelClass: Record<Level, string> = {
  display: "text-display",
  h1: "text-heading-1",
  h2: "text-heading-2",
  h3: "text-heading-3",
};

const levelTag: Record<Level, "h1" | "h2" | "h3"> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

interface AnimatedHeadingProps {
  text: string;
  level?: Level;
  className?: string;
  /** Words wrapped in this 1-based set get the gold gradient fill. */
  accentWords?: number[];
  delay?: number;
  as?: "h1" | "h2" | "h3";
}

/**
 * Heading whose words rise in from a masked baseline, staggered, when scrolled
 * into view. Each word sits in an overflow-hidden wrapper for a clean mask.
 */
export function AnimatedHeading({
  text,
  level = "h2",
  className,
  accentWords = [],
  delay = 0,
  as,
}: AnimatedHeadingProps) {
  const Tag = (as ?? levelTag[level]) as "h1";
  const words = text.split(" ");

  return (
    <motion.div
      variants={staggerContainer(0.06, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(levelClass[level], "text-balance", className)}
    >
      <Tag className="contents">
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="reveal-mask mr-[0.22em]">
            <motion.span
              variants={lineReveal}
              className={cn(
                "inline-block",
                accentWords.includes(i + 1) && "text-gradient-gold",
              )}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
      className={cn("flex items-center gap-3", className)}
    >
      <span className="h-px w-8 bg-gradient-to-r from-gold-400 to-transparent" />
      <span className="text-eyebrow">{children}</span>
    </motion.div>
  );
}
