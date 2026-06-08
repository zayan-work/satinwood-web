import { cn } from "@/lib/cn";

/** Absolutely-positioned paper-grain texture. Sits inside a `relative` parent. */
export function GrainOverlay({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        tone === "dark" ? "grain" : "grain-light",
        className,
      )}
    />
  );
}
