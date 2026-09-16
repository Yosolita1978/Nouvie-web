import Image from "next/image";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ProductImageCarousel } from "@/components/ui/ProductImageCarousel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return buildPageMetadata({
    key: "bioptimo",
    href: "/bioptimo",
    locale: (await params).locale,
    absoluteTitle: true,
  });
}

// The Spanish page is a bilingual flyer: Spanish text with a small English line
// under it. The English page shows only English, so Google sees two different
// pages instead of two copies of the same one.
//
// Each bilingual text is an { es, en } pair: the main line uses the page's
// language, and the small English line only appears on the Spanish page.
type Bilingual = { es: string; en: string };

const stamps: { src: string; label: Bilingual }[] = [
  { src: "/images/sellos/sulfate.png", label: { es: "Sulfate Free", en: "Sulfate Free" } },
  { src: "/images/sellos/phosphate.png", label: { es: "Phosphate Free", en: "Phosphate Free" } },
  { src: "/images/sellos/non-toxic.png", label: { es: "Non Toxic", en: "Non Toxic" } },
  { src: "/images/sellos/flamable.png", label: { es: "No Flamable", en: "Non-Flammable" } },
  { src: "/images/sellos/non-caustic.png", label: { es: "Non Caustic", en: "Non Caustic" } },
  { src: "/images/sellos/producto-sostenible.png", label: { es: "Producto Sostenible", en: "Sustainable Product" } },
];

const benefits: Bilingual[] = [
  { es: "4x más tensioactivo", en: "4x more surfactant power" },
  { es: "No necesita enjuague", en: "No rinsing needed" },
  { es: "Suave con las manos", en: "Gentle on hands — no gloves needed" },
  { es: "Ahorra agua y tiempo", en: "Saves water & time" },
];

const kitchenUses: Bilingual[] = [
  { es: "Pisos de cerámica", en: "Ceramic floors" },
  { es: "Acero inoxidable", en: "Stainless steel" },
  { es: "Elimina olores", en: "Eliminates odors" },
];

const bathroomUses: Bilingual[] = [
  { es: "Quita sarro y óxido", en: "Removes limescale & rust" },
  { es: "Manchas en tela", en: "Fabric stains" },
  { es: "Prelavado de ropa", en: "Laundry pre-wash" },
];

const text = {
  es: {
    intro: "Limpiador multiusos ecológico que reemplaza desengrasante en spray, quitagrasa de cocina y removedor de manchas en una sola botella biodegradable. Forma parte de los",
    introLink: "productos de limpieza ecológicos en Colombia",
    introEnd: "de Nouvie.",
    badge: "Reemplaza 8 productos",
    size: "500 mL • Aroma Cítrico",
    carousel: [
      {
        caption: "Desengrasante Multiusos 500 ml",
        alt: "Botella atomizadora de desengrasante multiusos Bioptimo de 500 ml, lista para usar",
      },
      {
        caption: "Adiós a la grasa de cocina",
        alt: "Desengrasante Bioptimo rociado sobre una estufa de vidrio con grasa quemada, junto a un paño de microfibra",
      },
      {
        caption: "Quita sarro, óxido y hongos",
        alt: "Etiqueta del Bioptimo 500 ml con sello biodegradable e iconos de grasa de cocina, hongos, baños y óxido",
      },
    ],
    carouselAlt: "Bioptimo Desengrasante Multiusos",
    orderNow: "PÍDELO YA",
    whatsappText: "Hola, me interesa el Bioptimo Desengrasante Multiusos",
    kitchen: "Cocinas y hornos",
    bathroom: "Baños y duchas",
    biodegradable: "Biodegradable en 24-48 horas",
    orders: "Pedidos / Orders: WhatsApp",
    sustainable: "Producto Sostenible",
  },
  en: {
    intro: "Eco-friendly multi-purpose cleaner that replaces spray degreaser, kitchen grease remover and stain remover in a single biodegradable bottle. Part of Nouvie's",
    introLink: "eco-friendly cleaning products from Colombia",
    introEnd: "",
    badge: "Replaces 8 conventional products",
    size: "500 mL • Citrus Scent",
    carousel: [
      {
        caption: "Multi-Purpose Degreaser 500 ml",
        alt: "Bioptimo 500 ml multi-purpose degreaser spray bottle, ready to use",
      },
      {
        caption: "Goodbye to kitchen grease",
        alt: "Bioptimo degreaser sprayed on a glass stovetop with burnt-on grease, next to a microfiber cloth",
      },
      {
        caption: "Removes limescale, rust and mold",
        alt: "Bioptimo 500 ml label with biodegradable seal and icons for kitchen grease, mold, bathrooms and rust",
      },
    ],
    carouselAlt: "Bioptimo Multi-Purpose Degreaser",
    orderNow: "ORDER NOW",
    whatsappText: "Hello, I am interested in the Bioptimo Multi-Purpose Degreaser",
    kitchen: "Kitchens & ovens",
    bathroom: "Bathrooms & showers",
    biodegradable: "Biodegradable in 24-48 hours",
    orders: "Orders: WhatsApp",
    sustainable: "Sustainable Product",
  },
};

export default async function BioptimoPage() {
  const locale = (await getLocale()) === "en" ? "en" : "es";
  const isSpanish = locale === "es";
  const t = text[locale];
  const whatsappHref = `https://wa.me/573158326422?text=${encodeURIComponent(t.whatsappText)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/bioptimo-hero-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-nouvie-navy/80" />

        <div className="relative z-10 px-4 py-12 md:py-16 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left — Text */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {isSpanish ? (
                  <>Desengrasante<br />Multiusos</>
                ) : (
                  <>Multi-Purpose<br />Degreaser</>
                )}
              </h1>
              {isSpanish && (
                <p className="text-nouvie-turquoise text-lg md:text-xl mt-2 italic">
                  Multi-Purpose Degreaser
                </p>
              )}
              <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed max-w-md">
                {t.intro}{" "}
                <Link
                  href="/nosotros"
                  className="underline underline-offset-2 text-white hover:text-nouvie-turquoise transition-colors"
                >
                  {t.introLink}
                </Link>
                {t.introEnd ? ` ${t.introEnd}` : "."}
              </p>
              <p className="font-serif italic text-nouvie-gold text-sm mt-3">
                The Gift from Nature
              </p>

              {/* Reemplaza badge */}
              <div className="inline-block bg-nouvie-turquoise text-white rounded-lg px-5 py-2.5 mt-6">
                <p className="font-bold text-base">{t.badge}</p>
                {isSpanish && (
                  <p className="text-white/80 text-xs">Replaces 8 conventional products</p>
                )}
              </div>
            </div>

            {/* Right — Brand info */}
            <div className="md:w-1/2 flex flex-col items-center md:items-end">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl">BIOPTIMO</span>
                <span className="text-white/60 text-sm">by Nouvie</span>
              </div>
              <p className="text-nouvie-turquoise font-semibold text-sm mt-2">
                {t.size}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section className="px-4 py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Benefits list */}
          <div className="w-full md:w-1/2 space-y-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-nouvie-turquoise mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{b[locale]}</p>
                  {isSpanish && <p className="text-gray-400 text-sm">{b.en}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Product carousel — front & back */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square max-w-sm mx-auto bg-gray-50 rounded-2xl overflow-hidden">
              <ProductImageCarousel
                images={[
                  {
                    src: "/images/productos/bioptimo-full-trans.webp",
                    fit: "contain",
                    ...t.carousel[0],
                  },
                  {
                    src: "/images/productos/bioptimo-insite.jpg",
                    fit: "cover",
                    ...t.carousel[1],
                  },
                  {
                    src: "/images/productos/bioptimo-label.jpg",
                    fit: "cover",
                    ...t.carousel[2],
                  },
                ]}
                alt={t.carouselAlt}
                ctaHref={whatsappHref}
                ctaLabel={t.orderNow}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== USES ==================== */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left — Kitchen */}
        <div className="relative min-h-[280px] md:min-h-[320px]">
          <Image
            src="/images/bioptimo-uses-left.png"
            alt={t.kitchen}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-nouvie-navy/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-10 text-white text-center">
            <h3 className="text-xl font-bold mb-1">{t.kitchen}</h3>
            {isSpanish && <p className="text-white/60 text-sm mb-4">{text.en.kitchen}</p>}
            <div className={`space-y-2 text-sm ${isSpanish ? "" : "mt-3"}`}>
              {kitchenUses.map((use) => (
                <p key={use.es}>
                  {use[locale]}
                  {isSpanish && <span className="text-white/50"> &bull; {use.en}</span>}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Bathroom */}
        <div className="relative min-h-[280px] md:min-h-[320px]">
          <Image
            src="/images/bioptimo-uses-right.png"
            alt={t.bathroom}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-nouvie-navy/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-10 text-white text-center">
            <h3 className="text-xl font-bold mb-1">{t.bathroom}</h3>
            {isSpanish && <p className="text-white/60 text-sm mb-4">{text.en.bathroom}</p>}
            <div className={`space-y-2 text-sm ${isSpanish ? "" : "mt-3"}`}>
              {bathroomUses.map((use) => (
                <p key={use.es}>
                  {use[locale]}
                  {isSpanish && <span className="text-white/50"> &bull; {use.en}</span>}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STAMPS ==================== */}
      <section className="px-4 py-10 bg-emerald-50/50">
        <div className="max-w-3xl mx-auto">
          <p className="text-nouvie-turquoise text-center text-xs font-bold tracking-[0.2em] uppercase mb-8">
            {t.sustainable}
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            {stamps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src={s.src}
                    alt={s.label[locale]}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOOTER CTA ==================== */}
      <section className="bg-nouvie-navy text-white px-4 py-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-sm">
              {t.biodegradable}
            </p>
            <p className="text-white/50 text-xs">
              Safe for kids & pets &bull; Certified sustainable
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-nouvie-turquoise font-bold text-sm">
              {t.orders}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 text-white font-bold px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors mt-2 text-sm"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +57 315 832 6422
            </a>
            <p className="text-white/40 text-xs mt-1">nouvie.com.co</p>
          </div>
        </div>
      </section>
    </div>
  );
}
