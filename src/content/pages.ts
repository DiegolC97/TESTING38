/**
 * The single list of pages the landing page and header link to.
 * Add or remove an entry here and both the "Where to go next" cards and the
 * header navigation update on their own.
 *
 * A destination that has no route yet shows the shared "coming soon" page.
 */
export type SitePage = {
  /** Short name shown as the card title and nav label. */
  title: string;
  /** One sentence describing what the page will offer. */
  description: string;
  /** Route path, e.g. "/features". */
  href: string;
};

export const sitePages: readonly SitePage[] = [
  {
    title: "Features",
    description: "See what the product does and how each capability helps you.",
    href: "/features",
  },
  {
    title: "About",
    description: "Learn who is behind the product and why it exists.",
    href: "/about",
  },
  {
    title: "Contact",
    description: "Get in touch with questions, feedback or partnership ideas.",
    href: "/contact",
  },
];
