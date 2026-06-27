import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  /** Seconds for one full loop. Lower = faster. */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Pure-CSS infinite marquee. The children are duplicated so the loop is
 * seamless; the track translates -50%. Pauses on hover, respects reduced motion.
 */
export function Marquee({
  children,
  duration = 38,
  reverse = false,
  className,
}: MarqueeProps) {
  return (
    <div className={cn("marquee-group mask-fade-x w-full overflow-hidden", className)}>
      <div
        className={cn("marquee", reverse && "marquee--reverse")}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center" aria-hidden={false}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
