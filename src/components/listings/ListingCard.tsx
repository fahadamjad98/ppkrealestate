import Link from "next/link";
import Image from "next/image";
import { BedDouble, Bath, Maximize, MapPin, Camera } from "lucide-react";
import type { Listing } from "@/types";

/** Bayut / Property Finder–style property card. */
export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
    >
      {/* Cover photo */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Purpose badge */}
        <span className="absolute left-3 top-3 rounded-full bg-gold-400 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-cream-50 shadow-[var(--shadow-sm)]">
          {listing.purpose === "sale" ? "For Sale" : "For Rent"}
        </span>
        {/* Photo count */}
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <Camera className="size-3.5" strokeWidth={2} />
          {listing.images.length}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5">
        <div className="font-display text-xl font-bold text-cream-50">
          {listing.price}
        </div>
        <h3 className="mt-1.5 line-clamp-1 text-[0.95rem] font-semibold text-cream-100">
          {listing.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-small text-muted">
          <MapPin className="size-3.5 shrink-0 text-gold-500" strokeWidth={2} />
          <span className="line-clamp-1">{listing.location}</span>
        </p>

        {/* Specs */}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[color:var(--color-border)] pt-4 text-small text-cream-100">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="size-4 text-gold-500" strokeWidth={1.8} />
            {listing.beds}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath className="size-4 text-gold-500" strokeWidth={1.8} />
            {listing.baths}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize className="size-4 text-gold-500" strokeWidth={1.8} />
            {listing.area}
          </span>
          <span className="ml-auto rounded-md bg-ink-800 px-2 py-0.5 text-xs font-medium text-cream-100">
            {listing.type}
          </span>
        </div>
      </div>
    </Link>
  );
}
