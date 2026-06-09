import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "cream";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border text-[15px] font-semibold transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  // The primary action: warm honey-gold heartwood gradient on dark ink text.
  // High contrast against both cream and forest so the eye lands here first.
  primary:
    "border-honey/60 bg-gradient-to-br from-satin via-gold-bright to-honey px-6 py-3.5 text-forest-deep shadow-[0_6px_20px_rgba(156,123,46,0.34)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(156,123,46,0.46)] hover:brightness-[1.04] motion-reduce:hover:translate-y-0",
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
