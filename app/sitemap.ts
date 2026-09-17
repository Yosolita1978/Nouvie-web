import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { urlFor } from "@/lib/seo";
import { indexablePages } from "@/lib/site-urls";
import { getBuildDate } from "@/lib/build-date";

// The sitemap used to submit unprefixed URLs (/productos/<slug>). Those are not
// pages — they 307-redirect to /es/productos/<slug>. Submitting redirects made
// Google index a different URL pattern per product.
//
// Now every entry is a real 200 URL, and each one carries its hreflang
// alternates so Google treats /es and /en as the same page in two languages
// instead of as competitors.
//
// The page list lives in lib/site-urls.ts, shared with the IndexNow route so
// the two submission paths cannot drift.

type Href = Parameters<typeof urlFor>[1];

/** hreflang block shared by both locale variants of the same page. */
function languagesFor(href: Href): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = urlFor(locale, href);
  }
  languages["x-default"] = urlFor(routing.defaultLocale, href);
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // The last deploy, not the moment Google reads the sitemap. A date that is
  // always "now" says every page changed on every crawl, and Google learns to
  // ignore it.
  const lastModified = getBuildDate();

  return indexablePages().flatMap((page) => {
    const languages = languagesFor(page.href);

    return routing.locales.map((locale) => ({
      url: urlFor(locale, page.href),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages },
    }));
  });
}
