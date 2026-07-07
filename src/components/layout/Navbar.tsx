"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { useScroll } from "@/hooks/useScroll";
import { EASE_OUT_EXPO } from "@/lib/animations";
import { Magnetic } from "@/components/ui/Magnetic";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

export function Navbar() {
  const { scrolled } = useScroll(40);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  // On the homepage a bare "#section" scrolls smoothly. On any other route we
  // must send the user home first, so prefix hash links with "/".
  const resolve = (href: string) =>
    href.startsWith("#") && !onHome ? `/${href}` : href;
  const contactHref = onHome ? "#contact" : "/#contact";

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className={cn(
          "fixed inset-x-0 top-0 z-[var(--z-nav)] border-b transition-[background-color,backdrop-filter,border-color] duration-500 ease-[var(--ease-out-expo)]",
          scrolled
            ? "border-[color:var(--color-border)] bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55"
            : "border-transparent bg-transparent",
        )}
      >
        <nav className="container-x flex h-20 items-center justify-between">
          <Magnetic strength={0.25}>
            <a
              href={onHome ? "#top" : "/"}
              aria-label={`${BRAND.name} home`}
              className="flex items-center gap-2.5 pl-1"
            >
              <Logo className="h-7 w-7" />
              <span className="font-display text-lg tracking-tight text-cream-50">
                {BRAND.shortName}
                <span className="text-gold-400">.</span>
              </span>
            </a>
          </Magnetic>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Magnetic strength={0.2}>
                  <a
                    href={resolve(link.href)}
                    className="group relative rounded-full px-4 py-2 text-sm text-cream-100/80 transition-colors duration-300 hover:text-cream-50"
                  >
                    {link.label}
                    <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gold-400/70 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:scale-x-100" />
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Magnetic strength={0.3}>
                <ButtonLink href={contactHref} size="sm" withArrow>
                  Book a consultation
                </ButtonLink>
              </Magnetic>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex size-11 items-center justify-center rounded-full border border-[color:var(--color-border)] text-cream-50 transition-colors hover:border-gold-400/50 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[var(--z-overlay)] flex flex-col bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex-1 overflow-y-auto px-6 pb-10 pt-28">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.12 + i * 0.06,
                      duration: 0.6,
                      ease: EASE_OUT_EXPO,
                    }}
                    className="border-b border-[color:var(--color-border)]"
                  >
                    <a
                      href={resolve(link.href)}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-5"
                    >
                      <span className="font-display text-3xl text-cream-50">
                        {link.label}
                      </span>
                      <span className="text-eyebrow">
                        0{NAV_LINKS.indexOf(link) + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: EASE_OUT_EXPO }}
                className="mt-10 flex flex-col gap-4"
              >
                <ButtonLink
                  href={contactHref}
                  size="lg"
                  withArrow
                  className="w-full"
                >
                  Book a consultation
                </ButtonLink>
                <a href={BRAND.phoneHref} className="text-body text-cream-100">
                  {BRAND.phone}
                </a>
                <a href={BRAND.emailHref} className="text-body text-gold-300">
                  {BRAND.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
