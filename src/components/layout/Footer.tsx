"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";

type IconProps = { className?: string };

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
  </svg>
);

const LinkedInIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9V9Z" />
  </svg>
);

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34v7.03C18.34 21.25 22 17.08 22 12.06Z" />
  </svg>
);

const SOCIALS = [
  { icon: InstagramIcon, href: BRAND.social.instagram, label: "Instagram" },
  { icon: LinkedInIcon, href: BRAND.social.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: BRAND.social.facebook, label: "Facebook" },
];

const COLUMNS = [
  { title: "Company", links: FOOTER_LINKS.company },
  { title: "Services", links: FOOTER_LINKS.services },
  { title: "Explore", links: FOOTER_LINKS.resources },
];

export function Footer() {
  const pathname = usePathname();
  // Off the homepage, hash anchors need a leading "/" to navigate home first.
  const resolve = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0c2d54] text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/images/PPK_logo_symbol.png"
                alt={`${BRAND.name} logo`}
                width={40}
                height={49}
                className="h-11 w-auto"
              />
              <span className="font-display text-2xl tracking-tight text-white">
                {BRAND.name}
              </span>
            </div>
            <p className="mt-5 leading-relaxed text-white/70">{BRAND.tagline}</p>
            <div className="mt-7 flex flex-col gap-2">
              <a
                href={BRAND.phoneHref}
                className="text-white/90 transition-colors hover:text-gold-300"
              >
                {BRAND.phone}
              </a>
              <a
                href={BRAND.emailHref}
                className="text-white/90 transition-colors hover:text-gold-300"
              >
                {BRAND.email}
              </a>
              <span className="text-small text-white/50">{BRAND.address}</span>
            </div>

            <div className="mt-7 flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-cursor=""
                    className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-gold-400/60 hover:text-gold-300"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[0.7rem] uppercase tracking-[0.18em] text-white/50">
                  {col.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => {
                    const isFile = link.href.endsWith(".pdf");
                    return (
                      <li key={link.label}>
                        <a
                          href={resolve(link.href)}
                          {...(isFile
                            ? { download: true, target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="group inline-flex items-center gap-1 text-white/75 transition-colors hover:text-gold-300"
                        >
                          {link.label}
                          <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <hr className="my-10 border-0 border-t border-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-small text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-gold-300">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-gold-300">
              Terms
            </a>
            <a href={resolve("#top")} className="transition-colors hover:text-gold-300">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
