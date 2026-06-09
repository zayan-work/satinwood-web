import { cn } from "@/lib/cn";

/**
 * Centered page gutter. Wide editorial measure — content spans ~90% of the
 * viewport (gutters ≤5% per side) up to a generous 1600px cap, so the layout
 * fills the screen on large displays instead of floating in a narrow column.
 * Gutters scale down on small screens for breathing room without waste.
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
        "mx-auto w-[92%] max-w-[1600px] sm:w-[90%] lg:w-[88%]",
        className,
      )}
    >
      {children}
    </div>
  );
}
