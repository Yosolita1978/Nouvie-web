'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { CarouselImage } from './ProductImageCarousel';

interface ProductGalleryProps {
  images: CarouselImage[];
  alt: string;
  badge?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function ProductGallery({
  images,
  alt,
  badge,
  ctaHref,
  ctaLabel,
}: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const hasMultiple = images.length > 1;

  // Wraps around at both ends so the arrows never dead-end.
  const goTo = (index: number) =>
    setCurrentIndex((index + images.length) % images.length);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 40) goTo(currentIndex - 1);
    else if (deltaX < -40) goTo(currentIndex + 1);
    setTouchStartX(null);
  };

  return (
    <div className="w-full">
      {/* Main image panel */}
      <div
        className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#f2eeed]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-500 ease-out ${
              i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt ?? img.caption ?? alt}
              fill
              className={
                img.fit === 'cover' ? 'object-cover' : 'object-contain p-8'
              }
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}

        {badge && (
          <span className="absolute top-4 left-4 z-30 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-rose-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            {badge}
          </span>
        )}

        {/* Order CTA — mirrors the badge pill, bottom-right, so the WhatsApp
            link is reachable the moment the photos come into view on mobile. */}
        {ctaHref && (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-30 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-rose-600 shadow-md transition-transform hover:scale-105"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {ctaLabel}
          </a>
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => goTo(currentIndex - 1)}
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-transform hover:scale-105"
              aria-label="Imagen anterior"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(currentIndex + 1)}
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-transform hover:scale-105"
              aria-label="Imagen siguiente"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Centered normally; pushed left when the CTA occupies the right. */}
            <div
              className={`absolute bottom-4 z-20 flex items-center gap-1.5 ${
                ctaHref ? 'left-5' : 'left-1/2 -translate-x-1/2'
              }`}
            >
              {images.map((img, i) => (
                <button
                  key={`dot-${img.src}`}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-6 bg-rose-500'
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a la imagen ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {hasMultiple && (
        <div className="mt-4 flex gap-3">
          {images.map((img, i) => (
            <button
              key={`thumb-${img.src}`}
              type="button"
              onClick={() => goTo(i)}
              className={`relative aspect-[4/3] min-w-0 flex-1 overflow-hidden rounded-2xl bg-[#f2eeed] transition-all ${
                i === currentIndex
                  ? 'ring-2 ring-rose-500'
                  : 'ring-1 ring-black/5 hover:ring-black/15'
              }`}
              aria-label={`Ver imagen ${i + 1}`}
            >
              {/* Decorative: the button's aria-label names the target, and the
                  same photo already carries its real alt in the main panel. */}
              <Image
                src={img.src}
                alt=""
                fill
                className={
                  img.fit === 'cover' ? 'object-cover' : 'object-contain p-3'
                }
                sizes="(max-width: 1024px) 33vw, 17vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
