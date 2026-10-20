# architecture

How the system is put together — layers, boundaries, and how data flows.

## Page frame and style layering

- **What:** `src/app/layout.tsx` is the single root frame: skip link, `Header`, `<main>`, `Footer`, default metadata with a title template. Style flows from `src/brand/theme.css` (tokens) → `src/app/globals.css` (base rules, focus ring, `.page-content` text rhythm) → components in `src/components/` → pages. Navigation data flows from `src/content/pages.ts` into `Header`, `ExploreSection` and the `[...slug]` placeholder route.
- **Why:** One frame and one token source mean a new page gets the look without styling; one list means adding a destination is a one-line change.
- **Where:** `src/app/layout.tsx`, `src/brand/`, `src/components/`, `src/content/pages.ts`.
- **Learned:** 2026-10-20.

## La lista única de páginas futuras (Features, About, Contact con title, description, href)…

What: La lista única de páginas futuras (Features, About, Contact con title, description, href) está en src/content/pages.ts y alimenta el nav del header, las cards de la landing y los static params de la ruta catch-all 'coming soon' · Why: Agregar o quitar una página requiere cambiar solo esa lista · Where: src/content/pages.ts, src/components/Header.tsx, src/components/ExploreSection.tsx, src/app/[...slug]/page.tsx <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-2 -->

## Un route group (pages) con su propio layout da a las páginas de contenido el ancho de con…

What: Un route group (pages) con su propio layout da a las páginas de contenido el ancho de contenedor, espaciado vertical y estilos por defecto de h1/h2/h3/p/listas/links; las páginas nuevas van en src/app/(pages)/ sin estilos propios · Why: El layout raíz no puede añadir un contenedor sin romper secciones full-bleed como el hero, y una página en blanco debe verse bien sin estilos propios. Descartado: padding en el layout raíz, o exigir un componente <Page> en cada página · Where: src/app/(pages)/layout.tsx, src/app/globals.css (.page-content) <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-4 -->

## El layout raíz envuelve toda ruta con skip link, Header, main y Footer, y define metadata…

What: El layout raíz envuelve toda ruta con skip link, Header, main y Footer, y define metadata por defecto con title template 'Page | Brand' que heredan las páginas nuevas · Why: — · Where: src/app/layout.tsx, src/components/ <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-5 -->
