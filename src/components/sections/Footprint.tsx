"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { viewportOnce, EASE_OUT_EXPO } from "@/lib/animations";

interface Marker {
  /** Dot position as a percentage of the map box. Tweak to fine-tune. */
  x: number;
  y: number;
  value: string;
  label: string;
  /** Height of the connector line in px. */
  line?: number;
}

// Positions are % of the square map image (UAE coastline). Easy to nudge.
const MARKERS: Marker[] = [
  { x: 63.1, y: 39.9, value: "Dubai", label: "Head Quarters", line: 96 },
  { x: 34.8, y: 61.4, value: "100+", label: "Listings", line: 72 },
  { x: 72.9, y: 71.5, value: "1,000+", label: "Sales Transactions", line: 72 },
];

/**
 * "Rooted in the UAE" — a dotted map of the Emirates with floating stat
 * markers (HQ + reach), each a number/label above a connector line ending in a
 * glowing dot at its location. Modeled on the supplied reference layout.
 */
export function Footprint() {
  return (
    <Section id="footprint">
      <Eyebrow>Rooted in the UAE</Eyebrow>
      <AnimatedHeading
        text="A presence across the Emirates"
        level="h2"
        accentWords={[5]}
        className="mt-5 max-w-[20ch]"
      />

      <div className="relative mx-auto mt-6 aspect-[939/715] w-full max-w-4xl lg:mt-8">
        {/* Dotted UAE map. A generated SVG of clean circles (derived from the
            source artwork's shape + density) is used as an alpha mask and
            filled with gold — perfectly circular dots, no blend-mode haloing. */}
        <div
          role="img"
          aria-label="Map of the United Arab Emirates"
          className="absolute inset-0 bg-gold-400/85"
          style={{
            WebkitMaskImage: "url(/images/uae-map.svg)",
            maskImage: "url(/images/uae-map.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />

        {MARKERS.map((m, i) => (
          <div
            key={m.label}
            className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center text-center"
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: i * 0.12 }}
              className="font-display text-2xl leading-none text-cream-50 md:text-4xl lg:text-5xl"
            >
              {m.value}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.6,
                ease: EASE_OUT_EXPO,
                delay: i * 0.12 + 0.08,
              }}
              className="mt-1.5 max-w-[14ch] text-[0.7rem] font-medium uppercase tracking-[0.12em] text-gold-300 md:mt-2 md:text-small md:tracking-[0.16em]"
            >
              {m.label}
            </motion.span>
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.7,
                ease: EASE_OUT_EXPO,
                delay: i * 0.12 + 0.16,
              }}
              style={{ height: m.line ?? 72, transformOrigin: "bottom" }}
              className="mt-3 w-px bg-gradient-to-b from-gold-400/20 to-gold-400"
            />
            <motion.span
              aria-hidden
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.4,
                ease: EASE_OUT_EXPO,
                delay: i * 0.12 + 0.5,
              }}
              className="size-2.5 rounded-full bg-gold-400 shadow-[0_0_0_4px_rgba(217,169,78,0.18),0_0_16px_3px_rgba(217,169,78,0.55)]"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
