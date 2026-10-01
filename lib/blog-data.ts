// Blog posts. Same approach as product-data.ts: the content lives in typed
// data, and the pages only render it. No CMS and no markdown library.
//
// The blog is Spanish only. Inline links use the `[texto](/ruta)` format that
// renderTextWithLinks (components/ui/SeoContentBlock.tsx) already understands.

export type BlogCategory = "capilar" | "ingredientes" | "hogar";

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  capilar: "Cuidado capilar",
  ingredientes: "Ingredientes",
  hogar: "Hogar",
};

/** One piece of an article section. Each type has its own look in the design. */
export type BlogBlock =
  | { type: "paragraph"; text: string }
  /** Grid of cards with a check mark ("¿Para quién es?"). */
  | { type: "checklist"; items: string[] }
  /** Numbered steps (01, 02, 03...). */
  | { type: "steps"; items: string[] }
  /** Label + explanation pairs, e.g. one line per hair type. */
  | { type: "choices"; items: { label: string; text: string }[] }
  /** Navy box with crossed-out ingredients ("Lo que no lleva..."). Items are
   *  plain nouns ("sal"); screen readers hear "Sin sal". */
  | {
      type: "chips";
      title: string;
      /** Word(s) of the title shown in italic serif. */
      titleAccent?: string;
      items: string[];
      /** The chip that matches the article's topic, shown in turquoise. */
      highlighted?: string;
    };

export interface BlogSection {
  /** Anchor id, used by the table of contents. */
  id: string;
  /** Short label for the table of contents. */
  tocLabel: string;
  heading: string;
  blocks: BlogBlock[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** A product shown in the article's sidebar card. */
export interface BlogProduct {
  slug: string;
  /** Short name for the card; the full product name is too long for the sidebar. */
  label: string;
  /** What it is for, in a few words. */
  note: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Word(s) of the title shown in italic serif, e.g. "sin sal". */
  titleAccent?: string;
  /** <title> tag when the visible title is too long or not keyword-first. */
  metaTitle?: string;
  /** Used for the meta description and the card text. Keep it under 160 characters. */
  excerpt: string;
  /** Short line under the title on the article page. */
  subtitle: string;
  category: BlogCategory;
  /** ISO dates (YYYY-MM-DD). */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  image: BlogImage;
  /** Shown first on the blog index. Only one post should have it. */
  featured?: boolean;
  intro: string;
  sections: BlogSection[];
  faqs: BlogFaq[];
  /** Products shown in the sidebar card (in the article, on mobile). */
  products: BlogProduct[];
  /** Small heading above those products. */
  productsHeading: string;
  /** Posts for "Sigue leyendo". Falls back to the same category when empty. */
  relatedSlugs: string[];
}

export const BLOG_AUTHOR_BIO =
  "Nouvie es una marca colombiana de cuidado capilar y limpieza del hogar, con fórmulas sin sulfatos, sin sal y sin parabenos.";

const posts: BlogPost[] = [
  {
    slug: "shampoo-sin-sal",
    title: "Shampoo sin sal: qué significa y cuándo elegirlo",
    titleAccent: "sin sal",
    metaTitle: "Shampoo sin sal: qué significa y cuál elegir",
    excerpt:
      "La sal es el espesante más barato de un shampoo. Qué le hace a tu cabello, por qué «sin sal» no significa «sin sulfatos» y cuál elegir según tu cabello.",
    subtitle:
      "Por qué la sal está en tantos shampoos, qué le hace a un cabello con keratina o tinte, y cuál de los shampoos Nouvie te conviene.",
    category: "capilar",
    publishedAt: "2026-09-29",
    updatedAt: "2026-10-01",
    author: "Equipo Nouvie",
    image: {
      src: "/images/blog/shampoos-sin-sal.webp",
      alt: "Los tres shampoos sin sal de Nouvie: Reparación Intensa, Revitalizante y Fortalecedor",
      width: 1600,
      height: 1200,
    },
    intro:
      "Si te hiciste keratina o un alisado, seguro te dijeron: «desde ahora, solo shampoo sin sal». Tiene una razón concreta. Y hay un malentendido muy común: un shampoo «sin sal» puede tener sulfatos, y los sulfatos también se llevan el tratamiento y el color.",
    sections: [
      {
        id: "que-significa",
        tocLabel: "Qué significa",
        heading: "¿Qué significa «sin sal» en un shampoo?",
        blocks: [
          {
            type: "paragraph",
            text: "La «sal» de un shampoo es cloruro de sodio: la misma sal de cocina. Muchas marcas la agregan porque es barata y espesa la fórmula. Esa textura densa que asociamos con un producto que «rinde» muchas veces es sal.",
          },
          {
            type: "paragraph",
            text: "El problema es que la sal deshidrata la fibra capilar y, en cueros cabelludos sensibles, puede causar irritación. En un cabello que ya está reseco, tinturado o con alisado, eso se nota como más frizz y un tratamiento que dura menos.",
          },
          {
            type: "paragraph",
            text: "Un shampoo sin sal deja ese ingrediente por fuera. Por eso su textura es más líquida: no trae menos producto, simplemente no lleva el espesante.",
          },
          {
            type: "paragraph",
            text: "Todos los shampoos Nouvie son sin sal: el [Fortalecedor](/productos/shampoo-fortalecimiento), el [Reparación Intensa](/productos/shampoo-reparacion-intensa) y el [Revitalizante](/productos/shampoo-revitalizante). Ninguno la lleva, así que la elección entre ellos depende de lo que necesita tu cabello, no de la sal.",
          },
        ],
      },
      {
        id: "sin-sulfatos",
        tocLabel: "Sin sal vs. sin sulfatos",
        heading: "Sin sal y sin sulfatos no son lo mismo",
        blocks: [
          {
            type: "paragraph",
            text: "Son dos ingredientes distintos, y muchas etiquetas solo quitan uno. Los sulfatos, como el lauril sulfato de sodio (SLS) y el lauril sulfato de amonio (ALS), son detergentes: producen mucha espuma y quitan la grasa con fuerza. Se usan porque son baratos y efectivos, pero también se llevan los aceites naturales que protegen el cuero cabelludo y arrastran el color del tinte.",
          },
          {
            type: "paragraph",
            text: "Por eso muchos casos de resequedad, irritación y caspa vienen del uso diario de shampoos con sulfatos. Si tu cabello está tratado o es sensible, lo ideal es que el shampoo no tenga ninguno de los dos.",
          },
          {
            type: "chips",
            title: "Lo que no llevan los shampoos Nouvie",
            titleAccent: "no",
            items: ["sal", "sulfatos", "parabenos", "colorantes artificiales", "aromas artificiales"],
            highlighted: "sal",
          },
        ],
      },
      {
        id: "para-quien",
        tocLabel: "Para quién es",
        heading: "¿Para quién es una buena opción?",
        blocks: [
          {
            type: "paragraph",
            text: "Cualquier persona puede usar un shampoo sin sal, pero se nota más la diferencia si:",
          },
          {
            type: "checklist",
            items: [
              "Te hiciste un alisado o un tratamiento de keratina.",
              "Tienes el cabello tinturado, con mechas o decolorado.",
              "Sientes el cabello reseco, áspero o con frizz.",
              "Tienes el cuero cabelludo sensible o con picazón.",
              "Te lavas el cabello a diario, por ejemplo porque haces ejercicio.",
              "Buscas una fórmula vegana, no testeada en animales.",
            ],
          },
        ],
      },
      {
        id: "cual-elegir",
        tocLabel: "Cuál elegir",
        heading: "¿Qué shampoo sin sal elegir según tu cabello?",
        blocks: [
          {
            type: "paragraph",
            text: "Los tres shampoos de la [línea capilar Nouvie](/productos/capilar) son sin sal, sin sulfatos y sin parabenos. Lo que cambia es el activo principal, y cada uno está pensado para un problema distinto:",
          },
          {
            type: "choices",
            items: [
              {
                label: "Frizz y cabello opaco",
                text: "El [Shampoo Fortalecedor](/productos/shampoo-fortalecimiento), con Bio-Keratina hecha de aminoácidos de trigo y soya. Suaviza la fibra capilar, controla el frizz y devuelve el brillo.",
              },
              {
                label: "Reseco, quemado, tinturado o decolorado",
                text: "El [Shampoo Reparación Intensa](/productos/shampoo-reparacion-intensa), con manteca de karité, que hidrata desde la raíz hasta las puntas. No es el indicado si tienes el cuero cabelludo graso.",
              },
              {
                label: "Caída o cabello débil",
                text: "El [Shampoo Revitalizante](/productos/shampoo-revitalizante), de la línea Revitalizante Anticaída. Su proteína de yogur y el aceite de argán cuidan el cuero cabelludo y fortalecen el folículo.",
              },
              {
                label: "Raíz grasa y puntas maltratadas",
                text: "Lava con el Shampoo Fortalecedor y complementa con la [mascarilla](/productos/mascarilla-reparacion-intensa) y la [loción para moldear](/productos/locion-reparacion-intensa) de Reparación Intensa, solo de medios a puntas y sin tocar el cuero cabelludo. Así controlas la grasa de la raíz y reparas las puntas al mismo tiempo.",
              },
            ],
          },
        ],
      },
      {
        id: "como-usarlo",
        tocLabel: "Cómo usarlo",
        heading: "Cómo sacarle el mayor provecho",
        blocks: [
          {
            type: "steps",
            items: [
              "Agita el envase antes de usarlo, para que los aceites y los activos se mezclen bien.",
              "Moja bien el cabello con agua fría o tibia, nunca caliente.",
              "Usa una cantidad pequeña y masajea el cuero cabelludo con las yemas de los dedos, no con las uñas.",
              "Enjuaga y aplica la mascarilla de medios a puntas. Déjala actuar 5 minutos y enjuaga de nuevo.",
            ],
          },
          {
            type: "paragraph",
            text: "La rutina Nouvie termina con mascarilla, no con acondicionador. El acondicionador trabaja en la superficie para desenredar; la mascarilla penetra la fibra para repararla y nutrirla.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿El shampoo sin sal hace espuma?",
        answer:
          "Hace menos espuma, porque no tiene sulfatos, que son los que la producen. La espuma no indica qué tan bien limpia: el shampoo limpia desde la primera aplicación. Si lo aplicas una segunda vez, verás un poco más de espuma.",
      },
      {
        question: "¿Sirve después de un alisado o un tratamiento de keratina?",
        answer:
          "Sí. Como no tiene sal ni sulfatos, no barre el tratamiento, y además ayuda a reparar el daño que dejan los químicos en el cabello.",
      },
      {
        question: "¿Puedo usarlo todos los días?",
        answer:
          "Sí. Es lo bastante suave para lavar el cabello a diario, por ejemplo si haces ejercicio, sin irritar el cuero cabelludo.",
      },
      {
        question: "¿Por qué parece que se gasta rápido?",
        answer:
          "Es lo que más nos cuentan las clientas al principio: como hace poca espuma, lo aplican dos o tres veces pensando que no limpió. No hace falta. Con una cantidad pequeña y una sola aplicación, el cabello queda limpio.",
      },
      {
        question: "¿Dónde puedo comprar el shampoo sin sal Nouvie?",
        answer:
          "Nouvie es una marca colombiana. Lo encuentras en esta página, por WhatsApp o en Mercado Libre, con envíos a toda Colombia.",
      },
    ],
    productsHeading: "Los tres son sin sal",
    products: [
      {
        slug: "shampoo-fortalecimiento",
        label: "Shampoo Fortalecedor",
        note: "Bio-keratina · frizz y cabello opaco",
      },
      {
        slug: "shampoo-reparacion-intensa",
        label: "Shampoo Reparación Intensa",
        note: "Manteca de karité · reseco o tinturado",
      },
      {
        slug: "shampoo-revitalizante",
        label: "Shampoo Revitalizante",
        note: "Para la caída del cabello",
      },
    ],
    relatedSlugs: ["hidratacion-nutricion-reparacion", "caida-del-cabello"],
  },
  {
    slug: "hidratacion-nutricion-reparacion",
    title: "Hidratación, nutrición o reparación: qué necesita tu cabello",
    titleAccent: "qué necesita",
    excerpt:
      "A tu cabello le puede faltar agua, aceite o proteína, y cada carencia se nota distinto. Una prueba de un minuto con una hebra mojada te dice cuál es.",
    subtitle:
      "Frizz, puntas como paja o cabello que se rompe no son el mismo problema. Una hebra mojada te dice cuál tienes y qué línea te sirve.",
    category: "capilar",
    publishedAt: "2026-10-01",
    author: "Equipo Nouvie",
    image: {
      src: "/images/blog/kit-reparacion-intensa.webp",
      alt: "Mascarilla, shampoo y loción para moldear de la Línea Reparación Intensa de Nouvie, Royal Honey & Melon",
      width: 1600,
      height: 1200,
    },
    featured: true,
    intro:
      "Frizz, puntas secas, cabello que se rompe: parecen lo mismo, pero no lo son. A tu cabello le puede faltar agua, aceite o proteína, y cada carencia se nota distinto. Si le das lo que no necesita, lo saturas y sigue igual.",
    sections: [
      {
        id: "la-prueba",
        tocLabel: "La prueba",
        heading: "La prueba de la hebra mojada",
        blocks: [
          { type: "paragraph", text: "Necesitas un minuto y el cabello recién lavado:" },
          {
            type: "steps",
            items: [
              "Mientras el cabello sigue húmedo, toma una sola hebra.",
              "Sostenla con las dos manos y estírala suavemente.",
              "Fíjate en tres cosas: si se estira, si vuelve a su forma y si se rompe.",
            ],
          },
          {
            type: "paragraph",
            text: "Junta lo que viste con cómo se ve tu cabello cuando está seco, y busca abajo cuál de los tres casos se parece más.",
          },
        ],
      },
      {
        id: "hidratacion",
        tocLabel: "Hidratación",
        heading: "Le falta hidratación (agua)",
        blocks: [
          {
            type: "paragraph",
            text: "Es la carencia más común, sobre todo si sudas mucho o vives en clima cálido.",
          },
          {
            type: "checklist",
            items: [
              "Se ve esponjado, inflado, con frizz alrededor de la cabeza.",
              "Al tacto está áspero, pero no se rompe con facilidad.",
              "En la prueba: se estira un poco y vuelve a su forma, pero se siente acartonado.",
            ],
          },
        ],
      },
      {
        id: "nutricion",
        tocLabel: "Nutrición",
        heading: "Le falta nutrición (aceites)",
        blocks: [
          {
            type: "paragraph",
            text: "Los aceites sellan la capa exterior del cabello. Si está tinturado o es poroso por naturaleza, los pierde rápido y hay que reponerlos.",
          },
          {
            type: "checklist",
            items: [
              "Está opaco, sin brillo.",
              "Se enreda muchísimo.",
              "Las puntas están rígidas y secas, como paja.",
              "En la prueba: casi no se estira y se siente rígido.",
            ],
          },
        ],
      },
      {
        id: "reparacion",
        tocLabel: "Reparación",
        heading: "Le falta reparación (proteína)",
        blocks: [
          {
            type: "paragraph",
            text: "Los tintes, las decoloraciones y la plancha le quitan al cabello su fuerza interna. La reparación se la devuelve con proteínas y aminoácidos.",
          },
          {
            type: "checklist",
            items: [
              "Está débil, sin cuerpo y quebradizo.",
              "Encuentras pedacitos de cabello en la ropa.",
              "Las puntas están abiertas y deshilachadas.",
              "En la prueba: se estira como un chicle y no vuelve, o se rompe apenas lo estiras.",
            ],
          },
          {
            type: "paragraph",
            text: "Si en vez de pedacitos encuentras cabellos enteros con un punto blanco en la punta, eso no es quiebre: es caída desde la raíz. Te explicamos [cómo diferenciarlos](/blog/caida-del-cabello).",
          },
        ],
      },
      {
        id: "que-linea",
        tocLabel: "Qué línea usar",
        heading: "Qué línea Nouvie usar según el resultado",
        blocks: [
          {
            type: "paragraph",
            text: "Las tres líneas llevan proteína de yogur, prebióticos y una mezcla de aceites, así que todas hidratan y nutren. Lo que cambia es el activo principal:",
          },
          {
            type: "choices",
            items: [
              {
                label: "Te salió hidratación",
                text: "La [Línea Fortalecedora](/productos/tratamiento-fortalecimiento), con Bio-Keratina. Sella la cutícula para que el cabello deje de absorber la humedad del ambiente y controla el frizz.",
              },
              {
                label: "Te salió nutrición",
                text: "La [Línea Reparación Intensa](/productos/tratamiento-reparacion-intensa), con manteca de karité, que devuelve humedad y suavidad desde la raíz hasta las puntas.",
              },
              {
                label: "Te salió reparación",
                text: "Si el daño viene de tintes, decoloración o plancha, también la Reparación Intensa. Si el cabello está débil pero no lo has tratado con químicos, la Fortalecedora: los aminoácidos de trigo y soya de la Bio-Keratina rellenan la fibra.",
              },
              {
                label: "Tienes la raíz grasa",
                text: "No pongas la Reparación Intensa en el cuero cabelludo. Lava con el [Shampoo Fortalecedor](/productos/shampoo-fortalecimiento) y aplica la [mascarilla](/productos/mascarilla-reparacion-intensa) y la [loción](/productos/locion-reparacion-intensa) de Reparación Intensa solo de medios a puntas.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "Y si lo que te preocupa es que se te cae el cabello, para eso está la [Línea Revitalizante Anticaída](/productos/tratamiento-revitalizante).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Mi cabello puede necesitar las tres cosas?",
        answer:
          "Sí, pasa mucho en cabello tinturado o alisado. Por eso cada línea Nouvie es un tratamiento completo: el shampoo limpia sin resecar, la mascarilla repara y nutre, y la loción para moldear sella y protege del calor.",
      },
      {
        question: "¿Por qué se me apelmaza el cabello con la mascarilla?",
        answer:
          "Casi siempre es por cantidad. La mascarilla y la loción llevan mucho aceite: basta una porción del tamaño de una almendra, frotada entre las manos y aplicada de medios a puntas. Si te pasas, el cabello queda pesado y con aspecto graso.",
      },
      {
        question: "¿Cada cuánto uso la mascarilla?",
        answer:
          "De 2 a 3 veces por semana, justo después del shampoo. Déjala actuar 5 minutos y enjuaga con agua fría o tibia.",
      },
      {
        question: "¿Cuánto tarda en notarse el cambio?",
        answer:
          "A veces desde la primera lavada. Por lo general, el cambio se nota después de la cuarta.",
      },
    ],
    productsHeading: "Las tres líneas",
    products: [
      {
        slug: "tratamiento-fortalecimiento",
        label: "Kit Fortalecedor",
        note: "Bio-Keratina · frizz y cabello opaco",
      },
      {
        slug: "tratamiento-reparacion-intensa",
        label: "Kit Reparación Intensa",
        note: "Manteca de karité · seco o tinturado",
      },
      {
        slug: "tratamiento-revitalizante",
        label: "Kit Revitalizante Anticaída",
        note: "Para la caída del cabello",
      },
    ],
    relatedSlugs: ["caida-del-cabello", "shampoo-sin-sal"],
  },
  {
    slug: "caida-del-cabello",
    title: "Caída del cabello o quiebre: cómo saber cuál tienes",
    titleAccent: "quiebre",
    metaTitle: "Caída del cabello o quiebre: cómo diferenciarlos",
    excerpt:
      "Mira la punta del cabello que encuentras en el cepillo: si tiene un punto blanco, es caída desde la raíz; si no, es quiebre. Qué causa cada uno y qué hacer.",
    subtitle:
      "Un cabello que se cae desde la raíz y uno que se parte a la mitad se tratan distinto. Así los reconoces en tu cepillo.",
    category: "capilar",
    publishedAt: "2026-10-01",
    author: "Equipo Nouvie",
    image: {
      src: "/images/blog/kit-revitalizante.webp",
      alt: "Loción para moldear y shampoo de la Línea Revitalizante Anticaída de Nouvie, Mountain Breeze",
      width: 1600,
      height: 1200,
    },
    intro:
      "Antes de comprar cualquier cosa «anticaída», recoge unos cuantos cabellos del cepillo o de la almohada y míralos de cerca. Lo que veas en la punta te dice si el problema está en la raíz o en la hebra, y eso cambia por completo lo que te sirve.",
    sections: [
      {
        id: "la-prueba",
        tocLabel: "La prueba",
        heading: "La prueba: mira la punta del cabello",
        blocks: [
          {
            type: "steps",
            items: [
              "Recoge 5 o 6 cabellos del cepillo, la almohada o el desagüe de la ducha.",
              "Ponlos sobre un papel que contraste con tu color de cabello.",
              "Mira el extremo de cada uno. Si tiene un pequeño punto blanco, es el bulbo: ese cabello se cayó desde la raíz.",
              "Si no tiene punto blanco y el extremo se ve partido, ese cabello se rompió: es quiebre.",
            ],
          },
          {
            type: "paragraph",
            text: "Es normal encontrar de los dos tipos. Lo que importa es cuál predomina.",
          },
        ],
      },
      {
        id: "caida",
        tocLabel: "Por qué se cae",
        heading: "Si es caída, el problema está en la raíz",
        blocks: [
          {
            type: "paragraph",
            text: "La caída ocurre cuando el folículo, la raíz de donde nace el cabello, se debilita, se inflama o altera su ciclo natural de crecimiento, reposo y caída. Las causas más comunes:",
          },
          {
            type: "choices",
            items: [
              {
                label: "Hormonas y genética",
                text: "Es la causa más frecuente, como en la alopecia androgénica. Hormonas como la DHT debilitan el folículo poco a poco hasta que deja de producir cabello.",
              },
              {
                label: "Estrés físico o emocional",
                text: "Una época de mucho estrés, una cirugía o una enfermedad pueden hacer que muchos cabellos entren a la vez en la fase de caída. Se llama efluvio telógeno.",
              },
              {
                label: "Alimentación",
                text: "La falta de hierro, zinc, biotina o proteína deja al folículo sin los materiales que necesita para fabricar cabello.",
              },
              {
                label: "Cuero cabelludo",
                text: "El exceso de grasa, la caspa, los hongos o la inflamación asfixian la raíz y el cabello no se sostiene.",
              },
            ],
          },
        ],
      },
      {
        id: "quiebre",
        tocLabel: "Por qué se quiebra",
        heading: "Si es quiebre, el problema está en la hebra",
        blocks: [
          {
            type: "paragraph",
            text: "El quiebre no tiene nada que ver con la raíz. La hebra pierde tanta queratina que deja de ser elástica, y al peinarla, lavarla o recogerla se parte a la mitad o en las puntas. Las causas más comunes:",
          },
          {
            type: "choices",
            items: [
              {
                label: "Calor",
                text: "La plancha y el secador sin protección destruyen las proteínas del cabello y lo dejan quebradizo.",
              },
              {
                label: "Químicos",
                text: "Las decoloraciones, los tintes y los alisados rompen los enlaces que le dan fuerza al cabello y lo dejan poroso.",
              },
              {
                label: "Fricción",
                text: "Cepillar el cabello mojado, que es cuando está más frágil; frotarlo con la toalla; usar ligas que lo aprietan.",
              },
              {
                label: "Resequedad",
                text: "Un cabello sin agua ni aceites pierde elasticidad y, en vez de estirarse, se rompe.",
              },
            ],
          },
        ],
      },
      {
        id: "que-hacer",
        tocLabel: "Qué te sirve",
        heading: "Qué hacer en cada caso",
        blocks: [
          {
            type: "paragraph",
            text: "Ningún shampoo resuelve una caída hormonal o genética. Si se te cae el cabello a mechones, en zonas, o mucho más de lo normal de un momento a otro, consulta con un dermatólogo antes de comprar cualquier tratamiento.",
          },
          {
            type: "paragraph",
            text: "Donde sí ayuda un tratamiento es cuando la caída viene del cuero cabelludo (grasa, caspa, irritación) o cuando lo que tienes es quiebre:",
          },
          {
            type: "choices",
            items: [
              {
                label: "Caída por el cuero cabelludo",
                text: "La [Línea Revitalizante Anticaída](/productos/tratamiento-revitalizante), con proteína de yogur y aceite de argán. Limpia sin sulfatos, calma el cuero cabelludo y fortalece el folículo. Son dos pasos: [shampoo](/productos/shampoo-revitalizante) y [loción para moldear](/productos/locion-revitalizante).",
              },
              {
                label: "Quiebre por calor o químicos",
                text: "La [Línea Reparación Intensa](/productos/tratamiento-reparacion-intensa), con manteca de karité, devuelve humedad y elasticidad a la hebra. Si tienes el cuero cabelludo graso, mejor la [Línea Fortalecedora](/productos/tratamiento-fortalecimiento), con Bio-Keratina.",
              },
              {
                label: "Las dos cosas",
                text: "Es lo que hacen varias clientas con caída: lavan con el [Shampoo Revitalizante](/productos/shampoo-revitalizante) y completan con la mascarilla y la loción de la Reparación Intensa o de la Fortalecedora, según su cabello.",
              },
            ],
          },
        ],
      },
      {
        id: "habitos",
        tocLabel: "Hábitos",
        heading: "Hábitos que reducen el quiebre desde hoy",
        blocks: [
          {
            type: "checklist",
            items: [
              "Desenreda con un peine de dientes anchos, no con cepillo, mientras el cabello está mojado.",
              "Seca presionando con la toalla, sin frotar.",
              "Aplica loción para moldear antes de la plancha o el secador: funciona como termoprotector.",
              "Lava con agua fría o tibia, nunca caliente.",
              "Cambia las ligas que aprietan por unas más suaves.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cabello es normal que se caiga al día?",
        answer:
          "Perder entre 50 y 100 cabellos al día es normal: es el ciclo natural del cabello. Preocúpate si notas mucho más de lo habitual de un momento a otro o si aparecen zonas con menos cabello.",
      },
      {
        question: "¿El Revitalizante sirve para mujeres? El envase dice For Men.",
        answer:
          "Sí. El envase lleva la referencia For Men y el aroma Mountain Breeze está pensado para el público masculino, pero la fórmula funciona igual en cualquier cabello. Lo usan hombres y mujeres con caída.",
      },
      {
        question: "¿El Revitalizante hace crecer el cabello?",
        answer:
          "No hace crecer cabello donde el folículo ya no produce. Lo que hace es mejorar el entorno de la raíz: un cuero cabelludo sin exceso de grasa ni inflamación produce cabello más fuerte, y como el cabello se rompe menos, se nota el avance del largo mes a mes.",
      },
      {
        question: "¿Puedo usarlo si tengo el cabello graso?",
        answer:
          "Sí. El shampoo limpia la grasa de la raíz sin sulfatos, así que no reseca el cuero cabelludo ni provoca el efecto rebote de los shampoos tradicionales.",
      },
    ],
    productsHeading: "Línea Revitalizante Anticaída",
    products: [
      {
        slug: "tratamiento-revitalizante",
        label: "Kit Revitalizante Anticaída",
        note: "Shampoo + loción · 2 pasos",
      },
      {
        slug: "shampoo-revitalizante",
        label: "Shampoo Revitalizante",
        note: "Proteína de yogur y argán",
      },
      {
        slug: "locion-revitalizante",
        label: "Loción Revitalizante",
        note: "Termoprotector sin enjuague",
      },
    ],
    relatedSlugs: ["hidratacion-nutricion-reparacion", "shampoo-sin-sal"],
  },
];

export function getAllPosts(): BlogPost[] {
  // Newest first.
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

/** Posts for "Sigue leyendo": the chosen ones first, then same category, max 3. */
export function getRelatedPosts(post: BlogPost): BlogPost[] {
  const chosen = post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((related): related is BlogPost => related !== undefined);

  const sameCategory = getAllPosts().filter(
    (other) =>
      other.slug !== post.slug &&
      other.category === post.category &&
      !chosen.some((c) => c.slug === other.slug)
  );

  return [...chosen, ...sameCategory].slice(0, 3);
}

/** Reading time from the article's words, at ~200 words per minute. */
export function getReadingMinutes(post: BlogPost): number {
  const texts: string[] = [post.intro];

  for (const section of post.sections) {
    texts.push(section.heading);
    for (const block of section.blocks) {
      if (block.type === "paragraph") texts.push(block.text);
      if (block.type === "checklist" || block.type === "steps") texts.push(...block.items);
      if (block.type === "choices") texts.push(...block.items.map((i) => `${i.label} ${i.text}`));
      if (block.type === "chips") texts.push(block.title, ...block.items);
    }
  }
  for (const faq of post.faqs) {
    texts.push(faq.question, faq.answer);
  }

  const words = texts.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Just what a card needs. The category filter is a client component, and
 * passing it whole posts would send every article's full text to the browser.
 */
export interface BlogCardData {
  slug: string;
  title: string;
  titleAccent?: string;
  excerpt: string;
  category: BlogCategory;
  readingMinutes: number;
  image: BlogImage;
}

export function toCardData(post: BlogPost): BlogCardData {
  return {
    slug: post.slug,
    title: post.title,
    titleAccent: post.titleAccent,
    excerpt: post.excerpt,
    category: post.category,
    readingMinutes: getReadingMinutes(post),
    image: post.image,
  };
}

/** "29 de septiembre de 2026" */
export function formatPostDate(isoDate: string): string {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
