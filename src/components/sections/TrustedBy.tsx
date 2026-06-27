"use client";

import { TRUSTED_BY } from "@/lib/constants";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section className="relative border-y border-[color:var(--color-border)] bg-ink-900/40 py-12 md:py-16">
      <div className="container-x">
        <Reveal>
          <p className="mb-9 text-center text-small uppercase tracking-[0.22em] text-muted">
            Trusted by developers, family offices &amp; institutional partners
          </p>
        </Reveal>
      </div>

      <Marquee duration={42}>
        {TRUSTED_BY.map((name) => (
          <div
            key={name}
            className="surface mx-3 flex h-20 min-w-[210px] select-none items-center justify-center whitespace-nowrap px-8 font-display text-xl text-cream-100 md:mx-4 md:h-24 md:min-w-[240px] md:text-2xl"
          >
            {name}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
