import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";

/** Shared shell + typographic helpers for legal pages (Terms, Privacy). */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <Section className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <AnimatedHeading text={title} level="h1" className="mt-5" />
        <p className="text-small mt-6 text-muted">Last updated: {updated}</p>
        <div className="mt-10">{children}</div>
      </div>
    </Section>
  );
}

export function LegalHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-heading-3 mb-3 mt-10 text-cream-50 first:mt-0">
      {children}
    </h2>
  );
}

export function LegalText({ children }: { children: React.ReactNode }) {
  return <p className="text-body mt-4 first:mt-0">{children}</p>;
}
