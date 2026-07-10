import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  year: string;
  priceFrom: string;
  description: string;
  stats: { label: string; value: string }[];
  image: string; // /images/*.jpg in public
  accent: string; // gradient overlay tint
}

export interface Listing {
  slug: string;
  title: string;
  community: string;
  location: string;
  purpose: "sale" | "rent";
  type: string; // Villa, Apartment, Penthouse…
  price: string; // display string, e.g. "AED 25,000,000" or "Price on request"
  beds: string;
  baths: string;
  area: string; // built-up area, e.g. "12,000 sqft"
  reference: string;
  description: string;
  highlights: string[];
  amenities: string[];
  images: string[]; // gallery paths under /public
  featured?: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
