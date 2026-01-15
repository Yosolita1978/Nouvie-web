import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Escucha lo que nuestros clientes dicen sobre los productos Nouvie.",
};

export default function TestimoniosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-nouvie-pale-blue/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nouvie-navy mb-6 animate-fade-up">
            Testimonios
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Escucha lo que nuestros clientes dicen sobre su experiencia con Nouvie
          </p>
        </div>
      </section>

      {/* Video Testimonial */}
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
                        src="https://www.youtube-nocookie.com/embed/jZcuEyWNfpg?rel=0&modestbranding=1"
                        title="Testimonio cliente Nouvie"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    {/* Home Indicator */}
                    <div className="bg-black h-8 flex items-center justify-center">
                      <div className="w-32 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:w-1/2 animate-fade-up animation-delay-200">
              {/* 5 Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-nouvie-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                Tras probar un sinfín de productos para el cabello que le pudieran ayudar a mantener el poco cabello que tenía, después de haber sido dada de alta como paciente oncológico, el Tratamiento capilar de Nouvie logró cumplir la tarea.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-nouvie-turquoise rounded-full"></div>
                <div>
                  <p className="text-xl font-semibold text-nouvie-navy">Maria Elena Corredor</p>
                  <p className="text-gray-500">Cliente Nouvie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nouvie-turquoise">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-fade-up">
            ¿Quieres probar nuestros productos?
          </h2>
          <p className="text-white/90 mb-8 animate-fade-up animation-delay-100">
            Contáctanos y te asesoramos
          </p>
          <a
            href="https://wa.me/573158326422"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-nouvie-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors animate-fade-up animation-delay-200"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
