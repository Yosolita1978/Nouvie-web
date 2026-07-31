import type { Metadata } from "next";
import { alternatesFor, urlFor, toLocale } from "@/lib/seo";
import { getProducts } from "@/lib/products";
import { ProductsClient } from "./products-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);

  return {
    title: "Productos Hipoalergénicos y Ecológicos",
    description: "Explora productos de limpieza hipoalergénicos, biodegradables y tratamientos capilares Nouvie. Línea hogar, institucional y capilar. Pídelo por WhatsApp.",
    keywords: [
      "productos de limpieza ecológicos",
      "multiusos biodegradable",
      "desengrasante ecológico",
      "shampoo sin sulfatos",
      "tratamiento capilar natural",
      "aseo institucional biodegradable",
      "productos Nouvie Colombia",
      "limpieza sin químicos tóxicos",
    ],
    alternates: alternatesFor(locale, "/productos"),
    openGraph: {
      title: "Productos Nouvie - Limpieza Ecológica y Tratamientos Capilares",
      description: "Línea Hogar, Institucional y Capilar. 100% biodegradables y libres de químicos tóxicos.",
      url: urlFor(locale, "/productos"),
    },
  };
}

export default async function ProductosPage() {
  const products = await getProducts();

  return <ProductsClient products={products} />;
}
