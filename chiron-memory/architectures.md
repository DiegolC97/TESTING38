# architecture

How the system is put together — layers, boundaries, and how data flows.

## Page frame and style layering
- **What:** `src/app/layout.tsx` is the single root frame: skip link, `Header`, `<main>`, `Footer`, default metadata with a title template. Style flows from `src/brand/theme.css` (tokens) → `src/app/globals.css` (base rules, focus ring, `.page-content` text rhythm) → components in `src/components/` → pages. Navigation data flows from `src/content/pages.ts` into `Header`, `ExploreSection` and the `[...slug]` placeholder route.
- **Why:** One frame and one token source mean a new page gets the look without styling; one list means adding a destination is a one-line change.
- **Where:** `src/app/layout.tsx`, `src/brand/`, `src/components/`, `src/content/pages.ts`.
- **Learned:** 2026-10-20.
