/**
 * Placeholder branding — the ONLY place product name and copy live.
 * Replace these values when real branding is ready; no page needs to change.
 * Colors, fonts and sizes live next door in ./theme.css and ./fonts.ts.
 */
export const brand = {
  /** Product name shown in the header, footer and browser tab. */
  name: "Acme App",
  /** One-line positioning used as the default page description. */
  tagline: "A simple starting point for your next product.",

  /** Default metadata; pages without their own title inherit these. */
  seo: {
    defaultTitle: "Acme App — A simple starting point for your next product",
    /** Used as `<page title> | Acme App` for pages that set their own title. */
    titleTemplate: "%s | Acme App",
    description:
      "Acme App is a placeholder web app built with Next.js, TypeScript and Tailwind CSS. Replace this copy with your own.",
  },

  /** Landing page hero. */
  hero: {
    eyebrow: "Now in early preview",
    headline: "Build something people love, starting today.",
    supportingLine:
      "A clean, consistent foundation so every page you add looks like it belongs. Swap in your own branding when you're ready.",
    cta: { label: "Explore the app", href: "#explore" },
  },

  /** Section that links to future pages. */
  explore: {
    heading: "Where to go next",
    intro: "These sections are on the roadmap. Each one picks up the shared look automatically.",
  },

  /** Placeholder shown for planned pages that are not built yet. */
  comingSoon: {
    eyebrow: "Coming soon",
    /** `{title}` is replaced with the page title from src/content/pages.ts. */
    heading: "{title} is on its way",
    body: "We're still building this part of the app. Check back shortly, or head back to the start.",
    cta: { label: "Back to home", href: "/" },
  },

  /** Shown for URLs that match nothing at all. */
  notFound: {
    eyebrow: "404",
    heading: "We couldn't find that page",
    body: "The link may be out of date or the address mistyped. Head back to the start and try again.",
    cta: { label: "Back to home", href: "/" },
  },

  footer: {
    text: "Built with Next.js, TypeScript and Tailwind CSS.",
  },
} as const;
