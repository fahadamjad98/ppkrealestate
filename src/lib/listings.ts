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
    slug: "wellington-grand-villas",
    title: "6 Bedroom Villa at Wellington Grand Villas",
    community: "Wellington Grand Villas",
    location: "Dubai, UAE", // TODO: confirm exact location
    purpose: "sale",
    type: "Villa",
    price: "AED 25,387,028",
    beds: "6",
    baths: "7", // TODO: confirm
    area: "13,458.77 sqft",
    reference: "PPK-WGV-001",
    description:
      "Off-plan 6 bedroom Type B1 villa (GV-16) with 13,458.77 sqft built-up area on an 8,011.86 sqft plot. A gated community of contemporary luxury villas set among landscaped, tree-lined streets, with a grand arrival gateway and resort-style living.",
    highlights: [
      "8,011.86 sqft plot",
      "Payment plan: 30% during construction, 70% on completion",
      "Gated community with grand entrance",
      "Contemporary villa architecture",
      "Landscaped, tree-lined streets", // TODO: confirm highlights
    ],
    amenities: [
      "Private garden",
      "Covered parking",
      "Maid's room",
      "24/7 security",
      "Community pool",
      "Parks & green spaces", // TODO: confirm amenities
    ],
    images: gallery("grand-villas", 11),
    featured: true,
  },
  {
    slug: "sanctuary-by-prestige-one",
    title: "1 Bedroom Apartment at Sanctuary by Prestige One",
    community: "Sanctuary",
    location: "Dubai, UAE", // TODO: confirm exact location
    purpose: "sale",
    type: "Apartment",
    price: "AED 2,112,000",
    beds: "1",
    baths: "1", // TODO: confirm
    area: "650.57 sqft",
    reference: "PPK-SPO-001",
    description:
      "Off-plan 1 bedroom apartment (Unit 302), anticipated completion August 2029. Refined residences by Prestige One with elegant, light-filled interiors, natural stone finishes and curated residents' lounges.",
    highlights: [
      "Off-plan — completion Aug 2029",
      "Designer interiors with natural stone",
      "Residents' lounge & games room",
      "Floor-to-ceiling windows", // TODO: confirm highlights
    ],
    amenities: [
      "Swimming pool",
      "Fully-equipped gym",
      "Residents' lounge",
      "Covered parking",
      "24/7 security",
      "Concierge", // TODO: confirm amenities
    ],
    images: gallery("sanctuary", 13),
  },
  {
    slug: "hilton-residences-dubai-maritime-city",
    title: "1 Bedroom Apartment at Hilton Residences",
    community: "Dubai Maritime City",
    location: "Dubai Maritime City, Dubai",
    purpose: "sale",
    type: "Apartment",
    price: "AED 3,243,000",
    beds: "1",
    baths: "1", // TODO: confirm
    area: "813.97 sqft",
    reference: "PPK-HR-001",
    description:
      "Off-plan 1 bedroom apartment (Unit 803) at Hilton Residences Dubai Maritime City by Prestige One, anticipated completion December 2029. A Hilton-branded waterfront tower with views across the Dubai skyline and the sea.",
    highlights: [
      "Off-plan — completion Dec 2029",
      "Hilton-branded residences",
      "Waterfront skyline views",
    ],
    amenities: [
      "Swimming pool",
      "Fully-equipped gym",
      "Concierge",
      "Covered parking",
      "24/7 security", // TODO: confirm amenities
    ],
    images: gallery("hilton", 16),
  },
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
