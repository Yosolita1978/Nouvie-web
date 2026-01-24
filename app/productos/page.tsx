import type { Metadata } from "next";
import { getProducts } from "@/lib/products";
import { ProductsClient } from "./products-client";

export const metadata: Metadata = {
  title: "Productos - Limpieza Ecológica y Tratamientos Capilares",
  description: "Explora nuestra línea completa de productos: Aseo Hogar biodegradable, Línea Institucional profesional y Tratamientos Capilares naturales. Sin químicos tóxicos, seguros para toda la familia.",
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
  alternates: {
    canonical: "https://nouvie-web.vercel.app/productos",
  },
  openGraph: {
    title: "Productos Nouvie - Limpieza Ecológica y Tratamientos Capilares",
    description: "Línea Hogar, Institucional y Capilar. 100% biodegradables y libres de químicos tóxicos.",
    url: "https://nouvie-web.vercel.app/productos",
  },
};

export default async function ProductosPage() {
  const products = await getProducts();

  return <ProductsClient products={products} />;
}
