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
  "detergente-neutro": {
    name: "Nouvie Neutral Detergent",
    tagline: "Concentrated cleaning for all your laundry",
    description:
      "Nouvie Neutral Detergent is a concentrated detergent designed to wash all types of clothing in washing machines. Specially formulated so that skin and softness do not adhere to softeners, greases, or its great suspension power. Made with natural surfactants such as coconut oil derivatives and betaine, it offers a neutral pH, ensuring the greatest care for your garments.",
    benefits: [
      "Concentrated product - lasts longer",
      "Neutral pH - protects your garments",
      "Made with natural surfactants",
      "Ideal for delicate clothing",
      "Non-toxic and biodegradable",
    ],
    badge: "Concentrated product",
    dilutionTable: [
      { uso: "Washing machine", cantidad: "4 squirts", agua: "500 ml" },
      { uso: "Full load washing machine", cantidad: "8 squirts", agua: "1 L" },
      { uso: "Soaking", cantidad: "2-3 squirts", agua: "5 L" },
    ],
    usageTips: [
      "Ideal for all types of fabrics",
      "Perfect for baby clothes",
      "Works in cold or hot water",
    ],
  },

  "limpia-pisos-concentrado": {
    name: "Concentrated Floor Cleaner",
    tagline: "Streak-free shine for floors and surfaces",
    description:
      "Nouvie Floor and Delicate Surface Cleaner is a concentrated liquid cleaner completely soluble in water. Formulated to clean and remove dirt from all types of floors and delicate surfaces. Perfect for mirrors and bathroom glass, offering streak-free cleaning. Ideal for car washing and waxing.",
    benefits: [
      "Highly concentrated product",
      "Ideal for mirrors and glass",
      "Perfect for car washing",
      "Leaves no streaks or residue",
      "Biodegradable",
    ],
    badge: "Concentrated product",
    dilutionTable: [
      { uso: "Floors", cantidad: "2-3 squirts", agua: "1 L" },
      { uso: "Glass/Mirrors", cantidad: "1-2 squirts", agua: "500 ml" },
      { uso: "Car washing", cantidad: "4 squirts", agua: "5 L" },
    ],
    usageTips: [
      "Apply with a soft cloth for best results",
      "Ideal for marble and porcelain tile surfaces",
      "No rinsing required on small surfaces",
    ],
  },

  "desengrasante-multiusos-concentrado": {
    name: "Multi-Purpose Degreaser",
    tagline: "Removes grease and tough stains",
    description:
      "Nouvie Multi-Purpose Degreaser is unique in its category because it has two functions: degreaser and stain remover. Effective on all water-safe surfaces. Eliminates grease and unwanted odors in the kitchen area and similar spaces. Also suitable for stainless steel kitchens without damaging their surfaces.",
    benefits: [
      "Dual function: degreaser and stain remover",
      "Effective on all surfaces",
      "Eliminates grease and odors",
      "Safe for stainless steel",
      "Does not damage fibers",
    ],
    badge: "Concentrated product",
    dilutionTable: [
      { uso: "Kitchen (light grease)", cantidad: "2 squirts", agua: "500 ml" },
      { uso: "Heavy grease", cantidad: "Direct", agua: "Undiluted" },
      { uso: "Fabric stains", cantidad: "1-2 squirts", agua: "Direct" },
    ],
    usageTips: [
      "Ideal for range hoods",
      "Perfect for cleaning ovens",
      "Use directly on tough grease stains",
    ],
  },

  "lustra-muebles-concentrado": {
    name: "Nouvie Furniture Polish",
    tagline: "Shine and protection with Carnauba wax",
    description:
      "Nouvie Furniture Polish is a silicone enriched with Carnauba wax, ideal for cleaning, renewing, and polishing furniture and stainless steel surfaces. It provides shine and hydration especially on wood surfaces and furniture. It gives a fresh finish to Teflon and other surfaces. Cleans and protects leather items such as handbags and upholstery.",
    benefits: [
      "Enriched with Carnauba wax",
      "Ideal for wood and metal",
      "Protects leather and upholstery",
      "Long-lasting shine",
      "Hydrates wood surfaces",
    ],
    badge: "Concentrated product",
    usageTips: [
      "Apply with a soft, dry cloth",
      "Ideal for wooden furniture",
      "Perfect for leather handbags and purses",
    ],
  },

  "limpia-vidrios-concentrado": {
    name: "Concentrated Glass Cleaner",
    tagline: "Spotless cleaning with quick drying",
    description:
      "Nouvie Glass and Carpet Cleaner is a highly concentrated and economical product, soluble in water. Designed for cleaning glass, carpets, and upholstery. Leaves your glass and carpets spotless with a quick-drying effect, without leaving streaks. Its versatility makes it effective for dry cleaning, providing ideal cleaning for carpets and upholstery.",
    benefits: [
      "Highly concentrated and economical",
      "Quick-drying effect",
      "No streaks or residue",
      "Ideal for dry cleaning",
      "Versatile use",
    ],
    badge: "Concentrated product",
    dilutionTable: [
      { uso: "Glass", cantidad: "2-3 squirts", agua: "500 ml" },
      { uso: "Carpets", cantidad: "3-4 squirts", agua: "1 L" },
      { uso: "Upholstery", cantidad: "2 squirts", agua: "500 ml" },
    ],
    usageTips: [
      "Use with a spray bottle for glass",
      "On carpets, rub gently",
      "Allow to air dry naturally",
    ],
  },

  "atomizador": {
    name: "Nouvie Spray Bottle",
    tagline: "The perfect companion for your products",
    description:
      "High-quality spray bottle designed to use with all concentrated products from the Nouvie Home Line. Enables precise and economical product application. You can get it FREE! For every 10 bottles you send us for recycling, you will receive a 5% discount on your next purchase or a free spray bottle.",
    benefits: [
      "High quality and durability",
      "Fine and even spray",
      "Compatible with all Nouvie products",
      "Easy to use",
      "FREE when you recycle 10 bottles!",
    ],
    usageTips: [
      "Use it with any Home Line product",
      "Recycle 10 bottles and get one free",
      "Adjust the nozzle for fine or coarse spray",
    ],
  },

  // ============================================
  // HAIR CARE LINE - TREATMENTS
  // ============================================
  "tratamiento-suave-y-liso": {
    name: "Smooth & Straight Treatment",
    tagline: "Bio Keratina for smooth and luminous hair",
    description:
      "Nourish and protect your hair with special Bio Keratina treatments: Shampoo, Mask, and Styling Lotion by NOUVIE. Its formulation contains essential Bio Keratina oils that help straighten hair while maintaining its natural color. Continuous use of Bio Keratina helps reduce frizz, curling, and the flyaway effect.",
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
    name: "Intensive Repair Treatment",
    tagline: "Shea Butter for deep repair",
    description:
      "Shea Butter contains ideal nourishing substances to restore and bring back strength and shine. Hydration and shine for hair, this type of product provides natural protection that helps damaged hair that has lost strength and shine. Nourishes and moisturizes dry and brittle hair.",
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
    name: "Revitalizing Treatment",
    tagline: "Argan Oil for men's hair care",
    description:
      "Argan Oil, together with the 3 natural oils in our formula, provides a restorative and protective effect. Strengthens and protects your hair with constant hydration, strengthening of hair and hair fiber. This exclusive NOUVIE treatment strengthens and rejuvenates hair and hair fiber. Repairs brittle and damaged hair.",
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
    tagline: "Gentle cleansing with Bio Keratina",
    size: "237 ml",
    description:
      "The Smooth & Straight Shampoo with Bio Keratina gently cleanses while smoothing the hair fiber from the root. Its formula enriched with Kiwi and Acai essential oils removes impurities without drying out, preparing the hair to receive the benefits of the full treatment. Ideal for frizzy, curly, or hard-to-comb hair.",
    benefits: [
      "Gentle cleansing without harsh sulfates",
      "Bio Keratina that smooths from the wash",
      "Reduces frizz and curling",
      "Prepares hair for the treatment",
      "Suitable for daily use",
    ],
    badge: "237 ml",
  },

  "mascarilla-suave-y-liso": {
    name: "Smooth & Straight Mask",
    tagline: "Intensive nourishment with Bio Keratina",
    size: "177 ml",
    description:
      "The Smooth & Straight Mask is a deep nourishment treatment that seals the cuticle and provides spectacular shine. Its Bio Keratina concentration penetrates the hair fiber, repairing internal damage and leaving hair incredibly soft to the touch. Eliminates the flyaway effect and controls unwanted volume.",
    benefits: [
      "Deep nourishment from mid-lengths to tips",
      "Seals the cuticle for maximum shine",
      "Volume and frizz control",
      "Immediate softness to the touch",
      "Repairs accumulated damage",
    ],
    badge: "177 ml",
  },

  "locion-suave-y-liso": {
    name: "Smooth & Straight Lotion",
    tagline: "Smooth and shiny finish without rinsing",
    size: "177 ml",
    description:
      "The Smooth & Straight Styling Lotion is the perfect final step for smooth, shiny, and manageable hair. Applied to wet or dry hair, this leave-in lotion controls frizz throughout the day, protects from heat, and makes styling easier. Leaves a natural finish without residue or sticky feeling.",
    benefits: [
      "All-day frizz control",
      "Natural heat protection",
      "Easier styling and detangling",
      "Shiny finish without residue",
      "Ideal for use with a blow dryer or flat iron",
    ],
    badge: "177 ml",
  },

  // --- Intensive Repair Line (Honey & Melon) ---
  "shampoo-reparacion-intensa": {
    name: "Intensive Repair Shampoo",
    tagline: "Restorative cleansing with Shea Butter",
    size: "237 ml",
    description:
      "The Intensive Repair Shampoo starts the restoration process from the very first wash. Enriched with Shea Butter and Honey & Melon extracts, it gently cleanses while depositing essential nutrients into damaged hair fiber. Perfect for hair damaged by chemicals, dyes, or heat tools.",
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
    tagline: "Deep restoration with Shea Butter",
    size: "177 ml",
    description:
      "The Intensive Repair Mask is a concentrated treatment that brings life back to the most damaged hair. Shea Butter penetrates deeply, rebuilding the hair structure from within. In just 3-5 minutes, it transforms dry and brittle hair into strong, shiny, and vibrant strands.",
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
    tagline: "Protection and restorative finish",
    size: "177 ml",
    description:
      "The Intensive Repair Lotion seals in the treatment benefits and protects hair throughout the day. Its formula with Shea Butter and Honey & Melon creates a protective barrier against external aggressors while maintaining hydration. Perfect for styling, defining, and achieving a healthy finish without weighing hair down.",
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
    tagline: "Men's strengthening with Argan Oil",
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
    tagline: "Men's styling and strengthening",
    size: "177 ml",
    description:
      "The Revitalizing Lotion is the perfect complement for men's hair care. It combines Argan Oil with strengthening agents that rejuvenate hair fiber while allowing you to style as desired. Leaves no residue, does not weigh hair down, and provides a natural finish with controlled volume.",
    benefits: [
      "Flexible and natural styling",
      "Strengthens hair fiber",
      "Rejuvenates hair",
      "No residue or greasy feel",
      "Controlled volume all day",
    ],
    badge: "177 ml",
  },

  // ============================================
  // INSTITUTIONAL LINE
  // ============================================
  "limpia-vidrios-institucional-concentrado": {
    name: "Institutional Glass Cleaner Concentrate",
    tagline: "Professional concentrated cleaning for glass and metals",
    description:
      "Ultimate cleaning power: cleans glass, crystals, stainless steel, metals in general, and acrylics. Treats surfaces and protects micro-fissures. Ammonia-free, with cleaning agents that provide shine and protect all kinds of furniture and surfaces. Its biodegradable surfactants degrease surfaces and provide UV protection.",
    benefits: [
      "Professional multi-surface",
      "Ammonia-free",
      "UV protection",
      "Biodegradable",
      "Does not scratch surfaces",
    ],
    specs: [
      { label: "pH", value: "7.0 - 7.5 Neutral" },
      { label: "Density", value: "1.01 g/ml" },
      { label: "Biodegradability", value: "> 90%" },
      { label: "Appearance", value: "Blue transparent liquid" },
    ],
    presentations: [
      { size: "1 Liter" },
    ],
  },

  "limpiador-superficies-institucional": {
    name: "Institutional Surface Cleaner Ready To Use",
    tagline: "Professional ready-to-use surface cleaning",
    description:
      "Its formulation contains antistatic silicone which, together with cleaning agents and strengthening elements, provides shine and protects all kinds of furniture and surfaces. Its surfactants and silicone catalyze into a smooth, lubricating finish. It is an ideal product for cleaning screens, monitors, televisions, and electronic equipment.",
    benefits: [
      "Antistatic silicone",
      "Ideal for screens and monitors",
      "Protects electronic equipment",
      "Leaves no residue",
      "Smooth finish",
    ],
    specs: [
      { label: "pH", value: "6.5 - 7.5" },
      { label: "Density", value: "0.98 - 1.02 g/ml" },
      { label: "Biodegradability", value: "> 90%" },
      { label: "Appearance", value: "Milky white liquid" },
    ],
    presentations: [
      { size: "1 Liter" },
      { size: "1 Gallon" },
    ],
  },

  "limpia-pisos-institucional": {
    name: "Institutional Floor Cleaner Concentrate",
    tagline: "Professional concentrated floor cleaning",
    description:
      "A viscous liquid completely soluble in water. Formulated to clean and protect all types of floors such as marble, porcelain tile, ceramic tile, and other delicate floors. This product does not harm surfaces or the environment. Its biodegradability is rapid, non-toxic, and non-irritating.",
    benefits: [
      "For delicate floors",
      "Ideal for marble and porcelain tile",
      "Environmentally friendly",
      "Biodegradable",
      "Non-toxic",
    ],
    specs: [
      { label: "pH", value: "6.5 - 7.5 Neutral" },
      { label: "Density", value: "1.01 - 1.03 g/ml" },
      { label: "Biodegradability", value: "> 90%" },
      { label: "Appearance", value: "Translucent green liquid" },
    ],
    presentations: [
      { size: "1 Liter" },
      { size: "2 Liters" },
      { size: "1 Gallon" },
    ],
  },

  "detergente-lavavajillas-institucional": {
    name: "Dishwasher Machine Detergent Ready To Use",
    tagline: "Professional dishwasher detergent ready to use",
    description:
      "A highly concentrated synthetic detergent. Presented as a high-viscosity liquid. Developed to efficiently clean all types of surfaces such as pots, plates, glasses, kitchen utensils, plastic surfaces, glass, and similar. This product does not harm people or the environment.",
    benefits: [
      "Highly concentrated",
      "For all types of dishware",
      "Gentle on skin",
      "Biodegradable",
      "Suitable for industrial machines",
    ],
    specs: [
      { label: "pH", value: "6.5 - 7.5" },
      { label: "Density", value: "1.02 - 1.05 g/ml" },
      { label: "Biodegradability", value: "> 90%" },
      { label: "Appearance", value: "Viscous pink liquid" },
    ],
    presentations: [
      { size: "1 Liter" },
      { size: "2 Liters" },
      { size: "1 Gallon" },
    ],
  },

  "desengrasante-institucional": {
    name: "Institutional Degreaser Concentrate",
    tagline: "Concentrated degreasing power",
    description:
      "Contains a high concentration of surfactants, degreasers, moisturizers, and softeners. Has great power to eliminate all types of grease and also has properties as a dish soap, cleaner, and disinfectant. Applicable for use in kitchens, walls, ceilings, and surfaces with adhered grease. Biodegradable, non-toxic, non-caustic, non-flammable.",
    benefits: [
      "High concentration",
      "Eliminates all types of grease",
      "Multi-use: kitchen, walls, ceilings",
      "Non-toxic and non-caustic",
      "Biodegradable",
    ],
    specs: [
      { label: "pH", value: "7.0 - 8.0" },
      { label: "Density", value: "1.01 - 1.03 g/ml" },
      { label: "Biodegradability", value: "> 90%" },
      { label: "Appearance", value: "Yellow liquid" },
    ],
    presentations: [
      { size: "1 Liter" },
      { size: "1 Gallon" },
    ],
  },

  // ============================================
  // HOME LINE - KITS
  // ============================================
  "kit-lavavajilla": {
    name: "Dish Washing Kit",
    tagline: "Everything you need for your dishes",
    description:
      "The Dish Washing Kit includes the concentrated Neutral Detergent along with a special dispenser. Yields up to 50 full dishwashing loads. Economical, eco-friendly, and with the signature Nouvie cleaning power.",
    benefits: [
      "Complete ready-to-use kit",
      "High yield",
      "Includes dispenser",
      "Long-term savings",
      "Biodegradable",
    ],
    badge: "Complete kit",
  },

  "kit-limpia-vidrios": {
    name: "Glass Cleaning Kit",
    tagline: "Spotless glass with no effort",
    description:
      "The Glass Cleaning Kit includes the concentrate along with a high-quality spray bottle. Perfect for windows, mirrors, glass partitions, and any glass surface. Leaves a brilliant finish with no streaks or residue.",
    benefits: [
      "Complete kit with spray bottle",
      "Quick drying without streaks",
      "High yield",
      "Easy application",
      "Biodegradable",
    ],
    badge: "Complete kit",
  },

  "kit-desengrasante-multiusos": {
    name: "Multi-Purpose Degreaser Kit",
    tagline: "Complete degreasing power",
    description:
      "The Multi-Purpose Degreaser Kit includes the powerful concentrate along with a spray bottle. Removes grease from kitchens, ovens, range hoods, and more. Yields multiple applications with its highly concentrated formula.",
    benefits: [
      "Complete kit with spray bottle",
      "Industrial degreasing power",
      "High yield",
      "For the entire kitchen",
      "Biodegradable",
    ],
    badge: "Complete kit",
  },

  "kit-limpia-pisos": {
    name: "Floor Cleaning Kit",
    tagline: "Shiny floors throughout your home",
    description:
      "The Floor Cleaning Kit includes the special concentrate for delicate floors along with a dispenser. Ideal for marble, porcelain tile, ceramic, and wood. Cleans, protects, and leaves a natural shine without residue.",
    benefits: [
      "Complete kit with dispenser",
      "For delicate floors",
      "Leaves no residue",
      "High yield",
      "Biodegradable",
    ],
    badge: "Complete kit",
  },

  "kit-lustra-muebles": {
    name: "Furniture Polish Kit",
    tagline: "Complete care for your furniture",
    description:
      "The Furniture Polish Kit includes the Carnauba wax concentrate along with a microfiber cloth. Protects, hydrates, and adds shine to wooden furniture, leather, and metal surfaces.",
    benefits: [
      "Complete kit with cloth",
      "Carnauba wax",
      "Long-lasting protection",
      "For multiple surfaces",
      "High yield",
    ],
    badge: "Complete kit",
  },
};
