import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND.name} — Curated Property Advisory`,
    short_name: BRAND.shortName,
    description: BRAND.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0807",
    theme_color: "#0a0807",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
