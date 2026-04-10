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
  price?: number;
}

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  description: string;
  benefits: string[];
  image: string;
  images?: string[];
  usageImage?: string;
  badge?: string;
  uses?: string[];
  dilutionTable?: DilutionRow[];
  steps?: ProductStep[];
  specs?: ProductSpec[];
  presentations?: ProductPresentation[];
  youtubeVideo?: string;
  usageTips?: string[];
  parentTreatmentSlug?: string;
  size?: string;
  bundlePrice?: number; // Price for treatment bundles (con IVA)
}

export const productsData: ProductData[] = [
  // ============================================
  // LÍNEA HOGAR
  // ============================================
  {
    slug: "desengrasante-bioptimo-500ml",
    name: "Desengrasante Multiusos Listo Para Usar 500 ml",
    tagline: "Aroma cítrico. Reemplaza 8 productos convencionales - Quita manchas de tela, óxido, sarro, olores",
    category: "hogar",
    description: "El Desengrasante Multiusos Bioptimo, único en su categoría con dos funciones: desengrasante y removedor de manchas en tela, pisos y metales. Efectivo sobre todas las superficies que admitan agua. Elimina grasas y olores indeseados en el área de la cocina y similares, limpia juntas. Ideal para lavado de baños, duchas, quita hongo y sarro. Funciona como prelavado de ropa cuidando las telas. Apto también para cocinas de acero inoxidable, sin dañar sus superficies.",
    benefits: [
      "Listo para usar — no requiere dilución",
      "Limpia hornos, estufa y campanas extractoras",
      "Limpieza de baños, azulejos y puertas de ducha",
      "Limpia juntas y quita exceso de cera en pisos",
      "Quita sarro, óxido y hongos",
      "Prelavado de ropa y quita manchas",
      "Aroma cítrico",
      "No tóxico - No cáustico - No inflamable",
      "No requiere guantes ni tapabocas para su uso"
    ],
    image: "/images/productos/bioptimo-front.png",
    images: ["/images/productos/bioptimo-front.png", "/images/productos/bioptimo-back.png"],
    badge: "Nuevo",
    uses: [
      "Limpia hornos",
      "Limpieza de baños, azulejos, puertas de ducha y similares",
      "Limpia juntas",
      "Quita exceso de cera en pisos",
      "Limpieza de pisos de cerámica",
      "Quita sarro, óxido y hongos",
      "Prelavado de ropa y quita manchas",
      "Elimina olores"
    ]
  },
  {
    slug: "detergente-neutro",
    name: "Detergente Neutro Concentrado 250 ml",
    tagline: "Rinde para preparar 3 dosificadores de 500 ml. Con aceite de coco y lanolina",
    category: "hogar",
    description: "El Detergente Neutro Nouvie, es un detergente altamente concentrado. Sus componentes son una mezcla perfectamente balanceada y sinérgica de tensioactivos aniónicos, no iónicos y aditivos. Esto le confiere no solo un inigualable poder de limpieza, sino que además y gracias a su alto contenido de alquilolamida de coco, brinda protección y suavidad a la piel. Es hipoalergénico. Ideal para el lavado de prendas delicadas y de bebés, cuida y suaviza las fibras. Gracias a su fórmula 4 veces más tensoactiva, este producto está diseñado para un lavado impecable tanto a mano como en lavavajillas. Separa la grasa sin esfuerzo, evitando que la esponja la absorba.",
    benefits: [
      "Producto concentrado - rinde más",
      "pH neutro - cuida tus prendas",
      "Elaborado con tensoactivos naturales",
      "Ideal para ropa delicada y de bebé",
      "No tóxico y biodegradable"
    ],
    image: "/images/productos/detergente-neutro.png",
    usageImage: "/images/productos/resena-neutro.png",
    badge: "Producto concentrado",
    uses: [
      "Lavaplatos",
      "Lava vajilla a máquina (aplica producto diluido en la caja más pequeña)",
      "Detergente para ropa fina y de bebé (una tapa en la lavadora o para lavado a mano)",
      "Suavizante de ropa fina y de bebé",
      "Lavar manos (guante protector)",
      "Lavar frutas y verduras"
    ],
    dilutionTable: [
      { uso: "Lavado de frutas y verduras", cantidad: "3 puff del producto preparado", agua: "En un bowl con agua" },
      { uso: "Máquina lavavajillas", cantidad: "Producto preparado", agua: "En la caja dispensadora de jabón" },
      { uso: "Lavado de ropa delicada", cantidad: "1 tapa del concentrado", agua: "En un recipiente de agua, restregar suavemente y escurrir. No necesita enjuague" },
      { uso: "Lavado de ollas y platos grasosos", cantidad: "Producto preparado directo", agua: "Dejar actuar y enjuagar. Luego restregar con esponja" }
    ],
    usageTips: [
      "Ideal para todo tipo de telas delicadas",
      "Perfecto para ropa de bebé",
      "Funciona en agua fría o caliente"
    ]
  },
  {
    slug: "limpia-pisos-concentrado",
    name: "Limpia Pisos Concentrado de 250 ml",
    tagline: "Rinde para 50 trapeadas. Contiene cera carnauba. Limpia y brilla toda clase de pisos",
    category: "hogar",
    description: "El Limpia Pisos y Superficies Delicadas Nouvie es un limpiador líquido concentrado formulado para limpiar y abrillantar en una sola aplicación todo tipo de pisos y superficies delicadas, contiene agentes emulsionantes, estabilizantes, cera de carnauba y cera polietilénica. Resalta y mantiene el brillo natural. Especial para lavado y encerado de automóviles. Perfecto para aplicar en espejos y vidrios del baño como desempañante.",
    benefits: [
      "Producto altamente concentrado",
      "Antideslizante",
      "Perfecto para lavado de automóviles",
      "No deja manchas ni residuos",
      "Pisos de madera, laminado, mármol, cerámica, tableta gres"
    ],
    image: "/images/productos/limpia-pisos.png",
    usageImage: "/images/productos/resena-pisos.png",
    badge: "Producto concentrado",
    uses: [
      "Lavado y encerado de autos",
      "Protector y humectante de madera en exteriores (muebles, puertas)",
      "Antiempañante de vidrios y espejos"
    ],
    dilutionTable: [
      { uso: "Trapear pisos", cantidad: "1 tapa (5ml)", agua: "Un balde con agua" },
      { uso: "Encerar pisos", cantidad: "Producto diluido en dosificador", agua: "Aplicar en mopa húmeda" },
      { uso: "Lavado de autos", cantidad: "1 tapa (5ml)", agua: "Un balde con agua" },
      { uso: "Antiempañante de vidrios", cantidad: "Producto concentrado con yema del dedo", agua: "Aplicar en espejo o vidrio, esparcir con trapo seco" }
    ],
    usageTips: [
      "No requiere enjuague"
    ]
  },
  {
    slug: "desengrasante-multiusos-concentrado",
    name: "Desengrasante Multiusos Concentrado de 250 ml",
    tagline: "Rinde para preparar 6 dosificadores de 500 ml. Quita grasa, hongos, sarro y manchas",
    category: "hogar",
    description: "Desengrasante Multiusos, cuatro (4) veces más tensoactivo que los productos de su categoría, separa y disuelve fácilmente la grasa de hornos y campanas extractoras. Posee una alta concentración de agentes limpiadores, tensioactivos, humectantes y surfactantes. Tiene dos funciones: desengrasante y removedor de manchas en tela, pisos y metales. Elimina olores indeseados en el área de la cocina y similares, limpia juntas. Ideal para lavado de baños, duchas, quita hongo y sarro. Es uno de los desengrasantes más potentes de nuestra línea. Ideal para levantar ceras, acero inoxidable, sin dañar sus superficies. Funciona como prelavado de ropa cuidando las telas, elimina manchas como sangre, maquillaje, vino entre otros. Dada su versatilidad, elimina el inconveniente de tener una gran variedad de limpiadores.",
    benefits: [
      "Doble función: desengrasante y removedor de manchas",
      "Efectivo en todas las superficies",
      "Elimina grasa y olores",
      "No requiere para su uso guantes ni tapabocas",
      "No maltrata las fibras de las telas al desmanchar",
      "No corrosivo - No cáustico - No tóxico"
    ],
    image: "/images/productos/desengrasante.png",
    usageImage: "/images/productos/resena-desengrasante.png",
    badge: "Producto concentrado",
    uses: [
      "Limpia hornos, estufas y campanas extractoras",
      "Limpieza de baños, azulejos, puertas de ducha y similares",
      "Limpia juntas",
      "Quita exceso de cera en pisos",
      "Limpieza de pisos de cerámica (1 tapa en un balde con 2 lt de agua)",
      "Quita sarro y óxido",
      "Prelavado de ropa",
      "Elimina olores"
    ],
    usageTips: [
      "Para grasa pesada diluir una tapa del producto en 5 tapas de agua caliente"
    ]
  },
  {
    slug: "lustra-muebles-concentrado",
    name: "Lustra Muebles Concentrado de 250 ml",
    tagline: "Rinde para preparar 3 dosificadores de 500 ml. No grasoso - Repele el polvo, hidrata y da brillo",
    category: "hogar",
    description: "El Lustra Muebles Nouvie contiene en su formulación siliconas emulsionadas, que junto con agentes limpiadores y elementos lustradores dan brillo y protegen todo tipo de muebles y superficies, tales como madera, muebles de cocina, fórmica, cuero, cuerina, superficies de cocina y electrodomésticos, formando una película que atrae menos la suciedad y que se caracteriza por dar una acabado suave y brillante. Funciona como una capa protectora para los mesones de la cocina y electrodomésticos, evitando que se adhiera la grasa.",
    benefits: [
      "Antiestático y antihuellas",
      "Ideal para limpiar todo tipo pantallas (TV, laptop y celulares)",
      "Lustra e hidrata muebles de madera, cuero, cuerina y fórmica",
      "Limpia y lustra cueros, cuerinas y similares",
      "Antiadherente y antiestático",
      "Consola de los autos"
    ],
    image: "/images/productos/lustra-muebles.png",
    usageImage: "/images/productos/resena-lustra.png",
    badge: "Producto concentrado",
    uses: [
      "Lustra muebles para madera, fórmica, cuero y cuerina",
      "Abrillantador en superficies de cocina, electrodomésticos",
      "Mantiene el brillo y protege de la humedad los artículos de plata, bronce y cobre, evitando que se oxiden",
      "Limpia sin engrasar la consola en automóviles",
      "Antihuellas y antiestático para vidrios y superficies metálicas",
      "Evita que se adhiera el polvo en vidrios exteriores, aplicándolo con un trapo después del limpia vidrios",
      "Ideal para limpiar todo tipo pantallas (TV, laptop y celulares)"
    ],
    usageTips: [
      "Aplicar con paño suave y seco, nunca directamente en el objeto",
      "NO poner en el piso",
      "Perfecto para carteras y bolsos de cuero"
    ]
  },
  {
    slug: "limpia-vidrios-concentrado",
    name: "Limpia Vidrios Concentrado de 250 ml",
    tagline: "Rinde para preparar 100 dosificadores de 500 ml. Secado rápido - Abrillanta sin dejar trazos del trapo",
    category: "hogar",
    description: "El Limpia Vidrios y cuidado de tela concentrado, es un producto de altísimo poder de limpieza, formulado especialmente para limpieza de alfombras, tapizados, panas, gamuzas, etc. Limpia vidrios, cristales, acero inoxidable, metales en general, sin dejar marcas, dando un acabado brillante. Sirve para lavado de tapicería de los carros, muebles en tela y ropa. Reaviva los colores y protege las fibras de las telas.",
    benefits: [
      "Rinde para preparar 100 dosificadores de 500 ml",
      "Limpia y abrillanta vidrios y espejos",
      "Abrillanta superficies metálicas de acero y aluminio",
      "Protege las fibras de las telas y reaviva los colores"
    ],
    image: "/images/productos/limpia-vidrios.png",
    usageImage: "/images/productos/resena-vidrios.png",
    badge: "Producto concentrado",
    uses: [
      "Limpia y abrillanta vidrios y espejos sin dejar marcas",
      "Brilla superficies metálicas de acero y aluminio",
      "Pre planchado de ropa",
      "Sirve para lavado de tapicería de los carros, muebles en tela y ropa. Reaviva los colores"
    ],
    dilutionTable: [
      { uso: "Limpia vidrios", cantidad: "Media tapa del producto (2.5 ml)", agua: "Botella de agua de 500 ml" },
      { uso: "Lavado tapicería en seco", cantidad: "1 tapa de producto en recipiente con 20 tapas de agua", agua: "Hacer espuma a punto de nieve con esponja. Aplicar sobre tapicería, dejar actuar, retirar espuma con toalla. Nota: en caso de manchas, remover primero con el desengrasante multiusos" },
      { uso: "Preplanchado de ropa", cantidad: "Misma preparación del limpia vidrios", agua: "Aplicar a la ropa" },
      { uso: "Lavado de ropa en máquina lavadora", cantidad: "3 tapas a una carga completa", agua: "Nota: si requiere suavizante, aplicar una tapa del detergente neutro" }
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
    tagline: "Botella de 375 ml reciclable. Todas las medidas dosificadoras",
    category: "hogar",
    description: "Botella Atomizadora de alta calidad, reutilizada. Contiene las medidas para preparar todos los productos concentrados de la Línea Hogar Nouvie. ¡Puedes obtenerlo GRATIS! Por cada 10 botellas que nos envíes para reciclar.",
    benefits: [
      "Alta calidad y durabilidad",
      "Spray fino y uniforme",
      "Todas las medidas dosificadoras",
      "Fácil de usar",
      "¡GRATIS al reciclar 10 botellas!"
    ],
    image: "/images/productos/atomizador.png",
    usageTips: [
      "Úsalo con cualquier producto de la Línea Hogar",
      "Recicla 10 botellas y obtén uno gratis"
    ]
  },

  // ============================================
  // LÍNEA CAPILAR - TRATAMIENTOS
  // ============================================
  {
    slug: "tratamiento-suave-y-liso",
    name: "Kit Completo Tratamiento Suave y Liso",
    tagline: "Bio Keratina para cabello liso y luminoso",
    category: "capilar",
    description: "Nutre y protege tu cabello con la fórmula del tratamiento NOUVIE que contiene 8 aceites esenciales más bio Keratina. La bio Keratina contiene aminoácidos que son compatibles con las proteínas presentes en el folículo piloso y la fibra capilar. Aminoácidos presentes en la bio Keratina: arginina, elimina (estimula el colágeno para reparar el cabello dañado), metionina (antioxidante que protege los folículos pilosos del estrés oxidativo).",
    benefits: [
      "Bio Keratina natural",
      "Cabello liso y luminoso",
      "Reduce frizz y encrespado",
      "Mantiene el color natural",
      "Aceites esenciales nutritivos"
    ],
    image: "/images/productos/kiwi-acai.png",
    usageImage: "/images/productos/resena-kiwi-acai.png",
    bundlePrice: 158000, // Kit de 3 productos con IVA
    steps: [
      {
        step: 1,
        name: "Shampoo Suave y Liso",
        instruction: "Aplicar una cantidad generosa sobre el cabello húmedo, masajear suavemente desde la raíz hasta las puntas. Enjuagar con abundante agua."
      },
      {
        step: 2,
        name: "Mascarilla Suave y Liso",
        instruction: "Después del shampoo, aplicar la mascarilla de medios a puntas. Dejar actuar de 3 a 5 minutos y enjuagar."
      },
      {
        step: 3,
        name: "Loción Suave y Liso",
        instruction: "Aplicar una cantidad considerable de la loción para moldear con el cabello húmedo o seco, peinar y dejar secar."
      }
    ]
  },
  {
    slug: "tratamiento-reparacion-intensa",
    name: "Kit Completo Reparación Intensa",
    tagline: "Manteca de Karité para reparación profunda",
    category: "capilar",
    description: "Nutre y protege tu cabello con la fórmula del tratamiento NOUVIE que contiene 8 aceites esenciales más manteca de Karité. La manteca de Karité contiene sustancias nutritivas que restauran y devuelven la fuerza y brillo a tu cabello. Da protección natural para cabellos dañados. Nutre y humecta cabellos resecos y quebradizos. Protege contra el calor, los rayos UV. La manteca de Karité es un excelente humectante para el cabello.",
    benefits: [
      "Manteca de Karité nutritiva",
      "Reparación intensa",
      "Restaura fuerza y brillo",
      "Hidratación profunda",
      "Ideal para cabello dañado"
    ],
    image: "/images/productos/honey-melon.png",
    usageImage: "/images/productos/resena-honey-melon.png",
    bundlePrice: 158000, // Kit de 3 productos con IVA
    steps: [
      {
        step: 1,
        name: "Shampoo Reparación Intensa",
        instruction: "Aplicar el Shampoo utilizando la cantidad de producto equivalente al tamaño de una moneda, emulsionar y enjuagar. Repetir si es necesario."
      },
      {
        step: 2,
        name: "Mascarilla Reparación Intensa",
        instruction: "Aplicar la mascarilla de medios a puntas, dejar actuar de 3 a 5 minutos para obtener mejores resultados. Enjuagar."
      },
      {
        step: 3,
        name: "Loción Reparación Intensa",
        instruction: "Aplicar una cantidad considerable de la loción para moldear con el cabello húmedo o seco, peinar y dejar secar."
      }
    ]
  },
  {
    slug: "tratamiento-revitalizante",
    name: "Kit Completo Revitalizante",
    tagline: "Aceite de Argán, yogurt, prebióticos y Keratina hidrolizada. Ideal para frenar la caída del cabello",
    category: "capilar",
    description: "Nutre y protege tu cabello con la fórmula del tratamiento NOUVIE que contiene aceites, yogurt, prebióticos y la Keratina hidrolizada ayudando todos estos ingredientes a recuperar el brillo natural del cabello. Fortalece y protege tu cabello rejuveneciendo la fibra capilar. Con 8 aceites siendo protagonista el aceite de argán, yogurt, prebióticos y Keratina hidrolizada que reestructura el cabello actuando en la fibra capilar. Ideal para frenar la caída del cabello.",
    benefits: [
      "Aceite de Argán natural",
      "Yogurt y Prebióticos",
      "Fortalece fibra capilar",
      "Línea masculina especializada",
      "Rejuvenece el cabello"
    ],
    image: "/images/productos/revitalizante.png",
    usageImage: "/images/productos/resena-revitalizante.png",
    bundlePrice: 96000, // Kit de 2 productos con IVA
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
  // LÍNEA CAPILAR - PRODUCTOS INDIVIDUALES
  // ============================================

  // --- Línea Suave y Liso (Kiwi & Acaí) ---
  {
    slug: "shampoo-suave-y-liso",
    name: "Shampoo Suave y Liso",
    tagline: "Limpieza sin sulfatos ni parabenos. Bio Keratina que da brillo",
    category: "capilar",
    size: "237 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "Agregar una porción en el centro de su mano, frotarlas y aplicarlo en la raíz del cabello ya húmedo, frotarlo para que los ingredientes naturales activos actúen. Normalmente en la primera aplicación no hace espuma ya que no contiene sulfatos nocivos para la salud. Si desea puede hacer una segunda lavada.",
    benefits: [
      "Limpieza sin sulfatos ni parabenos",
      "Bio Keratina que da brillo",
      "Reduce el frizz y encrespado",
      "Prepara el cabello para el tratamiento",
      "Apto para uso diario"
    ],
    image: "/images/productos/shampoo-suave-liso.png",
    badge: "237 ml"
  },
  {
    slug: "mascarilla-suave-y-liso",
    name: "Mascarilla Suave y Liso",
    tagline: "Sella la cutícula. Nutrición intensiva con Bio Keratina",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "La Mascarilla Suave y Liso es un tratamiento de nutrición profunda que sella la cutícula y aporta un brillo espectacular. Su concentración de Bio Keratina penetra en la fibra capilar, reparando el daño interno y dejando el cabello increíblemente suave al tacto. Elimina el efecto flyaway y controla el volumen no deseado.",
    benefits: [
      "Nutrición profunda de medios a puntas",
      "Sella la cutícula",
      "Control del volumen y frizz",
      "Suavidad inmediata al tacto",
      "Reparación de daño acumulado"
    ],
    image: "/images/productos/mascarilla-suave-liso.png",
    badge: "177 ml"
  },
  {
    slug: "locion-suave-y-liso",
    name: "Loción Suave y Liso",
    tagline: "El paso final perfecto para un cabello brillante y manejable. Desenreda y facilita el peinado",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "La Loción para Moldear Suave y Liso es el paso final perfecto para un cabello brillante y manejable. Desenreda y facilita el peinado. Tiene nutrientes especializados que enriquecen el cabello dando un acabado final con brillo, es termo protector y anti frizz. Después de lavar el cabello con el shampoo y usar la mascarilla NOUVIE, retirar el exceso de agua y aplicar una porción del tamaño de una almendra en su mano, frotarlas y aplicar de medios a puntas finalizando con la parte superior de la cabeza. Este producto es ideal para proteger el cabello de los rayos ultra violetas, el cloro de las piscinas y el agua de mar.",
    benefits: [
      "Control del frizz todo el día",
      "Protección térmica natural",
      "Desenreda y facilita el peinado",
      "Acabado brillante sin residuos",
      "Ideal para uso con secador o plancha"
    ],
    image: "/images/productos/locion-suave-liso.png",
    badge: "177 ml"
  },

  // --- Línea Reparación Intensa (Honey & Melon) ---
  {
    slug: "shampoo-reparacion-intensa",
    name: "Shampoo Reparación Intensa",
    tagline: "Tratamiento para sellar y reparar el cabello",
    category: "capilar",
    size: "237 ml",
    parentTreatmentSlug: "tratamiento-reparacion-intensa",
    description:
      "Agregar una porción en el centro de su mano, frotarlas y aplicarlo en la raíz del cabello ya húmedo, frotarlo para que los ingredientes naturales actúen. Normalmente en la primera aplicación no hace espuma ya que no contiene sulfatos nocivos para la salud. Si desea puede hacer una segunda aplicación. Enriquecido con manteca de Karité, limpia suavemente.",
    benefits: [
      "Inicia la reparación desde el lavado",
      "Manteca de Karité nutritiva",
      "Ideal para cabello dañado o teñido",
      "Devuelve suavidad al cabello quebradizo",
      "Limpieza profunda sin agredir"
    ],
    image: "/images/productos/shampoo-reparacion-intensa.png",
    badge: "237 ml"
  },
  {
    slug: "mascarilla-reparacion-intensa",
    name: "Mascarilla Reparación Intensa",
    tagline: "Tratamiento para sellar y reparar el cabello",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-reparacion-intensa",
    description:
      "Después de lavar el cabello con el shampoo, aplicar una porción del tamaño de una almendra en su mano, frotarlas y aplicar de medios a puntas. Dejar actuar por cinco minutos, desenredar el cabello con los dedos, ahí notarás la suavidad que deja la mascarilla en tu cabello y como lo desenreda sin romperlo. La manteca de Karité penetra profundamente reconstruyendo la estructura capilar desde adentro. Enjuagar con agua tibia o fría, nunca con agua caliente.",
    benefits: [
      "Reconstrucción profunda de la fibra",
      "Restaura fuerza y elasticidad",
      "Brillo intenso y duradero",
      "Transforma cabello quebradizo",
      "Resultados visibles desde la primera aplicación"
    ],
    image: "/images/productos/mascarilla-reparacion-intensa.png",
    badge: "177 ml"
  },
  {
    slug: "locion-reparacion-intensa",
    name: "Loción Reparación Intensa",
    tagline: "Tratamiento para sellar y reparar el cabello",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-reparacion-intensa",
    description:
      "Su fórmula con manteca de Karité crea una barrera protectora, mantiene la hidratación. Después de lavar el cabello con el shampoo y usar la mascarilla NOUVIE, retirar el exceso de agua y aplicar una porción del tamaño de una almendra en sus manos, frotarlas y aplicar de medios a puntas finalizando con la parte superior de la cabeza. Este producto sirve para moldear el cabello y dar un acabado saludable.",
    benefits: [
      "Sella la reparación del tratamiento",
      "Protección contra daño ambiental",
      "Hidratación prolongada",
      "Moldea sin apelmazar",
      "Acabado saludable y natural"
    ],
    image: "/images/productos/locion-reparacion-intensa.png",
    badge: "177 ml"
  },

  // --- Línea Revitalizante (Aceite de Argán) ---
  {
    slug: "shampoo-revitalizante",
    name: "Shampoo Revitalizante",
    tagline: "Fortalecimiento con Aceite de Argán",
    category: "capilar",
    size: "237 ml",
    parentTreatmentSlug: "tratamiento-revitalizante",
    description:
      "El Shampoo Revitalizante está diseñado especialmente para las necesidades del cabello masculino. Su fórmula con Aceite de Argán, Yogurt y Prebióticos fortalece desde la raíz, estimula el cuero cabelludo y previene la caída. Limpia profundamente eliminando el exceso de grasa mientras nutre cada hebra.",
    benefits: [
      "Diseñado para cabello masculino",
      "Fortalece desde la raíz",
      "Aceite de Argán revitalizante",
      "Estimula el cuero cabelludo",
      "Previene debilitamiento y caída"
    ],
    image: "/images/productos/shampoo-revitalizante.png",
    badge: "237 ml"
  },
  {
    slug: "locion-revitalizante",
    name: "Loción Revitalizante",
    tagline: "Moldeo y fortalecimiento. Estimula el crecimiento del cabello",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-revitalizante",
    description:
      "La Loción Revitalizante es el complemento perfecto para el cuidado capilar masculino. Combina aceite de argán con agentes fortalecedores que rejuvenecen la fibra capilar mientras permiten moldear el peinado deseado. No deja residuos y da un acabado natural.",
    benefits: [
      "Moldeo flexible y natural",
      "Fortalece la fibra capilar",
      "Estimula el crecimiento del cabello",
      "Sin residuos ni efecto graso",
      "Volumen controlado todo el día"
    ],
    image: "/images/productos/locion-revitalizante.png",
    badge: "177 ml"
  },

  // ============================================
  // LÍNEA INSTITUCIONAL
  // ============================================
  {
    slug: "limpia-vidrios-institucional-concentrado",
    name: "Limpia Vidrios y Limpieza de Acero",
    tagline: "Altísimo poder para vidrios, cristales, acero inoxidable y metales",
    category: "institucional",
    description: "Producto de altísimo poder, limpia vidrios, cristales, acero inoxidable, metales en general y azulejos. Deja las superficies brillantes y las protege de las marcas de los dedos. Elimina la electricidad estática, por lo tanto, no atrae las partículas de polvo. Este producto no agrede las personas ni al medio ambiente. Es biodegradable, no tóxico, no cáustico, no abrasivo, no inflamable.",
    benefits: [
      "Elimina la electricidad estática",
      "Secado rápido, sin dejar aureolas",
      "Actúa en aguas blandas, duras y saladas",
      "Fácil enjuague, acabado brillante",
      "Desodorizante"
    ],
    image: "/images/productos/institucional-vidrios.png",
    specs: [
      { label: "Denominación", value: "Limpia vidrios y alfombras" },
      { label: "Descripción", value: "Tensioactivo neutro para limpieza convencional o por espuma" },
      { label: "Color", value: "Azul" },
      { label: "Aroma", value: "Frutal" },
      { label: "Características", value: "Limpiador de alfombras, vidrios, cerámicas, fórmicas y metales" },
      { label: "pH (puro)", value: "7" },
      { label: "pH (sol 1%)", value: "7" },
      { label: "Densidad", value: "1.025" },
      { label: "Poder espumígeno", value: "7" },
      { label: "Solubilidad", value: "Total en agua" },
      { label: "Biodegradable", value: "Sí (método IRAM N°25610)" },
      { label: "Inflamabilidad", value: "Incombustible (Ley 19.587 Dto.351)" },
      { label: "Diluyente recomendado", value: "Agua (blanda, dura o salada)" },
      { label: "Facilidad de enjuague", value: "Excelente" },
      { label: "Punto de ebullición", value: "Ninguno por debajo de los 90°" },
      { label: "Toxicidad", value: "No representa riesgo (LD50>3000mg/kg)" }
    ],
    presentations: [
      { size: "1 LT — Rinde: 4 Galones" },
      { size: "250 ML — Rinde: 1 Galón" }
    ],
    usageTips: [
      "Siempre preparar agregando primero el agua y luego el producto",
      "No mezclar con productos diferentes a Nouvie para mejores resultados",
      "Se recomienda utilizar utensilios de aseo nuevos, sin residuos de otro tipo de productos"
    ]
  },
  {
    slug: "limpiador-superficies-institucional",
    name: "Limpia Superficies y Pantallas",
    tagline: "Brillo y protección para muebles, pantallas y equipos electrónicos",
    category: "institucional",
    description: "Contiene en su formulación siliconas emulsionadas, que junto con agentes limpiadores y elementos lustradores dan brillo y protegen todo tipo de muebles y superficies, tales como madera, plástico, fórmicas, cuero, cuerinas, acero, vidrio, pantallas de equipos electrónicos. Forma una película que atrae menos la suciedad y logrando un acabado suave y reluciente. Es un producto formulado a base de diferentes aceites, cera carnauba y silicona. Debe ser aplicado sobre un trapo suave o de microfibra, al cabo de unos minutos se notará un excelente brillo y lustre sobre la superficie. Este producto no agrede las personas ni al medio ambiente. Es biodegradable, no tóxico, no abrasivo, no inflamable.",
    benefits: [
      "Lustrador de cualquier tipo de superficies plásticas, cueros y cuerinas, pantallas de TV o computadores",
      "No deja película grasosa donde se pega el polvo",
      "No se va con el agua",
      "Elimina la electricidad estática",
      "Elimina huellas en la superficie",
      "Agradable perfume a limón"
    ],
    image: "/images/productos/institucional-superficies.png",
    specs: [
      { label: "Denominación", value: "Lustra Muebles" },
      { label: "Descripción", value: "Lustrador de superficies" },
      { label: "Color", value: "Beige lechoso" },
      { label: "Características", value: "Deja las superficies limpias y libres de grasa" },
      { label: "pH (puro)", value: "6.5" },
      { label: "Densidad", value: "1.12 - 1.20" },
      { label: "Solubilidad", value: "Total en agua" },
      { label: "Inflamabilidad", value: "Incombustible (Ley 19.587 Dto.351)" },
      { label: "Punto de ebullición", value: "Ninguno por debajo de los 90°" },
      { label: "Toxicidad", value: "No representa riesgo (LD50>3000mg/kg)" }
    ],
    presentations: [
      { size: "3.785 LT (1 Galón) — Rinde: 3,785 LT" },
      { size: "500 ML — Rinde: 500 ML" }
    ],
    dilutionTable: [
      { uso: "Dilución manual", cantidad: "1 parte de producto", agua: "5 partes de agua" }
    ],
    usageTips: [
      "Siempre preparar agregando primero el agua y luego el producto",
      "No mezclar con productos diferentes a Nouvie para mejores resultados",
      "Se recomienda utilizar utensilios de aseo nuevos, sin residuos de otro tipo de productos",
      "Nunca aplicar en piso, porque puede quedar resbaloso",
      "No aplicar directamente sobre las superficies, sino en el trapo"
    ]
  },
  {
    slug: "limpia-pisos-institucional",
    name: "Limpia Pisos Superficies Delicadas",
    tagline: "Limpia, abrillanta y encera en una sola aplicación",
    category: "institucional",
    description: "Es un líquido viscoso, completamente soluble en agua, formulado para limpiar y abrillantar en una sola aplicación, contiene agentes emulsionantes, estabilizantes, cera de carnauba y cera polietilénica. Formulado para limpiar y encerar cualquier tipo de pisos, mármol, cerámica, baldosa, madera, laminado, e incluso automóviles. Contiene cualidades antiempañantes cuando se usa puro, ideal para vitrinas. Este producto no agrede las personas ni al medio ambiente. Es biodegradable, no tóxico, no corrosivo, no abrasivo, no inflamable.",
    benefits: [
      "Repele la suciedad, polvo, grasa",
      "Forma una micropelícula de cera",
      "Deja la superficie limpia, brillante y protegida",
      "Es antideslizante, evita pisadas",
      "Tiene autobrillo natural",
      "Puede lustrarse",
      "No deja olor, ni color",
      "Actúa en aguas blandas, duras y saladas",
      "Fácil enjuague, acabado brillante",
      "Desodorizante",
      "Limpia mejor sobre superficies lisas"
    ],
    image: "/images/productos/limpia-pisos-institucional.png",
    specs: [
      { label: "Denominación", value: "Limpia pisos y superficies delicadas" },
      { label: "Descripción", value: "Tensioactivo neutro protector y abrillantador de superficies" },
      { label: "Color", value: "Verde" },
      { label: "Aroma", value: "Inoloro" },
      { label: "Características", value: "Limpia y abrillanta a la vez" },
      { label: "pH (puro)", value: "7" },
      { label: "pH (sol 1%)", value: "7" },
      { label: "Densidad", value: "1.00" },
      { label: "Poder espumígeno", value: "8" },
      { label: "Solubilidad", value: "Total en agua" },
      { label: "Biodegradable", value: "Sí (método IRAM N°25610)" },
      { label: "Inflamabilidad", value: "Incombustible (Ley 19.587 Dto.351)" },
      { label: "Diluyente recomendado", value: "Agua (blanda, dura o salada)" },
      { label: "Facilidad de enjuague", value: "Excelente" },
      { label: "Punto de ebullición", value: "Ninguno por debajo de los 90°" },
      { label: "Toxicidad", value: "No representa riesgo (LD50>3000mg/kg)" }
    ],
    presentations: [
      { size: "3.785 LT (1 Galón) — Rinde: 302.8 LT" },
      { size: "2 LT — Rinde: 160 LT" },
      { size: "1 LT — Rinde: 80 LT" }
    ],
    usageTips: [
      "Siempre preparar agregando primero el agua y luego el producto",
      "No mezclar con productos diferentes a Nouvie para mejores resultados",
      "Se recomienda utilizar utensilios de aseo nuevos, sin residuos de otro tipo de productos"
    ]
  },
  {
    slug: "detergente-lavavajillas-institucional",
    name: "Detergente para Máquina Lavavajillas",
    tagline: "Detergente sintético altamente concentrado en forma de gel",
    category: "institucional",
    description: "Es un detergente sintético, altamente concentrado. Se presenta en forma de gel y tiene un agradable aroma herbal. Sus componentes son una mezcla perfectamente balanceada y sinérgica de tensioactivos aniónicos, no iónicos y aditivos. Esto le confiere no solo un inigualable poder de limpieza, sino que además y gracias a su alto contenido de alquilolamida de coco, brinda protección y suavidad a la piel. Este producto no agrede las personas ni al medio ambiente. Es biodegradable, no tóxico, no cáustico, no corrosivo, no abrasivo, no inflamable.",
    benefits: [
      "Actúa en aguas blandas, duras y saladas",
      "Mantiene la suciedad en suspensión",
      "Aplicable a tareas pesadas",
      "Fácil enjuague, acabado brillante y desodorizante",
      "Limpia superficies lisas o porosas"
    ],
    image: "/images/productos/detergente-institucional-lavavajillas.png",
    specs: [
      { label: "Denominación", value: "Detergente para vajilla" },
      { label: "Descripción", value: "Detergente desengrasante" },
      { label: "Color", value: "Rojo (rosado)" },
      { label: "Aroma", value: "Herbal" },
      { label: "Características", value: "Actúa sobre grasas animales y/o vegetales" },
      { label: "pH (puro)", value: "7" },
      { label: "pH (sol 1%)", value: "7" },
      { label: "Densidad", value: "1.075" },
      { label: "Poder espumígeno", value: "9" },
      { label: "Solubilidad", value: "Total en agua" },
      { label: "Biodegradable", value: "Sí (método IRAM N°25610)" },
      { label: "Inflamabilidad", value: "Incombustible (Ley 19.587 Dto.351)" },
      { label: "Diluyente recomendado", value: "Agua (blanda, dura o salada)" },
      { label: "Facilidad de enjuague", value: "Excelente" },
      { label: "Punto de ebullición", value: "Ninguno por debajo de los 90°" },
      { label: "Toxicidad", value: "No representa riesgo (LD50>3000mg/kg)" }
    ],
    presentations: [
      { size: "3.785 LT (1 Galón) — Rinde: 3,785 LT" },
      { size: "2 LT — Rinde: 2 LT" },
      { size: "1 LT — Rinde: 1 LT" }
    ],
    dilutionTable: [
      { uso: "Dilución manual", cantidad: "1 parte de producto", agua: "5 partes de agua" },
      { uso: "Máquina lavadora — Fuerte", cantidad: "1 parte de producto", agua: "100 partes de agua" },
      { uso: "Máquina lavadora — Normal", cantidad: "1 parte de producto", agua: "250 partes de agua" },
      { uso: "Máquina lavadora — Suave", cantidad: "1 parte de producto", agua: "500 partes de agua" }
    ],
    usageTips: [
      "A mayor tiempo de acción en suciedades rebeldes o de vieja data",
      "Temperaturas moderadamente altas (45°C) aumentan su efectividad",
      "El trabajo mecánico aumenta la rapidez de acción del producto",
      "Siempre preparar agregando primero el agua y luego el producto",
      "No mezclar con productos diferentes a Nouvie para mejores resultados",
      "Se recomienda utilizar utensilios de aseo nuevos, sin residuos de otro tipo de productos"
    ]
  },
  {
    slug: "desengrasante-institucional",
    name: "Desengrasante Multiusos",
    tagline: "Poder desengrasante de alta concentración para todo tipo de superficies",
    category: "institucional",
    description: "Posee una alta concentración de agentes limpiadores, tensioactivos, humectantes y surfactantes. Tiene un gran poder para disolver todo tipo de grasas y aceites. Ideal para limpieza de hornos, cocinas, campanas extractoras, limpieza de baños, levantar ceras de pisos, quitar manchas de óxido, limpiar pisos, etc. Este producto no agrede la salud de las personas ni al medio ambiente. Es biodegradable, no tóxico, no cáustico, no corrosivo, no abrasivo, no inflamable.",
    benefits: [
      "Actúa en aguas blandas, duras y saladas",
      "Mantiene la suciedad en suspensión",
      "Aplicable a tareas pesadas",
      "Fácil enjuague, acabado brillante",
      "Limpia sobre superficies lisas o porosas"
    ],
    image: "/images/productos/multiusos-institucional-desengrasante.png",
    specs: [
      { label: "Denominación", value: "Detergente Multiuso" },
      { label: "Color", value: "Amarillo" },
      { label: "Aroma", value: "Gricol" },
      { label: "pH (puro)", value: "7 a 9" },
      { label: "pH (sol 1%)", value: "7" },
      { label: "Densidad", value: "1.06" },
      { label: "Poder espumígeno", value: "10" },
      { label: "Solubilidad", value: "Total en agua" },
      { label: "Biodegradable", value: "Sí (método IRAM N°25610)" },
      { label: "Inflamabilidad", value: "Incombustible (Ley 19.587 Dto.351)" },
      { label: "Diluyente recomendado", value: "Agua (blanda, dura o salada)" },
      { label: "Facilidad de enjuague", value: "Excelente" },
      { label: "Punto de congelamiento", value: "-5°C" },
      { label: "Punto de ebullición", value: "Ninguno por debajo de los 90°" },
      { label: "Toxicidad", value: "No representa riesgo (LD50>3000mg/kg)" }
    ],
    presentations: [
      { size: "3.785 LT (1 Galón) — Rinde: 41.6 LT" },
      { size: "1 LT — Rinde: 11 LT" }
    ],
    dilutionTable: [
      { uso: "Dilución manual", cantidad: "1 parte de producto", agua: "5 partes de agua" },
      { uso: "Máquina lavadora — Fuerte", cantidad: "1 parte de producto", agua: "100 partes de agua" },
      { uso: "Máquina lavadora — Normal", cantidad: "1 parte de producto", agua: "250 partes de agua" },
      { uso: "Máquina lavadora — Suave", cantidad: "1 parte de producto", agua: "500 partes de agua" }
    ],
    usageTips: [
      "A mayor tiempo de acción en suciedades rebeldes o de vieja data",
      "Temperaturas moderadamente altas (45°C) aumentan su efectividad",
      "El trabajo mecánico aumenta la rapidez de acción del producto",
      "Siempre preparar agregando primero el agua y luego el producto",
      "No mezclar con productos diferentes a Nouvie para mejores resultados",
      "Se recomienda utilizar utensilios de aseo nuevos, sin residuos de otro tipo de productos",
      "Para personas de piel hipersensible o alérgica, se recomienda usar guantes"
    ]
  },

  // ============================================
  // LÍNEA HOGAR - KITS
  // ============================================
  {
    slug: "kit-lavavajilla",
    name: "Kit de Inicio Lavavajilla 50 ml",
    tagline: "Rinde para preparar 1 dosificador de 500 ml",
    category: "hogar",
    description: "Preparación: Este producto se vende con botella dosificadora. Agregar agua en la franja negra de medida 1.5. Luego en el espacio del recuadro transparente llenar con el producto, mezclar un poco y listo para usar. Una botella de 50 ml rinde para 1 dosificador de 500 ml.",
    benefits: [
      "Kit completo listo para usar",
      "Alto rendimiento",
      "Incluye dispensador",
      "Económico a largo plazo",
      "Biodegradable"
    ],
    image: "/images/productos/kit-desengrasante.png",
    badge: "Kit completo",
    bundlePrice: 17000,
    dilutionTable: [
      { uso: "Lavaplatos", cantidad: "", agua: "" },
      { uso: "Lava vajilla a máquina (aplica producto diluido en la caja más pequeña)", cantidad: "", agua: "" },
      { uso: "Lavar frutas y verduras", cantidad: "", agua: "" }
    ]
  },
  {
    slug: "kit-limpia-vidrios",
    name: "Kit de Inicio Limpia Vidrios 20 ml",
    tagline: "Rinde para preparar 8 dosificadores de 500 ml",
    category: "hogar",
    description: "Preparación: Este producto se vende con botella dosificadora. Llena con agua el dosificador y agregar una tapa del producto (2.5 ml), mezclar un poco y listo para usar. Una botella de 20 ml sirve para preparar 8 dosificadores de 500 ml.",
    benefits: [
      "Kit completo con atomizador",
      "Secado rápido sin manchas",
      "Alto rendimiento",
      "Fácil aplicación",
      "Biodegradable"
    ],
    image: "/images/productos/kit-limpia-vidrios.png",
    badge: "Kit completo",
    bundlePrice: 16000,
    dilutionTable: [
      { uso: "Limpia vidrios y espejos", cantidad: "", agua: "" },
      { uso: "Abrillanta superficies metálicas (acero, aluminio)", cantidad: "", agua: "" },
      { uso: "Pre planchado para ropa de todo tipo", cantidad: "", agua: "" }
    ]
  },
  {
    slug: "kit-desengrasante-multiusos",
    name: "Kit de Inicio Desengrasante 60 ml",
    tagline: "Rinde para preparar 2 dosificadores de 500 ml. Quita grasa, hongos, sarro y manchas",
    category: "hogar",
    description: "Preparación: Este producto se vende con botella dosificadora. Agregar agua en la franja negra de medida 1.10. Luego en el espacio del recuadro transparente llenar con la mitad del contenido del producto, mezclar un poco y listo para usar. Una botella de 60 ml sirve para preparar dos dosificadores de 500 ml. Reemplaza más de 8 productos convencionales.",
    benefits: [
      "Kit completo con atomizador",
      "Poder desengrasante industrial",
      "Alto rendimiento",
      "Para toda la cocina",
      "Biodegradable"
    ],
    image: "/images/productos/kit-lavavajilla.png",
    badge: "Kit completo",
    bundlePrice: 18500,
    dilutionTable: [
      { uso: "Limpia hornos, estufas y campanas extractoras", cantidad: "", agua: "" },
      { uso: "Limpieza de baños, azulejos, puertas de ducha y similares", cantidad: "", agua: "" },
      { uso: "Limpia juntas", cantidad: "", agua: "" },
      { uso: "Quita exceso de cera en pisos", cantidad: "", agua: "" },
      { uso: "Limpieza de pisos de cerámica (1 tapa en un balde con 2 lt de agua)", cantidad: "", agua: "" },
      { uso: "Quita sarro y óxido", cantidad: "", agua: "" },
      { uso: "Prelavado de ropa", cantidad: "", agua: "" },
      { uso: "Elimina olores", cantidad: "", agua: "" }
    ]
  },
  {
    slug: "kit-limpia-pisos",
    name: "Kit de Inicio Limpia Pisos 20 ml",
    tagline: "Para todo tipo de pisos. Rinde para preparar 8 dosificadores de 500 ml",
    category: "hogar",
    description: "Preparación: Este producto se vende con botella dosificadora. Llena con agua el dosificador y agregar una tapa del producto (2.5 ml), mezclar un poco y listo para usar con Mopa. Para preparar el producto en un balde, agregar 2 litros de agua y una tapa del producto. Una botella de 20 ml sirve para preparar 8 dosificadores de 500 ml.",
    benefits: [
      "Kit completo con dosificador",
      "Para todo tipo de pisos",
      "Limpia y brilla - Antideslizante",
      "Alto rendimiento",
      "Biodegradable"
    ],
    image: "/images/productos/kit-limpia-pisos.png",
    badge: "Kit completo",
    bundlePrice: 17000,
    dilutionTable: [
      { uso: "Lavado y encerado de autos", cantidad: "", agua: "" },
      { uso: "Protector y humectante de madera en exteriores (muebles, puertas)", cantidad: "", agua: "" },
      { uso: "Antiempañante de vidrios y espejos", cantidad: "", agua: "" }
    ]
  },
  {
    slug: "kit-lustra-muebles",
    name: "Kit de Inicio Lustra Muebles 60 ml",
    tagline: "Cuidado completo para tus muebles y objetos de madera, cuero, cuerina, fórmica",
    category: "hogar",
    description: "Preparación: Este producto se vende con botella dosificadora. Agregar agua en la franja negra de medida 1.5. Luego en el espacio del recuadro transparente llenar con el producto, mezclar un poco y listo para usar. Una botella de 50 ml rinde para 1 dosificador de 500 ml.",
    benefits: [
      "Antiestático y antihuellas",
      "No grasoso",
      "Protección duradera",
      "Para múltiples superficies",
      "Alto rendimiento"
    ],
    image: "/images/productos/kit-lustra-muebles.png",
    badge: "Kit completo",
    bundlePrice: 17200
  },

  // ============================================
  // LÍNEA HOGAR - REPUESTOS
  // TODO: Uncomment when images are available
  // ============================================
  /*
  {
    slug: "repuesto-lavavajilla",
    name: "Repuesto Lavavajilla",
    tagline: "Recarga tu kit y sigue ahorrando",
    category: "hogar",
    description: "Repuesto de Detergente Neutro concentrado para recargar tu Kit Lavavajilla. Mismo poder limpiador, máximo ahorro. Contribuye al medio ambiente reduciendo el uso de envases plásticos.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "Mismo poder limpiador",
      "Compatible con Kit Lavavajilla",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-lavavajilla.png",
    badge: "Repuesto"
  },
  {
    slug: "repuesto-limpia-vidrios",
    name: "Repuesto Limpia Vidrios",
    tagline: "Recarga y mantén tus vidrios brillantes",
    category: "hogar",
    description: "Repuesto de Limpia Vidrios concentrado para recargar tu kit. Vidrios impecables con máximo ahorro y mínimo impacto ambiental al reutilizar tu atomizador.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "Secado rápido",
      "Compatible con Kit Limpia Vidrios",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-limpia-vidrios.png",
    badge: "Repuesto"
  },
  {
    slug: "repuesto-desengrasante-multiusos",
    name: "Repuesto Desengrasante Multiusos",
    tagline: "Poder desengrasante recargable",
    category: "hogar",
    description: "Repuesto de Desengrasante Multiusos concentrado. Recarga tu kit y sigue eliminando la grasa más difícil mientras cuidas el planeta reduciendo residuos plásticos.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "Mismo poder desengrasante",
      "Compatible con Kit Desengrasante",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-desengrasante.png",
    badge: "Repuesto"
  },
  {
    slug: "repuesto-limpia-pisos",
    name: "Repuesto Limpia Pisos",
    tagline: "Recarga para pisos siempre brillantes",
    category: "hogar",
    description: "Repuesto de Limpia Pisos concentrado para recargar tu kit. Mantén tus pisos brillantes y protegidos con máximo ahorro y compromiso ambiental.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "Para pisos delicados",
      "Compatible con Kit Limpia Pisos",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-limpia-pisos.png",
    badge: "Repuesto"
  },
  {
    slug: "repuesto-lustra-muebles",
    name: "Repuesto Lustra Muebles",
    tagline: "Brillo continuo para tus muebles",
    category: "hogar",
    description: "Repuesto de Lustra Muebles con cera de Carnauba. Recarga tu kit y sigue protegiendo tus muebles con el mismo brillo y cuidado de siempre.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "Cera de Carnauba",
      "Compatible con Kit Lustra Muebles",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-lustra-muebles.png",
    badge: "Repuesto"
  },
  */

  // ============================================
  // LÍNEA INSTITUCIONAL - NUEVOS PRODUCTOS
  // TODO: Uncomment when images are available for each size
  // For now, the original 5 institucional products above have images
  // ============================================
  /*
  {
    slug: "limpia-vidrios-institucional-concentrado-1l",
    name: "Limpia Vidrios Institucional Concentrado",
    tagline: "Limpieza profesional de vidrios",
    category: "institucional",
    size: "1 Litro",
    description: "Limpia Vidrios Institucional de alta concentración para uso profesional. Ideal para edificios, oficinas, hoteles y espacios comerciales. Rinde hasta 20 veces su volumen al diluirse correctamente.",
    benefits: [
      "Alta concentración",
      "Rendimiento profesional",
      "Sin manchas ni residuos",
      "Secado rápido",
      "Biodegradable"
    ],
    image: "/images/productos/institucional-vidrios.png",
    specs: [
      { label: "pH", value: "7.0 - 7.5" },
      { label: "Densidad", value: "1.01 g/ml" },
      { label: "Biodegradabilidad", value: "> 90%" }
    ],
    badge: "1 Litro"
  },
  // ... more institucional products commented out
  */
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