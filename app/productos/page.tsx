import { getProducts, type Product } from "@/lib/products";
import { ProductsClient } from "./products-client";

export default async function ProductosPage() {
  const products = await getProducts();

  return <ProductsClient products={products} />;
}
