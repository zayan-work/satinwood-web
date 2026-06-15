import { test, expect, type Page } from "@playwright/test";
import {
  ROUTES,
  ANCHOR_TARGETS,
  KNOWN_PLACEHOLDERS,
} from "./site";

/**
 * Site-wide link integrity. For every page, collect every `<a href>` and verify
 * each one points somewhere real:
 *   - internal route (`/x`)   → the route returns HTTP 200
 *   - in-page anchor (`#id`)  → an element with that id exists on the page
 *   - mailto:                 → well-formed address
 *   - external (https://…)    → well-formed absolute URL (not fetched, to keep
 *                               the suite hermetic / offline-safe)
 * Placeholders listed in KNOWN_PLACEHOLDERS are reported but allowed.
 */

type Link = { href: string; text: string };

/** Selector for an element with a given id (no CSS.escape — runs in Node). */
const byId = (id: string) => `[id="${id.replace(/"/g, '\\"')}"]`;

async function collectLinks(page: Page): Promise<Link[]> {
  return page.$$eval("a[href]", (els) =>
    els.map((el) => ({
      href: el.getAttribute("href") ?? "",
      text: (el.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 60),
    })),
  );
}

test.describe("every internal route loads", () => {
  for (const route of ROUTES) {
    test(`GET ${route} → 200 with chrome`, async ({ page }) => {
      const res = await page.goto(route, { waitUntil: "domcontentloaded" });
      expect(res, `no response for ${route}`).not.toBeNull();
      expect(res!.status(), `bad status for ${route}`).toBe(200);
      // Navbar + footer wordmark prove the layout rendered, not a 404 boundary.
      await expect(page.locator("header").first()).toBeVisible();
      await expect(page.locator("footer").first()).toBeVisible();
    });
  }
});

test.describe("all links resolve to a real destination", () => {
  for (const route of ROUTES) {
    test(`links on ${route}`, async ({ page, request }) => {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const links = await collectLinks(page);
      expect(links.length, `expected links on ${route}`).toBeGreaterThan(0);

      const internalChecked = new Map<string, number>();

      for (const { href, text } of links) {
        const label = `[${route}] "${text}" → ${href}`;

        if (KNOWN_PLACEHOLDERS.has(href)) {
          test.info().annotations.push({ type: "placeholder", description: label });
          continue;
        }

        // In-page anchor: an element with that id must exist on this page.
        if (href.startsWith("#")) {
          const id = href.slice(1);
          expect(id, `empty anchor: ${label}`).not.toBe("");
          await expect(
            page.locator(byId(id)),
            `anchor target missing: ${label}`,
          ).toHaveCount(1);
          continue;
        }

        // mailto / tel
        if (href.startsWith("mailto:")) {
          expect(href, `malformed mailto: ${label}`).toMatch(
            /^mailto:[^@\s]+@[^@\s]+\.[^@\s]+/,
          );
          continue;
        }

        // External absolute URL — validate shape only (kept offline-safe).
        if (/^https?:\/\//.test(href)) {
          expect(() => new URL(href), `malformed URL: ${label}`).not.toThrow();
          continue;
        }

        // Internal path (possibly with its own hash, e.g. /#cta). Check the
        // path returns 200 (dedup across the page so we hit each route once).
        if (href.startsWith("/")) {
          const path = href.split("#")[0] || "/";
          if (!internalChecked.has(path)) {
            const res = await request.get(path);
            internalChecked.set(path, res.status());
          }
          expect(
            internalChecked.get(path),
            `internal link 404/redirected: ${label}`,
          ).toBe(200);

          // If it carries a hash (/#cta), confirm the target exists on that page.
          const hash = href.includes("#") ? href.split("#")[1] : "";
          if (hash) {
            const dest = await page.context().newPage();
            const r = await dest.goto(path, { waitUntil: "domcontentloaded" });
            expect(r!.status(), `dest not 200: ${label}`).toBe(200);
            await expect(
              dest.locator(byId(hash)),
              `cross-page anchor missing: ${label}`,
            ).toHaveCount(1);
            await dest.close();
          }
          continue;
        }

        throw new Error(`unrecognized href form: ${label}`);
      }
    });
  }
});

test.describe("declared anchor targets exist", () => {
  for (const [route, ids] of Object.entries(ANCHOR_TARGETS)) {
    test(`anchors on ${route}`, async ({ page }) => {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      for (const id of ids) {
        await expect(
          page.locator(byId(id)),
          `expected #${id} on ${route}`,
        ).toHaveCount(1);
      }
    });
  }
});
