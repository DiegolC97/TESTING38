import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brand } from "@/brand/brand";
import { Notice } from "@/components/Notice";
import { sitePages } from "@/content/pages";

/**
 * Placeholder route for every page listed in src/content/pages.ts that has no
 * real page yet. Once you add src/app/<name>/page.tsx, that file wins over this
 * catch-all automatically. Any other URL falls through to not-found.tsx.
 */

type Params = { slug: string[] };

function findPage(slug: string[]) {
  const href = `/${slug.join("/")}`;
  return sitePages.find((page) => page.href === href);
}

export function generateStaticParams(): Params[] {
  return sitePages.map((page) => ({ slug: page.href.replace(/^\//, "").split("/") }));
}

export async function generateMetadata({ params }: PageProps<"/[...slug]">): Promise<Metadata> {
  const page = findPage((await params).slug);
  return page ? { title: page.title, description: page.description } : {};
}

export default async function ComingSoonPage({ params }: PageProps<"/[...slug]">) {
  const page = findPage((await params).slug);
  if (!page) notFound();

  return (
    <Notice
      eyebrow={brand.comingSoon.eyebrow}
      heading={brand.comingSoon.heading.replace("{title}", page.title)}
      body={brand.comingSoon.body}
      cta={brand.comingSoon.cta}
    />
  );
}
