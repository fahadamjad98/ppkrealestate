"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

interface Stat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

const STATS: Stat[] = [
  { label: "Partners and developers", value: 89, suffix: "+" },
  { label: "Assets sold", value: 1, prefix: "$", suffix: "B+" },
  { label: "Consultants", value: 30, suffix: "+" },
  { label: "Languages spoken", value: 6, suffix: "+" },
];

/**
 * "Our Journey of Success" — a heading + lede, then a two-column ledger of
 * milestone figures that count up on scroll. Modeled on ThriveState's stats.
 */
export function Journey() {
  return (
    <Section id="journey">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <AnimatedHeading
          text="Our Journey of Success"
          level="h2"
          accentWords={[4]}
          className="lg:max-w-[14ch]"
        />
        <Reveal delay={0.1}>
          <p className="text-body lg:max-w-md">
            We are celebrating our milestones and achievements in Dubai&rsquo;s
            real estate market.
          </p>
        </Reveal>
      </div>

      <dl className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:mt-16 lg:gap-x-24">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className="flex items-baseline justify-between gap-6 border-t border-[color:var(--color-border)] py-7 md:py-9"
          >
            <dt className="text-small uppercase tracking-[0.18em] text-gold-500">
              {stat.label}
            </dt>
            <dd className="font-display text-5xl text-cream-50 md:text-6xl">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
