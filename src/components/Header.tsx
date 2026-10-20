import Link from "next/link";
import { brand } from "@/brand/brand";
import { sitePages } from "@/content/pages";
import { Container } from "@/components/Container";

/** Site header shown on every page: product name plus links from the page list. */
export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <Link href="/" className="text-lg font-bold text-foreground">
          {brand.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {sitePages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-brand"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
