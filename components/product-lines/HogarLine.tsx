"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { formatCOP as formatPrice } from "@/lib/format";
import { type Product } from "@/lib/products";

// The Línea Hogar catalogue, moved verbatim out of
// app/[locale]/productos/products-client.tsx (the `activeCategory === "hogar"`
// branch). It renders its own <h1>, which is why /productos/hogar does not.

export function HogarLine({ products: hogarProducts }: { products: Product[] }) {
  const t = useTranslations("products");

  return (
  <div className="bg-white">
    {/* Hero Header */}
    <div className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      {/* Compact on purpose: the first row of products must fit on the first
          screen of a phone. */}
      <div className="relative px-4 py-3 md:py-4 text-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          {t('hogar.title')}
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto mt-0.5 text-xs md:text-sm">
          {t('hogar.description')}
        </p>

        {/* Trust badges — plain text row instead of pills, to save height */}
        <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs font-medium text-rose-700">
          <span className="inline-flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {t('hogar.badgeSafeKids')}
          </span>
          <span className="inline-flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {t('hogar.badgePetFriendly')}
          </span>
          <span className="inline-flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
            </svg>
            {t('hogar.badgeBiodegradable')}
          </span>
        </div>
      </div>
    </div>

    {/* Products Grid */}
    <div className="px-4 pt-3 pb-5 md:px-8 md:pt-4 md:pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {hogarProducts.map((product) => (
            <Link
              key={product.slug}
              href={{ pathname: '/productos/[slug]' as const, params: { slug: product.slug } }}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-rose-100 hover:border-rose-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-rose-50 to-orange-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Desktop hover peek — reveals the second gallery photo */}
                {product.gallery && product.gallery.length > 1 && (
                  <Image
                    src={product.gallery[1].src}
                    alt=""
                    aria-hidden="true"
                    fill
                    className="hidden md:block object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                )}
                {product.badge && (
                  <span className="absolute top-3 left-3 z-10 bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </span>
                )}
                {/* Photo-count badge */}
                {product.gallery && product.gallery.length > 1 && (
                  <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {product.gallery.length}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-rose-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {product.tagline}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-rose-100">
                  {product.price !== undefined && product.hasDbPrice ? (
                    <span className="text-2xl font-black text-rose-600">
                      {formatPrice(product.price)}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-400">{t('common.inquire')}</span>
                  )}
                  <span className="inline-flex items-center gap-1 text-rose-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    {t('common.viewMore')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {hogarProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">{t('common.noProducts')}</p>
          </div>
        )}
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-8 md:py-10 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {t('hogar.ctaTitle')}
        </h2>
        <p className="text-white/80 mb-6">
          {t('hogar.ctaDescription')}
        </p>
        <a
          href={`https://wa.me/573158326422?text=${encodeURIComponent(t('hogar.whatsappMessage'))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-rose-600 font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 min-h-[48px]"
        >
          <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {t('common.inquireWhatsApp')}
        </a>
      </div>
    </div>
  </div>
  );
}
