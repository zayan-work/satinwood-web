import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

/**
 * Eyebrow + display `h2`. Pass emphasized phrases as `<em>` inside `title`
 * (rendered italic + gold, matching the draft's `h2.title em`).
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const heading =
    tone === "dark" ? "text-[#F4EFE2] [&_em]:text-gold-bright" : "text-ink [&_em]:text-gold";
  const ledeColor = tone === "dark" ? "text-[#C9C0AA]" : "text-grey";
  const centered = align === "center";

  return (
    <div className={cn(centered && "flex flex-col items-center text-center", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-3.5 font-display text-[clamp(32px,4.4vw,50px)] font-semibold leading-[1.04] tracking-[-0.3px] [&_em]:italic",
          heading,
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-4 max-w-[56ch] text-[17px] leading-[1.6]",
            ledeColor,
            centered && "mx-auto",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
