"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { EASE_OUT_EXPO } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);

  const paginate = useCallback((delta: number) => {
    setState(([i]) => {
      const next = (i + delta + TESTIMONIALS.length) % TESTIMONIALS.length;
      return [next, delta];
    });
  }, []);

  const current = TESTIMONIALS[index];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <Section id="testimonials" className="bg-ink-900/40">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow>Client voices</Eyebrow>
          <AnimatedHeading
            text="Relationships that outlast the transaction"
            level="h2"
            accentWords={[2]}
            className="mt-5"
          />
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex size-12 items-center justify-center rounded-full border border-[color:var(--color-border)] text-cream-100 transition-colors hover:border-gold-400/50 hover:text-gold-300"
              data-cursor=""
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex size-12 items-center justify-center rounded-full border border-[color:var(--color-border)] text-cream-100 transition-colors hover:border-gold-400/50 hover:text-gold-300"
              data-cursor=""
            >
              <ArrowRight className="size-5" />
            </button>
            <span className="text-small tnum ml-2 text-muted">
              <span className="text-cream-50">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative min-h-[22rem] md:min-h-[20rem]">
          <Quote
            className="absolute -top-4 right-0 size-20 text-gold-400/10"
            aria-hidden
          />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={current.id}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="surface flex h-full flex-col justify-between p-8 md:p-12"
            >
              <div>
                <div className="mb-6 flex gap-1" aria-label={`Rated ${current.rating} of 5`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <blockquote className="font-display text-2xl leading-snug text-cream-50 md:text-3xl">
                  “{current.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-[color:var(--color-border)] pt-6">
                <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-display text-lg text-ink-950">
                  {current.name.charAt(0)}
                </span>
                <div>
                  <div className="font-medium text-cream-50">{current.name}</div>
                  <div className="text-small text-muted">
                    {current.role} · {current.location}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="mt-6 flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setState([i, i > index ? 1 : -1])}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === index ? "w-8 bg-gold-400" : "w-1.5 bg-ink-600 hover:bg-ink-700",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
