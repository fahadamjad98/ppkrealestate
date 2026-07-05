import { forwardRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-400 text-cream-50 hover:bg-gold-300 shadow-[0_10px_40px_-12px_rgba(227,167,11,0.5)]",
  secondary:
    "bg-transparent text-cream-50 border border-[color:var(--color-border)] hover:border-gold-400/60 hover:bg-ink-800/60",
  ghost: "bg-transparent text-cream-100 hover:text-gold-300",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[0.95rem]",
  lg: "h-14 px-9 text-base",
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-[background-color,border-color,color,transform] duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

function Inner({
  children,
  withArrow,
}: {
  children: React.ReactNode;
  withArrow?: boolean;
}) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow ? (
        <ArrowUpRight
          className="relative z-10 size-4 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      ) : null}
    </>
  );
}

interface ButtonProps
  extends BaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: undefined;
}

interface AnchorProps extends BaseProps {
  href: string;
  external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", withArrow, className, children, ...props }, ref) => (
    <button
      ref={ref}
      data-cursor=""
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  ),
);
Button.displayName = "Button";

export function ButtonLink({
  href,
  external,
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
}: AnchorProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = <Inner withArrow={withArrow}>{children}</Inner>;

  if (external || href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto")) {
    return (
      <a
        href={href}
        data-cursor=""
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} data-cursor="" className={classes}>
      {content}
    </Link>
  );
}
