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
    featured: true,
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
    relatedSlugs: [],
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
