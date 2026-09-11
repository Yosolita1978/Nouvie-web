// Shared rendering for the three product-line pages.
//
// Each line has its own route (/productos/hogar, /productos/capilar,
// /productos/institucional), so each one gets its own title, description,
// canonical and written copy instead of sharing /productos with a ?categoria=
// query param.
//
// The per-line layouts live in components/product-lines/. Each one renders its
// own <h1>, so this file does not add a heading of its own.

import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { alternatesFor, urlFor, toLocale } from "@/lib/seo";
import { getProductsByCategory } from "@/lib/products";
import { getTranslatedProducts } from "@/lib/get-translated-product";
import { getTranslatedCategory } from "@/lib/category-data-en";
import { lineRouteFor } from "@/lib/category-data";
import type { ProductCategory } from "@/lib/product-data";
import { SeoContentBlock } from "@/components/ui/SeoContentBlock";
import { LineNav } from "@/components/product-lines/LineNav";
import { HogarLine } from "@/components/product-lines/HogarLine";
import { CapilarLine } from "@/components/product-lines/CapilarLine";
import { InstitucionalLine } from "@/components/product-lines/InstitucionalLine";

export async function categoryMetadata(
  category: ProductCategory,
  localeParam: string
): Promise<Metadata> {
  const locale = toLocale(localeParam);
  const data = getTranslatedCategory(category, locale);
  const href = lineRouteFor[category];

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: alternatesFor(locale, href),
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: urlFor(locale, href),
      images: [
        {
          url: data.socialImage,
          width: data.socialImageWidth,
          height: data.socialImageHeight,
          alt: data.h1,
        },
      ],
    },
  };
}

export async function CategoryPage({ category }: { category: ProductCategory }) {
  const locale = await getLocale();
  const t = await getTranslations("products");
  const data = getTranslatedCategory(category, locale);
  // Translate before rendering. The old client filter passed untranslated
  // products to the hogar and institucional grids, so /en showed Spanish names.
  const products = getTranslatedProducts(await getProductsByCategory(category), locale);

  const pageUrl = urlFor(toLocale(locale), lineRouteFor[category]);

  // CollectionPage + ItemList: tells search engines this URL is a category
  // listing and which products are on it, in the order they are rendered.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.h1,
    description: data.metaDescription,
    url: pageUrl,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: urlFor(toLocale(locale), {
          pathname: "/productos/[slug]",
          params: { slug: product.slug },
        }),
      })),
    },
  };

  // Mirrors the visible LineNav: catalogue, then this line.
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("common.breadcrumbProducts"),
        item: urlFor(toLocale(locale), "/productos"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t(`filters.${category}`),
        item: pageUrl,
      },
    ],
  };

  const faqs = data.seoContent.faqs;
  const faqSchema =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <LineNav current={category} />

      <main className="flex-1">
        {category === "hogar" && <HogarLine products={products} />}
        {category === "capilar" && <CapilarLine products={products} />}
        {category === "institucional" && <InstitucionalLine products={products} />}

        <SeoContentBlock seoContent={data.seoContent} faqHeading={t("detail.faqTitle")} />
      </main>
    </div>
  );
}
