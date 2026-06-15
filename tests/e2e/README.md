# E2E tests — link & button integrity

Playwright end-to-end tests that verify every link and button on the site goes
to its correct destination. They run against the **production build**
(`pnpm build && pnpm start`, wired up in `playwright.config.ts`).

## Running

```bash
pnpm exec playwright install chromium   # one-time: download the browser
pnpm test:e2e                           # run all tests
pnpm test:e2e:ui                        # interactive UI mode
pnpm test:e2e:report                    # open the last HTML report
```

The config runs the full bundled Chromium in new-headless mode
(`channel: "chromium"` in `playwright.config.ts`), so `playwright install chromium`
is all you need — the separate `chrome-headless-shell` binary is not required.

If the bundled Chromium can't be downloaded (restricted network), drive a
system-installed Google Chrome instead:

```bash
PW_CHANNEL=chrome pnpm test:e2e
```

## Sharing the report over a tunnel (ngrok etc.)

`pnpm test:e2e:report` (`playwright show-report`) is for **local** viewing only —
it rejects any request whose `Host` header isn't localhost (returns 403), so it
does **not** work behind ngrok/Cloudflare tunnels. To expose the report, serve
the folder with a plain static server (no host check) and point the tunnel at it:

```bash
python3 -m http.server 9323 --directory playwright-report   # serve
ngrok http 9323                                             # expose → share the https URL
```

## What's covered

- **`link-integrity.spec.ts`** — for every route in `site.ts`, collects every
  `<a href>` and asserts each resolves: internal paths return HTTP 200, in-page
  `#anchors` have a matching element, `mailto:` is well-formed, external URLs are
  valid. Also checks every route loads (200 + header/footer render) and that the
  declared anchor targets exist.
- **`navigation.spec.ts`** — clicks the real controls (navbar, Services hover
  dropdown, hero CTAs, Roles cards, footer, service-page CTAs, team/advisory
  links) and asserts the URL the visitor lands on.
- **`site.ts`** — the expected routes, anchor targets, and known placeholders.
  Mirrors `lib/content.ts`; update it when routes or anchors change.

## Known placeholder

The team page's podcast **"Listen and subscribe"** link is intentionally `#`
(see the DEV TODO in `lib/content.ts`). It's listed in `KNOWN_PLACEHOLDERS` so
the suite reports it without failing. Wire it up and remove it from that set.
