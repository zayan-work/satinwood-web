# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: read the bundled docs first

Per AGENTS.md, this is **Next.js 16.2.7** — a major version with breaking changes from earlier Next.js. The actual installed docs ship in `node_modules/next/dist/docs/` (`01-app`, `02-pages`, `03-architecture`, `04-community`). Read the relevant guide there before writing framework code; do not rely on memory of older Next.js APIs.

## Commands

This project uses **pnpm** (pinned via `packageManager` in `package.json`). Use `pnpm`, not `npm` or `yarn`.

```bash
pnpm install     # install dependencies
pnpm dev         # start dev server at http://localhost:3000
pnpm build       # production build
pnpm start       # serve the production build
pnpm lint        # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test runner configured yet. TypeScript runs in `noEmit` strict mode; `pnpm build` is the type-check gate.

**Native build scripts:** pnpm 11 blocks dependency build scripts by default. Approvals live in `pnpm-workspace.yaml` under `allowBuilds:` (a map of `package: true`), currently enabling `sharp` (used by `next/image`) and `unrs-resolver` (ESLint resolver). Add new native deps there with `true`, or an install will warn with `ERR_PNPM_IGNORED_BUILDS`.

## Architecture

- **App Router only.** All routes live in `app/`. `app/page.tsx` composes the landing page from ordered section components; `app/layout.tsx` wires the fonts (Cormorant Garamond → `--font-cormorant`, Inter → `--font-inter`), the inline favicon, and `robots`. Other routes: `/team`, `/advisory`, and six SEO service landing pages — `/outsourced-controller`, `/outsourced-fpa`, `/outsourced-accounting-manager`, `/outsourced-senior-accountant`, `/finance-for-cpg-brands`, `/finance-for-ecommerce-brands` (all listed in `serviceLinks`, which feeds the nav Services dropdown and the footer). Each service route is a thin file that pulls its copy from `servicePages[slug]` in `lib/content.ts`, renders `<ServicePage data={…}>` (two-column hero with an "At a glance" panel), and emits `Service` + `FAQPage` + `BreadcrumbList` JSON-LD via `serviceJsonLd()` in `lib/serviceSchema.ts`. Per-page `metadata` sets `title`/`description`/`canonical`/OG; `app/sitemap.ts` and `app/robots.ts` are the indexing surface; `app/opengraph-image.tsx` generates the shared share image.
- **Path alias:** `@/*` maps to the repo root (`./`), per `tsconfig.json`.
- **React 19** — Server Components are the default; mark Client Components with `"use client"`. Keep sections as Server Components where possible; only the interactive primitives (`Reveal`, `RevealGroup`, `CountUp`, `Navbar`, `BookingEmbed`, `Faq`) are clients.
- **Code layout:**
  - `lib/content.ts` — single source of truth for all copy. Edit copy here, never inline in sections.
  - `lib/cn.ts` — `cn()` = `clsx` + `tailwind-merge`. Use it for every conditional/merged className.
  - `components/primitives/` — reusable building blocks (`Container`, `Button`, `Eyebrow`, `SectionHeading`, `GrainOverlay`, `Wordmark`, `CountUp`, reveal helpers).
  - `components/sections/` — one file per page section, consumed by `app/page.tsx`.

## Styling — Tailwind v4, CSS-first config

This project uses **Tailwind CSS v4**, configured entirely in CSS, not JavaScript:

- Theme tokens are declared in `app/globals.css` inside an `@theme inline { ... }` block (e.g. `--color-background`, `--font-sans`). There is **no `tailwind.config.ts`** and Tailwind v4 does not use one by default.
- Tailwind is wired through PostCSS via `@tailwindcss/postcss` (`postcss.config.mjs`); `globals.css` pulls it in with `@import "tailwindcss";`.

- **Theme colors live in CSS, not JS.** Tokens are declared once as raw `--name` values in `:root`, then re-exposed to Tailwind inside `@theme inline` as `--color-<name>` (which generates `bg-<name>`, `text-<name>`, `border-<name>`, …). To add a colour: add both the raw `--x` and the `--color-x: var(--x)` line. Do **not** create a `tailwind.config.ts` unless you have a specific reason to opt back into JS config.
- **Custom utilities** use Tailwind v4's `@utility` directive in `globals.css` (e.g. `grain`, `grain-light`, `rule-gold`, `tnum`). **Keyframe animations** are exposed as `--animate-*` theme vars (currently the FAQ accordion open/close) and invoked with arbitrary properties.
- **Framer Motion** (`framer-motion`) and **Radix** (`@radix-ui/react-accordion`) are installed and in use. The Cal.com embed uses `@calcom/embed-react`.

## Design system — "Satinwood: Heritage Editorial"

Satinwood is a lustrous pale-gold Ceylon hardwood with a wavy, ribboned figure; the design language draws on that material, but the look is **flat editorial**, not textured. The static-HTML mockups in `tmp/` are the visual source of truth — `Satinwood Updated for Team.html` for the landing page, `team_3.html` for `/team`, `advisory_4.html` for `/advisory`. Match them. (A previous, richer iteration used SVG wood-grain textures and wavy section dividers; those were removed — do not reintroduce `WoodGrain` or `SectionCurve`.) Keep new work consistent with these conventions:

- **Palette (tokens in `app/globals.css`):** forest greens (`forest`, `forest-deep`, `forest-shadow`), heartwood golds (`gold`, `gold-bright`, `honey`, `satin`), `walnut`, warm neutrals (`paper`, `cream`, `cream-deep`), text (`ink`, `grey`, `grey-light`), lines (`hairline`, `tint`, `tint-edge`). Dark sections sit on `forest-deep`; light sections alternate `paper` / `cream` / `white`.
- **Type:** display = Cormorant Garamond (`font-display`), body = Inter (`font-sans`). Headings use `clamp()` for fluid sizing; emphasized phrases go in `<em>` (rendered italic + gold via `SectionHeading`).
- **Layout:** `Container` is a centered 1200px measure (`max-w-[1200px]`) with 44px side gutters (22px on small screens), matching the mockups' `.wrap`. Use it for every section's content.
- **Section rhythm:** vertical padding is a flat **88px** (`py-[88px]`, `max-[560px]:py-[60px]`); the Stats band is 56px. Bands are separated by flat `border-y`/`border-t` hairlines or a plain color change — no curved dividers.
- **Texture:** the only ambient texture is `GrainOverlay` (a faint vertical paper pinstripe via the `grain` / `grain-light` utilities), used sparingly on the hero, value band, and operator photos — matching the mockups' `::before`/`::after` pinstripe. Nothing else is textured; there is no `three`/`@react-three/fiber` dependency (a removed WebGL ring motif) — do not add one back.
- **Motion:** reveals via `Reveal` / `RevealGroup`+`RevealItem` (fade + 16px rise, `whileInView` once, ease `[0.22,1,0.36,1]`, ~0.06s stagger); `CountUp` for stat figures; the FAQ is a Radix accordion. Everything respects `prefers-reduced-motion`. Animate transform/opacity only. Note: `whileInView` content is `opacity:0` until scrolled into view, so **full-page screenshots show off-screen sections blank — scroll to a section to QA it.**
- **Verify before done:** `pnpm build` (type-check gate) + `pnpm lint` must pass. The dev server runs on `http://localhost:3000`.
