// The four catalogue pills. They used to be buttons driving a `useState` filter
// on /productos; each one is now a real link to its own page, so Google can
// crawl into the three lines and each line has a URL to rank.

import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { categorySlugs, lineRouteFor } from "@/lib/category-data";
import type { ProductCategory } from "@/lib/product-data";

const PILL =
  "px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 min-h-[44px] flex items-center";
const ACTIVE = "bg-white text-nouvie-navy shadow-lg";
const INACTIVE = "bg-white/10 text-white hover:bg-white/20";

export async function LineNav({ current }: { current: ProductCategory | "todos" }) {
  const t = await getTranslations("products");

  return (
    <nav className="bg-nouvie-navy sticky top-0 z-40">
      <div className="px-4 py-4 md:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
          <Link
            href="/productos"
            aria-current={current === "todos" ? "page" : undefined}
            className={`${PILL} ${current === "todos" ? ACTIVE : INACTIVE}`}
          >
            {t("filters.all")}
          </Link>
          {categorySlugs.map((slug) => (
            <Link
              key={slug}
              href={lineRouteFor[slug]}
              aria-current={slug === current ? "page" : undefined}
              className={`${PILL} ${slug === current ? ACTIVE : INACTIVE}`}
            >
              {t(`filters.${slug}`)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
