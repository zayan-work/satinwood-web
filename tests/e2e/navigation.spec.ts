import { test, expect } from "@playwright/test";
import { SERVICE_ROUTES, CONTACT_EMAIL } from "./site";

/**
 * Click-through journeys: drive the real controls a visitor uses and assert the
 * URL they land on. Complements link-integrity.spec (which checks href targets)
 * by exercising hover menus, scroll-to-anchor CTAs, and cross-page navigation.
 */

test.describe("home — navbar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test('"Team" goes to /team', async ({ page }) => {
    // Scope to the header — "Team" also appears in the footer nav.
    await page.locator("header").getByRole("link", { name: "Team", exact: true }).click();
    await expect(page).toHaveURL("/team");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test('"Advisory" goes to /advisory', async ({ page }) => {
    await page.locator("header").getByRole("link", { name: "Advisory", exact: true }).click();
    await expect(page).toHaveURL("/advisory");
  });

  test('"Build your team" CTA scrolls to the booking section (#cta)', async ({ page }) => {
    await page.locator("header").getByRole("link", { name: "Build your team" }).click();
    await expect(page).toHaveURL(/#cta$/);
    await expect(page.locator("#cta")).toBeInViewport();
  });

  test("Services dropdown links to each service page", async ({ page }) => {
    for (const route of SERVICE_ROUTES) {
      await page.goto("/");
      // Hover the trigger to reveal the CSS hover menu, then click the item
      // whose href matches this service route.
      await page.getByRole("button", { name: "Services" }).hover();
      await page.locator(`header a[href="${route}"]`).click();
      await expect(page).toHaveURL(route);
    }
  });
});

test.describe("home — hero & body CTAs", () => {
  test("hero primary scrolls to #cta, ghost scrolls to #how", async ({ page }) => {
    await page.goto("/");
    await page.locator("#top").getByRole("link", { name: /build/i }).first().click();
    await expect(page).toHaveURL(/#cta$/);

    await page.goto("/");
    await page.locator('a[href="#how"]').first().click();
    await expect(page).toHaveURL(/#how$/);
    await expect(page.locator("#how")).toBeInViewport();
  });

  test("case-study link goes to the CPG service page", async ({ page }) => {
    await page.goto("/");
    // Scope to main — the same href also lives in the hidden navbar dropdown.
    await page.locator('main a[href="/finance-for-cpg-brands"]').first().click();
    await expect(page).toHaveURL("/finance-for-cpg-brands");
  });

  test("Roles cards link to their service pages", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('main a[href="/outsourced-controller"]').first()).toBeVisible();
    await page.locator('main a[href="/outsourced-fpa"]').first().click();
    await expect(page).toHaveURL("/outsourced-fpa");
  });

  test('"Get started" mailto targets the contact address', async ({ page }) => {
    await page.goto("/");
    const mailto = page.locator(`a[href^="mailto:"]`).first();
    await expect(mailto).toHaveAttribute("href", new RegExp(CONTACT_EMAIL));
  });
});

test.describe("home — footer", () => {
  test("footer wordmark + links navigate correctly", async ({ page }) => {
    await page.goto("/team");
    // Wordmark returns home.
    await page.locator("footer").getByRole("link", { name: /satinwood talent home/i }).click();
    await expect(page).toHaveURL("/");

    // Spot-check a service link and the build-your-team CTA from the footer.
    await page.goto("/");
    await page.locator('footer a[href="/advisory"]').click();
    await expect(page).toHaveURL("/advisory");

    await page.goto("/");
    await page.locator('footer a[href="/#cta"]').click();
    await expect(page).toHaveURL(/\/#cta$/);
  });
});

test.describe("service pages", () => {
  for (const route of SERVICE_ROUTES) {
    test(`${route} CTAs point back to the home booking section`, async ({ page }) => {
      await page.goto(route);
      // Every service page's primary + closing CTA is /#cta.
      const cta = page.locator('a[href="/#cta"]').first();
      await expect(cta).toBeVisible();
      await cta.click();
      await expect(page).toHaveURL(/\/#cta$/);
      await expect(page.locator("#cta")).toBeInViewport();
    });
  }
});

test.describe("team page", () => {
  test("Rengan's link goes to /advisory; CTA goes to /#cta", async ({ page }) => {
    await page.goto("/team");
    await page.getByRole("link", { name: /advisory with rengan/i }).click();
    await expect(page).toHaveURL("/advisory");

    await page.goto("/team");
    await page.locator('main a[href="/#cta"]').first().click();
    await expect(page).toHaveURL(/\/#cta$/);
  });

  test('podcast "Listen and subscribe" is a known placeholder (#)', async ({ page }) => {
    await page.goto("/team");
    const podcast = page.getByRole("link", { name: /listen and subscribe/i });
    await expect(podcast).toHaveAttribute("href", "#");
  });
});

test.describe("advisory page", () => {
  test("hero CTAs scroll to #book and #longer", async ({ page }) => {
    await page.goto("/advisory");
    await page.locator('a[href="#longer"]').first().click();
    await expect(page).toHaveURL(/#longer$/);
    await expect(page.locator("#longer")).toBeInViewport();

    await page.goto("/advisory");
    await page.locator('a[href="#book"]').first().click();
    await expect(page).toHaveURL(/#book$/);
    await expect(page.locator("#book")).toBeInViewport();
  });
});
