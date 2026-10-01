import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link, redirect } from "@/i18n/navigation";
import { urlFor, SITE_URL } from "@/lib/seo";
import { getProductBySlug } from "@/lib/products";
import {
  getPostBySlug,
  getRelatedPosts,
  getReadingMinutes,
  formatPostDate,
  toCardData,
  BLOG_AUTHOR_BIO,
  BLOG_CATEGORY_LABELS,
} from "@/lib/blog-data";
import { AccentTitle } from "@/components/blog/AccentTitle";
import { ArticleBlock } from "@/components/blog/ArticleBlock";
import { ArticleProducts, type ArticleProductItem } from "@/components/blog/ArticleProducts";
import { ArticleToc, FAQ_SECTION_ID } from "@/components/blog/ArticleToc";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogWhatsAppCta } from "@/components/blog/BlogWhatsAppCta";

// The product card reads the live price from the database, like the product pages.
export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = urlFor("es", { pathname: "/blog/[slug]", params: { slug } });
  const title = post.metaTitle ?? post.title;

  return {
    title,
    description: post.excerpt,
    // Spanish only: canonical, and no hreflang pointing at an English version.
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${title} | Nouvie`,
      description: post.excerpt,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      images: [{ url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug, locale } = await params;
  if (locale !== "es") {
    redirect({ href: "/", locale });
  }

  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  // A post pointing at a product that no longer exists is a content bug; fail
  // loudly instead of silently hiding it.
  const productItems: ArticleProductItem[] = await Promise.all(
    post.products.map(async (blogProduct) => {
      const product = await getProductBySlug(blogProduct.slug);
      if (!product) {
        throw new Error(`Blog post "${post.slug}" links to missing product "${blogProduct.slug}"`);
      }
      return { blogProduct, product };
    })
  );

  const related = getRelatedPosts(post).map(toCardData);
  const url = urlFor("es", { pathname: "/blog/[slug]", params: { slug } });
  const blogUrl = urlFor("es", "/blog");
  const readingMinutes = getReadingMinutes(post);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image.src}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "es-CO",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Nouvie",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/nouvie-logo.png` },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: urlFor("es", "/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <div className="bg-[#eef3f9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header: title left, photo right on desktop, so the first screen shows both */}
      <header className="mx-auto grid max-w-6xl gap-8 px-4 pt-8 md:px-8 md:pt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
        <div>
          <nav aria-label="Ruta" className="flex items-center gap-2 text-xs font-semibold">
            <Link href="/blog" className="uppercase tracking-[0.18em] text-nouvie-navy/70 hover:text-nouvie-navy">
              Blog
            </Link>
            <span className="text-slate-400">/</span>
            <span className="rounded-full bg-[#e3f6f7] px-3 py-1 text-[#08737a]">
              {BLOG_CATEGORY_LABELS[post.category]}
            </span>
          </nav>
          <h1 className="blog-display mt-5 text-[clamp(2.4rem,5.2vw,4.4rem)] font-extrabold leading-[0.98] text-nouvie-navy">
            <AccentTitle title={post.title} accent={post.titleAccent} />
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{post.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-nouvie-navy text-[11px] font-bold text-white">
              N
            </span>
            <span className="font-semibold text-nouvie-navy">{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            {post.updatedAt && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  Actualizado <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt)}</time>
                </span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{readingMinutes} min de lectura</span>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#dfe7f3] lg:aspect-square">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </div>
      </header>

      {/* Table of contents | article | product card */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-10 px-4 md:mt-16 md:px-8 lg:grid-cols-[170px_minmax(0,1fr)_230px] lg:gap-12">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl bg-white p-4 lg:bg-transparent lg:p-0">
            <ArticleToc post={post} />
          </div>
        </aside>

        <article className="min-w-0 max-w-[40rem] space-y-14">
          <p className="blog-display text-[1.35rem] font-semibold leading-snug text-nouvie-navy md:text-2xl">
            {post.intro}
          </p>

          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 space-y-5">
              <h2 className="blog-display text-[1.75rem] font-bold leading-[1.1] text-nouvie-navy md:text-[2.1rem]">
                {section.heading}
              </h2>
              {section.blocks.map((block, index) => (
                <ArticleBlock key={index} block={block} />
              ))}
            </section>
          ))}

          {/* On mobile the products sit here, before the questions. */}
          <div className="lg:hidden">
            <ArticleProducts heading={post.productsHeading} items={productItems} />
          </div>

          {post.faqs.length > 0 && (
            <section id={FAQ_SECTION_ID} className="scroll-mt-28">
              <h2 className="blog-display mb-5 text-[1.75rem] font-bold leading-[1.1] text-nouvie-navy md:text-[2.1rem]">
                Preguntas frecuentes
              </h2>
              <div className="divide-y divide-slate-200 overflow-hidden rounded-[1.25rem] bg-white">
                {post.faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0} className="group px-5 py-4 md:px-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-nouvie-navy [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef3f9] text-lg leading-none text-[#08737a] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pr-10 text-[15px] leading-relaxed text-slate-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Author */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-nouvie-navy font-bold text-white">
                N
              </span>
              <div>
                <p className="text-sm font-semibold text-nouvie-navy">Escrito por el {post.author}</p>
                <p className="text-sm text-slate-500">{BLOG_AUTHOR_BIO}</p>
              </div>
            </div>
          </div>
        </article>

        <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
          <ArticleProducts heading={post.productsHeading} items={productItems} />
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-20 md:px-8">
          <h2 className="blog-display text-4xl font-bold text-nouvie-navy md:text-5xl">
            Sigue <em className="blog-accent text-[1.12em] text-[#0b8a90]">leyendo</em>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((card) => (
              <BlogCard key={card.slug} post={card} />
            ))}
          </div>
        </section>
      )}

      <div className="pt-20">
        <BlogWhatsAppCta />
      </div>
    </div>
  );
}
