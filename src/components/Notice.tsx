import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

type NoticeProps = {
  eyebrow: string;
  heading: string;
  body: string;
  cta: { label: string; href: string };
};

/** Centered message page used for "coming soon" and "not found" states. */
export function Notice({ eyebrow, heading, body, cta }: NoticeProps) {
  return (
    <section aria-labelledby="notice-heading" className="py-section-sm sm:py-section">
      <Container className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold tracking-wide text-brand uppercase">{eyebrow}</p>
        <h1 id="notice-heading" className="text-4xl sm:text-5xl">
          {heading}
        </h1>
        <p className="mt-6 text-lg text-muted">{body}</p>
        <div className="mt-10">
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
