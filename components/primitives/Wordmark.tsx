import { cn } from "@/lib/cn";

/**
 * Brand wordmark: "Satinw" + inline SVG ("oo" = two concentric-circle pairs) + "d".
 * The SVG strokes use `currentColor`, driven by the mark's text-color class.
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
          "mx-[0.01em] inline-block h-[0.55em] w-[0.92em] translate-y-[0.085em]",
          isHeader ? "text-gold" : "text-gold-bright",
        )}
      >
        <circle cx="55" cy="50" r="44" stroke="currentColor" strokeWidth="4.4" />
        <circle cx="55" cy="50" r="30" stroke="currentColor" strokeWidth="3.7" />
        <circle cx="113" cy="50" r="44" stroke="currentColor" strokeWidth="4.4" />
        <circle cx="113" cy="50" r="30" stroke="currentColor" strokeWidth="3.7" />
      </svg>
      d
    </span>
  );
}
