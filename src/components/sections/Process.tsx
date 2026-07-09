"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { PROCESS_STEPS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { EASE_OUT_EXPO } from "@/lib/animations";

function Step({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const dotBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(212,180,131,0.15)", "rgba(212,180,131,1)"],
  );

  return (
    <li ref={ref} className="relative grid grid-cols-[auto_1fr] gap-6 pb-14 last:pb-0 md:gap-10">
      {/* Node */}
      <div className="relative flex flex-col items-center">
        <motion.span
          style={{ scale: dotScale, backgroundColor: dotBg }}
          className="relative z-10 mt-1 flex size-4 items-center justify-center rounded-full ring-4 ring-ink-950"
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="-mt-1">
        <div className="mb-2 flex items-center gap-3">
          <span className="font-display text-sm text-gold-400">{step.number}</span>
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            {step.duration}
          </span>
        </div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="text-heading-3 text-cream-50"
        >
          {step.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.08 }}
          className="text-body mt-3 max-w-xl"
        >
          {step.description}
        </motion.p>
      </motion.div>

      {/* index marker for layout reference */}
      <span className="sr-only">Step {index + 1}</span>
    </li>
  );
}

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.7", "end 0.6"],
  });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 80,
    damping: 26,
  });

  return (
    <Section id="process" className="bg-ink-900/40">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>How we work</Eyebrow>
          <AnimatedHeading
            text="A deliberate path from brief to keys"
            level="h2"
            className="mt-5"
          />
          <Reveal delay={0.1}>
            <p className="text-body mt-6 max-w-md">
              Five considered stages. No pressure, no surprises — just a clear
              line of sight from the first conversation to the moment the door
              opens.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div ref={lineRef} className="relative">
          {/* Track */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-[color:var(--color-border)] md:left-[7px]" />
          {/* Fill */}
          <motion.div
            style={{ height }}
            className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500"
          />
          <ol className="relative">
            {PROCESS_STEPS.map((step, i) => (
              <Step key={step.id} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
