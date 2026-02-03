import { prisma } from "./prisma";
import { productsData, type ProductData } from "./product-data";
import type { ProductCategory } from "./product-data";

// Combined product type (hardcoded + price from DB)
export interface Product extends ProductData {
  price?: number;
  unit?: string;
  stock?: number;
  hasDbPrice: boolean;
}

// Create a slug from product name for matching
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

// Fetch all products - hardcoded list with prices from database
export async function getProducts(): Promise<Product[]> {
  try {
    // Fetch all active products from database
    const dbProducts = await prisma.product.findMany({
      where: { active: true },
      select: {
        name: true,
        category: true,
        price: true,
        unit: true,
        stock: true,
      },
    });

    // Create a map for quick lookup by slug
    const priceMap = new Map<string, { price: number; unit: string; stock: number }>();

    for (const dbProduct of dbProducts) {
      const slug = createSlug(dbProduct.name);
      priceMap.set(slug, {
        price: Number(dbProduct.price),
        unit: dbProduct.unit,
        stock: dbProduct.stock,
      });
    }

    // Map hardcoded products and attach prices from DB
    return productsData.map((product) => {
      const dbData = priceMap.get(product.slug);

      // Try matching by partial name if exact slug doesn't match
      // BUT exclude Etiquetas (labels) which have low prices like $500
      let matchedData = dbData;
      if (!matchedData) {
        // Find best match: prefer longer slugs (more specific) and prices > $1000
        let bestMatch: { slug: string; data: { price: number; unit: string; stock: number } } | null = null;

        for (const [slug, data] of priceMap.entries()) {
          // Skip if price is suspiciously low (likely an Etiqueta/label)
          if (data.price < 1000) continue;

          // Check if slugs share significant overlap
          if (slug.includes(product.slug) || product.slug.includes(slug)) {
            // Prefer longer/more specific matches
            if (!bestMatch || slug.length > bestMatch.slug.length) {
              bestMatch = { slug, data };
            }
          }
        }

        if (bestMatch) {
          matchedData = bestMatch.data;
        }
      }

      // Database stores prices sin IVA, website displays con IVA (19%)
      const priceWithIVA = matchedData?.price
        ? Math.round(matchedData.price * 1.19)
        : undefined;

      return {
        ...product,
        price: priceWithIVA,
        unit: matchedData?.unit,
        stock: matchedData?.stock,
        hasDbPrice: matchedData !== undefined,
      };
    });
  } catch (error) {
    console.error("Error fetching prices from database:", error);

    // Fallback - return hardcoded products without prices
    return productsData.map((product) => ({
      ...product,
      hasDbPrice: false,
    }));
  }
}

// Fetch products by category
export async function getProductsByCategory(category: ProductCategory): Promise<Product[]> {
  const products = await getProducts();
  return products.filter((p) => p.category === category);
}

// Fetch single product by slug
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
}
