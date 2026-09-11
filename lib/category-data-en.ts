// English translations for the product-line pages.
// Spanish is the source of truth in category-data.ts.
//
// Unlike product-data-en.ts, this file is complete: all three categories are
// fully translated, so /en never falls back to Spanish prose.

import type { ProductCategory } from "./product-data";
import type { CategoryData } from "./category-data";
import { categoriesData } from "./category-data";

export type CategoryTranslation = Omit<
  CategoryData,
  "category" | "socialImage" | "socialImageWidth" | "socialImageHeight"
>;

export const categoryTranslationsEn: Record<ProductCategory, CategoryTranslation> = {
  hogar: {
    metaTitle: "Home Line - Eco-Friendly Cleaning Products",
    metaDescription:
      "Concentrated, biodegradable cleaners for your home: floor cleaner, multi-purpose degreaser, furniture polish, glass cleaner and neutral detergent. No toxic chemicals.",
    keywords: [
      "eco-friendly cleaning products",
      "biodegradable home cleaners",
      "concentrated floor cleaner",
      "eco multi-purpose degreaser",
      "biodegradable neutral detergent",
      "cleaning without toxic chemicals",
    ],
    h1: "Home Line",
    subtitle: "Concentrated, biodegradable cleaning for the whole house",
    seoContent: {
      intro:
        "Nouvie's Home Line replaces the conventional cleaners in your house with concentrated, biodegradable formulas. Each product is diluted in water, so a single bottle yields several litres of ready-to-use cleaner: less plastic, less weight and a lower cost per use. None of them contain toxic chemicals, and all of them are [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "Concentrates that go further",
          body:
            "The floor cleaner, multi-purpose degreaser, furniture polish and glass cleaner all come concentrated. You dilute them in water following the table included with each product, and one small bottle produces as much cleaner as several large ones. Bioptimo is the exception: it comes ready to use, because it is meant to sit within reach in the kitchen and the bathroom.",
        },
        {
          heading: "Kits and refills",
          body:
            "Every concentrate has a kit that includes the spray bottle, and a refill that lets you fill it again without buying another container. It is the cheapest way to keep the line at home and the reason the Home Line generates so little plastic.",
        },
        {
          heading: "Safe around your family",
          body:
            "These are non-caustic, non-flammable formulas with no harsh fumes. You do not need gloves or a face mask to use them, and you can clean with children or pets at home without airing out the room for hours.",
        },
      ],
      faqs: [
        {
          question: "How do I dilute the concentrated products?",
          answer:
            "Each product has its own dilution table on its product page, with the exact amount of product and water for each use. As a rule of thumb, the dirtier the surface, the less water.",
        },
        {
          question: "Are they safe on delicate surfaces?",
          answer:
            "Yes. The floor cleaner is formulated for delicate surfaces such as wood, laminate and porcelain tile, and the furniture polish is made specifically for wood. Check each product page for its recommended uses.",
        },
        {
          question: "Are they genuinely biodegradable?",
          answer:
            "Yes. The entire Home Line is 100% biodegradable and free of toxic chemicals, so the water going down the drain carries no persistent residue.",
        },
        {
          question: "Can I buy just the refill?",
          answer:
            "Yes. If you already own the spray bottle, you can buy the refill on its own and fill it again. Each product page links to its matching refill.",
        },
      ],
    },
  },

  capilar: {
    metaTitle: "Hair Care Line - Natural Hair Treatments",
    metaDescription:
      "Three hair treatment lines with no sulfates and no salt: Bio Keratin, Shea Butter and Argan Oil. Shampoo, mask and leave-in lotion to smooth, repair or revitalise.",
    keywords: [
      "natural hair treatment",
      "sulfate free shampoo",
      "salt free shampoo",
      "bio keratin treatment",
      "shea butter hair",
      "argan oil hair",
      "repairing hair mask",
    ],
    h1: "Hair Care Line",
    subtitle: "Three treatments, no sulfates and no salt",
    seoContent: {
      intro:
        "Nouvie's Hair Care Line is three complete treatments, each with its own shampoo, mask and leave-in lotion. None of them contain sulfates or salt, so they neither dry out your hair nor strip previous treatments. You pick the line based on what your hair needs: smoothing, repair or revitalising.",
      sections: [
        {
          heading: "Bio Keratin — Kiwi & Acai",
          body:
            "The Smooth and Straight line. For frizzy or hard-to-manage hair: it reduces frizz and leaves hair smoother and easier to handle without chemically straightening it. This is the one if your main problem is volume and frizz.",
        },
        {
          heading: "Shea Butter — Honey & Melon",
          body:
            "The Intensive Repair line. For processed, colour-treated or heat-damaged hair: it nourishes from within and restores softness to split ends. This is the one if your hair is brittle or dry.",
        },
        {
          heading: "Argan Oil — Revitalising",
          body:
            "The Revitalising line. For dull, lifeless or weakened hair: it brings back vitality and shine to hair that looks flat. This is the one if your hair is not damaged but looks lifeless.",
        },
        {
          heading: "How to use the full treatment",
          body:
            "The order is shampoo, mask, then lotion. The shampoo cleans without drying, the mask is left on for a few minutes and rinsed out, and the lotion is applied to damp hair and left in. You can buy the complete treatment or each product separately.",
        },
      ],
      faqs: [
        {
          question: "What does sulfate-free and salt-free actually mean?",
          answer:
            "Sulfates are the detergents that produce heavy foam and dry hair out over time. Salt is used to thicken shampoo, but it strips keratin and straightening treatments. Without either one, your hair keeps its moisture and your treatments last longer.",
        },
        {
          question: "Which line is right for me?",
          answer:
            "If your problem is frizz, Bio Keratin. If your hair is damaged, colour-treated or brittle, Shea Butter. If your hair is healthy but dull, Argan Oil.",
        },
        {
          question: "Can I mix products from different lines?",
          answer:
            "You can, but each line is formulated to work together. Where possible, use the shampoo, mask and lotion from the same line to get the result described.",
        },
        {
          question: "Are they safe on keratin-treated or straightened hair?",
          answer:
            "Yes. Because they contain no salt, they do not strip keratin treatments or straightening, which is the main reason many treatments wear off sooner than expected.",
        },
      ],
    },
  },

  institucional: {
    metaTitle: "Institutional Line - Biodegradable Professional Cleaning",
    metaDescription:
      "Cleaning concentrates in 1 litre and gallon sizes for restaurants, hotels, schools and offices. Biodegradable, non-caustic and high-yield once diluted.",
    keywords: [
      "biodegradable institutional cleaning",
      "eco-friendly industrial cleaning products",
      "institutional degreaser",
      "industrial dishwashing detergent",
      "professional cleaning Colombia",
      "cleaning concentrates by the gallon",
    ],
    h1: "Institutional Line",
    subtitle: "High-yield concentrates for professional use",
    seoContent: {
      intro:
        "The Institutional Line is the same chemistry as the Home Line in 1 litre and gallon sizes, made for businesses that clean every day. Because they are concentrates, the cost per litre of prepared solution is far lower than a ready-to-use cleaner, and they take up a fraction of the storage space.",
      sections: [
        {
          heading: "Who this line is for",
          body:
            "Restaurants and commercial kitchens that degrease daily, hotels and buildings with shared areas, schools and nurseries where a non-toxic product matters, and offices with in-house or contracted cleaning staff.",
        },
        {
          heading: "Yield once diluted",
          body:
            "Each product includes its dilution table by use. One gallon of concentrate yields many litres of working solution, so the price that matters is not the one on the container but the cost per litre prepared. Available sizes and their prices are listed on each product page.",
        },
        {
          heading: "No risk to your staff",
          body:
            "These are non-caustic, non-flammable formulas. Cleaning staff need no special protective equipment to handle them, there are no harsh fumes in enclosed spaces, and they require no special storage conditions.",
        },
      ],
      faqs: [
        {
          question: "What sizes do they come in?",
          answer:
            "Mainly 1 litre and gallon. Available sizes and their prices are shown on each product page.",
        },
        {
          question: "How is this different from the Home Line?",
          answer:
            "The formulation is the same. What changes is the container size and the price per litre: the Institutional Line is built for high, continuous use.",
        },
        {
          question: "Do you deliver to businesses?",
          answer:
            "Yes. Message us on WhatsApp with the product, the size and the quantity you need and we will confirm availability and delivery.",
        },
        {
          question: "Is protective equipment required?",
          answer:
            "No. Being neither caustic nor flammable, they do not require gloves or a face mask for normal handling, though we always recommend following your establishment's own cleaning protocol.",
        },
      ],
    },
  },
};

/**
 * Spanish data with the English overlay applied. Mirrors getTranslatedProduct:
 * non-translatable fields (images, category) always come from the original.
 */
export function getTranslatedCategory(
  category: ProductCategory,
  locale: string
): CategoryData {
  const original = categoriesData[category];
  if (locale !== "en") {
    return original;
  }

  return {
    ...original,
    ...categoryTranslationsEn[category],
    category: original.category,
    socialImage: original.socialImage,
    socialImageWidth: original.socialImageWidth,
    socialImageHeight: original.socialImageHeight,
  };
}
