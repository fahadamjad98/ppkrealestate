import type { Listing } from "@/types";

/**
 * Property listings.
 *
 * NOTE: specs below (price, beds, baths, area, description) are PLACEHOLDERS.
 * Replace the values marked `TODO` with the real details for each property.
 * Gallery images live in /public/images/listings/<folder>/NN.jpeg.
 */

/** Build the ordered gallery paths for a listing folder (01.jpeg…NN.jpeg). */
const gallery = (folder: string, count: number): string[] =>
  Array.from(
    { length: count },
    (_, i) => `/images/listings/${folder}/${String(i + 1).padStart(2, "0")}.jpeg`,
  );

export const LISTINGS: Listing[] = [
  {
    slug: "emirates-hills-villa",
    title: "Signature Villa in Emirates Hills", // TODO: confirm title
    community: "Emirates Hills",
    location: "Emirates Hills, Dubai",
    purpose: "sale",
    type: "Villa",
    price: "Price on request", // TODO: e.g. "AED 25,000,000"
    beds: "6", // TODO
    baths: "7", // TODO
    area: "12,000 sqft", // TODO
    reference: "PPK-EH-001",
    description:
      "A landmark residence in Dubai's most exclusive gated community. This is placeholder copy — replace with the property's full description, covering the plot, views, finishes and standout features.", // TODO
    highlights: [
      "Emirates Hills — Dubai's premier villa community",
      "Landscaped private garden",
      "Private swimming pool",
      "Covered parking", // TODO: confirm highlights
    ],
    amenities: [
      "Private pool",
      "Landscaped garden",
      "Maid's room",
      "Covered parking",
      "24/7 security",
      "Golf course views", // TODO: confirm amenities
    ],
    images: gallery("emirates-hills", 18),
    featured: true,
  },
  {
    slug: "majestine-residence",
    title: "Residence at Majestine", // TODO: confirm title
    community: "Majestine",
    location: "Dubai, UAE", // TODO: confirm exact location
    purpose: "sale",
    type: "Apartment",
    price: "Price on request", // TODO
    beds: "2", // TODO
    baths: "3", // TODO
    area: "1,450 sqft", // TODO
    reference: "PPK-MJ-001",
    description:
      "Placeholder description for the Majestine residence — replace with the real details covering layout, views, finishes and building amenities.", // TODO
    highlights: [
      "Contemporary finishes",
      "Bright open-plan living",
      "Prime Dubai location", // TODO: confirm highlights
    ],
    amenities: [
      "Swimming pool",
      "Fully-equipped gym",
      "Covered parking",
      "24/7 security",
      "Concierge", // TODO: confirm amenities
    ],
    images: gallery("majestine", 7),
  },
];

export const getListing = (slug: string): Listing | undefined =>
  LISTINGS.find((l) => l.slug === slug);
