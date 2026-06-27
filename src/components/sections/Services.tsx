"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Check, Plus } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import {
  staggerContainer,
  fadeUp,
  viewportOnce,
  EASE_OUT_EXPO,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState<string>(SERVICES[0].id);

  return (
    <Section id="services">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Intro column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>What we do</Eyebrow>
          <AnimatedHeading
            text="A full spectrum of property intelligence"
            level="h2"
            accentWords={[5]}
            className="mt-5"
          />
          <Reveal delay={0.1}>
            <p className="text-body mt-6 max-w-md">
              Four disciplines, one desk. Whether you are acquiring a first home
              abroad or structuring a nine-figure portfolio, the same rigour and
              discretion applies.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-5xl text-gold-400">04</span>
              <span className="text-small max-w-[14ch] text-muted">
                core services, tailored to every mandate
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="relative mt-10 hidden aspect-[4/5] max-w-sm overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] shadow-[var(--shadow-md)] lg:block">
              <Image
                src="/images/interior-living.jpg"
                alt="A curated luxury living interior"
                fill
                sizes="380px"
                className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(20,16,11,0.55) 100%)",
                }}
                aria-hidden
              />
              <span className="absolute bottom-5 left-5 text-small font-medium text-white/90">
                Interiors curated for how you actually live
              </span>
            </div>
          </Reveal>
        </div>

        {/* Accordion of services */}
        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-3"
        >
          {SERVICES.map((service) => {
            const isOpen = active === service.id;
            const Icon = service.icon;
            return (
              <motion.li key={service.id} variants={fadeUp}>
                <button
                  type="button"
                  onClick={() => setActive(service.id)}
                  aria-expanded={isOpen}
                  className={cn(
                    "surface w-full overflow-hidden p-6 text-left md:p-8",
                    isOpen && "border-gold-400/40",
                  )}
                  data-cursor=""
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
                        isOpen
                          ? "border-gold-400/50 bg-gold-400/10 text-gold-300"
                          : "border-[color:var(--color-border)] text-cream-200/70",
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>

                    <div className="flex flex-1 items-baseline gap-3">
                      <span className="text-small tnum text-gold-500">
                        {service.index}
                      </span>
                      <h3 className="text-heading-3 text-cream-50">
                        {service.title}
                      </h3>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                      className="text-gold-300"
                    >
                      <Plus className="size-5" />
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                        className="overflow-hidden"
                      >
                        <div className="pl-[68px] pt-5">
                          <p className="text-body max-w-md">
                            {service.description}
                          </p>
                          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center gap-2 text-small text-cream-100"
                              >
                                <Check className="size-4 text-gold-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </Section>
  );
}
