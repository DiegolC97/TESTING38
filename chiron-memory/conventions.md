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
