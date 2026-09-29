import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BLOG_CATEGORY_LABELS, type BlogCardData } from "@/lib/blog-data";
import { AccentTitle } from "./AccentTitle";

/** Grid card: photo, category · minutes, title and short text. */
export function BlogCard({ post }: { post: BlogCardData }) {
  return (
    <article>
      <Link
        href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
        className="group block"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#dfe7f3]">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#08737a]">
          {BLOG_CATEGORY_LABELS[post.category]}
          <span className="mx-2 text-gray-400">•</span>
          <span className="font-medium normal-case tracking-normal text-slate-500">{post.readingMinutes} min</span>
        </p>
        <h3 className="blog-display mt-2 text-2xl font-bold leading-[1.1] text-nouvie-navy group-hover:text-nouvie-blue">
          <AccentTitle title={post.title} accent={post.titleAccent} />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
      </Link>
    </article>
  );
}
