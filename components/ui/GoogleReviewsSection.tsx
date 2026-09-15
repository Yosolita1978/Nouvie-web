import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { getGoogleReviews } from '@/lib/google-reviews';

// No Review/AggregateRating schema here on purpose: Google does not show stars
// for reviews a business publishes about itself on its own site.

function Stars({ rating, className }: { rating: number; className: string }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${className} ${star <= Math.round(rating) ? 'text-nouvie-gold' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export async function GoogleReviewsSection() {
  const data = await getGoogleReviews();

  // Google unreachable: the error is already logged, so just skip the section.
  if (!data) {
    return null;
  }

  const t = await getTranslations('googleReviews');

  return (
    <section className="py-16 lg:py-20 bg-nouvie-pale-blue/20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header: overall rating */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nouvie-navy mb-4">
            {t('heading')}
          </h2>
          <div className="inline-flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <span className="text-4xl font-black text-nouvie-navy">{data.rating.toFixed(1)}</span>
            <Stars rating={data.rating} className="w-6 h-6" />
            <a
              href={data.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 underline underline-offset-2 hover:text-nouvie-navy"
            >
              {t('totalReviews', { count: data.totalReviews })}
            </a>
          </div>
        </div>

        {/* Review cards — horizontal scroll on phones, grid on desktop */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
          <div className="flex gap-4 pb-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:pb-0">
            {data.reviews.map((review) => (
              <article
                key={`${review.authorName}-${review.relativeTime}`}
                className="flex flex-col flex-shrink-0 w-[85%] sm:w-[340px] lg:w-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  {review.authorPhotoUrl ? (
                    // Google already serves a small avatar, so it loads directly
                    // instead of going through the Next image optimizer.
                    <Image
                      src={review.authorPhotoUrl}
                      alt=""
                      width={40}
                      height={40}
                      unoptimized
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-nouvie-turquoise text-white font-bold">
                      {review.authorName.charAt(0).toUpperCase()}
                    </span>
                  )}
                  <div className="min-w-0">
                    {review.authorUrl ? (
                      <a
                        href={review.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-semibold text-nouvie-navy truncate hover:underline"
                      >
                        {review.authorName}
                      </a>
                    ) : (
                      <p className="font-semibold text-nouvie-navy truncate">{review.authorName}</p>
                    )}
                    <p className="text-xs text-gray-500">{review.relativeTime}</p>
                  </div>
                </div>

                <Stars rating={review.rating} className="w-4 h-4" />

                <p className="mt-3 text-gray-700 text-sm leading-relaxed line-clamp-6">
                  {review.text}
                </p>

                <div className="mt-auto pt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>{t('postedOnGoogle')}</span>
                  {review.reviewUrl && (
                    <a
                      href={review.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-nouvie-turquoise hover:underline"
                    >
                      {t('readOnGoogle')}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={data.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary px-6 py-3"
          >
            {t('seeAll')}
          </a>
          <a
            href={data.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-6 py-3"
          >
            {t('writeReview')}
          </a>
        </div>
      </div>
    </section>
  );
}
