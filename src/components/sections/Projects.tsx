"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { LISTINGS } from "@/lib/listings";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  EASE_OUT_EXPO,
} from "@/lib/animations";
import type { Project, Listing } from "@/types";
import { cn } from "@/lib/utils";

const FEATURED_SLUGS = [
  "palm-jumeirah-villa",
  "dubai-hills-villa",
  "jumeirah-golf-estates-villa",
];
const FEATURED_LISTINGS = FEATURED_SLUGS.map((slug) =>
  LISTINGS.find((l) => l.slug === slug),
).filter(Boolean) as Listing[];

function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group/proj relative flex flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] p-7 shadow-[var(--shadow-md)] md:p-9",
        large ? "min-h-[26rem] lg:min-h-[34rem]" : "min-h-[22rem]",
      )}
      data-cursor="View"
    >
      {/* Property photograph */}
      <Image
        src={project.image}
        alt={`${project.name}, ${project.location}`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="absolute inset-0 -z-10 object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover/proj:scale-[1.06]"
      />
      {/* Legibility gradient (dark from the bottom) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,16,11,0.18) 0%, rgba(20,16,11,0.12) 40%, rgba(15,11,7,0.82) 100%)",
        }}
        aria-hidden
      />

      {/* Top row */}
      <div className="absolute inset-x-7 top-7 flex items-center justify-between md:inset-x-9 md:top-9">
        <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-white backdrop-blur-md">
          {project.category}
        </span>
        <span className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition-all duration-500 group-hover/proj:border-gold-400 group-hover/proj:bg-gold-400 group-hover/proj:text-cream-50">
          <ArrowUpRight className="size-5 transition-transform duration-500 group-hover/proj:rotate-45" />
        </span>
      </div>

      {/* Bottom content */}
      <div>
        <div className="mb-3 flex items-center gap-2 text-small text-white/85">
          <MapPin className="size-4 text-gold-300" />
          {project.location}
          <span className="text-white/55">· {project.year}</span>
        </div>
        <h3 className="text-heading-2 text-white">{project.name}</h3>

        {/* Description reveals on hover (desktop), always visible on touch */}
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)] group-hover/proj:grid-rows-[1fr] max-md:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-3 max-w-md text-pretty text-[0.95rem] leading-relaxed text-white/80">
              {project.description}
            </p>
          </div>
        </div>

        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-5">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-white/55">
                {stat.label}
              </dt>
              <dd className="font-display text-2xl text-white">{stat.value}</dd>
            </div>
          ))}
          <div className="ml-auto self-end">
            <span className="text-small font-medium text-gold-300">
              {project.priceFrom}
            </span>
          </div>
        </dl>
      </div>
    </motion.article>
  );
}

/** Same visual language as ProjectCard, but a real, clickable listing. */
function ListingShowcaseCard({ listing }: { listing: Listing }) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link
        href={`/listings/${listing.slug}`}
        data-cursor="View"
        className="group/proj relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] p-7 shadow-[var(--shadow-md)] md:p-9"
      >
        {/* Property photograph */}
        <Image
          src={listing.images[0]}
          alt={`${listing.title}, ${listing.location}`}
          fill
          sizes="(max-width: 1024px) 100vw, 440px"
          className="absolute inset-0 -z-10 object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover/proj:scale-[1.06]"
        />
        {/* Legibility gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,16,11,0.18) 0%, rgba(20,16,11,0.12) 40%, rgba(15,11,7,0.82) 100%)",
          }}
          aria-hidden
        />

        {/* Top row */}
        <div className="absolute inset-x-7 top-7 flex items-center justify-between md:inset-x-9 md:top-9">
          <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-white backdrop-blur-md">
            {listing.purpose === "sale" ? "For Sale" : "For Rent"} ·{" "}
            {listing.type}
          </span>
          <span className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition-all duration-500 group-hover/proj:border-gold-400 group-hover/proj:bg-gold-400 group-hover/proj:text-cream-50">
            <ArrowUpRight className="size-5 transition-transform duration-500 group-hover/proj:rotate-45" />
          </span>
        </div>

        {/* Bottom content */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-small text-white/85">
            <MapPin className="size-4 text-gold-300" />
            {listing.location}
          </div>
          <h3 className="text-heading-2 text-white">{listing.title}</h3>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-5">
            {[
              { label: "Beds", value: listing.beds },
              { label: "Baths", value: listing.baths },
              { label: "Area", value: listing.area },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-white/55">
                  {stat.label}
                </dt>
                <dd className="font-display text-2xl text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
            <div className="ml-auto self-end">
              <span className="text-small font-medium text-gold-300">
                {listing.price}
              </span>
            </div>
          </dl>
        </div>
      </Link>
    </motion.div>
  );
}

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const total = PROJECTS.length + FEATURED_LISTINGS.length;
  const [active, setActive] = useState(0);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 460, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const stride = el.scrollWidth / total;
    setActive(Math.round(el.scrollLeft / stride));
  };

  const goTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const stride = el.scrollWidth / total;
    el.scrollTo({ left: i * stride, behavior: "smooth" });
  };

  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <AnimatedHeading
            text="A portfolio measured in landmarks"
            level="h2"
            className="mt-5 max-w-2xl"
          />
        </div>
        <div className="flex items-center gap-3">
          {/* Scroll arrows */}
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous projects"
            data-cursor=""
            className="flex size-12 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white text-cream-50 shadow-[var(--shadow-sm)] transition-colors hover:border-gold-400/60 hover:text-gold-500"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next projects"
            data-cursor=""
            className="flex size-12 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white text-cream-50 shadow-[var(--shadow-sm)] transition-colors hover:border-gold-400/60 hover:text-gold-500"
          >
            <ChevronRight className="size-5" />
          </button>
          <Reveal delay={0.1}>
            <ButtonLink href="#contact" variant="secondary" withArrow>
              Request the full deck
            </ButtonLink>
          </Reveal>
        </div>
      </div>

      <motion.div
        ref={scrollRef}
        onScroll={onScroll}
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="w-[300px] shrink-0 snap-start sm:w-[360px] lg:w-[440px]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
        {FEATURED_LISTINGS.map((listing) => (
          <div
            key={listing.slug}
            className="w-[300px] shrink-0 snap-start sm:w-[360px] lg:w-[440px]"
          >
            <ListingShowcaseCard listing={listing} />
          </div>
        ))}
      </motion.div>

      {/* Beads / pagination dots */}
      <div className="mt-6 flex items-center justify-center gap-2.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to item ${i + 1}`}
            aria-current={i === active}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              i === active
                ? "w-6 bg-gold-400"
                : "w-2.5 bg-ink-600 hover:bg-gold-300",
            )}
          />
        ))}
      </div>
    </Section>
  );
}
