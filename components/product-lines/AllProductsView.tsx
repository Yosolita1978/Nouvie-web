"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { formatCOP as formatPrice } from "@/lib/format";
import { type Product } from "@/lib/products";
import { type ProductCategory } from "@/lib/product-data";

// The default "Todos" catalogue, moved verbatim out of
// app/[locale]/productos/products-client.tsx (the `activeCategory === "todos"`
// branch, plus its ProductCard). Renders its own <h1>.

// Show the catalog grouped by line — hogar, then capilar, then institucional.
// Sort is stable, so within each line the product-data order is preserved.
const categoryOrder: Record<ProductCategory, number> = {
  hogar: 0,
  capilar: 1,
  institucional: 2,
};

export function AllProductsView({ products }: { products: Product[] }) {
  const t = useTranslations("products");

  const filteredProducts = products
    .slice()
    .sort((a, b) => categoryOrder[a.category] - categoryOrder[b.category]);

  return (
  <div>
    {/* Page Header */}
    <div className="bg-white px-4 py-5 md:py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-nouvie-navy mb-2">
          {t('all.title')}
        </h1>
        <p className="text-gray-600">
          {t('common.productsAvailable', { count: filteredProducts.length })}
        </p>
      </div>
    </div>

    {/* Products Grid */}
    <div className="px-4 py-5 md:px-8 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-nouvie-navy mb-1">
              {t('all.emptyTitle')}
            </h3>
            <p className="text-gray-500 text-sm">
              {t('all.emptyDescription')}
            </p>
          </div>
        )}
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="bg-nouvie-navy px-4 py-8 md:py-10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {t('all.ctaTitle')}
        </h2>
        <p className="text-white/70 mb-6">
          {t('all.ctaDescription')}
        </p>
        <a
          href="https://wa.me/573158326422"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-nouvie-navy font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 min-h-[48px]"
        >
          <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {t('common.whatsApp')}
        </a>
      </div>
    </div>
  </div>
  );
}

// Compact Product Card for grid layouts
function ProductCard({ product }: { product: Product }) {
  const t = useTranslations('products');
  const categoryColors: Record<ProductCategory, {
    bg: string;
    accent: string;
  }> = {
    hogar: { bg: "bg-rose-50", accent: "bg-rose-500" },
    capilar: { bg: "bg-amber-50", accent: "bg-amber-500" },
    institucional: { bg: "bg-sky-50", accent: "bg-sky-600" },
  };

  const colors = categoryColors[product.category];

  return (
    <Link
      href={{ pathname: '/productos/[slug]' as const, params: { slug: product.slug } }}
      className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className={`relative aspect-[4/3] ${colors.bg}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Desktop hover peek — reveals the second gallery photo */}
        {product.gallery && product.gallery.length > 1 && (
          <Image
            src={product.gallery[1].src}
            alt=""
            aria-hidden="true"
            fill
            className="hidden md:block object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}
        {product.badge && (
          <span className={`absolute top-2 left-2 z-10 ${colors.accent} text-white text-[10px] font-bold px-2 py-1 rounded-full`}>
            {product.badge}
          </span>
        )}
        {/* Photo-count badge */}
        {product.gallery && product.gallery.length > 1 && (
          <span className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-black/55 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {product.gallery.length}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-2.5 md:p-3">
        {/* Category indicator */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${colors.accent}`} />
          <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
            {t(`filters.${product.category}`)}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-nouvie-navy text-sm md:text-base mb-1 line-clamp-2 group-hover:text-nouvie-turquoise transition-colors">
          {product.name}
        </h3>

        {/* Tagline */}
        {product.tagline && (
          <p className="text-[11px] md:text-xs text-gray-500 line-clamp-2 leading-snug">
            {product.tagline}
          </p>
        )}

        {/* Price */}
        <div className="mt-2 pt-2 border-t border-gray-100">
          {product.price !== undefined && product.hasDbPrice ? (
            <p className="text-lg md:text-xl font-bold text-nouvie-navy">
              {formatPrice(product.price)}
            </p>
          ) : (
            <p className="text-xs text-gray-400">{t('common.checkPrice')}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
