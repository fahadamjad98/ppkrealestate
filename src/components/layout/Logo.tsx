import { cn } from "@/lib/utils";

/**
 * Original PPK monogram: two ascending columns forming a stylised "P" gateway
 * with a keystone gem — evoking architecture + the key to a property.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id="ppk-gold" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#e0c79e" />
          <stop offset="0.5" stopColor="#d4b483" />
          <stop offset="1" stopColor="#c39a5e" />
        </linearGradient>
      </defs>
      <rect
        x="0.75"
        y="0.75"
        width="38.5"
        height="38.5"
        rx="9.25"
        stroke="url(#ppk-gold)"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <path
        d="M11 29V11h7.2c3.4 0 5.6 2.1 5.6 5.2 0 3.1-2.2 5.2-5.6 5.2H14.6"
        stroke="url(#ppk-gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 29l5-6-5-6"
        stroke="url(#ppk-gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <circle cx="29.5" cy="11.5" r="2" fill="url(#ppk-gold)" />
    </svg>
  );
}
