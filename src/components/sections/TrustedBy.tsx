"use client";

import { TRUSTED_BY } from "@/lib/constants";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";

function Pill({ name }: { name: string }) {
  return (
    <div className="group/pill mx-2.5 flex h-16 min-w-[190px] select-none items-center justify-center gap-3 whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.05] px-8 font-display text-lg text-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/70 hover:bg-gold-400/[0.08] hover:text-gold-200 md:h-[72px] md:min-w-[220px] md:text-xl">
      <span className="size-1.5 shrink-0 rounded-full bg-gold-400 transition-transform duration-300 group-hover/pill:scale-125" />
      {name}
    </div>
  );
}

export function TrustedBy() {
  const half = Math.ceil(TRUSTED_BY.length / 2);
  const rowOne = TRUSTED_BY.slice(0, half);
  const rowTwo = TRUSTED_BY.slice(half);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0c2d54] py-20 md:py-28">
      {/* Soft gold ambience */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[440px] max-w-4xl bg-radial-gold opacity-60"
      />

      <div className="container-x relative">
        <div className="flex flex-col items-center text-center">
          <Eyebrow className="justify-center">Our developer network</Eyebrow>
          <AnimatedHeading
            text="Trusted by Dubai's leading developers"
            level="h2"
            className="mt-5 max-w-[18ch] text-white"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-white/70">
              Direct relationships and preferential allocations across the
              region&rsquo;s most established names — so our clients reach the
              best inventory first, often before it hits the open market.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 inline-flex items-baseline gap-2.5">
              <span className="font-display text-5xl leading-none text-gradient-gold md:text-6xl">
                50+
              </span>
              <span className="text-small uppercase tracking-[0.18em] text-white/60">
                developer partners
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-14 flex flex-col gap-4 md:mt-16 md:gap-5">
        <Marquee duration={60}>
          {rowOne.map((name) => (
            <Pill key={name} name={name} />
          ))}
        </Marquee>
        <Marquee duration={60} reverse>
          {rowTwo.map((name) => (
            <Pill key={name} name={name} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
