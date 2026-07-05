"use client";

import { TRUSTED_BY } from "@/lib/constants";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

function Pill({ name }: { name: string }) {
  return (
    <div className="mx-2.5 flex h-16 min-w-[190px] select-none items-center justify-center whitespace-nowrap rounded-full border border-[color:rgba(246,176,52,0.35)] bg-white/[0.04] px-7 font-display text-lg text-gold-400 transition-colors duration-300 hover:border-gold-400 hover:bg-gold-400/10 md:h-[68px] md:min-w-[220px] md:text-xl">
      {name}
    </div>
  );
}

export function TrustedBy() {
  const half = Math.ceil(TRUSTED_BY.length / 2);
  const rowOne = TRUSTED_BY.slice(0, half);
  const rowTwo = TRUSTED_BY.slice(half);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0c2d54] py-14 md:py-20">
      <div className="container-x">
        <Reveal>
          <p className="mb-10 text-center text-small uppercase tracking-[0.22em] text-gold-300 md:mb-12">
            Trusted by 50+ leading UAE developers
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-4 md:gap-5">
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
