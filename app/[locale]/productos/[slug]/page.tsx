import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import { getTranslatedProduct } from "@/lib/get-translated-product";
import type { Metadata } from "next";
import { alternatesFor, urlFor, toLocale, SITE_URL } from "@/lib/seo";
import { getProductBySlug as getProductBySlugFromDb } from "@/lib/products";
import {
  getProductBySlug as getProductBySlugStatic,
  categoryNames,
} from "@/lib/product-data";
import type { SeoContent } from "@/lib/product-data";
import { ProductGallery } from "@/components/ui/ProductGallery";

export const dynamic = 'force-dynamic';

// Format price for Colombian Pesos
function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

const seoOverrides: Record<string, { title: string; description: string }> = {
  "shampoo-suave-y-liso": {
    title: "Shampoo Sin Sal para Cabello Liso",
    description:
      "Shampoo sin sal Liso y Sedoso de Nouvie con Bio Keratina. Sin sulfatos, parabenos ni colorantes. Alisa, da brillo y reduce el frizz. Envíos a toda Colombia.",
  },
  "tratamiento-revitalizante": {
    title: "Kit Revitalizante Anticaída con Argán",
    description:
      "Kit anticaída de 2 pasos con aceite de argán, keratina hidrolizada y prebióticos: shampoo sin sal y loción para moldear. Frena la caída y fortalece la raíz.",
  },
  "tratamiento-suave-y-liso": {
    title: "Kit Capilar Fortalecedor con Bio Keratina",
    description:
      "Kit de 3 pasos para cabello con frizz y opaco: shampoo sin sal, mascarilla y loción con Bio Keratina, kiwi y açaí. Sin sulfatos ni parabenos. Envíos a Colombia.",
  },
  "tratamiento-reparacion-intensa": {
    title: "Kit Capilar Reparación Intensa con Karité",
    description:
      "Kit de 3 pasos para cabello maltratado, seco o teñido: shampoo sin sal, mascarilla y loción con manteca de karité. Sin sulfatos ni parabenos. Envíos a Colombia.",
  },
  "locion-reparacion-intensa": {
    title: "Loción Reparadora - Cabello Dañado",
    description:
      "Loción reparadora capilar Reparación Intensa de Nouvie. Tratamiento para cabello dañado con manteca de Karité que hidrata y sella. Pídelo por WhatsApp.",
  },
  "limpia-vidrios-concentrado": {
    title: "Limpia Vidrios y Alfombras Natural",
    description:
      "Limpia vidrios y alfombras natural sin tóxicos. Limpiador concentrado biodegradable para vidrios, espejos, tapicería y telas. Pídelo por WhatsApp.",
  },
  "desengrasante-bioptimo-500ml": {
    title: "Bioptimo - Desengrasante Multiusos 500 ml",
    description:
      "Bioptimo 500 ml, desengrasante multiusos listo para usar. Reemplaza 8 productos convencionales con poder limpiador ecológico. Pídelo por WhatsApp.",
  },
  "lustra-muebles-concentrado": {
    title: "Lustramuebles Natural para Madera",
    description:
      "Lustramuebles natural y biodegradable de Nouvie para madera oscura, muebles antiguos y mesas de comedor. Sin tóxicos, seguro para mascotas. Pídelo por WhatsApp.",
  },
  "limpia-pisos-concentrado": {
    title: "Limpiapisos Natural Superficies Delicadas",
    description:
      "Limpiapisos natural biodegradable para madera, porcelanato, baldosa, laminado y vinílico. Sin químicos tóxicos, seguro para mascotas y niños. Envíos a Colombia.",
  },
  "detergente-neutro": {
    title: "Detergente Líquido Hipoalergénico",
    description:
      "Detergente líquido hipoalergénico Nouvie, sin fragancia ni colorantes. Para piel sensible, dermatitis, bebés y personas alérgicas. Pídelo por WhatsApp.",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale: rawLocale } = await params;
  const locale = toLocale(rawLocale);
  const product = getProductBySlugStatic(slug);

  if (!product) {
    const t = await getTranslations('products');
    return { title: t('detail.notFound') };
  }

  const categoryKeywords: Record<string, string[]> = {
    hogar: ["limpieza hogar ecológica", "producto biodegradable", "limpieza sin tóxicos"],
    capilar: ["tratamiento capilar natural", "sin sulfatos", "sin parabenos", "cabello saludable"],
    institucional: ["limpieza profesional", "aseo institucional", "biodegradable industrial"],
  };

  const keywords = [
    product.name,
    "Nouvie Colombia",
    ...categoryKeywords[product.category] || [],
  ];

  const override = seoOverrides[slug];

  return {
    title: override?.title ?? `${product.name} - ${categoryNames[product.category]}`,
    description:
      override?.description ??
      `${product.tagline}. ${product.description?.slice(0, 120) || ""} Producto 100% biodegradable y libre de químicos tóxicos. Compra en Nouvie Colombia.`,
    keywords,
    alternates: alternatesFor(locale, {
      pathname: "/productos/[slug]",
      params: { slug },
    }),
    openGraph: {
      title: `${product.name} | Nouvie Colombia`,
      description: product.tagline,
      url: urlFor(locale, { pathname: "/productos/[slug]", params: { slug } }),
      images: [
        {
          url: product.socialImage ?? product.image,
          width: product.imageWidth ?? 800,
          height: product.imageHeight ?? 800,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.tagline,
      images: [product.socialImage ?? product.image],
    },
  };
}

type LinkHref = Parameters<typeof Link>[0]["href"];

// Render plain text with inline `[anchor](url)` markdown links.
// Used by SeoContentBlock so seoContent prose can carry one or more inline links
// without pulling in a markdown dependency.
function renderTextWithLinks(
  text: string,
  linkClassName = "text-nouvie-navy underline underline-offset-2 hover:text-nouvie-turquoise transition-colors"
): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={`inline-link-${key++}`}
        href={match[2] as LinkHref}
        className={linkClassName}
      >
        {match[1]}
      </Link>
    );
    lastIndex = linkRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

function SeoContentBlock({ seoContent }: { seoContent?: SeoContent }) {
  if (!seoContent) return null;
  const { intro, sections, audienceBlocks, faqs } = seoContent;
  if (!intro && !sections?.length && !audienceBlocks?.length && !faqs?.length) return null;

  return (
    <section className="px-4 py-12 md:px-8 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-10">
        {intro && (
          <p className="text-gray-700 text-lg leading-relaxed">{renderTextWithLinks(intro)}</p>
        )}
        {sections?.map((s, i) => (
          <div key={`section-${i}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{s.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{renderTextWithLinks(s.body)}</p>
          </div>
        ))}
        {audienceBlocks && audienceBlocks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audienceBlocks.map((b, i) => (
              <div key={`aud-${i}`} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{b.heading}</h3>
                <p className="text-gray-700 leading-relaxed">{renderTextWithLinks(b.body)}</p>
              </div>
            ))}
          </div>
        )}
        {faqs && faqs.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
            {faqs.map((f, i) => (
              <details key={`faq-${i}`} className="bg-gray-50 rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">{f.question}</summary>
                <p className="text-gray-700 leading-relaxed mt-3">{renderTextWithLinks(f.answer)}</p>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default async function ProductoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const rawProduct = await getProductBySlugFromDb(slug);

  if (!rawProduct) {
    notFound();
  }

  const locale = await getLocale();
  const product = getTranslatedProduct(rawProduct, locale);
  const t = await getTranslations('products');
  const hasPrice = product.price !== undefined && product.hasDbPrice;

  // Look up refill product if this product has one
  const refillProduct = product.refillSlug
    ? await getProductBySlugFromDb(product.refillSlug).then(p => p ? getTranslatedProduct(p, locale) : null)
    : null;

  const canonicalUrl = urlFor(toLocale(locale), {
    pathname: "/productos/[slug]",
    params: { slug },
  });

  // Every gallery photo, so Google can pick the best one for the result.
  const schemaImages = [
    `${SITE_URL}${product.socialImage ?? product.image}`,
    ...(product.gallery?.map((img) => `${SITE_URL}${img.src}`) ?? []),
  ];

  // Product JSON-LD (offers omitted when no DB price — no fallback price per project policy)
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    description: product.description ?? product.tagline,
    sku: product.slug,
    brand: { "@type": "Brand", name: "Nouvie" },
    image: schemaImages,
    ...(hasPrice && product.price !== undefined && {
      offers: {
        "@type": "Offer",
        priceCurrency: "COP",
        price: product.price.toString(),
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url: canonicalUrl,
      },
    }),
  };

  // Short display name, shared by the visible breadcrumb and its schema —
  // Google requires the two to match.
  const breadcrumbName = product.seoContent?.h1Override ?? product.name;

  // BreadcrumbList — mirrors the visible breadcrumb at the top of the page.
  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t('common.breadcrumbProducts'),
        item: urlFor(toLocale(locale), { pathname: "/productos" }),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t(`filters.${product.category}`),
        item: `${urlFor(toLocale(locale), { pathname: "/productos" })}?categoria=${product.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: breadcrumbName,
        item: canonicalUrl,
      },
    ],
  };

  // VideoObject — only when the product actually has a video.
  const videoSchema = product.video
    ? {
        "@context": "https://schema.org/",
        "@type": "VideoObject",
        name: `${product.name} - ${product.video.caption ?? t('detail.capilar.videoTitle')}`,
        description: product.video.caption ?? product.tagline,
        thumbnailUrl: product.video.poster
          ? `${SITE_URL}${product.video.poster}`
          : `${SITE_URL}${product.socialImage ?? product.image}`,
        contentUrl: product.video.src,
        ...(product.video.uploadDate && { uploadDate: product.video.uploadDate }),
        publisher: { "@type": "Organization", name: "Nouvie" },
      }
    : null;

  // FAQPage JSON-LD — only emitted when the product actually has FAQ content.
  // Inline markdown links are flattened to their anchor text; schema takes plain prose.
  const faqSchema =
    product.seoContent?.faqs && product.seoContent.faqs.length > 0
      ? {
          "@context": "https://schema.org/",
          "@type": "FAQPage",
          mainEntity: product.seoContent.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
            },
          })),
        }
      : null;

  // ============================================
  // HOGAR LAYOUT - Warm, Family-Friendly
  // ============================================
  if (product.category === "hogar") {
    const galleryImages = product.gallery ?? [
      { src: product.image, fit: "contain" as const },
    ];
    const hogarLinkClass = "text-rose-600 hover:text-rose-700 transition-colors";

    return (
      <div className="flex flex-col min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
        {/* Hero - Clean showcase */}
        <section className="bg-[#faf8f7] px-4 pt-5 pb-10 md:px-8 md:pt-8 md:pb-16">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-6 md:mb-10">
              <Link href="/productos" className="text-gray-500 hover:text-rose-600 transition-colors">
                {t('common.breadcrumbProducts')}
              </Link>
              <span className="text-gray-300">/</span>
              <Link
                href={{ pathname: '/productos', query: { categoria: product.category } }}
                className="text-gray-500 hover:text-rose-600 transition-colors"
              >
                {t(`filters.${product.category}`)}
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">{breadcrumbName}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Gallery */}
              <ProductGallery
                images={galleryImages}
                alt={product.name}
                badge={product.badge}
                ctaHref={`https://wa.me/573158326422?text=${encodeURIComponent(t('detail.whatsappMessage', { name: product.name }))}`}
                ctaLabel={t('common.orderHere')}
              />

              {/* Details */}
              <div className="lg:pt-2">
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-rose-600 mb-3">
                  {t('hogar.title')}
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-4">
                  {product.seoContent?.h1Override ?? product.name}
                </h1>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
                  {product.tagline}
                </p>

                {hasPrice && (
                  <div className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-4xl md:text-5xl font-black text-rose-600 tracking-tight">
                      {formatPrice(product.price!)}
                    </span>
                    {product.refillSlug && (
                      <span className="text-sm text-gray-400">
                        {t('detail.includesDispenser')}
                      </span>
                    )}
                  </div>
                )}

                <hr className="my-7 border-gray-200" />

                {/* Key benefits */}
                {product.benefits && product.benefits.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {product.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50">
                          <svg className="h-3 w-3 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-700 leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <a
                    href={`https://wa.me/573158326422?text=${encodeURIComponent(t('detail.whatsappMessage', { name: product.name }))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 font-semibold text-white shadow-lg shadow-rose-600/25 transition-all hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-600/30 min-h-[56px]"
                  >
                    {t('common.orderWhatsApp')}
                  </a>
                  {product.refillSlug && (
                    <a
                      href="#repuesto"
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50 min-h-[56px]"
                    >
                      {t('detail.refillTitle')}
                    </a>
                  )}
                </div>

                {/* Spec strip */}
                {product.specs && product.specs.length > 0 && (
                  <div className="mt-8 grid grid-cols-3 divide-x divide-gray-200 rounded-2xl border border-gray-200 bg-white">
                    {product.specs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="px-3 py-4 md:px-5">
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-1">
                          {spec.label}
                        </span>
                        <span className="block text-sm text-gray-900 leading-snug">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sobre este producto — description + SEO intro as one editorial block */}
        <section className="px-4 py-16 md:px-8 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                {t('detail.aboutProduct')}
              </h2>
              <span className="mt-4 block h-0.5 w-10 bg-rose-500" />
            </div>
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed">
              <p className="text-gray-800">{product.description}</p>
              {product.seoContent?.intro && (
                <p className="text-gray-500">
                  {renderTextWithLinks(product.seoContent.intro, hogarLinkClass)}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* SEO prose sections */}
        {product.seoContent?.sections?.map((s, i) => (
          <section key={`seo-section-${i}`} className="px-4 pb-16 md:px-8 md:pb-24 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                  {s.heading}
                </h2>
                <span className="mt-4 block h-0.5 w-10 bg-rose-500" />
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
                {renderTextWithLinks(s.body, hogarLinkClass)}
              </p>
            </div>
          </section>
        ))}

        {/* Usos — numbered grid */}
        {product.uses && product.uses.length > 0 && (
          <section className="px-4 py-16 md:px-8 md:py-24 bg-[#faf8f7]">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  {t('detail.uses')}
                </h2>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  {t('detail.versatility')} · {t('detail.usesMeta', { count: product.uses.length })}
                </span>
              </div>
              <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-gray-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
                {product.uses.map((use, i) => (
                  <div
                    key={i}
                    className="-ml-px -mt-px border-l border-t border-gray-200 p-6 md:p-8 lg:min-h-[170px]"
                  >
                    <span className="mb-4 block font-mono text-xs text-rose-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-snug text-gray-900">{use}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cómo preparar — numbered steps for dilutable products */}
        {product.steps && product.steps.length > 0 && (
          <section className="px-4 py-16 md:px-8 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  {t('detail.howToPrepare')}
                </h2>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  {t('detail.preparationLabel')}
                </span>
              </div>
              <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-gray-200 bg-white sm:grid-cols-3">
                {product.steps.map((s) => (
                  <div
                    key={s.step}
                    className="-ml-px -mt-px border-l border-t border-gray-200 p-6 md:p-8"
                  >
                    <span className="mb-4 block font-mono text-xs text-rose-500">
                      {String(s.step).padStart(2, "0")}
                    </span>
                    <h3 className="mb-2 font-semibold text-gray-900">{s.name}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{s.instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Modos de uso / Tabla de dilución */}
        {product.dilutionTable && (
          <section className="px-4 py-16 md:px-8 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto">
              {(() => {
                const hasDetails = product.dilutionTable.some((row) => row.cantidad || row.agua);

                if (!hasDetails) {
                  // ===== SIMPLE MODE: numbered grid (kits) =====
                  return (
                    <>
                      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                          {t('detail.waysToUse')}
                        </h2>
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                          {t('detail.waysToUseSubtitle')}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-gray-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
                        {product.dilutionTable.map((row, i) => (
                          <div
                            key={i}
                            className="-ml-px -mt-px border-l border-t border-gray-200 p-6 md:p-8 lg:min-h-[170px]"
                          >
                            <span className="mb-4 block font-mono text-xs text-rose-500">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="leading-snug text-gray-900">{row.uso}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                }

                // ===== DETAILED MODE: dilution rows =====
                return (
                  <>
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                        {t('detail.dilutionTable')}
                      </h2>
                      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                        {t('detail.usageMode')}
                      </span>
                    </div>
                    <div className="divide-y divide-gray-200 overflow-hidden rounded-3xl border border-gray-200 bg-white">
                      {product.dilutionTable.map((row, i) => (
                        <div
                          key={i}
                          className="grid gap-5 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-10 md:p-8"
                        >
                          <div className="flex gap-4">
                            <span className="pt-0.5 font-mono text-xs text-rose-500">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="font-semibold text-gray-900">{row.uso}</p>
                          </div>
                          {row.cantidad ? (
                            <div>
                              <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                                {t('detail.dilutionAmount')}
                              </span>
                              <p className="text-sm text-gray-700">{row.cantidad}</p>
                            </div>
                          ) : (
                            <div className="hidden md:block" />
                          )}
                          {row.agua ? (
                            <div>
                              <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                                {t('detail.dilutionPreparation')}
                              </span>
                              <p className="text-sm leading-relaxed text-gray-600">{row.agua}</p>
                            </div>
                          ) : (
                            <div className="hidden md:block" />
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </section>
        )}

        {/* Beneficios — two columns of hairline rows */}
        {product.benefits && product.benefits.length > 0 && (
          <section className="px-4 py-16 md:px-8 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                {t('detail.benefits')}
              </h2>
              <div className="mt-10 grid grid-cols-1 md:mt-14 md:grid-cols-2 md:gap-x-16">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 border-b border-gray-100 py-5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50">
                      <svg className="h-3 w-3 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-snug text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Audience blocks */}
        {product.seoContent?.audienceBlocks && product.seoContent.audienceBlocks.length > 0 && (
          <section className="px-4 py-16 md:px-8 md:py-24 bg-[#faf8f7]">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-gray-200 bg-white md:grid-cols-2">
                {product.seoContent.audienceBlocks.map((b, i) => (
                  <div key={i} className="-ml-px -mt-px border-l border-t border-gray-200 p-6 md:p-10">
                    <h3 className="mb-3 text-lg font-bold text-gray-900">{b.heading}</h3>
                    <p className="leading-relaxed text-gray-500">
                      {renderTextWithLinks(b.body, hogarLinkClass)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Consejos de uso */}
        {product.usageTips && product.usageTips.length > 0 && (
          <section className="px-4 py-16 md:px-8 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  {t('detail.usageTips')}
                </h2>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  {t('detail.tips')}
                </span>
              </div>
              <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-gray-200 bg-white sm:grid-cols-2 lg:grid-cols-3">
                {product.usageTips.map((tip, i) => (
                  <div
                    key={i}
                    className="-ml-px -mt-px border-l border-t border-gray-200 p-6 md:p-8 lg:min-h-[150px]"
                  >
                    <span className="mb-4 block font-mono text-xs text-rose-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-snug text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Preguntas frecuentes */}
        {product.seoContent?.faqs && product.seoContent.faqs.length > 0 && (
          <section className="px-4 py-16 md:px-8 md:py-24 bg-[#faf8f7]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  {t('detail.faqTitle')}
                </h2>
                <span className="mt-4 block h-0.5 w-10 bg-rose-500" />
              </div>
              <div className="border-t border-gray-200">
                {product.seoContent.faqs.map((f, i) => (
                  <details key={i} className="group border-b border-gray-200 py-5">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 font-semibold text-gray-900 marker:content-['']">
                      {f.question}
                      <span className="mt-1 shrink-0 text-rose-500 transition-transform group-open:rotate-45">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl leading-relaxed text-gray-500">
                      {renderTextWithLinks(f.answer, hogarLinkClass)}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Repuesto disponible */}
        {refillProduct && (
          <section id="repuesto" className="scroll-mt-4 px-4 py-16 md:px-8 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  {t('detail.refillTitle')}
                </h2>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  {t('detail.refillAvailable')}
                </span>
              </div>
              <div className="flex flex-col items-center gap-8 rounded-3xl border border-gray-200 p-6 md:flex-row md:p-10">
                <div className="relative h-40 w-40 shrink-0">
                  <Image
                    src={refillProduct.image}
                    alt={refillProduct.name}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900">{refillProduct.name}</h3>
                  <p className="mt-2 text-gray-500">{refillProduct.tagline}</p>
                  {refillProduct.price !== undefined && refillProduct.hasDbPrice && (
                    <p className="mt-4 text-3xl font-black tracking-tight text-rose-600">
                      {formatPrice(refillProduct.price)}
                    </p>
                  )}
                </div>
                <a
                  href={`https://wa.me/573158326422?text=${encodeURIComponent(t('detail.whatsappMessage', { name: refillProduct.name }))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] shrink-0 items-center justify-center rounded-full border border-gray-200 px-8 py-4 font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
                >
                  {t('detail.orderRefill')}
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Seguro para toda la familia */}
        <section className="px-4 py-16 md:px-8 md:py-24 bg-[#121212] text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.2em] text-rose-500">
                {t('detail.familySafe.eyebrow')}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                {t('detail.familySafe.title')}
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-gray-400">
                {t('detail.familySafe.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <span className="rounded-full border border-white/20 px-6 py-3 text-sm">
                {t('detail.familySafe.nonToxic')}
              </span>
              <span className="rounded-full border border-white/20 px-6 py-3 text-sm">
                {t('detail.familySafe.biodegradable')}
              </span>
              <span className="rounded-full border border-white/20 px-6 py-3 text-sm">
                {t('detail.familySafe.noHarshChemicals')}
              </span>
            </div>
          </div>
        </section>

        {/* Volver a productos */}
        <section className="px-4 py-10 md:px-8 bg-[#faf8f7]">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/productos"
              className="inline-flex min-h-[44px] items-center gap-3 text-gray-600 transition-colors hover:text-rose-600"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
              <span className="font-medium">{t('common.backToProducts')}</span>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // ============================================
  // INSTITUCIONAL LAYOUT - Professional, Trustworthy
  // ============================================
  if (product.category === "institucional") {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
        {/* Hero - Professional dark header */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white relative overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0V0zm39 0h1v40h-1V0z'/%3E%3Cpath d='M0 0h40v1H0V0zm0 39h40v1H0v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative px-4 pt-6 pb-10 md:px-8 md:pt-8 md:pb-16">
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-6 max-w-7xl mx-auto">
              <Link href="/productos" className="text-white/60 hover:text-white transition-colors">
                {t('common.breadcrumbProducts')}
              </Link>
              <span className="text-white/40">/</span>
              <Link
                href={{ pathname: '/productos', query: { categoria: product.category } }}
                className="text-white/60 hover:text-white transition-colors"
              >
                {t(`filters.${product.category}`)}
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-sky-400 font-medium">{breadcrumbName}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
              {/* Content - First on mobile for institucional */}
              <div className="lg:w-1/2 order-2 lg:order-1">
                {/* Pro badge */}
                <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-sky-500/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t('institucional.proBadge')}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {product.seoContent?.h1Override ?? product.name}
                </h1>

                <p className="text-lg text-white/70 mb-6">
                  {product.tagline}
                </p>

                {/* Price - if available */}
                {hasPrice && (
                  <div className="mb-6">
                    <span className="text-sm text-white/50 block mb-1">{t('common.from')}</span>
                    <span className="text-4xl md:text-5xl font-black text-sky-400">
                      {formatPrice(product.price!)}
                    </span>
                  </div>
                )}

                {/* Key specs preview */}
                {product.specs && (
                  <div className="flex flex-wrap gap-3 mb-8">
                    {product.specs.slice(0, 2).map((spec, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                        <span className="text-xs text-white/50 block">{spec.label}</span>
                        <span className="font-semibold text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <a
                  href={`https://wa.me/573158326422?text=${encodeURIComponent(t('detail.whatsappMessageInstitutional', { name: product.name }))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-sky-500 text-white font-bold px-8 py-4 rounded-full hover:bg-sky-400 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 min-h-[56px]"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t('common.requestQuoteBtn')}
                </a>
              </div>

              {/* Product Image */}
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-3xl" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 relative z-10"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="px-4 py-12 md:px-8 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-sky-500 rounded-full" />
              {t('detail.productDescription')}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>
        </section>

        {/* SEO Content (intro, sections, audience blocks, FAQs) */}
        <SeoContentBlock seoContent={product.seoContent} />

        {/* Dilution Table */}
        {product.dilutionTable && (
          <section className="px-4 py-12 md:px-8 md:py-16 bg-sky-50">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-4 py-2 rounded-full mb-3">
                  {t('detail.usageMode')}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {t('detail.dilutionTable')}
                </h2>
              </div>

              <div className="space-y-4">
                {product.dilutionTable.map((row, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-sky-100"
                  >
                    {/* Card header — USO */}
                    <div className="flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 bg-sky-50/50 border-b border-sky-100">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </span>
                      <p className="font-bold text-slate-900">{row.uso}</p>
                    </div>

                    {/* Card body — CANTIDAD + PREPARACIÓN */}
                    {(row.cantidad || row.agua) && (
                      <div className="px-4 py-3 md:px-6 md:py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                          {row.cantidad && (
                            <div>
                              <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">{t('detail.dilutionAmount')}</span>
                              <p className="text-sm font-semibold text-slate-700 mt-0.5">{row.cantidad}</p>
                            </div>
                          )}
                          {row.agua && (
                            <div>
                              <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">{t('detail.dilutionPreparation')}</span>
                              <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{row.agua}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits */}
        {product.benefits && (
          <section className="px-4 py-12 md:px-8 md:py-16 bg-slate-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                {t('detail.mainFeatures')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium pt-2">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technical Specs */}
        {product.specs && (
          <section className="px-4 py-12 md:px-8 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-4 py-2 rounded-full mb-3">
                  {t('detail.technicalSheet')}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {t('detail.specifications')}
                </h2>
              </div>

              <div className="bg-slate-900 rounded-2xl overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center px-6 py-4 ${
                      i !== product.specs!.length - 1 ? "border-b border-slate-700" : ""
                    }`}
                  >
                    <span className="text-slate-400">{spec.label}</span>
                    <span className="text-white font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Presentations */}
        {product.presentations && (
          <section className="px-4 py-12 md:px-8 md:py-16 bg-sky-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {t('detail.presentations')}
                </h2>
                <p className="text-slate-500 mt-2">{t('detail.presentationsSubtitle')}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.presentations.map((pres, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-sky-100"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <span className="text-lg font-bold text-slate-900 block mb-2">{pres.size}</span>
                    {pres.price ? (
                      <span className="text-sky-600 font-bold text-lg">
                        {formatPrice(pres.price)}
                      </span>
                    ) : (
                      <span className="text-slate-400 text-sm">{t('common.inquire')}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Usage Tips & Important Notes */}
        {product.usageTips && (
          <section className="px-4 py-12 md:px-8 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-3">
                  IMPORTANTE
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {t('detail.recommendations')}
                </h2>
              </div>

              <div className="space-y-3">
                {product.usageTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-4 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 pt-1">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Professional Use Cases */}
        <section className="px-4 py-12 md:px-8 md:py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t('detail.idealFor')}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: t('institucional.useCaseHotels') },
                { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", label: t('institucional.useCaseRestaurants') },
                { icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", label: t('institucional.useCaseBuildings') },
                { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: t('institucional.useCaseOffices') },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="px-4 py-12 md:px-8 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                {t('institucional.pillarsTitle')}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  ),
                  title: t('institucional.pillar1Title'),
                  desc: t('institucional.pillar1Description'),
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  ),
                  title: t('institucional.pillar2Title'),
                  desc: t('institucional.pillar2Description'),
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: t('institucional.pillar3Title'),
                  desc: t('institucional.pillar3Description'),
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  ),
                  title: t('institucional.pillar4Title'),
                  desc: t('institucional.pillar4Description'),
                },
              ].map((pillar, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-100">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                    {pillar.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{pillar.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rendimiento Superior */}
        <section className="px-4 py-12 md:px-8 md:py-16 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-black mb-1">{t('institucional.performanceStat')}</div>
                <div className="text-white/70 text-sm">{t('institucional.performanceStatLabel')}</div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('institucional.performanceTitle')}
                </h2>
                <p className="text-white/80 leading-relaxed">
                  {t('institucional.performanceDescription')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability & Certifications */}
        <section className="px-4 py-12 md:px-8 md:py-16 bg-emerald-600 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t('institucional.sustainabilityTitle')}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                {t('institucional.sustainabilityDescription')}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                t('institucional.certBoma'),
                t('institucional.certLeed'),
                t('institucional.certWell'),
              ].map((cert, i) => (
                <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Navigation */}
        <section className="px-4 py-6 md:px-8 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/productos"
              className="inline-flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors min-h-[44px]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">{t('common.backToProducts')}</span>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // ============================================
  // CAPILAR LAYOUT - Editorial, Beauty-focused
  // ============================================
  const hasProductSheet = Boolean(
    product.features?.length ||
      product.ingredientGroups?.length ||
      product.includes?.length
  );

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Buy box - photos on the left, everything needed to decide on the right.
          Replaces the full-bleed hero so price and CTA sit above the fold. */}
      <section className="bg-white px-4 pt-6 pb-12 lg:px-8 lg:pt-8 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <Link href="/productos" className="text-gray-500 hover:text-amber-600 transition-colors">
              {t('common.breadcrumbProducts')}
            </Link>
            <span className="text-gray-300">/</span>
            <Link
              href={{ pathname: '/productos', query: { categoria: product.category } }}
              className="text-gray-500 hover:text-amber-600 transition-colors"
            >
              {t(`filters.${product.category}`)}
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">{breadcrumbName}</span>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Photos */}
            <div>
              {product.gallery && product.gallery.length > 0 ? (
                <ProductGallery
                  images={product.gallery}
                  alt={product.name}
                  badge={product.badge}
                />
              ) : (
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Buying information */}
            <div className="flex flex-col justify-center">
              <span className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                {product.parentTreatmentSlug
                  ? t('detail.capilar.productLabel')
                  : t('detail.capilar.treatmentLabel')}
              </span>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                {product.seoContent?.h1Override ?? product.name.replace("Tratamiento ", "")}
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {product.tagline}
              </p>

              {product.size && (
                <span className="mt-5 inline-flex w-fit rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
                  {product.size}
                </span>
              )}

              {hasPrice && (
                <div className="mt-7 flex flex-wrap items-baseline gap-3">
                  <span className="text-4xl font-bold text-gray-900 md:text-5xl">
                    {formatPrice(product.price!)}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                    {t('detail.capilar.currencyNote')}
                    {product.includes && product.includes.length > 1
                      ? ` · ${t('detail.capilar.productsCount', { count: product.includes.length })}`
                      : ''}
                  </span>
                </div>
              )}

              <a
                href={`https://wa.me/573158326422?text=${encodeURIComponent(t('detail.whatsappMessage', { name: product.name }))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-bold text-white transition-colors hover:bg-amber-600 sm:w-auto"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{t('common.orderWhatsApp')}</span>
              </a>

              {product.mercadoLibreUrl && (
                <a
                  href={product.mercadoLibreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#FFE600] px-8 py-4 font-bold text-[#2D3277] transition-opacity hover:opacity-90 sm:w-auto"
                >
                  {t('detail.capilar.orderMercadoLibre')}
                </a>
              )}

              {product.freeOfClaims && product.freeOfClaims.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-2">
                  {product.freeOfClaims.map((claim, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-amber-800"
                    >
                      {claim}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-5 text-sm text-gray-500">
                {t('detail.capilar.shippingNote')}
              </p>

              {product.parentTreatmentSlug && (
                <div className="mt-7 border-t border-gray-200 pt-6">
                  <p className="mb-3 text-sm text-gray-500">
                    {t('detail.capilar.partOfTreatment')}
                  </p>
                  <Link
                    href={{ pathname: '/productos/[slug]' as const, params: { slug: product.parentTreatmentSlug! } }}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-amber-100 px-5 py-2.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-200"
                  >
                    <span>{t('detail.capilar.viewFullTreatment')}</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights - numbered strip, one line per benefit */}
      {product.benefits && product.benefits.length > 0 && (
        <section className="py-12 lg:py-16 bg-white border-t border-amber-100">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="sr-only">{t('detail.capilar.highlights')}</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 lg:gap-8">
              {product.benefits.slice(0, 4).map((benefit, i) => (
                <div key={i} className="border-t-2 border-amber-500 pt-4">
                  <span className="block text-sm font-bold text-amber-500 mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Description - heading left, prose right */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              {product.tagline}
            </h2>
            <div>
              <p className="text-lg leading-relaxed text-gray-600">
                {product.description}
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                <Image
                  src="/images/sellos/cruelty.png"
                  alt="Producto Cruelty Free - no testado en animales"
                  width={56}
                  height={56}
                  className="shrink-0"
                />
                <p className="text-sm font-semibold text-amber-800">
                  {t('detail.capilar.crueltyFreeClaim')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product sheet - features, ingredients, contents and clean-formula claims */}
      {hasProductSheet && (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 space-y-14">
            {product.features && product.features.length > 0 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('detail.capilar.keyFeatures')}
                </h2>
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.ingredientGroups && product.ingredientGroups.length > 0 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('detail.capilar.ingredients')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.ingredientGroups.map((group, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-3">{group.heading}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{group.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.includes && product.includes.length > 0 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('detail.capilar.whatsIncluded')}
                </h2>
                <ul className="bg-white rounded-2xl divide-y divide-amber-100 shadow-sm">
                  {product.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-5 md:p-6">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SEO Content (intro, sections, audience blocks, FAQs) */}
      <SeoContentBlock seoContent={product.seoContent} />

      {/* Treatment Steps Section — kits only. A single product is one step of a
          treatment, so "Pasos del Tratamiento" reads wrong on its own page. */}
      {product.steps && !product.parentTreatmentSlug && (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-bold tracking-widest rounded-full mb-4">
                {t('detail.usageMode')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('detail.capilar.treatmentSteps')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {product.steps.map((step) => (
                <div key={step.step} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">
                    {step.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product video - vertical, self-hosted */}
      {product.video && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {t('detail.capilar.videoTitle')}
              </h2>
              {product.video.caption && (
                <p className="text-gray-600 text-lg">{product.video.caption}</p>
              )}
            </div>
            <div className="mx-auto w-full max-w-[340px]">
              <video
                controls
                playsInline
                preload="metadata"
                aria-label={`${product.name} - ${product.video.caption ?? ''}`.trim()}
                poster={product.video.poster}
                className="w-full rounded-3xl bg-black shadow-lg"
              >
                <source src={product.video.src} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      )}

      {/* Before / after */}
      {product.beforeAfter && (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {t('detail.capilar.beforeAfterTitle')}
              </h2>
              {product.beforeAfter.note && (
                <p className="text-gray-600 text-lg">{product.beforeAfter.note}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {([
                { src: product.beforeAfter.before, label: t('detail.capilar.before'), caption: product.beforeAfter.beforeCaption },
                { src: product.beforeAfter.after, label: t('detail.capilar.after'), caption: product.beforeAfter.afterCaption },
              ]).map((shot) => (
                <figure key={shot.label}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={shot.src}
                      alt={shot.caption ?? `${shot.label} - ${product.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="mt-3 text-center">
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-amber-600">
                      {shot.label}
                    </span>
                    {shot.caption && (
                      <span className="mt-1 block text-sm text-gray-600">{shot.caption}</span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-amber-500 text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('detail.capilar.ctaTitle')}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t('detail.capilar.ctaDescription')}
          </p>
          <a
            href={`https://wa.me/573158326422?text=${encodeURIComponent(t('detail.whatsappMessage', { name: product.name }))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-amber-700 font-bold px-10 py-5 rounded-full hover:shadow-xl transition-all duration-300 min-h-[56px]"
          >
            <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>{t('common.orderWhatsApp')}</span>
          </a>
          {product.mercadoLibreUrl && (
            <div className="mt-4">
              <a
                href={product.mercadoLibreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#FFE600] px-10 py-5 font-bold text-[#2D3277] transition-opacity hover:opacity-90"
              >
                {t('detail.capilar.orderMercadoLibre')}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Sticky order bar - stays reachable on long pages */}
      {hasPrice && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-100 bg-white/95 backdrop-blur-sm shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
            <div className="min-w-0">
              <span className="block text-lg font-bold leading-tight text-gray-900">
                {formatPrice(product.price!)}
              </span>
              <span className="block truncate text-xs uppercase tracking-[0.12em] text-gray-500">
                {product.seoContent?.h1Override ?? product.name}
              </span>
            </div>
            <a
              href={`https://wa.me/573158326422?text=${encodeURIComponent(t('detail.whatsappMessage', { name: product.name }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-bold text-white transition-colors hover:bg-amber-600"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>{t('detail.capilar.order')}</span>
            </a>
          </div>
        </div>
      )}

      {/* Back Navigation */}
      <section className="py-6 pb-28 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/productos"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-amber-600 transition-colors min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">{t('common.backToProducts')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
