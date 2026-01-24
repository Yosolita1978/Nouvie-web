import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios y Videos - Historias Reales de Clientes",
  description: "Descubre testimonios reales de clientes Nouvie y videos educativos sobre los beneficios de productos libres de químicos tóxicos. Aprende sobre limpieza ecológica y tratamientos capilares naturales.",
  keywords: [
    "testimonios Nouvie",
    "opiniones productos ecológicos",
    "videos limpieza biodegradable",
    "clientes satisfechos",
    "tratamiento capilar resultados",
    "productos sin tóxicos Colombia",
  ],
  alternates: {
    canonical: "https://nouvie-web.vercel.app/testimonios",
  },
  openGraph: {
    title: "Testimonios y Videos | Nouvie Colombia",
    description: "Historias reales de clientes. Videos educativos sobre productos libres de químicos tóxicos.",
    url: "https://nouvie-web.vercel.app/testimonios",
  },
};

// Video data organized by category
const featuredTestimonial = {
  videoId: "jZcuEyWNfpg",
  title: "Testimonio Maria Elena Corredor",
  quote: "Tras probar un sinfín de productos para el cabello que le pudieran ayudar a mantener el poco cabello que tenía, después de haber sido dada de alta como paciente oncológico, el Tratamiento capilar de Nouvie logró cumplir la tarea.",
  author: "Maria Elena Corredor",
  role: "Cliente Nouvie",
};

const videoSections = [
  {
    id: "educacion",
    title: "Aprende Sobre Tu Salud",
    subtitle: "Descubre la verdad sobre los químicos en los productos del hogar",
    color: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    videos: [
      {
        videoId: "I6XQDj_Nf9w",
        title: "La verdad detrás de los químicos en tu hogar",
        description: "Conoce qué hay realmente en los productos que usas a diario",
      },
      {
        videoId: "iCMlcF9ukAE",
        title: "8 tóxicos que Nouvie elimina de tu limpieza",
        description: "Los ingredientes dañinos que nunca encontrarás en nuestros productos",
      },
      {
        videoId: "DBElcSbV0Kg",
        title: "¿Por qué Nouvie dice NO a los sulfatos?",
        description: "La ciencia detrás de nuestra decisión de formular sin sulfatos",
      },
    ],
  },
  {
    id: "productos",
    title: "Nuestros Productos en Acción",
    subtitle: "Mira cómo funcionan nuestros productos multiusos",
    color: "from-sky-500 to-blue-600",
    lightBg: "bg-sky-50",
    videos: [
      {
        videoId: "z1289pG-jaU",
        title: "Desengrasante y Removedor de Manchas",
        description: "Limpieza profunda sin químicos agresivos",
      },
      {
        videoId: "NWVRxJ3hPqU",
        title: "Multiusos Azul NouVie",
        description: "Limpieza y lavado para toda la familia",
      },
    ],
  },
  {
    id: "marca",
    title: "Conoce Nouvie",
    subtitle: "Nuestra misión es proteger tu hogar y el planeta",
    color: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    videos: [
      {
        videoId: "Uew3BSJhqEo",
        title: "Limpieza que protege tu hogar y el planeta",
        description: "Descubre por qué Nouvie es diferente",
      },
      {
        videoId: "lMQG44p8QNA",
        title: "Doctora habla sobre inactivar virus",
        description: "La ciencia detrás de nuestras fórmulas",
      },
    ],
  },
  {
    id: "capilar",
    title: "Línea Capilar",
    subtitle: "Belleza consciente con el poder de la naturaleza",
    color: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    videos: [
      {
        videoId: "awTajQdbx7k",
        title: "Productos capilares sin parabenos",
        description: "Belleza consciente con ingredientes botánicos",
      },
    ],
  },
];

export default function TestimoniosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Modern & Inviting */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nouvie-navy via-slate-800 to-nouvie-navy py-16 lg:py-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-nouvie-turquoise rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-nouvie-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm font-medium mb-6 animate-fade-up">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            Videos y Testimonios
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up animation-delay-100">
            Historias Reales,<br />
            <span className="text-nouvie-turquoise">Resultados Reales</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Descubre testimonios de nuestros clientes y aprende sobre los beneficios de elegir productos libres de químicos tóxicos
          </p>
        </div>
      </section>

      {/* Featured Testimonial - Phone Mockup */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
            {/* Phone Mockup */}
            <div className="lg:w-1/2 flex justify-center animate-fade-up">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-10"></div>
                  {/* Phone Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden w-[280px] sm:w-[300px]">
                    {/* Status Bar */}
                    <div className="bg-black h-8 flex items-center justify-between px-6 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3a9 9 0 00-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1a7 7 0 0114 0v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 00-9-9z"/>
                        </svg>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                        </svg>
                        <svg className="w-6 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 4h-3V2h-4v2H7v18h10V4zm-2 16H9V6h6v14z"/>
                        </svg>
                      </div>
                    </div>
                    {/* Video Container */}
                    <div className="aspect-[9/16] w-full">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${featuredTestimonial.videoId}?rel=0&modestbranding=1`}
                        title={featuredTestimonial.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                      />
                    </div>
                    {/* Home Indicator */}
                    <div className="bg-black h-8 flex items-center justify-center">
                      <div className="w-32 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-nouvie-gold text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Historia Real
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:w-1/2 animate-fade-up animation-delay-200">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-nouvie-turquoise/10 text-nouvie-turquoise px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Testimonio Verificado
              </div>

              {/* 5 Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-nouvie-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative">
                <svg className="absolute -top-4 -left-4 w-12 h-12 text-gray-200" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                </svg>
                <p className="relative text-gray-700 text-lg md:text-xl leading-relaxed mb-8 pl-8">
                  {featuredTestimonial.quote}
                </p>
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-nouvie-turquoise rounded-full"></div>
                <div>
                  <p className="text-xl font-semibold text-nouvie-navy">{featuredTestimonial.author}</p>
                  <p className="text-gray-500">{featuredTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Sections */}
      {videoSections.map((section, sectionIndex) => (
        <section
          key={section.id}
          className={`py-12 lg:py-20 ${sectionIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-10 animate-fade-up">
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${section.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                {section.videos.length} {section.videos.length === 1 ? "Video" : "Videos"}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nouvie-navy mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {section.subtitle}
              </p>
            </div>

            {/* Videos Grid - Horizontal scroll on mobile */}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
              <div className={`flex gap-4 lg:gap-6 pb-4 lg:pb-0 ${
                section.videos.length === 1
                  ? "lg:justify-center"
                  : section.videos.length === 2
                  ? "lg:grid lg:grid-cols-2 lg:max-w-4xl lg:mx-auto"
                  : "lg:grid lg:grid-cols-3"
              }`}>
                {section.videos.map((video, videoIndex) => (
                  <div
                    key={video.videoId}
                    className={`flex-shrink-0 w-[300px] sm:w-[340px] lg:w-auto animate-fade-up ${
                      section.videos.length === 1 ? "lg:max-w-lg" : ""
                    }`}
                    style={{ animationDelay: `${videoIndex * 100}ms` }}
                  >
                    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full`}>
                      {/* Video Thumbnail with Play Overlay */}
                      <div className="relative aspect-video bg-gray-900">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                          className="w-full h-full"
                        />
                      </div>

                      {/* Video Info */}
                      <div className="p-4 lg:p-5">
                        <h3 className="font-bold text-nouvie-navy text-lg mb-2 line-clamp-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-nouvie-navy">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            {[
              { number: "100%", label: "Biodegradable" },
              { number: "0%", label: "Químicos tóxicos" },
              { number: "3", label: "Líneas de productos" },
              { number: "+500", label: "Clientes felices" },
            ].map((stat, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="text-3xl md:text-4xl font-black text-nouvie-turquoise mb-1">
                  {stat.number}
                </p>
                <p className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-nouvie-turquoise to-teal-500 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-up">
            ¿Listo para hacer el cambio?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Únete a cientos de familias que ya eligieron productos seguros para su hogar y el planeta
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200">
            <a
              href="https://wa.me/573158326422?text=Hola, vi los testimonios y me gustaría conocer más sobre Nouvie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-nouvie-navy font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 min-h-[56px]"
            >
              <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>

            <a
              href="/productos"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 min-h-[56px]"
            >
              Ver Productos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
