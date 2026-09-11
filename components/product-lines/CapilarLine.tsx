"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { formatCOP as formatPrice } from "@/lib/format";
import { type Product } from "@/lib/products";

// The Línea Capilar catalogue, moved verbatim out of
// app/[locale]/productos/products-client.tsx (the `activeCategory === "capilar"`
// branch). Renders its own <h1>.

// Treatment line configuration for capilar products
const treatmentLines = [
  {
    slug: "tratamiento-suave-y-liso",
    name: "Bio Keratina",
    subtitle: "Kiwi & Acaí",
    descriptionKey: "suave-y-liso" as const,
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
  },
  {
    slug: "tratamiento-reparacion-intensa",
    name: "Manteca de Karité",
    subtitle: "Honey & Melon",
    descriptionKey: "reparacion-intensa" as const,
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
  },
  {
    slug: "tratamiento-revitalizante",
    name: "Aceite de Argán",
    subtitle: "Revitalizante",
    descriptionKey: "revitalizante" as const,
    color: "bg-nouvie-navy",
    lightColor: "bg-slate-50",
    textColor: "text-slate-700",
    borderColor: "border-slate-200",
  },
];

export function CapilarLine({ products }: { products: Product[] }) {
  const t = useTranslations("products");

  // Group the capilar products under the three treatment lines. Moved from
  // getCapilarProductsByTreatment() in products-client.tsx.
  const capilarByTreatment = treatmentLines.map((treatment) => ({
    ...treatment,
    mainTreatment: products.find((p) => p.slug === treatment.slug),
    products: products.filter((p) => p.parentTreatmentSlug === treatment.slug),
  }));

  return (
  <div className="bg-white">
    {/* Page Title */}
    <div className="bg-gradient-to-b from-amber-50 to-white px-4 py-5 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-nouvie-navy">
        {t('capilar.title')}
      </h1>
      <p className="mx-auto mt-1 max-w-xl text-sm leading-snug text-gray-600 md:text-base">
        {t('capilar.description')}
      </p>

      {/* Key Selling Points */}
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        <span className="rounded-full border border-amber-200 bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
          {t('capilar.badgeSulfateFree')}
        </span>
        <span className="rounded-full border border-amber-200 bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
          {t('capilar.badgeSaltFree')}
        </span>
        <span className="rounded-full border border-amber-200 bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
          {t('capilar.badgeParabenFree')}
        </span>
        <span className="rounded-full border border-amber-200 bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
          {t('capilar.badge100Clean')}
        </span>
        <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-green-700">
          {t('capilar.badgeNoColorants')}
        </span>
      </div>

      {/* Seal and the three lines on one row, so the products stay above the fold */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <Image
          src="/images/sellos/cruelty.png"
          alt="Producto Cruelty Free - no testado en animales"
          width={32}
          height={32}
          className="shrink-0"
        />
        {treatmentLines.map((line) => (
          <a
            key={line.slug}
            href={`#${line.slug}`}
            className={`rounded-full px-3 py-1 text-xs font-semibold text-white transition-opacity hover:opacity-85 ${line.color}`}
          >
            {line.name}
          </a>
        ))}
      </div>
    </div>

    {/* Treatment Sections */}
    <div className="mx-auto max-w-6xl divide-y divide-gray-100 md:px-6">
      {capilarByTreatment.map((treatment) => (
        <section key={treatment.slug} id={treatment.slug} className="scroll-mt-28 py-4">
          {/* Treatment Header */}
          <div className={`${treatment.color} mx-4 rounded-xl px-4 py-2.5 mb-3 md:mx-0`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  {t('capilar.treatmentLabel')}
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {treatment.name}: {treatment.subtitle}
                </h2>
              </div>
              <p className="text-white/90 text-sm md:text-base">
                {t(`treatmentLines.${treatment.descriptionKey}`)}
              </p>
            </div>
          </div>

          {/* Products Row - Horizontal scroll on mobile */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 px-4 pb-3 md:grid md:grid-cols-4 md:gap-3 md:px-0 md:pb-0">
              {/* Main Treatment Card */}
              {treatment.mainTreatment && (
                <Link
                  href={{ pathname: '/productos/[slug]' as const, params: { slug: treatment.mainTreatment.slug } }}
                  className="group w-[170px] flex-shrink-0 md:w-auto"
                >
                  <div className={`bg-white rounded-2xl border-2 ${treatment.borderColor} overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                    {/* Image */}
                    <div className={`relative aspect-[4/3] ${treatment.lightColor}`}>
                      <Image
                        src={treatment.mainTreatment.image}
                        alt={treatment.mainTreatment.name}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 170px, 260px"
                      />
                      <span className={`absolute top-2 left-2 ${treatment.color} text-white text-[10px] font-bold px-2 py-1 rounded-full`}>
                        {t('capilar.fullKit')}
                      </span>
                    </div>
                    {/* Info */}
                    <div className="p-2.5">
                      <h3 className="mb-1 line-clamp-2 text-xs font-bold leading-snug text-nouvie-navy">
                        {treatment.mainTreatment.seoContent?.h1Override ?? treatment.mainTreatment.name}
                      </h3>
                      {treatment.mainTreatment.price !== undefined && treatment.mainTreatment.hasDbPrice && (
                        <p className={`text-base font-black ${treatment.textColor}`}>
                          {formatPrice(treatment.mainTreatment.price)}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              )}

              {/* Individual Products */}
              {treatment.products.map((product) => (
                <Link
                  key={product.slug}
                  href={{ pathname: '/productos/[slug]' as const, params: { slug: product.slug } }}
                  className="group w-[170px] flex-shrink-0 md:w-auto"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 h-full">
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 170px, 260px"
                      />
                      {product.size && (
                        <span className="absolute bottom-2 right-2 bg-white/90 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm">
                          {product.size}
                        </span>
                      )}
                    </div>
                    {/* Info */}
                    <div className="p-2.5">
                      <h3 className="mb-1 line-clamp-2 text-xs font-semibold leading-snug text-nouvie-navy">
                        {product.seoContent?.h1Override ?? product.name}
                      </h3>
                      {product.price !== undefined && product.hasDbPrice ? (
                        <p className="text-base font-bold text-nouvie-navy">
                          {formatPrice(product.price)}
                        </p>
                      ) : (
                        <p className="text-xs text-gray-400">{t('common.checkPrice')}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-6 flex flex-col items-center gap-4 bg-nouvie-turquoise px-4 py-6 text-center md:mx-8 md:mb-8 md:flex-row md:justify-between md:rounded-2xl md:px-8 md:text-left">
      <div>
        <h2 className="text-xl font-bold text-white md:text-2xl">
          {t('capilar.ctaTitle')}
        </h2>
        <p className="mt-1 text-sm text-white/80">
          {t('capilar.ctaDescription')}
        </p>
      </div>
      <a
        href={`https://wa.me/573158326422?text=${encodeURIComponent(t('capilar.whatsappMessage'))}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-nouvie-navy transition-all duration-300 hover:shadow-lg"
      >
        <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {t('common.writeWhatsApp')}
      </a>
    </div>
  </div>
  );
}
