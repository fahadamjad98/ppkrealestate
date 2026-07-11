import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

import { BRAND } from "@/lib/constants";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Preloader } from "@/components/providers/Preloader";
import { ScrollProgress } from "@/components/providers/ScrollProgress";
import { Cursor } from "@/components/providers/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = BRAND.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BRAND.name} — Curated Property Advisory`,
    template: `%s · ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: [
    "luxury real estate",
    "Dubai property",
    "off-market property",
    "property investment advisory",
    "private acquisition",
    "real estate brokerage",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: BRAND.name,
    title: `${BRAND.name} — Curated Property Advisory`,
    description: BRAND.description,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Curated Property Advisory`,
    description: BRAND.description,
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "real estate",
};

export const viewport: Viewport = {
  themeColor: "#faf8f3",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: BRAND.name,
  description: BRAND.description,
  url: siteUrl,
  email: BRAND.email,
  telephone: `+971${BRAND.phone.replace(/^0/, "")}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Business Bay",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: "Worldwide",
  priceRange: "$$$$",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="cursor-none-fine flex min-h-dvh flex-col bg-grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <Cursor />
        <ScrollProgress />
        <SmoothScrollProvider>
          <Navbar />
          <main id="top" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
