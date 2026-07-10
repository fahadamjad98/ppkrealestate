import type { Metadata } from "next";
import Image from "next/image";
import { Search, Handshake, ShieldCheck, HeartHandshake } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    " Founder & CEO of PPK Real Estate — a boutique Dubai advisory built on research, honesty and relationships that outlast the transaction.",
};

const VALUES = [
  {
    icon: Search,
    title: "Research, not guesswork",
    text: "Every recommendation is grounded in real market data — yields, absorption and capital flows, not hunches.",
  },
  {
    icon: Handshake,
    title: "Honesty over the hard sell",
    text: "We'll talk you out of the wrong deal as readily as into the right one. Your outcome comes before any commission.",
  },
  {
    icon: ShieldCheck,
    title: "Absolute discretion",
    text: "Names, numbers and intentions stay private — from the first conversation to long after the keys change hands.",
  },
  {
    icon: HeartHandshake,
    title: "Relationships that last",
    text: "Most of our business is referral and repeat. We're here for the decade, not the quarter.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <Section id="about" className="pt-32 md:pt-40">
        <div className="max-w-3xl">
          <Eyebrow>About PPK</Eyebrow>
          <AnimatedHeading
            text="Curated property, quiet confidence"
            level="h1"
            className="mt-5"
          />
          <Reveal delay={0.1}>
            <p className="text-lead mt-7">
              PPK Real Estate is a boutique advisory pairing institutional-grade
              research with white-glove brokerage — helping discerning clients
              acquire, invest in, and exit landmark properties across the UAE.
              We measure success not in listings closed, but in trust earned.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Founder */}
      <Section spacing={false} className="pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Portrait */}
          <Reveal>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-gold-400/15 blur-2xl"
              />
              <div
                aria-hidden
                className="absolute -right-4 -top-4 -z-10 hidden h-40 w-40 rounded-[1.5rem] border border-gold-400/40 lg:block"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-2xl)] border border-[color:var(--color-border)] shadow-[var(--shadow-lg)]">
                <Image
                  src="/images/CEO_img.jpeg"
                  alt="Paaria, Founder & CEO of PPK Real Estate"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Name plate */}
              <div className="absolute -bottom-5 left-5 rounded-xl bg-white px-5 py-3 shadow-[var(--shadow-md)] ring-1 ring-[color:var(--color-border)]">
                <div className="font-display text-lg leading-none text-cream-50">
                  Paaria
                </div>
                <div className="text-small mt-1 font-medium text-gold-500">
                  Founder &amp; CEO
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <AnimatedHeading
              text="Founder &  CEO of PPK Real Estate"
              level="h2"
              className="mt-5"
            />
            <div className="mt-6 flex flex-col gap-5">
              <Reveal delay={0.05}>
                <p className="text-body">
                  Paaria founded PPK Real Estate on a simple conviction: that
                  buying, selling or investing in property should feel less like
                  a transaction and more like being genuinely looked after.
                  After years advising private buyers, investors and family
                  offices across Dubai&rsquo;s fast-moving market, she built the
                  boutique she always wished existed — one where the research
                  runs deeper, the advice stays honest, and every client is
                  treated like the only client.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-body">
                  As Founder &amp; CEO, she leads every mandate by the same
                  principles: listen first, recommend only what&rsquo;s right,
                  and protect the client&rsquo;s interest long after the keys
                  change hands. Clients describe her as professional, patient
                  and refreshingly transparent — someone who will talk you out
                  of the wrong deal as readily as into the right one.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-body">
                  Under her leadership, PPK has grown into a trusted name across
                  the Emirates — pairing institutional research with end-to-end
                  service, from off-market sourcing and Golden Visa guidance to
                  mortgage structuring, leasing and portfolio management. The
                  result is a practice defined not by volume, but by
                  relationships that outlast the transaction.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section id="values" className="bg-ink-900/40">
        <div className="max-w-2xl">
          <Eyebrow>What we stand for</Eyebrow>
          <AnimatedHeading
            text="The principles behind every deal"
            level="h2"
            className="mt-5"
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="surface lift flex flex-col gap-4 p-7 md:p-8"
              >
                <span className="flex size-12 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/10 text-gold-400">
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="text-heading-3 text-cream-50">{v.title}</h3>
                <p className="text-body">{v.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-24 text-center md:pb-32">
        <div className="mx-auto max-w-2xl">
          <AnimatedHeading
            text="Let's begin the conversation"
            level="h2"
            className="mx-auto"
          />
          <Reveal delay={0.1}>
            <p className="text-body mx-auto mt-6 max-w-lg">
              Tell us what you&rsquo;re looking for — the first conversation is
              confidential and costs nothing but a little of your time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/#contact" size="lg" withArrow>
                Book a consultation
              </ButtonLink>
              <ButtonLink href="/" size="lg" variant="secondary">
                Back to home
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
