# testing38

A web app built with [Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS v4.
It starts with a landing page and a shared visual base that every future page inherits.

## Run it

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000, reloads on save
```

Other scripts:

```bash
npm run build      # production build (also type-checks)
npm run start      # serve the production build
npm run lint       # ESLint
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/brand/theme.css` | **The shared visual base.** Colors, font family, type scale, spacing and the content width, as Tailwind theme tokens. Light theme only. |
| `src/brand/brand.ts` | **Placeholder branding and copy.** Product name, hero text, default page title and description, "coming soon" text. |
| `src/brand/fonts.ts` | The brand typeface, loaded with `next/font`. |
| `src/content/pages.ts` | **The list of future pages.** Each entry has a title, description and route. The header nav and the landing page cards render from it. |
| `src/app/layout.tsx` | The shared page frame: header, main area and footer, plus default metadata. Wraps every page automatically. |
| `src/app/page.tsx` | The landing page (hero + "Where to go next" section). |
| `src/app/(pages)/layout.tsx` | Layout for ordinary content pages: content width, vertical spacing and text styles. |
| `src/app/[...slug]/page.tsx` | Renders a styled "coming soon" page for any entry in `pages.ts` that has no real page yet. |
| `src/app/not-found.tsx` | Styled "not found" page for URLs that match nothing. |
| `src/components/` | Small shared building blocks: `Container`, `ButtonLink`, `Card`, `Header`, `Footer`, `Hero`, `ExploreSection`, `Notice`. |

## Add a new page

1. Create `src/app/(pages)/<route>/page.tsx`. The `(pages)` folder is a route group and does not appear in the URL, so this file is served at `/<route>`.

   ```tsx
   import type { Metadata } from "next";

   export const metadata: Metadata = {
     title: "Pricing", // shown as "Pricing | <product name>"
     description: "Plans for every team size.",
   };

   export default function PricingPage() {
     return (
       <>
         <h1>Pricing</h1>
         <p>Plain headings, paragraphs, lists and links are styled for you.</p>
       </>
     );
   }
   ```

   That is all. The page gets the header, footer, fonts, colors, content width and spacing from the shared base. If you leave out `metadata`, the page shows the default title and description from `src/brand/brand.ts`.

2. To link to it from the landing page and the header, add an entry to `src/content/pages.ts`:

   ```ts
   { title: "Pricing", description: "Plans for every team size.", href: "/pricing" },
   ```

   You can add the entry before the page exists: the link then shows the "coming soon" page until the real one is built.

Need a full-width section (like the hero)? Put the page at `src/app/<route>/page.tsx` instead, outside `(pages)`, and compose it from `<Container>` and the other components. It still gets the header and footer.

Use Tailwind utilities for anything beyond the defaults. Only use the colors, text sizes and spacing defined in `src/brand/theme.css` (`bg-brand`, `text-muted`, `text-lg`, `py-section`, `max-w-content`, ...) so every page stays consistent.

## Change the branding

- **Colors, fonts, sizes, spacing, width:** edit `src/brand/theme.css`. Changing `--color-brand` (and its `-hover` and `-soft` companions) recolors every button, link and accent across the app.
- **Typeface:** edit `src/brand/fonts.ts`.
- **Product name and copy:** edit `src/brand/brand.ts`.

No page needs to change.

## Notes

- The theme is light only; do not add `dark:` variants.
- Planned pages served by the catch-all route return HTTP 200 with a "coming soon" page. Unknown URLs render the "not found" page with a `noindex` tag; because the page streams, the status code is 200 (standard Next.js behaviour with Cache Components).
