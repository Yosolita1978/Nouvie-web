'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const heroImages = [
  {
    src: '/images/hero-1.jpg',
    alt: 'Productos biodegradables Nouvie',
    label: '',
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Productos de limpieza ecológicos Nouvie',
    label: 'Línea Aseo Hogar',
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Tratamientos capilares naturales Nouvie',
    label: 'Línea Capilar',
  },
  {
    src: '/images/hero-4.jpg',
    alt: 'Línea institucional Nouvie',
    label: 'Línea Limpieza Institucional',
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative h-[320px] sm:h-[360px] lg:h-96 rounded-2xl overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent">
              <span className="absolute top-6 left-6 text-white text-2xl lg:text-3xl font-light italic drop-shadow-lg">
                {image.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-nouvie-navy'
                : 'bg-nouvie-pale-blue hover:bg-nouvie-light-blue'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
        aria-label="Imagen anterior"
      >
        <svg className="w-5 h-5 text-nouvie-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
        aria-label="Siguiente imagen"
      >
        <svg className="w-5 h-5 text-nouvie-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
