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
          "mt-4 font-display text-[clamp(33px,4.4vw,56px)] font-semibold leading-[1.03] tracking-[-0.4px] [&_em]:italic",
          heading,
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 max-w-[58ch] text-[clamp(15.5px,1.2vw,18px)] leading-[1.62]",
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
