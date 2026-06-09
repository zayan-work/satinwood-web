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

- **App Router only.** All routes live in `app/`. `app/page.tsx` composes the single landing page from ordered section components; `app/layout.tsx` wires the fonts (Cormorant Garamond → `--font-cormorant`, Inter → `--font-inter`) and the inline favicon.
- **Path alias:** `@/*` maps to the repo root (`./`), per `tsconfig.json`.
- **React 19** — Server Components are the default; mark Client Components with `"use client"`. Keep sections as Server Components where possible; only the interactive primitives (`Reveal`, `RevealGroup`, `Parallax`, `CountUp`, `ScrollProgress`, `ProofStrip`, `Navbar`, `BookingEmbed`, `Faq`) are clients.
- **Code layout:**
  - `lib/content.ts` — single source of truth for all copy. Edit copy here, never inline in sections.
  - `lib/cn.ts` — `cn()` = `clsx` + `tailwind-merge`. Use it for every conditional/merged className.
  - `components/primitives/` — reusable building blocks (`Container`, `Button`, `Eyebrow`, `SectionHeading`, `WoodGrain`, `SectionCurve`, `GrainOverlay`, reveal/motion helpers).
  - `components/sections/` — one file per page section, consumed by `app/page.tsx`.

## Styling — Tailwind v4, CSS-first config

This project uses **Tailwind CSS v4**, configured entirely in CSS, not JavaScript:

- Theme tokens are declared in `app/globals.css` inside an `@theme inline { ... }` block (e.g. `--color-background`, `--font-sans`). There is **no `tailwind.config.ts`** and Tailwind v4 does not use one by default.
- Tailwind is wired through PostCSS via `@tailwindcss/postcss` (`postcss.config.mjs`); `globals.css` pulls it in with `@import "tailwindcss";`.

- **Theme colors live in CSS, not JS.** Tokens are declared once as raw `--name` values in `:root`, then re-exposed to Tailwind inside `@theme inline` as `--color-<name>` (which generates `bg-<name>`, `text-<name>`, `border-<name>`, …). To add a colour: add both the raw `--x` and the `--color-x: var(--x)` line. Do **not** create a `tailwind.config.ts` unless you have a specific reason to opt back into JS config.
- **Custom utilities** use Tailwind v4's `@utility` directive in `globals.css` (e.g. `grain`, `woodgrain-light/dark`, `rule-gold`, `tnum`). **Keyframe animations** are exposed as `--animate-*` theme vars and invoked with arbitrary properties, e.g. `[animation:var(--animate-grain-drift)]`.
- **Framer Motion** (`framer-motion`) and **Radix** (`@radix-ui/react-accordion`) are installed and in use. The Cal.com embed uses `@calcom/embed-react`.

## Design system — "Satinwood: Heritage Editorial"

Satinwood is a lustrous pale-gold Ceylon hardwood with a wavy, ribboned figure; the design language *is* that material. Keep new work consistent with these conventions:

- **Palette (tokens in `app/globals.css`):** forest greens (`forest`, `forest-deep`, `forest-shadow`), heartwood golds (`gold`, `gold-bright`, `honey`, `satin`), `walnut`, warm neutrals (`paper`, `cream`, `cream-deep`), text (`ink`, `grey`, `grey-light`), lines (`hairline`, `tint`, `tint-edge`). Dark sections sit on `forest-deep`; light sections alternate `paper` / `cream` / `white`.
- **Type:** display = Cormorant Garamond (`font-display`), body = Inter (`font-sans`). Headings use `clamp()` for fluid sizing; emphasized phrases go in `<em>` (rendered italic + gold via `SectionHeading`).
- **Wide layout:** `Container` spans ~88–92% of the viewport (gutters ≤ ~6%/side) up to `max-w-[1600px]`. Use it for every section's content; do not reintroduce a narrow fixed column.
- **Satinwood grain — `<WoodGrain theme="light|dark" id="unique" />`:** a real SVG `feTurbulence` ribbon texture (anisotropic frequency = horizontal wood figure), tinted gold, with ambient drift + sheen (CSS-only, killed under reduced motion). It **replaced a removed WebGL 3D ring motif** — there is no `three`/`@react-three/fiber` dependency anymore; do not add one back. Give each instance a unique `id` (filter-id collision avoidance). It is `aria-hidden` and needs a `relative overflow-hidden` parent.
- **Curvy dividers — `<SectionCurve position="top|bottom" fill="var(--token)" variant="wave|swell" />`:** organic wave transitions that replace flat `border-y`. `fill` is the colour of the *adjacent* section so one colour drapes into the next; applied mainly at the dramatic light→dark→light bands (Difference, Stats, Booking). Section background order must stay consistent with the `fill` passed to its curves.
- **Motion:** reveals via `Reveal` / `RevealGroup`+`RevealItem` (fade + 16px rise, `whileInView` once, ease `[0.22,1,0.36,1]`, ~0.06s stagger). Everything respects `prefers-reduced-motion`. Animate transform/opacity only. Note: `whileInView` content is `opacity:0` until scrolled into view, so **full-page screenshots show off-screen sections blank — scroll to a section to QA it.**
- **Verify before done:** `pnpm build` (type-check gate) + `pnpm lint` must pass. The dev server runs on `http://localhost:3000`.
