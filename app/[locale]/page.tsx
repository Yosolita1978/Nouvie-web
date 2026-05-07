import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { OrganicShapes } from "@/components/ui/OrganicShapes";

export const metadata: Metadata = {
  title: { absolute: "Nouvie Colombia - Limpieza Ecológica e Hipoalergénica" },
  description: "Descubre Nouvie: productos de limpieza hipoalergénicos, biodegradables y tratamientos capilares naturales. Libres de químicos tóxicos. Conócenos.",
  keywords: [
    "productos de limpieza ecológicos",
    "limpieza biodegradable Colombia",
    "tratamiento capilar natural",
    "productos sin químicos tóxicos",
    "shampoo sin sulfatos Colombia",
    "aseo hogar ecológico",
    "productos cruelty free",
    "Nouvie Colombia",
  ],
  alternates: {
    canonical: "https://www.nouvie.co",
  },
  openGraph: {
    title: "Nouvie - Productos Ecológicos para tu Hogar y Bienestar",
    description: "Limpieza biodegradable y tratamientos capilares naturales. Sin químicos tóxicos, seguros para tu familia.",
    url: "https://www.nouvie.co",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Nouvie - The Gift from Nature",
      },
    ],
  },
};

export default async function Home() {
  const t = await getTranslations("home");

  const categories = [
    {
      key: "hogar",
      href: { pathname: "/productos" as const, query: { categoria: "hogar" } },
      image: "/images/categoria-hogar.jpg",
    },
    {
      key: "capilar",
      href: { pathname: "/productos" as const, query: { categoria: "capilar" } },
      image: "/images/categoria-capilar.jpg",
    },
    {
      key: "institucional",
      href: { pathname: "/productos" as const, query: { categoria: "institucional" } },
      image: "/images/categoria-institucional.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen bg-white overflow-hidden">
        {/* Organic Background Shapes */}
        <OrganicShapes />

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 h-full">
          <div className="flex flex-col lg:flex-row lg:items-center min-h-[90vh] lg:min-h-screen py-8 lg:py-0">

            {/* Carousel - Shows FIRST on mobile, second on desktop */}
            <div className="lg:hidden mb-8 animate-fade-up">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-nouvie-pale-blue/40 to-nouvie-turquoise/20 rounded-2xl"></div>
                <div className="relative">
                  <HeroCarousel />
                </div>
              </div>
            </div>

            {/* Text Content - Asymmetric: takes 55% on desktop */}
            <div className="lg:w-[55%] lg:pr-12">
              {/* Tagline with gold accent */}
              <div className="animate-fade-up">
                <p className="font-serif text-nouvie-gold text-2xl md:text-3xl italic mb-2">
                  {t("hero.tagline")}
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-nouvie-gold to-nouvie-gold/30 mb-8"></div>
              </div>

              {/* Main Heading */}
              <h1 className="animate-fade-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-nouvie-navy mb-6 leading-tight">
                {t("hero.heading")}
              </h1>

              {/* Description */}
              <p className="animate-fade-up animation-delay-200 text-gray-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                {t("hero.description")}
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/productos"
                  className="btn btn-primary px-10 py-4 text-lg rounded-full shadow-lg shadow-nouvie-navy/20 hover:shadow-xl hover:shadow-nouvie-navy/30 transition-all"
                >
                  {t("hero.ctaProducts")}
                </Link>
                <Link
                  href="/nosotros"
                  className="btn btn-secondary px-10 py-4 text-lg rounded-full"
                >
                  {t("hero.ctaAbout")}
                </Link>
              </div>

              {/* Eco Benefits Banner */}
              <div className="animate-fade-up animation-delay-400 mt-12">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5 bg-nouvie-pale-blue/20 rounded-2xl p-4 sm:p-5">
                  {/* Biodegradable Badge */}
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 flex-shrink-0">
                    <Image
                      src="/images/biodegradable-stamp.png"
                      alt={t("hero.biodegradableBadgeAlt")}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>

                  {/* Benefits List */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-nouvie-turquoise flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">{t("hero.benefit1")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-nouvie-turquoise flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">{t("hero.benefit2")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-nouvie-turquoise flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">{t("hero.benefit3")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel - 45% on desktop only (mobile version is above) */}
            <div className="hidden lg:block lg:w-[45%] animate-fade-up animation-delay-500">
              <div className="relative">
                {/* Decorative frame behind carousel */}
                <div className="absolute -inset-4 bg-gradient-to-br from-nouvie-pale-blue/40 to-nouvie-turquoise/20 rounded-3xl -rotate-3"></div>
                <div className="relative">
                  <HeroCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PromoMix Banner */}
      <section className="relative overflow-hidden bg-nouvie-navy">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 md:w-80 md:h-80 bg-nouvie-turquoise/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-10 right-0 w-48 h-48 md:w-64 md:h-64 bg-nouvie-gold/8 rounded-full blur-[60px]" />
        </div>

        <Link href="/promomix" className="group block relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-10">
            {/* Mobile: stacked layout / Desktop: side-by-side */}
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              {/* Left — headline + copy */}
              <div className="flex items-center gap-4 md:gap-6">
                {/* Decorative number block */}
                <div className="hidden sm:flex flex-col items-center gap-1 shrink-0">
                  <span className="font-serif text-4xl md:text-5xl text-nouvie-gold italic leading-none">40</span>
                  <span className="text-[10px] text-white/40 tracking-wider uppercase">{t("promoBanner.discountUnit")}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-px bg-nouvie-turquoise" />
                    <span className="text-nouvie-turquoise text-[11px] font-semibold tracking-[0.15em] uppercase">
                      {t("promoBanner.promoLabel")}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
                    Promo<span className="text-nouvie-gold italic">Mix</span>
                  </h2>
                  <p className="text-white/50 text-sm mt-1 max-w-xs md:max-w-sm">
                    {t("promoBanner.description")}
                  </p>
                </div>
              </div>

              {/* Right — badges + CTA */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex gap-2">
                  <span className="bg-white/[0.07] text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/8">
                    {t("promoBanner.badgeHogar")}
                  </span>
                  <span className="bg-white/[0.07] text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/8">
                    {t("promoBanner.badgeCapilar")}
                  </span>
                </div>

                <span className="inline-flex items-center justify-center gap-2 bg-nouvie-gold text-nouvie-navy font-bold px-5 py-3 rounded-full text-sm min-h-[44px] min-w-[44px] shadow-lg shadow-nouvie-gold/20 group-hover:shadow-nouvie-gold/40 group-hover:scale-[1.03] transition-all duration-300">
                  <span className="hidden sm:inline">{t("promoBanner.cta")}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>

            </div>
          </div>
        </Link>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-nouvie-navy text-center mb-12">
            {t("categories.sectionTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.key}
                href={category.href}
                className="card card-hover group overflow-hidden"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={t(`categories.${category.key}.name`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-nouvie-navy mb-2 group-hover:text-nouvie-blue transition-colors">
                    {t(`categories.${category.key}.name`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`categories.${category.key}.description`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="py-16 bg-nouvie-pale-blue/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-nouvie-navy mb-6">
            {t("philosophy.sectionTitle")}
          </h2>
          <p className="text-nouvie-turquoise text-xl font-semibold mb-4">
            {t("philosophy.slogan")}
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            {t("philosophy.description")}
          </p>
          <Link
            href="/filosofia"
            className="btn btn-primary px-8 py-3"
          >
            {t("philosophy.cta")}
          </Link>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-nouvie-turquoise">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t("whatsappCta.heading")}
          </h2>
          <p className="text-white/90 mb-6">
            {t("whatsappCta.description")}
          </p>
          <a
            href="https://wa.me/573158326422"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-nouvie-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t("whatsappCta.cta")}
          </a>
        </div>
      </section>
    </div>
  );
}
