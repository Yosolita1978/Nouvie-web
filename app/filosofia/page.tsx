import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Filosofía - Recicla, Reusa, Repite",
  description: "Conoce la filosofía Nouvie: Recicla, Reusa, Repite. Productos biodegradables, libres de químicos tóxicos. Cuidamos tu salud y el medio ambiente. Sostenibilidad real en Colombia.",
  keywords: [
    "filosofía Nouvie",
    "recicla reusa repite",
    "sostenibilidad Colombia",
    "productos ecológicos",
    "medio ambiente",
    "biodegradable",
    "economía circular",
  ],
  alternates: {
    canonical: "https://nouvie-web.vercel.app/filosofia",
  },
  openGraph: {
    title: "Nuestra Filosofía | Nouvie Colombia",
    description: "Recicla, Reusa, Repite. Productos biodegradables que cuidan tu salud y el planeta.",
    url: "https://nouvie-web.vercel.app/filosofia",
  },
};

export default function FilosofiaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-nouvie-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <p className="text-nouvie-turquoise text-lg font-medium mb-4 animate-fade-up">
            Nuestra Filosofía
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up animation-delay-100">
            RECICLA, REUSA, REPITE
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-nouvie-turquoise to-nouvie-gold mx-auto animate-fade-up animation-delay-200"></div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="animate-fade-up">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube-nocookie.com/embed/pw_rtq8wHxM?rel=0&modestbranding=1"
                title="Filosofía Nouvie - Recicla, Reusa, Repite"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-nouvie-pale-blue/20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="space-y-8">
            {/* Problem Statement */}
            <div className="animate-fade-up">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⚠️</span>
                  <h2 className="text-xl md:text-2xl font-bold text-nouvie-navy">
                    El problema
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  De acuerdo con estudios de expertos ambientales, cada hogar tiene un promedio de <strong className="text-nouvie-navy">62 químicos tóxicos</strong> en los productos de limpieza tradicionales.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Químicos como el amoníaco, a la vez que limpian, son fuertes irritantes, responsables de enfermedades respiratorias, de la piel, de la visión y de la garganta, entre otras. La mayoría de ellas son irreversibles.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  De la misma manera, existen unos <strong className="text-nouvie-navy">15 químicos tóxicos</strong> en los productos para el cuidado del cabello, sin contar otros innumerables ingredientes nocivos presentes en los productos para el cuidado personal. Se les conoce como sulfatos, parabenos y formaldehídos. Lavan el cabello, pero también debilitan su crecimiento y aceleran su caída.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="animate-fade-up animation-delay-100">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-nouvie-turquoise">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌿</span>
                  <h2 className="text-xl md:text-2xl font-bold text-nouvie-navy">
                    La solución
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Imagínate elevar los niveles de limpieza de tu hogar con ingredientes que eliminan las impurezas indeseadas, pero sin los efectos negativos de los productos tóxicos que inundan el mercado.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Puedes lucir un cabello más saludable y vigoroso sin necesidad de los químicos que lo debilitan a mediano y largo plazo.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="animate-fade-up animation-delay-200 text-center pt-8">
              <p className="font-serif italic text-2xl md:text-3xl text-nouvie-gold mb-2">
                The Gift from Nature
              </p>
              <p className="text-xl text-nouvie-navy font-semibold">
                Bienvenidos a Nouvie, el regalo de la naturaleza para ti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
