import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getProductBySlug,
  getAllProducts,
  categoryNames,
  type ProductCategory,
} from "@/lib/product-data";

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
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: product.name,
    description: product.tagline,
  };
}

const categoryColors: Record<ProductCategory, { bg: string; text: string; accent: string; light: string }> = {
  hogar: { bg: "bg-pink-500", text: "text-pink-600", accent: "bg-pink-100", light: "bg-pink-50" },
  capilar: { bg: "bg-green-500", text: "text-green-600", accent: "bg-green-100", light: "bg-green-50" },
  institucional: { bg: "bg-blue-500", text: "text-blue-600", accent: "bg-blue-100", light: "bg-blue-50" },
};

export default async function ProductoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const colors = categoryColors[product.category];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-nouvie-navy overflow-hidden">
        {/* Decorative blurs */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${colors.bg} opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2`} />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-nouvie-turquoise/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        {/* Breadcrumb */}
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/productos" className="text-white/60 hover:text-white transition-colors">
              Productos
            </Link>
            <span className="text-white/40">/</span>
            <Link
              href={`/productos?categoria=${product.category}`}
              className="text-white/60 hover:text-white transition-colors"
            >
              {categoryNames[product.category]}
            </Link>
          </nav>
        </div>

        {/* Main Hero Content */}
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              {/* Category Tag */}
              <div className="flex items-center gap-3 mb-6 animate-fade-up">
                <div className={`w-3 h-3 rounded-full ${colors.bg}`} />
                <span className={`text-sm font-medium uppercase tracking-widest ${colors.text} ${colors.accent} px-3 py-1 rounded-full`}>
                  {categoryNames[product.category]}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up animation-delay-100">
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-xl text-white/70 mb-8 animate-fade-up animation-delay-200">
                {product.tagline}
              </p>

              {/* Badge */}
              {product.badge && (
                <div className="inline-flex items-center gap-2 bg-nouvie-turquoise/20 text-nouvie-turquoise px-4 py-2 rounded-full mb-8 animate-fade-up animation-delay-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{product.badge}</span>
                </div>
              )}

              {/* CTA Button */}
              <div className="animate-fade-up animation-delay-400">
                <a
                  href={`https://wa.me/573158326422?text=Hola, me interesa el producto: ${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Pedir por WhatsApp</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Image */}
            <div className="order-1 lg:order-2 animate-fade-up">
              <div className={`relative aspect-square ${colors.light} rounded-3xl overflow-hidden`}>
                <Image
                  src={product.usageImage || product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-nouvie-navy mb-6 flex items-center gap-3">
                <div className={`w-1 h-8 ${colors.bg} rounded-full`} />
                Descripción
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Benefits */}
            {product.benefits && (
              <div>
                <h2 className="text-2xl font-bold text-nouvie-navy mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-nouvie-turquoise rounded-full" />
                  Beneficios
                </h2>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-nouvie-turquoise/10 flex items-center justify-center shrink-0 group-hover:bg-nouvie-turquoise/20 transition-colors">
                        <svg className="w-4 h-4 text-nouvie-turquoise" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 pt-1">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dilution Table (Hogar) */}
      {product.dilutionTable && (
        <section className={`py-16 lg:py-24 ${colors.light}`}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-nouvie-navy mb-2 text-center">
                Tabla de Dilución
              </h2>
              <p className="text-gray-500 text-center mb-10">
                Medidas recomendadas para un uso óptimo
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className={`${colors.bg} text-white px-6 py-4 grid grid-cols-3 gap-4`}>
                  <span className="font-semibold">Uso</span>
                  <span className="font-semibold">Cantidad</span>
                  <span className="font-semibold">Agua</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {product.dilutionTable.map((row, i) => (
                    <div key={i} className="px-6 py-4 grid grid-cols-3 gap-4 hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700 font-medium">{row.uso}</span>
                      <span className="text-gray-600">{row.cantidad}</span>
                      <span className="text-gray-600">{row.agua}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Usage Tips (Hogar) */}
      {product.usageTips && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-nouvie-navy mb-2 text-center">
              Consejos de Uso
            </h2>
            <p className="text-gray-500 text-center mb-10">
              Aprovecha al máximo tu producto
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {product.usageTips.map((tip, i) => (
                <div
                  key={i}
                  className={`${colors.light} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <div className={`w-12 h-12 ${colors.accent} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">💡</span>
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment Steps (Capilar) */}
      {product.steps && (
        <section className={`py-16 lg:py-24 ${colors.light}`}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-nouvie-navy mb-2 text-center">
              Pasos del Tratamiento
            </h2>
            <p className="text-gray-500 text-center mb-12">
              Sigue estos pasos para mejores resultados
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {product.steps.map((step, i) => (
                <div key={step.step} className="relative">
                  {/* Connector Line */}
                  {i < product.steps!.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gray-200" />
                  )}

                  <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow relative">
                    <div className={`w-16 h-16 ${colors.bg} text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg`}>
                      {step.step}
                    </div>
                    <h3 className="font-bold text-nouvie-navy text-lg mb-4">{step.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.instruction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specs & Presentations (Institucional) */}
      {product.specs && (
        <section className={`py-16 lg:py-24 ${colors.light}`}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Specs */}
              <div>
                <h2 className="text-2xl font-bold text-nouvie-navy mb-6 flex items-center gap-3">
                  <div className={`w-1 h-8 ${colors.bg} rounded-full`} />
                  Características Técnicas
                </h2>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`px-6 py-4 flex justify-between items-center ${
                        i !== product.specs!.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className={`${colors.text} font-semibold`}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Presentations */}
              {product.presentations && (
                <div>
                  <h2 className="text-2xl font-bold text-nouvie-navy mb-6 flex items-center gap-3">
                    <div className="w-1 h-8 bg-nouvie-turquoise rounded-full" />
                    Presentaciones
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {product.presentations.map((pres, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
                      >
                        <div className={`w-16 h-16 ${colors.accent} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                          <svg className={`w-8 h-8 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <span className="text-xl font-bold text-nouvie-navy">{pres.size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Back Navigation */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/productos"
            className="inline-flex items-center gap-3 text-nouvie-navy hover:text-nouvie-turquoise transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-medium">Volver a productos</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
