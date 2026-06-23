/**
 * Server-only (uses YOUTUBE_API_KEY, no NEXT_PUBLIC_ prefix; imported only by the
 * advisory Server Component).
 *
 * Fetches videos from a YouTube channel via the Data API v3 for the podcast
 * sections. Reads public data only (titles, thumbnails, stats) so it needs just
 * an API key — no OAuth. Set YOUTUBE_API_KEY (server env) and the channel id in
 * content/global.json → youtube.channelId.
 *
 * Returns a result object: `videos` is empty and `error` is set when a configured
 * fetch fails, so the caller can render a fallback screen. When the key/channel
 * are not set, `configured` is false and the section simply hides. Failures are
 * logged to the server console (terminal / Vercel logs). Cached for a day (ISR).
 */
export type PodcastVideo = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  publishedAt: string;
  viewCount?: number;
};

export type PodcastResult = {
  videos: PodcastVideo[];
  /** Both the API key and channel id are set. */
  configured: boolean;
  /** Human-readable failure reason, or null on success / when unconfigured. */
  error: string | null;
};

type Options = {
  channelId: string;
  count: number;
  /** recent → newest first · views → most-viewed · popular90 → most-viewed in 90d */
  sort: string;
  showStats: boolean;
};

const API = "https://www.googleapis.com/youtube/v3";
const DAY = 86400;
// Sent as Referer so a key restricted to the production domain still passes from
// the server (which otherwise sends no referrer). Prefer removing the key's HTTP
// referrer restriction for server-side use — see docs/CMS.md.
const SITE_URL = "https://www.satinwoodtalent.com";

const unset = (v?: string) => !v || v.includes("REPLACE");

/** Pull a useful message out of a YouTube Data API error body. */
function apiError(body: unknown): string | null {
  const e = (body as { error?: { message?: string; errors?: { reason?: string }[] } })?.error;
  if (!e) return null;
  const reason = e.errors?.[0]?.reason;
  return [e.message, reason && `(reason: ${reason})`].filter(Boolean).join(" ");
}

export async function getPodcastVideos(opts: Options): Promise<PodcastResult> {
  const key = process.env.YOUTUBE_API_KEY;
  if (unset(key) || unset(opts.channelId)) {
    return { videos: [], configured: false, error: null };
  }

  const headers = { Referer: SITE_URL } as const;

  try {
    const search = new URLSearchParams({
      key: key!,
      part: "snippet",
      channelId: opts.channelId,
      type: "video",
      order: opts.sort === "recent" ? "date" : "viewCount",
      maxResults: String(Math.min(Math.max(opts.count, 1), 12)),
    });
    if (opts.sort === "popular90") {
      search.set("publishedAfter", new Date(Date.now() - 90 * DAY * 1000).toISOString());
    }

    const res = await fetch(`${API}/search?${search}`, { headers, next: { revalidate: DAY } });
    const data = await res.json().catch(() => null);

    if (!res.ok) {
      const detail = apiError(data) ?? res.statusText;
      const error = `YouTube search failed (HTTP ${res.status}): ${detail}`;
      console.error(`[podcast] ${error} — channel ${opts.channelId}`);
      return { videos: [], configured: true, error };
    }

    let videos: PodcastVideo[] = (data?.items ?? [])
      .filter((i: { id?: { videoId?: string } }) => i.id?.videoId)
      .map((i: { id: { videoId: string }; snippet?: Record<string, unknown> }) => {
        const s = (i.snippet ?? {}) as {
          title?: string;
          publishedAt?: string;
          thumbnails?: Record<string, { url?: string }>;
        };
        return {
          id: i.id.videoId,
          title: s.title ?? "",
          thumbnail: s.thumbnails?.high?.url ?? s.thumbnails?.medium?.url ?? "",
          url: `https://www.youtube.com/watch?v=${i.id.videoId}`,
          publishedAt: s.publishedAt ?? "",
        };
      })
      .slice(0, opts.count);

    // View counts are a nice-to-have; if the stats call fails, log and keep going.
    if (opts.showStats && videos.length) {
      const stats = new URLSearchParams({
        key: key!,
        part: "statistics",
        id: videos.map((v) => v.id).join(","),
      });
      const statsRes = await fetch(`${API}/videos?${stats}`, { headers, next: { revalidate: DAY } });
      const statsData = await statsRes.json().catch(() => null);
      if (statsRes.ok) {
        const counts = new Map<string, number>();
        for (const it of statsData?.items ?? []) {
          counts.set(it.id, Number(it.statistics?.viewCount ?? 0));
        }
        videos = videos.map((v) => ({ ...v, viewCount: counts.get(v.id) }));
      } else {
        console.error(`[podcast] stats fetch failed (HTTP ${statsRes.status}): ${apiError(statsData) ?? statsRes.statusText}`);
      }
    }

    return { videos, configured: true, error: null };
  } catch (e) {
    const error = `YouTube request error: ${e instanceof Error ? e.message : String(e)}`;
    console.error(`[podcast] ${error} — channel ${opts.channelId}`);
    return { videos: [], configured: true, error };
  }
}
