import { cn } from "@/lib/cn";

/**
 * Centered page gutter. Matches the reference design's `.wrap`: a 1200px
 * editorial measure with 44px side gutters (22px on small screens).
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px] px-[22px] sm:px-11",
        className,
      )}
    >
      {children}
    </div>
  );
}
