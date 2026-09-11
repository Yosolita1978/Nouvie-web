// The single list of indexable pages.
//
// app/sitemap.ts and the IndexNow submission route both read from here, so the
// URLs we submit to Google and the URLs we ping to Bing can never drift apart.
//
// /catalogo is deliberately absent: it is the printable catalogue and is
// noindex.

import type { MetadataRoute } from "next";
import { getAllProducts } from "./product-data";
import { routing } from "@/i18n/routing";
import { urlFor } from "./seo";

type Href = Parameters<typeof urlFor>[1];
type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

export interface IndexablePage {
  href: Href;
  changeFrequency: ChangeFrequency;
  priority: number;
}

const STATIC_PAGES: IndexablePage[] = [
  { href: "/", changeFrequency: "weekly", priority: 1 },
  { href: "/productos", changeFrequency: "weekly", priority: 0.9 },
  // The three product lines. They sit above the individual products (0.8) and
  // just below the full catalogue, because each one is a landing page for a
  // whole category rather than a single item.
  { href: "/productos/hogar", changeFrequency: "weekly", priority: 0.85 },
  { href: "/productos/capilar", changeFrequency: "weekly", priority: 0.85 },
  { href: "/productos/institucional", changeFrequency: "weekly", priority: 0.85 },
  { href: "/nosotros", changeFrequency: "monthly", priority: 0.8 },
  { href: "/filosofia", changeFrequency: "monthly", priority: 0.7 },
  { href: "/testimonios", changeFrequency: "weekly", priority: 0.8 },
  { href: "/promomix", changeFrequency: "weekly", priority: 0.7 },
  { href: "/bioptimo", changeFrequency: "monthly", priority: 0.7 },
  { href: "/contacto", changeFrequency: "monthly", priority: 0.7 },
];

/** Every indexable page, once per route (not per locale). */
export function indexablePages(): IndexablePage[] {
  const products = getAllProducts().map((product) => ({
    href: {
      pathname: "/productos/[slug]",
      params: { slug: product.slug },
    } as Href,
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.8,
  }));

  return [...STATIC_PAGES, ...products];
}

/** Every indexable URL, one per locale per page. Always a 200, never a redirect. */
export function allIndexableUrls(): string[] {
  return indexablePages().flatMap((page) =>
    routing.locales.map((locale) => urlFor(locale, page.href))
  );
}
