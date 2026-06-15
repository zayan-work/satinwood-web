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
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo-footer.svg"
        alt="Satinwood Talent"
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
        className="block h-[27px] w-auto max-[560px]:h-[23px] max-[430px]:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-short.svg"
        alt="Satinwood Talent"
        className="hidden h-[21px] w-auto max-[430px]:block"
      />
    </span>
  );
}
