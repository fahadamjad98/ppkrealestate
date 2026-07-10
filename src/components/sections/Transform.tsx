"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  image: string;
}

const STEPS: Step[] = [
  {
    title: "Choosing the right property",
    description:
      "From landmark residences to high-yield investment apartments, we match you to the right asset and handle every step of a seamless purchase.",
    image: "/images/new-property.jpg",
  },
  {
    title: "Get a Golden Visa",
    description:
      "Invest in Dubai real estate and secure long-term residency. We streamline the entire Golden Visa process, from eligibility to issuance.",
    image: "/images/dubai-golden-visa.avif",
  },
  {
    title: "Get a Mortgage",
    description:
      "Access competitive financing through our banking partners, with structuring advice tailored to residents and overseas buyers alike.",
    image: "/images/mortgage.jpg",
  },
  {
    title: "Renting your property",
    description:
      "Position your property for the strongest possible yield, with tenant sourcing, contracts and Ejari handled end to end.",
    image: "/images/for-rent.jpg",
  },
  {
    title: "Managing your property",
    description:
      "Hands-off ownership with proactive maintenance, inspections and reporting that protect and grow your asset's value.",
    image: "/images/property-management.jpg",
  },
  {
    title: "Selling your property",
    description:
      "Exit at the right moment and the right price, backed by precise valuation, targeted marketing and discreet negotiation.",
    image: "/images/for-sale.png",
  },
];

// A soft glow that glides to a new spot and shifts colour as each step
// activates — alternating warm gold and cool blue.
const STEP_ACCENTS = [
  { color: "rgba(246,176,52,0.40)", x: "2%", y: "4%" },
  { color: "rgba(12,45,84,0.30)", x: "54%", y: "-6%" },
  { color: "rgba(246,176,52,0.40)", x: "-6%", y: "42%" },
  { color: "rgba(12,45,84,0.30)", x: "50%", y: "38%" },
  { color: "rgba(246,176,52,0.40)", x: "6%", y: "20%" },
  { color: "rgba(12,45,84,0.30)", x: "46%", y: "54%" },
];

/**
 * "Transforming Spaces for Optimal Living" — a sticky scrollytelling section.
 * The image column scrolls upward while the step list stays pinned; the step
 * whose image sits at viewport centre lights up, and a soft glow behind the
 * content glides + shifts colour with each step.
 */
export function Transform() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Activate the step whose image crosses the middle band of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    const nodes = refs.current.filter(Boolean) as HTMLDivElement[];
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="transform">
      {/* Animated glow. overflow-hidden lives on THIS wrapper — a sibling of
          the sticky list, never an ancestor — so sticky scrolling still works. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* The active step's image, very faint, crossfading per step */}
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === i ? 0.08 : 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={step.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              loading="eager"
            />
          </motion.div>
        ))}

        {/* Soft colour glow that glides + shifts hue per step */}
        <motion.div
          className="absolute h-[70vh] w-[70vh] rounded-full blur-[130px]"
          initial={false}
          animate={{
            backgroundColor: STEP_ACCENTS[active].color,
            left: STEP_ACCENTS[active].x,
            top: STEP_ACCENTS[active].y,
          }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="relative z-10 flex flex-col-reverse gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        {/* Image column — scrolls upward past the pinned text */}
        <div className="flex w-full flex-col gap-6 lg:w-[48%]">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-[color:rgba(12,45,84,0.15)] shadow-[0_0_26px_3px_rgba(12,45,84,0.18),0_18px_44px_-14px_rgba(12,45,84,0.4)]"
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className={cn(
                  "object-cover transition-transform duration-700 ease-[var(--ease-out-expo)]",
                  active === i ? "scale-100" : "scale-[1.04]",
                )}
              />
              <div
                aria-hidden
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(20,16,11,0.35) 100%)",
                  opacity: active === i ? 0 : 0.6,
                }}
              />
            </div>
          ))}
        </div>

        {/* Sticky step list */}
        <div className="lg:sticky lg:top-28 lg:h-fit lg:w-[44%] lg:self-start">
          <AnimatedHeading
            text="We will help you to "
            level="h2"
          />
          <Reveal delay={0.1}>
            <p className="text-body mt-6 max-w-md">
              Increase the value of your property investments through
              PPK&rsquo;s comprehensive, end-to-end services.
            </p>
          </Reveal>

          <ul className="mt-10 flex flex-col gap-2.5 lg:mt-12 lg:gap-3">
            {STEPS.map((step, i) => {
              const isActive = i === active;
              return (
                <li
                  key={step.title}
                  className={cn(
                    "flex items-start gap-4 rounded-2xl border px-5 py-4 transition-all duration-400 ease-[var(--ease-out-expo)] md:px-6 md:py-5",
                    isActive
                      ? "border-gold-400/60 bg-white shadow-[0_18px_44px_-18px_rgba(12,45,84,0.4)]"
                      : "border-transparent hover:border-[color:var(--color-border)]",
                  )}
                >
                  <span
                    className={cn(
                      "mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
                      isActive
                        ? "border-gold-400 bg-gold-400 text-cream-50"
                        : "border-gold-300/40 text-gold-300/40",
                    )}
                  >
                    <ChevronRight className="size-4" strokeWidth={2.2} />
                  </span>
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-display text-2xl transition-colors duration-300 md:text-3xl",
                        isActive ? "text-cream-50" : "text-cream-200/45",
                      )}
                    >
                      {step.title}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-body max-w-md pt-2">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
