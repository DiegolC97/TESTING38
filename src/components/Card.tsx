import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href: string;
};

/** A clickable card linking to another page. The whole card is one link. */
export function Card({ title, description, href }: CardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-card border border-border bg-background p-6 shadow-card transition-colors hover:border-brand"
    >
      <h3 className="text-xl">{title}</h3>
      <p className="mt-2 grow text-base text-muted">{description}</p>
      <span className="mt-6 text-sm font-semibold text-brand">
        Visit {title}
        <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
