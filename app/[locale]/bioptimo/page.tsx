import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ProductImageCarousel } from "@/components/ui/ProductImageCarousel";

export const metadata: Metadata = {
  title: { absolute: "Bioptimo - Desengrasante Multiusos Ecológico | Nouvie" },
  description:
    "Bioptimo, desengrasante multiusos ecológico y biodegradable. Reemplaza 8 productos del hogar con poder limpiador natural sin tóxicos. Pídelo por WhatsApp.",
  alternates: {
    canonical: "https://www.nouvie.co/bioptimo",
  },
};

const stamps = [
  { src: "/images/sellos/sulfate.png", label: "Sulfate Free" },
  { src: "/images/sellos/phosphate.png", label: "Phosphate Free" },
  { src: "/images/sellos/non-toxic.png", label: "Non Toxic" },
  { src: "/images/sellos/flamable.png", label: "No Flamable" },
  { src: "/images/sellos/non-caustic.png", label: "Non Caustic" },
  { src: "/images/sellos/producto-sostenible.png", label: "Producto Sostenible" },
];

const benefits = [
  { es: "4x más tensioactivo", en: "4x more surfactant power" },
  { es: "No necesita enjuague", en: "No rinsing needed" },
  { es: "Suave con las manos", en: "Gentle on hands — no gloves needed" },
  { es: "Ahorra agua y tiempo", en: "Saves water & time" },
];

export default function BioptimoPage() {
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
                Desengrasante<br />Multiusos
              </h1>
              <p className="text-nouvie-turquoise text-lg md:text-xl mt-2 italic">
                Multi-Purpose Degreaser
              </p>
              <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed max-w-md">
                Limpiador multiusos ecológico que reemplaza desengrasante en spray, quitagrasa de
                cocina y removedor de manchas en una sola botella biodegradable. Forma parte de los{" "}
                <Link
                  href="/nosotros"
                  className="underline underline-offset-2 text-white hover:text-nouvie-turquoise transition-colors"
                >
                  productos de limpieza ecológicos en Colombia
                </Link>{" "}
                de Nouvie.
              </p>
              <p className="font-serif italic text-nouvie-gold text-sm mt-3">
                The Gift from Nature
              </p>

              {/* Reemplaza badge */}
              <div className="inline-block bg-nouvie-turquoise text-white rounded-lg px-5 py-2.5 mt-6">
                <p className="font-bold text-base">Reemplaza 8 productos</p>
                <p className="text-white/80 text-xs">Replaces 8 conventional products</p>
              </div>
            </div>

            {/* Right — Brand info */}
            <div className="md:w-1/2 flex flex-col items-center md:items-end">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl">BIOPTIMO</span>
                <span className="text-white/60 text-sm">by Nouvie</span>
              </div>
              <p className="text-nouvie-turquoise font-semibold text-sm mt-2">
                500 mL &bull; Aroma Cítrico
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
                  <p className="font-bold text-gray-900 text-lg">{b.es}</p>
                  <p className="text-gray-400 text-sm">{b.en}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Product carousel — front & back */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square max-w-sm mx-auto bg-gray-50 rounded-2xl overflow-hidden">
              <ProductImageCarousel
                images={[
                  { src: "/images/productos/bioptimo-full.jpg", caption: "Desengrasante Multiusos 500 ml", fit: "contain" },
                  { src: "/images/productos/bioptimo-insite.jpg", caption: "Adiós a la grasa de cocina", fit: "cover" },
                  { src: "/images/productos/bioptimo-label.jpg", caption: "Quita sarro, óxido y hongos", fit: "cover" },
                ]}
                alt="Bioptimo Desengrasante Multiusos"
                ctaHref="https://wa.me/573158326422?text=Hola%2C%20me%20interesa%20el%20Bioptimo%20Desengrasante%20Multiusos"
                ctaLabel="PÍDELO YA"
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
            alt="Cocinas y hornos"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-nouvie-navy/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-10 text-white text-center">
            <h3 className="text-xl font-bold mb-1">Cocinas y hornos</h3>
            <p className="text-white/60 text-sm mb-4">Kitchens & ovens</p>
            <div className="space-y-2 text-sm">
              <p>Pisos de cerámica <span className="text-white/50">&bull; Ceramic floors</span></p>
              <p>Acero inoxidable <span className="text-white/50">&bull; Stainless steel</span></p>
              <p>Elimina olores <span className="text-white/50">&bull; Eliminates odors</span></p>
            </div>
          </div>
        </div>

        {/* Right — Bathroom */}
        <div className="relative min-h-[280px] md:min-h-[320px]">
          <Image
            src="/images/bioptimo-uses-right.png"
            alt="Baños y duchas"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-nouvie-navy/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-10 text-white text-center">
            <h3 className="text-xl font-bold mb-1">Baños y duchas</h3>
            <p className="text-white/60 text-sm mb-4">Bathrooms & showers</p>
            <div className="space-y-2 text-sm">
              <p>Quita sarro y óxido <span className="text-white/50">&bull; Removes limescale</span></p>
              <p>Manchas en tela <span className="text-white/50">&bull; Fabric stains</span></p>
              <p>Prelavado de ropa <span className="text-white/50">&bull; Laundry pre-wash</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STAMPS ==================== */}
      <section className="px-4 py-10 bg-emerald-50/50">
        <div className="max-w-3xl mx-auto">
          <p className="text-nouvie-turquoise text-center text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Producto Sostenible
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            {stamps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src={s.src}
                    alt={s.label}
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
              Biodegradable en 24-48 horas
            </p>
            <p className="text-white/50 text-xs">
              Safe for kids & pets &bull; Certified sustainable
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-nouvie-turquoise font-bold text-sm">
              Pedidos / Orders: WhatsApp
            </p>
            <a
              href="https://wa.me/573158326422?text=Hola%2C%20me%20interesa%20el%20Bioptimo%20Desengrasante%20Multiusos"
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
