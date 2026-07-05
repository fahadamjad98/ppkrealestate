import {
  Building2,
  KeyRound,
  LineChart,
  Compass,
  ShieldCheck,
  Sparkles,
  Globe2,
  Handshake,
  Gem,
  Clock,
} from "lucide-react";
import type {
  NavLink,
  Service,
  Project,
  ProcessStep,
  Stat,
  Testimonial,
  FaqItem,
  Differentiator,
} from "@/types";

export const BRAND = {
  name: "PPK Real Estate",
  shortName: "PPK",
  tagline: "Curated property. Quiet confidence.",
  description:
    "PPK Real Estate is a boutique advisory pairing institutional research with white-glove brokerage — helping discerning clients acquire, invest in, and exit landmark properties.",
  phone: "0523514029",
  phoneHref: "tel:+971523514029",
  email: "Paaria@ppkrealestate.com",
  emailHref: "mailto:Paaria@ppkrealestate.com",
  address: "Business Bay, Dubai, United Arab Emirates",
  url: "https://ppkrealestate.com",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    youtube: "https://youtube.com",
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Why PPK", href: "#why" },
  { label: "Voices", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const TRUSTED_BY: string[] = [
  "Emaar",
  "DAMAC",
  "Nakheel",
  "Meraas",
  "Dubai Properties",
  "Dubai Holding",
  "Sobha Realty",
  "Azizi Developments",
  "Ellington Properties",
  "Danube Properties",
  "Binghatti",
  "Omniyat",
  "Select Group",
  "MAG",
  "Aldar Properties",
  "Al Habtoor Group",
  "Arada",
  "Nshama",
  "Eagle Hills",
  "Samana Developers",
  "Deyaar",
  "Tiger Group",
  "RAK Properties",
  "Wasl Properties",
  "Majid Al Futtaim",
  "Dubai Investments",
  "Al Barari",
  "Tanmiyat",
  "The Heart of Europe",
  "Cayan Group",
  "Aqua Properties",
  "Vincitore",
  "Reportage Properties",
  "Uniestate",
  "Meydan",
  "Alef Group",
  "Palma Holding",
  "FIVE Holdings",
  "KOA",
  "LIV Developers",
  "Swiss Property",
  "Dar Al Arkan",
  "Iman Developers",
  "Gemini Property",
  "Ajmal Makan",
  "Emerald Palace Group",
  "Dubai South",
  "Banyan Tree",
  "Sweet Homes",
  "Shoumous",
  "Shaikhani Group",
  "Meraki Developers",
  "Signature Developers",
  "Object 1",
  "Prestige One",
  "Sol Properties",
];

export const SERVICES: Service[] = [
  {
    id: "acquisition",
    index: "01",
    title: "Private Acquisition",
    description:
      "Off-market access to landmark residences, sourced and vetted before they ever reach a listing portal.",
    icon: KeyRound,
    features: ["Off-market sourcing", "Discreet representation", "Title & due diligence"],
  },
  {
    id: "investment",
    index: "02",
    title: "Investment Advisory",
    description:
      "Yield-driven strategies grounded in absorption data, rental indices and ten-year capital forecasting.",
    icon: LineChart,
    features: ["Yield modelling", "Portfolio structuring", "Exit planning"],
  },
  {
    id: "development",
    index: "03",
    title: "Development Partnerships",
    description:
      "We co-position new developments — from masterplan narrative to launch — for the right global audience.",
    icon: Building2,
    features: ["Branding & positioning", "Launch strategy", "Buyer matchmaking"],
  },
  {
    id: "relocation",
    index: "04",
    title: "Relocation & Lifestyle",
    description:
      "A concierge layer for clients moving across borders — schooling, residency, interiors and staffing.",
    icon: Compass,
    features: ["Residency guidance", "Concierge handover", "Interior curation"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "marsa",
    name: "Marsa Vista Residences",
    location: "Dubai Marina",
    category: "Waterfront Residential",
    year: "2025",
    priceFrom: "From AED 3.4M",
    description:
      "A 47-storey waterfront tower of sky villas, fully absorbed within nine weeks of a quiet launch.",
    stats: [
      { label: "Units", value: "212" },
      { label: "Sold", value: "98%" },
      { label: "Avg. yield", value: "7.2%" },
    ],
    image: "/images/project-marina.jpg",
    accent: "linear-gradient(135deg, #1c1813 0%, #3a3328 60%, #c39a5e 160%)",
  },
  {
    id: "ridge",
    name: "The Ridge Collection",
    location: "Tilal Al Ghaf",
    category: "Branded Villas",
    year: "2024",
    priceFrom: "From AED 9.1M",
    description:
      "Eighteen architect-led villas around a private lagoon, positioned and placed entirely off-market.",
    stats: [
      { label: "Villas", value: "18" },
      { label: "Sold", value: "100%" },
      { label: "Premium", value: "+19%" },
    ],
    image: "/images/project-villa.jpg",
    accent: "linear-gradient(135deg, #16130f 0%, #2a241c 55%, #8a7d6a 160%)",
  },
  {
    id: "lumen",
    name: "Lumen Tower",
    location: "Business Bay",
    category: "Mixed-Use",
    year: "2025",
    priceFrom: "From AED 1.9M",
    description:
      "A canalside mixed-use landmark — we led investor matchmaking across four international markets.",
    stats: [
      { label: "Floors", value: "61" },
      { label: "Investors", value: "340+" },
      { label: "Markets", value: "4" },
    ],
    image: "/images/project-tower.jpg",
    accent: "linear-gradient(135deg, #110f0c 0%, #3a3328 50%, #d4b483 165%)",
  },
  {
    id: "azure",
    name: "Azure Dunes Estate",
    location: "Palm Jebel Ali",
    category: "Ultra-Prime",
    year: "2026",
    priceFrom: "From AED 26M",
    description:
      "An ultra-prime beachfront estate represented exclusively for a single private family office.",
    stats: [
      { label: "Plot", value: "1.4 ac" },
      { label: "Beachfront", value: "85m" },
      { label: "Bespoke", value: "1 of 1" },
    ],
    image: "/images/project-beachfront.jpg",
    accent: "linear-gradient(135deg, #1c1813 0%, #5a5142 60%, #e0c79e 170%)",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    description:
      "We start with a confidential conversation — objectives, time horizon, risk appetite and the life the asset needs to serve.",
    duration: "Week 1",
  },
  {
    id: "strategy",
    number: "02",
    title: "Strategy & Research",
    description:
      "Our analysts build a tailored thesis: target submarkets, absorption signals, comparable evidence and a clear acquisition mandate.",
    duration: "Weeks 2–3",
  },
  {
    id: "sourcing",
    number: "03",
    title: "Sourcing & Selection",
    description:
      "We surface on- and off-market options, accompany every viewing, and pressure-test each candidate against the thesis.",
    duration: "Weeks 3–6",
  },
  {
    id: "close",
    number: "04",
    title: "Negotiation & Close",
    description:
      "Discreet negotiation, full legal and structural due diligence, and a managed close — with nothing left to chance.",
    duration: "Weeks 6–9",
  },
  {
    id: "stewardship",
    number: "05",
    title: "Stewardship",
    description:
      "Beyond the keys: leasing, asset management and a standing line to the desk that knows your portfolio intimately.",
    duration: "Ongoing",
  },
];

export const STATS: Stat[] = [
  {
    id: "volume",
    value: 4.8,
    suffix: "B",
    prefix: "AED ",
    label: "Transacted",
    description: "In residential and mixed-use value placed since inception.",
  },
  {
    id: "clients",
    value: 1200,
    suffix: "+",
    label: "Clients advised",
    description: "Private buyers, family offices and institutional partners.",
  },
  {
    id: "retention",
    value: 96,
    suffix: "%",
    label: "Client retention",
    description: "Of clients return to PPK for their next acquisition.",
  },
  {
    id: "markets",
    value: 14,
    suffix: "",
    label: "Global markets",
    description: "Active buyer relationships across four continents.",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "research",
    title: "Research, not guesswork",
    description:
      "Every recommendation is backed by an in-house data desk — absorption, yield and capital-flow models, refreshed weekly.",
    icon: LineChart,
  },
  {
    id: "access",
    title: "Genuine off-market access",
    description:
      "Two-thirds of what we transact never touches a public portal. Relationships open doors that searching cannot.",
    icon: KeyRound,
  },
  {
    id: "alignment",
    title: "Aligned, never pushy",
    description:
      "We are paid to be right over a decade, not to close this quarter. If the deal isn't yours, we say so.",
    icon: Handshake,
  },
  {
    id: "discretion",
    title: "Absolute discretion",
    description:
      "Names, numbers and intentions stay private. Many of our most significant deals are never spoken of publicly.",
    icon: ShieldCheck,
  },
  {
    id: "global",
    title: "Borderless reach",
    description:
      "Desks and partners across the Gulf, Europe and Asia mean your buyer — or your next home — is rarely far away.",
    icon: Globe2,
  },
  {
    id: "craft",
    title: "An eye for the rare",
    description:
      "We curate for character: light, provenance, architecture and the things a spreadsheet will never capture.",
    icon: Gem,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "PPK found us a home that was never listed, negotiated below what we'd budgeted, and made the entire move feel effortless. The research they brought was genuinely institutional.",
    name: "Yasmin & Karl Adeyemi",
    role: "Private buyers",
    location: "Relocated from London",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "We've placed three acquisitions through the desk. What sets them apart is the honesty — they've talked us out of more deals than they've talked us into, and we're wealthier for it.",
    name: "Daniel Hargreave",
    role: "Principal, Hargreave Family Office",
    location: "Singapore",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Our launch was 98% absorbed before the public campaign even began. PPK understood the buyer better than we did and positioned the product accordingly.",
    name: "Lena Vossberg",
    role: "Head of Sales, Altura Group",
    location: "Developer partner",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Discreet, decisive and deeply prepared. I've worked with brokers on three continents — this is the standard I now measure them against.",
    name: "Rohan Mehta",
    role: "Institutional investor",
    location: "Mumbai",
    rating: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "f1",
    question: "Who does PPK typically work with?",
    answer:
      "Private buyers acquiring a primary or second home, investors building income-producing portfolios, family offices deploying capital, and developers who need their product positioned to the right global audience. If you value research and discretion over volume, you'll feel at home.",
  },
  {
    id: "f2",
    question: "How are your fees structured?",
    answer:
      "On the brokerage side our fee is success-based and disclosed in full before any engagement begins. For ongoing advisory and asset management we work on a transparent retainer. There are never hidden incentives — you'll always know exactly how we are paid.",
  },
  {
    id: "f3",
    question: "Do you only operate in Dubai?",
    answer:
      "Dubai is our home market and where the desk is based, but we maintain active buyer relationships and partners across fourteen markets. We regularly advise on cross-border acquisitions and relocations.",
  },
  {
    id: "f4",
    question: "What does 'off-market' actually mean here?",
    answer:
      "It means properties available for purchase that are never publicly advertised — released privately by owners, developers or other advisors who trust our discretion. Roughly two-thirds of what we transact begins this way.",
  },
  {
    id: "f5",
    question: "How quickly can you move?",
    answer:
      "A focused acquisition typically runs six to nine weeks from first conversation to keys, though we've closed faster when the right asset and a decisive client align. We never rush a decision that should be deliberate.",
  },
  {
    id: "f6",
    question: "Can you help after I've purchased?",
    answer:
      "Yes — stewardship is core to how we work. We handle leasing, coordinate property and asset management, and stay in touch as your portfolio and intentions evolve over time.",
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About PPK", href: "#why" },
    { label: "Our Process", href: "#process" },
    { label: "Careers", href: "#contact" },
    { label: "Press", href: "#contact" },
  ],
  services: [
    { label: "Private Acquisition", href: "#services" },
    { label: "Investment Advisory", href: "#services" },
    { label: "Development Partnerships", href: "#services" },
    { label: "Relocation & Lifestyle", href: "#services" },
  ],
  resources: [
    { label: "Portfolio", href: "#projects" },
    { label: "Client Voices", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const PROCESS_BADGE = Sparkles;
export const CLOCK_ICON = Clock;
