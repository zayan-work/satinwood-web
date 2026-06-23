/**
 * Typed access layer for all site copy.
 *
 * The copy itself lives in CMS-owned JSON under `content/` and is edited through
 * Sveltia CMS at `/admin` (see public/admin/config.yml). This module imports
 * those JSON files and re-exports them under the names the components already
 * use, so editing copy means editing JSON (or using the CMS) — never this file.
 *
 * Bracketed values such as [$X–$Y] are deliberate placeholders to confirm in the
 * CMS before publishing.
 */
import global from "@/content/global.json";
import home from "@/content/home.json";
import teamData from "@/content/team.json";
import advisoryData from "@/content/advisory.json";
import controller from "@/content/services/outsourced-controller.json";
import fpa from "@/content/services/outsourced-fpa.json";
import accountingManager from "@/content/services/outsourced-accounting-manager.json";
import seniorAccountant from "@/content/services/outsourced-senior-accountant.json";
import cpg from "@/content/services/finance-for-cpg-brands.json";
import ecommerce from "@/content/services/finance-for-ecommerce-brands.json";

/* ---------------------------------------------------------- global / nav */
export const serviceLinks = global.serviceLinks;
export const nav = global.nav;
export const pageNav = global.pageNav;
export const footer = global.footer;
/** YouTube channel identity for the podcast video sections (advisory + team). */
export const youtube = global.youtube;

/* ----------------------------------------------------------------- home */
export const hero = home.hero;
export const proofStrip = home.proofStrip;
export const problems = home.problems;
export const differences = home.differences;
export const roles = home.roles;
export const operators = home.operators;
export const caseStudy = home.caseStudy;
export const testimonials = home.testimonials;
export const stats = home.stats;
export const steps = home.steps;
export const craftPoints = home.craftPoints;
export const reassurances = home.reassurances;
export const faqs = home.faqs;
export const booking = home.booking;
export const comparison = home.comparison;
/** Section eyebrows/titles/ledes previously hardcoded in the section components. */
export const sections = home.sections;
/** New homepage sections (coverage / continuity) from the v2 changes doc. */
export const coverage = home.coverage;
export const continuity = home.continuity;

/* ------------------------------------------------------------ sub-pages */
export const team = teamData;
export const advisory = advisoryData;

/** SEO service landing pages, keyed by slug (preserves the literal-key union
 *  that ServicePage and serviceJsonLd rely on). */
export const servicePages = {
  "outsourced-controller": controller,
  "outsourced-fpa": fpa,
  "outsourced-accounting-manager": accountingManager,
  "outsourced-senior-accountant": seniorAccountant,
  "finance-for-cpg-brands": cpg,
  "finance-for-ecommerce-brands": ecommerce,
};
