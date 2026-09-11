import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getProducts } from "@/lib/products";
import { getTranslatedProducts } from "@/lib/get-translated-product";
import { LineNav } from "@/components/product-lines/LineNav";
import { AllProductsView } from "@/components/product-lines/AllProductsView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return buildPageMetadata({
    key: "productos",
    href: "/productos",
    locale: (await params).locale,
  });
}

// /productos is now the full catalogue only. The three lines each have their own
// page, so the ?categoria= filter — and the client component that read it — are
// gone. See app/[locale]/productos/category-page.tsx.
export default async function ProductosPage() {
  const locale = await getLocale();
  const products = getTranslatedProducts(await getProducts(), locale);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <LineNav current="todos" />
      <main className="flex-1">
        <AllProductsView products={products} />
      </main>
    </div>
  );
}
