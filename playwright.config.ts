import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright E2E config. Tests verify that every link and button across the site
 * resolves to its intended destination. The web server is the production build
 * (`pnpm build && pnpm start`) so routing, redirects, and 404s match what ships.
 *
 * Run with `pnpm test:e2e`. To iterate against an already-running server
 * (`pnpm dev` or `pnpm start` on :3000), the config reuses it automatically.
 */
const PORT = 3000;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        // Use the full bundled Chromium in new-headless mode (`channel: "chromium"`)
        // so the suite needs only the `chromium` browser, not the separate
        // `chrome-headless-shell` binary. Override with PW_CHANNEL=chrome to drive a
        // system-installed Google Chrome instead (handy if the bundled download is
        // blocked by a restricted network).
        channel: process.env.PW_CHANNEL || "chromium",
      },
    },
  ],
  webServer: {
    // Build once, then serve the production output — the indexing/routing surface
    // (sitemap, 404 boundary, canonical redirects) only behaves like prod here.
    command: "pnpm build && pnpm start",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
