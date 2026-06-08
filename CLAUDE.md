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

- **App Router only.** All routes live in `app/`. Currently just the scaffold: `app/layout.tsx` (root layout, Geist fonts wired via `next/font/google` and exposed as `--font-geist-sans` / `--font-geist-mono`) and `app/page.tsx`.
- **Path alias:** `@/*` maps to the repo root (`./`), per `tsconfig.json`.
- **React 19** — Server Components are the default; mark Client Components with `"use client"`.

## Styling — Tailwind v4, CSS-first config

This project uses **Tailwind CSS v4**, configured entirely in CSS, not JavaScript:

- Theme tokens are declared in `app/globals.css` inside an `@theme inline { ... }` block (e.g. `--color-background`, `--font-sans`). There is **no `tailwind.config.ts`** and Tailwind v4 does not use one by default.
- Tailwind is wired through PostCSS via `@tailwindcss/postcss` (`postcss.config.mjs`); `globals.css` pulls it in with `@import "tailwindcss";`.

**Reconciling the Satinwood project rules:** the rules call for theme colors (`ink`, `forest`, `gold`) and Framer Motion / Radix UI primitives. None of these are present yet:
- The rules say "map theme colors to `tailwind.config.ts`" — in v4 this means adding `--color-ink`, `--color-forest`, `--color-gold` to the `@theme inline` block in `app/globals.css` (which then exposes `bg-ink`, `text-forest`, etc.). Only create a `tailwind.config.ts` if you have a specific reason to opt back into JS config.
- **Framer Motion** and **Radix UI** are not yet in `package.json` — install them before using the staggered `whileInView` reveal animations and Radix primitives the rules require.
