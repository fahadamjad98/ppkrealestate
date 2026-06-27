"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  EASE_OUT_EXPO,
} from "@/lib/animations";

export function FAQ() {
  const [open, setOpen] = useState<string | null>(FAQS[0].id);

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Questions</Eyebrow>
          <AnimatedHeading
            text="The things clients ask first"
            level="h2"
            accentWords={[5]}
            className="mt-5"
          />
          <Reveal delay={0.1}>
            <p className="text-body mt-6 max-w-sm">
              Can&apos;t find what you&apos;re looking for? A real person on the
              desk will answer within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ButtonLink href="#contact" variant="secondary" withArrow className="mt-7">
              Ask us directly
            </ButtonLink>
          </Reveal>
        </div>

        <motion.ul
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col"
        >
          {FAQS.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <motion.li
                key={faq.id}
                variants={fadeUp}
                className="border-b border-[color:var(--color-border)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  data-cursor=""
                >
                  <span className="text-heading-3 text-cream-50">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-border)] text-gold-300"
                  >
                    <Plus className="size-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                      className="overflow-hidden"
                    >
                      <p className="text-body max-w-2xl pb-7 pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </Section>
  );
}
