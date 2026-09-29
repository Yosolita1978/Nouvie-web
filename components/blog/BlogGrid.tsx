'use client';

import { useState } from "react";
import { BlogCard } from "./BlogCard";
import { BLOG_CATEGORY_LABELS, type BlogCardData, type BlogCategory } from "@/lib/blog-data";

type Filter = BlogCategory | "todos";

/**
 * "Más guías": category tabs plus the card grid.
 * Every card is in the HTML from the start; the tabs only hide cards, so
 * Google still sees all the links.
 */
export function BlogGrid({ posts }: { posts: BlogCardData[] }) {
  const [active, setActive] = useState<Filter>("todos");

  // Only categories that have at least one post, in the label order.
  const categories = (Object.keys(BLOG_CATEGORY_LABELS) as BlogCategory[]).filter((category) =>
    posts.some((post) => post.category === category)
  );

  const tabs: { value: Filter; label: string }[] = [
    { value: "todos", label: "Todos" },
    ...categories.map((category) => ({ value: category, label: BLOG_CATEGORY_LABELS[category] })),
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="blog-display text-4xl font-bold text-nouvie-navy md:text-5xl">
          Más <em className="blog-accent text-[1.12em] text-[#0b8a90]">guías</em>
        </h2>

        {categories.length > 1 && (
          <div className="flex gap-1 overflow-x-auto rounded-full border border-gray-200 bg-white p-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActive(tab.value)}
                aria-pressed={active === tab.value}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === tab.value
                    ? "bg-nouvie-navy text-white"
                    : "text-nouvie-navy hover:bg-[#eef3f9]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.slug}
            className={active === "todos" || active === post.category ? "" : "hidden"}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
