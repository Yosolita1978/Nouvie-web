"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getAllProducts,
  categoryNames,
  type ProductCategory,
  type ProductData,
} from "@/lib/product-data";

const categories: (ProductCategory | "todos")[] = ["todos", "hogar", "capilar", "institucional"];

const categoryConfig: Record<ProductCategory | "todos", { label: string; color: string }> = {
  todos: { label: "Todos los productos", color: "bg-nouvie-navy" },
  hogar: { label: "Línea Hogar", color: "bg-pink-500" },
  capilar: { label: "Línea Capilar", color: "bg-green-500" },
  institucional: { label: "Línea Institucional", color: "bg-blue-500" },
};

export default function ProductosPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "todos">("todos");
  const allProducts = getAllProducts();

  const filteredProducts =
    activeCategory === "todos"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Asymmetric */}
      <section className="relative bg-nouvie-navy overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-nouvie-turquoise/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-nouvie-gold/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-block text-nouvie-turquoise text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
              Catálogo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up animation-delay-100">
              Nuestros
              <span className="block text-nouvie-turquoise">Productos</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-up animation-delay-200">
              Ecológicos, biodegradables y libres de químicos tóxicos.
              El regalo de la naturaleza para tu hogar.
            </p>
          </div>
        </div>
      </section>

      {/* Filters - Floating Style */}
      <section className="relative z-20 -mt-6 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl shadow-xl p-2 inline-flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? `${categoryConfig[category].color} text-white shadow-lg`
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {categoryConfig[category].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid - Magazine Style */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Category Title */}
          {activeCategory !== "todos" && (
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center gap-4">
                <div className={`w-1 h-12 ${categoryConfig[activeCategory].color} rounded-full`} />
                <div>
                  <h2 className="text-3xl font-bold text-nouvie-navy">
                    {categoryNames[activeCategory]}
                  </h2>
                  <p className="text-gray-500 mt-1">
                    {filteredProducts.length} productos
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Grid with Featured First Item */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={index}
                featured={index === 0 && activeCategory !== "todos"}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">No hay productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA - Full Width */}
      <section className="relative bg-nouvie-turquoise overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-nouvie-navy rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                ¿Necesitas asesoría?
              </h2>
              <p className="text-white/80 text-lg">
                Te ayudamos a elegir el producto perfecto para ti
              </p>
            </div>
            <a
              href="https://wa.me/573158326422"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-nouvie-navy font-semibold px-8 py-4 rounded-full hover:bg-nouvie-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Escríbenos por WhatsApp</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, index, featured }: { product: ProductData; index: number; featured?: boolean }) {
  const categoryColors: Record<ProductCategory, { bg: string; text: string; accent: string }> = {
    hogar: { bg: "bg-pink-50", text: "text-pink-700", accent: "bg-pink-500" },
    capilar: { bg: "bg-green-50", text: "text-green-700", accent: "bg-green-500" },
    institucional: { bg: "bg-blue-50", text: "text-blue-700", accent: "bg-blue-500" },
  };

  const colors = categoryColors[product.category];

  return (
    <Link
      href={`/productos/${product.slug}`}
      className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{ animationDelay: `${index * 75}ms` }}
    >
      {/* Background Accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${colors.accent} opacity-5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:opacity-10 transition-opacity`} />

      {/* Image Container */}
      <div className={`relative ${featured ? "aspect-[4/3]" : "aspect-square"} ${colors.bg} p-6 overflow-hidden`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-nouvie-navy text-white text-xs font-medium px-3 py-1.5 rounded-full">
            {product.badge}
          </span>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-nouvie-navy/0 group-hover:bg-nouvie-navy/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-2 h-2 rounded-full ${colors.accent}`} />
          <span className={`text-xs font-medium uppercase tracking-wider ${colors.text}`}>
            {categoryNames[product.category]}
          </span>
        </div>

        {/* Name */}
        <h3 className={`font-bold text-nouvie-navy mb-2 group-hover:text-nouvie-blue transition-colors ${
          featured ? "text-2xl" : "text-lg"
        }`}>
          {product.name}
        </h3>

        {/* Tagline */}
        <p className={`text-gray-500 line-clamp-2 ${featured ? "text-base" : "text-sm"}`}>
          {product.tagline}
        </p>

        {/* CTA Arrow */}
        <div className="mt-4 flex items-center gap-2 text-nouvie-turquoise font-medium">
          <span className="text-sm">Ver producto</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
