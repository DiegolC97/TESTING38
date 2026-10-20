# convention

A rule the codebase follows — naming, patterns, and where things live.

## Adding a page: create it under `src/app/(pages)/` and list it in `src/content/pages.ts`

- **What:** New content pages are `src/app/(pages)/<route>/page.tsx` with plain headings and paragraphs, plus an optional `metadata` export (title becomes `"<title> | <brand>"`). Navigation entries come only from the `sitePages` list in `src/content/pages.ts`; the header nav and the landing cards both render from it.
- **Why:** Keeps every page inside the shared frame and style with zero per-page styling, and keeps navigation in one list.
- **Where:** `README.md` ("Add a new page"), `src/content/pages.ts`, `src/components/Header.tsx`, `src/components/ExploreSection.tsx`.
- **Learned:** 2026-10-20.

## Only use theme tokens in class names

- **What:** Use `bg-brand`, `text-muted`, `text-foreground`, `bg-surface`, `border-border`, `max-w-content`, `py-section`, `rounded-card`, `rounded-button`, `shadow-card` and the `text-xs`…`text-6xl` scale. Default Tailwind colors (`bg-blue-500`) do not exist in this project.
- **Why:** The theme removes Tailwind's default palette and type scale so the whole app reads from one place.
- **Where:** `src/brand/theme.css`.
- **Learned:** 2026-10-20.

## Verificación estándar del proyecto antes de entregar: npm run build, tsc --noEmit, npm ru…

What: Verificación estándar del proyecto antes de entregar: npm run build, tsc --noEmit, npm run lint, más Playwright (375/768/1280 px, sin overflow horizontal, recorrido con Tab con anillo de foco de 3px en color de marca) y Lighthouse con accesibilidad ≥90 (resultado 100) · Why: — · Where: proyecto completo <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-11 -->

## Las reglas globales personalizadas (p

What: Las reglas globales personalizadas (p. ej. estilos de texto de .page-content) van en @layer base en globals.css; el focus ring global es :focus-visible con outline 3px solid var(--color-brand) y offset 3px · Why: — · Where: src/app/globals.css <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-13 -->

## Los componentes UI compartidos (Container, ButtonLink, Card, Header, Footer, Hero, Explor…

What: Los componentes UI compartidos (Container, ButtonLink, Card, Header, Footer, Hero, ExploreSection, Notice) viven en src/components/ y el helper de clases cn en src/lib/cn.ts; Container impone el ancho de contenido consistente · Why: — · Where: src/components/, src/lib/cn.ts <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-15 -->
