"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Live the PPK Experience" — a two-column editorial grid: a tall portrait
 * paired with a lede on the left, a statement + supporting copy and a wide
 * skyline on the right. Rendered as a gold/yellow band with dark navy text
 * for contrast against the surrounding navy sections.
 */
export function Experience() {
  return (
    <Section id="experience" className="bg-gold-400 text-ink-950">
      {/* Dark-navy eyebrow (the default gold one would vanish on yellow) */}
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-ink-950/50" />
        <span className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-ink-950">
          The PPK experience
        </span>
      </div>
      <AnimatedHeading
        text="PPK Real Estate Experience"
        level="display"
        className="mt-3 font-display text-[clamp(3.25rem,14vw,12rem)] !font-black uppercase leading-[0.82] tracking-[-0.03em]"
      />

      <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:flex-row lg:justify-between lg:gap-8">
        {/* Left column — portrait + lede */}
        <div className="flex flex-col gap-6 lg:max-w-[403px] lg:gap-8">
          <Reveal>
            <div className="relative aspect-[403/450] overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] shadow-[var(--shadow-md)]">
              <Image
                src="/images/lifestyle-home.jpg"
                alt="A light-filled home where everyday life unfolds"
                fill
                sizes="(min-width: 1024px) 403px, 100vw"
                className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-auto text-[1.05rem] font-semibold leading-relaxed text-ink-950 lg:max-w-[600px]">
              Discover your dream home in the city of gold. Our personalised
              approach to property search ensures you find a home where you can
              thrive comfortably — one that also builds value as a sound
              investment for your future.
            </p>
          </Reveal>
        </div>

        {/* Right column — statement, supporting copy, wide skyline */}
        <div className="flex w-full flex-col gap-6 lg:max-w-[742px] lg:gap-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <Reveal>
              <p className="font-display text-4xl font-extrabold leading-[1.02] text-ink-950 lg:max-w-[340px] lg:text-5xl">
                A new way to search for properties in the dynamic real estate
                market of Dubai
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[1.05rem] font-semibold leading-relaxed text-ink-950 lg:max-w-[320px]">
                We offer a wealth of opportunities for property investors in
                Dubai. Our investment options are tailored to your goals so you
                can maximise your returns — whether through high rental yields,
                capital appreciation, or portfolio diversification across
                off-plan and secondary market properties.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[742/344] w-full overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] shadow-[var(--shadow-md)]">
              <Image
                src="/images/project-marina.jpg"
                alt="The Dubai skyline along the marina at dusk"
                fill
                sizes="(min-width: 1024px) 742px, 100vw"
                className="object-cover object-center transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
