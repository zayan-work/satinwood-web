/**
 * Single source of truth for the test suite: every page that ships, and the
 * in-page anchor targets and outbound destinations each link is meant to reach.
 * Mirrors `lib/content.ts` (serviceLinks / nav / footer) plus the section `id`s
 * declared in the section components. If a route or anchor is added there, add
 * it here so the link-integrity test keeps covering it.
 */

/** Every internal route that must return 200. */
export const ROUTES = [
  "/",
  "/team",
  "/advisory",
  "/outsourced-controller",
  "/outsourced-fpa",
  "/outsourced-accounting-manager",
  "/outsourced-senior-accountant",
  "/finance-for-cpg-brands",
  "/finance-for-ecommerce-brands",
] as const;

/** The six SEO service landing pages reachable from the nav dropdown + footer. */
export const SERVICE_ROUTES = [
  "/outsourced-controller",
  "/outsourced-fpa",
  "/outsourced-accounting-manager",
  "/outsourced-senior-accountant",
  "/finance-for-cpg-brands",
  "/finance-for-ecommerce-brands",
] as const;

/**
 * Hash targets (`id`s) that exist on a given route, so `#x` links can be checked
 * for a real scroll destination. Keyed by route.
 */
export const ANCHOR_TARGETS: Record<string, string[]> = {
  "/": ["top", "cta", "how", "difference", "team", "proof"],
  "/advisory": ["book", "longer"],
};

/**
 * Known-placeholder links that are intentionally not wired up yet. The
 * integrity test reports these but does not fail on them. `#` is the team-page
 * podcast "Listen and subscribe" CTA (DEV TODO in lib/content.ts).
 */
export const KNOWN_PLACEHOLDERS = new Set<string>(["#"]);

/** Expected contact email used by the home "Get started" mailto link. */
export const CONTACT_EMAIL = "info@satinwoodtalent.com";
