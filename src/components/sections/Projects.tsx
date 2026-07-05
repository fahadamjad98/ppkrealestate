"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
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
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

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

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <AnimatedHeading
            text="A portfolio measured in landmarks"
            level="h2"
            accentWords={[5]}
            className="mt-5 max-w-2xl"
          />
        </div>
        <Reveal delay={0.1}>
          <ButtonLink href="#contact" variant="secondary" withArrow>
            Request the full deck
          </ButtonLink>
        </Reveal>
      </div>

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="mt-12 grid gap-5 lg:grid-cols-2"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} large={i % 3 === 0} />
        ))}
      </motion.div>
    </Section>
  );
}
