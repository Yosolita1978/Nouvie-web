// SEO content for the three product-line pages.
//
// Each line used to be a client-side filter on /productos (?categoria=hogar),
// so all three shared one title, one description and one canonical. They are
// real routes now — /productos/hogar, /productos/capilar,
// /productos/institucional — and this file is the copy that makes each one
// worth indexing on its own.
//
// Spanish is the source of truth, exactly as in product-data.ts. English
// overrides live in category-data-en.ts.

import type { ProductCategory, SeoContent } from "./product-data";

export interface CategoryData {
  category: ProductCategory;
  /** Rendered <title>. The root layout appends " | Nouvie Colombia" (18 chars). */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** The single H1 on the page. */
  h1: string;
  /** Short line under the H1. Not a heading. */
  subtitle: string;
  /** Opaque image for social cards. Transparent PNGs get composited on black. */
  socialImage: string;
  socialImageWidth: number;
  socialImageHeight: number;
  /** Same shape as ProductData.seoContent, so it renders through the same block. */
  seoContent: SeoContent;
}

export const categoriesData: Record<ProductCategory, CategoryData> = {
  // ============================================
  // LÍNEA HOGAR
  // ============================================
  hogar: {
    category: "hogar",
    metaTitle: "Línea Hogar - Productos de Limpieza Ecológicos",
    metaDescription:
      "Limpiadores concentrados y biodegradables para tu casa: limpia pisos, desengrasante multiusos, lustra muebles, limpia vidrios y detergente neutro. Sin químicos tóxicos.",
    keywords: [
      "productos de limpieza ecológicos",
      "limpiadores biodegradables hogar",
      "limpia pisos concentrado",
      "desengrasante multiusos ecológico",
      "detergente neutro biodegradable",
      "limpieza sin químicos tóxicos",
    ],
    h1: "Línea Hogar",
    subtitle: "Limpieza concentrada y biodegradable para toda la casa",
    socialImage: "/images/categoria-hogar.jpg",
    socialImageWidth: 1200,
    socialImageHeight: 630,
    seoContent: {
      intro:
        "La Línea Hogar de Nouvie reemplaza los limpiadores convencionales de tu casa por fórmulas concentradas y biodegradables. Cada producto se diluye en agua, así que un solo envase rinde varios litros de limpiador listo para usar: menos plástico, menos peso y menos costo por uso. Ninguno contiene químicos tóxicos, y todos son [productos de limpieza ecológicos hechos en Colombia](/nosotros).",
      sections: [
        {
          heading: "Concentrados que rinden más",
          body:
            "El limpia pisos, el desengrasante multiusos, el lustra muebles y el limpia vidrios vienen concentrados. Los diluyes en agua según la tabla que trae cada producto, y de un envase pequeño sale la misma cantidad de limpiador que comprarías en varias botellas grandes. El Bioptimo es la excepción: viene listo para usar, porque está pensado para tenerlo a mano en la cocina y el baño.",
        },
        {
          heading: "Kits y repuestos",
          body:
            "Cada concentrado tiene un kit que incluye el atomizador y un repuesto que te permite volver a llenarlo sin comprar otro envase. Es la forma más barata de mantener la línea en casa y la razón por la que la Línea Hogar genera tan poco plástico.",
        },
        {
          heading: "Seguros para tu familia",
          body:
            "Son fórmulas no cáusticas, no inflamables y sin olores agresivos. No necesitas guantes ni tapabocas para usarlas, y puedes limpiar con niños o mascotas en casa sin ventilar el espacio durante horas.",
        },
      ],
      faqs: [
        {
          question: "¿Cómo diluyo los productos concentrados?",
          answer:
            "Cada producto trae su propia tabla de diluciones en la página del producto, con la cantidad exacta de producto y agua según el uso. Como regla general, entre más sucia la superficie, menos agua.",
        },
        {
          question: "¿Sirven para superficies delicadas?",
          answer:
            "Sí. El limpia pisos está formulado para superficies delicadas como madera, laminado y porcelanato, y el lustra muebles es específico para madera. Revisa la ficha de cada producto para ver los usos recomendados.",
        },
        {
          question: "¿Son realmente biodegradables?",
          answer:
            "Sí. Toda la Línea Hogar es 100% biodegradable y libre de químicos tóxicos, así que el agua que va por el desagüe no lleva residuos persistentes.",
        },
        {
          question: "¿Puedo comprar solo el repuesto?",
          answer:
            "Sí. Si ya tienes el atomizador, puedes comprar únicamente el repuesto y volver a llenarlo. Cada página de producto enlaza a su repuesto correspondiente.",
        },
      ],
    },
  },

  // ============================================
  // LÍNEA CAPILAR
  // ============================================
  capilar: {
    category: "capilar",
    metaTitle: "Línea Capilar - Tratamientos Capilares Naturales",
    metaDescription:
      "Tres líneas de tratamiento capilar sin sulfatos ni sal: Bio Keratina, Manteca de Karité y Aceite de Argán. Shampoo, mascarilla y loción para alisar, reparar o revitalizar.",
    keywords: [
      "tratamiento capilar natural",
      "shampoo sin sulfatos",
      "shampoo sin sal",
      "bio keratina",
      "manteca de karité cabello",
      "aceite de argán cabello",
      "mascarilla capilar reparadora",
    ],
    h1: "Línea Capilar",
    subtitle: "Tres tratamientos, sin sulfatos ni sal",
    socialImage: "/images/categoria-capilar.jpg",
    socialImageWidth: 1200,
    socialImageHeight: 630,
    seoContent: {
      intro:
        "La Línea Capilar de Nouvie son tres tratamientos completos, cada uno con su shampoo, su mascarilla y su loción. Ninguno contiene sulfatos ni sal, así que no resecan el cabello ni retiran tratamientos previos. Eliges la línea según lo que necesite tu cabello: alisar, reparar o revitalizar.",
      sections: [
        {
          heading: "Bio Keratina — Kiwi & Acaí",
          body:
            "La línea Suave y Liso. Para cabello encrespado o difícil de manejar: reduce el frizz y deja el cabello más liso y manejable sin alisarlo químicamente. Es la opción si tu problema principal es el volumen y el encrespamiento.",
        },
        {
          heading: "Manteca de Karité — Honey & Melon",
          body:
            "La línea de Reparación Intensa. Para cabello procesado, teñido o dañado por calor: nutre desde adentro y devuelve suavidad a las puntas abiertas. Es la opción si tu cabello está quebradizo o reseco.",
        },
        {
          heading: "Aceite de Argán — Revitalizante",
          body:
            "La línea Revitalizante. Para cabello sin brillo, opaco o debilitado: aporta vitalidad y brillo al cabello que se ve apagado. Es la opción si tu cabello no está dañado, pero se ve sin vida.",
        },
        {
          heading: "Cómo usar el tratamiento completo",
          body:
            "El orden es shampoo, mascarilla y loción. El shampoo limpia sin resecar, la mascarilla actúa unos minutos y se enjuaga, y la loción se aplica sobre el cabello húmedo y no se enjuaga. Puedes comprar el tratamiento completo o los productos por separado.",
        },
      ],
      faqs: [
        {
          question: "¿Qué significa que no tienen sulfatos ni sal?",
          answer:
            "Los sulfatos son los detergentes que producen mucha espuma y resecan el cabello con el uso. La sal se usa para espesar el shampoo, pero retira los tratamientos de keratina o alisado. Sin ninguno de los dos, el cabello conserva su hidratación y tus tratamientos duran más.",
        },
        {
          question: "¿Cuál línea me conviene?",
          answer:
            "Si tu problema es el frizz, Bio Keratina. Si tu cabello está dañado, teñido o quebradizo, Manteca de Karité. Si tu cabello está sano pero opaco, Aceite de Argán.",
        },
        {
          question: "¿Puedo mezclar productos de líneas diferentes?",
          answer:
            "Sí, pero cada línea está formulada para trabajar en conjunto. Si puedes, usa el shampoo, la mascarilla y la loción de la misma línea para obtener el resultado que se describe.",
        },
        {
          question: "¿Sirven para cabello con keratina o alisado?",
          answer:
            "Sí. Al no contener sal, no retiran los tratamientos de keratina ni los alisados, que es la razón principal por la que muchos tratamientos duran menos de lo esperado.",
        },
      ],
    },
  },

  // ============================================
  // LÍNEA INSTITUCIONAL
  // ============================================
  institucional: {
    category: "institucional",
    metaTitle: "Línea Institucional - Aseo Profesional Biodegradable",
    metaDescription:
      "Concentrados de aseo en presentaciones de 1 litro y galón para restaurantes, hoteles, colegios y oficinas. Biodegradables, no cáusticos y con alto rendimiento por dilución.",
    keywords: [
      "aseo institucional biodegradable",
      "productos de limpieza industrial ecológicos",
      "desengrasante institucional",
      "detergente lavavajillas industrial",
      "limpieza profesional Colombia",
      "concentrados de aseo por galón",
    ],
    h1: "Línea Institucional",
    subtitle: "Concentrados de alto rendimiento para uso profesional",
    socialImage: "/images/categoria-institucional.jpg",
    socialImageWidth: 1200,
    socialImageHeight: 630,
    seoContent: {
      intro:
        "La Línea Institucional es la misma química de la Línea Hogar en presentaciones de 1 litro y galón, pensada para negocios que limpian todos los días. Al ser concentrados, el costo por litro de solución preparada es mucho menor que el de un limpiador listo para usar, y el espacio de bodega que ocupan es una fracción.",
      sections: [
        {
          heading: "Para quién es esta línea",
          body:
            "Restaurantes y cocinas industriales que necesitan desengrasar a diario, hoteles y edificios con áreas comunes, colegios y jardines infantiles donde importa que el producto no sea tóxico, y oficinas con personal de aseo propio o tercerizado.",
        },
        {
          heading: "Rendimiento por dilución",
          body:
            "Cada producto trae su tabla de diluciones según el uso. Un galón de concentrado rinde muchos litros de solución de trabajo, así que el precio que importa no es el del envase sino el costo por litro preparado. En la página de cada producto están las presentaciones disponibles y sus precios.",
        },
        {
          heading: "Sin riesgo para el personal",
          body:
            "Son fórmulas no cáusticas y no inflamables. El personal de aseo no necesita equipo de protección especial para manipularlas, no hay vapores agresivos en espacios cerrados y no hay que almacenarlas bajo condiciones especiales.",
        },
      ],
      faqs: [
        {
          question: "¿En qué presentaciones vienen?",
          answer:
            "Principalmente en 1 litro y galón. Las presentaciones disponibles y sus precios aparecen en la página de cada producto.",
        },
        {
          question: "¿Cuál es la diferencia con la Línea Hogar?",
          answer:
            "La formulación es la misma. Lo que cambia es el tamaño del envase y el precio por litro: la Línea Institucional está pensada para consumo alto y continuo.",
        },
        {
          question: "¿Hacen despachos a empresas?",
          answer:
            "Sí. Escríbenos por WhatsApp con el producto, la presentación y la cantidad que necesitas y te confirmamos disponibilidad y despacho.",
        },
        {
          question: "¿Requieren equipo de protección?",
          answer:
            "No. Al no ser cáusticos ni inflamables, no exigen guantes ni tapabocas para su manipulación normal, aunque siempre recomendamos seguir el protocolo de aseo de cada establecimiento.",
        },
      ],
    },
  },
};

/** The three line slugs, in the order the catalogue shows them. */
export const categorySlugs: ProductCategory[] = ["hogar", "capilar", "institucional"];

/** The i18n route name for each line. Matches the keys in i18n/routing.ts. */
export const lineRouteFor = {
  hogar: "/productos/hogar",
  capilar: "/productos/capilar",
  institucional: "/productos/institucional",
} as const satisfies Record<ProductCategory, string>;

export function getCategoryData(category: ProductCategory): CategoryData {
  return categoriesData[category];
}
