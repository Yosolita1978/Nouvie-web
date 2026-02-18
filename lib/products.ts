import { prisma } from "./prisma";
import { productsData, type ProductData, type ProductPresentation } from "./product-data";
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

// Normalize size string for comparison
function normalizeSize(size: string): string {
  return size
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .replace("litro", "l")
    .replace("litros", "l")
    .replace("galon", "gal")
    .replace("galón", "gal");
}

// Check if a DB product name contains a specific size
function dbNameMatchesSize(dbName: string, size: string): boolean {
  const normalizedDbName = normalizeSize(dbName);
  const normalizedSize = normalizeSize(size);

  // Extract size pattern from DB name (e.g., "(1 l)", "(500 ml)", "(1 gal)")
  const sizePatterns = [
    normalizedSize,
    normalizedSize.replace("l", "litro"),
    normalizedSize.replace("ml", ""),
  ];

  // Check for common patterns
  // "1 Litro" should match "(1 l)" or "(1l)"
  // "500 ml" should match "(500 ml)" or "(500ml)"
  // "1 Galón" should match "(1 gal)" or "(1gal)"
  for (const pattern of sizePatterns) {
    if (normalizedDbName.includes(`(${pattern})`) ||
        normalizedDbName.includes(`(${pattern.replace(/(\d+)/, "$1 ")})`)) {
      return true;
    }
  }

  // Direct number matching for simple cases
  const sizeNumber = normalizedSize.match(/(\d+)/)?.[1];
  const sizeUnit = normalizedSize.replace(/\d+/g, "").trim();

  if (sizeNumber && sizeUnit) {
    // Match patterns like "(1 l)", "(1l)", "(1 litro)"
    const patterns = [
      `(${sizeNumber}${sizeUnit})`,
      `(${sizeNumber} ${sizeUnit})`,
      `(${sizeNumber}${sizeUnit.charAt(0)})`,
      `(${sizeNumber} ${sizeUnit.charAt(0)})`,
    ];

    for (const p of patterns) {
      if (normalizedDbName.includes(p)) {
        return true;
      }
    }
  }

  return false;
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

      // For institucional products, populate presentation prices from DB
      let presentationsWithPrices: ProductPresentation[] | undefined = product.presentations;

      if (product.category === "institucional" && product.presentations) {
        presentationsWithPrices = product.presentations.map((pres) => {
          // Find matching DB product for this presentation size
          let presentationPrice: number | undefined;

          for (const dbProduct of dbProducts) {
            // Strip size from DB name: "Limpia Vidrios Institucional Concentrado (1 l)" → "Limpia Vidrios Institucional Concentrado"
            const dbNameWithoutSize = dbProduct.name.replace(/\s*\(.*?\)\s*$/, "").trim();

            // Match by exact product name and size
            if (dbNameWithoutSize === product.name && dbNameMatchesSize(dbProduct.name, pres.size)) {
              // Apply IVA (19%)
              presentationPrice = Math.round(Number(dbProduct.price) * 1.19);
              break;
            }
          }

          return {
            size: pres.size,
            price: presentationPrice,
          };
        });
      }

      // For institucional products, derive display price from lowest presentation price
      if (product.category === "institucional" && presentationsWithPrices) {
        const presentationPrices = presentationsWithPrices
          .map((p) => p.price)
          .filter((p): p is number => p !== undefined);

        if (presentationPrices.length > 0) {
          const lowestPrice = Math.min(...presentationPrices);
          return {
            ...product,
            presentations: presentationsWithPrices,
            price: lowestPrice,
            unit: matchedData?.unit,
            stock: matchedData?.stock,
            hasDbPrice: true,
          };
        }
      }

      return {
        ...product,
        presentations: presentationsWithPrices,
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

// Fetch USD exchange rate from database
export async function getUsdRate(): Promise<number | null> {
  try {
    const exchangeRate = await prisma.exchangeRate.findUnique({
      where: { currency: "USD" },
      select: { rate: true },
    });

    if (!exchangeRate) return null;

    return Number(exchangeRate.rate);
  } catch (error) {
    console.error("Error fetching USD exchange rate:", error);
    return null;
  }
}
