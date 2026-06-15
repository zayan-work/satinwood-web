import { cn } from "@/lib/cn";

/**
 * Brand logo: the "Satinwood Talent" wordmark, shipped as flat SVG assets in
 * `/public`. The header logo is the dark (ink) cut on light bands; below 430px
 * it swaps to the short "Satinwood" cut. The footer logo is the cream cut for
 * the dark forest band. Sizes match the static mockups (27/23px header, 21px
 * short, 24px footer).
 */
export function Wordmark({
  variant = "header",
  className,
}: {
  variant?: "header" | "footer";
  className?: string;
}) {
  if (variant === "footer") {
    return (
      // Intrinsic ratio from the SVG viewBox (614.5 × 75.5); CSS height drives
      // the rendered size, width/height reserve space to keep CLS at zero.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo-footer.svg"
        alt="Satinwood Talent"
        width={1229}
        height={151}
        className={cn("block h-[24px] w-auto", className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Satinwood Talent"
        width={1230}
        height={151}
        className="block h-[27px] w-auto max-[560px]:h-[23px] max-[430px]:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-short.svg"
        alt="Satinwood Talent"
        width={731}
        height={151}
        className="hidden h-[21px] w-auto max-[430px]:block"
      />
    </span>
  );
}
