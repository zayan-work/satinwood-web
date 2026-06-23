import Image from "next/image";
import { ArrowUpRight, Play, AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import type { PodcastVideo } from "@/lib/youtube";

const isDev = process.env.NODE_ENV !== "production";

const compact = new Intl.NumberFormat("en", { notation: "compact" });
const monthYear = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });

function meta(v: PodcastVideo) {
  const parts: string[] = [];
  if (typeof v.viewCount === "number") parts.push(`${compact.format(v.viewCount)} views`);
  if (v.publishedAt) {
    const d = new Date(v.publishedAt);
    if (!Number.isNaN(d.getTime())) parts.push(monthYear.format(d));
  }
  return parts.join(" · ");
}

/**
 * Grid of YouTube videos rendered under the advisory booking calendar. Renders
 * nothing when there are no videos (unconfigured key / channel, or a fetch
 * failure), so the section self-hides. Data comes from lib/youtube.ts.
 */
export function PodcastVideos({
  videos,
  eyebrow,
  title,
  channelUrl,
  error = null,
}: {
  videos: PodcastVideo[];
  eyebrow: string;
  title: string;
  channelUrl?: string;
  /** Set when a configured fetch failed; renders the fallback error screen. */
  error?: string | null;
}) {
  const hasChannel = !!channelUrl && /^https?:\/\//.test(channelUrl);

  // Nothing to show and no failure → stay hidden (unconfigured / empty channel).
  if (!videos.length && !error) return null;

  // Fallback error screen. Always logged server-side (see lib/youtube.ts); the
  // raw detail is shown on-page only in development to aid debugging.
  if (error) {
    return (
      <div className="mt-[72px] border-t border-hairline pt-[clamp(40px,5vw,56px)]">
        <Reveal>
          <div className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gold">
            {eyebrow}
          </div>
          <h3 className="mt-3 font-display text-[clamp(26px,3vw,34px)] font-semibold leading-[1.08] text-ink">
            {title}
          </h3>
          <div className="mt-7 rounded-[14px] border border-hairline bg-white px-6 py-8 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/12 text-gold">
              <AlertTriangle className="size-6" strokeWidth={1.8} />
            </span>
            <p className="mt-4 font-display text-[20px] text-ink">
              The latest episodes couldn&rsquo;t load right now.
            </p>
            {hasChannel && (
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest transition-colors hover:text-forest-deep"
              >
                Watch on YouTube
                <ArrowUpRight aria-hidden className="size-4" strokeWidth={2} />
              </a>
            )}
            {isDev && (
              <pre className="mx-auto mt-5 max-w-[680px] overflow-x-auto whitespace-pre-wrap rounded-[10px] border border-hairline bg-cream-deep px-4 py-3 text-left text-[12.5px] leading-[1.5] text-grey">
                {error}
                {"\n"}— shown in development only; check the server logs (prefix
                {" "}[podcast]) in production.
              </pre>
            )}
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="mt-[72px] border-t border-hairline pt-[clamp(40px,5vw,56px)]">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gold">
            {eyebrow}
          </div>
          <h3 className="mt-3 font-display text-[clamp(26px,3vw,34px)] font-semibold leading-[1.08] text-ink">
            {title}
          </h3>
        </div>
        {hasChannel && (
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 border-b border-forest/30 pb-0.5 text-[14px] font-semibold text-forest transition-colors hover:border-forest hover:text-forest-deep"
          >
            See all on YouTube
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
            />
          </a>
        )}
      </Reveal>

      <RevealGroup className="mt-9 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((v) => (
          <RevealItem key={v.id}>
            <a href={v.url} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-video overflow-hidden rounded-[12px] border border-hairline bg-cream-deep">
                {v.thumbnail && (
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                )}
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-deep/72 text-cream opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none">
                    <Play className="size-5 translate-x-[1px] fill-current" strokeWidth={1.5} />
                  </span>
                </span>
              </div>
              <h4 className="mt-3 line-clamp-2 font-display text-[16.5px] font-semibold leading-[1.3] text-ink transition-colors group-hover:text-gold">
                {v.title}
              </h4>
              {meta(v) && <div className="mt-1.5 text-[12.5px] text-grey">{meta(v)}</div>}
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
