// Utility to get translated product data based on locale
// Spanish is the source of truth, English translations overlay on top

import type { ProductData, ProductPresentation, UsePhoto } from "./product-data";
import { productTranslationsEn } from "./product-data-en";

// Presentation prices are resolved from the database in getProducts(), using the
// Spanish product name and size. The English overlay only carries the size label,
// so merge by index: English label, price from the original.
function mergePresentations(
  original: ProductPresentation[] | undefined,
  translated: ProductPresentation[] | undefined
): ProductPresentation[] | undefined {
  if (!original) {
    return translated;
  }
  if (!translated) {
    return original;
  }

  return original.map((presentation, index) => ({
    size: translated[index]?.size ?? presentation.size,
    price: presentation.price,
  }));
}

// Same idea for use photos: the photo comes from the Spanish data, the label
// and alt from the English overlay, matched by index.
function mergeUsePhotos(
  original: UsePhoto[] | undefined,
  translated: Omit<UsePhoto, "src">[] | undefined
): UsePhoto[] | undefined {
  if (!original) {
    return undefined;
  }
  if (!translated) {
    return original;
  }

  return original.map((photo, index) => ({
    src: photo.src,
    label: translated[index]?.label ?? photo.label,
    alt: translated[index]?.alt ?? photo.alt,
  }));
}

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
    presentations: mergePresentations(
      product.presentations,
      translation.presentations
    ),
    usePhotos: mergeUsePhotos(product.usePhotos, translation.usePhotos),
  };
}

export function getTranslatedProducts<T extends ProductData>(
  products: T[],
  locale: string
): T[] {
  return products.map((product) => getTranslatedProduct(product, locale));
}
