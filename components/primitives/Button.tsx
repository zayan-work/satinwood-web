import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "cream";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border text-[15px] font-semibold transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  // The primary action: deep forest-green heartwood gradient on cream text.
  // Reads as the grounded, authoritative "go" — high contrast against the
  // cream/paper surfaces, with a thin gold hairline tying it to the palette.
  primary:
    "border-forest-deep/70 bg-gradient-to-b from-forest to-forest-deep px-6 py-3.5 text-cream shadow-[0_6px_20px_rgba(30,38,26,0.28)] hover:-translate-y-0.5 hover:from-forest-deep hover:to-forest-shadow hover:shadow-[0_14px_34px_rgba(30,38,26,0.42)] motion-reduce:hover:translate-y-0",
  ghost:
    "border-forest/25 bg-transparent px-6 py-3.5 text-ink hover:border-forest hover:bg-forest/5 hover:text-forest-deep motion-reduce:hover:translate-y-0",
  cream:
    "border-cream bg-cream px-6 py-3.5 text-forest-deep hover:border-white hover:bg-white hover:-translate-y-px motion-reduce:hover:translate-y-0",
};

/**
 * Pill button/link. The primary variant carries a built-in arrow that nudges
 * right on hover (clear "go" affordance) plus a satin gleam sweep. Renders an
 * anchor.
 */
export function Button({
  href,
  variant = "primary",
  arrow,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  /** Show the sliding arrow. Defaults on for `primary`, off otherwise. */
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const showArrow = arrow ?? variant === "primary";

  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {/* Satin gleam sweeping across on hover. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 ease-out group-hover/btn:translate-x-[120%] motion-reduce:hidden"
      />
      <span className="relative">{children}</span>
      {showArrow && (
        <ArrowRight
          aria-hidden
          className="relative size-[18px] flex-none transition-transform duration-300 ease-out group-hover/btn:translate-x-1 motion-reduce:transition-none"
          strokeWidth={2.2}
        />
      )}
    </a>
  );
}
