"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useHasFinePointer } from "@/hooks/useMousePosition";

/**
 * Bespoke trailing cursor (desktop / fine-pointer only).
 * A small dot tracks instantly; a larger ring follows with spring lag and
 * expands over interactive elements marked with [data-cursor] or links/buttons.
 */
export function Cursor() {
  const hasFinePointer = useHasFinePointer();
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!hasFinePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest(
        'a, button, [data-cursor], input, textarea, [role="button"]',
      ) as HTMLElement | null;
      if (el) {
        setHovering(true);
        setLabel(el.getAttribute("data-cursor") ?? "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, [hasFinePointer, hidden, x, y]);

  if (!hasFinePointer) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[var(--z-cursor)]">
      {/* Trailing ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0"
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/60 backdrop-invert-0"
          animate={{
            width: hovering ? 64 : 34,
            height: hovering ? 64 : 34,
            backgroundColor: hovering
              ? "rgba(212,180,131,0.12)"
              : "rgba(212,180,131,0)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          {label ? (
            <span className="flex h-full w-full items-center justify-center text-[10px] font-medium uppercase tracking-widest text-gold-200">
              {label}
            </span>
          ) : null}
        </motion.div>
      </motion.div>

      {/* Instant dot */}
      <motion.div
        style={{ x, y }}
        className="absolute left-0 top-0"
        animate={{ opacity: hidden || hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <span className="block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300" />
      </motion.div>
    </div>
  );
}
