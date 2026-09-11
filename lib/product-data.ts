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

export interface SeoContentSection {
  heading: string;
  body: string;
}

export interface SeoContentFaq {
  question: string;
  answer: string;
}

export interface SeoContent {
  intro?: string;
  sections?: SeoContentSection[];
  audienceBlocks?: SeoContentSection[];
  faqs?: SeoContentFaq[];
  h1Override?: string;
}

export interface ProductImage {
  src: string;
  caption?: string;
  fit?: "contain" | "cover";
  // Describes what the photo actually shows. Falls back to caption, then the
  // product name, so leaving it out never produces an empty alt.
  alt?: string;
}

export interface IngredientGroup {
  heading: string;
  body: string;
}

// Before/after for capilar treatments, in one of two shapes:
//   - `before` + `after`: two separate photos, shown side by side.
//   - `composite`: one image that already shows both halves with its own
//     labels (a split-face shot, for instance, which cannot be cut in two).
export interface BeforeAfter {
  before?: string;
  after?: string;
  composite?: string;
  beforeCaption?: string;
  afterCaption?: string;
  note?: string;
}

export interface ProductVideo {
  src: string;
  poster?: string;
  caption?: string;
  // ISO date the video was published. Required by the VideoObject schema.
  uploadDate?: string;
}

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  description: string;
  benefits: string[];
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  // Opaque fallback for social cards and structured data. Transparent PNGs get
  // composited onto black by WhatsApp/Facebook, so `image` (which may be a
  // cutout) is not safe to share directly. Defaults to `image` when unset.
  socialImage?: string;
  gallery?: ProductImage[];
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
  refillSlug?: string;
  bundlePrice?: number; // Price for treatment bundles (con IVA)
  seoContent?: SeoContent;
  // Long-form "Caracteristicas principales" bullets from the Mercado Libre
  // listings. `benefits` stays short for the numbered highlight strip.
  features?: string[];
  ingredientGroups?: IngredientGroup[];
  freeOfClaims?: string[];
  // "Que incluye tu compra" - one line per item in the box.
  includes?: string[];
  beforeAfter?: BeforeAfter;
  video?: ProductVideo;
  // Canonical Mercado Libre listing. Tracking params are stripped; the
  // seller_id filter is kept so buyers land on Nouvie's offer.
  mercadoLibreUrl?: string;
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
    image: "/images/productos/bioptimo-full-trans.webp",
    socialImage: "/images/productos/bioptimo-full.jpg",
    imageWidth: 960,
    imageHeight: 1200,
    gallery: [
      {
        src: "/images/productos/bioptimo-full-trans.webp",
        caption: "Desengrasante Multiusos 500 ml",
        fit: "contain",
        alt: "Botella atomizadora de desengrasante multiusos Bioptimo de 500 ml, lista para usar",
      },
      {
        src: "/images/productos/bioptimo-insite.jpg",
        caption: "Adiós a la grasa de cocina",
        fit: "cover",
        alt: "Desengrasante Bioptimo rociado sobre una estufa de vidrio con grasa quemada, junto a un paño de microfibra",
      },
      {
        src: "/images/productos/bioptimo-label.jpg",
        caption: "Quita sarro, óxido y hongos",
        fit: "cover",
        alt: "Etiqueta del Bioptimo 500 ml con sello biodegradable e iconos de grasa de cocina, hongos, baños y óxido",
      },
    ],
    badge: "Nuevo",
    specs: [
      { label: "Contenido", value: "500 ml" },
      { label: "Rendimiento", value: "Listo para usar" },
      { label: "Aroma", value: "Cítrico" }
    ],
    uses: [
      "Limpia hornos",
      "Limpieza de baños, azulejos, puertas de ducha y similares",
      "Limpia juntas",
      "Quita exceso de cera en pisos",
      "Limpieza de pisos de cerámica",
      "Quita sarro, óxido y hongos",
      "Prelavado de ropa y quita manchas",
      "Elimina olores"
    ],
    seoContent: {
      intro: "El Bioptimo es un limpiador multiusos en formato listo para usar. Reemplaza desengrasante en spray, quitagrasa de cocina, removedor de manchas, limpiador de baños y prelavado de ropa: ocho productos convencionales en una sola botella ecológica. Su fórmula biodegradable trabaja sin tóxicos en superficies de cocina, baños, telas y metales. Es uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
    }
  },
  {
    slug: "detergente-neutro",
    name: "Detergente Neutro Concentrado 250 ml",
    tagline: "Rinde para preparar 3 dosificadores de 500 ml. Con aceite de coco y lanolina",
    category: "hogar",
    description: "El Detergente Neutro Nouvie, es un detergente altamente concentrado. Sus componentes son una mezcla perfectamente balanceada y sinérgica de tensioactivos aniónicos, no iónicos y aditivos. Esto le confiere no solo un inigualable poder de limpieza, sino que además y gracias a su alto contenido de alquilolamida de coco, brinda protección y suavidad a la piel. Es hipoalergénico. Ideal para el lavado de prendas delicadas y de bebés, cuida y suaviza las fibras. Gracias a su fórmula 4 veces más tensoactiva, este producto está diseñado para un lavado impecable tanto a mano como en lavavajillas. Separa la grasa sin esfuerzo, evitando que la esponja la absorba.",
    benefits: [
      "Producto concentrado - rinde más",
      "pH neutro - cuida tus manos y tus prendas",
      "Elaborado con tensoactivos naturales",
      "Ideal para ropa delicada y de bebé",
      "No tóxico y biodegradable"
    ],
    image: "/images/productos/detergente-neutro-trans.webp",
    socialImage: "/images/productos/detergente-neutro.png",
    imageWidth: 597,
    imageHeight: 800,
    usageImage: "/images/productos/resena-neutro.png",
    gallery: [
      {
        src: "/images/productos/detergente-neutro-trans.webp",
        caption: "Detergente Neutro 250 ml con dosificador",
        fit: "contain",
        alt: "Detergente Neutro concentrado de 250 ml junto al dosificador de 500 ml que se entrega con el producto",
      },
      {
        src: "/images/productos/detergente-neutro-insite.jpg",
        caption: "Ideal para ropa de bebé",
        fit: "cover",
        alt: "Detergente Neutro Nouvie sobre un mesón de madera junto a ropa de bebé doblada y un canasto de mimbre",
      },
      {
        src: "/images/productos/detergente-neutro-label.webp",
        caption: "Con aceite de coco y lanolina",
        fit: "contain",
        alt: "Etiqueta del Detergente Neutro con sello biodegradable 24/48 horas, con aceite de coco y lanolina y libre de sulfatos",
      },
      {
        src: "/images/productos/resena-neutro.jpg",
        caption: "Todos sus usos",
        fit: "cover",
        alt: "Usos del Detergente Neutro Nouvie: lavavajilla, desodorizante de utensilios, suavizante y detergente para ropa fina y de bebé, protector de manos, baño de espuma y lavado de autos",
      },
    ],
    badge: "Incluye dosificador",
    refillSlug: "repuesto-lavavajilla",
    specs: [
      { label: "Contenido", value: "250 ml" },
      { label: "Rendimiento", value: "1,5 L diluido" },
      { label: "pH", value: "Neutro" }
    ],
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
    ],
    seoContent: {
      intro: "Detergente líquido hipoalergénico formulado para personas con piel sensible, dermatitis atópica, alergias o bebés en casa. Sin fragancias sintéticas, sin colorantes y sin enzimas agresivas. Su fórmula con aceite de coco y lanolina lava prendas delicadas a mano o en lavadora respetando las fibras naturales. Es uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      audienceBlocks: [
        {
          heading: "Para piel atópica y dermatitis",
          body: "Las fragancias y colorantes que quedan adheridos a la ropa son disparadores frecuentes de brotes de dermatitis. Este detergente líquido hipoalergénico no contiene ninguno: las prendas salen sin olor químico, listas para piel reactiva."
        },
        {
          heading: "Para ropa de bebé",
          body: "pH neutro y sin enzimas agresivas — apto desde el primer mes. Lava ropa de bebé, paños de algodón y toallas sin dejar residuos que puedan irritar la piel sensible. Una tapa en la lavadora rinde igual que dos tapas de un detergente convencional."
        },
        {
          heading: "Para personas con alergias",
          body: "Sin parabenos, sin sulfatos agresivos, sin perfumes sintéticos. Recomendado para personas con rinitis alérgica que reaccionan a los detergentes con fragancia. La ropa lavada sale neutra al olfato."
        }
      ],
      faqs: [
        {
          question: "¿Qué hace que un detergente sea hipoalergénico?",
          answer: "Que no contenga los disparadores comunes de alergias y dermatitis: fragancias sintéticas, colorantes, enzimas agresivas y conservantes irritantes. El Detergente Neutro Nouvie elimina todos estos compuestos y mantiene solo los tensoactivos derivados de aceite de coco, suaves para la piel."
        },
        {
          question: "¿Sirve para ropa de recién nacido?",
          answer: "Sí. Su pH neutro, ausencia de fragancias y formulación con lanolina lo hacen apto para ropa de recién nacido desde el primer mes. No deja residuos que puedan irritar la piel del bebé."
        }
      ]
    }
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
    image: "/images/productos/limpia-pisos-trans.webp",
    socialImage: "/images/productos/limpia-pisos.png",
    imageWidth: 597,
    imageHeight: 800,
    usageImage: "/images/productos/resena-pisos.png",
    gallery: [
      {
        src: "/images/productos/limpia-pisos-trans.webp",
        caption: "Limpia Pisos 250 ml con dosificador",
        fit: "contain",
        alt: "Limpia Pisos concentrado de 250 ml junto al dosificador de 500 ml con cera carnauba",
      },
      {
        src: "/images/productos/limpia-pisos-insite.jpg",
        caption: "Limpia y brilla todo tipo de pisos",
        fit: "cover",
        alt: "Limpia Pisos Nouvie sobre un piso de madera laminada recién trapeado con mopa de microfibra en una sala iluminada",
      },
      {
        src: "/images/productos/limpia-pisos-label.webp",
        caption: "Contiene cera carnauba",
        fit: "contain",
        alt: "Etiqueta del Limpia Pisos Nouvie: contiene cera carnauba, no es grasoso, para pisos de madera, laminados, mármol y cerámica",
      },
      {
        src: "/images/productos/resena-pisos.jpg",
        caption: "Todos sus usos",
        fit: "cover",
        alt: "Usos del Limpia Pisos Nouvie: limpia y encera pisos, humectante de madera, lavado y encerado de autos, antiempañante de vidrios y espejos, limpieza de hojas de plantas y apresto para ropa",
      },
    ],
    badge: "Incluye dosificador",
    refillSlug: "repuesto-limpia-pisos",
    specs: [
      { label: "Contenido", value: "250 ml" },
      { label: "Rendimiento", value: "50 trapeadas" },
      { label: "Acabado", value: "Antideslizante" }
    ],
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
    ],
    seoContent: {
      h1Override: "Limpiapisos Natural para Superficies Delicadas",
      intro: "Limpiapisos concentrado en versión ecológica, formulado en Colombia para superficies delicadas. Una sola tapa en un balde de agua rinde para 50 trapeadas. Es un limpiador para pisos flotantes y a la vez un limpia pisos para madera, porcelanato, baldosa, laminado y vinílico — sin dañar el acabado ni dejar residuos pegajosos. Forma parte de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      audienceBlocks: [
        {
          heading: "Para superficies delicadas",
          body: "Madera laminada, vinílico, porcelanato pulido, mármol y baldosas de cerámica. Su fórmula con cera carnauba protege el acabado sin amarillarlo y respeta los sellantes de fábrica."
        },
        {
          heading: "Para casas con niños y mascotas",
          body: "Sin químicos tóxicos ni fragancias agresivas: el piso se puede pisar descalzo apenas seca. Las mascotas que lamen el piso (perros y gatos) no están en contacto con residuos peligrosos como ocurre con limpiapisos industriales que contienen amoniaco o cloro."
        }
      ]
    }
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
    image: "/images/productos/desengrasante-trans.webp",
    socialImage: "/images/productos/desengrasante.png",
    imageWidth: 597,
    imageHeight: 800,
    usageImage: "/images/productos/resena-desengrasante.png",
    gallery: [
      {
        src: "/images/productos/desengrasante-trans.webp",
        caption: "Desengrasante Multiusos 250 ml con dosificador",
        fit: "contain",
        alt: "Desengrasante Multiusos concentrado de 250 ml junto al dosificador de 500 ml que se entrega con el producto",
      },
      {
        src: "/images/productos/desengrasante-insite.jpg",
        caption: "Ideal para baños y duchas",
        fit: "cover",
        alt: "Desengrasante Multiusos Nouvie sobre un lavamanos de piedra blanca en un baño con azulejos y mampara de ducha",
      },
      {
        src: "/images/productos/desengrasante-label.webp",
        caption: "Alto poder desengrasante",
        fit: "contain",
        alt: "Etiqueta del Desengrasante Multiusos Nouvie con alto poder desengrasante para cocinas, pisos y baños",
      },
      {
        src: "/images/productos/resena-desengrasante.jpg",
        caption: "Todos sus usos",
        fit: "cover",
        alt: "Usos del Desengrasante Multiusos Nouvie: limpieza de hornos, baños y azulejos, lava pisos, quita manchas y sarro, prelavado de ropa, limpieza de tenis y elimina olores",
      },
    ],
    badge: "Incluye dosificador",
    refillSlug: "repuesto-desengrasante-multiusos",
    specs: [
      { label: "Contenido", value: "250 ml" },
      { label: "Rendimiento", value: "3 L diluido" },
      { label: "Concentración", value: "4× tensoactivo" }
    ],
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
    image: "/images/productos/lustra-muebles-trans.webp",
    socialImage: "/images/productos/lustra-muebles.png",
    imageWidth: 597,
    imageHeight: 800,
    usageImage: "/images/productos/resena-lustra.png",
    gallery: [
      {
        src: "/images/productos/lustra-muebles-trans.webp",
        caption: "Lustra Muebles 250 ml con dosificador",
        fit: "contain",
        alt: "Lustra Muebles concentrado de 250 ml junto al dosificador de 500 ml para limpiar superficies y pantallas",
      },
      {
        src: "/images/productos/lustra-muebles-insite.jpg",
        caption: "Hidrata y da brillo sin engrasar",
        fit: "cover",
        alt: "Lustra Muebles Nouvie sobre una mesa de madera de nogal con brillo satinado y un paño de algodón",
      },
      {
        src: "/images/productos/lustra-muebles-label.webp",
        caption: "Limpia superficies y pantallas",
        fit: "contain",
        alt: "Etiqueta del Lustra Muebles Nouvie: limpia superficies y pantallas, contiene cera carnauba y es biodegradable en 24/48 horas",
      },
      {
        src: "/images/productos/resena-lustra.jpg",
        caption: "Todos sus usos",
        fit: "cover",
        alt: "Usos del Lustra Muebles Nouvie: lustra muebles de madera y plástico, limpia y lustra cueros y cuerinas, abrillantador de superficies y electrodomésticos, y lustra autos",
      },
    ],
    badge: "Incluye dosificador",
    refillSlug: "repuesto-lustra-muebles",
    specs: [
      { label: "Contenido", value: "250 ml" },
      { label: "Rendimiento", value: "1,5 L diluido" },
      { label: "Acabado", value: "No grasoso" }
    ],
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
    ],
    seoContent: {
      h1Override: "Lustramuebles Natural",
      intro: "Lustramuebles natural en versión concentrada que rinde para preparar 3 dosificadores de 500 ml. Formulado en Colombia con siliconas emulsionadas que dan brillo, hidratan y protegen sin dejar grasa. Funciona como aceite para muebles de madera moderna, madera oscura tipo cedro o nogal, muebles antiguos restaurados, mesas de comedor de uso diario y mesones de cocina. También sirve como lustramuebles en spray cuando se diluye en atomizador. Forma parte de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      audienceBlocks: [
        {
          heading: "Para muebles de madera y antigüedades",
          body: "Hidrata sin oscurecer la madera. Ideal para muebles antiguos donde un lustramuebles industrial dejaría una capa pegajosa que atrae más polvo. Aplicar con paño suave en sentido de la veta. Repele el polvo durante días."
        },
        {
          heading: "Para casas con mascotas",
          body: "Sin químicos tóxicos: tu gato puede acostarse en el mueble lustrado sin riesgo. La fórmula es la misma que usamos en mesones donde se prepara comida — segura para piel y respiración de animales pequeños."
        }
      ]
    }
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
    image: "/images/productos/limpia-vidrios-trans.webp",
    socialImage: "/images/productos/limpia-vidrios.png",
    imageWidth: 533,
    imageHeight: 800,
    usageImage: "/images/productos/resena-vidrios.png",
    gallery: [
      {
        src: "/images/productos/limpia-vidrios-trans.webp",
        caption: "Limpia Vidrios 250 ml con dosificador",
        fit: "contain",
        alt: "Limpia Vidrios concentrado de 250 ml junto al dosificador de 500 ml para vidrios y limpieza de acero",
      },
      {
        src: "/images/productos/limpia-vidrios-insite.jpg",
        caption: "Secado rápido, sin trazos",
        fit: "cover",
        alt: "Limpia Vidrios Nouvie sobre el alfeizar de madera de una ventana limpia junto a un limpiavidrios y un paño de microfibra",
      },
      {
        src: "/images/productos/limpia-vidrios-labels.webp",
        caption: "No deja trazos del trapo",
        fit: "contain",
        alt: "Etiqueta del Limpia Vidrios Nouvie: no deja trazos del trapo, limpieza de acero, libre de sulfatos y biodegradable en 24/48 horas",
      },
      {
        src: "/images/productos/resena-vidrios.jpg",
        caption: "Todos sus usos",
        fit: "cover",
        alt: "Usos del Limpia Vidrios Nouvie: limpia vidrios y espejos sin marcas, abrillanta acero y aluminio, lavado de tapicería y preplanchado de ropa",
      },
    ],
    badge: "Incluye dosificador",
    refillSlug: "repuesto-limpia-vidrios",
    specs: [
      { label: "Contenido", value: "250 ml" },
      { label: "Rendimiento", value: "50 L diluido" },
      { label: "Secado", value: "Rápido" }
    ],
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
    ],
    seoContent: {
      sections: [
        {
          heading: "Cómo limpiar alfombras sin máquina",
          body: "El Limpia Vidrios concentrado de Nouvie funciona también como limpiador alfombras en seco. Diluir 1 tapa del producto en 20 tapas de agua tibia y batir con esponja hasta hacer espuma firme. Aplicar la espuma sobre la alfombra (no el líquido), dejar actuar 5 minutos y retirar con toalla limpia. La fibra absorbe la suciedad pero no el agua, evitando manchas de humedad. Para manchas previas, tratar primero con el Bioptimo desengrasante. También es un limpiador para espejos efectivo y un limpia vidrios profesional para acabados sin marcas. Es uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie."
        }
      ]
    }
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
    image: "/images/productos/atomizador-trans.webp",
    socialImage: "/images/productos/atomizador.png",
    imageWidth: 665,
    imageHeight: 800,
    gallery: [
      {
        src: "/images/productos/atomizador-trans.webp",
        caption: "Atomizador Nouvie de 375 ml",
        fit: "contain",
        alt: "Atomizador Nouvie de 375 ml reciclable con gatillo pulverizador y medidas dosificadoras para preparar los productos concentrados",
      },
    ],
    specs: [
      { label: "Contenido", value: "375 ml" },
      { label: "Material", value: "Reciclable" },
      { label: "Incluye", value: "Medidas dosificadoras" }
    ],
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
    name: "Kit Capilar Fortalecedor con Bio Keratina - 3 pasos",
    tagline: "Bio Keratina, Kiwi y Açaí para un cabello liso y sedoso, fuerte y sin frizz",
    category: "capilar",
    description: "Transforma tu cabello por completo con el Kit Capilar Fortalecedor Nouvie Kiwi y Açaí. Este tratamiento botánico integral de 3 pasos (Shampoo, Mascarilla y Loción para Moldear) combina la Bio-Keratina con nuestra exclusiva mezcla de componentes naturales activos para mejorar y suavizar profundamente la fibra capilar. Diseñado para fortalecer el folículo piloso, estimular un crecimiento sano y aportar la keratina perdida con el tiempo, este sistema elimina el frizz desde el primer uso, sella las puntas y brinda un acabado suave, sedoso, luminoso y de fácil manejo. Es el mismo tratamiento que muchas clientas conocen como Kit Liso y Sedoso o Suave y Liso: shampoo sin sal, mascarilla y loción de la línea Kiwi & Açaí.",
    benefits: [
      "Bio Keratina natural",
      "Fortalece el folículo piloso",
      "Elimina el frizz desde el primer uso",
      "Cabello liso, sedoso y luminoso",
      "8 aceites esenciales nutritivos"
    ],
    features: [
      "Tratamiento completo de 3 pasos: sistema sinérgico de Shampoo, Mascarilla y Loción para Moldear formulado con ingredientes botánicos.",
      "Efecto suave y sedoso: brinda suavidad extrema a la fibra capilar y elimina el frizz.",
      "Fortalecimiento y crecimiento: estimula la raíz y previene el quiebre gracias a su aporte de Bio-Keratina y Quinoa Hidrolizada.",
      "Nutrición avanzada con activos naturales: enriquecido con 8 aceites esenciales y proteínas que devuelven la vitalidad y el brillo al cabello."
    ],
    ingredientGroups: [
      {
        heading: "Aceites y extractos naturales",
        body: "Granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria, Bio-Keratina, Kiwi y Açaí."
      },
      {
        heading: "Componentes activos",
        body: "Quinoa hidrolizada (promueve el crecimiento, protege de la caspa e hidrata), aminoácidos de trigo y soya (fuente de vitamina E y proteínas para reparar fibras), y arginina, treonina y cerina (aminoácidos precursores de óxido nítrico para el crecimiento)."
      },
      {
        heading: "Proteína de yogurt y prebióticos",
        body: "Rica en vitaminas B6, B12, zinc, ácido láctico, calcio y magnesio para mayor flexibilidad, hidratación y propiedades anti-edad."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Shampoo de 237 ml (Paso 1): limpieza suave con base natural derivada de ingredientes vegetales. Por ser libre de sulfatos, genera poca espuma en el primer lavado.",
      "1x Mascarilla de 177 ml (Paso 2): hidratación profunda. Aplica de medios a puntas, deja actuar 5 minutos y enjuaga. Uso recomendado: 2 a 3 veces por semana.",
      "1x Loción Moldeadora / Molding de 177 ml (Paso 3): termoprotector sin enjuague. Aplica una pequeña cantidad sobre el cabello húmedo y peina al natural o con calor."
    ],
    image: "/images/productos/kiwi-acai-trans.webp",
    socialImage: "/images/productos/kit-kiwi-trio.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    usageImage: "/images/productos/resena-kiwi-acai.png",
    gallery: [
      {
        src: "/images/productos/kit-kiwi-trio.jpg",
        caption: "Kiwi & Açaí · 237 ml y 177 ml",
        fit: "cover",
        alt: "Foto de estudio de los tres productos NouVie Kiwi & Açaí: Hair Masque Soft & Smooth 177 ml, Shampoo 237 ml y Natural Molding Lotion 177 ml sobre fondo blanco",
      },
      {
        src: "/images/productos/kit-kiwi-ingredientes.jpg",
        caption: "Bio Keratina, quinoa hidrolizada y libre de sulfatos",
        fit: "cover",
        alt: "Los tres productos del kit Kiwi & Açaí con sus activos destacados: Bio Keratina, quinoa hidrolizada y fórmula libre de sulfatos",
      },
      {
        src: "/images/productos/kit-kiwi-bano.jpg",
        caption: "Los 3 pasos del tratamiento",
        fit: "cover",
        alt: "Loción para moldear, mascarilla y shampoo Nouvie Kiwi & Açaí sobre el mesón de un baño, junto a una toalla Nouvie",
      },
    ],
    video: {
      src: "https://wkuhamnniaulkxgrzndl.supabase.co/storage/v1/object/public/videos/kitkiwi-nouvie-colombia.mp4",
      poster: "/images/productos/kit-kiwi-poster.jpg",
      caption: "Efecto liso y luminoso: el tratamiento y sus activos",
      uploadDate: "2026-09-10",
    },
    mercadoLibreUrl:
      "https://www.mercadolibre.com.co/kit-capilar-fortalecedor-con-bio-keratina/up/MCOU2430485400?pdp_filters=seller_id%3A1929660384",
    bundlePrice: 167000, // Kit de 3 productos con IVA
    steps: [
      {
        step: 1,
        name: "Shampoo Fortalecedor",
        instruction: "Lava tu cabello con el Shampoo utilizando la cantidad de producto equivalente al largo y volumen de tu cabello. Bate un poco antes de usar, masajea el cuero cabelludo con movimientos circulares y enjuaga con abundante agua al clima. Es normal que no haga espuma en el primer lavado; en la segunda lavada genera poca espuma porque es libre de sulfatos y su fórmula contiene un agente limpiador suave de origen vegetal."
      },
      {
        step: 2,
        name: "Mascarilla Fortalecedora",
        instruction: "Aplica la Mascarilla inmediatamente después del Shampoo. Retira el exceso de agua, bate un poco antes de usar y deposita una porción de acuerdo al largo y volumen de tu cabello en la palma de tu mano, frotando por unos segundos. Aplica sobre el cabello de manera uniforme de medios a puntas, deja actuar por 5 minutos y enjuaga con abundante agua preferiblemente fría. Aplica de 2 a 3 veces por semana."
      },
      {
        step: 3,
        name: "Loción para Moldear Fortalecedora",
        instruction: "Después de lavar el cabello con el Shampoo y la Mascarilla Nouvie, seca con la toalla, bate un poco antes de usar y coloca en el centro de tu mano una porción pequeña según el largo y volumen de tu cabello. Frota por unos segundos en las manos y aplica en todo el cabello de manera uniforme sin enjuagar. Después peina a tu gusto dejando un secado natural o usando secador eléctrico, plancha o rizadora. Aplica diariamente en tu cabello seco para moldear y como termoprotector de los rayos UV."
      }
    ],
    seoContent: {
      h1Override: "Kit Capilar Fortalecedor",
      faqs: [
        {
          question: "Si mi cabello tiene frizz y está opaco, ¿cuál línea debo usar?",
          answer: "La línea Fortalecedora con Bio-Keratina, conocida también como Liso y Sedoso. La Bio-Keratina se desarrolla a partir de una mezcla especial de aminoácidos obtenidos del trigo y la soya. Esos aminoácidos son estructuras complejas de proteínas compatibles de inmediato con las proteínas presentes en el folículo piloso y la fibra capilar. El cabello requiere proteínas porque está hecho de queratina, y además necesita colágeno. El uso constante de Bio-Keratina mejora y suaviza la fibra capilar, dando un cabello moldeable, con brillo y sin frizz."
        },
        {
          question: "¿Qué es la Bio-Keratina y para qué sirve en el cabello?",
          answer: "Los aminoácidos son los bloques de construcción de todas las proteínas del cuerpo, y el cabello está compuesto por una proteína llamada queratina. Si los aminoácidos llegan de forma insuficiente a las células de los folículos pilosos, la producción de queratina se reduce o la queratina producida es defectuosa, y el resultado son cabellos frágiles. La Bio-Keratina aporta tres aminoácidos clave: arginina, que el cuerpo deja de sintetizar bien con el estrés y el envejecimiento; lisina, que estimula el colágeno y es importante para reparar el cabello dañado; y metionina, antioxidante que ayuda a proteger los folículos del estrés oxidativo. Sus beneficios: fortalece el folículo piloso y la fibra capilar, estimula el crecimiento, permite un moldeado perfecto y deja un acabado liso."
        },
        {
          question: "¿Por qué no debo usar shampoo con sulfatos?",
          answer: "El lauril sulfato de amonio (ALS) y el lauril sulfato de sodio (SLS) son detergentes abrasivos y uno de los componentes clásicos de casi todos los shampoos: limpian y desengrasan mediante la espuma que generan. Se usan porque son baratos y efectivos, pero en poco tiempo deterioran el cuero cabelludo y el cabello. Al eliminar la grasa también destruyen los lípidos naturales que la piel genera para defenderse, por lo que resultan irritantes. Muchos problemas de sequedad, irritación del cuero cabelludo y caspa se deben a su uso continuado. Toda la línea capilar Nouvie es libre de sulfatos."
        },
        {
          question: "¿Por qué el shampoo casi no hace espuma?",
          answer: "Porque es libre de sulfatos, que son justamente los detergentes que producen mucha espuma en los shampoos convencionales. El Shampoo Fortalecedor limpia con un agente suave de origen vegetal: es normal que en el primer lavado casi no haga espuma y que en el segundo haga poca. Limpia igual, solo que sin agredir el cuero cabelludo."
        },
        {
          question: "¿Por qué la quinoa hidrolizada es buena para el cabello?",
          answer: "La quinoa hidrolizada es esencial para un sistema nervioso saludable y para la formación de los glóbulos rojos, lo que promueve el crecimiento del cabello. En la fórmula aporta además hidratación y ayuda a proteger de la caspa, y junto con la Bio-Keratina previene el quiebre de la hebra."
        },
        {
          question: "¿Por qué la proteína de yogurt y los prebióticos son buenos para el cabello?",
          answer: "La proteína del yogurt natural fortalece la fibra capilar, reduce la rotura y estimula el crecimiento saludable de los folículos pilosos. Aporta vitaminas B6 y B12, zinc que fortalece el cuero cabelludo, ácido láctico con propiedades hidratantes que lo convierten en un gran acondicionador natural, y calcio y magnesio para nutrir los folículos. Los prebióticos favorecen las bacterias buenas del cuero cabelludo e inhiben las dañinas, lo que ayuda a equilibrarlo, mejora la densidad del cabello y lo devuelve fuerte, brillante y desenredado."
        },
        {
          question: "¿Cada cuánto se usa y cuánto rinde el kit?",
          answer: "El shampoo se usa en cada lavado, la mascarilla de 2 a 3 veces por semana dejándola actuar 5 minutos, y la loción para moldear a diario sobre el cabello húmedo, sin enjuagar. Con esa frecuencia, el kit completo (shampoo de 237 ml, mascarilla de 177 ml y loción de 177 ml) rinde varias semanas en cabello de largo medio."
        },
        {
          question: "¿Se puede comprar cada producto por separado?",
          answer: "Sí. El shampoo, la mascarilla y la loción para moldear de la línea Fortalecedora con Bio Keratina se venden por unidad, además del kit completo de 3 pasos. Escríbenos por WhatsApp y te confirmamos precios, disponibilidad y envío."
        }
      ]
    }
  },
  {
    slug: "tratamiento-reparacion-intensa",
    name: "Kit Capilar Reparación Intensa con Manteca de Karité - 3 pasos",
    tagline: "Manteca de Karité, Royal Honey & Melon para cabello seco, maltratado o quebradizo",
    category: "capilar",
    description: "Cabello más fuerte, brillante y sedoso con el poder de la manteca de karité, el acondicionador de la madre naturaleza. Recupera la vitalidad y el brillo de tu cabello con el Kit Tratamiento Nouvie Karité Reparación Intensa de 3 pasos. El poder ultra humectante de la Manteca de Karité con un potente complejo de aminoácidos y 8 aceites esenciales, repara cabellos secos, maltratados o quebradizos mediante una hidratación profunda. Su fórmula está diseñada para estimular el crecimiento, evitar puntas abiertas y crear un escudo protector activo contra el calor (secadores y planchas), los rayos UV, el cloro y la sal, manteniendo tu color intacto.",
    benefits: [
      "Manteca de Karité ultra humectante",
      "Repara cabello seco y quebradizo",
      "Escudo térmico y protección UV",
      "Evita las puntas abiertas",
      "Mantiene tu color intacto"
    ],
    features: [
      "Fórmula enriquecida con 8 aceites esenciales (granada, frambuesa, almendras, avellanas, macadamia, argán, mango y zanahoria).",
      "Efecto antiedad capilar con vitaminas B6 y B12, zinc, ácido láctico, calcio y magnesio.",
      "Calma el cuero cabelludo irritado y reduce la resequedad por sus propiedades anti-inflamatorias.",
      "100% libre de sulfatos, parabenos, sistemas salinos duros, colorantes y fragancias. Cruelty-Free (no testeado en animales)."
    ],
    ingredientGroups: [
      {
        heading: "Aceites y extractos naturales",
        body: "Granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria, Manteca de Karité, Miel y Melón."
      },
      {
        heading: "Componentes activos",
        body: "Quinoa hidrolizada (promueve el crecimiento, protege de la caspa e hidrata), aminoácidos de trigo y soya (fuente de vitamina E y proteínas para reparar fibras), y arginina, treonina y cerina (aminoácidos precursores de óxido nítrico para el crecimiento)."
      },
      {
        heading: "Proteína de yogurt y prebióticos",
        body: "Rica en vitaminas B6, B12, zinc, ácido láctico, calcio y magnesio para mayor flexibilidad, hidratación y propiedades anti-edad."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Shampoo de 237 ml (Paso 1): limpieza suave con base natural derivada de ingredientes vegetales. Por ser libre de sulfatos, genera poca espuma.",
      "1x Mascarilla de 177 ml (Paso 2): hidratación profunda. Aplica de medios a puntas, deja actuar 5 minutos y enjuaga. Uso recomendado: 2 a 3 veces por semana.",
      "1x Loción Moldeadora / Molding de 177 ml (Paso 3): termoprotector sin enjuague. Aplica una pequeña cantidad sobre el cabello húmedo o seco y peina al natural o con calor."
    ],
    image: "/images/productos/honey-melon-trans.webp",
    socialImage: "/images/productos/kit-reparacion-trio.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    usageImage: "/images/productos/resena-honey-melon.png",
    gallery: [
      {
        src: "/images/productos/kit-reparacion-bano.jpg",
        caption: "Los 3 pasos del tratamiento",
        fit: "cover",
        alt: "Shampoo, mascarilla y loción para moldear Nouvie Reparación Intensa Royal Honey & Melon sobre un mesón de baño en mármol",
      },
      {
        src: "/images/productos/kit-reparacion-ingredientes.jpg",
        caption: "Manteca de Karité, proteína de yogurt y aceites naturales",
        fit: "cover",
        alt: "Los tres productos del kit con sus activos destacados: manteca de karité, proteína de yogurt y prebióticos, aceites y extractos naturales",
      },
      {
        src: "/images/productos/kit-reparacion-tabla.jpg",
        caption: "Mascarilla 177 ml, Shampoo 237 ml y Loción 177 ml",
        fit: "cover",
        alt: "Los tres tubos del kit Reparación Intensa sobre una tabla de madera junto a una ventana",
      },
      {
        src: "/images/productos/kit-reparacion-trio.jpg",
        caption: "Royal Honey & Melon · 237 ml y 177 ml",
        fit: "cover",
        alt: "Foto de estudio de los tres productos NouVie Royal Honey & Melon: Hair Masque 177 ml, Shampoo Intense Repair 237 ml y Natural Molding Lotion 177 ml sobre fondo blanco",
      },
    ],
    video: {
      src: "https://wkuhamnniaulkxgrzndl.supabase.co/storage/v1/object/public/videos/kit-reparacion-intensa.mp4",
      poster: "/images/productos/kit-reparacion-poster.jpg",
      caption: "Los 3 pasos del tratamiento, paso a paso",
      uploadDate: "2026-09-10",
    },
    mercadoLibreUrl:
      "https://www.mercadolibre.com.co/kit-capilar-reparacion-intensa-con-manteca-de-karite/up/MCOU5038982173?pdp_filters=seller_id%3A1929660384",
    bundlePrice: 167000, // Kit de 3 productos con IVA
    steps: [
      {
        step: 1,
        name: "Shampoo Reparación Intensa",
        instruction: "Lava tu cabello con el Shampoo utilizando la cantidad de producto equivalente al largo y volumen de tu cabello. Bate un poco antes de usar, masajea el cuero cabelludo con movimientos circulares y enjuaga con abundante agua al clima. Es normal que no haga espuma en el primer lavado; en la segunda lavada genera poca espuma porque es libre de sulfatos y su fórmula contiene un agente limpiador suave de origen vegetal."
      },
      {
        step: 2,
        name: "Mascarilla Reparación Intensa",
        instruction: "Aplica la Mascarilla inmediatamente después del Shampoo. Retira el exceso de agua, bate un poco antes de usar y deposita una porción pequeña de acuerdo al largo y volumen de tu cabello en la palma de tu mano, frotando por unos segundos. Aplica sobre el cabello de manera uniforme de medios a puntas, deja actuar por 5 minutos y enjuaga con abundante agua preferiblemente tibia o fría. Aplica de 2 a 3 veces por semana."
      },
      {
        step: 3,
        name: "Loción para Moldear Reparación Intensa",
        instruction: "Después de lavar el cabello con el Shampoo y la Mascarilla Nouvie, seca con la toalla, bate un poco antes de usar y coloca en el centro de tu mano una porción pequeña según el largo y volumen de tu cabello. Frota por unos segundos en las manos y aplica en todo el cabello de manera uniforme sin enjuagar. Después peina a tu gusto dejando un secado natural o usando secador eléctrico, plancha o rizadora. Aplica diariamente en tu cabello seco para moldear y como termoprotector de los rayos UV."
      }
    ],
    seoContent: {
      h1Override: "Kit Capilar Reparación Intensa",
      faqs: [
        {
          question: "Si mi cabello está quemado y reseco, es tinturado o ha sido decolorado, ¿cuál línea debo usar?",
          answer: "La línea Reparación Intensa. Por tener manteca de karité, proporciona humedad para el cabello seco o dañado y se ha demostrado que posee propiedades anti-inflamatorias. Se absorbe fácilmente en el cuero cabelludo y no obstruye los poros, proporcionando humedad desde las raíces y extendiéndose hacia los extremos. Por tanto, es muy beneficiosa para el cabello encrespado, tinturado o tratado con calor."
        },
        {
          question: "¿Qué es la manteca de karité y por qué es buena para el cabello?",
          answer: "La manteca de karité se extrae de la nuez del árbol de karité, que crece en las zonas tropicales de África oriental y occidental. Es el acondicionador natural para el cabello más usado y se le conoce como «el acondicionador de la madre naturaleza» por sus extraordinarias propiedades hidratantes. Calma el cuero cabelludo irritado y la picazón por resequedad o caspa. Protege del calor: no se asienta sobre el cabello sino que se absorbe sin dejar sensación grasa o pesada, y recubre el tallo capilar para protegerlo del sol y del calor. Se le atribuye una cantidad baja pero suficiente de SPF para proteger frente a los rayos ultravioleta, algo especialmente útil en cabello tinturado. Y es un excelente suavizante para el pelo duro, quebradizo o rizado frágil."
        },
        {
          question: "¿Por qué no debo usar shampoo con sulfatos?",
          answer: "El lauril sulfato de amonio (ALS) y el lauril sulfato de sodio (SLS) son detergentes abrasivos y uno de los componentes clásicos de casi todos los shampoos: limpian y desengrasan el cabello mediante la espuma que generan. Se usan porque son baratos y efectivos, pero en poco tiempo deterioran el cuero cabelludo y el cabello. Al eliminar la grasa también destruyen los lípidos naturales que la piel genera para defenderse, por lo que resultan irritantes. Muchos problemas de sequedad, irritación del cuero cabelludo y caspa se deben al uso continuado de estos ingredientes. Toda la línea capilar Nouvie es libre de sulfatos."
        },
        {
          question: "¿Por qué el shampoo casi no hace espuma?",
          answer: "Porque es libre de sulfatos, que son justamente los detergentes que producen mucha espuma en los shampoos convencionales. El Shampoo Reparación Intensa limpia con un agente suave de origen vegetal: es normal que en el primer lavado casi no haga espuma y que en el segundo haga poca. Limpia igual, solo que sin agredir el cuero cabelludo."
        },
        {
          question: "¿Qué le aportan al cabello los 8 aceites esenciales del kit?",
          answer: "Cada aceite cumple una función. El de semillas de granada fortalece y es antioxidante. El de semilla de frambuesa aporta vitaminas E y A, que nutren, reparan y protegen del daño diario. El de almendras da protección y brillo y estimula el crecimiento. El de avellanas hidrata y nutre el cuero cabelludo aportando calcio y potasio. El de macadamia aporta Omega 7, que ayuda a la producción de sebo de los folículos pilosos. El de argán da fuerza y flexibilidad, repara puntas secas y abiertas, elimina el frizz y prolonga la vida del color. La manteca de semilla de mango, rica en Omega 6, enriquece la fibra capilar y el cuero cabelludo. Y el extracto de raíz de zanahoria aporta betacarotenos antioxidantes que ayudan a producir el sebo natural que hidrata el cuero cabelludo."
        },
        {
          question: "¿Por qué la proteína de yogurt y los prebióticos son buenos para el cabello?",
          answer: "La proteína del yogurt natural fortalece la fibra capilar, reduce la rotura y estimula el crecimiento saludable de los folículos pilosos. Aporta vitaminas B6 y B12, zinc que fortalece el cuero cabelludo, ácido láctico con propiedades hidratantes que lo convierten en un gran acondicionador natural, y calcio y magnesio para nutrir los folículos. Los prebióticos, por su parte, favorecen las bacterias buenas del cuero cabelludo e inhiben las dañinas, lo que ayuda a equilibrarlo, mejora la densidad del cabello y lo devuelve fuerte, brillante y nutrido."
        },
        {
          question: "¿Cada cuánto se usa y cuánto rinde el kit?",
          answer: "El shampoo se usa en cada lavado, la mascarilla de 2 a 3 veces por semana dejándola actuar 5 minutos, y la loción para moldear a diario sobre el cabello húmedo o seco, sin enjuagar. Con esa frecuencia, el kit completo (shampoo de 237 ml, mascarilla de 177 ml y loción de 177 ml) rinde varias semanas en cabello de largo medio."
        },
        {
          question: "¿Se puede comprar cada producto por separado?",
          answer: "Sí. El shampoo, la mascarilla y la loción para moldear de la línea Reparación Intensa se venden por unidad, además del kit completo de 3 pasos. Escríbenos por WhatsApp y te confirmamos precios, disponibilidad y envío."
        }
      ]
    }
  },
  {
    slug: "tratamiento-revitalizante",
    name: "Kit Capilar Revitalizante Anticaída con Prebióticos, Aceite de Argán y Keratina Hidrolizada - 2 pasos",
    tagline: "Tratamiento de 2 pasos para frenar la caída del cabello y fortalecer desde la raíz",
    category: "capilar",
    description: "Tratamiento capilar revitalizante de 2 pasos formulado especialmente para hombres o mujeres con problemas de caída de cabello por tratamientos médicos o enfermedad. Este sistema combina Prebióticos, Proteína de Yogurt de Coco, Keratina Hidrolizada y Aceite de Argán para estimular el folículo piloso, frenar la caída y fortalecer la fibra capilar desde la raíz. Enriquecido con un complejo de 12 ingredientes naturales —incluyendo 8 aceites esenciales y quinoa—, repara el cabello quebradizo, combate la caspa, alivia el picor y devuelve un aspecto vigoroso, joven y saludable. 100% libre de sulfatos, parabenos, sales agresivas, colorantes y fragancias sintéticas.",
    benefits: [
      "Frena la caída del cabello",
      "Aceite de Argán y Keratina Hidrolizada",
      "Yogurt de coco y prebióticos",
      "Fortalece el folículo piloso",
      "Previene caspa, picor y resequedad"
    ],
    features: [
      "Sistema dual anticaída: incluye Shampoo Revitalizante y Loción Moldeadora sin enjuague para un cuidado completo.",
      "Fórmula botánica con 12 activos: Aceite de Argán, Proteína de Yogurt, Prebióticos, Keratina Hidrolizada, Quinoa y 8 aceites esenciales (granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria).",
      "Salud profunda del cuero cabelludo: previene la caspa, la resequedad, la irritación y el envejecimiento capilar prematuro.",
      "Libre de químicos agresivos: sin sulfatos, parabenos, sistemas salinos duros, colorantes ni fragancias artificiales. Producto no testeado en animales."
    ],
    ingredientGroups: [
      {
        heading: "Aceites y extractos naturales (8 esenciales)",
        body: "Granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria."
      },
      {
        heading: "Componentes activos",
        body: "Quinoa hidrolizada (estimula el crecimiento y protege de la caspa), aminoácidos de trigo y soya, y el complejo de arginina, treonina y cerina (precursores de óxido nítrico para el crecimiento)."
      },
      {
        heading: "Yogurt de coco y prebióticos",
        body: "Rico en vitaminas B6, B12, zinc, ácido láctico, calcio y magnesio para una profunda hidratación y propiedades anti-edad."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Shampoo Revitalizante Mountain Breeze de 237 ml (Paso 1): limpieza equilibrada sin sulfatos que remueve impurezas y cuida el cuero cabelludo.",
      "1x Loción para Moldear / Natural Molding de 177 ml (Paso 2): tratamiento termoprotector sin enjuague que fija, protege y da acabado natural."
    ],
    image: "/images/productos/revitalizante-trans.webp",
    socialImage: "/images/productos/kit-revitalizante-duo.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    usageImage: "/images/productos/resena-revitalizante.png",
    gallery: [
      {
        src: "/images/productos/kit-revitalizante-duo.jpg",
        caption: "Mountain Breeze · 237 ml y 177 ml",
        fit: "cover",
        alt: "Foto de estudio del Shampoo Revitalizante 237 ml y la Loción Natural Molding 177 ml NouVie Mountain Breeze For Men sobre fondo blanco",
      },
      {
        src: "/images/productos/kit-revitalizante-ingredientes.jpg",
        caption: "Aceite de argán, keratina hidrolizada y prebióticos",
        fit: "cover",
        alt: "Los dos productos del kit revitalizante con sus activos destacados: aceite de argán, keratina hidrolizada y prebióticos nutritivos",
      },
      {
        src: "/images/productos/kit-revitalizante-bano.jpg",
        caption: "Los 2 pasos del tratamiento",
        fit: "cover",
        alt: "Loción para moldear y shampoo revitalizante Nouvie Mountain Breeze sobre el mesón de un baño junto a una toalla Nouvie",
      },
    ],
    video: {
      src: "https://wkuhamnniaulkxgrzndl.supabase.co/storage/v1/object/public/videos/kit-revitalizante-nouvie-colombia.mp4",
      poster: "/images/productos/kit-revitalizante-poster.jpg",
      caption: "Tratamiento con yogurt y prebióticos: lo que cuentan quienes lo usan",
      uploadDate: "2026-09-10",
    },
    mercadoLibreUrl:
      "https://www.mercadolibre.com.co/kit-x-2-para-hombre-con-argan/up/MCOU2425778887?pdp_filters=seller_id%3A1929660384",
    bundlePrice: 102424, // Kit de 2 productos con IVA
    steps: [
      {
        step: 1,
        name: "Shampoo Revitalizante",
        instruction: "Lava tu cabello con el Shampoo utilizando la cantidad de producto equivalente al largo y volumen de tu cabello. Bate un poco antes de usar, masajea el cuero cabelludo con movimientos circulares y enjuaga con abundante agua al clima. Es normal que no haga espuma en el primer lavado; en la segunda lavada genera poca espuma porque es libre de sulfatos y su fórmula contiene un agente limpiador suave de origen vegetal."
      },
      {
        step: 2,
        name: "Loción para Moldear Revitalizante",
        instruction: "Después de lavar el cabello con el Shampoo Nouvie, seca con la toalla, bate un poco antes de usar y coloca en el centro de tu mano una porción pequeña según el largo y volumen de tu cabello. Frota por unos segundos en las manos y aplica en todo el cabello de manera uniforme sin enjuagar. Después peina a tu gusto dejando un secado natural. Aplica diariamente en tu cabello seco para moldear y como termoprotector de los rayos UV."
      }
    ],
    seoContent: {
      h1Override: "Kit Capilar Revitalizante Anticaída",
      faqs: [
        {
          question: "Si se me está cayendo el cabello o está débil, ¿cuál línea debo usar?",
          answer: "La línea Revitalizante. Contiene probióticos repletos de proteínas, calcio y vitaminas D, B2 (riboflavina), B12 y B5, además de prebióticos y yogurt, que aportan muchos beneficios para la salud del cuero cabelludo y la fibra capilar: fortalecen el folículo piloso y tienen efecto antiedad para un cabello más vigoroso y joven. Además contiene keratina hidrolizada, una proteína cuya función principal es reestructurar el cabello actuando en el acondicionamiento de la fibra capilar, dándole un aspecto saludable y suave."
        },
        {
          question: "¿Qué es la keratina hidrolizada y por qué es buena para el cabello?",
          answer: "La keratina se encuentra de forma natural en los componentes que forman nuestro cabello, y se va deteriorando poco a poco por los factores ambientales y con el paso del tiempo. Por eso es necesario un producto que ayude a regenerar las capas más externas de la fibra y recuperar el brillo natural. La keratina hidrolizada reconstruye la fibra capilar y aporta hidratación. Sus beneficios: fortalece la fibra capilar, recupera cabellos quebradizos o dañados, estimula el mejoramiento del cuero cabelludo, estimula el crecimiento del cabello y permite un moldeado perfecto."
        },
        {
          question: "¿Qué aporta el aceite de argán al cabello?",
          answer: "El aceite de argán ofrece fuerza y flexibilidad al cabello, repara las puntas secas y abiertas, elimina el frizz y prolonga la vida del color. Es el activo protagonista de esta línea, acompañado de la keratina hidrolizada y la proteína de yogurt de coco."
        },
        {
          question: "¿Este kit es solo para hombres?",
          answer: "El envase lleva la referencia For Men y el aroma Mountain Breeze está pensado para el público masculino, pero la fórmula funciona igual en cualquier cabello. Está recomendada para hombres y mujeres con problemas de caída del cabello por tratamientos médicos o enfermedad, y para cueros cabelludos sensibles."
        },
        {
          question: "¿Por qué los prebióticos de yogurt son buenos para el cabello?",
          answer: "Tienen un efecto positivo sobre las bacterias buenas del cuero cabelludo e inhiben las dañinas. Mantener esas bacterias buenas en buen estado ayuda a equilibrar el cuero cabelludo y a fortalecerlo. Además promueven el crecimiento de un cabello más grueso y fuerte, mejoran la densidad y devuelven el balance para obtener un cabello fuerte, brillante, desenredado y nutrido, con complejo de vitamina B12 para nutrir y proteger."
        },
        {
          question: "¿Por qué no debo usar shampoo con sulfatos?",
          answer: "El lauril sulfato de amonio (ALS) y el lauril sulfato de sodio (SLS) son detergentes abrasivos y uno de los componentes clásicos de casi todos los shampoos: limpian y desengrasan mediante la espuma que generan. Se usan porque son baratos y efectivos, pero en poco tiempo deterioran el cuero cabelludo y el cabello. Al eliminar la grasa también destruyen los lípidos naturales que la piel genera para defenderse, por lo que resultan irritantes. Muchos problemas de sequedad, irritación del cuero cabelludo y caspa se deben a su uso continuado. Toda la línea capilar Nouvie es libre de sulfatos."
        },
        {
          question: "¿Por qué el shampoo casi no hace espuma?",
          answer: "Porque es libre de sulfatos, que son los detergentes que producen mucha espuma en los shampoos convencionales. El Shampoo Revitalizante limpia con un agente suave de origen vegetal: es completamente normal que en el primer lavado casi no haga espuma y que en el segundo haga poca. Limpia igual, solo que sin agredir un cuero cabelludo que ya está sensible."
        },
        {
          question: "¿Se puede comprar cada producto por separado?",
          answer: "Sí. El Shampoo Revitalizante y la Loción para Moldear se venden por unidad, además del kit completo de 2 pasos. Escríbenos por WhatsApp y te confirmamos precios, disponibilidad y envío."
        }
      ]
    }
  },

  // ============================================
  // LÍNEA CAPILAR - PRODUCTOS INDIVIDUALES
  // ============================================

  // --- Línea Fortalecedora Bio Keratina (Kiwi & Açaí) ---
  {
    slug: "shampoo-suave-y-liso",
    name: "Shampoo Fortalecedor con Bio Keratina",
    tagline: "Shampoo sin sal, sin sulfatos ni parabenos. Bio Keratina que fortalece y da brillo",
    category: "capilar",
    size: "237 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "Limpia y suaviza tu cabello con el Shampoo Fortalecedor Nouvie Kiwi y Açaí, conocido también como Shampoo Sin Sal Liso y Sedoso. Formulado sin sulfatos ni sales agresivas, este shampoo de limpieza profunda y equilibrada remueve impurezas mientras aporta a la fibra capilar Bio-Keratina y Quinoa Hidrolizada. Diseñado para fortalecer el folículo piloso, estimula un crecimiento sano, combate la caspa y devuelve la vitalidad natural al cabello desde la primera aplicación, dejándolo suave, sedoso y limpio.",
    benefits: [
      "Limpieza equilibrada sin sulfatos",
      "Bio Keratina que fortalece y da brillo",
      "Reduce el frizz y el encrespado",
      "Estimula un crecimiento sano",
      "Apto para uso diario"
    ],
    features: [
      "Limpieza equilibrada: remueve residuos y grasa sin agredir el cuero cabelludo.",
      "Fórmula libre de sulfatos agresivos: cuida la salud capilar y corporal de las personas.",
      "Fortalecimiento activo: con Bio-Keratina y Quinoa Hidrolizada que previenen el quiebre, suavizan la fibra capilar y fortalecen el folículo piloso, estimulando el crecimiento del cabello."
    ],
    ingredientGroups: [
      {
        heading: "Aceites y extractos naturales",
        body: "Granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria, Bio-Keratina, Kiwi y Açaí."
      },
      {
        heading: "Componentes activos",
        body: "Quinoa hidrolizada (promueve el crecimiento, protege de la caspa e hidrata), aminoácidos de trigo y soya (fuente de vitamina E y proteínas para reparar fibras), y arginina, treonina y cerina (aminoácidos precursores de óxido nítrico para el crecimiento)."
      },
      {
        heading: "Proteína de yogurt y prebióticos",
        body: "Rica en vitaminas B6, B12, zinc, ácido láctico, calcio y magnesio para mayor flexibilidad, hidratación y propiedades anti-edad."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Shampoo - Tubo x 237 ml (Paso 1 del Kit Capilar Fortalecedor con Bio Keratina)"
    ],
    image: "/images/productos/shampoo-kiwi-front.jpg",
    socialImage: "/images/productos/shampoo-kiwi-front.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    gallery: [
      {
        src: "/images/productos/shampoo-kiwi-front.jpg",
        caption: "Shampoo Soft & Smooth · 237 ml",
        fit: "cover",
        alt: "Tubo de Shampoo NouVie Kiwi & Açaí Soft & Smooth de 237 ml, para cabello suave y liso, sobre fondo blanco",
      },
      {
        src: "/images/productos/shampoo-kiwi-back.jpg",
        caption: "Modo de uso e ingredientes en la etiqueta",
        fit: "cover",
        alt: "Parte trasera del tubo de Shampoo Kiwi & Açaí con el modo de uso, la lista de ingredientes y el sello Tested on people, not on animals",
      },
      {
        src: "/images/productos/kit-kiwi-ingredientes.jpg",
        caption: "Bio Keratina, quinoa hidrolizada y libre de sulfatos",
        fit: "cover",
        alt: "Los tres productos de la línea Kiwi & Açaí con sus activos destacados: Bio Keratina, quinoa hidrolizada y fórmula libre de sulfatos",
      },
      {
        src: "/images/productos/shampoo-kiwi-ducha.jpg",
        caption: "Kiwi y açaí, los frutos de la línea",
        fit: "cover",
        alt: "Shampoo Kiwi & Açaí sobre un mesón de mármol junto a kiwis partidos y frutos de açaí, con una ducha al fondo",
      },
      {
        src: "/images/productos/kit-kiwi-bano.jpg",
        caption: "Paso 1 del tratamiento Fortalecedor",
        fit: "cover",
        alt: "Shampoo, mascarilla y loción para moldear Nouvie Kiwi & Açaí sobre el mesón de un baño, junto a una toalla Nouvie",
      },
    ],
    video: {
      src: "https://wkuhamnniaulkxgrzndl.supabase.co/storage/v1/object/public/videos/shampoo-kiwi.mp4",
      poster: "/images/productos/shampoo-kiwi-poster.jpg",
      caption: "El Shampoo Kiwi & Açaí en la ducha, paso 1 del tratamiento",
      uploadDate: "2026-09-10",
    },
    beforeAfter: {
      before: "/images/productos/antes-kiwi-1.jpg",
      after: "/images/productos/despues-kiwi-1.jpg",
      beforeCaption: "Cabello con frizz, opaco y con las puntas abiertas",
      afterCaption: "Cabello suave, liso y con brillo",
      note: "El efecto liso y sedoso del shampoo con Bio Keratina, kiwi y açaí.",
    },
    mercadoLibreUrl:
      "https://www.mercadolibre.com.co/shampoo-fortalecedor-con-bio-keratina/up/MCOU2430421398?pdp_filters=seller_id%3A1929660384",
    badge: "237 ml",
    steps: [
      {
        step: 1,
        name: "Shampoo Fortalecedor",
        instruction: "Lava tu cabello con el Shampoo utilizando la cantidad de producto equivalente al largo y volumen de tu cabello. Bate un poco antes de usar, masajea el cuero cabelludo con movimientos circulares y enjuaga con abundante agua al clima. Es normal que no haga espuma en el primer lavado; en la segunda lavada genera poca espuma porque es libre de sulfatos y su fórmula contiene un agente limpiador suave de origen vegetal."
      }
    ],
    seoContent: {
      intro: "\"Shampoo sin sal\" es como llamamos en Colombia a los champús sin sulfatos. Los sulfatos son detergentes agresivos que limpian, pero también resecan el cabello, irritan el cuero cabelludo y aceleran la pérdida de color y brillo. El Shampoo Sin Sal Liso y Sedoso de Nouvie limpia con tensoactivos suaves derivados del coco, sin sulfatos ni parabenos, dejando el cabello hidratado, brillante y manejable desde el primer lavado. Forma parte de la línea capilar de Nouvie, marca colombiana de [productos de limpieza ecológicos en Colombia](/nosotros).",
      sections: [
        {
          heading: "Beneficios principales",
          body: "Bio Keratina natural que sella la fibra capilar y aporta brillo. Sin sulfatos ni parabenos: respeta el cuero cabelludo y prolonga el color. Alisa naturalmente y reduce el encrespado del clima húmedo colombiano. Apto para uso diario y para todo tipo de cabello, especialmente liso, ondulado y químicamente tratado. Fórmula 100% biodegradable, hecha en Colombia."
        },
        {
          heading: "Cómo usar",
          body: "Aplicar una porción del tamaño de una almendra en la raíz del cabello húmedo. Masajear con las yemas de los dedos durante 1 minuto. Dejar actuar 2 minutos para que la Bio Keratina penetre en la fibra capilar. Enjuagar con agua tibia. Repetir si es necesario. Para resultados óptimos, usar después la Mascarilla y la Loción Liso y Sedoso."
        }
      ],
      faqs: [
        {
          question: "¿Qué champú es bueno para el pelo liso?",
          answer: "Un champú sin sulfatos como el Shampoo Sin Sal Liso y Sedoso de Nouvie limpia sin resecar y mantiene la fibra capilar suave, controlando el frizz que hace que el pelo liso pierda forma. La Bio Keratina natural en su fórmula sella la cutícula para un acabado más liso y brillante."
        },
        {
          question: "¿Cómo tener el pelo suave y liso?",
          answer: "Tres pasos: lavar con un shampoo sin sal (sulfatos), aplicar una mascarilla nutritiva con keratina, y sellar con una loción protectora. La línea Liso y Sedoso de Nouvie incluye los tres productos pensados para trabajar juntos sobre cabello liso, ondulado o tratado químicamente."
        },
        {
          question: "¿Qué tipo de champú debo usar para el cabello liso?",
          answer: "Para cabello liso lo ideal es un champú suave, sin sulfatos y con activos hidratantes. El Shampoo Sin Sal Liso y Sedoso de Nouvie cumple con esto: limpia con tensoactivos derivados del coco, hidrata con Bio Keratina y deja el cabello más manejable y brillante sin apelmazar."
        },
        {
          question: "¿El shampoo sin sal realmente funciona?",
          answer: "Sí. La diferencia frente a un champú tradicional es que limpia sin agredir: no genera tanta espuma, pero sí elimina grasa y residuos. El cabello se siente más suave desde la primera aplicación y, con uso continuado, recupera brillo y resistencia. Un shampoo sin sal funciona mejor cuando se combina con mascarilla y loción de la misma línea."
        },
        {
          question: "¿Por qué no debo usar shampoo con sulfatos?",
          answer: "El lauril sulfato de amonio (ALS) y el lauril sulfato de sodio (SLS) son detergentes abrasivos y uno de los componentes clásicos de casi todos los shampoos: limpian y desengrasan mediante la espuma que generan. Se usan porque son baratos y efectivos, pero en poco tiempo deterioran el cuero cabelludo y el cabello. Al eliminar la grasa también destruyen los lípidos naturales que la piel genera para defenderse, por lo que resultan irritantes. Muchos problemas de sequedad, irritación del cuero cabelludo y caspa se deben a su uso continuado."
        },
        {
          question: "¿Qué es la Bio-Keratina y para qué sirve en el cabello?",
          answer: "La Bio-Keratina se desarrolla a partir de una mezcla especial de aminoácidos obtenidos del trigo y la soya. Esos aminoácidos son estructuras complejas de proteínas compatibles de inmediato con las proteínas presentes en el folículo piloso y la fibra capilar. El cabello está hecho de queratina, y si los aminoácidos llegan de forma insuficiente a las células del folículo, la queratina producida es defectuosa y el resultado son cabellos frágiles. Sus tres aminoácidos clave son la arginina, la lisina (estimula el colágeno y repara el cabello dañado) y la metionina (antioxidante que protege los folículos del estrés oxidativo)."
        },
        {
          question: "¿Por qué la quinoa hidrolizada es buena para el cabello?",
          answer: "La quinoa hidrolizada es esencial para un sistema nervioso saludable y para la formación de los glóbulos rojos, lo que promueve el crecimiento del cabello. En la fórmula aporta además hidratación, ayuda a proteger de la caspa y, junto con la Bio-Keratina, previene el quiebre de la hebra."
        }
      ]
    },
  },
  {
    slug: "mascarilla-suave-y-liso",
    name: "Mascarilla Fortalecedora con Bio Keratina",
    tagline: "Mascarilla Liso y Sedoso: nutrición intensiva que sella la cutícula y elimina el frizz",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "Devuelve la nutrición extrema a tu cabello con la Mascarilla Capilar Nouvie con Bio Keratina (Kiwi y Açaí) del tratamiento Fortalecedor, conocida también como Mascarilla Liso y Sedoso. Este tratamiento de alta potencia combina 8 aceites esenciales, proteínas de yogurt y prebióticos para suavizar profundamente la fibra capilar. Su fórmula rica en antioxidantes y vitaminas A y E sella las cutículas, evita el encrespamiento y el frizz, aporta una suavidad inigualable con un acabado luminoso y sedoso.",
    benefits: [
      "Nutrición profunda en solo 5 minutos",
      "Sella la cutícula y las puntas abiertas",
      "Control total del frizz",
      "Suavidad inmediata al tacto",
      "8 aceites esenciales y proteína de yogurt"
    ],
    features: [
      "Nutrición intensiva: tratamiento de acción profunda para dejar actuar en solo 5 minutos.",
      "Control total del frizz: sella las puntas abiertas y suaviza la fibra capilar.",
      "Cocktail botánico: enriquecido con 8 aceites naturales (argán, macadamia, almendras, avellanas, granada, frambuesa, mango y zanahoria) y proteína de yogurt."
    ],
    ingredientGroups: [
      {
        heading: "Aceites y extractos naturales",
        body: "Granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria, Bio-Keratina, Kiwi y Açaí."
      },
      {
        heading: "Componentes activos",
        body: "Quinoa hidrolizada (promueve el crecimiento, protege de la caspa e hidrata), aminoácidos de trigo y soya (fuente de vitamina E y proteínas para reparar fibras), y arginina, treonina y cerina (aminoácidos precursores de óxido nítrico para el crecimiento)."
      },
      {
        heading: "Proteína de yogurt y prebióticos",
        body: "Rica en vitaminas B6, B12, zinc, ácido láctico, calcio y magnesio para mayor flexibilidad, hidratación y propiedades anti-edad."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Mascarilla - Tubo x 177 ml (Paso 2 del Kit Capilar Fortalecedor con Bio Keratina)"
    ],
    image: "/images/productos/mascarilla-kiwi-front.jpg",
    socialImage: "/images/productos/mascarilla-kiwi-front.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    gallery: [
      {
        src: "/images/productos/mascarilla-kiwi-front.jpg",
        caption: "Hair Masque Soft & Smooth · 177 ml",
        fit: "cover",
        alt: "Tubo de Mascarilla capilar NouVie Kiwi & Açaí Soft & Smooth de 177 ml, para cabello suave y liso, sobre fondo blanco",
      },
      {
        src: "/images/productos/mascarilla-kiwi-back.jpg",
        caption: "Modo de uso e ingredientes en la etiqueta",
        fit: "cover",
        alt: "Parte trasera del tubo de Mascarilla Kiwi & Açaí con el modo de uso, la lista de ingredientes y el sello Tested on people, not on animals",
      },
      {
        src: "/images/productos/mascarilla-kiwi-tocador.jpg",
        caption: "Nutrición profunda en 5 minutos",
        fit: "cover",
        alt: "Mascarilla capilar Kiwi & Açaí sobre un tocador de madera, junto a una toalla blanca, un peine y un espejo",
      },
      {
        src: "/images/productos/mascarilla-kiwi-bano.jpg",
        caption: "Paso 2 del tratamiento Fortalecedor",
        fit: "cover",
        alt: "Mascarilla capilar Kiwi & Açaí sobre el mesón de mármol de un baño, junto a una toalla blanca y un peine de madera",
      },
    ],
    video: {
      src: "https://wkuhamnniaulkxgrzndl.supabase.co/storage/v1/object/public/videos/mitos-verdades-kiwi.mp4",
      poster: "/images/productos/mascarilla-kiwi-poster.jpg",
      caption: "Mitos y verdades con Marianella: ¿kiwi para el cabello?",
      uploadDate: "2026-09-10",
    },
    beforeAfter: {
      composite: "/images/productos/mascarilla-kiwi-antes-despues.jpg",
      note: "Cabello con frizz y opaco a la izquierda; suave, sellado y con brillo a la derecha.",
    },
    mercadoLibreUrl:
      "https://www.mercadolibre.com.co/mascarilla-fortalecedora-con-bio-keratina/up/MCOU2414130797?pdp_filters=seller_id%3A1929660384",
    badge: "177 ml",
    seoContent: {
      faqs: [
        {
          question: "¿Cada cuánto debo usar la mascarilla capilar?",
          answer: "De 2 a 3 veces por semana, siempre inmediatamente después del shampoo. No hace falta usarla en cada lavado: la mascarilla es un tratamiento de nutrición profunda, y con esa frecuencia el cabello mantiene la suavidad sin apelmazarse. Se deja actuar 5 minutos y se enjuaga con abundante agua preferiblemente fría."
        },
        {
          question: "¿Cómo se aplica la mascarilla?",
          answer: "Después del shampoo, retira el exceso de agua y bate un poco el producto antes de usar. Deposita una porción acorde al largo y volumen de tu cabello en la palma de la mano y frota unos segundos. Aplica de manera uniforme de medios a puntas, nunca en la raíz. Deja actuar 5 minutos, desenreda con los dedos y enjuaga con abundante agua fría, que ayuda a sellar la cutícula."
        },
        {
          question: "Si mi cabello tiene frizz y está opaco, ¿cuál línea debo usar?",
          answer: "La línea Fortalecedora con Bio-Keratina, conocida también como Liso y Sedoso. La Bio-Keratina se desarrolla a partir de una mezcla especial de aminoácidos obtenidos del trigo y la soya, estructuras complejas de proteínas compatibles de inmediato con las proteínas presentes en el folículo piloso y la fibra capilar. El uso constante mejora y suaviza la fibra capilar, dando un cabello moldeable, con brillo y sin frizz."
        },
        {
          question: "¿La mascarilla reemplaza al acondicionador?",
          answer: "Sí. La Mascarilla Fortalecedora es un tratamiento de nutrición profunda que cumple la función del acondicionador y va más allá: sus 8 aceites esenciales, la proteína de yogurt y los prebióticos actúan dentro de la fibra capilar, no solo en la superficie. Por eso se deja actuar 5 minutos en lugar de enjuagarse de inmediato."
        },
        {
          question: "¿Sirve para cabello tinturado o con alisado?",
          answer: "Sí. La fórmula es libre de sulfatos, de sistemas salinos duros y de colorantes, que son justamente los ingredientes que desgastan el color y debilitan los alisados. Es segura para cabello tinturado, con mechas o con tratamientos de alisado, y ayuda a que el tono dure más tiempo."
        },
        {
          question: "¿Por qué la proteína de yogurt y los prebióticos son buenos para el cabello?",
          answer: "La proteína del yogurt natural fortalece la fibra capilar, reduce la rotura y estimula el crecimiento saludable de los folículos pilosos. Aporta vitaminas B6 y B12, zinc que fortalece el cuero cabelludo, ácido láctico con propiedades hidratantes que lo convierten en un gran acondicionador natural, y calcio y magnesio para nutrir los folículos. Los prebióticos favorecen las bacterias buenas del cuero cabelludo e inhiben las dañinas, mejorando la densidad y el brillo."
        }
      ]
    },
    steps: [
      {
        step: 2,
        name: "Mascarilla Fortalecedora",
        instruction: "Aplica la Mascarilla inmediatamente después del Shampoo. Retira el exceso de agua, bate un poco antes de usar y deposita una porción de acuerdo al largo y volumen de tu cabello en la palma de tu mano, frotando por unos segundos. Aplica sobre el cabello de manera uniforme de medios a puntas, deja actuar por 5 minutos y enjuaga con abundante agua preferiblemente fría. Aplica de 2 a 3 veces por semana."
      }
    ]
  },
  {
    slug: "locion-suave-y-liso",
    name: "Loción para Moldear Fortalecedora con Bio Keratina (Molding)",
    tagline: "Loción Liso y Sedoso: termoprotector sin enjuague que desenreda, moldea y da brillo",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "Protege y define tu peinado diario con la Loción para Moldear Nouvie Bio Keratina Kiwi & Açaí del tratamiento Fortalecedor, conocida también como Loción Liso y Sedoso. Este termoprotector no requiere enjuague, protege la fibra capilar contra los rayos UV y los daños causados por planchas y secadores. Su fórmula ligera facilita el peinado, moldea el cabello sin dejar sensación pesada ni grasosa, suaviza la fibra capilar, dando brillo y dejándolo sedoso. Ideal para usar antes y después del baño en mar y piscina para prevenir el daño causado por el cloro y la sal.",
    benefits: [
      "Termoprotector sin enjuague",
      "Control del frizz todo el día",
      "Desenreda y facilita el peinado",
      "Protege del cloro y el agua de mar",
      "Acabado brillante sin residuos"
    ],
    features: [
      "Termoprotector sin enjuague: protege el cabello del calor de secadores y planchas, y de la radiación UV.",
      "Fijación flexible: modela y define el peinado manteniendo el movimiento natural.",
      "Protección ambiental: escudo eficaz contra el salitre marino y el cloro de la piscina."
    ],
    ingredientGroups: [
      {
        heading: "Aceites y extractos naturales",
        body: "Granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria, Bio-Keratina, Kiwi y Açaí."
      },
      {
        heading: "Componentes activos",
        body: "Quinoa hidrolizada (promueve el crecimiento, protege de la caspa e hidrata), aminoácidos de trigo y soya (fuente de vitamina E y proteínas para reparar fibras), y arginina, treonina y cerina (aminoácidos precursores de óxido nítrico para el crecimiento)."
      },
      {
        heading: "Proteína de yogurt y prebióticos",
        body: "Rica en vitaminas B6, B12, zinc, ácido láctico, calcio y magnesio para mayor flexibilidad, hidratación y propiedades anti-edad."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Loción para Moldear - Tubo x 177 ml (Paso 3 del Kit Capilar Fortalecedor con Bio Keratina)"
    ],
    image: "/images/productos/locion-kiwi-front.jpg",
    socialImage: "/images/productos/locion-kiwi-front.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    gallery: [
      {
        src: "/images/productos/locion-kiwi-front.jpg",
        caption: "Natural Molding Lotion · 177 ml",
        fit: "cover",
        alt: "Tubo de Loción para moldear NouVie Kiwi & Açaí Natural Molding de 177 ml, con aceite de argán y libre de parabenos, sobre fondo blanco",
      },
      {
        src: "/images/productos/locion-kiwi-pizarra.jpg",
        caption: "Con aceite de argán, kiwi y açaí",
        fit: "cover",
        alt: "Loción para moldear Kiwi & Açaí sobre una encimera de pizarra oscura, junto a un cuenco dorado con kiwi y frutos de açaí",
      },
      {
        src: "/images/productos/locion-kiwi-tocador.jpg",
        caption: "Termoprotector sin enjuague, uso diario",
        fit: "cover",
        alt: "Loción para moldear Kiwi & Açaí sobre un tocador de madera con espejo redondo, una toalla y un peine de madera",
      },
      {
        src: "/images/productos/locion-kiwi-bano.jpg",
        caption: "Paso 3 del tratamiento Fortalecedor",
        fit: "cover",
        alt: "Loción para moldear Kiwi & Açaí sobre el mesón de mármol de un baño, junto a una toalla blanca y un peine de madera",
      },
    ],
    mercadoLibreUrl:
      "https://www.mercadolibre.com.co/locion-para-moldear-fortalecedora-con-bio-keratina-molding/up/MCOU5082779047?pdp_filters=seller_id%3A1929660384",
    badge: "177 ml",
    steps: [
      {
        step: 3,
        name: "Loción para Moldear Fortalecedora",
        instruction: "Después de lavar el cabello con el Shampoo y la Mascarilla Nouvie, seca con la toalla, bate un poco antes de usar y coloca en el centro de tu mano una porción pequeña según el largo y volumen de tu cabello. Frota por unos segundos en las manos y aplica en todo el cabello de manera uniforme sin enjuagar. Después peina a tu gusto dejando un secado natural o usando secador eléctrico, plancha o rizadora. Aplica diariamente en tu cabello seco para moldear y como termoprotector de los rayos UV."
      }
    ],
    seoContent: {
      h1Override: "Loción para Moldear Fortalecedora",
      faqs: [
        {
          question: "¿Cómo se usa la loción para moldear?",
          answer: "Después de lavar el cabello con el Shampoo y la Mascarilla Nouvie, seca con la toalla y bate un poco el producto antes de usar. Coloca en el centro de tu mano una porción pequeña según el largo y volumen de tu cabello, frota unos segundos entre las manos y aplica de manera uniforme en todo el cabello. No se enjuaga. Después peina a tu gusto, dejando un secado natural o usando secador, plancha o rizadora."
        },
        {
          question: "¿Hay que enjuagarla?",
          answer: "No. Es un tratamiento sin enjuague: se aplica sobre el cabello húmedo o seco y se deja. Esa es justamente la función de la loción, quedarse en la fibra capilar formando la capa que protege del calor y de los rayos UV durante el día."
        },
        {
          question: "¿Protege del calor de la plancha y el secador?",
          answer: "Sí, es un termoprotector. Su fórmula protege la fibra capilar del calor de secadores y planchas, y también de la radiación UV. Por eso se recomienda aplicarla siempre antes de usar herramientas de calor, y a diario sobre el cabello seco para moldear y proteger del sol."
        },
        {
          question: "¿Sirve para ir a la playa o la piscina?",
          answer: "Sí, es ideal para usar antes y después del baño en mar y piscina. Actúa como escudo frente al salitre marino y el cloro, que son dos de las causas más frecuentes de resequedad y pérdida de color en el cabello."
        },
        {
          question: "¿Qué aporta el aceite de argán al cabello?",
          answer: "El aceite de argán ofrece fuerza y flexibilidad al cabello, repara las puntas secas y abiertas, elimina el frizz y prolonga la vida del color. En esta loción acompaña a la Bio-Keratina, que suaviza la fibra capilar y facilita el moldeado."
        },
        {
          question: "¿Deja el cabello grasoso o pesado?",
          answer: "No. Su fórmula es ligera: facilita el peinado y moldea el cabello sin dejar sensación pesada ni grasosa, y sin residuos. La clave está en la cantidad: una porción pequeña acorde al largo y volumen de tu cabello es suficiente."
        }
      ]
    }
  },

  // --- Línea Reparación Intensa (Manteca de Karité - Royal Honey & Melon) ---
  {
    slug: "shampoo-reparacion-intensa",
    name: "Shampoo Reparación Intensa con Manteca de Karité",
    tagline: "Shampoo sin sal que inicia la reparación desde el lavado, con Manteca de Karité",
    category: "capilar",
    size: "237 ml",
    parentTreatmentSlug: "tratamiento-reparacion-intensa",
    description:
      "Inicia la regeneración de tu cabello desde el lavado. El Shampoo Nouvie Reparación Intensa con manteca de karité (Royal Honey & Melon) limpia suavemente mientras humecta cabellos secos o maltratados. Formulado con Manteca de Karité, el acondicionador de la madre naturaleza, y libre de químicos agresivos, prepara la fibra capilar para recibir los nutrientes, reparando tu cabello del daño causado por tintes, calor y rayos UV.",
    benefits: [
      "Inicia la reparación desde el lavado",
      "Manteca de Karité ultra humectante",
      "Ideal para cabello dañado o teñido",
      "Calma el cuero cabelludo irritado",
      "Ayuda a reducir la caída"
    ],
    features: [
      "Fórmula segura: 100% libre de sulfatos, sistemas salinos duros y parabenos.",
      "Enriquecido con Manteca de Karité, Proteína de Yogurt y Prebióticos (vitaminas B6, B12, zinc y ácido láctico) para calmar el cuero cabelludo irritado.",
      "Incorpora aceites naturales de granada, frambuesa, almendras, avellana, macadamia, argán, manteca de semilla de mango y extracto de raíz para iniciar la hidratación desde la raíz.",
      "Ayuda a reducir la caída y estimula un crecimiento sano."
    ],
    ingredientGroups: [
      {
        heading: "Aceites y extractos naturales",
        body: "Granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria, Manteca de Karité, Miel y Melón."
      },
      {
        heading: "Componentes activos",
        body: "Quinoa hidrolizada (promueve el crecimiento, protege de la caspa e hidrata), aminoácidos de trigo y soya (fuente de vitamina E y proteínas para reparar fibras), y arginina, treonina y cerina (aminoácidos precursores de óxido nítrico para el crecimiento)."
      },
      {
        heading: "Proteína de yogurt y prebióticos",
        body: "Rica en vitaminas B6, B12, zinc, ácido láctico, calcio y magnesio para mayor flexibilidad, hidratación y propiedades anti-edad."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Shampoo - Tubo x 237 ml (Paso 1 del Kit Capilar Reparación Intensa con manteca de Karité)"
    ],
    image: "/images/productos/shampoo-karite-front.jpg",
    socialImage: "/images/productos/shampoo-karite-front.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    badge: "237 ml",
    steps: [
      {
        step: 1,
        name: "Shampoo Reparación Intensa",
        instruction: "Lava tu cabello con el Shampoo utilizando la cantidad de producto equivalente al largo y volumen de tu cabello. Bate un poco antes de usar, masajea el cuero cabelludo con movimientos circulares y enjuaga con abundante agua tibia o al clima. Es normal que no haga espuma en el primer lavado; en la segunda lavada genera poca espuma porque es libre de sulfatos y su fórmula contiene un agente limpiador suave de origen vegetal."
      }
    ]
  },
  {
    slug: "mascarilla-reparacion-intensa",
    name: "Mascarilla Reparación Intensa con Manteca de Karité",
    tagline: "Tratamiento de choque para cabello quebradizo, maltratado por tintes y calor",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-reparacion-intensa",
    description:
      "El tratamiento de reparación definitivo para cabellos quebradizos y maltratados por tintes y procesos de calor. La Mascarilla Nouvie con Manteca de Karité devuelve la flexibilidad y sella las puntas abiertas mediante una hidratación profunda. Su fórmula concentrada actúa en la fibra capilar para reparar el daño químico y térmico, dejando el cabello suave, brillante y fácil de desenredar.",
    benefits: [
      "Reconstrucción profunda de la fibra",
      "Sella las puntas abiertas",
      "Devuelve flexibilidad y elasticidad",
      "Brillo intenso y duradero",
      "Segura para cabello tinturado o alisado"
    ],
    features: [
      "Nutrición intensiva con 8 aceites esenciales: granada, frambuesa, almendras, avellanas, macadamia, argán, mango y raíz de zanahoria.",
      "Alto poder de humectación gracias a la Manteca de Karité.",
      "Aporta flexibilidad extrema por su complejo de aminoácidos (arginina, treonina, cerina).",
      "Fórmula segura para cabellos tinturados o con alisados (sin sal ni parabenos)."
    ],
    ingredientGroups: [
      {
        heading: "Aceites y extractos naturales",
        body: "Granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria, Manteca de Karité, Miel y Melón."
      },
      {
        heading: "Componentes activos",
        body: "Quinoa hidrolizada (promueve el crecimiento, protege de la caspa e hidrata), aminoácidos de trigo y soya (fuente de vitamina E y proteínas para reparar fibras), y arginina, treonina y cerina (aminoácidos precursores de óxido nítrico para el crecimiento)."
      },
      {
        heading: "Proteína de yogurt y prebióticos",
        body: "Rica en vitaminas B6, B12, zinc, ácido láctico, calcio y magnesio para mayor flexibilidad, hidratación y propiedades anti-edad."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Mascarilla - Tubo x 177 ml (Paso 2 del Kit Capilar Reparación Intensa con manteca de Karité)"
    ],
    image: "/images/productos/mascarilla-karite-front.jpg",
    socialImage: "/images/productos/mascarilla-karite-front.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    badge: "177 ml",
    steps: [
      {
        step: 2,
        name: "Mascarilla Reparación Intensa",
        instruction: "Aplica la Mascarilla inmediatamente después del Shampoo. Retira el exceso de agua, bate un poco antes de usar y deposita una porción de acuerdo al largo y volumen de tu cabello en la palma de tu mano, frotando por unos segundos. Aplica sobre el cabello de manera uniforme de medios a puntas, deja actuar por 5 minutos y enjuaga con abundante agua preferiblemente fría. Aplica de 2 a 3 veces por semana."
      }
    ]
  },
  {
    slug: "locion-reparacion-intensa",
    name: "Loción para Moldear Reparación Intensa (Molding) con Manteca de Karité",
    tagline: "Tu escudo protector diario: termoprotector sin enjuague, anti frizz y cuidado del color",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-reparacion-intensa",
    description:
      "Tu escudo protector diario. La Loción Moldeadora Nouvie es un tratamiento termoprotector que no requiere de enjuague, sella la hidratación y blinda tu cabello contra el calor (secadores y planchas), los rayos UV y la contaminación. Define tu estilo natural, elimina el frizz, define tus rizos y prolonga la duración del tinte sin dejar sensación pesada y grasosa. Ideal para usar antes y después del baño en mar y piscina para prevenir el daño causado por el cloro y la sal.",
    benefits: [
      "Termoprotector activo sin enjuague",
      "Elimina el frizz y define los rizos",
      "Prolonga la duración del tinte",
      "Protege del cloro y el agua de mar",
      "Sin sensación pesada ni grasosa"
    ],
    features: [
      "Termoprotector activo y barrera contra factores ambientales.",
      "Ideal para proteger el cabello antes y después del baño de mar o piscina (protege de sales marinas y sol).",
      "Ayuda a definir rizos y moldear el cabello por más tiempo.",
      "Cuidado del color. Fórmula ligera con Manteca de Karité y aceites antioxidantes (frambuesa, granada)."
    ],
    ingredientGroups: [
      {
        heading: "Aceites y extractos naturales",
        body: "Granada, frambuesa, almendras, avellanas, macadamia, argán, semilla de mango y raíz de zanahoria, Manteca de Karité, Miel y Melón."
      },
      {
        heading: "Componentes activos",
        body: "Quinoa hidrolizada (promueve el crecimiento, protege de la caspa e hidrata), aminoácidos de trigo y soya (fuente de vitamina E y proteínas para reparar fibras), y arginina, treonina y cerina (aminoácidos precursores de óxido nítrico para el crecimiento)."
      },
      {
        heading: "Proteína de yogurt y prebióticos",
        body: "Rica en vitaminas B6, B12, zinc, ácido láctico, calcio y magnesio para mayor flexibilidad, hidratación y propiedades anti-edad."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Loción para Moldear - Tubo x 177 ml (Paso 3 del Kit Capilar Reparación Intensa con manteca de Karité)"
    ],
    image: "/images/productos/locion-karite-front.jpg",
    socialImage: "/images/productos/locion-karite-front.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    badge: "177 ml",
    steps: [
      {
        step: 3,
        name: "Loción para Moldear Reparación Intensa",
        instruction: "Después de lavar el cabello con el Shampoo y la Mascarilla Nouvie, seca con la toalla, bate un poco antes de usar y coloca en el centro de tu mano una porción pequeña según el largo y volumen de tu cabello. Frota por unos segundos en las manos y aplica en todo el cabello de manera uniforme sin enjuagar. Después peina a tu gusto dejando un secado natural o usando secador eléctrico, plancha o rizadora. Aplica diariamente en tu cabello seco para moldear y como termoprotector de los rayos UV."
      }
    ],
    seoContent: {
      h1Override: "Loción para Moldear Reparación Intensa"
    }
  },

  // --- Línea Revitalizante Anticaída (Aceite de Argán - Mountain Breeze) ---
  {
    slug: "shampoo-revitalizante",
    name: "Shampoo Revitalizante Anticaída con Prebióticos, Aceite de Argán y Keratina Hidrolizada",
    tagline: "Limpieza sin sulfatos que fortalece el folículo y ayuda a frenar la caída",
    category: "capilar",
    size: "237 ml",
    parentTreatmentSlug: "tratamiento-revitalizante",
    description:
      "Limpia y revitaliza profundamente el cuero cabelludo con el Shampoo Revitalizante de Nouvie. Su fórmula especializada sin sulfatos ni parabenos está enriquecida con Prebióticos, Proteína de Yogurt, Keratina Hidrolizada y Aceite de Argán para combatir la caída del cabello. Fortalece el folículo piloso y estimula el crecimiento de fibras más fuertes, recomendado para cueros cabelludos sensibles. Ideal para hombres y mujeres con problemas de caída de cabello por tratamientos médicos o enfermedad. Es completamente normal que no genere abundante espuma en la primera lavada debido a su formulación libre de sulfatos agresivos.",
    benefits: [
      "Combate la caída del cabello",
      "Fortalece el folículo piloso",
      "Aceite de Argán y Keratina Hidrolizada",
      "Alivia la caspa y el picor",
      "Apto para cuero cabelludo sensible"
    ],
    features: [
      "Limpieza equilibrada sin sulfatos: remueve impurezas y grasa manteniendo el pH neutro.",
      "Fortalecimiento del folículo: estimula el crecimiento de cabello nuevo y previene la caída. Repara cabellos quebradizos y dañados.",
      "Alivio contra la caspa y el picor: calma la irritación y previene la resequedad extrema. Estimula el mejoramiento del cuero cabelludo y la fibra capilar."
    ],
    ingredientGroups: [
      {
        heading: "Ingredientes y activos clave",
        body: "Aceite de argán, quinoa y keratina hidrolizada, proteína de yogurt de coco y prebióticos, extracto de raíz de zanahoria y aceites esenciales de granada, frambuesa, almendras, avellanas, macadamia y mango."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Shampoo Revitalizante - Tubo x 237 ml (Paso 1 del Kit Capilar Revitalizante Anticaída con Prebióticos, Aceite de Argán y Keratina Hidrolizada)"
    ],
    image: "/images/productos/shampoo-revitalizante-front.jpg",
    socialImage: "/images/productos/shampoo-revitalizante-front.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    badge: "237 ml",
    steps: [
      {
        step: 1,
        name: "Shampoo Revitalizante",
        instruction: "Lava tu cabello con el Shampoo utilizando la cantidad de producto equivalente al largo y volumen de tu cabello. Bate un poco antes de usar, masajea el cuero cabelludo con movimientos circulares y enjuaga con abundante agua al clima. Es normal que no haga espuma en el primer lavado; en la segunda lavada genera poca espuma porque es libre de sulfatos y su fórmula contiene un agente limpiador suave de origen vegetal."
      }
    ],
    seoContent: {
      h1Override: "Shampoo Revitalizante Anticaída"
    }
  },
  {
    slug: "locion-revitalizante",
    name: "Loción para Moldear Revitalizante Anticaída con Prebióticos, Aceite de Argán y Keratina Hidrolizada (Molding)",
    tagline: "Moldea, nutre y protege sin enjuague. Estimula el crecimiento del cabello",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-revitalizante",
    description:
      "Modela, nutre y protege tu peinado diario con la Loción Moldeadora del tratamiento Revitalizante. Este tratamiento, que no requiere enjuague, combina Aceite de Argán, keratina hidrolizada, proteína de yogurt de coco, prebióticos y extractos botánicos: moldea y da flexibilidad a tu cabello mientras lo protege de los rayos UV. Su fórmula ligera aporta vitaminas, minerales y ácidos grasos esenciales que previenen el envejecimiento capilar prematuro, controlan el frizz y mantienen el cabello con un aspecto sano, manejable y vigoroso todo el día.",
    benefits: [
      "Fijación y moldeado natural",
      "Nutrición intensiva sin enjuague",
      "Estimula el crecimiento del cabello",
      "Protección antioxidante y UV",
      "Sin residuos ni efecto graso"
    ],
    features: [
      "Fijación y moldeado natural: define el peinado sin dejar sensación pesada ni grasosa.",
      "Nutrición intensiva sin enjuague: sella la hidratación y repara la fibra capilar gracias a su alto contenido de Aceite de Argán y keratina hidrolizada.",
      "Propiedades antioxidantes: protege el cabello frente a los radicales libres y factores ambientales dañinos."
    ],
    ingredientGroups: [
      {
        heading: "Ingredientes y activos clave",
        body: "Aceite de argán, quinoa hidrolizada, keratina hidrolizada, proteína de yogurt, prebióticos, aminoácidos de trigo y soya, extracto de raíz de zanahoria y aceites esenciales de granada, frambuesa, almendras, avellanas, macadamia y mango."
      }
    ],
    freeOfClaims: [
      "Libre de sulfatos y parabenos",
      "No testeado en animales",
      "Libre de sistemas salinos duros y dañinos",
      "Libre de colorantes y fragancias sintéticas"
    ],
    includes: [
      "1x Loción para Moldear - Tubo x 177 ml (Paso 2 del Kit Capilar Revitalizante Anticaída con Prebióticos, Aceite de Argán y Keratina Hidrolizada)"
    ],
    image: "/images/productos/locion-revitalizante-front.jpg",
    socialImage: "/images/productos/locion-revitalizante-front.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    badge: "177 ml",
    steps: [
      {
        step: 2,
        name: "Loción para Moldear Revitalizante",
        instruction: "Después de lavar el cabello con el Shampoo Nouvie, seca con la toalla, bate un poco antes de usar y coloca en el centro de tu mano una porción pequeña según el largo y volumen de tu cabello. Frota por unos segundos en las manos y aplica en todo el cabello de manera uniforme sin enjuagar. Después peina a tu gusto dejando un secado natural. Aplica diariamente en tu cabello seco para moldear y como termoprotector de los rayos UV. Ideal para usar antes y después del baño de mar y piscina para prevenir el daño causado por el cloro y la sal."
      }
    ],
    seoContent: {
      h1Override: "Loción para Moldear Revitalizante"
    }
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
    image: "/images/productos/kit-lavavajilla-trans.webp",
    socialImage: "/images/productos/kit-lavavajilla.png",
    gallery: [
      {
        src: "/images/productos/kit-lavavajilla-trans.webp",
        caption: "Kit de inicio con dosificador",
        fit: "contain",
        alt: "Kit de Inicio Lavavajilla: botella de 50 ml de detergente neutro concentrado junto al dosificador de 500 ml",
      },
      {
        src: "/images/productos/kit-lavavajilla-insite.jpg",
        caption: "Lava frutas y verduras",
        fit: "cover",
        alt: "Detergente Neutro Nouvie junto a un bowl con agua donde se lavan fresas, manzanas y lechuga sobre un mesón de madera",
      },
    ],
    badge: "Kit completo",
    refillSlug: "repuesto-lavavajilla",
    bundlePrice: 17000,
    specs: [
      { label: "Contenido", value: "50 ml" },
      { label: "Rendimiento", value: "500 ml diluido" },
      { label: "Incluye", value: "Dosificador" }
    ],
    steps: [
      {
        step: 1,
        name: "Agrega agua",
        instruction: "Llena el dosificador con agua hasta la franja negra de medida."
      },
      {
        step: 2,
        name: "Agrega el concentrado",
        instruction: "Llena con el producto el espacio del recuadro transparente."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar. Una botella de 50 ml prepara un dosificador de 500 ml."
      }
    ],
    dilutionTable: [
      { uso: "Lavaplatos", cantidad: "", agua: "" },
      { uso: "Lava vajilla a máquina (aplica producto diluido en la caja más pequeña)", cantidad: "", agua: "" },
      { uso: "Lavar frutas y verduras", cantidad: "", agua: "" }
    ],
    seoContent: {
      intro: "El Kit de Inicio Lavavajilla es la forma más sencilla de empezar con Nouvie: una botella de 50 ml de detergente neutro concentrado y el dosificador de 500 ml donde se prepara. Con una sola botella alcanzas un dosificador completo, y el mismo producto te sirve para lavar la vajilla a mano o en lavavajillas, lavar frutas y verduras y hasta lavar ropa fina y de bebé. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "No necesita enjuague y ahorra agua",
          body: "Los productos Nouvie están diseñados para que no tengas que enjuagarlos. Al secar dejan sobre la superficie una capa de protección que evita que se adhiera la suciedad, de modo que la siguiente limpieza cuesta menos esfuerzo y menos agua. Por eso decimos que cada gota cuenta: un concentrado de 50 ml hace el trabajo de una botella entera de detergente convencional y reduce a la vez el consumo de agua y el plástico que termina en la basura."
        }
      ],
      audienceBlocks: [
        {
          heading: "Para lavar frutas y verduras",
          body: "Al ser libre de sulfatos, no tóxico y no corrosivo, este detergente sirve para lavar frutas y verduras antes de consumirlas. Aplica unos puff del producto ya preparado en un bowl con agua y sumerge los alimentos. Es la razón por la que muchas familias lo eligen sobre un lavaplatos convencional."
        },
        {
          heading: "Para ropa fina y de bebé",
          body: "El mismo concentrado funciona como detergente y como suavizante de ropa fina y de bebé: una tapa en la lavadora o en un recipiente para lavado a mano. Su pH neutro cuida las fibras delicadas y no deja fragancias ni colorantes sobre la ropa que está en contacto con la piel del bebé."
        }
      ],
      faqs: [
        {
          question: "¿Qué incluye el Kit de Inicio Lavavajilla?",
          answer: "Incluye una botella de 50 ml de detergente neutro concentrado y la botella dosificadora de 500 ml donde se prepara el producto. El dosificador trae impresas las marcas de medida, así que no necesitas calcular proporciones ni comprar nada más para empezar."
        },
        {
          question: "¿Cuánto rinde una botella de 50 ml?",
          answer: "Una botella de 50 ml sirve para preparar un dosificador completo de 500 ml de producto listo para usar. Cuando se termina puedes comprar solo el repuesto y reutilizar el mismo dosificador, lo que reduce el gasto y el plástico."
        },
        {
          question: "¿Sirve para lavavajillas de máquina?",
          answer: "Sí. Se aplica el producto ya diluido en la caja dispensadora más pequeña de la máquina. El mismo dosificador que preparas para lavar a mano te sirve para el lavavajillas."
        },
        {
          question: "¿Es seguro para lavar frutas y verduras?",
          answer: "Sí. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo, por lo que puede usarse para lavar frutas y verduras. Se recomienda aplicar unos puff del producto preparado en un bowl con agua y sumergir los alimentos."
        }
      ]
    }
  },
  {
    slug: "kit-limpia-vidrios",
    name: "Kit de Inicio Limpia Vidrios 30 ml",
    tagline: "Rinde para preparar 12 dosificadores de 500 ml",
    category: "hogar",
    description: "Preparación: Este producto se vende con botella dosificadora. Llena con agua el dosificador y agregar una tapa del producto (2.5 ml), mezclar un poco y listo para usar. Una botella de 30 ml sirve para preparar 12 dosificadores de 500 ml.",
    benefits: [
      "Kit completo con atomizador",
      "Secado rápido sin manchas",
      "Alto rendimiento",
      "Fácil aplicación",
      "Biodegradable"
    ],
    image: "/images/productos/kit-limpia-vidrios-trans.webp",
    socialImage: "/images/productos/kit-limpia-vidrios.png",
    gallery: [
      {
        src: "/images/productos/kit-limpia-vidrios-trans.webp",
        caption: "Kit de inicio con dosificador",
        fit: "contain",
        alt: "Kit de Inicio Limpia Vidrios: botella de concentrado junto al dosificador de 500 ml para vidrios y limpieza de acero",
      },
      {
        src: "/images/productos/kit-limpia-vidrios-insite.jpg",
        caption: "Preplanchado de ropa",
        fit: "cover",
        alt: "Limpia Vidrios Nouvie sobre una tabla de planchar junto a una camisa blanca lista para el preplanchado de ropa",
      },
    ],
    badge: "Kit completo",
    refillSlug: "repuesto-limpia-vidrios",
    steps: [
      {
        step: 1,
        name: "Llena el dosificador",
        instruction: "Llena el dosificador de 500 ml con agua."
      },
      {
        step: 2,
        name: "Agrega una tapa",
        instruction: "Agrega una tapa del producto (2,5 ml)."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar. Una botella de 30 ml prepara 12 dosificadores de 500 ml."
      }
    ],
    bundlePrice: 16000,
    specs: [
      { label: "Contenido", value: "30 ml" },
      { label: "Rendimiento", value: "6 L diluido" },
      { label: "Incluye", value: "Dosificador" }
    ],
    dilutionTable: [
      { uso: "Limpia vidrios y espejos", cantidad: "", agua: "" },
      { uso: "Abrillanta superficies metálicas (acero, aluminio)", cantidad: "", agua: "" },
      { uso: "Pre planchado para ropa de todo tipo", cantidad: "", agua: "" }
    ],
    seoContent: {
      intro: "El Kit de Inicio Limpia Vidrios es el de mayor rendimiento de la línea: una botella de 30 ml de concentrado y el dosificador de 500 ml donde se prepara. Una sola tapa de 2,5 ml por dosificador significa que la botella alcanza para doce preparaciones. Limpia vidrios y espejos sin dejar trazos del trapo, abrillanta superficies metálicas de acero y aluminio y sirve como preplanchado para ropa de todo tipo. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "No necesita enjuague y ahorra agua",
          body: "Los productos Nouvie están diseñados para que no tengas que enjuagarlos. Al secar dejan sobre la superficie una capa de protección que evita que se adhiera la suciedad, así que los vidrios se vuelven a ensuciar más despacio y la siguiente limpieza cuesta menos agua. Por eso cada gota cuenta: una botella de 30 ml prepara seis litros de producto listo para usar y reemplaza varios atomizadores desechables del supermercado."
        }
      ],
      audienceBlocks: [
        {
          heading: "Para vidrios, espejos y acero",
          body: "Limpia vidrios, cristales y espejos sin dejar marcas ni trazos del trapo, con secado rápido. La misma preparación abrillanta superficies metálicas de acero inoxidable y aluminio, como electrodomésticos, campanas y grifería, sin dejar película grasosa."
        },
        {
          heading: "Para preplanchado de ropa",
          body: "Aplicado con atomizador sobre la prenda antes de planchar, relaja las fibras y facilita el planchado de ropa de todo tipo. Se usa la misma dilución que para vidrios: una tapa del producto en el dosificador lleno de agua."
        }
      ],
      faqs: [
        {
          question: "¿Qué incluye el Kit de Inicio Limpia Vidrios?",
          answer: "Incluye una botella de 30 ml de limpia vidrios concentrado y la botella dosificadora de 500 ml donde se prepara el producto. Con el kit ya tienes todo lo necesario para empezar."
        },
        {
          question: "¿Cuánto rinde una botella de 30 ml?",
          answer: "Rinde para preparar 12 dosificadores de 500 ml, es decir seis litros de producto listo para usar. Se llena el dosificador con agua y se agrega una sola tapa del producto, equivalente a 2,5 ml."
        },
        {
          question: "¿Deja marcas en los vidrios?",
          answer: "No. Está formulado para secar rápido y no dejar trazos del trapo, que es la marca que suelen dejar los limpiadores convencionales. Sirve igual en vidrios, cristales y espejos."
        },
        {
          question: "¿Sirve para acero inoxidable?",
          answer: "Sí. Abrillanta superficies metálicas de acero inoxidable y aluminio sin dejar película grasosa, por lo que puede usarse en electrodomésticos, campanas extractoras y grifería."
        }
      ]
    }
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
    image: "/images/productos/kit-desengrasante-trans.webp",
    socialImage: "/images/productos/kit-desengrasante.png",
    gallery: [
      {
        src: "/images/productos/kit-desengrasante-trans.webp",
        caption: "Kit de inicio con dosificador",
        fit: "contain",
        alt: "Kit de Inicio Desengrasante: botella de 60 ml de concentrado junto al dosificador de 500 ml de alto poder desengrasante para cocina y baños",
      },
      {
        src: "/images/productos/kit-desengrasante-insite.jpg",
        caption: "Limpia juntas y azulejos",
        fit: "cover",
        alt: "Desengrasante Multiusos Nouvie junto a un cepillo de detalle sobre azulejos de cocina con las juntas limpias",
      },
    ],
    badge: "Kit completo",
    refillSlug: "repuesto-desengrasante-multiusos",
    steps: [
      {
        step: 1,
        name: "Agrega agua",
        instruction: "Llena el dosificador con agua hasta la franja negra de medida."
      },
      {
        step: 2,
        name: "Agrega el concentrado",
        instruction: "Llena el espacio del recuadro transparente con la mitad del contenido de la botella."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar. Una botella de 60 ml prepara dos dosificadores de 500 ml."
      }
    ],
    bundlePrice: 18500,
    specs: [
      { label: "Contenido", value: "60 ml" },
      { label: "Rendimiento", value: "1 L diluido" },
      { label: "Incluye", value: "Dosificador" }
    ],
    dilutionTable: [
      { uso: "Limpia hornos, estufas y campanas extractoras", cantidad: "", agua: "" },
      { uso: "Limpieza de baños, azulejos, puertas de ducha y similares", cantidad: "", agua: "" },
      { uso: "Limpia juntas", cantidad: "", agua: "" },
      { uso: "Quita exceso de cera en pisos", cantidad: "", agua: "" },
      { uso: "Limpieza de pisos de cerámica (1 tapa en un balde con 2 lt de agua)", cantidad: "", agua: "" },
      { uso: "Quita sarro y óxido", cantidad: "", agua: "" },
      { uso: "Prelavado de ropa", cantidad: "", agua: "" },
      { uso: "Elimina olores", cantidad: "", agua: "" }
    ],
    seoContent: {
      intro: "El Kit de Inicio Desengrasante es la manera más económica de probar el desengrasante multiusos de Nouvie: una botella de 60 ml de concentrado y el dosificador de 500 ml donde se prepara. Con media botella preparas un dosificador, así que el kit rinde para dos. Con un solo producto limpias hornos, estufas y campanas, baños y azulejos, juntas, sarro y óxido, y sirve además como prelavado de ropa y para eliminar olores. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "No necesita enjuague y ahorra agua",
          body: "Los productos Nouvie están diseñados para que no tengas que enjuagarlos. Al secar dejan sobre la superficie una capa de protección que evita que se adhiera la suciedad, de modo que la siguiente limpieza cuesta menos esfuerzo y menos agua. Por eso cada gota cuenta: una botella de 60 ml reemplaza varios productos de supermercado y reduce a la vez el consumo de agua y el plástico que termina en la basura."
        }
      ],
      audienceBlocks: [
        {
          heading: "Para la grasa de cocina",
          body: "Es cuatro veces más tensoactivo que los productos de su categoría, así que separa y disuelve la grasa de hornos, estufas y campanas extractoras sin restregar. Sirve también sobre acero inoxidable sin dañar la superficie. Para grasa pesada, diluye una tapa del producto en cinco tapas de agua caliente."
        },
        {
          heading: "Para baños y juntas",
          body: "Quita sarro, óxido y hongos en azulejos, duchas y puertas de vidrio, y limpia las juntas entre baldosas donde se acumula la suciedad. No es corrosivo ni cáustico, así que no requiere guantes ni tapabocas para usarlo."
        }
      ],
      faqs: [
        {
          question: "¿Qué incluye el Kit de Inicio Desengrasante?",
          answer: "Incluye una botella de 60 ml de desengrasante multiusos concentrado y la botella dosificadora de 500 ml donde se prepara el producto. El dosificador trae impresas las marcas de medida, así que no necesitas calcular proporciones."
        },
        {
          question: "¿Cuánto rinde una botella de 60 ml?",
          answer: "Rinde para preparar dos dosificadores de 500 ml. Se llena el dosificador con agua hasta la franja negra y se agrega la mitad del contenido de la botella, así que cada botella alcanza para dos preparaciones."
        },
        {
          question: "¿Sirve para limpiar el horno?",
          answer: "Sí, es uno de sus usos principales. Su fórmula cuatro veces más tensoactiva separa y disuelve la grasa de hornos, estufas y campanas extractoras. Para grasa muy pesada se recomienda diluir una tapa del producto en cinco tapas de agua caliente."
        },
        {
          question: "¿Necesito guantes para usarlo?",
          answer: "No. El producto no es tóxico, no es cáustico y no es corrosivo, por lo que no requiere guantes ni tapabocas para su uso normal."
        }
      ]
    }
  },
  {
    slug: "kit-limpia-pisos",
    name: "Kit de Inicio Limpia Pisos 30 ml",
    tagline: "Para todo tipo de pisos. Rinde para preparar 12 dosificadores de 500 ml",
    category: "hogar",
    description: "Preparación: Este producto se vende con botella dosificadora. Llena con agua el dosificador y agregar una tapa del producto (2.5 ml), mezclar un poco y listo para usar con Mopa. Para preparar el producto en un balde, agregar 2 litros de agua y una tapa del producto. Una botella de 30 ml sirve para preparar 12 dosificadores de 500 ml.",
    benefits: [
      "Kit completo con dosificador",
      "Para todo tipo de pisos",
      "Limpia y brilla - Antideslizante",
      "Alto rendimiento",
      "Biodegradable"
    ],
    image: "/images/productos/kit-limpia-pisos-trans.webp",
    socialImage: "/images/productos/kit-limpia-pisos.png",
    gallery: [
      {
        src: "/images/productos/kit-limpia-pisos-trans.webp",
        caption: "Kit de inicio con dosificador",
        fit: "contain",
        alt: "Kit de Inicio Limpia Pisos: botella de 30 ml de concentrado junto al dosificador de 500 ml para todo tipo de pisos",
      },
      {
        src: "/images/productos/kit-limpia-pisos-insite.jpg",
        caption: "Seguro para mascotas",
        fit: "cover",
        alt: "Limpia Pisos Nouvie en una terraza de ladrillo con un perro descansando sobre el piso recién limpio",
      },
    ],
    badge: "Kit completo",
    refillSlug: "repuesto-limpia-pisos",
    steps: [
      {
        step: 1,
        name: "Llena el dosificador",
        instruction: "Llena el dosificador de 500 ml con agua."
      },
      {
        step: 2,
        name: "Agrega una tapa",
        instruction: "Agrega una tapa del producto (2,5 ml)."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar con mopa. Una botella de 30 ml prepara 12 dosificadores de 500 ml."
      }
    ],
    bundlePrice: 17000,
    specs: [
      { label: "Contenido", value: "30 ml" },
      { label: "Rendimiento", value: "6 L diluido" },
      { label: "Incluye", value: "Dosificador" }
    ],
    dilutionTable: [
      { uso: "Limpia y encera toda clase de pisos (cerámica, mármol, madera, laminado, porcelanato)", cantidad: "", agua: "" },
      { uso: "Humectante de madera", cantidad: "", agua: "" },
      { uso: "Pre planchado de ropa fina (almidonado suave)", cantidad: "", agua: "" },
      { uso: "Protector de madera en exteriores (muebles, puertas)", cantidad: "", agua: "" }
    ],
    seoContent: {
      intro: "El Kit de Inicio Limpia Pisos trae una botella de 30 ml de concentrado y el dosificador de 500 ml donde se prepara. Una sola tapa de 2,5 ml por dosificador significa que la botella alcanza para doce preparaciones, o para doce baldes de dos litros si prefieres trapear. Limpia y encera en una sola pasada cerámica, mármol, madera, laminado y porcelanato, y sirve además como humectante y protector de madera en exteriores. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "No necesita enjuague y ahorra agua",
          body: "Los productos Nouvie están diseñados para que no tengas que enjuagarlos. Al secar dejan sobre la superficie una capa de protección que evita que se adhiera la suciedad, así que el piso se vuelve a ensuciar más despacio y la siguiente trapeada cuesta menos agua. Por eso cada gota cuenta: una botella de 30 ml prepara seis litros de producto listo para usar y reemplaza varias botellas de limpiapisos convencional."
        }
      ],
      audienceBlocks: [
        {
          heading: "Para todo tipo de pisos",
          body: "Sirve en cerámica, mármol, madera, laminado y porcelanato. Contiene cera carnauba, así que limpia y abrillanta en la misma pasada sin dejar residuos pegajosos ni amarillar el acabado. Para trapear, una tapa del producto en un balde con dos litros de agua."
        },
        {
          heading: "Para madera y exteriores",
          body: "Funciona como humectante de madera y como protector de muebles y puertas de madera en exteriores, donde la intemperie reseca la superficie. También sirve para el preplanchado de ropa fina, dejando un almidonado suave."
        }
      ],
      faqs: [
        {
          question: "¿Qué incluye el Kit de Inicio Limpia Pisos?",
          answer: "Incluye una botella de 30 ml de limpia pisos concentrado y la botella dosificadora de 500 ml donde se prepara el producto. Con el kit ya tienes todo lo necesario para empezar."
        },
        {
          question: "¿Cuánto rinde una botella de 30 ml?",
          answer: "Rinde para preparar 12 dosificadores de 500 ml, es decir seis litros de producto listo para usar. Si prefieres trapear con balde, alcanza para doce baldes de dos litros de agua con una tapa de producto cada uno."
        },
        {
          question: "¿Sirve para pisos de madera y laminados?",
          answer: "Sí. Limpia y encera cerámica, mármol, madera, laminado y porcelanato. Su fórmula con cera carnauba protege el acabado sin amarillarlo y no deja residuos pegajosos."
        },
        {
          question: "¿Necesito enjuagar después de trapear?",
          answer: "No. Está diseñado para no requerir enjuague. Al secar deja una capa de protección que evita que se adhiera la suciedad, lo que reduce el consumo de agua en cada limpieza."
        }
      ]
    }
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
    image: "/images/productos/kit-lustra-muebles-trans.webp",
    socialImage: "/images/productos/kit-lustra-muebles.png",
    gallery: [
      {
        src: "/images/productos/kit-lustra-muebles-trans.webp",
        caption: "Kit de inicio con dosificador",
        fit: "contain",
        alt: "Kit de Inicio Lustra Muebles: botella de 50 ml de concentrado junto al dosificador de 500 ml para madera, cuero y superficies",
      },
      {
        src: "/images/productos/kit-lustra-muebles-insite.jpg",
        caption: "Lustra la consola del auto",
        fit: "cover",
        alt: "Lustra Muebles Nouvie sobre el asiento de un auto junto a la consola y el tablero lustrados sin sensación grasosa",
      },
    ],
    badge: "Kit completo",
    refillSlug: "repuesto-lustra-muebles",
    steps: [
      {
        step: 1,
        name: "Agrega agua",
        instruction: "Llena el dosificador con agua hasta la franja negra de medida."
      },
      {
        step: 2,
        name: "Agrega el concentrado",
        instruction: "Llena con el producto el espacio del recuadro transparente."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar. Una botella de 50 ml prepara un dosificador de 500 ml."
      }
    ],
    bundlePrice: 17200,
    specs: [
      { label: "Contenido", value: "60 ml" },
      { label: "Rendimiento", value: "500 ml diluido" },
      { label: "Incluye", value: "Dosificador" }
    ],
    dilutionTable: [
      { uso: "Lustra muebles de madera, fórmica y plástico (no graso)", cantidad: "", agua: "" },
      { uso: "Limpia y lustra cueros, cuerinas y similares", cantidad: "", agua: "" },
      { uso: "Abrillantador de superficies de cocina, electrodomésticos y baños", cantidad: "", agua: "" },
      { uso: "Lustra consola de los autos", cantidad: "", agua: "" }
    ],
    usageTips: [
      "No usar en pisos: deja las superficies muy suaves y lisas",
      "Si se derrama en el piso, limpiar con abundante agua",
      "Aplicar con paño suave y seco, nunca directamente sobre el objeto"
    ],
    seoContent: {
      intro: "El Kit de Inicio Lustra Muebles trae una botella de 50 ml de concentrado y el dosificador de 500 ml donde se prepara. Una botella alcanza para un dosificador completo. Lustra muebles de madera, fórmica y plástico sin dejar sensación grasosa, limpia y lustra cueros y cuerinas, abrillanta superficies de cocina, electrodomésticos y baños, y sirve para la consola del auto. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "No necesita enjuague y ahorra agua",
          body: "Los productos Nouvie están diseñados para que no tengas que enjuagarlos. Al secar dejan sobre la superficie una capa de protección que evita que se adhiera la suciedad, por eso los muebles lustrados atraen menos polvo y se mantienen limpios más tiempo. Por eso cada gota cuenta: una botella de 50 ml prepara medio litro de producto listo para usar."
        }
      ],
      audienceBlocks: [
        {
          heading: "Para madera, fórmica y plástico",
          body: "Lustra e hidrata sin dejar sensación grasosa, con un acabado suave y antiestático que repele el polvo. Sirve en muebles de madera, superficies de fórmica y piezas plásticas. Se aplica con un paño suave y seco, nunca directamente sobre el objeto."
        },
        {
          heading: "Para cuero, autos y electrodomésticos",
          body: "Limpia y lustra cueros, cuerinas y similares, desde muebles hasta carteras y bolsos. También abrillanta electrodomésticos y superficies de cocina y baños, y deja la consola del auto limpia sin engrasarla."
        }
      ],
      faqs: [
        {
          question: "¿Qué incluye el Kit de Inicio Lustra Muebles?",
          answer: "Incluye una botella de 50 ml de lustra muebles concentrado y la botella dosificadora de 500 ml donde se prepara el producto. El dosificador trae impresas las marcas de medida."
        },
        {
          question: "¿Cuánto rinde una botella de 50 ml?",
          answer: "Rinde para preparar un dosificador de 500 ml de producto listo para usar. Se llena el dosificador con agua hasta la franja negra y se agrega el contenido de la botella en el espacio del recuadro transparente."
        },
        {
          question: "¿Se puede usar en pisos?",
          answer: "No. Este producto deja las superficies muy suaves y lisas, por lo que no debe usarse en pisos. Si se derrama en el piso, se debe limpiar con abundante agua."
        },
        {
          question: "¿Sirve para cuero y para la consola del auto?",
          answer: "Sí. Limpia y lustra cueros, cuerinas y similares, y sirve para la consola del auto dejándola limpia sin sensación grasosa."
        }
      ]
    }
  },

  // ============================================
  // LÍNEA HOGAR - REPUESTOS
  // ============================================
  {
    slug: "repuesto-lavavajilla",
    name: "Repuesto Lavavajilla 50 ml",
    tagline: "Rinde para preparar 1 dosificador de 500 ml. Recarga y ahorra",
    category: "hogar",
    description: "Repuesto de Detergente Neutro concentrado para recargar tu Kit Lavavajilla. Mismo poder limpiador, máximo ahorro. Contribuye al medio ambiente reduciendo el uso de envases plásticos.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "Mismo poder limpiador",
      "Compatible con Kit Lavavajilla",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-lavavajilla.webp",
    socialImage: "/images/productos/repuesto-lavavajilla-social.jpg",
    imageWidth: 572,
    imageHeight: 800,
    gallery: [
      {
        src: "/images/productos/repuesto-lavavajilla.webp",
        caption: "Recarga concentrada",
        fit: "contain",
        alt: "Repuesto Lavavajilla de 50 ml: botella de detergente neutro concentrado para recargar el dosificador de 500 ml",
      },
    ],
    badge: "Repuesto",
    specs: [
      { label: "Contenido", value: "50 ml" },
      { label: "Rendimiento", value: "500 ml diluido" },
      { label: "Tipo", value: "Recarga" }
    ],
    steps: [
      {
        step: 1,
        name: "Agrega agua",
        instruction: "Llena el dosificador con agua hasta la franja negra de medida."
      },
      {
        step: 2,
        name: "Agrega el concentrado",
        instruction: "Llena con el producto el espacio del recuadro transparente."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar. Una botella de 50 ml prepara un dosificador de 500 ml."
      }
    ],
    seoContent: {
      intro: "El Repuesto Lavavajilla es la recarga del Kit de Inicio: una botella de 50 ml de detergente neutro concentrado que prepara un dosificador completo de 500 ml. Al comprar solo el repuesto reutilizas la botella dosificadora que ya tienes, así que pagas menos y evitas un envase plástico nuevo. Es el mismo producto del kit: sirve para lavar la vajilla a mano o en lavavajillas, lavar frutas y verduras y lavar ropa fina y de bebé. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "Recarga y reutiliza tu dosificador",
          body: "El dosificador de 500 ml está hecho para durar. Cuando se acabe el producto no necesitas comprar otro envase: con este repuesto de 50 ml vuelves a llenarlo en menos de un minuto. Cada recarga evita una botella plástica más y reduce el costo por litro frente a comprar el kit completo de nuevo."
        }
      ],
      faqs: [
        {
          question: "¿Qué diferencia hay entre el repuesto y el kit?",
          answer: "El kit incluye la botella dosificadora de 500 ml más el concentrado. El repuesto trae únicamente el concentrado de 50 ml, pensado para quienes ya tienen el dosificador y solo necesitan recargarlo."
        },
        {
          question: "¿Cuánto rinde el repuesto de 50 ml?",
          answer: "Rinde para preparar un dosificador completo de 500 ml de producto listo para usar."
        },
        {
          question: "¿Necesito comprar el kit primero?",
          answer: "Sí. El repuesto no incluye la botella dosificadora, así que necesitas tener el dosificador del Kit de Inicio Lavavajilla para preparar el producto."
        }
      ]
    }
  },
  {
    slug: "repuesto-limpia-vidrios",
    name: "Repuesto Limpia Vidrios 30 ml",
    tagline: "Rinde para preparar 12 dosificadores de 500 ml. Recarga y ahorra",
    category: "hogar",
    description: "Repuesto de Limpia Vidrios concentrado para recargar tu kit. Vidrios impecables con máximo ahorro y mínimo impacto ambiental al reutilizar tu atomizador.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "Secado rápido",
      "Compatible con Kit Limpia Vidrios",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-limpia-vidrios.webp",
    socialImage: "/images/productos/repuesto-limpia-vidrios-social.jpg",
    imageWidth: 572,
    imageHeight: 800,
    gallery: [
      {
        src: "/images/productos/repuesto-limpia-vidrios.webp",
        caption: "Recarga concentrada",
        fit: "contain",
        alt: "Repuesto Limpia Vidrios de 30 ml: botella de concentrado para recargar el dosificador de 500 ml",
      },
    ],
    badge: "Repuesto",
    specs: [
      { label: "Contenido", value: "30 ml" },
      { label: "Rendimiento", value: "6 L diluido" },
      { label: "Tipo", value: "Recarga" }
    ],
    steps: [
      {
        step: 1,
        name: "Llena el dosificador",
        instruction: "Llena el dosificador de 500 ml con agua."
      },
      {
        step: 2,
        name: "Agrega una tapa",
        instruction: "Agrega una tapa del producto (2,5 ml)."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar. Una botella de 30 ml prepara 12 dosificadores de 500 ml."
      }
    ],
    seoContent: {
      intro: "El Repuesto Limpia Vidrios es la recarga de mayor rendimiento de la línea: una botella de 30 ml que, a una tapa de 2,5 ml por dosificador, prepara 12 dosificadores de 500 ml — seis litros de producto listo para usar. Limpia vidrios y espejos sin dejar trazos del trapo, abrillanta acero y aluminio y sirve para el preplanchado de ropa. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "Seis litros en una botella de 30 ml",
          body: "Al ser tan concentrado, este repuesto reemplaza aproximadamente doce atomizadores desechables de limpiavidrios de supermercado. Ese es el ahorro real: no vuelves a pagar por el envase ni por el agua que ya tienes en casa, y reutilizas siempre el mismo dosificador."
        }
      ],
      faqs: [
        {
          question: "¿Cuánto rinde el repuesto de 30 ml?",
          answer: "Rinde para preparar 12 dosificadores de 500 ml, es decir seis litros de producto listo para usar. Se agrega una sola tapa de 2,5 ml por cada dosificador lleno de agua."
        },
        {
          question: "¿Es el mismo producto del kit?",
          answer: "Sí, es exactamente el mismo concentrado. La única diferencia es que el repuesto no incluye la botella dosificadora."
        },
        {
          question: "¿Deja marcas en los vidrios?",
          answer: "No. Está formulado para secar rápido y no dejar trazos del trapo, tanto en vidrios y cristales como en espejos."
        }
      ]
    }
  },
  {
    slug: "repuesto-desengrasante-multiusos",
    name: "Repuesto Desengrasante Multiusos 60 ml",
    tagline: "Rinde para preparar 2 dosificadores de 500 ml. Recarga y ahorra",
    category: "hogar",
    description: "Repuesto de Desengrasante Multiusos concentrado. Recarga tu kit y sigue eliminando la grasa más difícil mientras cuidas el planeta reduciendo residuos plásticos.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "Mismo poder desengrasante",
      "Compatible con Kit Desengrasante",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-desengrasante.webp",
    socialImage: "/images/productos/repuesto-desengrasante-social.jpg",
    imageWidth: 572,
    imageHeight: 800,
    gallery: [
      {
        src: "/images/productos/repuesto-desengrasante.webp",
        caption: "Recarga concentrada",
        fit: "contain",
        alt: "Repuesto Desengrasante Multiusos de 60 ml: botella de concentrado para recargar el dosificador de 500 ml",
      },
    ],
    badge: "Repuesto",
    specs: [
      { label: "Contenido", value: "60 ml" },
      { label: "Rendimiento", value: "1 L diluido" },
      { label: "Tipo", value: "Recarga" }
    ],
    steps: [
      {
        step: 1,
        name: "Agrega agua",
        instruction: "Llena el dosificador con agua hasta la franja negra de medida."
      },
      {
        step: 2,
        name: "Agrega el concentrado",
        instruction: "Llena el espacio del recuadro transparente con la mitad del contenido de la botella."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar. Una botella de 60 ml prepara dos dosificadores de 500 ml."
      }
    ],
    seoContent: {
      intro: "El Repuesto Desengrasante Multiusos es la recarga del Kit de Inicio: una botella de 60 ml de concentrado que prepara dos dosificadores de 500 ml, usando media botella en cada uno. Es el mismo desengrasante del kit, cuatro veces más tensoactivo que los productos de su categoría: limpia hornos, estufas y campanas, baños y azulejos, juntas, sarro y óxido, y sirve como prelavado de ropa. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "Dos recargas en una sola botella",
          body: "Con 60 ml preparas un litro de producto listo para usar, repartido en dos dosificadores. Como no necesitas comprar otra botella atomizadora, cada recarga reduce el costo por litro y evita dos envases plásticos de los que se compran en el supermercado."
        }
      ],
      faqs: [
        {
          question: "¿Cuánto rinde el repuesto de 60 ml?",
          answer: "Rinde para preparar dos dosificadores de 500 ml. En cada preparación se usa la mitad del contenido de la botella."
        },
        {
          question: "¿Sirve para limpiar el horno?",
          answer: "Sí. Es uno de sus usos principales: su fórmula cuatro veces más tensoactiva separa y disuelve la grasa de hornos, estufas y campanas extractoras."
        },
        {
          question: "¿Necesito guantes para usarlo?",
          answer: "No. El producto no es tóxico, no es cáustico y no es corrosivo, por lo que no requiere guantes ni tapabocas para su uso normal."
        }
      ]
    }
  },
  {
    slug: "repuesto-limpia-pisos",
    name: "Repuesto Limpia Pisos 30 ml",
    tagline: "Rinde para preparar 12 dosificadores de 500 ml. Recarga y ahorra",
    category: "hogar",
    description: "Repuesto de Limpia Pisos concentrado para recargar tu kit. Mantén tus pisos brillantes y protegidos con máximo ahorro y compromiso ambiental.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "Para todo tipo de pisos",
      "Compatible con Kit Limpia Pisos",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-limpia-pisos.webp",
    socialImage: "/images/productos/repuesto-limpia-pisos-social.jpg",
    imageWidth: 572,
    imageHeight: 800,
    gallery: [
      {
        src: "/images/productos/repuesto-limpia-pisos.webp",
        caption: "Recarga concentrada",
        fit: "contain",
        alt: "Repuesto Limpia Pisos de 30 ml: botella de concentrado para recargar el dosificador de 500 ml",
      },
    ],
    badge: "Repuesto",
    specs: [
      { label: "Contenido", value: "30 ml" },
      { label: "Rendimiento", value: "6 L diluido" },
      { label: "Tipo", value: "Recarga" }
    ],
    steps: [
      {
        step: 1,
        name: "Llena el dosificador",
        instruction: "Llena el dosificador de 500 ml con agua."
      },
      {
        step: 2,
        name: "Agrega una tapa",
        instruction: "Agrega una tapa del producto (2,5 ml)."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar con mopa. Una botella de 30 ml prepara 12 dosificadores de 500 ml."
      }
    ],
    seoContent: {
      intro: "El Repuesto Limpia Pisos es la recarga del Kit de Inicio: una botella de 30 ml que prepara 12 dosificadores de 500 ml, o doce baldes de dos litros si prefieres trapear. Limpia y encera en una sola pasada cerámica, mármol, madera, laminado y porcelanato, y sirve además como humectante y protector de madera en exteriores. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "Doce trapeadas por botella",
          body: "Una tapa de 2,5 ml alcanza para un balde de dos litros, así que una botella de 30 ml cubre doce limpiezas completas de piso. Como el producto deja una capa de protección que evita que se adhiera la suciedad, el piso se ensucia más despacio y cada recarga rinde todavía más."
        }
      ],
      faqs: [
        {
          question: "¿Cuánto rinde el repuesto de 30 ml?",
          answer: "Rinde para preparar 12 dosificadores de 500 ml o doce baldes de dos litros de agua, agregando una tapa de 2,5 ml en cada preparación."
        },
        {
          question: "¿Sirve para pisos de madera y laminados?",
          answer: "Sí. Limpia y encera cerámica, mármol, madera, laminado y porcelanato. Su fórmula con cera carnauba protege el acabado sin amarillarlo."
        },
        {
          question: "¿Necesito enjuagar después de trapear?",
          answer: "No. Está diseñado para no requerir enjuague. Al secar deja una capa de protección que evita que se adhiera la suciedad."
        }
      ]
    }
  },
  {
    slug: "repuesto-lustra-muebles",
    name: "Repuesto Lustra Muebles 50 ml",
    tagline: "Rinde para preparar 1 dosificador de 500 ml. Recarga y ahorra",
    category: "hogar",
    description: "Repuesto de Lustra Muebles concentrado. Recarga tu kit y sigue protegiendo tus muebles con el mismo brillo y cuidado de siempre.",
    benefits: [
      "Recarga económica",
      "Reduce uso de plástico",
      "No grasoso",
      "Compatible con Kit Lustra Muebles",
      "Eco-friendly"
    ],
    image: "/images/productos/repuesto-lustra-muebles.webp",
    socialImage: "/images/productos/repuesto-lustra-muebles-social.jpg",
    imageWidth: 572,
    imageHeight: 800,
    gallery: [
      {
        src: "/images/productos/repuesto-lustra-muebles.webp",
        caption: "Recarga concentrada",
        fit: "contain",
        alt: "Repuesto Lustra Muebles de 50 ml: botella de concentrado para recargar el dosificador de 500 ml",
      },
    ],
    badge: "Repuesto",
    specs: [
      { label: "Contenido", value: "50 ml" },
      { label: "Rendimiento", value: "500 ml diluido" },
      { label: "Tipo", value: "Recarga" }
    ],
    steps: [
      {
        step: 1,
        name: "Agrega agua",
        instruction: "Llena el dosificador con agua hasta la franja negra de medida."
      },
      {
        step: 2,
        name: "Agrega el concentrado",
        instruction: "Llena con el producto el espacio del recuadro transparente."
      },
      {
        step: 3,
        name: "Mezcla y listo",
        instruction: "Mezcla un poco y queda listo para usar. Una botella de 50 ml prepara un dosificador de 500 ml."
      }
    ],
    seoContent: {
      intro: "El Repuesto Lustra Muebles es la recarga del Kit de Inicio: una botella de 50 ml de concentrado que prepara un dosificador completo de 500 ml. Lustra muebles de madera, fórmica y plástico sin dejar sensación grasosa, limpia y lustra cueros y cuerinas, abrillanta electrodomésticos y superficies de cocina y baños, y sirve para la consola del auto. Es biodegradable, libre de sulfatos, no tóxico y no corrosivo — uno de los [productos de limpieza ecológicos en Colombia](/nosotros) de Nouvie.",
      sections: [
        {
          heading: "Recarga y reutiliza tu dosificador",
          body: "Al comprar solo la recarga reutilizas la botella dosificadora que ya tienes y evitas un envase plástico nuevo. El acabado antiestático que deja el producto hace que los muebles atraigan menos polvo, así que cada preparación rinde más tiempo entre limpieza y limpieza."
        }
      ],
      faqs: [
        {
          question: "¿Cuánto rinde el repuesto de 50 ml?",
          answer: "Rinde para preparar un dosificador completo de 500 ml de producto listo para usar."
        },
        {
          question: "¿Se puede usar en pisos?",
          answer: "No. Este producto deja las superficies muy suaves y lisas, por lo que no debe usarse en pisos. Si se derrama en el piso, se debe limpiar con abundante agua."
        },
        {
          question: "¿Sirve para cuero y para la consola del auto?",
          answer: "Sí. Limpia y lustra cueros, cuerinas y similares, y deja la consola del auto limpia sin sensación grasosa."
        }
      ]
    }
  },

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