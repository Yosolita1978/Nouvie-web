import type { Metadata } from "next";
import Image from "next/image";
import { Link, redirect } from "@/i18n/navigation";
import { urlFor } from "@/lib/seo";
import { getAllPosts, toCardData, BLOG_CATEGORY_LABELS, type BlogCardData } from "@/lib/blog-data";
import { AccentTitle } from "@/components/blog/AccentTitle";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogWhatsAppCta } from "@/components/blog/BlogWhatsAppCta";
import { StrikeList } from "@/components/blog/StrikeList";

// The blog is Spanish only. Its text is written here instead of in
// messages/*.json because there is no English version to translate to.

const TITLE = "Blog: guías de cuidado capilar e ingredientes";
const DESCRIPTION =
  "Guías claras sobre cuidado capilar, limpieza del hogar e ingredientes: qué significa «sin sal», qué hace cada activo y cómo elegir el producto para tu caso.";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const url = urlFor("es", "/blog");

  return {
    title: TITLE,
    description: DESCRIPTION,
    // Spanish only: canonical, and no hreflang pointing at an English version.
    alternates: { canonical: url },
    openGraph: { title: `${TITLE} | Nouvie`, description: DESCRIPTION, url, type: "website" },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "es") {
    redirect({ href: "/", locale });
  }

  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const featured = featuredPost ? toCardData(featuredPost) : undefined;
  // The grid holds everything except the featured post, so nothing repeats.
  const rest = posts.filter((post) => post.slug !== featuredPost?.slug).map(toCardData);

  return (
    <div className="bg-[#eef3f9] text-nouvie-navy">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-8 md:pb-14 md:pt-16">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-nouvie-navy/70">
          <span className="h-1.5 w-1.5 rounded-full bg-nouvie-turquoise" />
          Blog Nouvie
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-center lg:gap-10">
          <div>
            <h1 className="blog-display text-[clamp(2.75rem,6vw,5.25rem)] font-extrabold leading-[0.92]">
              <span className="block lg:whitespace-nowrap">
                Lo que hay <AccentTitle title="detrás" accent="detrás" />
              </span>
              <span className="block lg:whitespace-nowrap">de lo que usas.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Guías cortas sobre cuidado capilar, limpieza del hogar e ingredientes: qué hace cada
              cosa y cuándo te sirve.
            </p>
          </div>
          <IngredientLabel />
        </div>
      </section>

      {featured && <FeaturedPost post={featured} />}

      {rest.length > 0 ? <BlogGrid posts={rest} /> : <div className="h-14 md:h-20" />}

      <BlogWhatsAppCta />
    </div>
  );
}

/**
 * The hero's signature: a tiny product label with the "no" ingredients crossed
 * out. The whole label links to the hair-care line it describes.
 */
function IngredientLabel() {
  return (
    <Link
      href="/productos/capilar"
      className="group block w-full rounded-2xl border border-nouvie-navy/10 bg-white px-5 py-4 transition-colors hover:border-nouvie-turquoise sm:max-w-sm lg:max-w-none"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        Etiqueta · línea capilar
      </p>
      <dl className="mt-4 space-y-3">
        <div>
          <dt className="text-xs font-semibold text-slate-500">No lleva</dt>
          <dd className="mt-1">
            <StrikeList
              items={["sal", "sulfatos", "parabenos"]}
              className="blog-display gap-x-4 text-xl font-bold text-nouvie-navy"
            />
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold text-slate-500">Sí lleva</dt>
          <dd className="mt-1 text-sm font-semibold text-[#08737a]">
            karité · bio-keratina · prebióticos · argán
          </dd>
        </div>
      </dl>
      <p className="mt-4 border-t border-slate-100 pt-3 text-sm font-semibold text-nouvie-navy group-hover:text-[#08737a]">
        Ver la línea capilar <span aria-hidden="true">→</span>
      </p>
    </Link>
  );
}

function FeaturedPost({ post }: { post: BlogCardData }) {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8">
      <Link
        href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
        className="group grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_1px_0_rgba(5,45,134,0.06),0_24px_48px_-24px_rgba(5,45,134,0.25)] md:grid-cols-[1.1fr_1fr]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#dfe7f3] md:aspect-auto md:min-h-[440px]">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            priority
            sizes="(min-width: 768px) 600px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
          <div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-nouvie-navy px-3 py-1 text-white">Destacado</span>
              <span className="rounded-full bg-[#e3f6f7] px-3 py-1 text-[#08737a]">
                {BLOG_CATEGORY_LABELS[post.category]}
              </span>
            </div>
            <h2 className="blog-display mt-6 text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-[1.02]">
              <AccentTitle title={post.title} accent={post.titleAccent} />
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">{post.excerpt}</p>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
            <span className="text-sm text-slate-500">
              Equipo Nouvie · {post.readingMinutes} min de lectura
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-nouvie-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#0b8a90]">
              Leer la guía
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
