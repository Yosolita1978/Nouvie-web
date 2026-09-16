// English translations for product data
// Spanish is the source of truth in product-data.ts
// This file provides English overrides for text fields only

import type {
  DilutionRow,
  IngredientGroup,
  ProductStep,
  ProductSpec,
  ProductPresentation,
  SeoContent,
  UsePhoto,
} from "./product-data";

export interface ProductTranslation {
  name?: string;
  features?: string[];
  ingredientGroups?: IngredientGroup[];
  freeOfClaims?: string[];
  includes?: string[];
  tagline?: string;
  description?: string;
  benefits?: string[];
  badge?: string;
  uses?: string[];
  dilutionTable?: DilutionRow[];
  steps?: ProductStep[];
  specs?: ProductSpec[];
  presentations?: ProductPresentation[];
  usageTips?: string[];
  size?: string;
  seoContent?: SeoContent;
  // English label and alt for each use photo, in the same order as the Spanish
  // list. The photo itself comes from product-data.ts.
  usePhotos?: Omit<UsePhoto, "src">[];
}

export const productTranslationsEn: Record<string, ProductTranslation> = {
  // ============================================
  // HOME LINE
  // ============================================
  "desengrasante-bioptimo-500ml": {
    seoContent: {
      intro:
        "Bioptimo is a ready-to-use multi-purpose cleaner. It replaces spray degreaser, kitchen grease remover, stain remover, bathroom cleaner and laundry pre-wash: eight conventional products in a single eco-friendly bottle. Its biodegradable formula works without toxic chemicals on kitchen surfaces, bathrooms, fabrics and metals. It is one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
    },
    name: "Multi-Purpose Degreaser Ready To Use 500 ml",
    tagline: "Non-corrosive multipurpose degreaser. Citrus scent. Replaces 8 conventional products - Removes stains from fabric, rust, limescale, odors",
    description:
      "The BIOPTIMO Multi-Purpose Degreaser, unique in its category with two functions: degreaser and stain remover on fabric, floors, and metals. Effective on all water-safe surfaces. Eliminates grease and unwanted odors in the kitchen area and similar spaces, cleans grout. Ideal for bathroom cleaning, showers, removes mold and limescale. Works as a laundry pre-wash while caring for fabrics. Also suitable for stainless steel kitchens without damaging their surfaces.",
    benefits: [
      "Ready to use — no dilution required",
      "Cleans ovens, stovetops, and range hoods",
      "Cleans bathrooms, tiles, and shower doors",
      "Cleans grout and removes excess wax from floors",
      "Removes limescale, rust, and mold",
      "Laundry pre-wash and stain remover",
      "Citrus scent",
      "Non-toxic - Non-caustic - Non-flammable",
      "No gloves or face masks required",
    ],
    usePhotos: [
      {
        label: "Oven cleaning",
        alt: "Bioptimo degreaser on a steel counter in a commercial kitchen next to an oven with burnt-on grease",
      },
      {
        label: "Grout cleaning",
        alt: "Bioptimo degreaser on a tile floor with dirty grout lines and a scrub brush",
      },
      {
        label: "Removing stains from clothes",
        alt: "Bioptimo degreaser next to a shirt with grease and lipstick stains",
      },
    ],
    badge: "New",
    uses: [
      "Cleans ovens",
      "Cleans bathrooms, tiles, shower doors and similar",
      "Cleans grout",
      "Removes excess wax from floors",
      "Cleans ceramic floors",
      "Removes limescale, rust, and mold",
      "Laundry pre-wash and stain remover",
      "Eliminates odors"
    ],
  },

  "detergente-neutro": {
    seoContent: {
      intro:
        "A hypoallergenic liquid detergent formulated for people with sensitive skin, atopic dermatitis, allergies, or babies at home. No synthetic fragrances, no dyes and no harsh enzymes. Its coconut oil and lanolin formula washes delicate garments by hand or in the machine while respecting natural fibres. It is one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      audienceBlocks: [
        {
          heading: "For atopic skin and dermatitis",
          body: "The fragrances and dyes left behind in clothing are frequent triggers of dermatitis flare-ups. This hypoallergenic liquid detergent contains neither: garments come out with no chemical smell, ready for reactive skin.",
        },
        {
          heading: "For baby clothes",
          body: "Neutral pH and no harsh enzymes — suitable from the first month. It washes baby clothes, cotton cloths and towels without leaving residue that could irritate sensitive skin. One cap in the machine goes as far as two caps of a conventional detergent.",
        },
        {
          heading: "For people with allergies",
          body: "No parabens, no harsh sulfates, no synthetic perfumes. Recommended for people with allergic rhinitis who react to fragranced detergents. Washed clothes come out neutral to the nose.",
        },
      ],
      faqs: [
        {
          question: "What makes a detergent hypoallergenic?",
          answer:
            "That it contains none of the common triggers of allergies and dermatitis: synthetic fragrances, dyes, harsh enzymes and irritating preservatives. Nouvie Neutral Detergent removes all of these compounds and keeps only coconut-oil derived surfactants, which are gentle on skin.",
        },
        {
          question: "Is it safe for newborn clothing?",
          answer:
            "Yes. Its neutral pH, absence of fragrance and lanolin-based formulation make it suitable for newborn clothing from the first month. It leaves no residue that could irritate a baby's skin.",
        },
      ],
    },
    name: "Concentrated Neutral Detergent 250 ml",
    tagline: "Yields 3 dispensers of 500 ml. With coconut oil and lanolin",
    description:
      "Nouvie Neutral Detergent is a highly concentrated detergent. Its components are a perfectly balanced and synergistic blend of anionic, non-ionic surfactants and additives. This gives it not only unmatched cleaning power, but also, thanks to its high content of coconut oil alkylolamide, provides protection and softness to the skin. It is hypoallergenic. Ideal for washing delicate garments and baby clothes, it cares for and softens fibers. Thanks to its formula with 4 times more surfactant, this product is designed for impeccable washing both by hand and in dishwashing machines. It separates grease effortlessly, preventing the sponge from absorbing it.",
    benefits: [
      "Concentrated product - higher yield",
      "pH Neutral - cares for your hands and garments",
      "Made with natural surfactants",
      "Ideal for delicate and baby garments",
      "Non-toxic and biodegradable",
    ],
    usePhotos: [
      {
        label: "Washing dishes",
        alt: "Person washing a plate with a sponge and foam next to Nouvie Neutral Detergent at the sink",
      },
      {
        label: "Washing fruits and vegetables",
        alt: "Fruits and vegetables being rinsed under the tap next to Nouvie Neutral Detergent",
      },
      {
        label: "Dishwasher cleaning",
        alt: "Person wiping a dishwasher door with a cloth next to Nouvie Neutral Detergent",
      },
    ],
    badge: "Includes dispenser",
    uses: [
      "Dish washing",
      "Machine dishwashing (apply diluted product in the smallest compartment)",
      "Detergent for fine and baby clothing (one cap in the washer or for hand washing)",
      "Softener for fine and baby clothing",
      "Hand washing (protective glove)",
      "Fruit and vegetable washing"
    ],
    dilutionTable: [
      { uso: "Fruit and vegetable washing", cantidad: "3 puffs of prepared product", agua: "In a bowl with water" },
      { uso: "Dishwashing machine", cantidad: "Prepared product", agua: "In the soap dispenser compartment" },
      { uso: "Delicate garment washing", cantidad: "1 cap of concentrate", agua: "In a container with water, gently scrub and wring. No rinsing required" },
      { uso: "Greasy pots and dishes washing", cantidad: "Prepared product directly", agua: "Let it act and rinse. Then scrub with sponge" },
    ],
    usageTips: [
      "Ideal for all types of delicate fabrics",
      "Perfect for baby clothes",
      "Works in cold or hot water",
    ],
  },

  "limpia-pisos-concentrado": {
    seoContent: {
      h1Override: "Natural Floor Cleaner for Delicate Surfaces",
      intro:
        "A concentrated eco-friendly floor cleaner, formulated in Colombia for delicate surfaces. A single cap in a bucket of water is enough for 50 moppings. It is a cleaner for floating floors and at the same time a floor cleaner for wood, porcelain, tile, laminate and vinyl — without damaging the finish or leaving a sticky residue. It is part of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      audienceBlocks: [
        {
          heading: "For delicate surfaces",
          body: "Laminated wood, vinyl, polished porcelain, marble and ceramic tiles. Its carnauba wax formula protects the finish without yellowing it and respects factory sealants.",
        },
        {
          heading: "For homes with children and pets",
          body: "No toxic chemicals or harsh fragrances: you can walk barefoot on the floor as soon as it dries. Pets that lick the floor (dogs and cats) are not exposed to hazardous residue, unlike industrial floor cleaners containing ammonia or chlorine.",
        },
      ],
    },
    name: "Concentrated Floor Cleaner 250 ml",
    tagline: "Floor cleaner and shine enhancer. Yields 50 mopping sessions. Contains Carnauba wax. Cleans and shines all types of floors",
    description:
      "Nouvie Floor and Delicate Surface Cleaner is a concentrated liquid cleaner formulated to clean and shine in a single application all types of floors and delicate surfaces. It contains emulsifying agents, stabilizers, Carnauba wax, and polyethylene wax. It enhances and maintains natural shine. Special for car washing and waxing. Perfect for applying on bathroom mirrors and glass as an anti-fogging agent.",
    benefits: [
      "Highly concentrated product",
      "Non-slip",
      "Perfect for car washing",
      "Leaves no streaks or residue",
      "Wood, laminate, marble, ceramic, gres tile floors",
    ],
    usePhotos: [
      {
        label: "Wood floors",
        alt: "Person mopping a shiny wood floor next to Nouvie Floor Cleaner and a microfiber cloth",
      },
      {
        label: "Shiny surfaces like marble",
        alt: "Person mopping a shiny marble floor that reflects the Nouvie Floor Cleaner bottles",
      },
    ],
    badge: "Includes dispenser",
    uses: [
      "Car washing and waxing",
      "Wood protector and moisturizer for outdoor furniture (furniture, doors)",
      "Glass and mirror anti-fogging"
    ],
    dilutionTable: [
      { uso: "Mopping floors", cantidad: "1 cap (5ml)", agua: "A bucket with water" },
      { uso: "Waxing floors", cantidad: "Diluted product in dispenser", agua: "Apply on damp mop" },
      { uso: "Car washing", cantidad: "1 cap (5ml)", agua: "A bucket with water" },
      { uso: "Glass anti-fogging", cantidad: "Concentrated product with fingertip", agua: "Apply on mirror or glass, spread with dry cloth" },
    ],
    usageTips: [
      "No rinsing required",
    ],
  },

  "desengrasante-multiusos-concentrado": {
    name: "Concentrated Multi-Purpose Degreaser 250 ml",
    tagline: "Non-corrosive multipurpose degreaser. Yields 6 dispensers of 500 ml. Removes grease, mold, limescale, and stains",
    description:
      "Multi-Purpose Degreaser, four (4) times more surfactant than products in its category, easily separates and dissolves grease from ovens and range hoods. It has a high concentration of cleaning agents, surfactants, moisturizers, and surface-active agents. It has two functions: degreaser and stain remover on fabric, floors, and metals. It eliminates unwanted odors in the kitchen area and similar spaces, cleans grout. Ideal for bathroom cleaning, showers, removes mold and limescale. It is one of the most powerful degreasers in our line. Ideal for removing wax, stainless steel, without damaging surfaces. Works as a laundry pre-wash while caring for fabrics, removes stains such as blood, makeup, wine, and more. Given its versatility, it eliminates the need for a wide variety of cleaners.",
    benefits: [
      "Dual function: degreaser and stain remover",
      "Effective on all surfaces",
      "Eliminates grease and odors",
      "No gloves or face masks required for use",
      "Does not damage fabric fibers when removing stains",
      "Non-corrosive - Non-caustic - Non-toxic",
    ],
    usePhotos: [
      {
        label: "Oven cleaning",
        alt: "Nouvie Multi-Purpose Degreaser in a kitchen next to an open oven with grease and foam on the door",
      },
      {
        label: "Grout cleaning",
        alt: "Nouvie Multi-Purpose Degreaser on a tile floor with foam on the grout lines and a scrub brush",
      },
      {
        label: "Removing stains from clothes",
        alt: "Nouvie Multi-Purpose Degreaser next to a stained white shirt in a laundry room",
      },
    ],
    badge: "Includes dispenser",
    uses: [
      "Cleans ovens, stovetops, and range hoods",
      "Cleans bathrooms, tiles, shower doors and similar",
      "Cleans grout",
      "Removes excess wax from floors",
      "Cleans ceramic floors (1 cap in a bucket with 2 L of water)",
      "Removes limescale and rust",
      "Laundry pre-wash",
      "Eliminates odors"
    ],
    usageTips: [
      "For heavy grease, dilute one cap of product in 5 caps of hot water",
    ],
  },

  "lustra-muebles-concentrado": {
    seoContent: {
      h1Override: "Natural Furniture Polish",
      intro:
        "A natural furniture polish in concentrated form that yields 3 dispensers of 500 ml. Formulated in Colombia with emulsified silicones that add shine, hydrate and protect without leaving grease. It works as an oil for modern wooden furniture, dark woods such as cedar or walnut, restored antiques, everyday dining tables and kitchen countertops. It also works as a spray furniture polish when diluted in an atomizer. It is part of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      audienceBlocks: [
        {
          heading: "For wooden furniture and antiques",
          body: "Hydrates without darkening the wood. Ideal for antique furniture, where an industrial polish would leave a sticky layer that attracts more dust. Apply with a soft cloth in the direction of the grain. Repels dust for days.",
        },
        {
          heading: "For homes with pets",
          body: "No toxic chemicals: your cat can lie on the polished furniture safely. It is the same formula we use on countertops where food is prepared — safe for small animals' skin and breathing.",
        },
      ],
    },
    name: "Concentrated Furniture Polish 250 ml",
    tagline: "Non-greasy, anti-static furniture polish. Yields 3 dispensers of 500 ml. Repels dust, hydrates and shines",
    description:
      "Nouvie Furniture Polish contains emulsified silicones in its formulation, which together with cleaning agents and polishing elements provide shine and protect all types of furniture and surfaces, such as wood, kitchen furniture, formica, leather, faux leather, kitchen surfaces, and appliances, forming a film that attracts less dirt and is characterized by providing a smooth and shiny finish. It works as a protective layer for kitchen countertops and appliances, preventing grease from adhering.",
    benefits: [
      "Anti-static and anti-fingerprint",
      "Ideal for cleaning all types of screens (TV, laptop, and phones)",
      "Polishes and hydrates wood, leather, faux leather, and formica furniture",
      "Cleans and polishes leather and faux leather",
      "Anti-adherent and anti-static",
      "Car dashboard",
    ],
    usePhotos: [
      {
        label: "Keeps screens free of fingerprints",
        alt: "Laptop with a clean, fingerprint-free screen next to Nouvie Furniture Polish and a microfiber cloth",
      },
    ],
    badge: "Includes dispenser",
    uses: [
      "Furniture polish for wood, formica, leather, and faux leather",
      "Polishes kitchen surfaces and appliances",
      "Maintains shine and protects silver, bronze, and copper items from oxidation",
      "Cleans car dashboard without leaving grease",
      "Anti-fingerprint and anti-static for glass and metal surfaces",
      "Prevents dust buildup on exterior glass, apply with cloth after glass cleaner",
      "Ideal for cleaning all types of screens (TV, laptop, and phones)"
    ],
    usageTips: [
      "Apply with a soft, dry cloth, never directly on the object",
      "DO NOT apply on floors",
      "Perfect for leather handbags and purses",
    ],
  },

  "limpia-vidrios-concentrado": {
    seoContent: {
      sections: [
        {
          heading: "How to clean carpets without a machine",
          body: "Nouvie concentrated Glass Cleaner also works as a dry carpet cleaner. Dilute 1 cap of product in 20 caps of warm water and whisk with a sponge until you get a firm foam. Apply the foam to the carpet (not the liquid), let it act for 5 minutes and remove with a clean towel. The fibre absorbs the dirt but not the water, avoiding damp stains. For older stains, treat them first with Bioptimo degreaser. It is also an effective mirror cleaner and a professional glass cleaner for streak-free results. It is one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
        },
      ],
    },
    name: "Concentrated Glass Cleaner 250 ml",
    tagline: "Glass cleaner and fabric care. Yields 100 dispensers of 500 ml. Quick drying - Shines without leaving cloth traces",
    description:
      "The Concentrated Glass Cleaner and Fabric Care is a product of extremely high cleaning power, specially formulated for cleaning carpets, upholstery, corduroy, suede, etc. Cleans glass, crystals, stainless steel, metals in general, without leaving marks, providing a shiny finish. Suitable for car upholstery washing, fabric furniture, and clothing. Revives colors and protects fabric fibers.",
    benefits: [
      "Yields up to 100 dispensers of 500 ml",
      "Cleans and shines glass and mirrors",
      "Polishes steel and aluminum surfaces",
      "Protects fabric fibers and revives colors",
    ],
    usePhotos: [
      {
        label: "Upholstery cleaning",
        alt: "Person wiping the arm of an upholstered armchair with a cloth next to Nouvie Glass Cleaner",
      },
      {
        label: "Machine laundry",
        alt: "Nouvie Glass Cleaner on top of a washing machine while a person loads clothes into it",
      },
    ],
    badge: "Includes dispenser",
    uses: [
      "Cleans and shines glass and mirrors without leaving marks",
      "Polishes steel and aluminum metal surfaces",
      "Pre-ironing for clothing",
      "Car upholstery, fabric furniture, and clothing washing. Revives colors"
    ],
    dilutionTable: [
      { uso: "Glass cleaner", cantidad: "Half a cap of product (2.5 ml)", agua: "500 ml water bottle" },
      { uso: "Dry upholstery cleaning", cantidad: "1 cap of product in container with 20 caps of water", agua: "Make stiff foam with sponge. Apply on upholstery, let act, remove foam with towel. Note: for stains, first remove with multi-purpose degreaser" },
      { uso: "Pre-ironing for clothing", cantidad: "Same preparation as glass cleaner", agua: "Apply to clothing" },
      { uso: "Machine laundry washing", cantidad: "3 caps for a full load", agua: "Note: if softener is needed, apply one cap of neutral detergent" },
    ],
    usageTips: [
      "Use with a spray bottle for glass",
      "On carpets, rub gently",
      "Allow to air dry naturally",
    ],
  },

  "atomizador": {
    name: "Nouvie Spray Bottle",
    tagline: "375 ml recyclable bottle. All measuring dosages included",
    description:
      "High-quality reusable Spray Bottle. Contains the measurements for preparing all concentrated products from the Nouvie Home Line. You can get it FREE! For every 10 bottles you send us for recycling.",
    benefits: [
      "High quality and durability",
      "Fine and even spray",
      "All measuring dosages included",
      "Easy to use",
      "FREE when you recycle 10 bottles!",
    ],
    usageTips: [
      "Use it with any Home Line product",
      "Recycle 10 bottles and get one free",
    ],
  },

  // ============================================
  // HAIR CARE LINE - TREATMENTS
  // ============================================
  "tratamiento-suave-y-liso": {
    seoContent: {
      h1Override: "Strengthening Hair Kit",
      faqs: [
        {
          question: "If my hair is frizzy and dull, which line should I use?",
          answer:
            "The Strengthening line with Bio-Keratin, also known as Smooth and Silky. Bio-Keratin is developed from a special blend of amino acids obtained from wheat and soya. Those amino acids are complex protein structures that are immediately compatible with the proteins present in the hair follicle and the hair fibre. Hair needs protein because it is made of keratin, and it also needs collagen. Consistent use of Bio-Keratin improves and softens the hair fibre, giving hair that is easy to shape, shiny and free of frizz.",
        },
        {
          question: "What is Bio-Keratin and what does it do for hair?",
          answer:
            "Amino acids are the building blocks of every protein in the body, and hair is made of a protein called keratin. If too few amino acids reach the cells in the hair follicles, keratin production drops or the keratin produced is defective, and the result is fragile hair. Bio-Keratin supplies three key amino acids: arginine, which the body stops synthesising well under stress and with age; lysine, which stimulates collagen and matters for repairing damaged hair; and methionine, an antioxidant that helps protect the follicles from oxidative stress. Its benefits: it strengthens the hair follicle and the hair fibre, stimulates growth, allows perfect styling and leaves a smooth finish.",
        },
        {
          question: "Why should I avoid shampoo with sulfates?",
          answer:
            "Ammonium lauryl sulfate (ALS) and sodium lauryl sulfate (SLS) are abrasive detergents and one of the classic ingredients in almost every shampoo: they clean and degrease through the foam they produce. They are used because they are cheap and effective, but in a short time they wear down the scalp and the hair. In stripping the oil they also destroy the natural lipids the skin produces to defend itself, which makes them irritating. Many problems of dryness, scalp irritation and dandruff come from their continued use. The whole Nouvie hair line is sulfate free.",
        },
        {
          question: "Why does the shampoo barely foam?",
          answer:
            "Because it is sulfate free, and sulfates are precisely the detergents that produce all that foam in conventional shampoos. The Strengthening Shampoo cleans with a gentle plant-derived agent: it is normal for it to barely foam on the first wash and to foam a little on the second. It cleans just the same, only without being harsh on the scalp.",
        },
        {
          question: "Why is hydrolysed quinoa good for hair?",
          answer:
            "Hydrolysed quinoa is essential for a healthy nervous system and for the formation of red blood cells, which promotes hair growth. In the formula it also provides hydration and helps protect against dandruff, and alongside Bio-Keratin it prevents the strand from breaking.",
        },
        {
          question: "Why are yogurt protein and prebiotics good for hair?",
          answer:
            "Protein from natural yogurt strengthens the hair fibre, reduces breakage and encourages healthy growth in the follicles. It provides vitamins B6 and B12, zinc that strengthens the scalp, lactic acid whose moisturising properties make it a great natural conditioner, and calcium and magnesium to nourish the follicles. Prebiotics favour the good bacteria on the scalp and inhibit the harmful ones, which helps to balance it, improves hair density and leaves hair strong, shiny and tangle-free.",
        },
        {
          question: "How often is it used and how long does the kit last?",
          answer:
            "The shampoo is used at every wash, the mask 2 to 3 times a week left on for 5 minutes, and the styling lotion daily on damp hair, left in. At that frequency, the complete kit (237 ml shampoo, 177 ml mask and 177 ml lotion) lasts several weeks on medium-length hair.",
        },
        {
          question: "Can each product be bought separately?",
          answer:
            "Yes. The shampoo, mask and styling lotion from the Strengthening line with Bio Keratin are sold individually, as well as in the complete 3-step kit. Message us on WhatsApp and we will confirm prices, availability and delivery.",
        },
      ],
    },
    name: "Strengthening Hair Kit with Bio Keratin - 3 steps",
    tagline: "Bio Keratin, kiwi and açaí for smooth, silky, strong, frizz-free hair",
    description:
      "Completely transform your hair with the Nouvie Kiwi & Açaí Strengthening Hair Kit. This complete 3-step botanical treatment (Shampoo, Mask and Molding Lotion) combines Bio-Keratin with our exclusive blend of active natural components to deeply improve and soften the hair fibre. Designed to strengthen the hair follicle, stimulate healthy growth and replace the keratin lost over time, this system eliminates frizz from the very first use, seals the ends and leaves a soft, silky, luminous and easy-to-manage finish.",
    benefits: [
      "Natural Bio Keratin",
      "Strengthens the hair follicle",
      "Eliminates frizz from the first use",
      "Smooth, silky, luminous hair",
      "8 nourishing essential oils",
    ],
    features: [
      "Complete 3-step treatment: a synergistic system of Shampoo, Mask and Molding Lotion formulated with botanical ingredients.",
      "Soft and silky effect: brings extreme softness to the hair fibre and eliminates frizz.",
      "Strength and growth: stimulates the root and prevents breakage thanks to Bio-Keratin and hydrolysed quinoa.",
      "Advanced nutrition with natural actives: enriched with 8 essential oils and proteins that restore vitality and shine.",
    ],
    ingredientGroups: [
      {
        heading: "Natural oils and extracts",
        body: "Pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root, Bio-Keratin, kiwi and açaí.",
      },
      {
        heading: "Active components",
        body: "Hydrolysed quinoa (promotes growth, protects against dandruff and hydrates), wheat and soy amino acids (a source of vitamin E and proteins that repair the fibre), and arginine, threonine and serine (nitric oxide precursor amino acids for growth).",
      },
      {
        heading: "Yogurt protein and prebiotics",
        body: "Rich in vitamins B6 and B12, zinc, lactic acid, calcium and magnesium for greater flexibility, hydration and anti-ageing properties.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Shampoo, 237 ml (Step 1): gentle cleansing with a natural plant-derived base. Being sulfate free, it lathers only slightly on the first wash.",
      "1x Mask, 177 ml (Step 2): deep hydration. Apply from mid-lengths to ends, leave on for 5 minutes and rinse. Recommended use: 2 to 3 times a week.",
      "1x Molding Lotion, 177 ml (Step 3): leave-in heat protectant. Apply a small amount to damp hair and style naturally or with heat.",
    ],
    steps: [
      { step: 1, name: "Strengthening Shampoo", instruction: "Wash your hair with the Shampoo using an amount of product suited to your hair's length and volume. Shake a little before use, massage the scalp in circular motions and rinse with plenty of room-temperature water. It is normal for it to produce no lather on the first wash; on the second it lathers only slightly because it is sulfate free and its formula uses a gentle plant-based cleansing agent." },
      { step: 2, name: "Strengthening Mask", instruction: "Apply the Mask immediately after the Shampoo. Remove excess water, shake a little before use and place a portion suited to your hair's length and volume in the palm of your hand, rubbing for a few seconds. Apply evenly from mid-lengths to ends, leave on for 5 minutes and rinse with plenty of water, preferably cold. Use 2 to 3 times a week." },
      { step: 3, name: "Strengthening Molding Lotion", instruction: "After washing your hair with Nouvie Shampoo and Mask, towel dry, shake a little before use and place a small portion in the centre of your hand according to your hair's length and volume. Rub between your hands for a few seconds and apply evenly all over the hair without rinsing. Then style as you like, letting it air dry or using a hairdryer, straightener or curling iron. Apply daily to dry hair to style and as protection against UV rays." },
    ],
  },
  "tratamiento-reparacion-intensa": {
    seoContent: {
      h1Override: "Intensive Repair Hair Kit",
      faqs: [
        {
          question: "If my hair is burnt and dry, colour-treated or bleached, which line should I use?",
          answer:
            "The Intensive Repair line. Because it contains shea butter, it provides moisture for dry or damaged hair and has been shown to have anti-inflammatory properties. It absorbs easily into the scalp and does not clog the pores, delivering moisture from the roots and carrying it down to the ends. That makes it very beneficial for frizzy, colour-treated or heat-treated hair.",
        },
        {
          question: "What is shea butter and why is it good for hair?",
          answer:
            "Shea butter is extracted from the nut of the shea tree, which grows in the tropical regions of East and West Africa. It is the most widely used natural hair conditioner and is known as “mother nature's conditioner” for its extraordinary moisturising properties. It soothes an irritated, itchy scalp caused by dryness or dandruff. It protects against heat: it does not sit on top of the hair but absorbs without leaving a greasy or heavy feel, and coats the hair shaft to protect it from sun and heat. It is credited with a low but sufficient SPF to protect against ultraviolet rays, which is especially useful on colour-treated hair. And it is an excellent softener for coarse, brittle or fragile curly hair.",
        },
        {
          question: "Why should I avoid shampoo with sulfates?",
          answer:
            "Ammonium lauryl sulfate (ALS) and sodium lauryl sulfate (SLS) are abrasive detergents and one of the classic ingredients in almost every shampoo: they clean and degrease through the foam they produce. They are used because they are cheap and effective, but in a short time they wear down the scalp and the hair. In stripping the oil they also destroy the natural lipids the skin produces to defend itself, which makes them irritating. Many problems of dryness, scalp irritation and dandruff come from their continued use. The whole Nouvie hair line is sulfate free.",
        },
        {
          question: "Why does the shampoo barely foam?",
          answer:
            "Because it is sulfate free, and sulfates are precisely the detergents that produce all that foam in conventional shampoos. The Intensive Repair Shampoo cleans with a gentle plant-derived agent: it is normal for it to barely foam on the first wash and to foam a little on the second. It cleans just the same, only without being harsh on the scalp.",
        },
        {
          question: "What do the 8 essential oils in the kit give the hair?",
          answer:
            "Each oil has a role. Pomegranate seed oil strengthens and is an antioxidant. Raspberry seed oil provides vitamins E and A, which nourish, repair and protect from everyday damage. Almond oil gives protection and shine and stimulates growth. Hazelnut oil hydrates and nourishes the scalp, providing calcium and potassium. Macadamia oil provides Omega 7, which supports sebum production in the hair follicles. Argan oil gives strength and flexibility, repairs dry and split ends, removes frizz and extends the life of colour. Mango seed butter, rich in Omega 6, enriches the hair fibre and the scalp. And carrot root extract provides antioxidant beta-carotenes that help produce the natural sebum that moisturises the scalp.",
        },
        {
          question: "Why are yogurt protein and prebiotics good for hair?",
          answer:
            "Protein from natural yogurt strengthens the hair fibre, reduces breakage and encourages healthy growth in the follicles. It provides vitamins B6 and B12, zinc that strengthens the scalp, lactic acid whose moisturising properties make it a great natural conditioner, and calcium and magnesium to nourish the follicles. Prebiotics favour the good bacteria on the scalp and inhibit the harmful ones, which helps to balance it, improves hair density and leaves hair strong, shiny and nourished.",
        },
        {
          question: "How often is it used and how long does the kit last?",
          answer:
            "The shampoo is used at every wash, the mask 2 to 3 times a week left on for 5 minutes, and the styling lotion daily on damp or dry hair, left in. At that frequency, the complete kit (237 ml shampoo, 177 ml mask and 177 ml lotion) lasts several weeks on medium-length hair.",
        },
        {
          question: "Can each product be bought separately?",
          answer:
            "Yes. The shampoo, mask and styling lotion from the Intensive Repair line are sold individually, as well as in the complete 3-step kit. Message us on WhatsApp and we will confirm prices, availability and delivery.",
        },
      ],
    },
    name: "Intensive Repair Hair Kit with Shea Butter - 3 steps",
    tagline: "Shea butter, Royal Honey & Melon for dry, damaged or brittle hair",
    description:
      "Stronger, shinier, silkier hair with the power of shea butter, nature's own conditioner. Restore your hair's vitality and shine with the 3-step Nouvie Shea Butter Intensive Repair Treatment Kit. The ultra-moisturising power of shea butter, together with a potent amino acid complex and 8 essential oils, repairs dry, damaged or brittle hair through deep hydration. Its formula is designed to stimulate growth, prevent split ends and create an active protective shield against heat (hairdryers and straighteners), UV rays, chlorine and salt, keeping your colour intact.",
    benefits: [
      "Ultra-moisturising shea butter",
      "Repairs dry, brittle hair",
      "Heat shield and UV protection",
      "Prevents split ends",
      "Keeps your colour intact",
    ],
    features: [
      "Formula enriched with 8 essential oils (pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango and carrot).",
      "Anti-ageing hair effect with vitamins B6 and B12, zinc, lactic acid, calcium and magnesium.",
      "Soothes irritated scalp and reduces dryness thanks to its anti-inflammatory properties.",
      "100% free from sulfates, parabens, harsh salt systems, dyes and fragrances. Cruelty-free (not tested on animals).",
    ],
    ingredientGroups: [
      {
        heading: "Natural oils and extracts",
        body: "Pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root, shea butter, honey and melon.",
      },
      {
        heading: "Active components",
        body: "Hydrolysed quinoa (promotes growth, protects against dandruff and hydrates), wheat and soy amino acids (a source of vitamin E and proteins that repair the fibre), and arginine, threonine and serine (nitric oxide precursor amino acids for growth).",
      },
      {
        heading: "Yogurt protein and prebiotics",
        body: "Rich in vitamins B6 and B12, zinc, lactic acid, calcium and magnesium for greater flexibility, hydration and anti-ageing properties.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Shampoo, 237 ml (Step 1): gentle cleansing with a natural plant-derived base. Being sulfate free, it produces little lather.",
      "1x Mask, 177 ml (Step 2): deep hydration. Apply from mid-lengths to ends, leave on for 5 minutes and rinse. Recommended use: 2 to 3 times a week.",
      "1x Molding Lotion, 177 ml (Step 3): leave-in heat protectant. Apply a small amount to damp or dry hair and style naturally or with heat.",
    ],
    steps: [
      { step: 1, name: "Intensive Repair Shampoo", instruction: "Wash your hair with the Shampoo using an amount of product suited to your hair's length and volume. Shake a little before use, massage the scalp in circular motions and rinse with plenty of room-temperature water. It is normal for it to produce no lather on the first wash; on the second it lathers only slightly because it is sulfate free and its formula uses a gentle plant-based cleansing agent." },
      { step: 2, name: "Intensive Repair Mask", instruction: "Apply the Mask immediately after the Shampoo. Remove excess water, shake a little before use and place a portion suited to your hair's length and volume in the palm of your hand, rubbing for a few seconds. Apply evenly from mid-lengths to ends, leave on for 5 minutes and rinse with plenty of water, preferably cold. Use 2 to 3 times a week." },
      { step: 3, name: "Intensive Repair Molding Lotion", instruction: "After washing your hair with Nouvie Shampoo and Mask, towel dry, shake a little before use and place a small portion in the centre of your hand according to your hair's length and volume. Rub between your hands for a few seconds and apply evenly all over the hair without rinsing. Then style as you like, letting it air dry or using a hairdryer, straightener or curling iron. Apply daily to dry hair to style and as protection against UV rays." },
    ],
  },
  "tratamiento-revitalizante": {
    seoContent: {
      h1Override: "Revitalising Anti-Hair-Loss Kit",
      faqs: [
        {
          question: "If my hair is falling out or feels weak, which line should I use?",
          answer:
            "The Revitalising line. It contains probiotics packed with protein, calcium and vitamins D, B2 (riboflavin), B12 and B5, along with prebiotics and yogurt, which bring many benefits for the health of the scalp and the hair fibre: they strengthen the hair follicle and have an anti-ageing effect for more vigorous, younger-looking hair. It also contains hydrolysed keratin, a protein whose main role is to restructure the hair by conditioning the hair fibre, giving it a healthy, soft appearance.",
        },
        {
          question: "What is hydrolysed keratin and why is it good for hair?",
          answer:
            "Keratin occurs naturally in the components that make up our hair, and it gradually deteriorates through environmental factors and the passage of time. That is why a product is needed to help regenerate the outermost layers of the fibre and recover its natural shine. Hydrolysed keratin rebuilds the hair fibre and provides hydration. Its benefits: it strengthens the hair fibre, restores brittle or damaged hair, stimulates improvement in the scalp, stimulates hair growth and allows perfect styling.",
        },
        {
          question: "What does argan oil give the hair?",
          answer:
            "Argan oil gives hair strength and flexibility, repairs dry and split ends, removes frizz and extends the life of colour. It is the lead active in this line, alongside hydrolysed keratin and coconut yogurt protein.",
        },
        {
          question: "Is this kit only for men?",
          answer:
            "The bottle carries the For Men reference and the Mountain Breeze scent is aimed at a male audience, but the formula works just the same on any hair. It is recommended for men and women with hair loss caused by medical treatment or illness, and for sensitive scalps.",
        },
        {
          question: "Why are yogurt prebiotics good for hair?",
          answer:
            "They have a positive effect on the good bacteria on the scalp and inhibit the harmful ones. Keeping those good bacteria in good condition helps to balance the scalp and to strengthen it. They also promote the growth of thicker, stronger hair, improve density and restore the balance that gives hair that is strong, shiny, tangle-free and nourished, with a vitamin B12 complex to nourish and protect.",
        },
        {
          question: "Why should I avoid shampoo with sulfates?",
          answer:
            "Ammonium lauryl sulfate (ALS) and sodium lauryl sulfate (SLS) are abrasive detergents and one of the classic ingredients in almost every shampoo: they clean and degrease through the foam they produce. They are used because they are cheap and effective, but in a short time they wear down the scalp and the hair. In stripping the oil they also destroy the natural lipids the skin produces to defend itself, which makes them irritating. Many problems of dryness, scalp irritation and dandruff come from their continued use. The whole Nouvie hair line is sulfate free.",
        },
        {
          question: "Why does the shampoo barely foam?",
          answer:
            "Because it is sulfate free, and sulfates are precisely the detergents that produce all that foam in conventional shampoos. The Revitalising Shampoo cleans with a gentle plant-derived agent: it is normal for it to barely foam on the first wash and to foam a little on the second. It cleans just the same, only without being harsh on a scalp that is already sensitive.",
        },
        {
          question: "Can each product be bought separately?",
          answer:
            "Yes. The Revitalising Shampoo and the Styling Lotion are sold individually, as well as in the complete 2-step kit. Message us on WhatsApp and we will confirm prices, availability and delivery.",
        },
      ],
    },
    name: "Revitalizing Anti-Hair-Loss Kit with Prebiotics, Argan Oil and Hydrolysed Keratin - 2 steps",
    tagline: "A 2-step treatment to slow hair loss and strengthen from the root",
    description:
      "A 2-step revitalizing hair treatment formulated especially for men or women experiencing hair loss due to medical treatment or illness. This system combines prebiotics, coconut yogurt protein, hydrolysed keratin and argan oil to stimulate the hair follicle, slow hair loss and strengthen the hair fibre from the root. Enriched with a complex of 12 natural ingredients — including 8 essential oils and quinoa — it repairs brittle hair, fights dandruff, relieves itching and restores a vigorous, young and healthy look. 100% free from sulfates, parabens, harsh salts, dyes and synthetic fragrances.",
    benefits: [
      "Slows hair loss",
      "Argan oil and hydrolysed keratin",
      "Coconut yogurt and prebiotics",
      "Strengthens the hair follicle",
      "Prevents dandruff, itching and dryness",
    ],
    features: [
      "Dual anti-hair-loss system: includes Revitalizing Shampoo and leave-in Molding Lotion for complete care.",
      "Botanical formula with 12 actives: argan oil, yogurt protein, prebiotics, hydrolysed keratin, quinoa and 8 essential oils (pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root).",
      "Deep scalp health: prevents dandruff, dryness, irritation and premature hair ageing.",
      "Free from harsh chemicals: no sulfates, parabens, harsh salt systems, dyes or artificial fragrances. Not tested on animals.",
    ],
    ingredientGroups: [
      {
        heading: "Natural oils and extracts (8 essentials)",
        body: "Pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root.",
      },
      {
        heading: "Active components",
        body: "Hydrolysed quinoa (stimulates growth and protects against dandruff), wheat and soy amino acids, and the arginine, threonine and serine complex (nitric oxide precursors for growth).",
      },
      {
        heading: "Coconut yogurt and prebiotics",
        body: "Rich in vitamins B6 and B12, zinc, lactic acid, calcium and magnesium for deep hydration and anti-ageing properties.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Revitalizing Shampoo Mountain Breeze, 237 ml (Step 1): balanced sulfate-free cleansing that removes impurities and cares for the scalp.",
      "1x Molding Lotion / Natural Molding, 177 ml (Step 2): leave-in heat-protecting treatment that holds, protects and gives a natural finish.",
    ],
    steps: [
      { step: 1, name: "Revitalizing Shampoo", instruction: "Wash your hair with the Shampoo using an amount of product suited to your hair's length and volume. Shake a little before use, massage the scalp in circular motions and rinse with plenty of room-temperature water. It is normal for it to produce no lather on the first wash; on the second it lathers only slightly because it is sulfate free and its formula uses a gentle plant-based cleansing agent." },
      { step: 2, name: "Revitalizing Molding Lotion", instruction: "After washing your hair with Nouvie Shampoo, towel dry, shake a little before use and place a small portion in the centre of your hand according to your hair's length and volume. Rub between your hands for a few seconds and apply evenly all over the hair without rinsing. Then style as you like, letting it air dry. Apply daily to dry hair to style and as protection against UV rays." },
    ],
  },
  "shampoo-suave-y-liso": {
    name: "Strengthening Shampoo with Bio Keratin",
    tagline: "Salt-free shampoo, no sulfates or parabens. Bio Keratin that strengthens and adds shine",
    description:
      "Cleanse and soften your hair with the Nouvie Kiwi & Açaí Strengthening Shampoo, also known as the Smooth & Silky Salt-Free Shampoo. Formulated without sulfates or harsh salts, this deep, balanced cleansing shampoo removes impurities while delivering Bio-Keratin and hydrolysed quinoa to the hair fibre. Designed to strengthen the hair follicle, it stimulates healthy growth, fights dandruff and restores the hair's natural vitality from the very first use, leaving it soft, silky and clean.",
    benefits: [
      "Balanced sulfate-free cleansing",
      "Bio Keratin that strengthens and adds shine",
      "Reduces frizz",
      "Stimulates healthy growth",
      "Suitable for daily use",
    ],
    features: [
      "Balanced cleansing: removes residue and oil without stressing the scalp.",
      "Formula free from harsh sulfates: cares for hair and body health.",
      "Active strengthening: Bio-Keratin and hydrolysed quinoa prevent breakage, soften the hair fibre and strengthen the follicle, stimulating growth.",
    ],
    ingredientGroups: [
      {
        heading: "Natural oils and extracts",
        body: "Pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root, Bio-Keratin, kiwi and açaí.",
      },
      {
        heading: "Active components",
        body: "Hydrolysed quinoa (promotes growth, protects against dandruff and hydrates), wheat and soy amino acids (a source of vitamin E and proteins that repair the fibre), and arginine, threonine and serine (nitric oxide precursor amino acids for growth).",
      },
      {
        heading: "Yogurt protein and prebiotics",
        body: "Rich in vitamins B6 and B12, zinc, lactic acid, calcium and magnesium for greater flexibility, hydration and anti-ageing properties.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Shampoo - 237 ml tube (Step 1 of the Strengthening Hair Kit with Bio Keratin)",
    ],
    size: "237 ml",
    badge: "237 ml",
    steps: [
      { step: 1, name: "Strengthening Shampoo", instruction: "Wash your hair with the Shampoo using an amount of product suited to your hair's length and volume. Shake a little before use, massage the scalp in circular motions and rinse with plenty of room-temperature water. It is normal for it to produce no lather on the first wash; on the second it lathers only slightly because it is sulfate free and its formula uses a gentle plant-based cleansing agent." },
    ],
    seoContent: {
      intro:
        "Sulfates are harsh detergents that clean, but also dry out hair, irritate the scalp and speed up the loss of colour and shine. Nouvie Liso y Sedoso Sulfate-Free Shampoo cleans with gentle coconut-derived surfactants, with no sulfates or parabens, leaving hair hydrated, shiny and manageable from the very first wash. It is part of the hair care line by Nouvie, a Colombian brand of [eco-friendly cleaning products](/nosotros).",
      sections: [
        {
          heading: "Key benefits",
          body: "Natural Bio Keratin that seals the hair fibre and adds shine. No sulfates or parabens: it respects the scalp and makes colour last longer. It straightens naturally and reduces the frizz caused by Colombia's humid climate. Suitable for daily use and for all hair types, especially straight, wavy and chemically treated hair. 100% biodegradable formula, made in Colombia.",
        },
        {
          heading: "How to use",
          body: "Apply an almond-sized amount to the roots of damp hair. Massage with your fingertips for 1 minute. Leave it on for 2 minutes so the Bio Keratin can penetrate the hair fibre. Rinse with warm water. Repeat if needed. For best results, follow with the Liso y Sedoso Mask and Lotion.",
        },
      ],
      faqs: [
        {
          question: "Which shampoo is good for straight hair?",
          answer:
            "A sulfate-free shampoo such as Nouvie Liso y Sedoso cleans without drying and keeps the hair fibre soft, controlling the frizz that makes straight hair lose its shape. The natural Bio Keratin in its formula seals the cuticle for a smoother, shinier finish.",
        },
        {
          question: "How do I get soft, straight hair?",
          answer:
            "Three steps: wash with a sulfate-free shampoo, apply a nourishing keratin mask, and seal with a protective lotion. The Nouvie Liso y Sedoso line includes all three products, designed to work together on straight, wavy or chemically treated hair.",
        },
        {
          question: "What type of shampoo should I use for straight hair?",
          answer:
            "For straight hair the ideal choice is a gentle, sulfate-free shampoo with hydrating actives. Nouvie Liso y Sedoso Shampoo does exactly that: it cleans with coconut-derived surfactants, hydrates with Bio Keratin and leaves hair more manageable and shiny without weighing it down.",
        },
        {
          question: "Does sulfate-free shampoo really work?",
          answer:
            "Yes. The difference compared with a traditional shampoo is that it cleans without being aggressive: it produces less lather, but it does remove grease and residue. Hair feels softer from the first application and, with continued use, recovers shine and strength. A sulfate-free shampoo works best when combined with the mask and lotion from the same line.",
        },
      ],
    },
  },
  "mascarilla-suave-y-liso": {
    seoContent: {
      faqs: [
        {
          question: "How often should I use the hair mask?",
          answer:
            "2 to 3 times a week, always straight after the shampoo. There is no need to use it at every wash: the mask is a deep-nourishing treatment, and at that frequency hair stays soft without being weighed down. Leave it on for 5 minutes and rinse with plenty of water, preferably cold.",
        },
        {
          question: "How is the mask applied?",
          answer:
            "After shampooing, squeeze out the excess water and stir the product a little before use. Put an amount suited to the length and volume of your hair in the palm of your hand and rub for a few seconds. Apply evenly from mid-lengths to ends, never at the roots. Leave for 5 minutes, detangle with your fingers and rinse with plenty of cold water, which helps seal the cuticle.",
        },
        {
          question: "If my hair is frizzy and dull, which line should I use?",
          answer:
            "The Strengthening line with Bio-Keratin, also known as Smooth and Silky. Bio-Keratin is developed from a special blend of amino acids obtained from wheat and soya — complex protein structures that are immediately compatible with the proteins present in the hair follicle and the hair fibre. Consistent use improves and softens the hair fibre, giving hair that is easy to shape, shiny and free of frizz.",
        },
        {
          question: "Does the mask replace conditioner?",
          answer:
            "Yes. The Strengthening Mask is a deep-nourishing treatment that does the job of a conditioner and goes further: its 8 essential oils, yogurt protein and prebiotics work inside the hair fibre, not only on the surface. That is why it is left on for 5 minutes instead of rinsed out straight away.",
        },
        {
          question: "Is it safe on colour-treated or straightened hair?",
          answer:
            "Yes. The formula is free of sulfates, harsh salt systems and dyes, which are exactly the ingredients that wear down colour and weaken straightening treatments. It is safe on colour-treated, highlighted or straightened hair, and helps the tone last longer.",
        },
        {
          question: "Why are yogurt protein and prebiotics good for hair?",
          answer:
            "Protein from natural yogurt strengthens the hair fibre, reduces breakage and encourages healthy growth in the follicles. It provides vitamins B6 and B12, zinc that strengthens the scalp, lactic acid whose moisturising properties make it a great natural conditioner, and calcium and magnesium to nourish the follicles. Prebiotics favour the good bacteria on the scalp and inhibit the harmful ones, improving density and shine.",
        },
      ],
    },
    name: "Strengthening Mask with Bio Keratin",
    tagline: "Smooth & Silky Mask: intensive nutrition that seals the cuticle and eliminates frizz",
    description:
      "Restore extreme nutrition to your hair with the Nouvie Bio Keratin (Kiwi & Açaí) Hair Mask from the Strengthening treatment, also known as the Smooth & Silky Mask. This high-potency treatment combines 8 essential oils, yogurt proteins and prebiotics to deeply soften the hair fibre. Rich in antioxidants and vitamins A and E, its formula seals the cuticles, prevents frizz and delivers unmatched softness with a luminous, silky finish.",
    benefits: [
      "Deep nutrition in just 5 minutes",
      "Seals the cuticle and split ends",
      "Total frizz control",
      "Immediate softness to the touch",
      "8 essential oils and yogurt protein",
    ],
    features: [
      "Intensive nutrition: a deep-action treatment that works in just 5 minutes.",
      "Total frizz control: seals split ends and softens the hair fibre.",
      "Botanical cocktail: enriched with 8 natural oils (argan, macadamia, almond, hazelnut, pomegranate, raspberry, mango and carrot) and yogurt protein.",
    ],
    ingredientGroups: [
      {
        heading: "Natural oils and extracts",
        body: "Pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root, Bio-Keratin, kiwi and açaí.",
      },
      {
        heading: "Active components",
        body: "Hydrolysed quinoa (promotes growth, protects against dandruff and hydrates), wheat and soy amino acids (a source of vitamin E and proteins that repair the fibre), and arginine, threonine and serine (nitric oxide precursor amino acids for growth).",
      },
      {
        heading: "Yogurt protein and prebiotics",
        body: "Rich in vitamins B6 and B12, zinc, lactic acid, calcium and magnesium for greater flexibility, hydration and anti-ageing properties.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Mask - 177 ml tube (Step 2 of the Strengthening Hair Kit with Bio Keratin)",
    ],
    size: "177 ml",
    badge: "177 ml",
    steps: [
      { step: 2, name: "Strengthening Mask", instruction: "Apply the Mask immediately after the Shampoo. Remove excess water, shake a little before use and place a portion suited to your hair's length and volume in the palm of your hand, rubbing for a few seconds. Apply evenly from mid-lengths to ends, leave on for 5 minutes and rinse with plenty of water, preferably cold. Use 2 to 3 times a week." },
    ],
  },
  "locion-suave-y-liso": {
    seoContent: {
      h1Override: "Strengthening Styling Lotion",
      faqs: [
        {
          question: "How is the styling lotion used?",
          answer:
            "After washing your hair with the Nouvie Shampoo and Mask, towel dry and stir the product a little before use. Put a small amount in the centre of your hand, suited to the length and volume of your hair, rub for a few seconds between your hands and apply evenly through the hair. Do not rinse. Then style as you like, letting it dry naturally or using a dryer, straightener or curler.",
        },
        {
          question: "Does it need rinsing out?",
          answer:
            "No. It is a leave-in treatment: apply it to damp or dry hair and leave it. That is exactly what the lotion is for — staying in the hair fibre and forming the layer that protects from heat and UV rays through the day.",
        },
        {
          question: "Does it protect against heat from straighteners and dryers?",
          answer:
            "Yes, it is a heat protectant. Its formula protects the hair fibre from the heat of dryers and straighteners, and from UV radiation too. That is why we recommend applying it before using any heat tool, and daily on dry hair to style and protect from the sun.",
        },
        {
          question: "Is it good for the beach or the pool?",
          answer:
            "Yes, it is ideal before and after swimming in the sea or a pool. It acts as a shield against sea salt and chlorine, two of the most common causes of dryness and colour loss in hair.",
        },
        {
          question: "What does argan oil give the hair?",
          answer:
            "Argan oil gives hair strength and flexibility, repairs dry and split ends, removes frizz and extends the life of colour. In this lotion it works alongside Bio-Keratin, which softens the hair fibre and makes styling easier.",
        },
        {
          question: "Does it leave hair greasy or heavy?",
          answer:
            "No. Its formula is light: it makes styling easier and shapes the hair without any heavy or greasy feel, and without residue. The key is the amount — a small portion suited to the length and volume of your hair is enough.",
        },
      ],
    },
    name: "Strengthening Molding Lotion with Bio Keratin",
    tagline: "Smooth & Silky Lotion: leave-in heat protectant that detangles, styles and adds shine",
    description:
      "Protect and define your everyday style with the Nouvie Bio Keratin Kiwi & Açaí Molding Lotion from the Strengthening treatment, also known as the Smooth & Silky Lotion. This leave-in heat protectant does not require rinsing and shields the hair fibre against UV rays and damage from straighteners and hairdryers. Its lightweight formula makes styling easier, shapes hair without any heavy or greasy feel, softens the hair fibre and leaves it shiny and silky. Ideal for use before and after swimming in the sea or pool to prevent damage from chlorine and salt.",
    benefits: [
      "Leave-in heat protectant",
      "All-day frizz control",
      "Detangles and eases styling",
      "Protects from chlorine and seawater",
      "Shiny finish with no residue",
    ],
    features: [
      "Leave-in heat protectant: shields hair from the heat of hairdryers and straighteners, and from UV radiation.",
      "Flexible hold: shapes and defines the style while keeping natural movement.",
      "Environmental protection: an effective shield against sea salt and pool chlorine.",
    ],
    ingredientGroups: [
      {
        heading: "Natural oils and extracts",
        body: "Pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root, Bio-Keratin, kiwi and açaí.",
      },
      {
        heading: "Active components",
        body: "Hydrolysed quinoa (promotes growth, protects against dandruff and hydrates), wheat and soy amino acids (a source of vitamin E and proteins that repair the fibre), and arginine, threonine and serine (nitric oxide precursor amino acids for growth).",
      },
      {
        heading: "Yogurt protein and prebiotics",
        body: "Rich in vitamins B6 and B12, zinc, lactic acid, calcium and magnesium for greater flexibility, hydration and anti-ageing properties.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Molding Lotion - 177 ml tube (Step 3 of the Strengthening Hair Kit with Bio Keratin)",
    ],
    size: "177 ml",
    badge: "177 ml",
    steps: [
      { step: 3, name: "Strengthening Molding Lotion", instruction: "After washing your hair with Nouvie Shampoo and Mask, towel dry, shake a little before use and place a small portion in the centre of your hand according to your hair's length and volume. Rub between your hands for a few seconds and apply evenly all over the hair without rinsing. Then style as you like, letting it air dry or using a hairdryer, straightener or curling iron. Apply daily to dry hair to style and as protection against UV rays." },
    ],
  },
  "shampoo-reparacion-intensa": {
    seoContent: {
      faqs: [
        {
          question: "If my hair is burnt and dry, colour-treated or bleached, which line should I use?",
          answer:
            "The Intensive Repair line. Because it contains shea butter, it provides moisture for dry or damaged hair and has been shown to have anti-inflammatory properties. It absorbs easily into the scalp and does not clog the pores, delivering moisture from the roots and carrying it down to the ends. That makes it very beneficial for frizzy, colour-treated or heat-treated hair.",
        },
        {
          question: "What is shea butter and why is it good for hair?",
          answer:
            "Shea butter is extracted from the nut of the shea tree, which grows in the tropical regions of East and West Africa. It is the most widely used natural hair conditioner and is known as “mother nature's conditioner” for its extraordinary moisturising properties. It soothes an irritated scalp, protects against heat without leaving a greasy or heavy feel, is credited with a low but sufficient SPF against ultraviolet rays, and is an excellent softener for coarse, brittle or fragile curly hair.",
        },
        {
          question: "Why should I avoid shampoo with sulfates?",
          answer:
            "Ammonium lauryl sulfate (ALS) and sodium lauryl sulfate (SLS) are abrasive detergents and one of the classic ingredients in almost every shampoo: they clean and degrease through the foam they produce. They are used because they are cheap and effective, but in a short time they wear down the scalp and the hair. In stripping the oil they also destroy the natural lipids the skin produces to defend itself, which makes them irritating. Many problems of dryness, scalp irritation and dandruff come from their continued use.",
        },
        {
          question: "Why does the shampoo barely foam?",
          answer:
            "Because it is sulfate free. The Intensive Repair Shampoo cleans with a gentle plant-derived agent: it is normal for it to barely foam on the first wash and to foam a little on the second. It cleans just the same, only without drying out hair that is already damaged.",
        },
        {
          question: "Does it help reduce hair loss?",
          answer:
            "Yes. As well as repairing, its formula with yogurt protein, prebiotics and hydrolysed quinoa helps reduce shedding and stimulates healthy growth, calming an irritated scalp thanks to the anti-inflammatory properties of shea butter. If hair loss is your main concern, the Revitalising Anti-Hair-Loss line is formulated specifically for that.",
        },
        {
          question: "Can it be used every day?",
          answer:
            "Yes. Because it contains no sulfates or harsh salt systems, it does not dry the hair out or irritate the scalp with frequent use. For best results, pair it with the Mask 2 to 3 times a week and the Styling Lotion daily.",
        },
      ],
    },
    name: "Intensive Repair Shampoo with Shea Butter",
    tagline: "Salt-free shampoo that starts the repair from the very first wash, with shea butter",
    description:
      "Start your hair's regeneration from the very first wash. The Nouvie Intensive Repair Shampoo with shea butter (Royal Honey & Melon) cleanses gently while moisturising dry or damaged hair. Formulated with shea butter, nature's own conditioner, and free from aggressive chemicals, it prepares the hair fibre to receive nutrients, repairing damage caused by dyes, heat and UV rays.",
    benefits: [
      "Starts the repair from the first wash",
      "Ultra-moisturising shea butter",
      "Ideal for damaged or coloured hair",
      "Soothes irritated scalp",
      "Helps reduce hair loss",
    ],
    features: [
      "Safe formula: 100% free from sulfates, harsh salt systems and parabens.",
      "Enriched with shea butter, yogurt protein and prebiotics (vitamins B6, B12, zinc and lactic acid) to soothe an irritated scalp.",
      "Contains natural oils of pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed butter and root extract to begin hydration at the root.",
      "Helps reduce hair loss and stimulates healthy growth.",
    ],
    ingredientGroups: [
      {
        heading: "Natural oils and extracts",
        body: "Pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root, shea butter, honey and melon.",
      },
      {
        heading: "Active components",
        body: "Hydrolysed quinoa (promotes growth, protects against dandruff and hydrates), wheat and soy amino acids (a source of vitamin E and proteins that repair the fibre), and arginine, threonine and serine (nitric oxide precursor amino acids for growth).",
      },
      {
        heading: "Yogurt protein and prebiotics",
        body: "Rich in vitamins B6 and B12, zinc, lactic acid, calcium and magnesium for greater flexibility, hydration and anti-ageing properties.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Shampoo - 237 ml tube (Step 1 of the Intensive Repair Hair Kit with Shea Butter)",
    ],
    size: "237 ml",
    badge: "237 ml",
    steps: [
      { step: 1, name: "Intensive Repair Shampoo", instruction: "Wash your hair with the Shampoo using an amount of product suited to your hair's length and volume. Shake a little before use, massage the scalp in circular motions and rinse with plenty of room-temperature water. It is normal for it to produce no lather on the first wash; on the second it lathers only slightly because it is sulfate free and its formula uses a gentle plant-based cleansing agent." },
    ],
  },
  "mascarilla-reparacion-intensa": {
    seoContent: {
      faqs: [
        {
          question: "How often should I use the hair mask?",
          answer:
            "2 to 3 times a week, always straight after the shampoo. There is no need to use it at every wash: it is a deep-nourishing treatment, and at that frequency hair keeps its flexibility without being weighed down. Leave it on for 5 minutes and rinse with plenty of water, preferably warm or cold, never hot.",
        },
        {
          question: "How is the mask applied?",
          answer:
            "After shampooing, squeeze out the excess water and stir the product a little before use. Put an amount suited to the length and volume of your hair in the palm of your hand and rub for a few seconds. Apply evenly from mid-lengths to ends, never at the roots. Leave for 5 minutes, detangle with your fingers and rinse with warm or cold water.",
        },
        {
          question: "If my hair is burnt and dry, colour-treated or bleached, which line should I use?",
          answer:
            "The Intensive Repair line. Because it contains shea butter, it provides moisture for dry or damaged hair and has been shown to have anti-inflammatory properties. It absorbs easily into the scalp and does not clog the pores, delivering moisture from the roots and carrying it down to the ends. That makes it very beneficial for frizzy, colour-treated or heat-treated hair.",
        },
        {
          question: "What is shea butter and why is it good for hair?",
          answer:
            "Shea butter is extracted from the nut of the shea tree, which grows in the tropical regions of East and West Africa. It is the most widely used natural hair conditioner and is known as “mother nature's conditioner” for its extraordinary moisturising properties. It soothes an irritated scalp, protects against heat without leaving a greasy or heavy feel, is credited with a low but sufficient SPF against ultraviolet rays, and is an excellent softener for coarse, brittle or fragile curly hair.",
        },
        {
          question: "Is it safe on colour-treated or straightened hair?",
          answer:
            "Yes. The formula is free of sulfates, harsh salt systems and dyes, which are exactly the ingredients that wear down colour and weaken straightening treatments. It is safe on colour-treated, highlighted, bleached or straightened hair, and helps the tone last longer.",
        },
        {
          question: "Does the mask replace conditioner?",
          answer:
            "Yes. The Intensive Repair Mask does the job of a conditioner and goes further: the shea butter and its amino acid complex work inside the hair fibre, repairing chemical and heat damage rather than only treating the surface. That is why it is left on for 5 minutes instead of rinsed out straight away.",
        },
      ],
    },
    name: "Intensive Repair Mask with Shea Butter",
    tagline: "The definitive repair treatment for brittle hair damaged by dye and heat",
    description:
      "The definitive repair treatment for brittle hair damaged by dyes and heat processes. The Nouvie Mask with shea butter restores flexibility and seals split ends through deep hydration. Its concentrated formula works within the hair fibre to repair chemical and thermal damage, leaving hair soft, shiny and easy to detangle.",
    benefits: [
      "Deep reconstruction of the fibre",
      "Seals split ends",
      "Restores flexibility and elasticity",
      "Intense, lasting shine",
      "Safe for coloured or straightened hair",
    ],
    features: [
      "Intensive nutrition with 8 essential oils: pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango and carrot root.",
      "High moisturising power thanks to shea butter.",
      "Delivers extreme flexibility through its amino acid complex (arginine, threonine, serine).",
      "Formula safe for coloured or straightened hair (no salt or parabens).",
    ],
    ingredientGroups: [
      {
        heading: "Natural oils and extracts",
        body: "Pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root, shea butter, honey and melon.",
      },
      {
        heading: "Active components",
        body: "Hydrolysed quinoa (promotes growth, protects against dandruff and hydrates), wheat and soy amino acids (a source of vitamin E and proteins that repair the fibre), and arginine, threonine and serine (nitric oxide precursor amino acids for growth).",
      },
      {
        heading: "Yogurt protein and prebiotics",
        body: "Rich in vitamins B6 and B12, zinc, lactic acid, calcium and magnesium for greater flexibility, hydration and anti-ageing properties.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Mask - 177 ml tube (Step 2 of the Intensive Repair Hair Kit with Shea Butter)",
    ],
    size: "177 ml",
    badge: "177 ml",
    steps: [
      { step: 2, name: "Intensive Repair Mask", instruction: "Apply the Mask immediately after the Shampoo. Remove excess water, shake a little before use and place a portion suited to your hair's length and volume in the palm of your hand, rubbing for a few seconds. Apply evenly from mid-lengths to ends, leave on for 5 minutes and rinse with plenty of water, preferably cold. Use 2 to 3 times a week." },
    ],
  },
  "locion-reparacion-intensa": {
    seoContent: {
      h1Override: "Intensive Repair Styling Lotion",
      faqs: [
        {
          question: "Does it need rinsing out?",
          answer:
            "No. It is a leave-in treatment: apply it to damp or dry hair and leave it. That is exactly what it is for — staying in the hair fibre, sealing in moisture and forming the shield that protects from heat, UV rays and pollution through the day.",
        },
        {
          question: "Does it protect against heat from straighteners and dryers?",
          answer:
            "Yes, it is an active heat protectant. It shields hair against the heat of dryers and straighteners and against UV rays. Apply it before using any heat tool, and daily on dry hair to style and protect from the sun.",
        },
        {
          question: "Is it good for the beach or the pool?",
          answer:
            "Yes, it is ideal before and after swimming in the sea or a pool. It prevents the damage caused by chlorine and salt, two of the most common causes of dryness, split ends and colour loss.",
        },
        {
          question: "Does it make hair colour last longer?",
          answer:
            "Yes. By sealing the cuticle and creating a barrier against sun, chlorine and pollution, it helps keep colour intact for longer. The formula is also free of sulfates, harsh salts and dyes — the ingredients that wear colour down fastest.",
        },
        {
          question: "Does it leave hair greasy or heavy?",
          answer:
            "No. Its light formula with shea butter and antioxidant raspberry and pomegranate oils defines the style, removes frizz and defines curls without any heavy or greasy feel. A small amount, suited to the length and volume of your hair, is enough.",
        },
        {
          question: "If my hair is burnt and dry, colour-treated or bleached, which line should I use?",
          answer:
            "The Intensive Repair line. Because it contains shea butter, it provides moisture for dry or damaged hair and has been shown to have anti-inflammatory properties. It absorbs easily into the scalp and does not clog the pores, delivering moisture from the roots and carrying it down to the ends. That makes it very beneficial for frizzy, colour-treated or heat-treated hair.",
        },
        {
          question: "What is shea butter and why is it good for hair?",
          answer:
            "Shea butter is extracted from the nut of the shea tree, which grows in the tropical regions of East and West Africa. It is the most widely used natural hair conditioner and is known as “mother nature's conditioner” for its extraordinary moisturising properties. It soothes an irritated scalp, protects against heat without leaving a greasy or heavy feel, is credited with a low but sufficient SPF against ultraviolet rays, and is an excellent softener for coarse, brittle or fragile curly hair.",
        },
      ],
    },
    name: "Intensive Repair Molding Lotion with Shea Butter",
    tagline: "Your everyday shield: leave-in heat protectant, anti-frizz and colour care",
    description:
      "Your everyday protective shield. The Nouvie Molding Lotion is a leave-in heat-protecting treatment that seals in hydration and shields your hair against heat (hairdryers and straighteners), UV rays and pollution. It defines your natural style, eliminates frizz, defines curls and extends the life of your colour without any heavy or greasy feel. Ideal for use before and after swimming in the sea or pool to prevent damage from chlorine and salt.",
    benefits: [
      "Active leave-in heat protectant",
      "Eliminates frizz and defines curls",
      "Extends the life of your colour",
      "Protects from chlorine and seawater",
      "No heavy or greasy feel",
    ],
    features: [
      "Active heat protectant and barrier against environmental factors.",
      "Ideal for protecting hair before and after the sea or pool (protects from sea salt and sun).",
      "Helps define curls and hold the style for longer.",
      "Colour care. Lightweight formula with shea butter and antioxidant oils (raspberry, pomegranate).",
    ],
    ingredientGroups: [
      {
        heading: "Natural oils and extracts",
        body: "Pomegranate, raspberry, almond, hazelnut, macadamia, argan, mango seed and carrot root, shea butter, honey and melon.",
      },
      {
        heading: "Active components",
        body: "Hydrolysed quinoa (promotes growth, protects against dandruff and hydrates), wheat and soy amino acids (a source of vitamin E and proteins that repair the fibre), and arginine, threonine and serine (nitric oxide precursor amino acids for growth).",
      },
      {
        heading: "Yogurt protein and prebiotics",
        body: "Rich in vitamins B6 and B12, zinc, lactic acid, calcium and magnesium for greater flexibility, hydration and anti-ageing properties.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Molding Lotion - 177 ml tube (Step 3 of the Intensive Repair Hair Kit with Shea Butter)",
    ],
    size: "177 ml",
    badge: "177 ml",
    steps: [
      { step: 3, name: "Intensive Repair Molding Lotion", instruction: "After washing your hair with Nouvie Shampoo and Mask, towel dry, shake a little before use and place a small portion in the centre of your hand according to your hair's length and volume. Rub between your hands for a few seconds and apply evenly all over the hair without rinsing. Then style as you like, letting it air dry or using a hairdryer, straightener or curling iron. Apply daily to dry hair to style and as protection against UV rays." },
    ],
  },
  "shampoo-revitalizante": {
    seoContent: {
      h1Override: "Revitalising Anti-Hair-Loss Shampoo",
      faqs: [
        {
          question: "If my hair is falling out or feels weak, which line should I use?",
          answer:
            "The Revitalising line. It contains probiotics packed with protein, calcium and vitamins D, B2 (riboflavin), B12 and B5, along with prebiotics and yogurt, which bring many benefits for the health of the scalp and the hair fibre: they strengthen the hair follicle and have an anti-ageing effect for more vigorous, younger-looking hair. It also contains hydrolysed keratin, which restructures the hair by conditioning the hair fibre.",
        },
        {
          question: "What is hydrolysed keratin and why is it good for hair?",
          answer:
            "Keratin occurs naturally in the components that make up our hair, and it deteriorates through environmental factors and the passage of time. Hydrolysed keratin rebuilds the hair fibre and provides hydration. Its benefits: it strengthens the hair fibre, restores brittle or damaged hair, stimulates improvement in the scalp, stimulates hair growth and allows perfect styling.",
        },
        {
          question: "What does argan oil give the hair?",
          answer:
            "Argan oil gives hair strength and flexibility, repairs dry and split ends, removes frizz and extends the life of colour. It is the lead active in this line, together with hydrolysed keratin and coconut yogurt protein.",
        },
        {
          question: "Is this shampoo only for men?",
          answer:
            "The bottle carries the For Men reference and the Mountain Breeze scent is aimed at a male audience, but the formula works just the same on any hair. It is recommended for men and women with hair loss caused by medical treatment or illness, and for sensitive scalps.",
        },
        {
          question: "Why does the shampoo barely foam?",
          answer:
            "Because it is sulfate free, and sulfates are the detergents that produce all that foam in conventional shampoos. It cleans with a gentle plant-derived agent: it is completely normal for it to barely foam on the first wash and to foam a little on the second. It cleans just the same, only without being harsh on a scalp that is already sensitive.",
        },
        {
          question: "Why should I avoid shampoo with sulfates?",
          answer:
            "Ammonium lauryl sulfate (ALS) and sodium lauryl sulfate (SLS) are abrasive detergents and one of the classic ingredients in almost every shampoo. They are used because they are cheap and effective, but in a short time they wear down the scalp and the hair: in stripping the oil they also destroy the natural lipids the skin produces to defend itself, which makes them irritating. Many problems of dryness, irritation and dandruff come from their continued use.",
        },
        {
          question: "Can it be used during medical treatment?",
          answer:
            "It is formulated precisely with people experiencing hair loss from medical treatment or illness in mind, and it is suitable for sensitive scalps, being free of sulfates, parabens, harsh salts, dyes and synthetic fragrances. Even so, if you are undergoing treatment, always check with your doctor before adding any product.",
        },
      ],
    },
    name: "Revitalizing Anti-Hair-Loss Shampoo with Prebiotics, Argan Oil and Hydrolysed Keratin",
    tagline: "Sulfate-free cleansing that strengthens the follicle and helps slow hair loss",
    description:
      "Deeply cleanse and revitalize the scalp with Nouvie's Revitalizing Shampoo. Its specialised sulfate- and paraben-free formula is enriched with prebiotics, yogurt protein, hydrolysed keratin and argan oil to combat hair loss. It strengthens the hair follicle and stimulates the growth of stronger fibres, and is recommended for sensitive scalps. Ideal for men and women experiencing hair loss due to medical treatment or illness. (Note: it is completely normal for it not to produce much lather on the first wash, because it is free from harsh sulfates.)",
    benefits: [
      "Combats hair loss",
      "Strengthens the hair follicle",
      "Argan oil and hydrolysed keratin",
      "Relieves dandruff and itching",
      "Suitable for sensitive scalps",
    ],
    features: [
      "Balanced sulfate-free cleansing: removes impurities and oil while keeping a neutral pH.",
      "Follicle strengthening: stimulates new hair growth and prevents hair loss. Repairs brittle, damaged hair.",
      "Relief from dandruff and itching: soothes irritation and prevents extreme dryness. Improves the condition of the scalp and the hair fibre.",
    ],
    ingredientGroups: [
      {
        heading: "Ingredients and key actives",
        body: "Argan oil, quinoa and hydrolysed keratin, coconut yogurt protein and prebiotics, carrot root extract and essential oils of pomegranate, raspberry, almond, hazelnut, macadamia and mango.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Revitalizing Shampoo - 237 ml tube (Step 1 of the Revitalizing Anti-Hair-Loss Hair Kit with Prebiotics, Argan Oil and Hydrolysed Keratin)",
    ],
    size: "237 ml",
    badge: "237 ml",
    steps: [
      { step: 1, name: "Revitalizing Shampoo", instruction: "Wash your hair with the Shampoo using an amount of product suited to your hair's length and volume. Shake a little before use, massage the scalp in circular motions and rinse with plenty of room-temperature water. It is normal for it to produce no lather on the first wash; on the second it lathers only slightly because it is sulfate free and its formula uses a gentle plant-based cleansing agent." },
    ],
  },
  "locion-revitalizante": {
    seoContent: {
      h1Override: "Revitalising Styling Lotion",
      faqs: [
        {
          question: "Does it need rinsing out?",
          answer:
            "No. It is a leave-in treatment: apply it to damp or dry hair and leave it. That is what it is for — staying in the hair fibre, sealing in moisture and forming the layer that protects from UV rays through the day.",
        },
        {
          question: "How is the styling lotion used?",
          answer:
            "After washing your hair with the Nouvie Shampoo, towel dry and stir the product a little before use. Put a small amount in the centre of your hand, suited to the length and volume of your hair, rub for a few seconds between your hands and apply evenly without rinsing. Then style as you like, letting it dry naturally. Apply it daily on dry hair to style and as a heat and UV protectant.",
        },
        {
          question: "What does argan oil give the hair?",
          answer:
            "Argan oil gives hair strength and flexibility, repairs dry and split ends, removes frizz and extends the life of colour. In this lotion it is combined with hydrolysed keratin, coconut yogurt protein and prebiotics, which seal in moisture and repair the hair fibre.",
        },
        {
          question: "Does it leave hair greasy or heavy?",
          answer:
            "No. Its light formula defines the style without any heavy or greasy feel and without residue. The key is the amount: a small portion, suited to the length and volume of your hair, is enough.",
        },
        {
          question: "Does it stimulate hair growth?",
          answer:
            "Its formula provides vitamins, minerals and essential fatty acids that prevent premature hair ageing and nourish the fibre from the outside, and the hydrolysed keratin helps restructure it. To work on the follicle and on hair loss, the key step in the treatment is the Revitalising Shampoo; the lotion seals and protects that work through the day.",
        },
        {
          question: "Is it good for the beach or the pool?",
          answer:
            "Yes, it is ideal before and after swimming in the sea or a pool. It helps prevent the damage caused by chlorine and salt, two of the most common causes of dryness and brittle hair.",
        },
        {
          question: "Is it only for men?",
          answer:
            "The bottle carries the For Men reference and the Mountain Breeze scent is aimed at a male audience, but the formula works just the same on any hair. It is recommended for men and women with hair loss caused by medical treatment or illness, and for sensitive scalps.",
        },
      ],
    },
    name: "Revitalizing Anti-Hair-Loss Molding Lotion with Prebiotics, Argan Oil and Hydrolysed Keratin",
    tagline: "Styles, nourishes and protects without rinsing. Stimulates hair growth",
    description:
      "Shape, nourish and protect your everyday style with the Molding Lotion from the Revitalizing treatment. This leave-in treatment combines argan oil, hydrolysed keratin, coconut yogurt protein, prebiotics and botanical extracts: it shapes and adds flexibility to your hair while protecting it from UV rays. Its lightweight formula delivers vitamins, minerals and essential fatty acids that prevent premature hair ageing, control frizz and keep hair looking healthy, manageable and vigorous all day long.",
    benefits: [
      "Natural hold and styling",
      "Intensive leave-in nutrition",
      "Stimulates hair growth",
      "Antioxidant and UV protection",
      "No residue or greasy feel",
    ],
    features: [
      "Natural hold and styling: defines the style without any heavy or greasy feel.",
      "Intensive leave-in nutrition: seals in hydration and repairs the hair fibre thanks to its high content of argan oil and hydrolysed keratin.",
      "Antioxidant properties: protects hair against free radicals and damaging environmental factors.",
    ],
    ingredientGroups: [
      {
        heading: "Ingredients and key actives",
        body: "Argan oil, hydrolysed quinoa, hydrolysed keratin, yogurt protein, prebiotics, wheat and soy amino acids, carrot root extract and essential oils of pomegranate, raspberry, almond, hazelnut, macadamia and mango.",
      },
    ],
    freeOfClaims: [
      "Sulfate and paraben free",
      "Not tested on animals",
      "Free from harsh salt systems",
      "Free from synthetic dyes and fragrances",
    ],
    includes: [
      "1x Molding Lotion - 177 ml tube (Step 2 of the Revitalizing Anti-Hair-Loss Hair Kit with Prebiotics, Argan Oil and Hydrolysed Keratin)",
    ],
    size: "177 ml",
    badge: "177 ml",
    steps: [
      { step: 2, name: "Revitalizing Molding Lotion", instruction: "After washing your hair with Nouvie Shampoo, towel dry, shake a little before use and place a small portion in the centre of your hand according to your hair's length and volume. Rub between your hands for a few seconds and apply evenly all over the hair without rinsing. Then style as you like, letting it air dry. Apply daily to dry hair to style and as protection against UV rays. Ideal for use before and after swimming in the sea or pool to prevent damage from chlorine and salt." },
    ],
  },
  "limpia-vidrios-institucional-concentrado": {
    name: "Glass & Steel Cleaner",
    tagline: "High power for glass, crystals, stainless steel, and metals",
    description:
      "Extremely high-power product that cleans glass, crystals, stainless steel, metals in general, and tiles. Leaves surfaces shiny and protects them from fingerprint marks. Eliminates static electricity, therefore does not attract dust particles. This product does not harm people or the environment. It is biodegradable, non-toxic, non-caustic, non-abrasive, non-flammable.",
    benefits: [
      "Eliminates static electricity",
      "Quick drying, leaves no halos",
      "Works in soft, hard, and salt water",
      "Easy rinsing, shiny finish",
      "Deodorizing",
    ],
    specs: [
      { label: "Designation", value: "Glass and carpet cleaner" },
      { label: "Description", value: "Neutral surfactant for conventional or foam cleaning" },
      { label: "Color", value: "Blue" },
      { label: "Scent", value: "Fruity" },
      { label: "Characteristics", value: "Carpet, glass, ceramic, formica, and metal cleaner" },
      { label: "pH (pure)", value: "7" },
      { label: "pH (1% sol)", value: "7" },
      { label: "Density", value: "1.025" },
      { label: "Foaming power", value: "7" },
      { label: "Solubility", value: "Total in water" },
      { label: "Biodegradable", value: "Yes (IRAM method N°25610)" },
      { label: "Flammability", value: "Non-combustible (Law 19.587 Decree 351)" },
      { label: "Recommended diluent", value: "Water (soft, hard, or salt)" },
      { label: "Ease of rinsing", value: "Excellent" },
      { label: "Boiling point", value: "None below 90°" },
      { label: "Toxicity", value: "No risk (LD50>3000mg/kg)" },
    ],
    presentations: [
      { size: "1 LT — Yields: 4 Gallons" },
      { size: "250 ML — Yields: 1 Gallon" },
    ],
    usageTips: [
      "Always prepare by adding water first, then the product",
      "Do not mix with products other than Nouvie for best results",
      "It is recommended to use new cleaning utensils, free of residues from other products",
    ],
  },

  "limpiador-superficies-institucional": {
    name: "Surface & Screen Cleaner",
    tagline: "Shine and protection for furniture, screens, and electronic equipment",
    description:
      "Contains emulsified silicones in its formulation, which together with cleaning agents and polishing elements provide shine and protect all types of furniture and surfaces, such as wood, plastic, formica, leather, faux leather, steel, glass, and electronic equipment screens. It forms a film that attracts less dirt, achieving a smooth and shiny finish. It is a product formulated with different oils, Carnauba wax, and silicone. It should be applied on a soft or microfiber cloth; after a few minutes, an excellent shine and polish will be noticed on the surface. This product does not harm people or the environment. It is biodegradable, non-toxic, non-abrasive, non-flammable.",
    benefits: [
      "Polishes all types of plastic surfaces, leather, faux leather, TV or computer screens",
      "Does not leave a greasy film where dust sticks",
      "Does not come off with water",
      "Eliminates static electricity",
      "Eliminates fingerprints on the surface",
      "Pleasant lemon scent",
    ],
    specs: [
      { label: "Designation", value: "Furniture Polish" },
      { label: "Description", value: "Surface polisher" },
      { label: "Color", value: "Milky beige" },
      { label: "Characteristics", value: "Leaves surfaces clean and grease-free" },
      { label: "pH (pure)", value: "6.5" },
      { label: "Density", value: "1.12 - 1.20" },
      { label: "Solubility", value: "Total in water" },
      { label: "Flammability", value: "Non-combustible (Law 19.587 Decree 351)" },
      { label: "Boiling point", value: "None below 90°" },
      { label: "Toxicity", value: "No risk (LD50>3000mg/kg)" },
    ],
    presentations: [
      { size: "3.785 LT (1 Gallon) — Yields: 3,785 LT" },
      { size: "500 ML — Yields: 500 ML" },
    ],
    dilutionTable: [
      { uso: "Manual dilution", cantidad: "1 part of product", agua: "5 parts of water" },
    ],
    usageTips: [
      "Always prepare by adding water first, then the product",
      "Do not mix with products other than Nouvie for best results",
      "It is recommended to use new cleaning utensils, free of residues from other products",
      "Never apply on floors, as it may become slippery",
      "Do not apply directly on surfaces, but on the cloth",
    ],
  },

  "limpia-pisos-institucional": {
    name: "Floor Cleaner for Delicate Surfaces",
    tagline: "Cleans, shines, and waxes in a single application",
    description:
      "A viscous liquid, completely soluble in water, formulated to clean and shine in a single application. Contains emulsifying agents, stabilizers, Carnauba wax, and polyethylene wax. Formulated to clean and wax all types of floors: marble, ceramic, tile, wood, laminate, and even automobiles. Has anti-fogging qualities when used pure, ideal for display cases. This product does not harm people or the environment. It is biodegradable, non-toxic, non-corrosive, non-abrasive, non-flammable.",
    benefits: [
      "Repels dirt, dust, and grease",
      "Forms a micro-film of wax",
      "Leaves the surface clean, shiny, and protected",
      "Non-slip, prevents footprints",
      "Has natural self-shine",
      "Can be buffed",
      "Leaves no smell or color",
      "Works in soft, hard, and salt water",
      "Easy rinsing, shiny finish",
      "Deodorizing",
      "Cleans better on smooth surfaces",
    ],
    specs: [
      { label: "Designation", value: "Floor and delicate surface cleaner" },
      { label: "Description", value: "Neutral surfactant, surface protector and polisher" },
      { label: "Color", value: "Green" },
      { label: "Scent", value: "Odorless" },
      { label: "Characteristics", value: "Cleans and shines at the same time" },
      { label: "pH (pure)", value: "7" },
      { label: "pH (1% sol)", value: "7" },
      { label: "Density", value: "1.00" },
      { label: "Foaming power", value: "8" },
      { label: "Solubility", value: "Total in water" },
      { label: "Biodegradable", value: "Yes (IRAM method N°25610)" },
      { label: "Flammability", value: "Non-combustible (Law 19.587 Decree 351)" },
      { label: "Recommended diluent", value: "Water (soft, hard, or salt)" },
      { label: "Ease of rinsing", value: "Excellent" },
      { label: "Boiling point", value: "None below 90°" },
      { label: "Toxicity", value: "No risk (LD50>3000mg/kg)" },
    ],
    presentations: [
      { size: "3.785 LT (1 Gallon) — Yields: 302.8 LT" },
      { size: "2 LT — Yields: 160 LT" },
      { size: "1 LT — Yields: 80 LT" },
    ],
    usageTips: [
      "Always prepare by adding water first, then the product",
      "Do not mix with products other than Nouvie for best results",
      "It is recommended to use new cleaning utensils, free of residues from other products",
    ],
  },

  "detergente-lavavajillas-institucional": {
    name: "Dishwasher Machine Detergent",
    tagline: "Highly concentrated synthetic detergent in gel form",
    description:
      "A highly concentrated synthetic detergent. Presented in gel form with a pleasant herbal scent. Its components are a perfectly balanced and synergistic blend of anionic, non-ionic surfactants and additives. This gives it not only unmatched cleaning power, but also, thanks to its high content of coconut oil alkylolamide, provides protection and softness to the skin. This product does not harm people or the environment. It is biodegradable, non-toxic, non-caustic, non-corrosive, non-abrasive, non-flammable.",
    benefits: [
      "Works in soft, hard, and salt water",
      "Keeps dirt in suspension",
      "Applicable to heavy-duty tasks",
      "Easy rinsing, shiny finish, and deodorizing",
      "Cleans smooth or porous surfaces",
    ],
    specs: [
      { label: "Designation", value: "Dishwashing detergent" },
      { label: "Description", value: "Degreasing detergent" },
      { label: "Color", value: "Red (pink)" },
      { label: "Scent", value: "Herbal" },
      { label: "Characteristics", value: "Acts on animal and/or vegetable grease" },
      { label: "pH (pure)", value: "7" },
      { label: "pH (1% sol)", value: "7" },
      { label: "Density", value: "1.075" },
      { label: "Foaming power", value: "9" },
      { label: "Solubility", value: "Total in water" },
      { label: "Biodegradable", value: "Yes (IRAM method N°25610)" },
      { label: "Flammability", value: "Non-combustible (Law 19.587 Decree 351)" },
      { label: "Recommended diluent", value: "Water (soft, hard, or salt)" },
      { label: "Ease of rinsing", value: "Excellent" },
      { label: "Boiling point", value: "None below 90°" },
      { label: "Toxicity", value: "No risk (LD50>3000mg/kg)" },
    ],
    presentations: [
      { size: "3.785 LT (1 Gallon) — Yields: 3,785 LT" },
      { size: "2 LT — Yields: 2 LT" },
      { size: "1 LT — Yields: 1 LT" },
    ],
    dilutionTable: [
      { uso: "Manual dilution", cantidad: "1 part of product", agua: "5 parts of water" },
      { uso: "Washing machine — Heavy", cantidad: "1 part of product", agua: "100 parts of water" },
      { uso: "Washing machine — Normal", cantidad: "1 part of product", agua: "250 parts of water" },
      { uso: "Washing machine — Light", cantidad: "1 part of product", agua: "500 parts of water" },
    ],
    usageTips: [
      "Longer action time for stubborn or old dirt",
      "Moderately high temperatures (45°C) increase its effectiveness",
      "Mechanical work increases the speed of product action",
      "Always prepare by adding water first, then the product",
      "Do not mix with products other than Nouvie for best results",
      "It is recommended to use new cleaning utensils, free of residues from other products",
    ],
  },

  "desengrasante-institucional": {
    name: "Multi-Purpose Degreaser",
    tagline: "High concentration degreasing power for all types of surfaces",
    description:
      "Has a high concentration of cleaning agents, surfactants, moisturizers, and surface-active agents. Has great power to dissolve all types of grease and oils. Ideal for cleaning ovens, kitchens, range hoods, bathroom cleaning, removing wax from floors, removing rust stains, cleaning floors, etc. This product does not harm people's health or the environment. It is biodegradable, non-toxic, non-caustic, non-corrosive, non-abrasive, non-flammable.",
    benefits: [
      "Works in soft, hard, and salt water",
      "Keeps dirt in suspension",
      "Applicable to heavy-duty tasks",
      "Easy rinsing, shiny finish",
      "Cleans smooth or porous surfaces",
    ],
    specs: [
      { label: "Designation", value: "Multi-Purpose Detergent" },
      { label: "Color", value: "Yellow" },
      { label: "Scent", value: "Gricol" },
      { label: "pH (pure)", value: "7 to 9" },
      { label: "pH (1% sol)", value: "7" },
      { label: "Density", value: "1.06" },
      { label: "Foaming power", value: "10" },
      { label: "Solubility", value: "Total in water" },
      { label: "Biodegradable", value: "Yes (IRAM method N°25610)" },
      { label: "Flammability", value: "Non-combustible (Law 19.587 Decree 351)" },
      { label: "Recommended diluent", value: "Water (soft, hard, or salt)" },
      { label: "Ease of rinsing", value: "Excellent" },
      { label: "Freezing point", value: "-5°C" },
      { label: "Boiling point", value: "None below 90°" },
      { label: "Toxicity", value: "No risk (LD50>3000mg/kg)" },
    ],
    presentations: [
      { size: "3.785 LT (1 Gallon) — Yields: 41.6 LT" },
      { size: "1 LT — Yields: 11 LT" },
    ],
    dilutionTable: [
      { uso: "Manual dilution", cantidad: "1 part of product", agua: "5 parts of water" },
      { uso: "Washing machine — Heavy", cantidad: "1 part of product", agua: "100 parts of water" },
      { uso: "Washing machine — Normal", cantidad: "1 part of product", agua: "250 parts of water" },
      { uso: "Washing machine — Light", cantidad: "1 part of product", agua: "500 parts of water" },
    ],
    usageTips: [
      "Longer action time for stubborn or old dirt",
      "Moderately high temperatures (45°C) increase its effectiveness",
      "Mechanical work increases the speed of product action",
      "Always prepare by adding water first, then the product",
      "Do not mix with products other than Nouvie for best results",
      "It is recommended to use new cleaning utensils, free of residues from other products",
      "For people with hypersensitive or allergic skin, it is recommended to use gloves",
    ],
  },

  // ============================================
  // HOME LINE - KITS
  // ============================================
  "kit-lavavajilla": {
    seoContent: {
      intro:
        "The Dishwashing Starter Kit is the simplest way to begin with Nouvie: a 50 ml bottle of concentrated neutral detergent and the 500 ml measuring bottle you mix it in. One bottle fills a complete measuring bottle, and the same product washes dishes by hand or in a dishwasher, washes fruit and vegetables, and even washes delicate and baby clothes. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "No rinsing needed, and it saves water",
          body:
            "Nouvie products are designed so you never have to rinse them off. As they dry they leave a protective layer on the surface that stops dirt sticking, so the next clean takes less effort and less water. That is why every drop counts: a 50 ml concentrate does the work of a whole bottle of conventional detergent while cutting both your water use and the plastic that ends up in the bin.",
        },
      ],
      audienceBlocks: [
        {
          heading: "For washing fruit and vegetables",
          body:
            "Being sulfate free, non-toxic and non-corrosive, this detergent is safe for washing fruit and vegetables before you eat them. Add a few pumps of the prepared product to a bowl of water and submerge the produce. It is the reason many families choose it over a conventional washing-up liquid.",
        },
        {
          heading: "For delicate and baby clothes",
          body:
            "The same concentrate works as both a detergent and a softener for delicate and baby clothes: one capful in the machine, or in a basin for hand washing. Its neutral pH looks after delicate fibres and leaves no fragrance or dye on clothing that touches a baby's skin.",
        },
      ],
      faqs: [
        {
          question: "What is in the Dishwashing Starter Kit?",
          answer:
            "It includes a 50 ml bottle of concentrated neutral detergent and the 500 ml measuring bottle you mix the product in. The measuring bottle has the measures printed on it, so you do not need to work out proportions or buy anything else to get started.",
        },
        {
          question: "How far does a 50 ml bottle go?",
          answer:
            "One 50 ml bottle makes a complete 500 ml measuring bottle of ready-to-use product. When it runs out you can buy the refill on its own and reuse the same bottle, which cuts both cost and plastic.",
        },
        {
          question: "Can it be used in a dishwasher?",
          answer:
            "Yes. Add the already-diluted product to the smaller dispenser compartment in the machine. The same mix you prepare for washing by hand works in the dishwasher.",
        },
        {
          question: "Is it safe for washing fruit and vegetables?",
          answer:
            "Yes. It is biodegradable, sulfate free, non-toxic and non-corrosive, so it can be used to wash fruit and vegetables. Add a few pumps of the prepared product to a bowl of water and submerge the produce.",
        },
      ],
    },
    name: "Dish Washing Starter Kit 50 ml",
    tagline: "Yields 1 dispenser of 500 ml",
    description:
      "Preparation: This product is sold with a dispenser bottle. Add water to the black line at mark 1.5. Then fill the transparent section with the product, mix a little and it's ready to use. A 50 ml bottle yields 1 dispenser of 500 ml.",
    benefits: [
      "Complete ready-to-use kit",
      "High yield",
      "Includes dispenser",
      "Long-term savings",
      "Biodegradable",
    ],
    badge: "Complete kit",
    dilutionTable: [
      { uso: "Dish washing", cantidad: "", agua: "" },
      { uso: "Machine dish washing (apply diluted product in the smallest compartment)", cantidad: "", agua: "" },
      { uso: "Fruit and vegetable washing", cantidad: "", agua: "" },
    ],
  },

  "kit-limpia-vidrios": {
    seoContent: {
      intro:
        "The Glass Cleaner Starter Kit is the highest-yield kit in the line: a 30 ml bottle of concentrate and the 500 ml measuring bottle you mix it in. At a single 2.5 ml capful per bottle, one bottle covers twelve batches. It cleans glass and mirrors without leaving cloth marks, polishes steel and aluminium surfaces, and works as a pre-ironing spray on any kind of clothing. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "No rinsing needed, and it saves water",
          body:
            "Nouvie products are designed so you never have to rinse them off. As they dry they leave a protective layer on the surface that stops dirt sticking, so glass gets dirty more slowly and the next clean costs less water. That is why every drop counts: a 30 ml bottle makes six litres of ready-to-use product and replaces several disposable supermarket sprays.",
        },
      ],
      audienceBlocks: [
        {
          heading: "For glass, mirrors and steel",
          body:
            "Cleans glass, windows and mirrors without marks or cloth streaks, and dries fast. The same mix polishes stainless steel and aluminium surfaces — appliances, range hoods and taps — without leaving a greasy film.",
        },
        {
          heading: "For pre-ironing",
          body:
            "Sprayed onto a garment before ironing, it relaxes the fibres and makes any kind of clothing easier to press. Use the same dilution as for glass: one capful of product in the measuring bottle filled with water.",
        },
      ],
      faqs: [
        {
          question: "What is in the Glass Cleaner Starter Kit?",
          answer:
            "It includes a 30 ml bottle of concentrated glass cleaner and the 500 ml measuring bottle you mix the product in. The kit has everything you need to get started.",
        },
        {
          question: "How far does a 30 ml bottle go?",
          answer:
            "It makes 12 measuring bottles of 500 ml — six litres of ready-to-use product. Fill the measuring bottle with water and add a single capful of product, which is 2.5 ml.",
        },
        {
          question: "Does it leave marks on glass?",
          answer:
            "No. It is formulated to dry fast and leave no cloth streaks, which is the mark conventional cleaners tend to leave. It works equally well on glass, windows and mirrors.",
        },
        {
          question: "Does it work on stainless steel?",
          answer:
            "Yes. It polishes stainless steel and aluminium surfaces without leaving a greasy film, so it can be used on appliances, range hoods and taps.",
        },
      ],
    },
    name: "Glass Cleaning Starter Kit 30 ml",
    tagline: "Glass cleaner and fabric care. Yields 12 dispensers of 500 ml",
    description:
      "Preparation: This product is sold with a dispenser bottle. Fill the dispenser with water and add one cap of product (2.5 ml), mix a little and it's ready to use. A 30 ml bottle yields 12 dispensers of 500 ml.",
    benefits: [
      "Complete kit with spray bottle",
      "Quick drying without streaks",
      "High yield",
      "Easy application",
      "Biodegradable",
    ],
    badge: "Complete kit",
    dilutionTable: [
      { uso: "Glass and mirror cleaner", cantidad: "", agua: "" },
      { uso: "Metal surface polish (steel, aluminum)", cantidad: "", agua: "" },
      { uso: "Pre-ironing for all types of clothing", cantidad: "", agua: "" },
    ],
  },

  "kit-desengrasante-multiusos": {
    seoContent: {
      intro:
        "The Degreaser Starter Kit is the cheapest way to try Nouvie's multi-purpose degreaser: a 60 ml bottle of concentrate and the 500 ml measuring bottle you mix it in. Half a bottle makes one batch, so the kit covers two. One product cleans ovens, stovetops and range hoods, bathrooms and tiles, grout, limescale and rust, and also works as a laundry pre-wash and an odour remover. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "No rinsing needed, and it saves water",
          body:
            "Nouvie products are designed so you never have to rinse them off. As they dry they leave a protective layer on the surface that stops dirt sticking, so the next clean takes less effort and less water. That is why every drop counts: a 60 ml bottle replaces several supermarket products while cutting both your water use and the plastic that ends up in the bin.",
        },
      ],
      audienceBlocks: [
        {
          heading: "For kitchen grease",
          body:
            "It is four times more surfactant than others in its category, so it lifts and dissolves grease from ovens, stovetops and range hoods without scrubbing. It is also safe on stainless steel. For heavy grease, dilute one capful of product in five capfuls of hot water.",
        },
        {
          heading: "For bathrooms and grout",
          body:
            "Removes limescale, rust and mould from tiles, showers and glass doors, and cleans the grout between tiles where dirt collects. It is neither corrosive nor caustic, so it needs no gloves or face mask to use.",
        },
      ],
      faqs: [
        {
          question: "What is in the Degreaser Starter Kit?",
          answer:
            "It includes a 60 ml bottle of concentrated multi-purpose degreaser and the 500 ml measuring bottle you mix the product in. The measuring bottle has the measures printed on it, so you do not need to work out proportions.",
        },
        {
          question: "How far does a 60 ml bottle go?",
          answer:
            "It makes two measuring bottles of 500 ml. Fill the bottle with water up to the black band and add half the contents of the product bottle, so each bottle covers two batches.",
        },
        {
          question: "Can it be used to clean the oven?",
          answer:
            "Yes, that is one of its main uses. Its four-times-more-surfactant formula lifts and dissolves grease from ovens, stovetops and range hoods. For very heavy grease, dilute one capful of product in five capfuls of hot water.",
        },
        {
          question: "Do I need gloves to use it?",
          answer:
            "No. The product is non-toxic, non-caustic and non-corrosive, so it needs neither gloves nor a face mask for normal use.",
        },
      ],
    },
    name: "Multi-Purpose Degreaser Starter Kit 60 ml",
    tagline: "Non-corrosive multipurpose degreaser. Yields 2 dispensers of 500 ml. Removes grease, mold, limescale, and stains",
    description:
      "Preparation: This product is sold with a dispenser bottle. Add water to the black line at mark 1.10. Then fill the transparent section with half the product content, mix a little and it's ready to use. A 60 ml bottle yields two 500 ml dispensers. Replaces more than 8 conventional products.",
    benefits: [
      "Complete kit with spray bottle",
      "Industrial degreasing power",
      "High yield",
      "For the entire kitchen",
      "Biodegradable",
    ],
    badge: "Complete kit",
    dilutionTable: [
      { uso: "Cleans ovens, stovetops, and range hoods", cantidad: "", agua: "" },
      { uso: "Bathroom, tile, shower door and similar cleaning", cantidad: "", agua: "" },
      { uso: "Grout cleaner", cantidad: "", agua: "" },
      { uso: "Excess wax remover on floors", cantidad: "", agua: "" },
      { uso: "Ceramic floor cleaning (1 cap in a bucket with 2 L of water)", cantidad: "", agua: "" },
      { uso: "Limescale and rust remover", cantidad: "", agua: "" },
      { uso: "Laundry pre-wash", cantidad: "", agua: "" },
      { uso: "Odor eliminator", cantidad: "", agua: "" },
    ],
  },

  "kit-limpia-pisos": {
    seoContent: {
      intro:
        "The Floor Cleaner Starter Kit comes with a 30 ml bottle of concentrate and the 500 ml measuring bottle you mix it in. At a single 2.5 ml capful per bottle, one bottle covers twelve batches — or twelve two-litre buckets if you prefer to mop. It cleans and waxes ceramic, marble, wood, laminate and porcelain tile in one pass, and also works as a moisturiser and protector for outdoor wood. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "No rinsing needed, and it saves water",
          body:
            "Nouvie products are designed so you never have to rinse them off. As they dry they leave a protective layer on the surface that stops dirt sticking, so the floor gets dirty more slowly and the next mop costs less water. That is why every drop counts: a 30 ml bottle makes six litres of ready-to-use product and replaces several bottles of conventional floor cleaner.",
        },
      ],
      audienceBlocks: [
        {
          heading: "For every kind of floor",
          body:
            "Works on ceramic, marble, wood, laminate and porcelain tile. It contains carnauba wax, so it cleans and polishes in the same pass without leaving sticky residue or yellowing the finish. To mop, use one capful of product in a bucket with two litres of water.",
        },
        {
          heading: "For wood and outdoors",
          body:
            "It works as a wood moisturiser and as a protector for outdoor wooden furniture and doors, where the weather dries the surface out. It also works for pre-ironing delicate clothes, leaving a light starched finish.",
        },
      ],
      faqs: [
        {
          question: "What is in the Floor Cleaner Starter Kit?",
          answer:
            "It includes a 30 ml bottle of concentrated floor cleaner and the 500 ml measuring bottle you mix the product in. The kit has everything you need to get started.",
        },
        {
          question: "How far does a 30 ml bottle go?",
          answer:
            "It makes 12 measuring bottles of 500 ml — six litres of ready-to-use product. If you prefer to mop with a bucket, it covers twelve two-litre buckets of water with one capful of product each.",
        },
        {
          question: "Is it safe on wood and laminate floors?",
          answer:
            "Yes. It cleans and waxes ceramic, marble, wood, laminate and porcelain tile. Its carnauba wax formula protects the finish without yellowing it and leaves no sticky residue.",
        },
        {
          question: "Do I need to rinse after mopping?",
          answer:
            "No. It is designed to need no rinsing. As it dries it leaves a protective layer that stops dirt sticking, which cuts the water used on every clean.",
        },
      ],
    },
    name: "Floor Cleaning Starter Kit 30 ml",
    tagline: "Floor cleaner and shine enhancer. For all types of floors. Yields 12 dispensers of 500 ml",
    description:
      "Preparation: This product is sold with a dispenser bottle. Fill the dispenser with water and add one cap of product (2.5 ml), mix a little and it's ready to use with Mop. To prepare in a bucket, add 2 liters of water and one cap of product. A 30 ml bottle yields 12 dispensers of 500 ml.",
    benefits: [
      "Complete kit with dispenser",
      "For all types of floors",
      "Cleans and shines - Non-slip",
      "High yield",
      "Biodegradable",
    ],
    badge: "Complete kit",
    dilutionTable: [
      { uso: "Car washing and waxing", cantidad: "", agua: "" },
      { uso: "Wood protector and moisturizer for outdoor furniture", cantidad: "", agua: "" },
      { uso: "Glass and mirror anti-fogging", cantidad: "", agua: "" },
    ],
  },

  "kit-lustra-muebles": {
    seoContent: {
      intro:
        "The Furniture Polish Starter Kit comes with a 50 ml bottle of concentrate and the 500 ml measuring bottle you mix it in. One bottle fills a complete measuring bottle. It polishes wood, laminate and plastic furniture without leaving a greasy feel, cleans and polishes leather and faux leather, brings a shine to kitchen surfaces, appliances and bathrooms, and works on a car dashboard. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "No rinsing needed, and it saves water",
          body:
            "Nouvie products are designed so you never have to rinse them off. As they dry they leave a protective layer on the surface that stops dirt sticking, which is why polished furniture attracts less dust and stays clean for longer. That is why every drop counts: a 50 ml bottle makes half a litre of ready-to-use product.",
        },
      ],
      audienceBlocks: [
        {
          heading: "For wood, laminate and plastic",
          body:
            "Polishes and conditions without leaving a greasy feel, giving a smooth antistatic finish that repels dust. Works on wooden furniture, laminate surfaces and plastic parts. Apply with a soft dry cloth, never directly onto the object.",
        },
        {
          heading: "For leather, cars and appliances",
          body:
            "Cleans and polishes leather, faux leather and similar materials, from furniture to handbags and bags. It also brings a shine to appliances and to kitchen and bathroom surfaces, and leaves a car dashboard clean without greasing it.",
        },
      ],
      faqs: [
        {
          question: "What is in the Furniture Polish Starter Kit?",
          answer:
            "It includes a 50 ml bottle of concentrated furniture polish and the 500 ml measuring bottle you mix the product in. The measuring bottle has the measures printed on it.",
        },
        {
          question: "How far does a 50 ml bottle go?",
          answer:
            "It makes one 500 ml measuring bottle of ready-to-use product. Fill the bottle with water up to the black band and add the contents of the product bottle in the clear panel section.",
        },
        {
          question: "Can it be used on floors?",
          answer:
            "No. This product leaves surfaces very smooth and slippery, so it must not be used on floors. If it spills on the floor, clean it up with plenty of water.",
        },
        {
          question: "Does it work on leather and on a car dashboard?",
          answer:
            "Yes. It cleans and polishes leather, faux leather and similar materials, and leaves a car dashboard clean with no greasy feel.",
        },
      ],
    },
    name: "Furniture Polish Starter Kit 60 ml",
    tagline: "Non-greasy, anti-static furniture polish. Complete care for your furniture and objects of wood, leather, faux leather, formica",
    description:
      "Preparation: This product is sold with a dispenser bottle. Add water to the black line at mark 1.5. Then fill the transparent section with the product, mix a little and it's ready to use. A 50 ml bottle yields 1 dispenser of 500 ml.",
    benefits: [
      "Anti-static and anti-fingerprint",
      "Non-greasy",
      "Long-lasting protection",
      "For multiple surfaces",
      "High yield",
    ],
    badge: "Complete kit",
  },

  // ============================================
  // HOME LINE - REFILLS
  // ============================================
  "repuesto-lavavajilla": {
    seoContent: {
      intro:
        "The Dishwashing Refill is the reload for the Starter Kit: a 50 ml bottle of concentrated neutral detergent that makes one full 500 ml measuring bottle. Buying only the refill means reusing the bottle you already own, so you pay less and avoid a new plastic container. It is the same product as the kit: for washing dishes by hand or in a dishwasher, washing fruit and vegetables, and washing delicate and baby clothes. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "Refill and reuse your bottle",
          body:
            "The 500 ml measuring bottle is built to last. When the product runs out you do not need to buy another container: this 50 ml refill fills it again in under a minute. Every reload avoids one more plastic bottle and lowers the cost per litre compared with buying the whole kit again.",
        },
      ],
      faqs: [
        {
          question: "What is the difference between the refill and the kit?",
          answer:
            "The kit includes the 500 ml measuring bottle plus the concentrate. The refill contains only the 50 ml concentrate, for people who already have the bottle and just need to reload it.",
        },
        {
          question: "How far does the 50 ml refill go?",
          answer:
            "It makes one full 500 ml measuring bottle of ready-to-use product.",
        },
        {
          question: "Do I need to buy the kit first?",
          answer:
            "Yes. The refill does not include the measuring bottle, so you need the bottle from the Dishwashing Starter Kit to mix the product.",
        },
      ],
    },
    name: "Dish Washing Refill 50 ml",
    tagline: "Yields 1 dispenser of 500 ml. Refill and save",
    description:
      "Concentrated Neutral Detergent refill to reload your Dish Washing Kit. Same cleaning power, maximum savings. Contributes to the environment by reducing plastic packaging.",
    benefits: [
      "Economical refill",
      "Reduces plastic waste",
      "Same cleaning power",
      "Compatible with Dish Washing Kit",
      "Eco-friendly",
    ],
    badge: "Refill",
  },

  "repuesto-limpia-vidrios": {
    seoContent: {
      intro:
        "The Glass Cleaner Refill is the highest-yield reload in the line: a 30 ml bottle that, at one 2.5 ml capful per bottle, makes 12 measuring bottles of 500 ml — six litres of ready-to-use product. It cleans glass and mirrors without leaving cloth marks, polishes steel and aluminium, and works as a pre-ironing spray. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "Six litres in a 30 ml bottle",
          body:
            "Because it is so concentrated, this refill replaces roughly twelve disposable supermarket glass-cleaner sprays. That is the real saving: you stop paying for the container and for water you already have at home, and you reuse the same measuring bottle every time.",
        },
      ],
      faqs: [
        {
          question: "How far does the 30 ml refill go?",
          answer:
            "It makes 12 measuring bottles of 500 ml — six litres of ready-to-use product. Add a single 2.5 ml capful to each bottle filled with water.",
        },
        {
          question: "Is it the same product as the kit?",
          answer:
            "Yes, it is exactly the same concentrate. The only difference is that the refill does not include the measuring bottle.",
        },
        {
          question: "Does it leave marks on glass?",
          answer:
            "No. It is formulated to dry fast and leave no cloth marks, on glass, windows and mirrors alike.",
        },
      ],
    },
    name: "Glass Cleaner Refill 30 ml",
    tagline: "Glass cleaner and fabric care. Yields 12 dispensers of 500 ml. Refill and save",
    description:
      "Concentrated Glass Cleaner refill to reload your kit. Spotless glass with maximum savings and minimal environmental impact by reusing your spray bottle.",
    benefits: [
      "Economical refill",
      "Reduces plastic waste",
      "Quick drying",
      "Compatible with Glass Cleaning Kit",
      "Eco-friendly",
    ],
    badge: "Refill",
  },

  "repuesto-desengrasante-multiusos": {
    seoContent: {
      intro:
        "The Multi-Purpose Degreaser Refill is the reload for the Starter Kit: a 60 ml bottle of concentrate that makes two measuring bottles of 500 ml, using half the bottle for each. It is the same degreaser as the kit, four times more surfactant than others in its category: it cleans ovens, stovetops and range hoods, bathrooms and tiles, grout, limescale and rust, and works as a laundry pre-wash. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "Two reloads in a single bottle",
          body:
            "60 ml makes one litre of ready-to-use product, split across two measuring bottles. Since you do not need to buy another spray bottle, every reload lowers the cost per litre and avoids two of the plastic containers you would otherwise buy at the supermarket.",
        },
      ],
      faqs: [
        {
          question: "How far does the 60 ml refill go?",
          answer:
            "It makes two measuring bottles of 500 ml. Each batch uses half the contents of the bottle.",
        },
        {
          question: "Can I use it to clean the oven?",
          answer:
            "Yes. That is one of its main uses: its four-times-more-surfactant formula lifts and dissolves grease from ovens, stovetops and range hoods.",
        },
        {
          question: "Do I need gloves to use it?",
          answer:
            "No. The product is non-toxic, non-caustic and non-corrosive, so it needs neither gloves nor a face mask for normal use.",
        },
      ],
    },
    name: "Multi-Purpose Degreaser Refill 60 ml",
    tagline: "Non-corrosive multipurpose degreaser. Yields 2 dispensers of 500 ml. Refill and save",
    description:
      "Concentrated Multi-Purpose Degreaser refill. Reload your kit and keep eliminating the toughest grease while caring for the planet by reducing plastic waste.",
    benefits: [
      "Economical refill",
      "Reduces plastic waste",
      "Same degreasing power",
      "Compatible with Degreaser Kit",
      "Eco-friendly",
    ],
    badge: "Refill",
  },

  "repuesto-limpia-pisos": {
    seoContent: {
      intro:
        "The Floor Cleaner Refill is the reload for the Starter Kit: a 30 ml bottle that makes 12 measuring bottles of 500 ml, or twelve two-litre buckets if you prefer to mop. It cleans and waxes ceramic, marble, wood, laminate and porcelain tile in a single pass, and also works as a moisturiser and protector for outdoor wood. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "Twelve mopping sessions per bottle",
          body:
            "One 2.5 ml capful is enough for a two-litre bucket, so a 30 ml bottle covers twelve full floor cleans. Because the product leaves a protective layer that stops dirt sticking, the floor gets dirty more slowly and each reload goes even further.",
        },
      ],
      faqs: [
        {
          question: "How far does the 30 ml refill go?",
          answer:
            "It makes 12 measuring bottles of 500 ml, or twelve two-litre buckets of water, adding one 2.5 ml capful to each batch.",
        },
        {
          question: "Is it safe on wood and laminate floors?",
          answer:
            "Yes. It cleans and waxes ceramic, marble, wood, laminate and porcelain tile. Its carnauba wax formula protects the finish without yellowing it.",
        },
        {
          question: "Do I need to rinse after mopping?",
          answer:
            "No. It is designed to need no rinsing. As it dries it leaves a protective layer that stops dirt sticking.",
        },
      ],
    },
    name: "Floor Cleaner Refill 30 ml",
    tagline: "Floor cleaner and shine enhancer. Yields 12 dispensers of 500 ml. Refill and save",
    description:
      "Concentrated Floor Cleaner refill to reload your kit. Keep your floors shiny and protected with maximum savings and environmental commitment.",
    benefits: [
      "Economical refill",
      "Reduces plastic waste",
      "For all types of floors",
      "Compatible with Floor Cleaning Kit",
      "Eco-friendly",
    ],
    badge: "Refill",
  },

  "repuesto-lustra-muebles": {
    seoContent: {
      intro:
        "The Furniture Polish Refill is the reload for the Starter Kit: a 50 ml bottle of concentrate that makes one full 500 ml measuring bottle. It polishes wood, laminate and plastic furniture without leaving a greasy feel, cleans and polishes leather and faux leather, brings a shine to appliances and kitchen and bathroom surfaces, and works on a car dashboard. It is biodegradable, sulfate free, non-toxic and non-corrosive — one of Nouvie's [eco-friendly cleaning products made in Colombia](/nosotros).",
      sections: [
        {
          heading: "Refill and reuse your bottle",
          body:
            "Buying only the reload means reusing the measuring bottle you already own and avoiding a new plastic container. The antistatic finish it leaves means furniture attracts less dust, so each batch lasts longer between cleans.",
        },
      ],
      faqs: [
        {
          question: "How far does the 50 ml refill go?",
          answer:
            "It makes one full 500 ml measuring bottle of ready-to-use product.",
        },
        {
          question: "Can it be used on floors?",
          answer:
            "No. This product leaves surfaces very smooth and slippery, so it must not be used on floors. If it spills on the floor, clean it up with plenty of water.",
        },
        {
          question: "Does it work on leather and on a car dashboard?",
          answer:
            "Yes. It cleans and polishes leather, faux leather and similar materials, and leaves a car dashboard clean with no greasy feel.",
        },
      ],
    },
    name: "Furniture Polish Refill 50 ml",
    tagline: "Non-greasy, anti-static furniture polish. Yields 1 dispenser of 500 ml. Refill and save",
    description:
      "Concentrated Furniture Polish refill. Reload your kit and keep protecting your furniture with the same shine and care as always.",
    benefits: [
      "Economical refill",
      "Reduces plastic waste",
      "Non-greasy",
      "Compatible with Furniture Polish Kit",
      "Eco-friendly",
    ],
    badge: "Refill",
  },
};
