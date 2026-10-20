import { brand } from "@/brand/brand";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

/** Landing page hero: headline, supporting line and main call to action. */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-surface py-section-sm sm:py-section">
      <Container className="max-w-3xl text-center">
        <p className="mb-4 inline-block rounded-button bg-brand-soft px-3 py-1 text-sm font-semibold text-brand">
          {brand.hero.eyebrow}
        </p>
        <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl">
          {brand.hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{brand.hero.supportingLine}</p>
        <div className="mt-10">
          <ButtonLink href={brand.hero.cta.href}>{brand.hero.cta.label}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
