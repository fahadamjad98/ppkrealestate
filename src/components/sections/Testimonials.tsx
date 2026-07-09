"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading, Eyebrow } from "@/components/ui/Heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface GoogleReview {
  name: string;
  timeAgo: string;
  rating: number;
  text: string;
  /** Avatar background colour (Google-style initial circle). */
  color: string;
}

/**
 * Genuine PPK client reviews. Names are display placeholders — connect the
 * Google Places API to swap in real reviewer names + profile photos.
 */
const REVIEWS: GoogleReview[] = [
  {
    name: "Samar Amin",
    timeAgo: "6 months ago",
    rating: 5,
    color: "#6b4f3f",
    text: "I had an excellent experience working with Paaria from PPK Real Estate. She demonstrated a high level of professionalism, responsiveness, and market knowledge throughout the process. Whether for buying, selling, or renting out property, she provides reliable guidance and presents well-matched options based on client requirements. Her support made the entire process smooth, transparent, and efficient. PPK Real Estate, under Paaria's service, is an excellent choice for anyone seeking trustworthy advice and high-quality real estate services. I highly recommend Paaria and PPK Real Estate for all property-related needs.",
  },
  {
    name: "rv piya",
    timeAgo: "8 months ago",
    rating: 5,
    color: "#3f7d55",
    text: "I had such a lovely experience working with Paaria. From the very first conversation, she made me feel completely comfortable and confident about my decision. She's not only professional and knowledgeable but also genuinely kind and patient — she took the time to understand what I wanted and guided me through every step with care. What meant the most to me was how she treated this journey like her own, always checking in and making sure I felt at ease. I'm truly grateful to have met her — she turned a big decision into such a heartfelt experience.",
  },
  {
    name: "Zainab Abdul Jaleel",
    timeAgo: "a year ago",
    rating: 5,
    color: "#6b4fa8",
    text: "I had a great experience working with Paaria. She is professional, responsive, and truly understood my business needs. Thanks to her guidance and support, we found the perfect space for my business. Highly recommend their services to anyone looking for commercial property!",
  },
  {
    name: "Antoine Maksoud",
    timeAgo: "a year ago",
    rating: 5,
    color: "#b0803f",
    text: "I had a great experience working with Paaria from PPK Real Estate while searching for an apartment to buy. She was professional, responsive, and offered many options that matched my needs. Her guidance made the process smooth and efficient. Highly recommend!",
  },
  {
    name: "Nabeel Ahamed",
    timeAgo: "10 months ago",
    rating: 5,
    color: "#3f6fa8",
    text: "Paaria helped us to get the right place to lease at JLT to start our venture. She has been great support in liaising with the landlord and getting streamlined with our requirements!",
  },
  {
    name: "sukhdeep singh",
    timeAgo: "10 months ago",
    rating: 5,
    color: "#a8433f",
    text: "PPK Real Estate exemplifies professionalism, punctuality, and a strong work ethic, all while maintaining courteous and respectful behavior.",
  },
  {
    name: "Sandeep Singhals",
    timeAgo: "a year ago",
    rating: 5,
    color: "#4f6b3f",
    text: "Paaria is very hard working and keeps everything discreet until the deal is closed. I recommend PPK Real Estate to all.",
  },
  {
    name: "Swati",
    timeAgo: "a year ago",
    rating: 5,
    color: "#7d3f6b",
    text: "Had a great experience of buying property with Paaria. She was professional and helpful.",
  },
  {
    name: "Екатерина Латынина",
    timeAgo: "a year ago",
    rating: 5,
    color: "#3f7d7d",
    text: "Excellent job was done by the agency for me, super quickly and in a very supportive manner. 100% recommend.",
  },
  {
    name: "Joffin James",
    timeAgo: "a year ago",
    rating: 5,
    color: "#5f5f7d",
    text: "",
  },
  {
    name: "Marah Farha",
    timeAgo: "a year ago",
    rating: 5,
    color: "#8a5a2b",
    text: "",
  },
];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function ReviewCard({ r }: { r: GoogleReview }) {
  const [open, setOpen] = useState(false);
  const isLong = r.text.length > 150;

  return (
    <motion.article
      variants={fadeUp}
      className="flex w-[300px] shrink-0 snap-start flex-col rounded-2xl bg-white p-6 shadow-[var(--shadow-sm)] ring-1 ring-[color:var(--color-border)] md:w-[350px]"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex size-11 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white"
            style={{ backgroundColor: r.color }}
          >
            {r.name.charAt(0)}
          </span>
          <div>
            <div className="font-semibold text-cream-50">{r.name}</div>
            <div className="text-small text-muted">{r.timeAgo}</div>
          </div>
        </div>
        <GoogleG className="size-6" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: r.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-[#FBBC05] text-[#FBBC05]" />
          ))}
        </div>
        <span
          className="flex size-4 items-center justify-center rounded-full bg-[#4285F4] text-white"
          title="Verified"
        >
          <Check className="size-2.5" strokeWidth={3} />
        </span>
      </div>

      {r.text ? (
        <>
          <p
            className={cn(
              "mt-3 text-[0.95rem] leading-relaxed text-cream-100",
              !open && isLong && "line-clamp-4",
            )}
          >
            {r.text}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              data-cursor=""
              className="mt-2 self-start text-small font-medium text-muted transition-colors hover:text-gold-500"
            >
              {open ? "Show less" : "Read more"}
            </button>
          )}
        </>
      ) : (
        <p className="mt-3 text-[0.95rem] italic leading-relaxed text-muted">
          Left a 5-star rating.
        </p>
      )}
    </motion.article>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 370, behavior: "smooth" });
  };

  return (
    <Section id="testimonials" className="bg-ink-900/40">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>Client voices</Eyebrow>
          <AnimatedHeading
            text="What our customers say on Google"
            level="h2"
            className="mt-5 max-w-[18ch]"
          />
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous reviews"
            data-cursor=""
            className="flex size-12 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white text-cream-50 shadow-[var(--shadow-sm)] transition-colors hover:border-gold-400/60 hover:text-gold-500"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next reviews"
            data-cursor=""
            className="flex size-12 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white text-cream-50 shadow-[var(--shadow-sm)] transition-colors hover:border-gold-400/60 hover:text-gold-500"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <motion.div
        ref={scrollRef}
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="no-scrollbar mt-10 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-2 lg:mt-12"
      >
        {REVIEWS.map((r) => (
          <ReviewCard key={r.name} r={r} />
        ))}
      </motion.div>
    </Section>
  );
}
