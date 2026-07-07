"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";

const CONTACTS = [
  { icon: Phone, label: "Call the desk", value: BRAND.phone, href: BRAND.phoneHref },
  { icon: Mail, label: "Email Paaria", value: BRAND.email, href: BRAND.emailHref },
  { icon: MapPin, label: "Visit us", value: BRAND.address, href: undefined },
] as const;

export function ContactCTA() {
  return (
    <Section id="contact" spacing={false} className="py-[var(--spacing-section)]">
      <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[color:var(--color-border)] px-6 py-16 md:px-16 md:py-24">
        {/* Ambient backdrop */}
        <div className="bg-radial-gold absolute inset-0 -z-10" />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(80% 120% at 50% 0%, rgba(195,154,94,0.14), transparent 60%)",
          }}
          aria-hidden
        />
        <motion.div
          aria-hidden
          className="animate-float-slow absolute -bottom-1/3 left-1/2 -z-10 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-gold-600/10 blur-[140px]"
        />

        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-eyebrow">Begin the conversation</span>
          </Reveal>
          <AnimatedHeading
            text="Let's find the address that's unmistakably yours"
            level="h1"
            accentWords={[8]}
            className="mx-auto mt-6"
          />
          <Reveal delay={0.1}>
            <p className="text-lead mx-auto mt-7 max-w-xl">
              Tell us what you&apos;re looking for — or what you&apos;re ready to
              move on. The first conversation is confidential and costs nothing
              but a little of your time.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <ContactForm />
              <p className="text-small mt-5 text-muted">
                Prefer to talk?{" "}
                <a
                  href={BRAND.phoneHref}
                  className="text-gold-500 underline-offset-4 transition-colors hover:text-gold-400 hover:underline"
                >
                  Call {BRAND.phone}
                </a>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Contact rail */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-border)] sm:grid-cols-3">
          {CONTACTS.map((c) => {
            const Icon = c.icon;
            const inner = (
              <div className="flex h-full flex-col gap-2 bg-ink-900 p-6 text-left transition-colors duration-300 hover:bg-ink-850">
                <Icon className="size-5 text-gold-300" strokeWidth={1.6} />
                <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  {c.label}
                </span>
                <span className="text-cream-50">{c.value}</span>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} data-cursor="">
                {inner}
              </a>
            ) : (
              <div key={c.label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
