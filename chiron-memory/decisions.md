# decision

A choice made and the reasoning behind it — the path taken over the alternatives.

## Theme tokens live in Tailwind v4 `@theme` CSS, not a JS config

- **What:** All colors, font family, type scale, spacing and the content width are declared once in `src/brand/theme.css` inside `@theme`, with `--color-*: initial` and `--text-*: initial` so Tailwind's default palette and sizes are removed. Light theme only; no `dark:` variants.
- **Why:** Tailwind v4 is CSS-first; `tailwind.config.js` is legacy. Removing the defaults forces every page through the shared tokens, so a stray `bg-blue-500` fails instead of silently diverging. One file to edit for a rebrand.
- **Where:** `src/brand/theme.css`, imported by `src/app/globals.css`.
- **Learned:** 2026-10-20, initial web app setup.

## Branding copy and theme are separated from pages under `src/brand/`

- **What:** `src/brand/brand.ts` holds product name, hero copy, default metadata and notice copy; `src/brand/fonts.ts` loads the typeface via `next/font`; `theme.css` holds the tokens. Pages and components read from these, never hardcode copy or colors.
- **Why:** No real branding existed at launch. Keeping placeholders in one folder means the real brand replaces them without touching individual pages.
- **Where:** `src/brand/`.
- **Learned:** 2026-10-20.

## Planned-but-unbuilt pages are served by a catch-all "coming soon" route

- **What:** `src/app/[...slug]/page.tsx` uses `generateStaticParams` over `src/content/pages.ts` to prerender a "coming soon" page for every listed route, and calls `notFound()` for anything else. A real `src/app/<route>/page.tsx` automatically takes precedence over the catch-all.
- **Why:** Relying only on `not-found.tsx` made every nav link prefetch a 404 (console errors) and gave planned pages no title. Alternative considered: `not-found.tsx` only (true 404 status, but noisy and less friendly).
- **Where:** `src/app/[...slug]/page.tsx`, `src/app/not-found.tsx`, `src/content/pages.ts`.
- **Learned:** 2026-10-20.

## Ordinary content pages go in the `(pages)` route group

- **What:** `src/app/(pages)/layout.tsx` wraps its pages in `Container` with the `page-content` class, giving a blank page the content width, vertical rhythm and heading/paragraph/list/link styles. Full-bleed pages (like the landing page) sit directly under `src/app/` and compose sections themselves.
- **Why:** The root layout cannot apply a content container without breaking full-width sections such as the hero. A route group adds the padding only where wanted and keeps URLs unchanged.
- **Where:** `src/app/(pages)/layout.tsx`, `.page-content` rules in `src/app/globals.css`.
- **Learned:** 2026-10-20.

## Todos los design tokens (colores de marca y neutros, fuente, escala tipográfica, espaciad…

What: Todos los design tokens (colores de marca y neutros, fuente, escala tipográfica, espaciado, ancho de contenido, radios) viven en un único bloque @theme de Tailwind v4 en src/brand/theme.css, quitando la paleta y tamaños por defecto de Tailwind (--color-*: initial, --text-*: initial); tema solo claro · Why: Tailwind v4 es CSS-first; un solo archivo define el look y eliminar los defaults evita que las páginas deriven a colores ad-hoc. Descartado: mantener la paleta por defecto junto a los tokens, o un tailwind.config.js (legacy en v4) · Where: src/brand/theme.css <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-0 -->

## El branding placeholder (nombre del producto, textos del hero, metadata por defecto) está…

What: El branding placeholder (nombre del producto, textos del hero, metadata por defecto) está en src/brand/brand.ts y la tipografía (Inter vía next/font) en src/brand/fonts.ts, junto a theme.css · Why: Se puede reemplazar el branding real tocando una sola carpeta sin editar páginas. Descartado: textos hardcodeados en componentes · Where: src/brand/ <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-1 -->

## Se mantiene una carpeta chiron-memory/ en el repo (decisions, gotchas, configs, conventio…

What: Se mantiene una carpeta chiron-memory/ en el repo (decisions, gotchas, configs, conventions, architectures, contradictions) con la memoria del proyecto, versionada junto al código · Why: — · Where: chiron-memory/ <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-14 -->

## Las páginas planificadas pero no construidas se sirven desde un catch-all src/app/[...slu…

What: Las páginas planificadas pero no construidas se sirven desde un catch-all src/app/[...slug]/page.tsx que prerenderiza 'coming soon' por cada entrada de pages.ts y llama notFound() para el resto; se mantiene además un not-found.tsx con estilo · Why: Con solo not-found.tsx, cada link del nav hacía prefetch de un 404 y generaba errores en consola, además de no tener título por página. Una página real con el mismo path gana automáticamente al catch-all · Where: src/app/[...slug]/page.tsx, src/app/not-found.tsx <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-3 -->

## Se expone /robots.txt con src/app/robots.ts (allow-all)

What: Se expone /robots.txt con src/app/robots.ts (allow-all) · Why: Lighthouse SEO marcaba robots.txt inválido porque la página not-found respondía esa ruta; la ruta de metadata de dos líneas lo arregla · Where: src/app/robots.ts <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-9 -->
