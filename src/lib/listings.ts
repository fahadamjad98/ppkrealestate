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
  {
    slug: "palm-jumeirah-villa",
    title: "Beachfront Villa on Palm Jumeirah", // TODO: confirm title
    community: "Palm Jumeirah",
    location: "Palm Jumeirah, Dubai",
    purpose: "sale",
    type: "Villa",
    price: "Price on request", // TODO
    beds: "5", // TODO
    baths: "6", // TODO
    area: "8,500 sqft", // TODO
    reference: "PPK-PJ-001",
    description:
      "Placeholder description for this Palm Jumeirah villa — replace with the real details covering the beach access, views, plot and finishes.", // TODO
    highlights: [
      "Private beach access",
      "Infinity pool",
      "Panoramic sea views", // TODO: confirm
    ],
    amenities: [
      "Private pool",
      "Landscaped garden",
      "Maid's room",
      "Covered parking",
      "24/7 security",
      "Beach access", // TODO: confirm
    ],
    images: gallery("palm-jumeirah", 5),
    featured: true,
  },
  {
    slug: "dubai-hills-villa",
    title: "Contemporary Villa in Dubai Hills Estate", // TODO: confirm title
    community: "Dubai Hills Estate",
    location: "Dubai Hills Estate, Dubai",
    purpose: "sale",
    type: "Villa",
    price: "Price on request", // TODO
    beds: "4", // TODO
    baths: "5", // TODO
    area: "6,200 sqft", // TODO
    reference: "PPK-DH-001",
    description:
      "Placeholder description for this Dubai Hills Estate villa — replace with the real details covering the layout, garden, views and finishes.", // TODO
    highlights: [
      "Golf course community",
      "Modern open-plan living",
      "Landscaped garden", // TODO: confirm
    ],
    amenities: [
      "Private garden",
      "Covered parking",
      "Maid's room",
      "24/7 security",
      "Community pool",
      "Parks & golf course", // TODO: confirm
    ],
    images: gallery("dubai-hills", 5),
  },
  {
    slug: "jumeirah-golf-estates-villa",
    title: "Villa in Jumeirah Golf Estates", // TODO: confirm title
    community: "Jumeirah Golf Estates",
    location: "Jumeirah Golf Estates, Dubai",
    purpose: "sale",
    type: "Villa",
    price: "Price on request", // TODO
    beds: "5", // TODO
    baths: "6", // TODO
    area: "7,000 sqft", // TODO
    reference: "PPK-JGE-001",
    description:
      "Placeholder description for this Jumeirah Golf Estates villa — replace with the real details covering the golf views, plot, layout and finishes.", // TODO
    highlights: [
      "Golf course views",
      "Spacious living areas",
      "Private garden", // TODO: confirm
    ],
    amenities: [
      "Private garden",
      "Covered parking",
      "Maid's room",
      "24/7 security",
      "Golf course access", // TODO: confirm
    ],
    images: gallery("jumeirah-golf-estates", 4),
  },
];

export const getListing = (slug: string): Listing | undefined =>
  LISTINGS.find((l) => l.slug === slug);
