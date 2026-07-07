"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useSyncExternalStore } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { EASE_OUT_EXPO, staggerContainer, lineReveal } from "@/lib/animations";
import { SearchBar } from "@/components/ui/SearchBar";

const HEADLINE = ["Find the", "address that", "becomes a", "legacy."];

const QUICK_LINKS = [
  { label: "Start your journey", href: "#process" },
  { label: "Explore the portfolio", href: "#projects" },
  { label: "Speak to an advisor", href: "#contact" },
];

export function Hero() {
  // Global scroll in px — reliable for a sticky/pinned element (unlike a
  // target-relative scroll, whose progress stays 0 while the hero is pinned).
  const { scrollY } = useScroll();
  const vh = useSyncExternalStore(
    (cb) => {
      window.addEventListener("resize", cb);
      return () => window.removeEventListener("resize", cb);
    },
    () => window.innerHeight,
    () => 900,
  );

  // Matched to thrivestate's hero: it nudges UP early (top travels ~80→10px),
  // then scales down ~1 → 0.885 over one viewport — no fade, no radius change.
  const cardY = useTransform(scrollY, [0, vh * 0.34], [0, -52]);
  const cardScale = useTransform(scrollY, [0, vh], [1, 0.885]);

  return (
    <section className="sticky top-0 z-0 flex h-[100svh] items-stretch px-3 pb-3 pt-20 md:px-4 md:pb-4 md:pt-24">
      {/* ---- Rounded hero card: nudges up early, then scales down ---- */}
      <motion.div
        style={{ y: cardY, scale: cardScale }}
        className="relative flex w-full origin-center items-center justify-center overflow-hidden rounded-[1.75rem] will-change-transform md:rounded-[2.5rem]"
      >
        {/* Background photograph */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-skyline.jpg"
            alt="Dubai skyline at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover [filter:brightness(1.35)_saturate(1.28)_contrast(1.02)]"
          />
        </div>
        {/* Legibility overlay — bluish navy, lighter at top for a brighter feel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,39,72,0.32) 0%, rgba(11,39,72,0.08) 42%, rgba(9,20,32,0.62) 100%)",
          }}
          aria-hidden
        />
        {/* Warm sun glow (yellow) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(110% 80% at 50% 6%, rgba(246,176,52,0.32), transparent 55%)",
          }}
          aria-hidden
        />
        {/* Cool sky wash (blue) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 70% at 82% 4%, rgba(74,138,206,0.24), transparent 60%)",
          }}
          aria-hidden
        />

        {/* ---- Content ---- */}
        <div className="container-x relative z-10 flex flex-col items-center py-10 text-center">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="pulse-ring absolute inset-0 text-gold-300/70" />
              <span className="relative size-2 rounded-full bg-gold-300" />
            </span>
            <span className="text-small font-medium text-white/90">
              Off-plan &amp; ready homes across 14 markets
            </span>
          </motion.div>

          {/* Masked headline */}
          <motion.h1
            variants={staggerContainer(0.08, 0.35)}
            initial="hidden"
            animate="visible"
            className="text-display text-balance text-white"
          >
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  variants={lineReveal}
                  className={
                    i === HEADLINE.length - 1
                      ? "inline-block italic text-gold-300"
                      : "inline-block"
                  }
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-white/80"
          >
            Boutique advisory pairing institutional research with white-glove
            brokerage — so the right property finds you, often before the market.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.9 }}
            className="mt-9 w-full"
          >
            <SearchBar />
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 text-small font-medium text-white/85 transition-colors hover:text-gold-300"
              >
                {link.label}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#projects"
          aria-label="Scroll to explore"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="flex h-10 w-6 justify-center rounded-full border border-white/30 pt-2">
            <ArrowDown className="animate-scroll-cue size-3 text-gold-300" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
