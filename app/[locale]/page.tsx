import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { OrganicShapes } from "@/components/ui/OrganicShapes";

export const metadata: Metadata = {
  title: { absolute: "Nouvie Colombia - Limpieza Ecológica e Hipoalergénica" },
  description: "Descubre Nouvie: champú sin sal, productos de limpieza hipoalergénicos y biodegradables hechos en Colombia. Libres de químicos tóxicos. Conócenos.",
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

  const distributorHighlights = [
    {
      titleKey: "distributor.highlight1Title",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      titleKey: "distributor.highlight2Title",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      titleKey: "distributor.highlight3Title",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      titleKey: "distributor.highlight4Title",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  const distributorTrust = ["distributor.trust1", "distributor.trust2", "distributor.trust3"];
  const distributorBenefits = ["distributor.benefit1", "distributor.benefit2", "distributor.benefit3", "distributor.benefit4"];
  const distributorRequirements = ["distributor.requirement1", "distributor.requirement2", "distributor.requirement3", "distributor.requirement4", "distributor.requirement5"];
  const distributorPurpose = ["distributor.purpose1", "distributor.purpose2", "distributor.purpose3", "distributor.purpose4"];

  const freeFromItems = ["freeFrom.item1", "freeFrom.item2", "freeFrom.item3", "freeFrom.item4"];

  const checkIcon = (
    <svg className="w-5 h-5 text-nouvie-turquoise flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

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
              <h1 className="animate-fade-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-nouvie-navy mb-4 leading-tight">
                {t("hero.heading")}
              </h1>

              {/* Subtitle (support line) */}
              <p className="animate-fade-up animation-delay-200 text-nouvie-navy/80 text-xl md:text-2xl font-medium mb-6 max-w-xl leading-snug">
                {t("hero.subtitle")}
              </p>

              {/* Description */}
              <p className="animate-fade-up animation-delay-300 text-gray-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
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
                      sizes="(max-width: 640px) 64px, 72px"
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

      {/* El problema invisible */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white via-nouvie-pale-blue/40 to-white overflow-hidden">
        {/* Soft decorative glow for depth */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-nouvie-turquoise/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 w-96 h-96 bg-nouvie-gold/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px bg-nouvie-turquoise" />
            <span className="text-nouvie-turquoise text-xs font-semibold tracking-[0.15em] uppercase">
              {t("problem.eyebrow")}
            </span>
            <span className="w-5 h-px bg-nouvie-turquoise" />
          </div>

          <h2 className="text-2xl lg:text-4xl font-bold text-nouvie-navy text-center mb-10">
            {t("problem.heading")}
          </h2>

          {/* Insight card */}
          <div className="relative bg-white rounded-2xl shadow-sm border border-nouvie-pale-blue/60 p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-nouvie-turquoise/10 text-nouvie-turquoise flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h11a2.5 2.5 0 10-2.5-2.5M3 16h13a2.5 2.5 0 11-2.5 2.5M3 12h17a2.5 2.5 0 10-2.5-2.5" />
                </svg>
              </div>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                {t("problem.body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué sin parabenos? */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-nouvie-navy text-center mb-6">
            {t("parabens.heading")}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            {t("parabens.body")}
          </p>
        </div>
      </section>

      {/* Free-from band — Qué NO lleva Nouvie */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="bg-nouvie-pale-blue/20 rounded-2xl p-6 lg:p-8">
            <p className="text-center text-nouvie-navy font-semibold mb-5">
              {t("freeFrom.label")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {freeFromItems.map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-nouvie-turquoise flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Champú + Eco SEO section (cluster keyword anchors) */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-nouvie-navy text-center mb-6">
            Tratamientos capilares sin parabenos y productos de limpieza BIODEGRADABLES
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed mb-8">
            Nouvie es una marca que combina el cuidado capilar y la limpieza para el hogar SIN TÓXICOS.
            Nuestro tratamiento capilar consta de champú sin sal, mascarilla y loción moldeadora sin
            sulfatos ni parabenos. Nuestra línea de productos de limpieza ofrece limpiadores
            biodegradables, libres de químicos tóxicos y seguros para tu familia y tus mascotas.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link href={{ pathname: "/productos/[slug]" as const, params: { slug: "shampoo-suave-y-liso" } }} className="px-4 py-2 bg-nouvie-pale-blue/30 text-nouvie-navy rounded-full hover:bg-nouvie-pale-blue/50 transition-colors">
              shampoo sin sal
            </Link>
            <Link href={{ pathname: "/productos/[slug]" as const, params: { slug: "desengrasante-bioptimo-500ml" } }} className="px-4 py-2 bg-nouvie-pale-blue/30 text-nouvie-navy rounded-full hover:bg-nouvie-pale-blue/50 transition-colors">
              limpiador multiusos
            </Link>
            <Link href={{ pathname: "/productos/[slug]" as const, params: { slug: "lustra-muebles-concentrado" } }} className="px-4 py-2 bg-nouvie-pale-blue/30 text-nouvie-navy rounded-full hover:bg-nouvie-pale-blue/50 transition-colors">
              lustramuebles
            </Link>
            <Link href={{ pathname: "/productos/[slug]" as const, params: { slug: "limpia-pisos-concentrado" } }} className="px-4 py-2 bg-nouvie-pale-blue/30 text-nouvie-navy rounded-full hover:bg-nouvie-pale-blue/50 transition-colors">
              limpiapisos
            </Link>
            <Link href={{ pathname: "/productos/[slug]" as const, params: { slug: "limpia-vidrios-concentrado" } }} className="px-4 py-2 bg-nouvie-pale-blue/30 text-nouvie-navy rounded-full hover:bg-nouvie-pale-blue/50 transition-colors">
              limpiador alfombras
            </Link>
            <Link href={{ pathname: "/productos/[slug]" as const, params: { slug: "detergente-neutro" } }} className="px-4 py-2 bg-nouvie-pale-blue/30 text-nouvie-navy rounded-full hover:bg-nouvie-pale-blue/50 transition-colors">
              detergente líquido hipoalergénico
            </Link>
          </div>
        </div>
      </section>

      {/* Calidad de Vida Banner */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-10">
          <Image
            src="/images/banner-calidad-vida.png"
            alt="Nouvie: mejora la calidad de vida de las personas con productos sin tóxicos nocivos para la salud"
            width={1875}
            height={480}
            className="w-full h-auto rounded-2xl"
          />
        </div>
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

      {/* Testimonios (featured verified story) */}
      <section id="historias" className="scroll-mt-24 py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-nouvie-navy text-center mb-10">
            {t("testimonials.heading")}
          </h2>

          <div className="flex flex-col md:flex-row bg-nouvie-pale-blue/20 rounded-3xl overflow-hidden shadow-sm border border-nouvie-pale-blue/60">
            {/* Image — links to her video story */}
            <Link
              href="/testimonios"
              aria-label={t("testimonials.cta")}
              className="group relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[340px]"
            >
              <Image
                src="/images/testimonial-maria-elena.jpg"
                alt={t("testimonials.author")}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              {/* Play overlay */}
              <span className="absolute inset-0 flex items-center justify-center bg-nouvie-navy/10 group-hover:bg-nouvie-navy/20 transition-colors">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-7 h-7 text-nouvie-navy translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </Link>

            {/* Content */}
            <div className="w-full md:w-3/5 p-6 lg:p-10 text-center md:text-left">
              {/* Verified tag */}
              <div className="inline-flex items-center gap-2 bg-nouvie-turquoise/10 text-nouvie-turquoise px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t("testimonials.tag")}
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-5">
                {t("testimonials.body")}
              </blockquote>

              <p className="text-nouvie-navy font-semibold mb-6">
                {t("testimonials.author")}
              </p>

              <Link
                href="/testimonios"
                className="btn btn-secondary px-8 py-3"
              >
                {t("testimonials.cta")}
              </Link>
            </div>
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

      {/* Become a Distributor Section */}
      <section id="distribuidores" className="scroll-mt-24 py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-nouvie-turquoise" />
              <span className="text-nouvie-turquoise text-xs font-semibold tracking-[0.15em] uppercase">
                {t("distributor.eyebrow")}
              </span>
              <span className="w-5 h-px bg-nouvie-turquoise" />
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-nouvie-navy mb-3">
              {t("distributor.heading")}
            </h2>
            <p className="text-nouvie-turquoise text-xl font-semibold mb-5">
              {t("distributor.subheading")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("distributor.intro")}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {distributorHighlights.map((item) => (
              <div key={item.titleKey} className="flex flex-col items-center text-center bg-nouvie-pale-blue/20 rounded-2xl p-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-nouvie-blue mb-3 shadow-sm">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-nouvie-navy">{t(item.titleKey)}</span>
              </div>
            ))}
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-600">
            {distributorTrust.map((key) => (
              <span key={key} className="inline-flex items-center gap-2">
                {checkIcon}
                {t(key)}
              </span>
            ))}
          </div>

          {/* Why be a distributor — 3 columns */}
          <h3 className="text-xl lg:text-2xl font-bold text-nouvie-navy text-center mt-14 mb-8">
            {t("distributor.whyTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-nouvie-pale-blue/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-nouvie-blue mb-4">{t("distributor.benefitsTitle")}</h4>
              <ul className="space-y-3">
                {distributorBenefits.map((key) => (
                  <li key={key} className="flex items-start gap-2 text-gray-700 text-sm">
                    {checkIcon}
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-nouvie-pale-blue/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-nouvie-blue mb-4">{t("distributor.requirementsTitle")}</h4>
              <ul className="space-y-3">
                {distributorRequirements.map((key) => (
                  <li key={key} className="flex items-start gap-2 text-gray-700 text-sm">
                    {checkIcon}
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-nouvie-pale-blue/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-nouvie-blue mb-4">{t("distributor.purposeTitle")}</h4>
              <ul className="space-y-3">
                {distributorPurpose.map((key) => (
                  <li key={key} className="flex items-start gap-2 text-gray-700 text-sm">
                    {checkIcon}
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-5 max-w-2xl mx-auto">{t("distributor.ctaText")}</p>
            <a
              href={`https://wa.me/573158326422?text=${encodeURIComponent(t("distributor.whatsappMessage"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-nouvie-turquoise text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t("distributor.cta")}
            </a>
          </div>
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
