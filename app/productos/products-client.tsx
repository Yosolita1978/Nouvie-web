"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoryNames, type ProductCategory } from "@/lib/product-data";
import { type Product } from "@/lib/products";

const categories: (ProductCategory | "todos")[] = ["todos", "hogar", "capilar", "institucional"];

// Rich category configuration with unique personalities
const categoryConfig: Record<ProductCategory | "todos", {
  label: string;
  color: string;
  gradient: string;
  lightBg: string;
  tagline: string;
  icon: string;
  accentLight: string;
}> = {
  todos: {
    label: "Todos",
    color: "bg-nouvie-navy",
    gradient: "from-nouvie-navy via-nouvie-navy to-nouvie-turquoise",
    lightBg: "bg-gray-50",
    tagline: "El regalo de la naturaleza",
    icon: "🌿",
    accentLight: "bg-nouvie-turquoise/10",
  },
  hogar: {
    label: "Hogar",
    color: "bg-rose-500",
    gradient: "from-rose-400 via-pink-500 to-rose-600",
    lightBg: "bg-rose-50",
    tagline: "Limpieza que cuida tu familia",
    icon: "🏠",
    accentLight: "bg-rose-100",
  },
  capilar: {
    label: "Capilar",
    color: "bg-amber-500",
    gradient: "from-amber-400 via-orange-500 to-amber-600",
    lightBg: "bg-amber-50",
    tagline: "Tratamientos naturales para tu cabello",
    icon: "✨",
    accentLight: "bg-amber-100",
  },
  institucional: {
    label: "Institucional",
    color: "bg-sky-600",
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    lightBg: "bg-sky-50",
    tagline: "Soluciones profesionales de limpieza",
    icon: "🏢",
    accentLight: "bg-sky-100",
  },
};

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

  const config = categoryConfig[activeCategory];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Dynamic Hero - Changes based on category */}
      <section className={`relative overflow-hidden transition-colors duration-500`}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-95`} />

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-12 md:py-20 lg:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Category Icon */}
              <span className="text-5xl md:text-6xl mb-4 block animate-fade-up">
                {config.icon}
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight animate-fade-up animation-delay-100">
                {activeCategory === "todos" ? (
                  <>Nuestros<br />Productos</>
                ) : (
                  <>Línea<br />{categoryConfig[activeCategory].label}</>
                )}
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-white/80 font-light animate-fade-up animation-delay-200">
                {config.tagline}
              </p>

              {/* Product Count Badge */}
              <div className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-up animation-delay-300">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">
                  {filteredProducts.length} productos disponibles
                </span>
              </div>
            </div>

            {/* Category Filters - Vertical Pills on Desktop */}
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 md:overflow-visible animate-fade-up animation-delay-400">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-white text-nouvie-navy shadow-lg scale-105"
                      : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                  }`}
                >
                  {categoryConfig[category].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Category-specific intro for filtered views */}
          {activeCategory !== "todos" && (
            <div className="mb-12 md:mb-16">
              <CategoryIntro category={activeCategory} productCount={filteredProducts.length} />
            </div>
          )}

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={index}
                category={activeCategory}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className={`w-24 h-24 ${config.accentLight} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-4xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-nouvie-navy mb-2">No hay productos</h3>
              <p className="text-gray-500">No encontramos productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA - Matches active category */}
      <section className={`relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient}`} />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                ¿Te asesoramos?
              </h2>
              <p className="text-white/80 text-lg">
                Escríbenos y te ayudamos a elegir
              </p>
            </div>
            <a
              href="https://wa.me/573158326422"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-nouvie-navy font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Category-specific intro sections
function CategoryIntro({ category, productCount }: { category: ProductCategory; productCount: number }) {
  const intros: Record<ProductCategory, { title: string; description: string; features: string[] }> = {
    hogar: {
      title: "Limpieza Consciente",
      description: "Productos concentrados, biodegradables y seguros para toda la familia. Cuida tu hogar sin dañar el planeta.",
      features: ["100% Biodegradable", "No tóxico", "Concentrado"],
    },
    capilar: {
      title: "Belleza Natural",
      description: "Tratamientos capilares con ingredientes naturales como Bio Keratina, Manteca de Karité y Aceite de Argán.",
      features: ["Sin parabenos", "Ingredientes naturales", "Resultados visibles"],
    },
    institucional: {
      title: "Calidad Profesional",
      description: "Soluciones de limpieza de alto rendimiento para empresas, hoteles, restaurantes e instituciones.",
      features: ["Alto rendimiento", "Presentaciones grandes", "Costo-efectivo"],
    },
  };

  const intro = intros[category];
  const config = categoryConfig[category];

  return (
    <div className={`${config.lightBg} rounded-3xl p-6 md:p-10 relative overflow-hidden`}>
      {/* Decorative corner */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${config.gradient} opacity-10 rounded-bl-full`} />

      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold text-nouvie-navy mb-3">
          {intro.title}
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          {intro.description}
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-2">
          {intro.features.map((feature, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${config.accentLight} text-nouvie-navy`}
            >
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, index, category }: { product: Product; index: number; category: ProductCategory | "todos" }) {
  const categoryColors: Record<ProductCategory, {
    bg: string;
    text: string;
    accent: string;
    border: string;
    gradient: string;
  }> = {
    hogar: {
      bg: "bg-gradient-to-br from-rose-50 to-pink-100",
      text: "text-rose-700",
      accent: "bg-rose-500",
      border: "border-rose-200",
      gradient: "from-rose-500 to-pink-500",
    },
    capilar: {
      bg: "bg-gradient-to-br from-amber-50 to-orange-100",
      text: "text-amber-700",
      accent: "bg-amber-500",
      border: "border-amber-200",
      gradient: "from-amber-500 to-orange-500",
    },
    institucional: {
      bg: "bg-gradient-to-br from-sky-50 to-blue-100",
      text: "text-sky-700",
      accent: "bg-sky-600",
      border: "border-sky-200",
      gradient: "from-sky-500 to-blue-600",
    },
  };

  const colors = categoryColors[product.category];

  return (
    <Link
      href={`/productos/${product.slug}`}
      className={`group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border ${colors.border} hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image Container */}
      <div className={`relative aspect-square ${colors.bg} overflow-hidden`}>
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 md:p-8 group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badge - Top Left */}
        {product.badge && (
          <span className={`absolute top-3 left-3 bg-gradient-to-r ${colors.gradient} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
            {product.badge}
          </span>
        )}

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-nouvie-navy/0 group-hover:bg-nouvie-navy/5 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-nouvie-navy font-semibold px-6 py-3 rounded-full shadow-lg">
            Ver detalles →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Category Tag - Only show when viewing "todos" */}
        {category === "todos" && (
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${colors.accent}`} />
            <span className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
              {categoryNames[product.category]}
            </span>
          </div>
        )}

        {/* Name */}
        <h3 className="font-bold text-nouvie-navy text-base md:text-lg mb-1 group-hover:text-nouvie-turquoise transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="text-gray-500 text-sm line-clamp-1 mb-4">
          {product.tagline}
        </p>

        {/* Price Row */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          {product.price !== undefined && product.hasDbPrice ? (
            <span className="text-xl font-black text-nouvie-navy">
              {formatPrice(product.price)}
            </span>
          ) : (
            <span className="text-sm text-gray-400 italic">Consultar</span>
          )}

          {/* Arrow */}
          <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <svg
              className={`w-5 h-5 ${colors.text} group-hover:translate-x-1 transition-transform duration-300`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
