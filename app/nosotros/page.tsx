import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Somos Nouvie",
  description: "Conoce nuestra pasión por crear productos de alta calidad que mejoran el bienestar y cuidan el medio ambiente.",
};

export default function NosotrosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-nouvie-pale-blue/20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
            {/* Image */}
            <div className="lg:w-1/2 animate-fade-up">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/somos-nouvie.png"
                  alt="Equipo Nouvie"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Title & Intro */}
            <div className="lg:w-1/2 animate-fade-up animation-delay-200">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nouvie-navy mb-6">
                SOMOS NOUVIE
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-nouvie-turquoise to-nouvie-turquoise/30 mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                Estamos apasionados por contribuir y mejorar el mundo en el que vivimos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="space-y-12">
            {/* Block 1 */}
            <div className="animate-fade-up">
              <div className="flex items-start gap-4">
                <div className="w-1 h-full min-h-[80px] bg-nouvie-turquoise rounded-full shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Creamos productos con ingredientes de alta calidad que mejoran nuestro bienestar y el de nuestras familias, brindándonos una mejor calidad de vida, joven y saludable.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="animate-fade-up animation-delay-100">
              <div className="flex items-start gap-4">
                <div className="w-1 h-full min-h-[80px] bg-nouvie-gold rounded-full shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Sentimos una firme convicción por el cuidado del medio ambiente junto a una permanente responsabilidad social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values CTA */}
      <section className="py-16 bg-nouvie-navy">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <p className="text-nouvie-turquoise text-xl md:text-2xl font-semibold mb-4 animate-fade-up">
            RECICLA, REUSA, REPITE
          </p>
          <p className="text-white/80 text-lg max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Nuestra filosofía se basa en el cuidado de tu salud y del medio ambiente.
          </p>
        </div>
      </section>
    </div>
  );
}
