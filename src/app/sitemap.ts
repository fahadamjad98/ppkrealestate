import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.url;
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["services", "projects", "process", "why", "testimonials", "faq", "contact"].map(
      (anchor) => ({
        url: `${base}/#${anchor}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }),
    ),
  ];
}
