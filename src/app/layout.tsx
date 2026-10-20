import type { Metadata } from "next";
import { brand } from "@/brand/brand";
import { brandSans } from "@/brand/fonts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

/** Default metadata. Pages that export their own `title` get "<title> | <brand>". */
export const metadata: Metadata = {
  title: {
    default: brand.seo.defaultTitle,
    template: brand.seo.titleTemplate,
  },
  description: brand.seo.description,
};

/** Root layout: the shared frame every page renders inside. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${brandSans.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-button focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-contrast"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
