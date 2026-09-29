import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/lib/products";
import { WhatsAppIcon } from "@/components/icons";
import { getTranslations } from "next-intl/server";

// Same format as the product page.
function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * The link from the article to the product it talks about. Stacked in the
 * desktop sidebar, side by side (photo + text) on mobile.
 */
export async function ArticleProductCard({ product }: { product: Product }) {
  const t = await getTranslations("products");
  const hasPrice = product.price !== undefined && product.hasDbPrice;

  return (
    <div className="flex gap-4 rounded-[1.5rem] bg-white p-4 shadow-[0_24px_48px_-28px_rgba(5,45,134,0.35)] lg:block">
      <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-2xl bg-[#dfe7f3] lg:w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 220px, 96px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col lg:mt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          En este artículo
        </p>
        <p className="blog-display mt-1 text-lg font-bold leading-tight text-nouvie-navy">{product.name}</p>
        <p className="mt-1 text-sm font-semibold text-[#08737a]">
          {hasPrice && product.price !== undefined ? formatPrice(product.price) : "Consultar precio"}
        </p>
        {/* Same button, text and message as the capilar product pages. */}
        <a
          href={`https://wa.me/573158326422?text=${encodeURIComponent(t("detail.whatsappMessage", { name: product.name }))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-amber-600"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {t("common.orderWhatsApp")}
        </a>
        <Link
          href={{ pathname: "/productos/[slug]", params: { slug: product.slug } }}
          className="mt-2 rounded-full px-4 py-2 text-center text-sm font-semibold text-nouvie-navy underline-offset-4 hover:underline"
        >
          Ver producto
        </Link>
      </div>
    </div>
  );
}
