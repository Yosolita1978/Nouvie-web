import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bioptimo - Desengrasante Multiusos | Nouvie",
  description:
    "Desengrasante Multiusos Bioptimo 500ml. Reemplaza 8 productos convencionales. Biodegradable, no tóxico, aroma cítrico.",
};

const stamps = [
  { src: "/images/sellos/sulfate.png", label: "Sulfate Free" },
  { src: "/images/sellos/phosphate.png", label: "Phosphate Free" },
  { src: "/images/sellos/non-toxic.png", label: "Non Toxic" },
  { src: "/images/sellos/flamable.png", label: "No Flamable" },
  { src: "/images/sellos/non-caustic.png", label: "Non Caustic" },
  { src: "/images/sellos/producto-sostenible.png", label: "Producto Sostenible" },
];

const uses = [
  { es: "Cocinas y hornos", en: "Kitchens & ovens" },
  { es: "Manchas en tela", en: "Fabric stains" },
  { es: "Baños y duchas", en: "Bathrooms & showers" },
  { es: "Prelavado de ropa", en: "Laundry pre-wash" },
  { es: "Pisos de cerámica", en: "Ceramic floors" },
  { es: "Elimina olores", en: "Eliminates odors" },
  { es: "Quita sarro y óxido", en: "Removes limescale & rust" },
  { es: "Acero inoxidable", en: "Stainless steel" },
];

const benefits = [
  { es: "4x más tensioactivo", en: "4x more surfactant power" },
  { es: "No necesita enjuague", en: "No rinsing needed" },
  { es: "Suave con las manos", en: "Gentle on hands — no gloves needed" },
  { es: "Sin espuma excesiva", en: "No excess foam, no residue" },
  { es: "Ahorra agua y tiempo", en: "Saves water & time" },
];

export default function BioptimoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-nouvie-navy text-white px-4 py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Desengrasante Multiusos
          </h1>
          <p className="text-nouvie-turquoise text-lg md:text-xl mt-1 italic">
            Multi-Purpose Degreaser
          </p>
          <p className="font-serif italic text-nouvie-gold text-sm mt-2">
            The Gift from Nature
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="font-bold text-lg">BIOPTIMO</span>
            <span className="text-white/60">by Nouvie</span>
          </div>
          <p className="text-nouvie-turquoise font-semibold mt-1">
            500 mL &bull; Aroma Cítrico
          </p>
        </div>
      </section>

      {/* Product + Benefits */}
      <section className="px-4 py-10 md:py-14">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Product image */}
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
              <Image
                src="/images/productos/bioptimo-front.png"
                alt="Bioptimo Desengrasante Multiusos"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="w-full md:w-3/5">
            <div className="bg-nouvie-turquoise text-white text-center rounded-xl px-4 py-3 mb-6">
              <p className="font-bold text-lg">Reemplaza 8 productos</p>
              <p className="text-white/80 text-sm">Replaces 8 conventional products</p>
            </div>

            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-nouvie-turquoise mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">{b.es}</p>
                    <p className="text-gray-400 text-sm">{b.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-4">
        <hr className="border-nouvie-turquoise/30" />
      </div>

      {/* Uses */}
      <section className="px-4 py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-nouvie-navy mb-1">
            <span className="border-b-2 border-nouvie-turquoise pb-1">Usos / Uses</span>
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-6">
            {uses.map((u, i) => (
              <div key={i}>
                <p className="font-bold text-gray-900 text-sm md:text-base">{u.es}</p>
                <p className="text-gray-400 text-xs md:text-sm">{u.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stamps */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-nouvie-turquoise text-center text-xs font-bold tracking-widest uppercase mb-6">
            Producto Sostenible
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center">
            {stamps.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
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

      {/* Health & Eco */}
      <section className="px-4 py-10 md:py-14">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Health Safe */}
          <div className="bg-nouvie-navy/5 rounded-2xl p-6 border border-nouvie-navy/10">
            <h3 className="font-bold text-nouvie-navy text-lg mb-3">
              Cuida la salud / <span className="text-nouvie-turquoise">Health Safe</span>
            </h3>
            <p className="text-gray-700 text-sm mb-1">
              Fórmulas biodegradables, no tóxicas, no cáusticas, no inflamables.
            </p>
            <p className="text-gray-400 text-xs italic">
              Biodegradable, non-toxic, non-caustic, non-flammable.
            </p>
          </div>

          {/* Eco */}
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
            <h3 className="font-bold text-emerald-700 text-lg mb-3">
              Eco-friendly / <span className="text-nouvie-turquoise">Sostenible</span>
            </h3>
            <p className="text-gray-700 text-sm mb-1">
              Certificado de biodegradabilidad: se biodegrada en 24 a 48 horas.
            </p>
            <p className="text-gray-400 text-xs italic">
              Certified biodegradable in 24-48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-nouvie-navy text-white px-4 py-8">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-sm">
              Biodegradable en 24-48 horas
            </p>
            <p className="text-white/60 text-xs">
              Certified sustainable product &bull; Safe for kids & pets
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
