"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoryNames, type ProductCategory } from "@/lib/product-data";
import { type Product } from "@/lib/products";

const categories: (ProductCategory | "todos")[] = ["todos", "hogar", "capilar", "institucional"];

// Treatment line configuration for capilar products
const treatmentLines = [
  {
    slug: "tratamiento-kiwi-acai",
    name: "Bio Keratina",
    subtitle: "Kiwi & Acaí",
    description: "Cabello liso, brillante y sin frizz",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
  },
  {
    slug: "tratamiento-honey-melon",
    name: "Manteca de Karité",
    subtitle: "Honey & Melon",
    description: "Reparación intensa y nutrición profunda",
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
  },
  {
    slug: "tratamiento-revitalizante",
    name: "Aceite de Argán",
    subtitle: "Revitalizante",
    description: "Fortalecimiento y cuidado masculino",
    color: "bg-nouvie-navy",
    lightColor: "bg-slate-50",
    textColor: "text-slate-700",
    borderColor: "border-slate-200",
  },
];

// Format price for Colombian Pesos
function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

interface ProductsClientProps {
  products: Product[];
}

export function ProductsClient({ products }: ProductsClientProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "todos">("todos");

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Get capilar products organized by treatment
  const getCapilarProductsByTreatment = () => {
    const capilarProducts = products.filter((p) => p.category === "capilar");

    return treatmentLines.map((treatment) => {
      // Get the main treatment product
      const mainTreatment = capilarProducts.find((p) => p.slug === treatment.slug);
      // Get individual products for this treatment
      const individualProducts = capilarProducts.filter(
        (p) => p.parentTreatmentSlug === treatment.slug
      );

      return {
        ...treatment,
        mainTreatment,
        products: individualProducts,
      };
    });
  };

  const capilarByTreatment = getCapilarProductsByTreatment();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Compact Header */}
      <header className="bg-nouvie-navy sticky top-0 z-40">
        <div className="px-4 py-4 md:px-8">
          {/* Category Pills - Horizontal scroll on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 min-h-[44px] ${
                  activeCategory === category
                    ? "bg-white text-nouvie-navy shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category === "todos" ? "Todos" : categoryNames[category]}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Capilar Category - Special Catalog Layout */}
        {activeCategory === "capilar" ? (
          <div className="bg-white">
            {/* Page Title */}
            <div className="bg-gradient-to-b from-amber-50 to-white px-4 py-8 md:py-12 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nouvie-navy mb-2">
                Línea Capilar
              </h1>
              <p className="text-gray-600 max-w-md mx-auto">
                Tratamientos naturales para el cuidado de tu cabello
              </p>

              {/* Treatment Ingredient Pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {treatmentLines.map((t) => (
                  <span
                    key={t.slug}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${t.lightColor} ${t.textColor} border ${t.borderColor}`}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Treatment Sections */}
            <div className="divide-y divide-gray-100">
              {capilarByTreatment.map((treatment) => (
                <section key={treatment.slug} className="py-8 md:py-12">
                  {/* Treatment Header */}
                  <div className={`${treatment.color} mx-4 md:mx-8 rounded-2xl p-4 md:p-6 mb-6`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="text-white/80 text-sm font-medium uppercase tracking-wider">
                          Tratamiento
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          {treatment.name}: {treatment.subtitle}
                        </h2>
                      </div>
                      <p className="text-white/90 text-sm md:text-base">
                        {treatment.description}
                      </p>
                    </div>
                  </div>

                  {/* Products Row - Horizontal scroll on mobile */}
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 px-4 md:px-8 pb-4 md:grid md:grid-cols-3 lg:grid-cols-4">
                      {/* Main Treatment Card */}
                      {treatment.mainTreatment && (
                        <Link
                          href={`/productos/${treatment.mainTreatment.slug}`}
                          className="flex-shrink-0 w-[200px] md:w-auto group"
                        >
                          <div className={`bg-white rounded-2xl border-2 ${treatment.borderColor} overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                            {/* Image */}
                            <div className={`relative aspect-square ${treatment.lightColor}`}>
                              <Image
                                src={treatment.mainTreatment.image}
                                alt={treatment.mainTreatment.name}
                                fill
                                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                sizes="200px"
                              />
                              <span className={`absolute top-2 left-2 ${treatment.color} text-white text-[10px] font-bold px-2 py-1 rounded-full`}>
                                KIT COMPLETO
                              </span>
                            </div>
                            {/* Info */}
                            <div className="p-3 text-center">
                              <h3 className="font-bold text-nouvie-navy text-sm mb-1 line-clamp-2">
                                {treatment.mainTreatment.name}
                              </h3>
                              {treatment.mainTreatment.price !== undefined && treatment.mainTreatment.hasDbPrice && (
                                <p className={`text-lg font-black ${treatment.textColor}`}>
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
                          href={`/productos/${product.slug}`}
                          className="flex-shrink-0 w-[160px] md:w-auto group"
                        >
                          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 h-full">
                            {/* Image */}
                            <div className="relative aspect-square bg-gray-50">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                                sizes="160px"
                              />
                              {product.size && (
                                <span className="absolute bottom-2 right-2 bg-white/90 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm">
                                  {product.size}
                                </span>
                              )}
                            </div>
                            {/* Info */}
                            <div className="p-3 text-center">
                              <h3 className="font-semibold text-nouvie-navy text-xs mb-1 line-clamp-2">
                                {product.name}
                              </h3>
                              {product.price !== undefined && product.hasDbPrice ? (
                                <p className="text-base font-bold text-nouvie-navy">
                                  {formatPrice(product.price)}
                                </p>
                              ) : (
                                <p className="text-xs text-gray-400">Consultar precio</p>
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
            <div className="bg-nouvie-turquoise px-4 py-10 md:py-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                ¿Necesitas asesoría?
              </h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Te ayudamos a elegir el tratamiento ideal para tu tipo de cabello
              </p>
              <a
                href="https://wa.me/573158326422?text=Hola, me interesa la Línea Capilar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-nouvie-navy font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 min-h-[48px]"
              >
                <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        ) : (
          /* Default Grid Layout for Other Categories */
          <div>
            {/* Page Header */}
            <div className="bg-white px-4 py-8 md:py-12 border-b border-gray-100">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-nouvie-navy mb-2">
                  {activeCategory === "todos"
                    ? "Nuestros Productos"
                    : `Línea ${categoryNames[activeCategory]}`}
                </h1>
                <p className="text-gray-600">
                  {filteredProducts.length} productos disponibles
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="px-4 py-6 md:px-8 md:py-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-nouvie-navy mb-1">
                      No hay productos
                    </h3>
                    <p className="text-gray-500 text-sm">
                      No encontramos productos en esta categoría.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-nouvie-navy px-4 py-10 md:py-16">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  ¿Te asesoramos?
                </h2>
                <p className="text-white/70 mb-6">
                  Escríbenos y te ayudamos a elegir el producto ideal
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
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Compact Product Card for grid layouts
function ProductCard({ product }: { product: Product }) {
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
      href={`/productos/${product.slug}`}
      className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className={`relative aspect-square ${colors.bg}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.badge && (
          <span className={`absolute top-2 left-2 ${colors.accent} text-white text-[10px] font-bold px-2 py-1 rounded-full`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        {/* Category indicator */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${colors.accent}`} />
          <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
            {categoryNames[product.category]}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-nouvie-navy text-sm md:text-base mb-1 line-clamp-2 group-hover:text-nouvie-turquoise transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mt-2 pt-2 border-t border-gray-100">
          {product.price !== undefined && product.hasDbPrice ? (
            <p className="text-lg md:text-xl font-bold text-nouvie-navy">
              {formatPrice(product.price)}
            </p>
          ) : (
            <p className="text-xs text-gray-400">Consultar precio</p>
          )}
        </div>
      </div>
    </Link>
  );
}
