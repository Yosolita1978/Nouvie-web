import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Filosofía - Recicla, Reusa, Repite",
  description: "Conoce la filosofía Nouvie: Recicla, Reusa, Repite. Productos biodegradables, libres de químicos tóxicos. Soluciones sostenibles alineadas con LEED, BOMA y WELL. Cuidamos tu salud y el medio ambiente.",
  keywords: [
    "filosofía Nouvie",
    "recicla reusa repite",
    "sostenibilidad Colombia",
    "productos ecológicos",
    "LEED EBOM",
    "BOMA WELL",
    "biodegradable 48 horas",
    "limpieza institucional sostenible",
    "economía circular",
  ],
  alternates: {
    canonical: "https://www.nouvie.co/filosofia",
  },
  openGraph: {
    title: "Nuestra Filosofía | Nouvie Colombia",
    description: "Recicla, Reusa, Repite. Productos biodegradables que cuidan tu salud y el planeta. Alineados con LEED, BOMA y WELL.",
    url: "https://www.nouvie.co/filosofia",
  },
};

// Key benefits data
const keyBenefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Menor Consumo de Agua",
    description: "Garantizamos menor consumo de agua por m² con nuestros productos concentrados",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Indicadores de Eficiencia",
    description: "Generamos métricas de eficiencia y reutilización de agua para tu operación",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Reducción de Costos",
    description: "Menor gasto en productos de aseo con beneficios ambientales que generan valor económico",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Menos Operarios",
    description: "Disminuimos la cantidad de operarios necesarios al mejorar rendimientos",
  },
];

// Certifications alignment
const certifications = [
  { name: "LEED EBOM", description: "Prácticas sostenibles de limpieza" },
  { name: "BOMA", description: "Estándares de edificios comerciales" },
  { name: "WELL", description: "Bienestar de los ocupantes" },
];

// Stats
const stats = [
  { value: "<48h", label: "Biodegradable" },
  { value: "0%", label: "Sulfatos" },
  { value: "0%", label: "Tóxicos" },
  { value: "+90%", label: "Eficiencia" },
];

export default function FilosofiaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Modern Dark */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nouvie-navy via-slate-800 to-emerald-900 py-20 lg:py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-nouvie-turquoise/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm font-medium mb-6 animate-fade-up">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
            </svg>
            Nuestra Filosofía
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-up animation-delay-100 tracking-tight">
            RECICLA, REUSA,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nouvie-turquoise to-emerald-400">REPITE</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Comprometidos con la sostenibilidad y el cuidado de la salud de las personas y el planeta
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="animate-fade-up">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <iframe
                src="https://www.youtube-nocookie.com/embed/pw_rtq8wHxM?rel=0&modestbranding=1"
                title="Filosofía Nouvie - Recicla, Reusa, Repite"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 bg-nouvie-navy">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="text-3xl md:text-4xl font-black text-nouvie-turquoise mb-1">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge & Solution */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* The Challenge */}
            <div className="animate-fade-up">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-nouvie-navy mb-6">
                  El Desafío
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Según estudios de expertos ambientales, cada hogar tiene un promedio de <strong className="text-rose-600">62 químicos tóxicos</strong> en los productos de limpieza tradicionales.
                  </p>
                  <p>
                    Químicos como el amoníaco, a la vez que limpian, son fuertes irritantes responsables de enfermedades respiratorias, de la piel, de la visión y de la garganta. La mayoría son irreversibles.
                  </p>
                  <p>
                    Existen también <strong className="text-rose-600">15 químicos tóxicos</strong> en productos para el cuidado del cabello: sulfatos, parabenos y formaldehídos que debilitan el crecimiento y aceleran su caída.
                  </p>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="animate-fade-up animation-delay-200">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 shadow-lg border border-emerald-100 h-full">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-nouvie-navy mb-6">
                  Nuestra Solución
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Ofrecemos una <strong className="text-emerald-700">solución integral</strong> a partir de un portafolio de productos certificados como biodegradables en menos de 48 horas, libres de sulfatos y sustancias tóxicas.
                  </p>
                  <p>
                    Imagínate elevar los niveles de limpieza de tu hogar con ingredientes que eliminan las impurezas, pero sin los efectos negativos de los productos tóxicos.
                  </p>
                  <p>
                    Puedes lucir un <strong className="text-emerald-700">cabello más saludable</strong> y vigoroso sin necesidad de los químicos que lo debilitan a mediano y largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
              Compromiso Sostenible
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nouvie-navy mb-4">
              Soluciones para tu Operación
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Nouvie está comprometido con la sostenibilidad y el cuidado de la salud de los ocupantes y stakeholders de cada activo
            </p>
          </div>

          {/* Benefits Grid - Horizontal scroll on mobile */}
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 mb-12">
            <div className="flex gap-4 lg:gap-6 pb-4 lg:pb-0 lg:grid lg:grid-cols-4">
              {keyBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[280px] lg:w-auto animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-nouvie-navy text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Benefits List */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 md:p-10 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Beneficios Operativos
                </h3>
                <ul className="space-y-4">
                  {[
                    "Reducción en consumo de recursos naturales (agua)",
                    "Revisión y mejoramiento de PMIRS Institucional",
                    "Mejores rendimientos por operario al reducir frecuencias",
                    "Mejoramiento de condiciones sanitarias y ambientales",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <svg className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </span>
                  Capacitación Permanente
                </h3>
                <ul className="space-y-4">
                  {[
                    "Entrenamiento al personal de servicios generales",
                    "Orientación al cuidado de su salud",
                    "Cuidado de los recursos naturales",
                    "Lineamientos de sostenibilidad en operación diaria",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <svg className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Alignment */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Alineados con Estándares Internacionales
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Prácticas sostenibles y regeneración de rutinas de limpieza alineadas con las principales certificaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-white">{cert.name.split(" ")[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-white/70 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <p className="font-serif italic text-3xl md:text-4xl text-nouvie-gold mb-4 animate-fade-up">
            The Gift from Nature
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-nouvie-navy mb-6 animate-fade-up animation-delay-100">
            Bienvenidos a Nouvie, el regalo de la naturaleza para ti.
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Nouvie se especializa en proveer soluciones de limpieza sostenibles que cuidan tu salud, la de tu familia y el medio ambiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <a
              href="/productos"
              className="inline-flex items-center justify-center gap-2 bg-nouvie-navy text-white font-bold px-8 py-4 rounded-full hover:bg-nouvie-navy/90 transition-all duration-300 min-h-[56px]"
            >
              Ver Productos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://wa.me/573158326422?text=Hola, me interesa conocer más sobre la filosofía Nouvie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-600 transition-all duration-300 min-h-[56px]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
