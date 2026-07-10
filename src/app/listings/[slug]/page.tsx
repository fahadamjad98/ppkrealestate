import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Check,
  Hash,
  ChevronRight,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Gallery } from "@/components/listings/Gallery";
import { LISTINGS, getListing } from "@/lib/listings";
import { BRAND } from "@/lib/constants";

const WHATSAPP = "971523514029";

export function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) return { title: "Property not found" };
  return {
    title: `${listing.title} — ${listing.location}`,
    description: listing.description,
  };
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) notFound();

  const specs = [
    { icon: BedDouble, label: "Bedrooms", value: listing.beds },
    { icon: Bath, label: "Bathrooms", value: listing.baths },
    { icon: Maximize, label: "Built-up area", value: listing.area },
  ];

  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hi PPK Real Estate, I'm interested in "${listing.title}" (Ref: ${listing.reference}).`,
  )}`;

  return (
    <Section className="pt-28 md:pt-32">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-1.5 text-small text-muted"
      >
        <Link href="/" className="transition-colors hover:text-gold-500">
          Home
        </Link>
        <ChevronRight className="size-3.5" />
        <Link href="/listings" className="transition-colors hover:text-gold-500">
          Listings
        </Link>
        <ChevronRight className="size-3.5" />
        <span className="line-clamp-1 text-cream-100">{listing.title}</span>
      </nav>

      <Gallery images={listing.images} title={listing.title} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
        {/* Main column */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gold-400 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-cream-50">
              {listing.purpose === "sale" ? "For Sale" : "For Rent"}
            </span>
            <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-cream-100">
              {listing.type}
            </span>
          </div>

          <h1 className="text-heading-2 mt-4 text-cream-50">{listing.title}</h1>
          <p className="mt-3 flex items-center gap-2 text-body">
            <MapPin className="size-4 shrink-0 text-gold-500" strokeWidth={2} />
            {listing.location}
          </p>
          <p className="mt-5 font-display text-3xl font-bold text-cream-50 md:text-4xl">
            {listing.price}
          </p>

          {/* Key specs */}
          <div className="mt-7 grid grid-cols-3 divide-x divide-[color:var(--color-border)] overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
            {specs.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col gap-1 p-5">
                  <Icon className="size-5 text-gold-500" strokeWidth={1.7} />
                  <span className="mt-1 font-display text-lg font-bold text-cream-50">
                    {s.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.1em] text-muted">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Overview */}
          <div className="mt-10">
            <h2 className="text-heading-3 text-cream-50">Overview</h2>
            <p className="text-body mt-4 whitespace-pre-line">
              {listing.description}
            </p>
          </div>

          {/* Highlights */}
          {listing.highlights.length > 0 && (
            <div className="mt-10">
              <h2 className="text-heading-3 text-cream-50">Highlights</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {listing.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-body">
                    <Check
                      className="mt-1 size-4 shrink-0 text-gold-500"
                      strokeWidth={2.4}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Amenities */}
          {listing.amenities.length > 0 && (
            <div className="mt-10">
              <h2 className="text-heading-3 text-cream-50">Amenities</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {listing.amenities.map((a) => (
                  <span
                    key={a}
                    className="flex items-center gap-2 rounded-xl border border-[color:var(--color-border)] bg-white px-4 py-3 text-small text-cream-100 shadow-[var(--shadow-sm)]"
                  >
                    <Check
                      className="size-4 shrink-0 text-gold-500"
                      strokeWidth={2.4}
                    />
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enquiry sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-lg)]">
            <p className="text-small uppercase tracking-[0.16em] text-muted">
              Presented by
            </p>
            <p className="mt-1 font-display text-xl font-bold text-cream-50">
              {BRAND.name}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-small text-muted">
              <Hash className="size-3.5" strokeWidth={2} />
              Ref: {listing.reference}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={BRAND.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold-400 px-6 font-medium text-cream-50 shadow-[0_10px_40px_-12px_rgba(227,167,11,0.5)] transition-colors hover:bg-gold-300"
              >
                <Phone className="size-4" strokeWidth={2} />
                Call agent
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--color-border)] px-6 font-medium text-cream-50 transition-colors hover:border-gold-400/60 hover:bg-ink-800/60"
              >
                <MessageCircle className="size-4" strokeWidth={2} />
                WhatsApp
              </a>
              <a
                href={`${BRAND.emailHref}?subject=${encodeURIComponent(
                  `Enquiry: ${listing.title} (${listing.reference})`,
                )}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--color-border)] px-6 font-medium text-cream-50 transition-colors hover:border-gold-400/60 hover:bg-ink-800/60"
              >
                <Mail className="size-4" strokeWidth={2} />
                Email enquiry
              </a>
            </div>

            <p className="mt-5 text-center text-xs text-muted">
              {BRAND.phone} · {BRAND.email}
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
