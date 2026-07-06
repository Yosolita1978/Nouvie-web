'use client';

import Image from 'next/image';
import { useState } from 'react';

export interface CarouselImage {
  src: string;
  caption?: string;
  fit?: 'contain' | 'cover';
}

interface ProductImageCarouselProps {
  images: CarouselImage[];
  alt: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function ProductImageCarousel({
  images,
  alt,
  ctaHref,
  ctaLabel,
}: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Mobile swipe: register a slide change when the drag passes a small threshold
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 40) prevSlide();
    else if (deltaX < -40) nextSlide();
    setTouchStartX(null);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-rose-50/40 shadow-lg ring-1 ring-black/5"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={img.src}
            alt={`${alt} - ${i + 1}`}
            fill
            className={
              img.fit === 'cover' ? 'object-cover' : 'object-contain p-5'
            }
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Arrows (desktop only — mobile uses swipe) */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/60 hover:bg-white/90 backdrop-blur rounded-full shadow-sm items-center justify-center transition-all"
        aria-label="Imagen anterior"
      >
        <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/60 hover:bg-white/90 backdrop-blur rounded-full shadow-sm items-center justify-center transition-all"
        aria-label="Imagen siguiente"
      >
        <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots — small, floating, top-center */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-black/10 px-2 py-1.5 backdrop-blur-md">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* CTA — compact floating pill, bottom-center */}
      {ctaHref && (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute bottom-4 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-rose-500/30 ring-1 ring-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5 hover:-translate-x-1/2"
        >
          <svg className="h-4 w-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {ctaLabel ?? 'PÍDELO YA'}
        </a>
      )}
    </div>
  );
}
