'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

type ShortCardProps = {
  videoId: string;
  title: string;
  playLabel: string;
  linkLabel: string;
  // null = link to the capilar line page instead of a single product.
  productSlug: string | null;
};

// Shows the thumbnail first and only loads the YouTube player on click.
// Seven iframes loading at once would slow the page down, especially on phones.
export function ShortCard({ videoId, title, playLabel, linkLabel, productSlug }: ShortCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`${playLabel}: ${title}`}
            className="group absolute inset-0 w-full h-full"
          >
            {/* hqdefault is 4:3 with the vertical video centred, so object-cover
                in a 9:16 box crops away exactly the black side bars. */}
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-nouvie-navy/10 group-hover:bg-nouvie-navy/25 transition-colors">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 shadow-lg group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-nouvie-navy translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="mt-3 text-sm font-semibold text-nouvie-navy line-clamp-2">
        {title}
      </p>
      {/* Internal link to the product this Short is about. */}
      <Link
        href={
          productSlug
            ? { pathname: '/productos/[slug]', params: { slug: productSlug } }
            : '/productos/capilar'
        }
        className="mt-1 text-sm font-semibold text-nouvie-turquoise hover:underline"
      >
        {linkLabel} →
      </Link>
    </div>
  );
}
