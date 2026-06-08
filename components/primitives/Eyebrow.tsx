import { cn } from "@/lib/cn";

/** Gold rule + uppercase label. `tone="dark"` brightens for dark sections. */
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
  const rule = tone === "dark" ? "bg-gold-bright" : "bg-gold";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3.5 text-[11.5px] font-semibold uppercase tracking-[2.2px]",
        color,
        className,
      )}
    >
      <span className={cn("h-px w-8 opacity-70", rule)} />
      {children}
    </div>
  );
}
