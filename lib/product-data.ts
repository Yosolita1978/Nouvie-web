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
    name: "Kit Completo Tratamiento Liso y Sedoso",
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
    image: "/images/productos/kiwi-acai-trans.webp",
    socialImage: "/images/productos/kiwi-acai.png",
    usageImage: "/images/productos/resena-kiwi-acai.png",
    bundlePrice: 167000, // Kit de 3 productos con IVA
    steps: [
      {
        step: 1,
        name: "Shampoo Liso y Sedoso",
        instruction: "Aplicar una cantidad generosa sobre el cabello húmedo, masajear suavemente desde la raíz hasta las puntas. Enjuagar con abundante agua."
      },
      {
        step: 2,
        name: "Mascarilla Liso y Sedoso",
        instruction: "Después del shampoo, aplicar la mascarilla de medios a puntas. Dejar actuar de 3 a 5 minutos y enjuagar."
      },
      {
        step: 3,
        name: "Loción Liso y Sedoso",
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
    image: "/images/productos/honey-melon-trans.webp",
    socialImage: "/images/productos/honey-melon.png",
    usageImage: "/images/productos/resena-honey-melon.png",
    bundlePrice: 167000, // Kit de 3 productos con IVA
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
    image: "/images/productos/revitalizante-trans.webp",
    socialImage: "/images/productos/revitalizante.png",
    usageImage: "/images/productos/resena-revitalizante.png",
    bundlePrice: 102424, // Kit de 2 productos con IVA
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

  // --- Línea Liso y Sedoso (Kiwi & Acaí) ---
  {
    slug: "shampoo-suave-y-liso",
    name: "Shampoo Sin Sal Liso y Sedoso",
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
    badge: "237 ml",
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
        }
      ]
    }
  },
  {
    slug: "mascarilla-suave-y-liso",
    name: "Mascarilla Liso y Sedoso",
    tagline: "Sella la cutícula. Nutrición intensiva con Bio Keratina",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "La Mascarilla Liso y Sedoso es un tratamiento de nutrición profunda que sella la cutícula y aporta un brillo espectacular. Su concentración de Bio Keratina penetra en la fibra capilar, reparando el daño interno y dejando el cabello increíblemente suave al tacto. Elimina el efecto flyaway y controla el volumen no deseado.",
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
    name: "Loción Liso y Sedoso",
    tagline: "El paso final perfecto para un cabello brillante y manejable. Desenreda y facilita el peinado",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "La Loción para Moldear Liso y Sedoso es el paso final perfecto para un cabello brillante y manejable. Desenreda y facilita el peinado. Tiene nutrientes especializados que enriquecen el cabello dando un acabado final con brillo, es termo protector y anti frizz. Después de lavar el cabello con el shampoo y usar la mascarilla NOUVIE, retirar el exceso de agua y aplicar una porción del tamaño de una almendra en su mano, frotarlas y aplicar de medios a puntas finalizando con la parte superior de la cabeza. Este producto es ideal para proteger el cabello de los rayos ultra violetas, el cloro de las piscinas y el agua de mar.",
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