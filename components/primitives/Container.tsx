import { cn } from "@/lib/cn";

/** Centered page gutter — mirrors the draft's `.wrap` (max 1140px, responsive padding). */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1140px] px-6 sm:px-10", className)}>
      {children}
    </div>
  );
}
