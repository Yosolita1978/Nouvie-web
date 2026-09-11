// Long-form SEO prose: intro, sections, audience blocks and FAQs.
//
// Lifted out of app/[locale]/productos/[slug]/page.tsx unchanged, so the
// product-line pages can render the same content shape as product pages.
// The only behaviour change is `faqHeading`: it used to be the hardcoded
// Spanish string "Preguntas frecuentes" even on /en. It now defaults to that
// string, so existing callers are unaffected, and callers that have a
// translation pass t('detail.faqTitle').

import React from "react";
import { Link } from "@/i18n/navigation";
import type { SeoContent } from "@/lib/product-data";

type LinkHref = Parameters<typeof Link>[0]["href"];

// Render plain text with inline `[anchor](url)` markdown links.
// Used by SeoContentBlock so seoContent prose can carry one or more inline links
// without pulling in a markdown dependency.
export function renderTextWithLinks(
  text: string,
  linkClassName = "text-nouvie-navy underline underline-offset-2 hover:text-nouvie-turquoise transition-colors"
): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={`inline-link-${key++}`}
        href={match[2] as LinkHref}
        className={linkClassName}
      >
        {match[1]}
      </Link>
    );
    lastIndex = linkRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

export function SeoContentBlock({
  seoContent,
  faqHeading = "Preguntas frecuentes",
}: {
  seoContent?: SeoContent;
  faqHeading?: string;
}) {
  if (!seoContent) return null;
  const { intro, sections, audienceBlocks, faqs } = seoContent;
  if (!intro && !sections?.length && !audienceBlocks?.length && !faqs?.length) return null;

  return (
    <section className="px-4 py-12 md:px-8 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-10">
        {intro && (
          <p className="text-gray-700 text-lg leading-relaxed">{renderTextWithLinks(intro)}</p>
        )}
        {sections?.map((s, i) => (
          <div key={`section-${i}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{s.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{renderTextWithLinks(s.body)}</p>
          </div>
        ))}
        {audienceBlocks && audienceBlocks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audienceBlocks.map((b, i) => (
              <div key={`aud-${i}`} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{b.heading}</h3>
                <p className="text-gray-700 leading-relaxed">{renderTextWithLinks(b.body)}</p>
              </div>
            ))}
          </div>
        )}
        {faqs && faqs.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{faqHeading}</h2>
            {faqs.map((f, i) => (
              <details key={`faq-${i}`} className="bg-gray-50 rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">{f.question}</summary>
                <p className="text-gray-700 leading-relaxed mt-3">{renderTextWithLinks(f.answer)}</p>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
