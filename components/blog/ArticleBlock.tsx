import { renderTextWithLinks } from "@/components/ui/SeoContentBlock";
import { AccentTitle } from "./AccentTitle";
import { StrikeList } from "./StrikeList";
import type { BlogBlock } from "@/lib/blog-data";

const LINK_CLASS =
  "font-semibold text-nouvie-blue underline decoration-nouvie-turquoise decoration-2 underline-offset-4 hover:text-[#08737a]";

/** Renders one block of an article section. One branch per block type. */
export function ArticleBlock({ block }: { block: BlogBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-[17px] leading-[1.75] text-slate-700">{renderTextWithLinks(block.text, LINK_CLASS)}</p>
    );
  }

  if (block.type === "checklist") {
    return (
      <ul className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-[15px] leading-snug text-slate-700">
            <span
              aria-hidden="true"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e3f6f7] text-[#08737a]"
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="divide-y divide-gray-200 border-y border-gray-200">
        {block.items.map((item, index) => (
          <li key={item} className="flex gap-5 py-5 text-slate-700">
            <span className="blog-display w-9 shrink-0 text-2xl font-extrabold text-[#0b8a90]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="pt-1 text-[17px] leading-relaxed">{item}</span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "choices") {
    return (
      <dl className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <div key={item.label} className="rounded-2xl border-t-4 border-nouvie-turquoise bg-white p-5">
            <dt className="blog-display text-lg font-bold leading-tight text-nouvie-navy">{item.label}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-slate-700">
              {renderTextWithLinks(item.text, LINK_CLASS)}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  // chips: the ingredient label, same crossed-out style as the blog hero
  return (
    <div className="rounded-[1.5rem] bg-nouvie-navy p-6 md:p-8">
      <p className="blog-display text-xl font-bold text-white md:text-2xl">
        <AccentTitle
          title={block.title}
          accent={block.titleAccent}
          accentClassName="text-nouvie-turquoise"
        />
      </p>
      <StrikeList
        items={block.items}
        highlighted={block.highlighted}
        className="blog-display mt-5 text-lg font-semibold text-white/90 md:text-xl"
      />
    </div>
  );
}
