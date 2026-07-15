"use client";

import { motion } from "motion/react";
import { Handshake, LineChart, Users, Languages } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import {
  staggerContainer,
  fadeUp,
  viewportOnce,
  EASE_OUT_EXPO,
} from "@/lib/animations";

interface Stat {
  label: string;
  detail: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: LucideIcon;
}

const STATS: Stat[] = [
  {
    label: "Partners & developers",
    detail: "Direct relationships with the UAE's leading names",
    value: 89,
    suffix: "+",
    icon: Handshake,
  },
  {
    label: "Assets sold",
    detail: "In closed transactions across the Emirates",
    value: 1,
    prefix: "$",
    suffix: "B+",
    icon: LineChart,
  },
  {
    label: "Consultants",
    detail: "Advisors dedicated to every mandate",
    value: 30,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Languages spoken",
    detail: "Serving a truly global clientele",
    value: 6,
    suffix: "+",
    icon: Languages,
  },
];

/**
 * "Our Journey of Success" — heading + lede over a soft gold glow, then a row
 * of circular stat badges. Each ring draws on as you scroll, the figure counts
 * up, and the circles sit on an offset baseline for a livelier layout.
 */
export function Journey() {
  return (
    <Section
      id="journey"
      className="relative overflow-hidden border-y border-white/10 bg-[#0c2d54]"
    >
      {/* Soft gold ambience */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[520px] max-w-5xl bg-radial-gold opacity-80"
      />

      <div className="relative">
        <Eyebrow>Milestones</Eyebrow>
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <AnimatedHeading
            text="Our Journey of Success"
            level="h2"
            className="text-white lg:max-w-[14ch]"
          />
          <Reveal delay={0.1}>
            <p className="text-[1rem] leading-relaxed text-white/70 lg:max-w-md">
              A track record built deal by deal — celebrating the milestones and
              achievements that define our work across Dubai&rsquo;s real estate
              market.
            </p>
          </Reveal>
        </div>

        <motion.dl
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 lg:mt-20 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className={i % 2 === 1 ? "lg:mt-16" : ""}
              >
                <div className="group relative mx-auto flex aspect-square w-full max-w-[15rem] flex-col items-center justify-center gap-2 rounded-full border-2 border-white bg-gold-400 px-8 text-center shadow-[var(--shadow-md)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]">
                  {/* Animated progress ring */}
                  <svg
                    viewBox="0 0 100 100"
                    className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
                    aria-hidden
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="#ffffff"
                      strokeOpacity="0.35"
                      strokeWidth="1.2"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 0.82 }}
                      viewport={{ amount: 0.5 }}
                      transition={{
                        duration: 1.4,
                        ease: EASE_OUT_EXPO,
                        delay: 0.2 + i * 0.12,
                      }}
                    />
                  </svg>

                  <span className="flex size-11 items-center justify-center rounded-full border border-white/60 bg-white/15 text-white">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <dd className="font-display text-4xl leading-none text-white md:text-5xl">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      repeat
                    />
                  </dd>
                  <dt className="max-w-[13ch] text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.14em] text-white">
                    {stat.label}
                  </dt>
                </div>
                <p className="mx-auto mt-5 max-w-[18ch] text-center text-small text-white/60">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </motion.dl>
      </div>
    </Section>
  );
}
