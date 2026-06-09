import { cn } from "@/lib/cn";

/**
 * Organic curved section divider. Replaces flat `border-y` transitions with a
 * soft satinwood-figure wave, so one section's colour drapes into the next.
 *
 * Place inside a `relative` section. `position="top"` fills the top band with
 * `fill` (the colour of the section above), waving down into this section;
 * `position="bottom"` does the inverse at the foot of the section.
 *
 * Full-bleed and resolution-independent (`preserveAspectRatio="none"`), so the
 * wave stretches edge to edge at any width. `aria-hidden`, non-interactive.
 */
export function SectionCurve({
  position = "top",
  fill,
  variant = "wave",
  className,
}: {
  position?: "top" | "bottom";
  /** CSS colour the curve is painted in (use a token, e.g. "var(--cream)"). */
  fill: string;
  /** "wave" = gentle double wave; "swell" = single deep organic swell. */
  variant?: "wave" | "swell";
  className?: string;
}) {
  const isTop = position === "top";

  // Filled band sits at y=0..edge with a wavy bottom boundary. For bottom
  // dividers we flip vertically so the wave reads from the foot of the section.
  const path =
    variant === "swell"
      ? "M0,0 H1440 V40 C1080,118 760,2 360,58 C220,78 96,70 0,58 Z"
      : "M0,0 H1440 V44 C1160,96 1020,16 720,46 C420,76 280,2 0,46 Z";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 z-[1] h-[clamp(40px,6vw,88px)]",
        isTop ? "top-0" : "bottom-0",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-full w-full"
        style={{
          // Overlap by a hair to defeat sub-pixel seams; flip for bottom.
          transform: isTop
            ? "translateY(-1px)"
            : "translateY(1px) scaleY(-1)",
          transformOrigin: "center",
        }}
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
