import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos - Misión, Visión y Valores",
  description:
    "Conoce la misión, visión y cultura de Nouvie. Empresa colombiana de productos biodegradables, libres de químicos tóxicos, sostenibles y cruelty-free. Cuidamos tu salud y el planeta.",
  keywords: [
    "Nouvie Colombia",
    "productos biodegradables",
    "libres de químicos tóxicos",
    "sostenibilidad",
    "cruelty free",
    "aseo ecológico",
    "tratamientos capilares naturales",
    "empresa colombiana ecológica",
    "misión visión Nouvie",
  ],
  alternates: {
    canonical: "https://www.nouvie.co/nosotros",
  },
  openGraph: {
    title: "Quiénes Somos | Nouvie Colombia",
    description: "Somos Nouvie: productos biodegradables, libres de químicos tóxicos. Conoce nuestra misión, visión y valores.",
    url: "https://www.nouvie.co/nosotros",
  },
};

const productLines = [
  {
    name: "Tratamientos Capilares",
    description:
      "Libres de sulfatos, parabenos y maltrato animal, pensados para el bienestar del cuero cabelludo.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "Aseo Hogar",
    description:
      "Fórmulas seguras para toda la familia, sin ingredientes tóxicos ni corrosivos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    gradient: "from-rose-400 to-pink-500",
  },
  {
    name: "Aseo Institucional",
    description:
      "Productos certificados, sin fosfatos, que optimizan agua y tiempo, ideales para operarios.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    gradient: "from-sky-400 to-cyan-500",
  },
];

const cultureValues = [
  {
    title: "Conciencia en Salud",
    description:
      "Promovemos el uso de productos libres de químicos tóxicos, entendiendo que la salud comienza con lo que usamos a diario.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Responsabilidad Ambiental",
    description:
      "Trabajamos con ingredientes biodegradables, procesos limpios y envases sostenibles.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Sostenibilidad",
    description:
      "Apostamos por soluciones duraderas que respetan tanto a las personas como al medio ambiente.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Ahorro Consciente",
    description:
      "Ofrecemos alternativas accesibles que combinan efectividad, economía y ética.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

export default function NosotrosPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section - Full bleed with organic shape */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-gradient-to-br from-nouvie-pale-blue/30 via-white to-nouvie-turquoise/10">
        {/* Decorative organic shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 md:w-96 md:h-96 bg-nouvie-turquoise/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 -left-32 w-64 h-64 bg-nouvie-gold/15 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-nouvie-pale-blue/30 rounded-full blur-2xl animate-float-fast" />
        </div>

        <div className="relative w-full px-5 md:px-8 lg:px-12 py-12 md:py-0">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              {/* Text content - mobile first */}
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="animate-fade-up">
                  <span className="inline-block px-4 py-1.5 bg-nouvie-navy/10 text-nouvie-navy text-xs font-semibold tracking-widest uppercase rounded-full mb-6">
                    Desde Colombia para el mundo
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-nouvie-navy leading-[1.1] mb-6 animate-fade-up animation-delay-100">
                  Somos{" "}
                  <span className="relative">
                    Nouvie
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-nouvie-turquoise/50" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg animate-fade-up animation-delay-200">
                  Estamos apasionados por contribuir y mejorar el mundo en el que vivimos.{" "}
                  <span className="text-nouvie-navy font-medium">Cuidamos tu salud y el planeta.</span>
                </p>

                {/* Quick stats for mobile */}
                <div className="flex gap-8 mt-8 animate-fade-up animation-delay-300">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-nouvie-turquoise">100%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Biodegradable</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-nouvie-gold">0%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Tóxicos</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-nouvie-navy">3</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Líneas</div>
                  </div>
                </div>
              </div>

              {/* Image - organic shape mask */}
              <div className="lg:w-1/2 order-1 lg:order-2 animate-fade-up animation-delay-100">
                <div className="relative">
                  {/* Decorative ring */}
                  <div className="absolute -inset-4 md:-inset-6 border-2 border-dashed border-nouvie-turquoise/30 rounded-[2rem] md:rounded-[3rem]" />
                  <div className="relative aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-nouvie-navy/10">
                    <Image
                      src="/images/somos-nouvie.png"
                      alt="Equipo Nouvie - Comprometidos con la sostenibilidad"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nouvie-navy/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-nouvie-navy/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-nouvie-navy/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ¿Quiénes Somos? Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative">
        <div className="px-5 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="max-w-2xl mb-12 md:mb-16 animate-fade-up">
              <span className="text-nouvie-turquoise font-semibold text-sm tracking-widest uppercase">Conócenos</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-nouvie-navy mt-3 mb-6">
                ¿Quiénes Somos?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                En Nouvie SAS nos dedicamos a cuidar la salud de las personas y el planeta a través de productos{" "}
                <span className="text-nouvie-navy font-medium">libres de químicos tóxicos, biodegradables y sostenibles</span>.
                Nuestra misión es ofrecer soluciones de limpieza y cuidado personal que protejan a quienes los usan y reduzcan el impacto ambiental.
              </p>
            </div>

            {/* Product lines - Horizontal scroll on mobile */}
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:overflow-visible md:grid md:grid-cols-3 snap-x snap-mandatory md:snap-none scrollbar-hide animate-fade-up animation-delay-200">
              {productLines.map((line) => (
                <div
                  key={line.name}
                  className="flex-shrink-0 w-[280px] md:w-auto snap-center group"
                >
                  <div className="h-full bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Icon with gradient */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${line.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {line.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-nouvie-navy mb-3">
                      {line.name}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {line.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom quote */}
            <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-100 animate-fade-up animation-delay-300">
              <blockquote className="text-center max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-700 font-serif italic leading-relaxed">
                  &ldquo;En Nouvie, creemos que la calidad no debe comprometer la salud. Por eso, educamos y acompañamos a nuestros clientes en el camino hacia un consumo más consciente y responsable.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Misión & Visión - Alternating layout */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-nouvie-pale-blue/20 to-white">
        <div className="px-5 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">

            {/* Misión */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start animate-fade-up">
              {/* Left accent */}
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-nouvie-turquoise to-nouvie-turquoise/70 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg shadow-nouvie-turquoise/30">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                </div>
                <span className="text-nouvie-turquoise font-bold text-sm tracking-widest uppercase md:mt-4">01</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-nouvie-navy mb-6">
                  Nuestra Misión
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    En Nouvie, nos comprometemos a proteger la salud de las personas y el bienestar del planeta mediante la elaboración de productos de aseo y tratamientos capilares{" "}
                    <span className="text-nouvie-navy font-medium">libres de químicos tóxicos, corrosivos, sulfatos, parabenos y sustancias inflamables</span>.
                    Nuestra filosofía se basa en que la calidad nunca debe comprometer el bienestar.
                  </p>
                  <p>
                    Producimos fórmulas biodegradables, libres de fosfatos y crueldad animal, que respetan tanto el cuerpo humano como el entorno natural.
                    Creemos en el poder de la conciencia: por eso, educamos a nuestros clientes sobre los riesgos asociados al uso de productos convencionales con ingredientes nocivos, y los inspiramos a tomar decisiones más responsables.
                  </p>
                  <p>
                    Nuestro compromiso con la sostenibilidad es constante. Buscamos activamente alternativas para que cada producto de Nouvie sea una contribución tangible para el cuidado del medio ambiente.
                  </p>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start animate-fade-up">
              {/* Left accent */}
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-nouvie-gold to-nouvie-gold/70 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg shadow-nouvie-gold/30">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-nouvie-gold font-bold text-sm tracking-widest uppercase md:mt-4">02</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-nouvie-navy mb-6">
                  Nuestra Visión
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Para el año 2030, Nouvie será una marca líder y reconocida en el mercado colombiano por su compromiso con la salud, la sostenibilidad y la educación consciente.
                    Aspiramos a ser un{" "}
                    <span className="text-nouvie-navy font-medium">referente en el consumo responsable</span>,
                    generando un movimiento que inspire a las personas a cuestionar los ingredientes de los productos que usan y a elegir alternativas libres de tóxicos.
                  </p>
                  <p>
                    Nuestra visión es construir una comunidad informada y empoderada, que entienda los riesgos asociados al uso de químicos nocivos y que, a través de sus decisiones cotidianas, contribuya activamente al cuidado del planeta.
                    Nouvie será sinónimo de transparencia, innovación sostenible y bienestar integral.
                  </p>
                </div>

                {/* Vision 2030 badge */}
                <div className="mt-8 inline-flex items-center gap-3 bg-nouvie-gold/10 border border-nouvie-gold/20 rounded-full px-5 py-2.5">
                  <span className="text-nouvie-gold font-bold text-2xl">2030</span>
                  <span className="text-nouvie-navy text-sm font-medium">Meta de liderazgo en Colombia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura Section - Dark with cards */}
      <section className="py-16 md:py-24 lg:py-32 bg-nouvie-navy relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-nouvie-turquoise/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-nouvie-gold/10 rounded-full blur-3xl" />

        <div className="relative px-5 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-up">
              <span className="text-nouvie-turquoise font-semibold text-sm tracking-widest uppercase">Nuestros Valores</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-3 mb-6">
                Nuestra Cultura
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                En Nouvie, creemos que cuidar a las personas es el primer paso para cuidar el planeta.
                Nuestra cultura organizacional se fundamenta en el respeto profundo por la salud humana, la empatía y la responsabilidad colectiva.
              </p>
            </div>

            {/* Culture values grid - 2x2 on mobile, 4 cols on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-up animation-delay-200">
              {cultureValues.map((value) => (
                <div
                  key={value.title}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-nouvie-turquoise to-nouvie-turquoise/50 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Team description */}
            <div className="mt-12 md:mt-16 text-center animate-fade-up animation-delay-300">
              <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-3xl">
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  Nuestro equipo está conformado por{" "}
                  <span className="text-white font-medium">personas honestas, empáticas y comprometidas</span>,
                  que actúan con transparencia y pasión. Son individuos con conciencia ambiental y sensibilidad humana,
                  que entienden que cada acción cuenta y que el verdadero cambio comienza desde adentro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Impactful */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-r from-nouvie-turquoise via-nouvie-turquoise to-cyan-400 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 md:w-72 md:h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 md:w-72 md:h-72 bg-nouvie-navy/20 rounded-full blur-3xl" />
        </div>

        <div className="relative px-5 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              {/* Recycling icons */}
              <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-4 md:mb-6 tracking-tight">
                RECICLA, REUSA, REPITE
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Nuestra filosofía se basa en el cuidado de tu salud y del medio ambiente.
                Cada pequeña acción suma para un gran cambio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
