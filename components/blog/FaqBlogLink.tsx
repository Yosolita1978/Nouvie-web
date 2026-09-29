import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getPostBySlug } from "@/lib/blog-data";
import type { SeoContentFaq } from "@/lib/product-data";

/**
 * "Lee la guía completa →" under a product FAQ answer. The product page keeps
 * the short answer; the blog post has the long one.
 * Spanish only, because the blog has no English version.
 */
export function FaqBlogLink({ faq }: { faq: SeoContentFaq }) {
  const locale = useLocale();

  if (!faq.blogSlug || locale !== "es") {
    return null;
  }

  const post = getPostBySlug(faq.blogSlug);
  // A typo in blogSlug is a content bug: fail loudly instead of hiding the link.
  if (!post) {
    throw new Error(`FAQ "${faq.question}" links to missing blog post "${faq.blogSlug}"`);
  }

  return (
    <Link
      href={{ pathname: "/blog/[slug]", params: { slug: post.slug }, hash: faq.blogSection }}
      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-nouvie-navy underline decoration-nouvie-turquoise decoration-2 underline-offset-4 hover:text-nouvie-blue"
    >
      Lee la guía completa: {post.title} <span aria-hidden="true">→</span>
    </Link>
  );
}
