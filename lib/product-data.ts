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
  usageImage?: string;
  badge?: string;
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
    name: "BIOPTIMO Desengrasante Multiusos Listo Para Usar",
    tagline: "Desengrasante multiusos listo para usar, aroma cítrico",
    category: "hogar",
    description: "BIOPTIMO Desengrasante multiusos listo para usar de 500 ml, aroma cítrico. Limpia hornos, estufa y campanas extractoras. Limpieza de baños, azulejos, puertas de ducha y similares. Limpia juntas. Quita exceso de cera en pisos. Limpieza de pisos de cerámica (1 tapa en un balde con 2 lt de agua). Quita sarro y óxido. Prelavado de ropa.",
    benefits: [
      "Listo para usar — no requiere dilución",
      "Limpia hornos, estufa y campanas extractoras",
      "Limpieza de baños, azulejos y puertas de ducha",
      "Limpia juntas y quita exceso de cera en pisos",
      "Quita sarro y óxido",
      "Prelavado de ropa",
      "Aroma cítrico"
    ],
    image: "/images/productos/desengrasante-bioptimo-500ml.jpeg",
    badge: "Nuevo"
  },
  {
    slug: "detergente-neutro",
    name: "Detergente Neutro Nouvie",
    tagline: "Cuida tus manos",
    category: "hogar",
    description: "El Detergente Neutro Nouvie, está diseñado para lavar la vajilla manualmente y en máquina lavavajilla, cuatro (4) veces más tensoactivo, separa fácilmente la grasa de platos y ollas. Formulado con aceite de coco y lanolina, cuida la piel y es hipoalergénico. Ideal para el lavado de prendas delicadas y de bebés, cuida y suaviza las fibras.",
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
    slug: "limpia-pisos-concentrado",
    name: "Limpia Pisos Concentrado",
    tagline: "Limpieza profunda, resalta el brillo natural de toda clase de pisos",
    category: "hogar",
    description: "El Limpia Pisos y Superficies Delicadas Nouvie es un limpiador líquido concentrado completamente soluble en agua. Formulado para limpiar y remover todo tipo de pisos y superficies delicadas. Perfecto para aplicar en espejos y vidrios del baño ofreciendo limpieza sin manchas. Especial para lavado y encerado de automóviles.",
    benefits: [
      "Producto altamente concentrado",
      "Ideal para desempañar vidrios y espejos. Contiene cera carnauba",
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
    slug: "desengrasante-multiusos-concentrado",
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
    slug: "lustra-muebles-concentrado",
    name: "Lustra Muebles Concentrado",
    tagline: "No grasoso, brillo y protección con cera de Carnauba",
    category: "hogar",
    description: "Lustra Muebles concentrado de 250 ml. No grasoso. Rinde para preparar 5 dosificadores de 500 ml. Se entrega con dosificador con medida para preparar. Usos: Lustra muebles de madera, fórmica y plástico. Limpia y lustra cueros, cuerinas y similares. Abrillantador de superficies de cocina, electrodomésticos y baños. Consola de los autos.",
    benefits: [
      "No grasoso",
      "Rinde para preparar 5 dosificadores de 500 ml",
      "Lustra muebles de madera, fórmica y plástico",
      "Limpia y lustra cueros, cuerinas y similares",
      "Abrillantador de cocina, electrodomésticos y baños",
      "Consola de los autos"
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
    slug: "limpia-vidrios-concentrado",
    name: "Limpia Vidrios y Cuidado de Tela Concentrado",
    tagline: "Ideal para desempañar vidrios y espejos",
    category: "hogar",
    description: "Limpia Vidrios y cuidado de tela concentrado de 250 ml. Limpia y abrillanta vidrios y espejos sin dejar marcas. Se entrega el dosificador con medida para preparar. Rinde hasta 100 dosificadores de 500 ml. Abrillanta superficies metálicas de acero y aluminio. Protege las fibras de las telas y reaviva los colores. Contiene cera carnauba.",
    benefits: [
      "Rinde hasta 100 dosificadores de 500 ml",
      "Ideal para desempañar vidrios y espejos",
      "Abrillanta superficies metálicas de acero y aluminio",
      "Protege las fibras de las telas y reaviva los colores",
      "Contiene cera carnauba"
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
    slug: "tratamiento-suave-y-liso",
    name: "Tratamiento Suave y Liso",
    tagline: "Bio Keratina para cabello liso y luminoso",
    category: "capilar",
    description: "Nutre y protege tu cabello con tratamientos especiales Bio Keratina: Shampoo, Mascarilla y Loción para Moldear NOUVIE. Su formulación contiene aceites esenciales de Bio Keratina que ayudan a alisar el cabello, manteniendo el color natural. El uso continuo de Bio Keratina ayuda a la reducción del frizz, encrespado y efecto flyaway.",
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
    name: "Tratamiento Reparación Intensa",
    tagline: "Manteca de Karité para reparación profunda",
    category: "capilar",
    description: "La Manteca de Karité contiene sustancias nutritivas ideales para restaurar y devolver la fuerza y el brillo. Hidratación y brillo en el cabello, este tipo de producto tiene una protección natural que ayuda al cabello con daño, pérdida de fuerza y sin brillo. Nutre y humecta el cabello duro y quebradizo.",
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
    tagline: "Limpieza suave con Bio Keratina",
    category: "capilar",
    size: "237 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "El Shampoo Suave y Liso con Bio Keratina limpia delicadamente mientras alisa la fibra capilar desde la raíz. Su fórmula enriquecida con aceites esenciales de Kiwi y Acaí elimina impurezas sin resecar, preparando el cabello para recibir los beneficios del tratamiento completo. Ideal para cabellos con frizz, encrespados o difíciles de peinar.",
    benefits: [
      "Limpieza suave sin sulfatos agresivos",
      "Bio Keratina que alisa desde el lavado",
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
    tagline: "Nutrición intensiva con Bio Keratina",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "La Mascarilla Suave y Liso es un tratamiento de nutrición profunda que sella la cutícula y aporta un brillo espectacular. Su concentración de Bio Keratina penetra en la fibra capilar, reparando el daño interno y dejando el cabello increíblemente suave al tacto. Elimina el efecto flyaway y controla el volumen no deseado.",
    benefits: [
      "Nutrición profunda de medios a puntas",
      "Sella la cutícula para máximo brillo",
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
    tagline: "Acabado liso y brillante sin enjuague",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-suave-y-liso",
    description:
      "La Loción para Moldear Suave y Liso es el paso final perfecto para un cabello liso, brillante y manejable. Aplicada sobre cabello húmedo o seco, esta loción sin enjuague controla el frizz durante todo el día, protege del calor y facilita el peinado. Deja un acabado natural sin residuos ni sensación pegajosa.",
    benefits: [
      "Control del frizz todo el día",
      "Protección térmica natural",
      "Facilita el peinado y desenredo",
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
    tagline: "Limpieza reparadora con Manteca de Karité",
    category: "capilar",
    size: "237 ml",
    parentTreatmentSlug: "tratamiento-reparacion-intensa",
    description:
      "El Shampoo Reparación Intensa inicia el proceso de restauración desde el primer lavado. Enriquecido con Manteca de Karité y extractos de Honey & Melon, limpia suavemente mientras deposita nutrientes esenciales en la fibra capilar dañada. Perfecto para cabellos maltratados por químicos, tintes o herramientas de calor.",
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
    tagline: "Restauración profunda con Manteca de Karité",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-reparacion-intensa",
    description:
      "La Mascarilla Reparación Intensa es un tratamiento concentrado que devuelve la vida al cabello más dañado. La Manteca de Karité penetra profundamente, reconstruyendo la estructura capilar desde adentro. En solo 3-5 minutos, transforma el cabello seco y quebradizo en hebras fuertes, brillantes y llenas de vitalidad.",
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
    tagline: "Protección y acabado reparador",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-reparacion-intensa",
    description:
      "La Loción Reparación Intensa sella los beneficios del tratamiento y protege el cabello durante todo el día. Su fórmula con Manteca de Karité y Honey & Melon crea una barrera protectora contra agresores externos mientras mantiene la hidratación. Perfecta para moldear, definir y dar un acabado saludable sin apelmazar.",
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
    tagline: "Fortalecimiento masculino con Aceite de Argán",
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
    tagline: "Moldeo y fortalecimiento masculino",
    category: "capilar",
    size: "177 ml",
    parentTreatmentSlug: "tratamiento-revitalizante",
    description:
      "La Loción Revitalizante es el complemento perfecto para el cuidado capilar masculino. Combina Aceite de Argán con agentes fortalecedores que rejuvenecen la fibra capilar mientras permiten moldear el peinado deseado. No deja residuos, no apelmaza y aporta un acabado natural con volumen controlado.",
    benefits: [
      "Moldeo flexible y natural",
      "Fortalece la fibra capilar",
      "Rejuvenece el cabello",
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
    name: "Limpia Vidrios Institucional Concentrado",
    tagline: "Limpieza profesional concentrada para vidrios y metales",
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
      { size: "1 Litro" }
    ]
  },
  {
    slug: "limpiador-superficies-institucional",
    name: "Limpiador de Superficies Institucional Listo Para Usar",
    tagline: "Limpieza profesional de superficies lista para usar",
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
      { size: "1 Litro" },
      { size: "1 Galón" }
    ]
  },
  {
    slug: "limpia-pisos-institucional",
    name: "Limpia Pisos Institucional Concentrado",
    tagline: "Limpieza profesional concentrada para pisos",
    category: "institucional",
    description: "Es un líquido viscoso completamente soluble en agua. Formulado para limpiar y proteger todo tipo de pisos como mármol, porcelanato, piso cerámico y otros pisos delicados. Formulado para limpiar y proteger todo tipo de pisos y superficies. Este producto no agrede los paramentos ni el medio ambiente. Su biodegradabilidad es rápida, no tóxico y no irrita.",
    benefits: [
      "Para pisos delicados",
      "Ideal para mármol y porcelanato",
      "No agrede el medio ambiente",
      "Biodegradable",
      "No tóxico"
    ],
    image: "/images/productos/limpia-pisos-institucional.png",
    specs: [
      { label: "pH", value: "6.5 - 7.5 Neutro" },
      { label: "Densidad", value: "1.01 - 1.03 g/ml" },
      { label: "Biodegradabilidad", value: "> 90%" },
      { label: "Aspecto", value: "Líquido verde translúcido" }
    ],
    presentations: [
      { size: "1 Litro" },
      { size: "2 Litros" },
      { size: "1 Galón" }
    ]
  },
  {
    slug: "detergente-lavavajillas-institucional",
    name: "Detergente Máquina Lavavajillas Listo Para Usar",
    tagline: "Detergente profesional listo para usar",
    category: "institucional",
    description: "Es un detergente sintético altamente concentrado. Se presenta en forma de líquido de alta viscosidad. Desarrollado para limpiar eficientemente todo tipo de superficies como: ollas, platos, vasos, utensilios de cocina, superficies plásticas, de vidrio y similares. Este producto no agrede las personas ni al medio ambiente.",
    benefits: [
      "Altamente concentrado",
      "Para todo tipo de vajilla",
      "No agrede la piel",
      "Biodegradable",
      "Apto para máquinas industriales"
    ],
    image: "/images/productos/detergente-institucional-lavavajillas.png",
    specs: [
      { label: "pH", value: "6.5 - 7.5" },
      { label: "Densidad", value: "1.02 - 1.05 g/ml" },
      { label: "Biodegradabilidad", value: "> 90%" },
      { label: "Aspecto", value: "Líquido rosa viscoso" }
    ],
    presentations: [
      { size: "1 Litro" },
      { size: "2 Litros" },
      { size: "1 Galón" }
    ]
  },
  {
    slug: "desengrasante-institucional",
    name: "Desengrasante Institucional Concentrado",
    tagline: "Poder desengrasante concentrado",
    category: "institucional",
    description: "Posee una alta concentración de agentes tensoactivos, desengrasantes, humectantes y suavizantes. Tiene un gran poder para eliminar todo tipo de grasas y tener propiedades también como lavaloza, limpiador y desinfectante. Aplicable para uso en cocina, paredes, techos y superficies con grasas adheridas. Es biodegradable, no tóxico, no cáustico, no inflamable.",
    benefits: [
      "Alta concentración",
      "Elimina todo tipo de grasas",
      "Multi-uso: cocina, paredes, techos",
      "No tóxico ni cáustico",
      "Biodegradable"
    ],
    image: "/images/productos/multiusos-institucional-desengrasante.png",
    specs: [
      { label: "pH", value: "7.0 - 8.0" },
      { label: "Densidad", value: "1.01 - 1.03 g/ml" },
      { label: "Biodegradabilidad", value: "> 90%" },
      { label: "Aspecto", value: "Líquido amarillo" }
    ],
    presentations: [
      { size: "1 Litro" },
      { size: "1 Galón" }
    ]
  },

  // ============================================
  // LÍNEA HOGAR - KITS
  // ============================================
  {
    slug: "kit-lavavajilla",
    name: "Kit de Inicio Lavavajilla 50 ml",
    tagline: "Todo lo que necesitas para tus platos",
    category: "hogar",
    description: "Preparación: Agregar agua en la franja negra de medida 1.5. Luego en el espacio del recuadro transparente llenar con el producto, mezclar un poco y listo para usar. Una botella de 50 ml rinde para 1 dosificador de 500 ml.",
    benefits: [
      "Kit completo listo para usar",
      "Alto rendimiento",
      "Incluye dispensador",
      "Económico a largo plazo",
      "Biodegradable"
    ],
    image: "/images/productos/kit-desengrasante.png",
    badge: "Kit completo",
    bundlePrice: 18000,
    dilutionTable: [
      { uso: "Lava vajilla a mano", cantidad: "", agua: "" },
      { uso: "Lava vajilla a máquina (aplica producto diluido en la caja más pequeña)", cantidad: "", agua: "" },
      { uso: "Detergente para ropa fina y de bebé (una tapa en la lavadora o para lavado a mano)", cantidad: "", agua: "" },
      { uso: "Suavizante de ropa fina y de bebé", cantidad: "", agua: "" },
      { uso: "Lavar manos", cantidad: "", agua: "" },
      { uso: "Lavar frutas y verduras", cantidad: "", agua: "" }
    ]
  },
  {
    slug: "kit-limpia-vidrios",
    name: "Kit de Inicio Limpia Vidrios 30 ml",
    tagline: "Vidrios impecables sin esfuerzo",
    category: "hogar",
    description: "Preparación: Llena con agua el dosificador y agregar una tapa del producto (2.5 ml), mezclar un poco y listo para usar. Una botella de 30 ml sirve para preparar 8 dosificadores de 500 ml.",
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
    tagline: "Poder desengrasante completo",
    category: "hogar",
    description: "Preparación: Agregar agua en la franja negra y en el espacio del recuadro transparente llenar con la mitad del contenido del producto, mezclar un poco y listo para usar. Una botella de 60 ml sirve para preparar dos dosificadores de 500 ml.",
    benefits: [
      "Kit completo con atomizador",
      "Poder desengrasante industrial",
      "Alto rendimiento",
      "Para toda la cocina",
      "Biodegradable"
    ],
    image: "/images/productos/kit-lavavajilla.png",
    badge: "Kit completo",
    bundlePrice: 16000,
    dilutionTable: [
      { uso: "Desengrasante Multiusos (cocina)", cantidad: "", agua: "" },
      { uso: "Limpia hornos", cantidad: "", agua: "" },
      { uso: "Limpieza de baños, azulejos, puertas de ducha y similares", cantidad: "", agua: "" },
      { uso: "Limpia juntas", cantidad: "", agua: "" },
      { uso: "Quita exceso de cera en pisos", cantidad: "", agua: "" },
      { uso: "Quita sarro y óxido", cantidad: "", agua: "" },
      { uso: "Prelavado de ropa", cantidad: "", agua: "" },
      { uso: "Elimina olores", cantidad: "", agua: "" }
    ]
  },
  {
    slug: "kit-limpia-pisos",
    name: "Kit de Inicio Limpia Pisos 30 ml",
    tagline: "Pisos brillantes en todo tu hogar",
    category: "hogar",
    description: "Preparación: Llena con agua el dosificador y agregar una tapa del producto (2.5 ml), mezclar un poco y listo para usar. Para preparar el producto en un balde, agregar 2 litros de agua y una tapa del producto. Una botella de 30 ml sirve para preparar 8 dosificadores de 500 ml.",
    benefits: [
      "Kit completo con dosificador",
      "Para pisos delicados",
      "No deja residuos",
      "Alto rendimiento",
      "Biodegradable"
    ],
    image: "/images/productos/kit-limpia-pisos.png",
    badge: "Kit completo",
    bundlePrice: 18000,
    dilutionTable: [
      { uso: "Limpia y encera toda clase de pisos (cerámica, mármol, madera, laminado, porcelanato)", cantidad: "", agua: "" },
      { uso: "Humectante de madera", cantidad: "", agua: "" },
      { uso: "Lavado y encerado de autos", cantidad: "", agua: "" },
      { uso: "Pre planchado de ropa fina (almidonado suave)", cantidad: "", agua: "" },
      { uso: "Limpieza de hojas de plantas interiores", cantidad: "", agua: "" },
      { uso: "Protector de madera en exteriores (muebles, puertas)", cantidad: "", agua: "" },
      { uso: "Anti congelante de vidrios y similares", cantidad: "", agua: "" }
    ]
  },
  {
    slug: "kit-lustra-muebles",
    name: "Kit de Inicio Lustra Muebles 60 ml",
    tagline: "Cuidado completo para tus muebles",
    category: "hogar",
    description: "Preparación: Agregar agua en la franja negra de medida 1.5. Luego en el espacio del recuadro transparente llenar con el producto, mezclar un poco y listo para usar. Una botella de 50 ml rinde para 1 dosificador de 500 ml.",
    benefits: [
      "Kit completo con paño",
      "Cera de Carnauba",
      "Protección duradera",
      "Para múltiples superficies",
      "Alto rendimiento"
    ],
    image: "/images/productos/kit-lustra-muebles.png",
    badge: "Kit completo",
    bundlePrice: 16000,
    dilutionTable: [
      { uso: "Lustra muebles de madera, fórmica y plástico (no graso)", cantidad: "", agua: "" },
      { uso: "Limpia y lustra cueros, cuerinas y similares", cantidad: "", agua: "" },
      { uso: "Abrillantador de superficies de cocina, electrodomésticos y baños", cantidad: "", agua: "" },
      { uso: "Lustra consola de los autos", cantidad: "", agua: "" }
    ]
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