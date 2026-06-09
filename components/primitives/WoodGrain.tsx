import { cn } from "@/lib/cn";

export type WoodTheme = "light" | "dark";

type ThemeConfig = {
  /** Atmospheric glow painted behind the grain. */
  glow: string;
  /** Flat tint applied to the noise (normalized RGB, 0–1) → ribbon colour. */
  tint: [number, number, number];
  /** Alpha gain / bias for the noise → controls ribbon contrast. */
  alphaGain: number;
  alphaBias: number;
  /** Overall grain opacity. */
  opacity: number;
  /** Optional sheen sweep colour (the satin lustre). */
  sheen: string;
};

const THEMES: Record<WoodTheme, ThemeConfig> = {
  // Over cream/paper — honey heartwood ribbons, whisper-soft.
  light: {
    glow:
      "radial-gradient(120% 90% at 88% 4%, rgba(194,162,78,0.14), transparent 56%)," +
      "radial-gradient(80% 70% at 2% 2%, rgba(44,56,42,0.05), transparent 52%)",
    tint: [0.71, 0.525, 0.227],
    alphaGain: 0.9,
    alphaBias: -0.52,
    opacity: 0.16,
    sheen: "rgba(221,196,136,0.18)",
  },
  // Over forest-deep — brighter gold figure with more presence.
  dark: {
    glow:
      "radial-gradient(80% 80% at 50% 0%, rgba(194,162,78,0.16), transparent 60%)," +
      "radial-gradient(90% 70% at 100% 100%, rgba(44,56,42,0.5), transparent 60%)",
    tint: [0.78, 0.65, 0.32],
    alphaGain: 1.05,
    alphaBias: -0.5,
    opacity: 0.24,
    sheen: "rgba(221,196,136,0.12)",
  },
};

/**
 * Satinwood figure — a decorative ribbon-grain texture layer.
 *
 * The grain is a real SVG `feTurbulence` fractal stretched horizontally
 * (low X frequency, high Y frequency → fine vertical ribboning that reads as
 * figured wood), tinted flat-gold via `feColorMatrix`. It is rendered once and
 * composited by the GPU, so it is far cheaper than the WebGL motif it replaces.
 *
 * Ambient drift + sheen are CSS-only and disabled under reduced motion.
 * Always `aria-hidden`; sits inside a `relative`, `overflow-hidden` parent.
 */
export function WoodGrain({
  theme = "light",
  id,
  className,
  animate = true,
}: {
  theme?: WoodTheme;
  /** Unique-ish suffix for the SVG filter id (avoid duplicate ids per page). */
  id?: string;
  className?: string;
  animate?: boolean;
}) {
  const c = THEMES[theme];
  const fid = `satinwood-${theme}-${id ?? "0"}`;
  const [r, g, b] = c.tint;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* Atmosphere — the warm light pooling on the heartwood. */}
      <div className="absolute inset-0" style={{ backgroundImage: c.glow }} />

      {/* The ribbon grain itself. */}
      <svg
        className={cn(
          "absolute inset-[-6%] h-[112%] w-[112%]",
          animate && "grain-anim [animation:var(--animate-grain-drift)]",
        )}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={fid} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.12"
            numOctaves={3}
            seed={7}
            stitchTiles="stitch"
            result="noise"
          />
          {/* Flatten the noise to a gold ribbon: fixed RGB via bias,
              alpha driven by noise luminance (gain + bias = contrast). */}
          <feColorMatrix
            in="noise"
            type="matrix"
            values={`0 0 0 0 ${r}
                     0 0 0 0 ${g}
                     0 0 0 0 ${b}
                     ${c.alphaGain} ${c.alphaGain} ${c.alphaGain} 0 ${c.alphaBias}`}
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter={`url(#${fid})`}
          opacity={c.opacity}
        />
      </svg>

      {/* Satin sheen — a slow gold sweep catching the light. */}
      {animate && (
        <div
          className="grain-anim absolute inset-y-0 left-1/4 w-1/2 [animation:var(--animate-sheen)]"
          style={{
            background: `radial-gradient(60% 50% at 50% 40%, ${c.sheen}, transparent 70%)`,
          }}
        />
      )}
    </div>
  );
}
