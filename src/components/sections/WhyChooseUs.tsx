"use client";

import { motion } from "motion/react";
import { STATS, DIFFERENTIATORS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  EASE_OUT_EXPO,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

/** Illustrative index of transacted volume by year — drives the growth chart. */
const TREND = [26, 34, 47, 63, 82, 100, 121];
const TREND_YEARS = ["19", "20", "21", "22", "23", "24", "25"];
/** Relative "score" per stat, drives the animated bar under each figure. */
const STAT_BARS: Record<string, number> = {
  volume: 84,
  clients: 92,
  retention: 96,
  markets: 68,
};

function GrowthChart() {
  const W = 460;
  const H = 240;
  const pad = 30;
  const innerW = W - pad * 2;
  const innerH = H - pad * 2;
  const max = 132;
  const baseline = pad + innerH;

  const pts = TREND.map((v, i) => {
    const x = pad + (i * innerW) / (TREND.length - 1);
    const y = pad + innerH - (v / max) * innerH;
    return [x, y] as const;
  });

  const line = pts
    .map((p, i) => `${i ? "L" : "M"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
    .join(" ");
  const area = `M ${pts[0][0].toFixed(1)} ${baseline} ${pts
    .map((p) => `L ${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
    .join(" ")} L ${pts[pts.length - 1][0].toFixed(1)} ${baseline} Z`;

  return (
    <div className="surface p-6 md:p-8">
      <div className="flex items-baseline justify-between">
        <h3 className="text-small font-medium uppercase tracking-[0.16em] text-gold-500">
          Transacted volume
        </h3>
        <span className="font-display text-2xl text-cream-50">AED 4.8B+</span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-6 w-full"
        role="img"
        aria-label="Transacted volume growth by year"
      >
        <defs>
          <linearGradient id="ppk-area" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-gold-400)"
              stopOpacity="0.38"
            />
            <stop
              offset="100%"
              stopColor="var(--color-gold-400)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <line
            key={t}
            x1={pad}
            x2={W - pad}
            y1={pad + innerH * t}
            y2={pad + innerH * t}
            stroke="var(--color-border)"
            strokeWidth={1}
          />
        ))}

        {/* Area fill */}
        <motion.path
          d={area}
          fill="url(#ppk-area)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.6, duration: 0.9, ease: EASE_OUT_EXPO }}
        />

        {/* Drawing line */}
        <motion.path
          d={line}
          fill="none"
          stroke="var(--color-gold-400)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.5, ease: EASE_OUT_EXPO }}
        />

        {/* Point markers */}
        {pts.map((p, i) => (
          <motion.circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r={i === pts.length - 1 ? 4.5 : 3}
            fill="var(--color-gold-400)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.7 + i * 0.09, duration: 0.4 }}
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
          />
        ))}

        {/* Year labels */}
        {TREND_YEARS.map((y, i) => (
          <text
            key={y}
            x={pts[i][0]}
            y={H - 8}
            textAnchor="middle"
            fontSize="10"
            className="fill-[color:var(--color-muted)] font-sans"
          >
            &rsquo;{y}
          </text>
        ))}
      </svg>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <Section id="why">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <Eyebrow>Why PPK</Eyebrow>
          <AnimatedHeading
            text="The advantage is in how we work"
            level="h2"
            accentWords={[6]}
            className="mt-5"
          />
          <Reveal delay={0.1}>
            <p className="text-body mt-6">
              Anyone can show you a listing. Our clients stay because of the
              discipline behind every recommendation — and the discretion around
              every deal.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} variants={fadeUp}>
          <GrowthChart />
        </Reveal>
      </div>

      {/* Stats band */}
      <motion.dl
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--color-border)] bg-[color:var(--color-border)] lg:grid-cols-4"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.id}
            variants={fadeUp}
            className="flex flex-col gap-2 bg-ink-900 p-7 md:p-8"
          >
            <dd className="font-display text-4xl text-cream-50 md:text-5xl">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </dd>
            {/* Animated metric bar */}
            <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-[color:var(--color-border)]">
              <motion.div
                className="h-full rounded-full bg-gold-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${STAT_BARS[stat.id] ?? 70}%` }}
                viewport={viewportOnce}
                transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.2 }}
              />
            </div>
            <dt className="mt-1 text-small font-medium text-gold-300">
              {stat.label}
            </dt>
            <p className="text-small text-muted">{stat.description}</p>
          </motion.div>
        ))}
      </motion.dl>

      {/* Differentiator bento */}
      <motion.ul
        variants={staggerContainer(0.07)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {DIFFERENTIATORS.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={item.id}
              variants={fadeUp}
              className={cn(
                "surface lift group flex flex-col gap-4 p-7 md:p-8",
                i === 0 && "sm:col-span-2 lg:col-span-1",
              )}
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-ink-800/60 text-gold-300 transition-colors duration-500 group-hover:border-gold-400/40 group-hover:text-gold-200">
                <Icon className="size-5" strokeWidth={1.6} />
              </span>
              <h3 className="text-heading-3 text-cream-50">{item.title}</h3>
              <p className="text-body">{item.description}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </Section>
  );
}
