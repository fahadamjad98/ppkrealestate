import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Anchor id for in-page navigation. */
  id?: string;
  /** Constrain content to the standard container width. */
  contained?: boolean;
  /** Apply vertical section rhythm. */
  spacing?: boolean;
  as?: "section" | "div" | "footer" | "header";
  children: React.ReactNode;
}

/**
 * Semantic section wrapper with consistent spacing + container behaviour.
 * Uses scroll-margin so anchored navigation lands below the sticky navbar.
 */
export function Section({
  id,
  contained = true,
  spacing = true,
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative w-full",
        spacing && "section-y",
        id && "scroll-mt-24",
        className,
      )}
      {...props}
    >
      {contained ? <div className="container-x">{children}</div> : children}
    </Tag>
  );
}
