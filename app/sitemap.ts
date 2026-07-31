import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/product-data";
import { routing } from "@/i18n/routing";
import { urlFor } from "@/lib/seo";

// The sitemap used to submit unprefixed URLs (/productos/<slug>). Those are not
// pages — they 307-redirect to /es/productos/<slug>. Submitting redirects made
// Google index a different URL pattern per product.
//
// Now every entry is a real 200 URL, and each one carries its hreflang
// alternates so Google treats /es and /en as the same page in two languages
// instead of as competitors.
//
// /catalogo is deliberately absent: it is the printable catalogue and is
// noindex.

type Href = Parameters<typeof urlFor>[1];

const STATIC_PAGES: { href: Href; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { href: "/", changeFrequency: "weekly", priority: 1 },
  { href: "/productos", changeFrequency: "weekly", priority: 0.9 },
  { href: "/nosotros", changeFrequency: "monthly", priority: 0.8 },
  { href: "/filosofia", changeFrequency: "monthly", priority: 0.7 },
  { href: "/testimonios", changeFrequency: "weekly", priority: 0.8 },
  { href: "/promomix", changeFrequency: "weekly", priority: 0.7 },
  { href: "/bioptimo", changeFrequency: "monthly", priority: 0.7 },
  { href: "/contacto", changeFrequency: "monthly", priority: 0.7 },
];

/** hreflang block shared by both locale variants of the same page. */
function languagesFor(href: Href): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = urlFor(locale, href);
  }
  languages["x-default"] = urlFor(routing.defaultLocale, href);
  return languages;
}

function entriesFor(
  href: Href,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
  lastModified: Date
): MetadataRoute.Sitemap {
  const languages = languagesFor(href);
  return routing.locales.map((locale) => ({
    url: urlFor(locale, href),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC_PAGES.flatMap((page) =>
    entriesFor(page.href, page.changeFrequency, page.priority, lastModified)
  );

  const productEntries = getAllProducts().flatMap((product) =>
    entriesFor(
      { pathname: "/productos/[slug]", params: { slug: product.slug } },
      "weekly",
      0.8,
      lastModified
    )
  );

  return [...staticEntries, ...productEntries];
}
