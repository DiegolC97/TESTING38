import { brand } from "@/brand/brand";
import { sitePages } from "@/content/pages";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

/** Landing page section that links to every page in the shared page list. */
export function ExploreSection() {
  return (
    <section id="explore" aria-labelledby="explore-heading" className="py-section-sm sm:py-section">
      <Container>
        <div className="max-w-2xl">
          <h2 id="explore-heading" className="text-3xl sm:text-4xl">
            {brand.explore.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{brand.explore.intro}</p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sitePages.map((page) => (
            <li key={page.href}>
              <Card title={page.title} description={page.description} href={page.href} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
