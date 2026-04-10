// English translations for product data
// Spanish is the source of truth in product-data.ts
// This file provides English overrides for text fields only

import type { DilutionRow, ProductStep, ProductSpec, ProductPresentation } from "./product-data";

export interface ProductTranslation {
  name?: string;
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
}

export const productTranslationsEn: Record<string, ProductTranslation> = {
  // ============================================
  // HOME LINE
  // ============================================
  "desengrasante-bioptimo-500ml": {
    name: "Multi-Purpose Degreaser Ready To Use 500 ml",
    tagline: "Citrus scent. Replaces 8 conventional products - Removes stains from fabric, rust, limescale, odors",
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
    name: "Concentrated Floor Cleaner 250 ml",
    tagline: "Yields 50 mopping sessions. Contains Carnauba wax. Cleans and shines all types of floors",
    description:
      "Nouvie Floor and Delicate Surface Cleaner is a concentrated liquid cleaner formulated to clean and shine in a single application all types of floors and delicate surfaces. It contains emulsifying agents, stabilizers, Carnauba wax, and polyethylene wax. It enhances and maintains natural shine. Special for car washing and waxing. Perfect for applying on bathroom mirrors and glass as an anti-fogging agent.",
    benefits: [
      "Highly concentrated product",
      "Non-slip",
      "Perfect for car washing",
      "Leaves no streaks or residue",
      "Wood, laminate, marble, ceramic, gres tile floors",
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
    tagline: "Yields 6 dispensers of 500 ml. Removes grease, mold, limescale, and stains",
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
    name: "Concentrated Furniture Polish 250 ml",
    tagline: "Yields 3 dispensers of 500 ml. Non-greasy - Repels dust, hydrates and shines",
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
    name: "Concentrated Glass Cleaner 250 ml",
    tagline: "Yields 100 dispensers of 500 ml. Quick drying - Shines without leaving cloth traces",
    description:
      "The Concentrated Glass Cleaner and Fabric Care is a product of extremely high cleaning power, specially formulated for cleaning carpets, upholstery, corduroy, suede, etc. Cleans glass, crystals, stainless steel, metals in general, without leaving marks, providing a shiny finish. Suitable for car upholstery washing, fabric furniture, and clothing. Revives colors and protects fabric fibers.",
    benefits: [
      "Yields up to 100 dispensers of 500 ml",
      "Cleans and shines glass and mirrors",
      "Polishes steel and aluminum surfaces",
      "Protects fabric fibers and revives colors",
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
    name: "Complete Smooth & Straight Treatment Kit",
    tagline: "Bio Keratina for smooth and luminous hair",
    description:
      "Nourish and protect your hair with NOUVIE treatment formula containing 8 essential oils plus bio Keratina. Bio Keratina contains amino acids compatible with proteins present in the hair follicle and hair fiber. Amino acids present in bio Keratina: arginine (stimulates collagen to repair damaged hair), methionine (antioxidant that protects hair follicles from oxidative stress).",
    benefits: [
      "Natural Bio Keratina",
      "Smooth and luminous hair",
      "Reduces frizz and curling",
      "Maintains natural color",
      "Nourishing essential oils",
    ],
    steps: [
      {
        step: 1,
        name: "Smooth & Straight Shampoo",
        instruction:
          "Apply a generous amount to wet hair, gently massage from roots to tips. Rinse thoroughly with water.",
      },
      {
        step: 2,
        name: "Smooth & Straight Mask",
        instruction:
          "After shampooing, apply the mask from mid-lengths to tips. Leave on for 3 to 5 minutes and rinse.",
      },
      {
        step: 3,
        name: "Smooth & Straight Lotion",
        instruction:
          "Apply a generous amount of styling lotion to wet or dry hair, comb through and let dry.",
      },
    ],
  },

  "tratamiento-reparacion-intensa": {
    name: "Complete Intensive Repair Kit",
    tagline: "Shea Butter for deep repair",
    description:
      "Nourish and protect your hair with NOUVIE treatment formula containing 8 essential oils plus Shea Butter. Shea Butter contains nourishing substances that restore and bring back strength and shine to your hair. It provides natural protection for damaged hair. Nourishes and moisturizes dry and brittle hair. Protects against heat and UV rays. Shea Butter is an excellent moisturizer for hair.",
    benefits: [
      "Nourishing Shea Butter",
      "Intensive repair",
      "Restores strength and shine",
      "Deep hydration",
      "Ideal for damaged hair",
    ],
    steps: [
      {
        step: 1,
        name: "Intensive Repair Shampoo",
        instruction:
          "Apply the Shampoo using a coin-sized amount of product, lather and rinse. Repeat if necessary.",
      },
      {
        step: 2,
        name: "Intensive Repair Mask",
        instruction:
          "Apply the mask from mid-lengths to tips, leave on for 3 to 5 minutes for best results. Rinse.",
      },
      {
        step: 3,
        name: "Intensive Repair Lotion",
        instruction:
          "Apply a generous amount of styling lotion to wet or dry hair, comb through and let dry.",
      },
    ],
  },

  "tratamiento-revitalizante": {
    name: "Complete Revitalizing Kit",
    tagline: "Argan Oil, yogurt, prebiotics and hydrolyzed Keratina. Ideal for stopping hair loss",
    description:
      "Nourish and protect your hair with NOUVIE treatment formula containing oils, yogurt, prebiotics, and hydrolyzed Keratina, all these ingredients helping to restore the natural shine of the hair. Strengthens and protects your hair by rejuvenating the hair fiber. With 8 oils featuring argan oil as the star ingredient, yogurt, prebiotics, and hydrolyzed Keratina that restructures the hair acting on the hair fiber. Ideal for stopping hair loss.",
    benefits: [
      "Natural Argan Oil",
      "Yogurt and Prebiotics",
      "Strengthens hair fiber",
      "Specialized men's line",
      "Rejuvenates hair",
    ],
    steps: [
      {
        step: 1,
        name: "Revitalizing Shampoo",
        instruction:
          "Apply the Shampoo using a coin-sized amount of product. Lather, massage the scalp, and rinse.",
      },
      {
        step: 2,
        name: "Revitalizing Styling Lotion",
        instruction:
          "Apply a generous amount of styling cream to the damp scalp, style and let dry. No rinsing required.",
      },
    ],
  },

  // ============================================
  // HAIR CARE LINE - INDIVIDUAL PRODUCTS
  // ============================================

  // --- Smooth & Straight Line (Kiwi & Acai) ---
  "shampoo-suave-y-liso": {
    name: "Smooth & Straight Shampoo",
    tagline: "Sulfate and paraben-free cleansing. Bio Keratina for shine",
    size: "237 ml",
    description:
      "Add a portion to the center of your hand, rub your hands together and apply it to the roots of already wet hair, rub so that the natural active ingredients work. Normally on the first application it does not lather since it does not contain harmful sulfates. If desired, you can do a second wash.",
    benefits: [
      "Sulfate and paraben-free cleansing",
      "Bio Keratina for shine",
      "Reduces frizz and curling",
      "Prepares hair for the treatment",
      "Suitable for daily use",
    ],
    badge: "237 ml",
  },

  "mascarilla-suave-y-liso": {
    name: "Smooth & Straight Mask",
    tagline: "Seals the cuticle. Intensive nourishment with Bio Keratina",
    size: "177 ml",
    description:
      "The Smooth & Straight Mask is a deep nourishment treatment that seals the cuticle and provides spectacular shine. Its Bio Keratina concentration penetrates the hair fiber, repairing internal damage and leaving hair incredibly soft to the touch. Eliminates the flyaway effect and controls unwanted volume.",
    benefits: [
      "Deep nourishment from mid-lengths to tips",
      "Seals the cuticle",
      "Volume and frizz control",
      "Immediate softness to the touch",
      "Repairs accumulated damage",
    ],
    badge: "177 ml",
  },

  "locion-suave-y-liso": {
    name: "Smooth & Straight Lotion",
    tagline: "The perfect final step for shiny and manageable hair. Detangles and eases styling",
    size: "177 ml",
    description:
      "The Smooth & Straight Styling Lotion is the perfect final step for shiny and manageable hair. It detangles and eases styling. It has specialized nutrients that enrich the hair giving a final finish with shine, it is a heat protector and anti-frizz. After washing hair with the shampoo and using the NOUVIE mask, remove excess water and apply an almond-sized portion to your hand, rub your hands together and apply from mid-lengths to tips finishing with the top of the head. This product is ideal for protecting hair from ultraviolet rays, pool chlorine, and sea water.",
    benefits: [
      "All-day frizz control",
      "Natural heat protection",
      "Detangles and eases styling",
      "Shiny finish without residue",
      "Ideal for use with a blow dryer or flat iron",
    ],
    badge: "177 ml",
  },

  // --- Intensive Repair Line (Honey & Melon) ---
  "shampoo-reparacion-intensa": {
    name: "Intensive Repair Shampoo",
    tagline: "Treatment to seal and repair hair",
    size: "237 ml",
    description:
      "Add a portion to the center of your hand, rub your hands together and apply it to the roots of already wet hair, rub so that the natural ingredients work. Normally on the first application it does not lather since it does not contain harmful sulfates. If desired, you can do a second application. Enriched with Shea Butter, it gently cleanses.",
    benefits: [
      "Starts repairing from the wash",
      "Nourishing Shea Butter",
      "Ideal for damaged or colored hair",
      "Restores softness to brittle hair",
      "Deep cleansing without aggression",
    ],
    badge: "237 ml",
  },

  "mascarilla-reparacion-intensa": {
    name: "Intensive Repair Mask",
    tagline: "Treatment to seal and repair hair",
    size: "177 ml",
    description:
      "After washing hair with the shampoo, apply an almond-sized portion to your hand, rub your hands together and apply from mid-lengths to tips. Leave on for five minutes, detangle hair with your fingers — you will notice the softness the mask leaves on your hair and how it detangles without breaking it. Shea Butter penetrates deeply, rebuilding the hair structure from within. Rinse with warm or cold water, never with hot water.",
    benefits: [
      "Deep fiber reconstruction",
      "Restores strength and elasticity",
      "Intense and long-lasting shine",
      "Transforms brittle hair",
      "Visible results from the first application",
    ],
    badge: "177 ml",
  },

  "locion-reparacion-intensa": {
    name: "Intensive Repair Lotion",
    tagline: "Treatment to seal and repair hair",
    size: "177 ml",
    description:
      "Its formula with Shea Butter creates a protective barrier, maintaining hydration. After washing hair with the shampoo and using the NOUVIE mask, remove excess water and apply an almond-sized portion to your hands, rub them together and apply from mid-lengths to tips finishing with the top of the head. This product is useful for styling hair and achieving a healthy finish.",
    benefits: [
      "Seals in treatment repair",
      "Protection against environmental damage",
      "Extended hydration",
      "Styles without weighing down",
      "Healthy and natural finish",
    ],
    badge: "177 ml",
  },

  // --- Revitalizing Line (Argan Oil) ---
  "shampoo-revitalizante": {
    name: "Revitalizing Shampoo",
    tagline: "Strengthening with Argan Oil",
    size: "237 ml",
    description:
      "The Revitalizing Shampoo is specially designed for men's hair needs. Its formula with Argan Oil, Yogurt, and Prebiotics strengthens from the root, stimulates the scalp, and prevents hair loss. It deeply cleanses, removing excess oil while nourishing every strand.",
    benefits: [
      "Designed for men's hair",
      "Strengthens from the root",
      "Revitalizing Argan Oil",
      "Stimulates the scalp",
      "Prevents weakening and hair loss",
    ],
    badge: "237 ml",
  },

  "locion-revitalizante": {
    name: "Revitalizing Lotion",
    tagline: "Styling and strengthening. Stimulates hair growth",
    size: "177 ml",
    description:
      "The Revitalizing Lotion is the perfect complement for men's hair care. It combines Argan Oil with strengthening agents that rejuvenate hair fiber while allowing you to style as desired. Leaves no residue and provides a natural finish.",
    benefits: [
      "Flexible and natural styling",
      "Strengthens hair fiber",
      "Stimulates hair growth",
      "No residue or greasy feel",
      "Controlled volume all day",
    ],
    badge: "177 ml",
  },

  // ============================================
  // INSTITUTIONAL LINE
  // ============================================
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
    name: "Glass Cleaning Starter Kit 20 ml",
    tagline: "Yields 8 dispensers of 500 ml",
    description:
      "Preparation: This product is sold with a dispenser bottle. Fill the dispenser with water and add one cap of product (2.5 ml), mix a little and it's ready to use. A 20 ml bottle yields 8 dispensers of 500 ml.",
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
    name: "Multi-Purpose Degreaser Starter Kit 60 ml",
    tagline: "Yields 2 dispensers of 500 ml. Removes grease, mold, limescale, and stains",
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
    name: "Floor Cleaning Starter Kit 20 ml",
    tagline: "For all types of floors. Yields 8 dispensers of 500 ml",
    description:
      "Preparation: This product is sold with a dispenser bottle. Fill the dispenser with water and add one cap of product (2.5 ml), mix a little and it's ready to use with Mop. To prepare in a bucket, add 2 liters of water and one cap of product. A 20 ml bottle yields 8 dispensers of 500 ml.",
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
    name: "Furniture Polish Starter Kit 60 ml",
    tagline: "Complete care for your furniture and objects of wood, leather, faux leather, formica",
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
    name: "Glass Cleaner Refill 20 ml",
    tagline: "Yields 8 dispensers of 500 ml. Refill and save",
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
    name: "Multi-Purpose Degreaser Refill 60 ml",
    tagline: "Yields 2 dispensers of 500 ml. Refill and save",
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
    name: "Floor Cleaner Refill 20 ml",
    tagline: "Yields 8 dispensers of 500 ml. Refill and save",
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
    name: "Furniture Polish Refill 50 ml",
    tagline: "Yields 1 dispenser of 500 ml. Refill and save",
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
