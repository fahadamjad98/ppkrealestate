"use client";

import { useState } from "react";
import { MapPin, Building2, Wallet, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const PROPERTY_TYPES = [
  "Any type",
  "Apartment",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Off-plan",
];

const PRICE_RANGES = [
  "Any price",
  "Up to AED 2M",
  "AED 2M – 5M",
  "AED 5M – 10M",
  "AED 10M – 25M",
  "AED 25M+",
];

interface FieldProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  className?: string;
}

function Field({ icon, label, children, className }: FieldProps) {
  return (
    <label
      className={cn(
        "group flex flex-1 items-center gap-3 px-5 py-3.5 text-left transition-colors",
        className,
      )}
    >
      <span className="text-gold-500">{icon}</span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-sand-700">
          {label}
        </span>
        {children}
      </span>
    </label>
  );
}

const selectClass =
  "w-full cursor-pointer appearance-none bg-transparent pr-5 text-[0.95rem] font-medium text-cream-50 outline-none";

/**
 * Front-end-only property search. No backend: submitting simply scrolls to the
 * portfolio so the control feels alive without a data layer.
 */
export function SearchBar() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState(PROPERTY_TYPES[0]);
  const [price, setPrice] = useState(PRICE_RANGES[0]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-3xl rounded-[1.5rem] border border-white/70 bg-white/92 p-2 shadow-[0_24px_60px_-24px_rgba(20,16,11,0.55)] backdrop-blur-md md:rounded-full"
    >
      <div className="flex flex-col divide-y divide-[color:var(--color-border)] md:flex-row md:items-center md:divide-x md:divide-y-0">
        <Field icon={<MapPin className="size-5" strokeWidth={1.7} />} label="Location">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Area or community"
            className="w-full bg-transparent text-[0.95rem] font-medium text-cream-50 placeholder:text-muted/70 outline-none"
          />
        </Field>

        <Field icon={<Building2 className="size-5" strokeWidth={1.7} />} label="Property type">
          <span className="relative flex items-center">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={selectClass}
              aria-label="Property type"
            >
              {PROPERTY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-0 size-4 text-muted" />
          </span>
        </Field>

        <Field icon={<Wallet className="size-5" strokeWidth={1.7} />} label="Price range">
          <span className="relative flex items-center">
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={selectClass}
              aria-label="Price range"
            >
              {PRICE_RANGES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-0 size-4 text-muted" />
          </span>
        </Field>

        <div className="p-2 md:pl-2 md:pr-1">
          <button
            type="submit"
            data-cursor=""
            className="flex h-14 w-full items-center justify-center gap-2 rounded-[1.1rem] bg-gold-500 px-7 font-medium text-white transition-colors duration-300 hover:bg-gold-600 md:h-14 md:w-auto md:rounded-full"
          >
            <Search className="size-5" strokeWidth={2} />
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
