import type { BlogPost } from "@/lib/blog-data";

export const FAQ_SECTION_ID = "preguntas";

/** "En este artículo": numbered anchor links to each section. */
export function ArticleToc({ post }: { post: BlogPost }) {
  const items = [
    ...post.sections.map((section) => ({ id: section.id, label: section.tocLabel })),
    ...(post.faqs.length > 0 ? [{ id: FAQ_SECTION_ID, label: "Preguntas" }] : []),
  ];

  return (
    <nav aria-label="En este artículo">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        En este artículo
      </p>
      <ol className="mt-4 space-y-1">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex gap-3 rounded-lg px-2 py-1.5 text-sm font-medium text-nouvie-navy hover:bg-white"
            >
              <span className="tabular-nums text-slate-400">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
