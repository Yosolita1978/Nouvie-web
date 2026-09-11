"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { formatCOP as formatPrice } from "@/lib/format";
import { type Product } from "@/lib/products";

// The Línea Institucional catalogue, moved verbatim out of
// app/[locale]/productos/products-client.tsx (the
// `activeCategory === "institucional"` branch). Renders its own <h1>.

export function InstitucionalLine({ products: institucionalProducts }: { products: Product[] }) {
  const t = useTranslations("products");

  return (
  <div className="bg-slate-50">
    {/* Hero Header - Dark Professional */}
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0V0zm39 0h1v40h-1V0z'/%3E%3Cpath d='M0 0h40v1H0V0zm0 39h40v1H0v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative px-4 py-6 md:py-8 text-center">
        {/* Pro Badge */}
        <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-sky-500/30">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {t('institucional.proBadge')}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          {t('institucional.title')}
        </h1>
        <p className="text-white/70 max-w-lg mx-auto mb-8">
          {t('institucional.description')}
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
            <span className="text-2xl font-bold text-white">{t('institucional.stat1Value')}</span>
            <p className="text-xs text-white/60">{t('institucional.stat1Label')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
            <span className="text-2xl font-bold text-white">{t('institucional.stat2Value')}</span>
            <p className="text-xs text-white/60">{t('institucional.stat2Label')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
            <span className="text-2xl font-bold text-white">{t('institucional.stat3Value')}</span>
            <p className="text-xs text-white/60">{t('institucional.stat3Label')}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Use Cases Strip */}
    <div className="bg-sky-600 px-4 py-4 overflow-x-auto scrollbar-hide">
      <div className="flex justify-center gap-6 min-w-max">
        {[
          { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: t('institucional.useCaseHotels') },
          { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", label: t('institucional.useCaseRestaurants') },
          { icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", label: t('institucional.useCaseBuildings') },
          { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: t('institucional.useCaseOffices') },
          { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: t('institucional.useCaseLaundry') },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-white/90">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
            </svg>
            <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Products Grid */}
    <div className="px-4 py-5 md:px-8 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {institucionalProducts.map((product) => (
            <Link
              key={product.slug}
              href={{ pathname: '/productos/[slug]' as const, params: { slug: product.slug } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-sky-50 to-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {t('common.professional')}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 bg-gradient-to-b from-white to-slate-50">
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-sky-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  {product.tagline}
                </p>

                {/* Specs preview if available */}
                {product.specs && product.specs.length > 0 && (
                  <div className="flex gap-3 mb-4">
                    {product.specs.slice(0, 2).map((spec, i) => (
                      <div key={i} className="text-xs">
                        <span className="text-slate-400 block">{spec.label}</span>
                        <span className="font-semibold text-slate-700">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                  {product.price !== undefined && product.hasDbPrice ? (
                    <div>
                      <span className="text-xs text-slate-400 block">{t('common.from')}</span>
                      <span className="text-xl font-black text-sky-600">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm text-slate-400">{t('common.requestQuote')}</span>
                  )}
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-sky-100 text-sky-600 rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {institucionalProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-500">{t('common.noProducts')}</p>
          </div>
        )}
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-4 py-8 md:py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {t('institucional.ctaTitle')}
        </h2>
        <p className="text-white/60 mb-6">
          {t('institucional.ctaDescription')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/573158326422?text=${encodeURIComponent(t('institucional.whatsappMessage'))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white font-bold px-6 py-3 rounded-full hover:bg-sky-400 transition-all duration-300 min-h-[48px]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t('common.requestQuoteBtn')}
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
