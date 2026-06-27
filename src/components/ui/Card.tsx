"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds a gold spotlight that follows the cursor across the card. */
  spotlight?: boolean;
  children: React.ReactNode;
}

/**
 * Glass/surface card. With `spotlight`, a soft radial highlight tracks the
 * pointer to give the premium "lit from within" hover used across the site.
 */
export function Card({ spotlight = true, className, children, ...props }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(212,180,131,0.10), transparent 60%)`;

  const onMove = (e: React.MouseEvent) => {
    if (!spotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("surface group/card overflow-hidden", className)}
      {...props}
    >
      {spotlight ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          style={{ background }}
        />
      ) : null}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
