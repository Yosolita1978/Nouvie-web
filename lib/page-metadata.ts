// Builds a page's Metadata from the `meta` namespace in messages/{es,en}.json.
//
// These eight pages used to hardcode Spanish strings inside generateMetadata,
// so /en served the same title and description as /es — eight duplicate pairs
// on top of the 33 product ones. Reading them through getTranslations makes
// each locale distinct, the way catalogo/page.tsx already did.

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { alternatesFor, urlFor, toLocale } from "./seo";

type Href = Parameters<typeof urlFor>[1];

interface Options {
  /** Key under `meta` in the message files, e.g. "nosotros". */
  key: string;
  /** Route name from i18n/routing.ts. */
  href: Href;
  /** Locale param straight from the page's `params`. */
  locale: string;
  /**
   * Skip the root layout's " | Nouvie Colombia" template. Use it when the
   * translated title already carries the brand.
   */
  absoluteTitle?: boolean;
}

export async function buildPageMetadata({
  key,
  href,
  locale: localeParam,
  absoluteTitle = false,
}: Options): Promise<Metadata> {
  const locale = toLocale(localeParam);
  const t = await getTranslations({ locale, namespace: `meta.${key}` });

  const title = t("title");

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    alternates: alternatesFor(locale, href),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: urlFor(locale, href),
    },
  };
}
