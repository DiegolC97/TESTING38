import { brand } from "@/brand/brand";
import { Container } from "@/components/Container";

/** Site footer shown on every page. */
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-foreground">{brand.name}</p>
        <p>{brand.footer.text}</p>
      </Container>
    </footer>
  );
}
