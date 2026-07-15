"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  viewportOnce,
  EASE_OUT_EXPO,
  staggerContainer,
  fadeUp,
} from "@/lib/animations";

const EMIRATES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ras Al Khaimah",
  "Ajman",
  "Fujairah",
  "Umm Al Quwain",
];

interface Marker {
  /** Dot position as a percentage of the map box. */
  x: number;
  y: number;
  value: string;
  label: string;
  /** Height of the connector line in px. */
  line?: number;
}

const MARKERS: Marker[] = [
  { x: 63.1, y: 39.9, value: "Dubai", label: "Head Quarters", line: 64 },
  { x: 34.8, y: 61.4, value: "100+", label: "Listings", line: 48 },
  { x: 72.9, y: 71.5, value: "1,000+", label: "Sales", line: 48 },
];

/**
 * "Rooted in the UAE" — a split editorial layout: copy + emirate tags on the
 * yellow band, and the dotted UAE map set inside a deep-blue panel where the
 * dots turn gold and stat pins pulse on their locations.
 */
export function Footprint() {
  return (
    <Section
      id="footprint"
      className="relative overflow-hidden bg-[#f6b034] text-white"
    >
      {/* Faint world-map texture behind the content */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/world-map.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.14] mix-blend-multiply"
      />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        {/* Left — copy */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/60" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-white">
              Rooted in the UAE
            </span>
          </div>

          <Reveal>
            <h2 className="text-heading-2 mt-5 max-w-[16ch] text-balance text-white">
              A presence across the{" "}
              <span className="text-[#ffffff]">Emirates</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-white/90 md:text-lg">
              From the capital to the northern emirates, our desk works across
              the entire UAE — sourcing off-market homes, structuring
              investments and closing with confidence in every market.
            </p>
          </Reveal>

          <motion.ul
            variants={staggerContainer(0.06, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {EMIRATES.map((emirate) => (
              <motion.li
                key={emirate}
                variants={fadeUp}
                className="rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#0b2748]"
              >
                {emirate}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right — blue map panel */}
        <Reveal delay={0.15} variants={fadeUp}>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0b2748] p-6 shadow-[0_45px_90px_-35px_rgba(8,26,48,0.75)] ring-1 ring-white/10 sm:p-9">
            {/* soft gold glow inside the panel */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-1/4 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-gold-400/15 blur-[90px]"
            />

            <div className="relative aspect-[939/715] w-full">
              {/* Gold dotted UAE map */}
              <div
                role="img"
                aria-label="Map of the United Arab Emirates"
                className="absolute inset-0 bg-gold-400"
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
                    transition={{
                      duration: 0.6,
                      ease: EASE_OUT_EXPO,
                      delay: 0.2 + i * 0.12,
                    }}
                    className="font-display text-lg leading-none text-white md:text-2xl lg:text-[1.9rem]"
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
                      delay: 0.28 + i * 0.12,
                    }}
                    className="mt-1 max-w-[12ch] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-gold-300 md:text-[0.68rem]"
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
                      delay: 0.36 + i * 0.12,
                    }}
                    style={{ height: m.line ?? 52, transformOrigin: "bottom" }}
                    className="mt-2.5 w-px bg-gradient-to-b from-gold-400/10 to-gold-400"
                  />
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{
                      duration: 0.4,
                      ease: EASE_OUT_EXPO,
                      delay: 0.7 + i * 0.12,
                    }}
                    className="relative flex size-3 items-center justify-center"
                  >
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-400/70" />
                    <span className="relative inline-flex size-3 rounded-full bg-gold-400 shadow-[0_0_0_4px_rgba(246,176,52,0.2),0_0_14px_3px_rgba(246,176,52,0.55)]" />
                  </motion.span>
                </div>
              ))}
            </div>

            {/* Panel caption */}
            <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-5 text-[0.7rem] uppercase tracking-[0.18em] text-white/55">
              <span>United Arab Emirates</span>
              <span className="text-gold-300">7 Emirates · One desk</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
