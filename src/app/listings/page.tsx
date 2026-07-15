import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { ListingCard } from "@/components/listings/ListingCard";
import { LISTINGS } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Properties for Sale",
  description:
    "Browse curated homes and investments across Dubai and the UAE, handpicked by PPK Real Estate.",
};

export default function ListingsPage() {
  return (
    <Section id="listings" className="pt-32 md:pt-40">
      <div className="max-w-3xl">
        <Eyebrow>Our Listings</Eyebrow>
        <AnimatedHeading
          text="Properties for sale"
          level="h1"
          className="mt-5"
        />
        <Reveal delay={0.1}>
          <p className="text-lead mt-7">
            A handpicked selection of homes and investments across Dubai and the
            wider UAE — each one vetted, verified and represented directly by
            PPK Real Estate.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <p className="mt-12 text-small font-medium uppercase tracking-[0.16em] text-muted">
          {LISTINGS.length} propert{LISTINGS.length === 1 ? "y" : "ies"}{" "}
          available
        </p>
      </Reveal>

      <div className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]">
        {LISTINGS.map((listing) => (
          <div
            key={listing.slug}
            className="w-[300px] shrink-0 snap-start sm:w-[340px]"
          >
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </Section>
  );
}
