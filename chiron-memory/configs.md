# config

Setup and configuration — env vars, flags, how to run the project.

## Running the web app

- **What:** `npm install`, then `npm run dev` (http://localhost:3000), `npm run build` for production (runs TypeScript), `npm run start` to serve the build, `npm run lint` for ESLint (flat config, `next lint` no longer exists in Next 16). `npx tsc --noEmit` for a standalone type check. Node 20+.
- **Why:** Standard Next 16 scripts; `cacheComponents` and `partialPrefetching` are enabled in `next.config.ts`, and Tailwind is wired through the `@tailwindcss/turbopack` loader rather than PostCSS.
- **Where:** `package.json`, `next.config.ts`, `README.md`.
- **Learned:** 2026-10-20.

## `next dev` rewrites `AGENTS.md`

- **What:** Running `next dev` appends a `<!-- BEGIN:nextjs-agent-rules -->` block to `AGENTS.md` (which also holds the chiron-memory block). Keep both; committing the Next block stops it reappearing as a diff.
- **Why:** Next 16 generates agent guidance pointing to `node_modules/next/dist/docs/`.
- **Where:** `AGENTS.md`.
- **Learned:** 2026-10-20.

## El proyecto usa Next.js 16.4 (App Router, cacheComponents y partialPrefetching activados)…

What: El proyecto usa Next.js 16.4 (App Router, cacheComponents y partialPrefetching activados), React 19, Tailwind CSS 4 con @tailwindcss/turbopack, TypeScript 5 y ESLint 9 flat config; scripts dev/build/start/lint · Why: create-next-app se niega a correr en un directorio no vacío, así que se generó en una carpeta scratch y se copió al repo sin tocar archivos de Chiron · Where: package.json, next.config.ts, eslint.config.mjs <!-- id: 975a6ad3-abf5-46f3-a0b6-af4662167412-8 -->
