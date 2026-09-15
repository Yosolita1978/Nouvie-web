import { getTranslations } from 'next-intl/server';
import { ShortCard } from '@/components/ui/ShortCard';
import { youtubeShorts, YOUTUBE_CHANNEL_URL } from '@/lib/youtube-shorts';

type ShortsSectionProps = {
  // How many Shorts to show. The home page shows a few; /testimonios shows all.
  limit?: number;
  // Background and vertical padding of the section.
  className?: string;
};

export async function ShortsSection({ limit, className = 'py-16 lg:py-20 bg-white' }: ShortsSectionProps) {
  const t = await getTranslations('shorts');
  const shorts = limit ? youtubeShorts.slice(0, limit) : youtubeShorts;

  // VideoObject for each Short shown. The player only loads on click, so this
  // is how search engines learn the videos are on the page.
  const videoSchema = shorts.map((short) => ({
    "@context": "https://schema.org/",
    "@type": "VideoObject",
    name: t(`items.${short.key}.title`),
    description: t(`items.${short.key}.description`),
    thumbnailUrl: `https://i.ytimg.com/vi/${short.videoId}/hqdefault.jpg`,
    uploadDate: short.uploadDate,
    embedUrl: `https://www.youtube.com/embed/${short.videoId}`,
    url: `https://www.youtube.com/shorts/${short.videoId}`,
    publisher: { "@type": "Organization", name: "Nouvie" },
  }));

  return (
    <section className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-10">
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            {t('followUs')}
          </a>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nouvie-navy mb-3">
            {t('heading')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {shorts.map((short) => (
            <ShortCard
              key={short.videoId}
              videoId={short.videoId}
              title={t(`items.${short.key}.title`)}
              playLabel={t('play')}
              linkLabel={short.productSlug ? t('viewProduct') : t('viewLine')}
              productSlug={short.productSlug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
