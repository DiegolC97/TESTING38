# gotcha

A non-obvious pitfall or trap, learned the hard way.

## The Turbopack Tailwind loader drops custom `@layer components` blocks

- **What:** With Next 16's `@tailwindcss/turbopack` loader, a hand-written `@layer components { ... }` block in `globals.css` was absent from the built CSS, while the Tailwind CLI kept it. Putting the same rules in `@layer base` works.
- **Why:** Unknown loader behaviour (likely treats the components layer as utility-only). Base layer is also the right precedence: Tailwind utilities still override it.
- **Where:** `src/app/globals.css` (`.page-content` rules), `next.config.ts` turbopack rules.
- **Learned:** 2026-10-20, while adding default text styles for content pages.

## `notFound()` from the catch-all answers with HTTP 200

- **What:** With `cacheComponents` enabled, `src/app/[...slug]/page.tsx` renders unknown params on request inside a streamed shell, so `notFound()` happens after the response started: the not-found page renders with `noindex` but status 200 (documented Next behaviour). Listed routes are prerendered and answer 200 by design.
- **Why:** Streaming responses fix the status before the page body runs. A real 404 status would need a check in `proxy.ts` before streaming.
- **Where:** `src/app/[...slug]/page.tsx`, Next docs `01-app/03-api-reference/03-file-conventions/loading.md` (Status codes).
- **Learned:** 2026-10-20.

## `transition-colors` also animates `outline-color`

- **What:** Reading `getComputedStyle(el).outlineColor` right after focusing an element with `transition-colors` returns the pre-transition color (currentColor), not the brand focus ring. The ring is correct once the 150 ms transition ends.
- **Why:** Tailwind's `transition-colors` includes `outline-color`. Confused an automated focus-ring check.
- **Where:** `:focus-visible` rule in `src/app/globals.css`; `ButtonLink`, `Card`, `Header` use `transition-colors`.
- **Learned:** 2026-10-20.

## `dynamicParams` is rejected under Cache Components

- **What:** Exporting `dynamicParams = false` from a route fails the build when `cacheComponents: true`. Call `notFound()` in the page for params not in `generateStaticParams` instead.
- **Why:** Next 16 removed that segment config for Cache Components routes.
- **Where:** `src/app/[...slug]/page.tsx`; Next docs `02-guides/migrating-to-cache-components.md`.
- **Learned:** 2026-10-20.

## Ejecutar next dev añade automáticamente un bloque de Next.js a AGENTS.md

What: Ejecutar next dev añade automáticamente un bloque de Next.js a AGENTS.md · Why: — · Where: AGENTS.md · Learned: Hay que commitear ese cambio cuando aparezca <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-10 -->

## El repo trae un skill de proyecto .claude/skills/test1 ('create test.txt files auto numbe…

What: El repo trae un skill de proyecto .claude/skills/test1 ('create test.txt files auto numbered' cuando corre un work order) que parece un fixture de prueba y se decidió no ejecutar · Why: No está relacionado con el work order · Where: .claude/skills/test1/SKILL.md <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-12 -->

## El loader Tailwind de Turbopack (@tailwindcss/turbopack) descartó en silencio un bloque @…

What: El loader Tailwind de Turbopack (@tailwindcss/turbopack) descartó en silencio un bloque @layer components personalizado en globals.css, y las reglas .page-content no llegaron al CSS compilado · Why: Compilando con la CLI de Tailwind sí aparecían, por lo que el problema es del loader en el build de Next · Where: src/app/globals.css · Learned: Mantener las reglas globales personalizadas en @layer base. <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-6 -->

## Bajo Cache Components, las URLs desconocidas renderizan el not-found con HTTP 200 más noi…

What: Bajo Cache Components, las URLs desconocidas renderizan el not-found con HTTP 200 más noindex en lugar de 404 · Why: Es comportamiento documentado del streaming de Next.js; un status 404 real requeriría un check en proxy.ts · Where: src/app/not-found.tsx · Learned: Si se necesita 404 verdadero, agregar proxy.ts. <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-7 -->
