// Canonical + hreflang helpers.
//
// The bug this fixes: every page used to declare
//   canonical: https://www.nouvie.co/productos/<slug>
// on BOTH locales. That URL is not a page — it 307-redirects to
// /es/productos/<slug>. Google ignores a canonical that points at a redirect,
// so it indexed /es/..., /en/... and the unprefixed URL as three competing
// pages, and there was no hreflang telling it they are the same product in two
// languages.
//
// Rules now:
//   - every page is its own canonical (self-referencing, always a 200)
//   - every page lists both languages via hreflang
//   - x-default points to Spanish, the language Nouvie actually sells in

import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = "https://www.nouvie.co";

/** Any route declared in i18n/routing.ts pathnames. */
type Href = Parameters<typeof getPathname>[0]["href"];

/** Absolute, locale-prefixed URL for a route — always a 200, never a redirect. */
export function urlFor(locale: Locale, href: Href): string {
  return `${SITE_URL}${getPathname({ locale, href })}`;
}

/**
 * `alternates` for a page's metadata: self-canonical plus one hreflang per
 * locale. Spread the result into the Metadata object.
 */
export function alternatesFor(locale: Locale, href: Href) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = urlFor(l, href);
  }

  return {
    canonical: urlFor(locale, href),
    languages: {
      ...languages,
      // Spanish is the default for anyone Google can't place by language.
      "x-default": urlFor(routing.defaultLocale, href),
    },
  };
}

/** Narrow an incoming route param to a real locale, falling back to Spanish. */
export function toLocale(value: string): Locale {
  return routing.locales.includes(value as Locale)
    ? (value as Locale)
    : routing.defaultLocale;
}
