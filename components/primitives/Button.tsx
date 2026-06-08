import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "cream";

const base =
  "inline-flex items-center gap-2.5 rounded-full border px-6 py-3.5 text-[15px] font-medium transition-all duration-200 ease-out motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  primary:
    "border-forest bg-forest text-cream hover:bg-forest-deep hover:-translate-y-px motion-reduce:hover:translate-y-0",
  ghost:
    "border-hairline bg-transparent text-ink hover:border-gold hover:text-gold hover:-translate-y-px motion-reduce:hover:translate-y-0",
  cream:
    "border-cream bg-cream text-forest-deep hover:border-white hover:bg-white hover:-translate-y-px motion-reduce:hover:translate-y-0",
};

/** Pill button/link mirroring the draft's `.btn` variants. Renders an anchor. */
export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
