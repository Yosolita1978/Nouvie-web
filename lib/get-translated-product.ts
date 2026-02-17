// Utility to get translated product data based on locale
// Spanish is the source of truth, English translations overlay on top

import type { ProductData } from "./product-data";
import { productTranslationsEn } from "./product-data-en";

export function getTranslatedProduct<T extends ProductData>(
  product: T,
  locale: string
): T {
  if (locale !== "en") {
    return product;
  }

  const translation = productTranslationsEn[product.slug];
  if (!translation) {
    return product;
  }

  return {
    ...product,
    ...translation,
    // Keep non-translatable fields from the original
    slug: product.slug,
    category: product.category,
    image: product.image,
    usageImage: product.usageImage,
    bundlePrice: product.bundlePrice,
    parentTreatmentSlug: product.parentTreatmentSlug,
  };
}

export function getTranslatedProducts<T extends ProductData>(
  products: T[],
  locale: string
): T[] {
  return products.map((product) => getTranslatedProduct(product, locale));
}
