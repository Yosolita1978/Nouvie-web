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
      const mainTreatment = capilarProducts.find((p) => p.slug === treatment.slug);
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
  const hogarProducts = products.filter((p) => p.category === "hogar");
  const institucionalProducts = products.filter((p) => p.category === "institucional");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Compact Header */}
      <header className="bg-nouvie-navy sticky top-0 z-40">
        <div className="px-4 py-4 md:px-8">
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
        {/* ============================================ */}
        {/* HOGAR - Warm, Family-Friendly Layout */}
        {/* ============================================ */}
        {activeCategory === "hogar" && (
          <div className="bg-white">
            {/* Hero Header */}
            <div className="relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50" />
              <div className="absolute top-0 right-0 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

              <div className="relative px-4 py-10 md:py-16 text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  Línea Hogar
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto mb-6">
                  Limpieza segura para toda la familia. Productos biodegradables y libres de químicos tóxicos.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-rose-700 border border-rose-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Seguro para niños
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-rose-700 border border-rose-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Pet-friendly
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-rose-700 border border-rose-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                    </svg>
                    100% Biodegradable
                  </span>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="px-4 py-8 md:px-8 md:py-12">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {hogarProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/productos/${product.slug}`}
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
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            {product.badge}
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
                            <span className="text-sm text-gray-400">Consultar</span>
                          )}
                          <span className="inline-flex items-center gap-1 text-rose-600 font-semibold text-sm group-hover:gap-2 transition-all">
                            Ver más
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
                  <div className="text-center py-16">
                    <p className="text-gray-500">No hay productos en esta categoría.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-10 md:py-16 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Limpieza segura para tu hogar
                </h2>
                <p className="text-white/80 mb-6">
                  Escríbenos y te asesoramos sobre el producto ideal para tus necesidades
                </p>
                <a
                  href="https://wa.me/573158326422?text=Hola, me interesan los productos para el Hogar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-rose-600 font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 min-h-[48px]"
                >
                  <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ============================================ */}
        {/* INSTITUCIONAL - Professional Layout */}
        {/* ============================================ */}
        {activeCategory === "institucional" && (
          <div className="bg-slate-50">
            {/* Hero Header - Dark Professional */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0V0zm39 0h1v40h-1V0z'/%3E%3Cpath d='M0 0h40v1H0V0zm0 39h40v1H0v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative px-4 py-10 md:py-16 text-center">
                {/* Pro Badge */}
                <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-sky-500/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Uso Profesional
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                  Línea Institucional
                </h1>
                <p className="text-white/70 max-w-lg mx-auto mb-8">
                  Soluciones de limpieza industrial. Alta concentración, máximo rendimiento, bajo impacto ambiental.
                </p>

                {/* Key Features */}
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                    <span className="text-2xl font-bold text-white">+90%</span>
                    <p className="text-xs text-white/60">Biodegradable</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                    <span className="text-2xl font-bold text-white">0%</span>
                    <p className="text-xs text-white/60">Fosfatos</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                    <span className="text-2xl font-bold text-white">pH</span>
                    <p className="text-xs text-white/60">Neutro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases Strip */}
            <div className="bg-sky-600 px-4 py-4 overflow-x-auto scrollbar-hide">
              <div className="flex justify-center gap-6 min-w-max">
                {[
                  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Hoteles" },
                  { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", label: "Restaurantes" },
                  { icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", label: "Conjuntos" },
                  { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Oficinas" },
                  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Lavanderías" },
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
            <div className="px-4 py-8 md:px-8 md:py-12">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {institucionalProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/productos/${product.slug}`}
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
                          Profesional
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
                              <span className="text-xs text-slate-400 block">Desde</span>
                              <span className="text-xl font-black text-sky-600">
                                {formatPrice(product.price)}
                              </span>
                            </div>
                          ) : (
                            <span className="text-sm text-slate-400">Solicitar cotización</span>
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
                  <div className="text-center py-16">
                    <p className="text-slate-500">No hay productos en esta categoría.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-4 py-10 md:py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  ¿Necesitas una cotización personalizada?
                </h2>
                <p className="text-white/60 mb-6">
                  Contáctanos para grandes volúmenes y precios especiales para tu negocio
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/573158326422?text=Hola, me interesa cotizar productos de la Línea Institucional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white font-bold px-6 py-3 rounded-full hover:bg-sky-400 transition-all duration-300 min-h-[48px]"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Solicitar Cotización
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================ */}
        {/* CAPILAR - Special Catalog Layout */}
        {/* ============================================ */}
        {activeCategory === "capilar" && (
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
        )}

        {/* ============================================ */}
        {/* TODOS - Default Grid Layout */}
        {/* ============================================ */}
        {activeCategory === "todos" && (
          <div>
            {/* Page Header */}
            <div className="bg-white px-4 py-8 md:py-12 border-b border-gray-100">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-nouvie-navy mb-2">
                  Nuestros Productos
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
