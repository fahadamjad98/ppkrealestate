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
} from "@/lib/animations";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  return (
    <Section id="why">
      <div className="max-w-2xl">
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

      {/* Stats band */}
      <motion.dl
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--color-border)] bg-[color:var(--color-border)] lg:grid-cols-4"
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
            <dt className="text-small font-medium text-gold-300">
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
