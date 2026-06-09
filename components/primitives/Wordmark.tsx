import { cn } from "@/lib/cn";

/**
 * Brand wordmark: "Satinw" + inline SVG ("oo" = two overlapping marks, each
 * three concentric rings, per the brand guide) + "d". The SVG strokes use
 * `currentColor`, driven by the mark's text-color class.
 */
export function Wordmark({
  variant = "header",
  className,
}: {
  variant?: "header" | "footer";
  className?: string;
}) {
  const isHeader = variant === "header";
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display font-semibold tracking-[0.4px]",
        isHeader ? "text-[25px] text-ink" : "text-[22px] text-[#F4EFE2]",
        className,
      )}
    >
      Satinw
      <svg
        viewBox="0 0 168 100"
        fill="none"
        aria-hidden="true"
        className={cn(
          "mx-[0.02em] inline-block h-[0.64em] w-[1.06em] translate-y-[0.11em]",
          isHeader ? "text-gold" : "text-gold-bright",
        )}
      >
        <circle cx="55" cy="50" r="45" stroke="currentColor" strokeWidth="3.6" />
        <circle cx="55" cy="50" r="31" stroke="currentColor" strokeWidth="3.2" />
        <circle cx="55" cy="50" r="17" stroke="currentColor" strokeWidth="2.8" />
        <circle cx="113" cy="50" r="45" stroke="currentColor" strokeWidth="3.6" />
        <circle cx="113" cy="50" r="31" stroke="currentColor" strokeWidth="3.2" />
        <circle cx="113" cy="50" r="17" stroke="currentColor" strokeWidth="2.8" />
      </svg>
      d
    </span>
  );
}
