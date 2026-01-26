import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProductBySlug as getProductBySlugFromDb } from "@/lib/products";
import {
  getProductBySlug as getProductBySlugStatic,
  getAllProducts,
  categoryNames,
} from "@/lib/product-data";

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
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlugStatic(slug);

  if (!product) {
    return { title: "Producto no encontrado" };
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

  return {
    title: `${product.name} - ${categoryNames[product.category]}`,
    description: `${product.tagline}. ${product.description?.slice(0, 120) || ""} Producto 100% biodegradable y libre de químicos tóxicos. Compra en Nouvie Colombia.`,
    keywords,
    alternates: {
      canonical: `https://www.nouvie.co/productos/${slug}`,
    },
    openGraph: {
      title: `${product.name} | Nouvie Colombia`,
      description: product.tagline,
      url: `https://www.nouvie.co/productos/${slug}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.tagline,
      images: [product.image],
    },
  };
}

// Benefit tags for capilar products
const capilarBenefitTags: Record<string, string[]> = {
  "tratamiento-kiwi-acai": ["LISO", "BRILLO", "ANTI-FRIZZ"],
  "tratamiento-honey-melon": ["FUERZA", "BRILLO", "REPARACIÓN"],
  "tratamiento-revitalizante": ["FORTALEZA", "NUTRICIÓN", "HIDRATACIÓN"],
  "shampoo-suave-y-liso": ["LISO", "LIMPIEZA SUAVE"],
  "mascarilla-suave-y-liso": ["NUTRICIÓN", "BRILLO"],
  "locion-suave-y-liso": ["ANTI-FRIZZ", "PROTECCIÓN"],
  "shampoo-reparacion-intensa": ["REPARACIÓN", "NUTRICIÓN"],
  "mascarilla-reparacion-intensa": ["FUERZA", "BRILLO"],
  "locion-reparacion-intensa": ["PROTECCIÓN", "HIDRATACIÓN"],
  "shampoo-revitalizante": ["FORTALEZA", "MASCULINO"],
  "locion-revitalizante": ["MOLDEO", "FORTALEZA"],
};

export default async function ProductoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlugFromDb(slug);

  if (!product) {
    notFound();
  }

  const benefitTags = capilarBenefitTags[product.slug] || [];
  const hasPrice = product.price !== undefined && product.hasDbPrice;

  // ============================================
  // HOGAR LAYOUT - Warm, Family-Friendly
  // ============================================
  if (product.category === "hogar") {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero - Warm gradient with product showcase */}
        <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-4 pt-6 pb-8 md:px-8 md:pt-8 md:pb-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link href="/productos" className="text-gray-500 hover:text-rose-600 transition-colors">
                Productos
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-rose-600 font-medium">Línea Hogar</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
              {/* Product Image - First on mobile */}
              <div className="lg:w-1/2 order-1">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Background shape */}
                  <div className="absolute inset-4 bg-white rounded-[2rem] shadow-xl" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 relative z-10"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-0 left-0 bg-rose-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-20">
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 order-2">
                {/* Category pill */}
                <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Línea Hogar
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                  {product.tagline}
                </p>

                {/* Price */}
                {hasPrice && (
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-black text-rose-600">
                      {formatPrice(product.price!)}
                    </span>
                  </div>
                )}

                {/* Quick benefits */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.benefits?.slice(0, 3).map((benefit, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-white/80 text-gray-700 px-3 py-1.5 rounded-full text-sm border border-rose-100">
                      <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/573158326422?text=Hola, me interesa el producto: ${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-rose-500 text-white font-bold px-8 py-4 rounded-full hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px]"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="px-4 py-12 md:px-8 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-rose-500 rounded-full" />
              Sobre este producto
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>
        </section>

        {/* Dilution Table - Card style */}
        {product.dilutionTable && (
          <section className="px-4 py-12 md:px-8 md:py-16 bg-rose-50">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-4 py-2 rounded-full mb-3">
                  MODO DE USO
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Tabla de Dilución
                </h2>
              </div>

              <div className="space-y-3">
                {product.dilutionTable.map((row, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center gap-3 md:gap-6"
                  >
                    <div className="flex-1">
                      <span className="text-xs text-rose-500 font-semibold uppercase tracking-wide">Uso</span>
                      <p className="font-bold text-gray-900">{row.uso}</p>
                    </div>
                    <div className="flex gap-6 md:gap-8">
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wide">Cantidad</span>
                        <p className="font-semibold text-gray-700">{row.cantidad}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wide">Agua</span>
                        <p className="font-semibold text-gray-700">{row.agua}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Grid */}
        {product.benefits && (
          <section className="px-4 py-12 md:px-8 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Beneficios
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-5">
                    <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium pt-2">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Usage Tips */}
        {product.usageTips && (
          <section className="px-4 py-12 md:px-8 md:py-16 bg-gradient-to-br from-orange-50 to-rose-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-4 py-2 rounded-full mb-3">
                  TIPS
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Consejos de Uso
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {product.usageTips.map((tip, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Family Safe Badge */}
        <section className="px-4 py-12 md:px-8 md:py-16 bg-rose-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Seguro para toda la familia
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Nuestros productos están formulados sin químicos tóxicos, son biodegradables y seguros para usar alrededor de niños y mascotas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">No tóxico</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Biodegradable</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Sin químicos agresivos</span>
            </div>
          </div>
        </section>

        {/* Back Navigation */}
        <section className="px-4 py-6 md:px-8 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/productos"
              className="inline-flex items-center gap-3 text-gray-600 hover:text-rose-600 transition-colors min-h-[44px]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Volver a productos</span>
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
            <nav className="flex items-center gap-2 text-sm mb-6 max-w-7xl mx-auto">
              <Link href="/productos" className="text-white/60 hover:text-white transition-colors">
                Productos
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-sky-400 font-medium">Línea Institucional</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
              {/* Content - First on mobile for institucional */}
              <div className="lg:w-1/2 order-2 lg:order-1">
                {/* Pro badge */}
                <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-sky-500/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Uso Profesional
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {product.name}
                </h1>

                <p className="text-lg text-white/70 mb-6">
                  {product.tagline}
                </p>

                {/* Price - if available */}
                {hasPrice && (
                  <div className="mb-6">
                    <span className="text-sm text-white/50 block mb-1">Desde</span>
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
                  href={`https://wa.me/573158326422?text=Hola, me interesa el producto institucional: ${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-sky-500 text-white font-bold px-8 py-4 rounded-full hover:bg-sky-400 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 min-h-[56px]"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar Cotización
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
              Descripción del Producto
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>
        </section>

        {/* Benefits */}
        {product.benefits && (
          <section className="px-4 py-12 md:px-8 md:py-16 bg-slate-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                Características Principales
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
                  FICHA TÉCNICA
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Especificaciones
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
                  Presentaciones Disponibles
                </h2>
                <p className="text-slate-500 mt-2">Elige el tamaño ideal para tu negocio</p>
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
                    <span className="text-xl font-bold text-slate-900">{pres.size}</span>
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
                Ideal Para
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Hoteles" },
                { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", label: "Restaurantes" },
                { icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", label: "Conjuntos" },
                { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Oficinas" },
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

        {/* Eco Badge */}
        <section className="px-4 py-12 md:px-8 md:py-16 bg-emerald-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Compromiso Ambiental
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              Biodegradabilidad superior al 90%. Formulados sin fosfatos ni químicos tóxicos.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Biodegradable +90%</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">pH Neutro</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">No Tóxico</span>
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
              <span className="font-medium">Volver a productos</span>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // ============================================
  // CAPILAR LAYOUT - Editorial, Beauty-focused
  // ============================================
  return (
    <div className="flex flex-col">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-[85vh] lg:min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={product.usageImage || product.image}
            alt={product.name}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>

        {/* Breadcrumb */}
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/productos" className="text-white/60 hover:text-white transition-colors">
              Productos
            </Link>
            <span className="text-white/40">/</span>
            <Link
              href="/productos"
              className="text-white/60 hover:text-white transition-colors"
            >
              {categoryNames[product.category]}
            </Link>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 flex flex-col justify-end min-h-[85vh] lg:min-h-screen pb-16 lg:pb-24">
          <div className="max-w-2xl">
            {/* Benefit Tags */}
            <div className="flex flex-wrap gap-3 mb-6 animate-fade-up">
              {benefitTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Product Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight animate-fade-up animation-delay-100">
              {product.name.replace("Tratamiento ", "")}
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/80 mb-6 animate-fade-up animation-delay-200">
              {product.tagline}
            </p>

            {/* Size Badge */}
            {product.size && (
              <div className="mb-4 animate-fade-up animation-delay-225">
                <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-200 text-sm font-semibold rounded-full">
                  {product.size}
                </span>
              </div>
            )}

            {/* Price */}
            {hasPrice && (
              <div className="mb-8 animate-fade-up animation-delay-250">
                <span className="text-4xl md:text-5xl font-bold text-white">
                  {formatPrice(product.price!)}
                </span>
              </div>
            )}

            {/* CTA Button */}
            <div className="animate-fade-up animation-delay-300">
              <a
                href={`https://wa.me/573158326422?text=Hola, me interesa el producto: ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-amber-900 font-semibold px-8 py-4 rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px]"
              >
                <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Pedir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Description Text */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-bold tracking-widest rounded-full mb-6">
                {product.parentTreatmentSlug ? "PRODUCTO CAPILAR" : "TRATAMIENTO CAPILAR"}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {product.tagline}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Benefits Grid */}
              {product.benefits && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.benefits.slice(0, 4).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Parent Treatment CTA */}
              {product.parentTreatmentSlug && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3">
                    Este producto forma parte de un tratamiento completo
                  </p>
                  <Link
                    href={`/productos/${product.parentTreatmentSlug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm hover:bg-amber-200 transition-colors min-h-[44px]"
                  >
                    <span>Ver tratamiento completo</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Steps Section */}
      {product.steps && (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-bold tracking-widest rounded-full mb-4">
                MODO DE USO
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pasos del Tratamiento
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

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-amber-500 text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Lista para transformar tu cabello?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos por WhatsApp y te asesoramos sobre el tratamiento ideal para ti
          </p>
          <a
            href={`https://wa.me/573158326422?text=Hola, me interesa el ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-amber-700 font-bold px-10 py-5 rounded-full hover:shadow-xl transition-all duration-300 min-h-[56px]"
          >
            <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Pedir por WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/productos"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-amber-600 transition-colors min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Volver a productos</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
