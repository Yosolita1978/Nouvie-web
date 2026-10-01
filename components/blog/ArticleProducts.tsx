import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/lib/products";
import type { BlogProduct } from "@/lib/blog-data";
import { WhatsAppIcon } from "@/components/icons";

// Same format as the product page.
function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export interface ArticleProductItem {
  /** Short label and note from the post (lib/blog-data.ts). */
  blogProduct: BlogProduct;
  /** Live product, with the price from the database. */
  product: Product;
}

/**
 * The products the article talks about, each with its own WhatsApp order
 * button. Desktop sidebar, and inside the article on mobile.
 */
export async function ArticleProducts({
  heading,
  items,
}: {
  heading: string;
  items: ArticleProductItem[];
}) {
  const t = await getTranslations("products");

  return (
    <div className="rounded-[1.5rem] bg-white p-4 shadow-[0_24px_48px_-28px_rgba(5,45,134,0.35)]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {heading}
      </p>

      <ul className="mt-2 divide-y divide-slate-100">
        {items.map(({ blogProduct, product }) => {
          const hasPrice = product.price !== undefined && product.hasDbPrice;

          return (
            <li key={product.slug} className="py-4 last:pb-1">
              <Link
                href={{ pathname: "/productos/[slug]", params: { slug: product.slug } }}
                className="group flex gap-3"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#dfe7f3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="blog-display text-[15px] font-bold leading-tight text-nouvie-navy group-hover:underline">
                    {blogProduct.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-slate-500">{blogProduct.note}</p>
                  <p className="mt-1 text-sm font-semibold text-[#08737a]">
                    {hasPrice && product.price !== undefined
                      ? formatPrice(product.price)
                      : "Consultar precio"}
                  </p>
                </div>
              </Link>

              {/* Same button, text and message as the capilar product pages. */}
              <a
                href={`https://wa.me/573158326422?text=${encodeURIComponent(t("detail.whatsappMessage", { name: product.name }))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-amber-600"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t("common.orderWhatsApp")}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
