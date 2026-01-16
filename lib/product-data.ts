// Hardcoded product details from brochure
// Database provides: name, price, category, active status
// This file provides: descriptions, dilution tables, usage tips, specs

export type ProductCategory = "hogar" | "capilar" | "institucional";

export interface DilutionRow {
  uso: string;
  cantidad: string;
  agua: string;
}

export interface ProductStep {
  step: number;
  name: string;
  instruction: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductPresentation {
  size: string;
  price?: string;
}

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  description: string;
  benefits: string[];
  image: string;
  usageImage?: string; // Second image showing usage/applications
  badge?: string;
  dilutionTable?: DilutionRow[];
  steps?: ProductStep[];
  specs?: ProductSpec[];
  presentations?: ProductPresentation[];
  youtubeVideo?: string;
  usageTips?: string[];
}

export const productsData: ProductData[] = [
  // ============================================
  // LÍNEA HOGAR
  // ============================================
  {
    slug: "detergente-neutro",
    name: "Detergente Neutro Nouvie",
    tagline: "Limpieza concentrada para toda tu ropa",
    category: "hogar",
    description: "El Detergente Neutro Nouvie es un detergente concentrado, diseñado para lavar todo tipo de ropa en máquinas lavadoras. Formulado especialmente para que la piel y suavidad no se adhieran a los suavizantes, grasas o su gran poder de suspensión. Elaborado con tensoactivos naturales como los derivados del aceite de coco y betaína, ofrecen una pH neutro, lo que garantiza el mayor cuidado de sus prendas.",
    benefits: [
      "Producto concentrado - rinde más",
      "pH neutro - cuida tus prendas",
      "Elaborado con tensoactivos naturales",
      "Ideal para ropa delicada",
      "No tóxico y biodegradable"
    ],
    image: "/images/productos/detergente-neutro.png",
    usageImage: "/images/productos/resena-neutro.png",
    badge: "Producto concentrado",
    dilutionTable: [
      { uso: "Lavadora", cantidad: "4 chorros", agua: "500 ml" },
      { uso: "Lavadora carga completa", cantidad: "8 chorros", agua: "1 L" },
      { uso: "Remojo", cantidad: "2-3 chorros", agua: "5 L" }
    ],
    usageTips: [
      "Ideal para todo tipo de telas",
      "Perfecto para ropa de bebé",
      "Funciona en agua fría o caliente"
    ]
  },
  {
    slug: "limpia-pisos-superficies",
    name: "Limpia Pisos y Superficies Delicadas",
    tagline: "Brillo sin manchas para pisos y superficies",
    category: "hogar",
    description: "El Limpia Pisos y Superficies Delicadas Nouvie es un limpiador líquido concentrado completamente soluble en agua. Formulado para limpiar y remover todo tipo de pisos y superficies delicadas. Perfecto para aplicar en espejos y vidrios del baño ofreciendo limpieza sin manchas. Especial para lavado y encerado de automóviles.",
    benefits: [
      "Producto altamente concentrado",
      "Ideal para espejos y vidrios",
      "Perfecto para lavado de automóviles",
      "No deja manchas ni residuos",
      "Biodegradable"
    ],
    image: "/images/productos/limpia-pisos.png",
    usageImage: "/images/productos/resena-pisos.png",
    badge: "Producto concentrado",
    dilutionTable: [
      { uso: "Pisos", cantidad: "2-3 chorros", agua: "1 L" },
      { uso: "Vidrios/Espejos", cantidad: "1-2 chorros", agua: "500 ml" },
      { uso: "Lavado de auto", cantidad: "4 chorros", agua: "5 L" }
    ],
    usageTips: [
      "Aplicar con paño suave para mejores resultados",
      "Ideal para superficies de mármol y porcelanato",
      "No requiere enjuague en superficies pequeñas"
    ]
  },
  {
    slug: "desengrasante-multiusos",
    name: "Desengrasante Multiusos",
    tagline: "Elimina grasa y manchas difíciles",
    category: "hogar",
    description: "El Desengrasante Multiusos Nouvie, único en su categoría, es que tiene dos funciones: desengrasante y removedor de manchas. Efectivo sobre todas las superficies que admitan agua. Elimina las grasas y olores indeseados en el área de la cocina y similares. Apto también para cocinas de acero inoxidable, sin dañar sus superficies.",
    benefits: [
      "Doble función: desengrasante y removedor de manchas",
      "Efectivo en todas las superficies",
      "Elimina grasa y olores",
      "Seguro para acero inoxidable",
      "No maltrata la fibra"
    ],
    image: "/images/productos/desengrasante.png",
    usageImage: "/images/productos/resena-desengrasante.png",
    badge: "Producto concentrado",
    dilutionTable: [
      { uso: "Cocina (grasa ligera)", cantidad: "2 chorros", agua: "500 ml" },
      { uso: "Grasa pesada", cantidad: "Directo", agua: "Sin diluir" },
      { uso: "Manchas en tela", cantidad: "1-2 chorros", agua: "Directo" }
    ],
    usageTips: [
      "Ideal para campanas extractoras",
      "Perfecto para limpiar hornos",
      "Usar directo en manchas difíciles de grasa"
    ]
  },
  {
    slug: "lustra-muebles",
    name: "Lustra Muebles Nouvie",
    tagline: "Brillo y protección con cera de Carnauba",
    category: "hogar",
    description: "El Lustra Muebles Nouvie es una silicona enriquecida con cera de Carnauba ideal para limpiar, renovar y lustrar muebles y superficies metálicas de acero inoxidable. Brinda un brillo e hidratación especialmente en superficies de madera y muebles. Aporta un acabado nuevo al teflon y otras superficies. Limpia y protege prendas de cuero como carteras y tapicería.",
    benefits: [
      "Enriquecido con cera de Carnauba",
      "Ideal para madera y metal",
      "Protege cuero y tapicería",
      "Brillo duradero",
      "Hidrata superficies de madera"
    ],
    image: "/images/productos/lustra-muebles.png",
    usageImage: "/images/productos/resena-lustra.png",
    badge: "Producto concentrado",
    usageTips: [
      "Aplicar con paño suave y seco",
      "Ideal para muebles de madera",
      "Perfecto para carteras y bolsos de cuero"
    ]
  },
  {
    slug: "limpia-vidrios-alfombras",
    name: "Limpia Vidrios y Alfombras Nouvie",
    tagline: "Limpieza impecable con secado rápido",
    category: "hogar",
    description: "El Limpia Vidrios y Alfombras Nouvie es un producto altamente concentrado y económico, soluble en agua. Diseñado para la limpieza de vidrios, alfombras y tapicerías. Deja tus vidrios y alfombras impecables con efecto de secado rápido, sin dejar manchas. Su versatilidad lo hace efectivo para limpieza especial para el lavado en seco, una limpieza efectiva e ideal para alfombras y tapicería.",
    benefits: [
      "Altamente concentrado y económico",
      "Efecto de secado rápido",
      "Sin manchas ni residuos",
      "Ideal para lavado en seco",
      "Versatilidad de uso"
    ],
    image: "/images/productos/limpia-vidrios.png",
    usageImage: "/images/productos/resena-vidrios.png",
    badge: "Producto concentrado",
    dilutionTable: [
      { uso: "Vidrios", cantidad: "2-3 chorros", agua: "500 ml" },
      { uso: "Alfombras", cantidad: "3-4 chorros", agua: "1 L" },
      { uso: "Tapicería", cantidad: "2 chorros", agua: "500 ml" }
    ],
    usageTips: [
      "Usar con atomizador para vidrios",
      "En alfombras, frotar suavemente",
      "Dejar secar naturalmente"
    ]
  },
  {
    slug: "atomizador",
    name: "Atomizador Nouvie",
    tagline: "El complemento perfecto para tus productos",
    category: "hogar",
    description: "Atomizador de alta calidad diseñado para usar con todos los productos concentrados de la Línea Hogar Nouvie. Facilita la aplicación precisa y económica de los productos. ¡Puedes obtenerlo GRATIS! Por cada 10 botellas que nos envíes para reciclar, recibirás un 5% de descuento en tu siguiente compra o un atomizador gratis.",
    benefits: [
      "Alta calidad y durabilidad",
      "Spray fino y uniforme",
      "Compatible con todos los productos Nouvie",
      "Fácil de usar",
      "¡GRATIS al reciclar 10 botellas!"
    ],
    image: "/images/productos/atomizador.png",
    usageTips: [
      "Úsalo con cualquier producto de la Línea Hogar",
      "Recicla 10 botellas y obtén uno gratis",
      "Ajusta la boquilla para spray fino o grueso"
    ]
  },

  // ============================================
  // LÍNEA CAPILAR - TRATAMIENTOS
  // ============================================
  {
    slug: "tratamiento-kiwi-acai",
    name: "Tratamiento Kiwi & Acaí",
    tagline: "Bio Keratina para cabello liso y luminoso",
    category: "capilar",
    description: "Nutre y protege tu cabello con tratamientos especiales Bio Keratina: Shampoo, Mascarilla y Loción para Moldear NOUVIE. Su formulación contiene aceites esenciales de Bio Keratina que ayudan a liso y cabello, manteniendo el color natural del cabello. El uso continúo de Bio Keratina ayuda a la reducción del frizz, encrespado y efecto flyaway que tienen.",
    benefits: [
      "Bio Keratina natural",
      "Cabello liso y luminoso",
      "Reduce frizz y encrespado",
      "Mantiene el color natural",
      "Aceites esenciales nutritivos"
    ],
    image: "/images/productos/kiwi-acai.png",
    usageImage: "/images/productos/resena-kiwi-acai.png",
    steps: [
      {
        step: 1,
        name: "Shampoo Kiwi & Acaí",
        instruction: "Aplicar una cantidad generosa sobre el cabello húmedo, masajear suavemente desde la raíz hasta las puntas. Enjuagar con abundante agua."
      },
      {
        step: 2,
        name: "Mascarilla Kiwi & Acaí",
        instruction: "Después del shampoo, aplicar la mascarilla de medios a puntas. Dejar actuar de 3 a 5 minutos y enjuagar."
      },
      {
        step: 3,
        name: "Loción para Moldear Kiwi & Acaí",
        instruction: "Aplicar una cantidad considerable de la loción para moldear con el cabello húmedo o seco, peinar y dejar secar."
      }
    ]
  },
  {
    slug: "tratamiento-honey-melon",
    name: "Tratamiento Honey & Melon",
    tagline: "Manteca de Karité para reparación intensa",
    category: "capilar",
    description: "La Manteca de Karité contiene sustancias nutritivas ideales para restaurar y devolver la fuerza y el brillo. Hidratación y brillo en el cabello, este tipo de producto tiene una protección natural que ayuda al cabello con daño, perdida de fuerza y sin brillo. Nutre y humecta el cabello duro y quebradizo.",
    benefits: [
      "Manteca de Karité nutritiva",
      "Reparación intensa",
      "Restaura fuerza y brillo",
      "Hidratación profunda",
      "Ideal para cabello dañado"
    ],
    image: "/images/productos/honey-melon.png",
    usageImage: "/images/productos/resena-honey-melon.png",
    steps: [
      {
        step: 1,
        name: "Shampoo Royal Honey & Melon",
        instruction: "Aplicar el Shampoo utilizando la cantidad de producto equivalente al tamaño de una moneda, emulsionar y enjuagar. Repetir si es necesario."
      },
      {
        step: 2,
        name: "Mascarilla Royal Honey & Melon",
        instruction: "Aplicar la mascarilla de medios a puntas, dejar actuar de 3 a 5 minutos para obtener mejores resultados. Enjuagar."
      },
      {
        step: 3,
        name: "Loción para Moldear Royal Honey & Melon",
        instruction: "Aplicar una cantidad considerable de la loción para moldear con el cabello húmedo o seco, peinar y dejar secar."
      }
    ]
  },
  {
    slug: "tratamiento-revitalizante",
    name: "Tratamiento Revitalizante",
    tagline: "Aceite de Argán para el cabello masculino",
    category: "capilar",
    description: "El aceite de Argán, junto a los 3 aceites naturales de nuestra fórmula, brinda un efecto restaurador y protector. Fortalece y protege tu cabello con una constante de hidratación, fortalecimiento del cabello y fibra capilar. Este tratamiento exclusivo de NOUVIE lo fortalece, rejuveneciendo del cabello y fibra capilar. Repara cabellos quebradizos y dañados.",
    benefits: [
      "Aceite de Argán natural",
      "Yogurt y Prebióticos",
      "Fortalece fibra capilar",
      "Línea masculina especializada",
      "Rejuvenece el cabello"
    ],
    image: "/images/productos/revitalizante.png",
    usageImage: "/images/productos/resena-revitalizante.png",
    steps: [
      {
        step: 1,
        name: "Shampoo Revitalizante",
        instruction: "Aplicar sobre el Shampoo utilizando la cantidad de producto equivalente al tamaño de una moneda. Emulsionar, masajear el cuero cabelludo y enjuagar."
      },
      {
        step: 2,
        name: "Loción para Moldear Revitalizante",
        instruction: "Aplicar una cantidad considerable de la crema para peinar con el cuero cabelludo húmedo, moldear y dejar secar. No requiere enjuague."
      }
    ]
  },

  // ============================================
  // LÍNEA INSTITUCIONAL
  // ============================================
  {
    slug: "limpia-vidrios-acero-institucional",
    name: "Limpia Vidrios y Limpieza de Acero",
    tagline: "Limpieza profesional para vidrios y metales",
    category: "institucional",
    description: "Producto de última poder: limpia vidrios, cristales, acero inoxidable, metales en general y acrílicos. Equipado superficialmente y protege las micro fisuras de las superficies. No contiene amoniaco, con agentes limpiadores que le dan brillo y protegen toda clase de muebles y superficies. Sus tensoactivos biodegradables desengrapan la superficie en la suciedad y con protección UV.",
    benefits: [
      "Multi-superficie profesional",
      "Sin amoniaco",
      "Protección UV",
      "Biodegradable",
      "No raya superficies"
    ],
    image: "/images/productos/institucional-vidrios.png",
    specs: [
      { label: "pH", value: "7.0 - 7.5 Neutro" },
      { label: "Densidad", value: "1.01 g/ml" },
      { label: "Biodegradabilidad", value: "> 90%" },
      { label: "Aspecto", value: "Líquido transparente azul" }
    ],
    presentations: [
      { size: "500 ml" },
      { size: "1 Litro" },
      { size: "4 Litros" },
      { size: "20 Litros" }
    ]
  },
  {
    slug: "limpia-superficies-pantallas-institucional",
    name: "Limpia Superficies y Pantallas",
    tagline: "Protección antiestática para equipos",
    category: "institucional",
    description: "Contiene en su formulación silicona antiestática, que junto con agentes limpiadores y elementos fortalecedores dan brillo y protegen toda clase de muebles y superficies. Sus tensoactivos y silicona lo catalizan en un acabado suave y lubricante. Es un producto ideal para limpieza de pantallas, monitores, televisores y equipos electrónicos.",
    benefits: [
      "Silicona antiestática",
      "Ideal para pantallas y monitores",
      "Protege equipos electrónicos",
      "No deja residuos",
      "Acabado suave"
    ],
    image: "/images/productos/institucional-superficies.png",
    specs: [
      { label: "pH", value: "6.5 - 7.5" },
      { label: "Densidad", value: "0.98 - 1.02 g/ml" },
      { label: "Biodegradabilidad", value: "> 90%" },
      { label: "Aspecto", value: "Líquido blanco lechoso" }
    ],
    presentations: [
      { size: "500 ml" },
      { size: "1 Litro" },
      { size: "4 Litros" },
      { size: "20 Litros" }
    ]
  },
  {
    slug: "limpia-pisos-institucional",
    name: "Limpia Pisos Superficies Delicadas",
    tagline: "Limpieza profesional para pisos delicados",
    category: "institucional",
    description: "Es un líquido viscoso completamente soluble en agua. Formulado para limpiar y proteger todo tipo de pisos como mármol, porcelanato, piso cerámico y otros pisos delicados. Formulado para limpiar y proteger todo tipo de pisos y superficies. Este producto no agrede los paramentos ni el medio ambiente. Su biodegradabilidad es rápida, no tóxico y no irrita.",
    benefits: [
      "Para pisos delicados",
      "Ideal para mármol y porcelanato",
      "No agrede el medio ambiente",
      "Biodegradable",
      "No tóxico"
    ],
    image: "/images/productos/institucional-pisos.png",
    specs: [
      { label: "pH", value: "6.5 - 7.5 Neutro" },
      { label: "Densidad", value: "1.01 - 1.03 g/ml" },
      { label: "Biodegradabilidad", value: "> 90%" },
      { label: "Aspecto", value: "Líquido verde translúcido" }
    ],
    presentations: [
      { size: "1 Litro" },
      { size: "4 Litros" },
      { size: "20 Litros" }
    ]
  },
  {
    slug: "detergente-lavavajillas-institucional",
    name: "Detergente para Máquina Lavavajillas",
    tagline: "Limpieza profesional para lavavajillas",
    category: "institucional",
    description: "Es un detergente sintético altamente concentrado. Se presenta en forma de líquido de alta viscosidad. Desarrollado para limpiar eficientemente todo tipo de superficies como: ollas, platos, vasos, utensilios de cocina, superficies plásticas, de vidrio y similares. Este producto no agrede las personas ni al medio ambiente.",
    benefits: [
      "Altamente concentrado",
      "Para todo tipo de vajilla",
      "No agrede la piel",
      "Biodegradable",
      "Apto para máquinas industriales"
    ],
    image: "/images/productos/institucional-lavavajillas.png",
    specs: [
      { label: "pH", value: "6.5 - 7.5" },
      { label: "Densidad", value: "1.02 - 1.05 g/ml" },
      { label: "Biodegradabilidad", value: "> 90%" },
      { label: "Aspecto", value: "Líquido rosa viscoso" }
    ],
    presentations: [
      { size: "1 Litro" },
      { size: "4 Litros" },
      { size: "20 Litros" }
    ]
  },
  {
    slug: "desengrasante-institucional",
    name: "Desengrasante Multiusos Institucional",
    tagline: "Poder desengrasante industrial",
    category: "institucional",
    description: "Posee una alta concentración de agentes tensoactivos, desengrasantes, humectantes y suavizantes. Tiene un gran poder para eliminar todo tipo de grasas y tener propiedades también como lavaloza, limpiador y desinfectante. Aplicable para uso en cocina, paredes, techos y superficies con grasas adheridas. Es biodegradable, no tóxico, no cáustico, no inflamable.",
    benefits: [
      "Alta concentración",
      "Elimina todo tipo de grasas",
      "Multi-uso: cocina, paredes, techos",
      "No tóxico ni cáustico",
      "Biodegradable"
    ],
    image: "/images/productos/institucional-desengrasante.png",
    specs: [
      { label: "pH", value: "7.0 - 8.0" },
      { label: "Densidad", value: "1.01 - 1.03 g/ml" },
      { label: "Biodegradabilidad", value: "> 90%" },
      { label: "Aspecto", value: "Líquido amarillo" }
    ],
    presentations: [
      { size: "1 Litro" },
      { size: "4 Litros" },
      { size: "20 Litros" }
    ]
  }
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): ProductData | undefined {
  return productsData.find(p => p.slug === slug);
}

// Helper function to get products by category
export function getProductsByCategory(category: ProductCategory): ProductData[] {
  return productsData.filter(p => p.category === category);
}

// Helper function to get all products
export function getAllProducts(): ProductData[] {
  return productsData;
}

// Category display names
export const categoryNames: Record<ProductCategory, string> = {
  hogar: "Línea Hogar",
  capilar: "Línea Capilar",
  institucional: "Línea Institucional"
};

// Category descriptions
export const categoryDescriptions: Record<ProductCategory, string> = {
  hogar: "Productos de limpieza ecológicos para tu hogar",
  capilar: "Tratamientos capilares naturales",
  institucional: "Soluciones de limpieza profesional"
};
