# Content & Sveltia CMS

All site copy lives in **`content/*.json`** and is edited through **Sveltia CMS**
at **`/admin`**. The React components read this copy via `lib/content.ts`, which
imports the JSON and re-exports it under the names the components use. You never
edit copy inside the components.

## Where the copy lives

| File | Edits |
| --- | --- |
| `content/home.json` | The whole homepage — hero, every section heading/lede, the FAQ, and the new Coverage / Continuity sections. |
| `content/team.json` | Team page — bios, the Advisors section, the (hidden) podcast block. |
| `content/advisory.json` | Advisory page. |
| `content/global.json` | Nav menu, services dropdown, footer links. |
| `content/services/*.json` | The six SEO service landing pages (one file each). |

`lib/content.ts` is a thin typed adapter — don't put copy there. After changing
the **shape** of any JSON file (adding/removing fields), regenerate the CMS field
schema: `node scripts/gen-cms-config.mjs`.

## Editing through the CMS

Open `/admin`. Three ways to sign in:

- **Work with Local Repository** — for editing on your own machine. Run
  `pnpm dev`, open `http://localhost:3000/admin` in a **Chromium** browser
  (Chrome/Edge/Brave/Arc — not Firefox/Safari), click this button, and pick the
  repo root. Edits write straight to the local files; commit them yourself.
- **Sign In Using Access Token** — for editing the live site with no extra setup.
  Uses a GitHub personal access token (repo scope). Saves commit to
  `zayan-work/satinwood-web@main`.
- **Sign In with GitHub** — a friendlier "Sign in with GitHub" button for
  non-technical editors. Requires deploying the `sveltia/sveltia-cms-auth`
  Cloudflare Worker + a GitHub OAuth app, then adding `base_url:` to the backend
  in `public/admin/config.yml`. Not needed for the token/local flows above.

Each saved edit is a Git commit; wire a Vercel Git deploy so commits redeploy the
site. New image uploads are committed to `public/media/` and referenced at
`/media/...`; existing images under `/public` (e.g. `/team/*.jpg`) keep working.

## Podcast videos (advisory calendar + team page)

The advisory page shows YouTube videos under the booking calendar, and the team
page has a podcast block. Both pull from one channel and **stay hidden until
configured** — so there's never a dead link or an empty grid.

**To turn them on:**

1. **Get the channel id.** YouTube Studio → Settings → Channel → Advanced
   settings → *Channel ID* (looks like `UC…`). Note the public channel URL too
   (e.g. `https://www.youtube.com/@yourhandle`).
2. **Create an API key.** [Google Cloud Console](https://console.cloud.google.com)
   → create/select a project → *APIs & Services* → enable **YouTube Data API v3**
   → *Credentials* → *Create credentials* → *API key*. Restrict the key to the
   YouTube Data API v3.
3. **Set the key** as `YOUTUBE_API_KEY` in `.env.local` (local) and in the Vercel
   project's Environment Variables (production). It's server-only — never exposed
   to the browser.
4. **Set the channel** in `content/global.json → youtube` (or via the CMS, under
   *Pages → Navigation & footer → Youtube*): `channelId` (the `UC…` value) and
   `channelUrl` (the public URL).

Section settings live in `content/advisory.json → videos`: `enabled`, `eyebrow`,
`title`, `count` (currently 4), `sort` (`recent` | `views` | `popular90`,
currently `recent`), `showStats` (views + date under each thumbnail). The team
podcast block uses `content/team.json → podcast` (`enabled` is on) and links to
`youtube.channelUrl`.

Data is fetched server-side and cached for a day (auto-refreshes — no redeploy
needed for new episodes). If the key or channel id is missing the sections render
nothing; if a configured fetch **fails**, the advisory section shows a fallback
card and logs the reason server-side (terminal / Vercel logs, prefixed
`[podcast]`). The raw error is also shown on the page in development only.

**Troubleshooting — HTTP 403 "Requests from referer … are blocked":** the API
key has an **HTTP-referrer** application restriction. Those don't work for
server-side calls (the server sends no/just-one referrer). Fix it in Google Cloud
Console → Credentials → your key → **Application restrictions → None**, and keep
**API restrictions → Restrict key → YouTube Data API v3** (that's the real
control for a server key). Changes take a few minutes to propagate.

## Editing the files directly

You can also just edit `content/*.json` in your editor and commit — it's the same
source of truth the CMS writes to.

---

## Before publishing — confirm these

The v2 changes doc left several figures and decisions to confirm. They're in the
copy as **`[bracketed placeholders]`** so they're easy to find (search the repo
for `[`), or edit them in the CMS:

- **`home.json` → `sections.math.lede`** — `[$X–$Y fully loaded]` and `[N]-month`:
  insert one defensible, sourced savings figure (replaces the old vague
  "well into six figures" claim).
- **`home.json` → `faqs`** (the cost question) — `[40–60%]` and `[$X per month]`.
- **`home.json` → `coverage.body`** — `[4–6]`-hour overlap: confirm the real
  daily overlap with North American business hours.
- **`home.json` → `continuity.body`** — replace within `[X]` days: confirm the
  real operator-replacement term.
- **Stats / named firms** — confirm the `50%+` saving and `15+ yrs` figures, and
  the named firms (Deloitte, Ernst & Young, Goldman Sachs, Stanford).
- **Flourish logos** (`home.json` → `caseStudy.desc`) — Costco, Loblaws, Amazon
  are described as retailers Flourish *sells across*. If you ever present logos,
  label them as team pedigree vs clients deliberately — don't imply they're
  clients.

### Decisions deliberately left as-is (change when ready)

- **Advisory price** (`advisory.json` → `hero.price` / `book.price`, currently
  `$150`). The doc flags `$150` as an awkward middle for a premium brand — decide
  free (funnel play) or clearly premium ($500+). Left at `$150`.
- **Podcast** (`team.json` → `podcast.enabled`, currently `false`). The "Listen
  and subscribe" link was a dead `#`, so the whole section is hidden. Set
  `enabled: true` and a real `cta.href` once there's an episode to link to.

### Already applied from the doc

Hero/“The math”/cost-FAQ rewritten off price toward ownership and risk · new
Coverage and Continuity sections · the "We don't recruit operators, we've been
them" line promoted to the homepage and team hero · Rengan reframed ("opens the
doors" → "sets its direction") · **Point72 → SAC Capital** and one firm list used
site-wide (Morgan Stanley · SAC Capital · Mercer · Robertson Stephens) · Tilak
"over twenty years" → "more than three decades" · Imu moved from the core team to
an **Advisors** section · advisory "becomes a corner" → "becomes someone in your
corner".

> **Diligence note carried over from the doc:** Rengan's bench (Morgan Stanley,
> SAC Capital, Mercer) is the trust spine of the site and is searchable. Decide
> on purpose how prominently to foreground it vs MAC Holdings / Tilak's operating
> record. This is a positioning call, not a code change.
