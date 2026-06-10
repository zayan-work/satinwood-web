import { cn } from "@/lib/cn";

/**
 * Uppercase gold label. `tone="dark"` brightens for dark sections. Matches the
 * reference `.eyebrow` — gold caps, 2.2px tracking, no leading rule (the draft
 * hides it).
 */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const color = tone === "dark" ? "text-gold-bright" : "text-gold";
  return (
    <div
      className={cn(
        "inline-flex items-center text-[11.5px] font-semibold uppercase tracking-[2.2px]",
        color,
        className,
      )}
    >
      {children}
    </div>
  );
}
