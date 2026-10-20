import type { ReactNode } from "react";
import { Container } from "@/components/Container";

/**
 * Layout for ordinary content pages. Every page placed under src/app/(pages)/
 * gets the shared content width, vertical rhythm and text styles for free.
 * The "(pages)" folder name never appears in the URL.
 */
export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <Container className="page-content max-w-3xl py-section-sm sm:py-section">{children}</Container>
  );
}
