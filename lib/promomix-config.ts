// ============================================
// PromoMix 2026 — Single source of truth
// ============================================

export type PromoMixCategory = "hogar" | "capilar";

export interface PromoMixProduct {
  id: string;
  name: string;
  category: PromoMixCategory;
  size: string;
  basePrice: number;  // PVP+IVA (precio regular)
  promoPrice: number; // PVC+IVA (precio kit)
}

// Business rule constants
export const PROMOMIX_MINIMUM = 300000;
export const PROMOMIX_YEAR = 2026;
export const WHATSAPP_NUMBER = "573158326422";

// ============================================
// HOGAR — Precios especiales
// ============================================
export const HOGAR_PRODUCTS: PromoMixProduct[] = [
  {
    id: "pm-desengrasante-multiusos",
    name: "Desengrasante Multiusos",
    category: "hogar",
    size: "250 ml",
    basePrice: 55200,
    promoPrice: 52550,
  },
  {
    id: "pm-detergente-neutro",
    name: "Detergente Neutro",
    category: "hogar",
    size: "250 ml",
    basePrice: 55200,
    promoPrice: 52550,
  },
  {
    id: "pm-limpia-vidrios",
    name: "Limpia Vidrios",
    category: "hogar",
    size: "250 ml",
    basePrice: 51750,
    promoPrice: 49266,
  },
  {
    id: "pm-limpia-pisos",
    name: "Limpia Pisos",
    category: "hogar",
    size: "250 ml",
    basePrice: 51750,
    promoPrice: 49266,
  },
  {
    id: "pm-lustra-muebles",
    name: "Lustra Muebles",
    category: "hogar",
    size: "250 ml",
    basePrice: 51750,
    promoPrice: 49266,
  },
];

// ============================================
// CAPILAR — Precios especiales
// ============================================
// TODO: Mascarilla Revitalizante is MISSING from client's price list.
//       Confirm with client if this product should exist or was intentionally removed.
export const CAPILAR_PRODUCTS: PromoMixProduct[] = [
  {
    id: "pm-shampoo-suave-y-liso",
    name: "Shampoo Suave y Liso",
    category: "capilar",
    size: "237 ml",
    basePrice: 68000,
    promoPrice: 48552,
  },
  {
    id: "pm-mascarilla-suave-y-liso",
    name: "Mascarilla Suave y Liso",
    category: "capilar",
    size: "177 ml",
    basePrice: 88000,
    promoPrice: 62832,
  },
  {
    id: "pm-locion-suave-y-liso",
    name: "Loción Suave y Liso",
    category: "capilar",
    size: "177 ml",
    basePrice: 78000,
    promoPrice: 55692,
  },
  {
    id: "pm-shampoo-revitalizante",
    name: "Shampoo Revitalizante",
    category: "capilar",
    size: "237 ml",
    basePrice: 68000,
    promoPrice: 48552,
  },
  {
    id: "pm-mascarilla-reparacion-intensa",
    name: "Mascarilla Reparación Intensa",
    category: "capilar",
    size: "177 ml",
    basePrice: 88000,
    promoPrice: 62832,
  },
  {
    id: "pm-locion-revitalizante",
    name: "Loción Revitalizante",
    category: "capilar",
    size: "177 ml",
    basePrice: 78000,
    promoPrice: 55692,
  },
  {
    id: "pm-shampoo-reparacion-intensa",
    name: "Shampoo Reparación Intensa",
    category: "capilar",
    size: "237 ml",
    basePrice: 68000,
    promoPrice: 48552,
  },
  {
    id: "pm-locion-reparacion-intensa",
    name: "Loción Reparación Intensa",
    category: "capilar",
    size: "177 ml",
    basePrice: 78000,
    promoPrice: 55692,
  },
];

// All PromoMix products combined
export const ALL_PROMOMIX_PRODUCTS: PromoMixProduct[] = [
  ...HOGAR_PRODUCTS,
  ...CAPILAR_PRODUCTS,
];
