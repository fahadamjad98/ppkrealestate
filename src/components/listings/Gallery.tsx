"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";

/** Property photo gallery: a hero grid that opens a full-screen lightbox. */
export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const show = useCallback(
    (i: number) => {
      setIndex((i + images.length) % images.length);
      setOpen(true);
    },
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, next, prev]);

  const hero = images[0];
  const thumbs = images.slice(1, 5);

  return (
    <>
      {/* Hero grid */}
      <div className="grid grid-cols-1 gap-2 overflow-hidden rounded-2xl md:grid-cols-4 md:grid-rows-2">
        <button
          type="button"
          onClick={() => show(0)}
          className="group relative aspect-[16/10] overflow-hidden md:col-span-2 md:row-span-2 md:aspect-auto"
        >
          <Image
            src={hero}
            alt={title}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </button>
        {thumbs.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => show(i + 1)}
            className="group relative hidden aspect-[4/3] overflow-hidden md:block"
          >
            <Image
              src={src}
              alt={`${title} — photo ${i + 2}`}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* "view all" overlay on the last visible thumb */}
            {i === thumbs.length - 1 && images.length > 5 && (
              <span className="absolute inset-0 flex items-center justify-center gap-2 bg-black/55 text-sm font-semibold text-white backdrop-blur-[2px]">
                <Camera className="size-4" strokeWidth={2} />
                +{images.length - 5} photos
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Mobile "view all" button */}
      <button
        type="button"
        onClick={() => show(0)}
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white px-4 py-2 text-small font-medium text-cream-50 shadow-[var(--shadow-sm)] md:hidden"
      >
        <Camera className="size-4" strokeWidth={2} />
        View all {images.length} photos
      </button>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo gallery`}
        >
          <div className="flex items-center justify-between px-5 py-4 text-white">
            <span className="text-sm font-medium tabular-nums">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close gallery"
              className="rounded-full p-2 transition-colors hover:bg-white/10"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:left-6"
            >
              <ChevronLeft className="size-6" />
            </button>

            <div className="relative h-full w-full max-w-5xl">
              <Image
                src={images[index]}
                alt={`${title} — photo ${index + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:right-6"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
