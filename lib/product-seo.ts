// Hand-tuned title and description per product, per locale.
//
// This used to be a single Spanish `seoOverrides` map inside
// app/[locale]/productos/[slug]/page.tsx. Because generateMetadata never
// translated, every /en product page served the Spanish string byte-for-byte —
// 33 duplicate pairs, which is what Bing Webmaster Tools reports as "too many
// pages with identical titles / meta descriptions".
//
// Spanish is the source of truth, as everywhere else. English is a full
// counterpart: every slug present in ES is present in EN.

import type { ProductCategory } from "./product-data";

export interface ProductSeoOverride {
  /** Rendered <title>. The root layout appends " | Nouvie Colombia" (18 chars). */
  title: string;
  description: string;
}

const overridesEs: Record<string, ProductSeoOverride> = {
  "locion-suave-y-liso": {
    title: "Loción para Moldear con Bio Keratina",
    description:
      "Loción para moldear Liso y Sedoso con Bio Keratina: termoprotector sin enjuague que controla el frizz y protege del sol, el cloro y la sal.",
  },
  "mascarilla-suave-y-liso": {
    title: "Mascarilla Capilar con Bio Keratina",
    description:
      "Mascarilla capilar Liso y Sedoso con Bio Keratina, kiwi y açaí. Nutre en 5 minutos, sella las puntas y elimina el frizz. Sin sulfatos ni parabenos.",
  },
  "shampoo-suave-y-liso": {
    title: "Shampoo Sin Sal para Cabello Liso",
    description:
      "Shampoo sin sal Liso y Sedoso de Nouvie con Bio Keratina. Sin sulfatos, parabenos ni colorantes. Alisa, da brillo y reduce el frizz. Envíos a toda Colombia.",
  },
  "tratamiento-revitalizante": {
    title: "Kit Revitalizante Anticaída con Argán",
    description:
      "Kit anticaída de 2 pasos con aceite de argán, keratina hidrolizada y prebióticos: shampoo sin sal y loción para moldear. Frena la caída y fortalece la raíz.",
  },
  "tratamiento-suave-y-liso": {
    title: "Kit Capilar Fortalecedor con Bio Keratina",
    description:
      "Kit de 3 pasos para cabello con frizz y opaco: shampoo sin sal, mascarilla y loción con Bio Keratina, kiwi y açaí. Sin sulfatos ni parabenos. Envíos a Colombia.",
  },
  "tratamiento-reparacion-intensa": {
    title: "Kit Capilar Reparación Intensa con Karité",
    description:
      "Kit de 3 pasos para cabello maltratado, seco o teñido: shampoo sin sal, mascarilla y loción con manteca de karité. Sin sulfatos ni parabenos. Envíos a Colombia.",
  },
  "locion-revitalizante": {
    title: "Loción Moldeadora Anticaída con Argán",
    description:
      "Loción para moldear sin enjuague con aceite de argán, keratina hidrolizada y prebióticos. Moldea, nutre y protege del sol sin dejar el cabello grasoso.",
  },
  "shampoo-revitalizante": {
    title: "Shampoo Anticaída con Argán",
    description:
      "Shampoo revitalizante anticaída sin sulfatos, con aceite de argán, keratina hidrolizada y prebióticos. Fortalece el folículo y frena la caída del cabello.",
  },
  "shampoo-reparacion-intensa": {
    title: "Shampoo Cabello Maltratado con Karité",
    description:
      "Shampoo sin sal con manteca de karité para cabello seco, maltratado o teñido. Repara desde el lavado, sin sulfatos ni parabenos. Envíos a toda Colombia.",
  },
  "mascarilla-reparacion-intensa": {
    title: "Mascarilla para Cabello Maltratado",
    description:
      "Mascarilla capilar con manteca de karité para cabello quebradizo, teñido o dañado por el calor. Sella las puntas y devuelve flexibilidad en 5 minutos.",
  },
  "locion-reparacion-intensa": {
    title: "Loción Reparadora - Cabello Dañado",
    description:
      "Loción reparadora capilar Reparación Intensa de Nouvie. Tratamiento para cabello dañado con manteca de Karité que hidrata y sella. Pídelo por WhatsApp.",
  },
  "limpia-vidrios-concentrado": {
    title: "Limpia Vidrios y Alfombras Natural",
    description:
      "Limpia vidrios y alfombras natural sin tóxicos. Limpiador concentrado biodegradable para vidrios, espejos, tapicería y telas. Pídelo por WhatsApp.",
  },
  "desengrasante-bioptimo-500ml": {
    title: "Bioptimo - Desengrasante Multiusos 500 ml",
    description:
      "Bioptimo 500 ml, desengrasante multiusos listo para usar. Reemplaza 8 productos convencionales con poder limpiador ecológico. Pídelo por WhatsApp.",
  },
  "lustra-muebles-concentrado": {
    title: "Lustramuebles Natural para Madera",
    description:
      "Lustramuebles natural y biodegradable de Nouvie para madera oscura, muebles antiguos y mesas de comedor. Sin tóxicos, seguro para mascotas. Pídelo por WhatsApp.",
  },
  "limpia-pisos-concentrado": {
    title: "Limpiapisos Natural Superficies Delicadas",
    description:
      "Limpiapisos natural biodegradable para madera, porcelanato, baldosa, laminado y vinílico. Sin químicos tóxicos, seguro para mascotas y niños. Envíos a Colombia.",
  },
  "detergente-neutro": {
    title: "Detergente Líquido Hipoalergénico",
    description:
      "Detergente líquido hipoalergénico Nouvie, sin fragancia ni colorantes. Para piel sensible, dermatitis, bebés y personas alérgicas. Pídelo por WhatsApp.",
  },
  // --- HOGAR ---
  "desengrasante-multiusos-concentrado": {
    title: "Desengrasante Multiusos Concentrado",
    description:
      "Desengrasante multiusos concentrado de 250 ml: rinde 6 dosificadores de 500 ml. Disuelve la grasa de hornos y campanas, hongos y sarro. Biodegradable.",
  },
  "atomizador": {
    title: "Atomizador Dosificador Reutilizable",
    description:
      "Botella atomizadora de 375 ml reutilizable, con todas las medidas para preparar los concentrados de la Línea Hogar Nouvie. Obtenla gratis reciclando.",
  },
  // --- KITS DE INICIO / STARTER KITS ---
  "kit-lavavajilla": {
    title: "Kit de Inicio Lavavajilla con Botella",
    description:
      "Kit de inicio de lavavajilla: 50 ml de detergente neutro concentrado y botella dosificadora. Rinde un dosificador de 500 ml. Biodegradable y sin tóxicos.",
  },
  "kit-limpia-vidrios": {
    title: "Kit de Inicio Limpia Vidrios",
    description:
      "Kit de inicio de limpia vidrios: 30 ml de concentrado y botella dosificadora. Rinde 12 dosificadores de 500 ml. Biodegradable y libre de químicos tóxicos.",
  },
  "kit-desengrasante-multiusos": {
    title: "Kit de Inicio Desengrasante Multiusos",
    description:
      "Kit de inicio de desengrasante: 60 ml de concentrado y botella dosificadora. Rinde 2 dosificadores de 500 ml. Quita grasa, hongos, sarro y manchas.",
  },
  "kit-limpia-pisos": {
    title: "Kit de Inicio Limpia Pisos",
    description:
      "Kit de inicio de limpia pisos: 30 ml de concentrado y botella dosificadora. Rinde 12 dosificadores de 500 ml, para todo tipo de pisos. Biodegradable.",
  },
  "kit-lustra-muebles": {
    title: "Kit de Inicio Lustra Muebles",
    description:
      "Kit de inicio de lustra muebles: 60 ml de concentrado y botella dosificadora. Para madera, cuero, cuerina y fórmica. Biodegradable y sin tóxicos.",
  },
  // --- REPUESTOS / REFILLS ---
  "repuesto-lavavajilla": {
    title: "Repuesto Lavavajilla - Recarga tu Kit",
    description:
      "Repuesto de detergente neutro concentrado de 50 ml para recargar tu Kit Lavavajilla. Mismo poder limpiador, menos envases plásticos y máximo ahorro.",
  },
  "repuesto-limpia-vidrios": {
    title: "Repuesto Limpia Vidrios - Recarga",
    description:
      "Repuesto de limpia vidrios concentrado de 30 ml. Rinde 12 dosificadores de 500 ml y reutiliza tu atomizador: vidrios impecables con mínimo residuo.",
  },
  "repuesto-desengrasante-multiusos": {
    title: "Repuesto Desengrasante - Recarga tu Kit",
    description:
      "Repuesto de desengrasante multiusos concentrado de 60 ml. Rinde 2 dosificadores de 500 ml. Elimina la grasa difícil y reduce tus residuos plásticos.",
  },
  "repuesto-limpia-pisos": {
    title: "Repuesto Limpia Pisos - Recarga",
    description:
      "Repuesto de limpia pisos concentrado de 30 ml. Rinde 12 dosificadores de 500 ml. Pisos brillantes y protegidos, con máximo ahorro y menos plástico.",
  },
  "repuesto-lustra-muebles": {
    title: "Repuesto Lustra Muebles - Recarga",
    description:
      "Repuesto de lustra muebles concentrado de 50 ml para recargar tu kit. El mismo brillo y cuidado de siempre, reutilizando tu botella dosificadora.",
  },
  // --- INSTITUCIONAL ---
  "limpia-vidrios-institucional-concentrado": {
    title: "Limpia Vidrios y Acero Institucional",
    description:
      "Concentrado institucional para vidrios, cristales, acero inoxidable y azulejos. Deja brillo, protege de las huellas y elimina la electricidad estática.",
  },
  "limpiador-superficies-institucional": {
    title: "Limpia Superficies y Pantallas",
    description:
      "Limpiador institucional con siliconas emulsionadas para muebles, pantallas y equipos electrónicos. Da brillo y protege madera, plástico y cuero.",
  },
  "limpia-pisos-institucional": {
    title: "Limpia Pisos Institucional con Cera",
    description:
      "Limpia pisos institucional que limpia, abrillanta y encera en una sola aplicación. Con cera de carnauba, para superficies delicadas. Rinde por galón.",
  },
  "detergente-lavavajillas-institucional": {
    title: "Detergente para Máquina Lavavajillas",
    description:
      "Detergente en gel altamente concentrado para máquina lavavajillas industrial. Aroma herbal, biodegradable y de alto rendimiento por dilución.",
  },
  "desengrasante-institucional": {
    title: "Desengrasante Industrial por Galón",
    description:
      "Desengrasante multiusos institucional de alta concentración para hornos, cocinas y campanas. Disuelve todo tipo de grasas y aceites. Biodegradable.",
  },
};

const overridesEn: Record<string, ProductSeoOverride> = {
  "locion-suave-y-liso": {
    title: "Bio Keratin Leave-In Styling Lotion",
    description:
      "Smooth and Silky leave-in styling lotion with Bio Keratin: a no-rinse heat protectant that controls frizz and shields hair from sun, chlorine and salt.",
  },
  "mascarilla-suave-y-liso": {
    title: "Bio Keratin Hair Mask for Frizz",
    description:
      "Smooth and Silky hair mask with Bio Keratin, kiwi and acai. Nourishes in 5 minutes, seals split ends and removes frizz. No sulfates, no parabens.",
  },
  "shampoo-suave-y-liso": {
    title: "Salt-Free Shampoo for Smooth Hair",
    description:
      "Nouvie Smooth and Silky salt-free shampoo with Bio Keratin. No sulfates, parabens or dyes. Smooths, adds shine and cuts frizz. Delivery across Colombia.",
  },
  "tratamiento-revitalizante": {
    title: "Argan Oil Anti-Hair-Loss Kit",
    description:
      "Two-step anti-hair-loss kit with argan oil, hydrolysed keratin and prebiotics: salt-free shampoo plus styling lotion. Slows shedding and strengthens roots.",
  },
  "tratamiento-suave-y-liso": {
    title: "Bio Keratin Strengthening Hair Kit",
    description:
      "Three-step kit for frizzy, dull hair: salt-free shampoo, mask and lotion with Bio Keratin, kiwi and acai. No sulfates or parabens. Delivery across Colombia.",
  },
  "tratamiento-reparacion-intensa": {
    title: "Shea Butter Intensive Repair Hair Kit",
    description:
      "Three-step kit for damaged, dry or colour-treated hair: salt-free shampoo, mask and lotion with shea butter. No sulfates or parabens. Ships across Colombia.",
  },
  "locion-revitalizante": {
    title: "Argan Anti-Hair-Loss Styling Lotion",
    description:
      "Leave-in styling lotion with argan oil, hydrolysed keratin and prebiotics. Shapes, nourishes and protects from the sun without leaving hair greasy.",
  },
  "shampoo-revitalizante": {
    title: "Argan Oil Anti-Hair-Loss Shampoo",
    description:
      "Revitalising anti-hair-loss shampoo, sulfate free, with argan oil, hydrolysed keratin and prebiotics. Strengthens the follicle and slows hair loss.",
  },
  "shampoo-reparacion-intensa": {
    title: "Shea Butter Shampoo for Damaged Hair",
    description:
      "Salt-free shampoo with shea butter for dry, damaged or colour-treated hair. Repairs from the first wash, with no sulfates or parabens. Ships across Colombia.",
  },
  "mascarilla-reparacion-intensa": {
    title: "Hair Mask for Damaged Hair",
    description:
      "Hair mask with shea butter for brittle, colour-treated or heat-damaged hair. Seals split ends and restores flexibility in 5 minutes.",
  },
  "locion-reparacion-intensa": {
    title: "Repairing Lotion - Damaged Hair",
    description:
      "Nouvie Intensive Repair leave-in hair lotion. A treatment for damaged hair with shea butter that hydrates and seals. Order on WhatsApp.",
  },
  "limpia-vidrios-concentrado": {
    title: "Natural Glass and Carpet Cleaner",
    description:
      "Natural glass and carpet cleaner with no toxic chemicals. Biodegradable concentrate for windows, mirrors, upholstery and fabric. Order on WhatsApp.",
  },
  "desengrasante-bioptimo-500ml": {
    title: "Bioptimo - Multi-Purpose Degreaser 500 ml",
    description:
      "Bioptimo 500 ml, a ready-to-use multi-purpose degreaser. Replaces 8 conventional products with eco-friendly cleaning power. Order on WhatsApp.",
  },
  "lustra-muebles-concentrado": {
    title: "Natural Furniture Polish for Wood",
    description:
      "Nouvie natural, biodegradable furniture polish for dark wood, antique furniture and dining tables. Non-toxic and pet safe. Order on WhatsApp.",
  },
  "limpia-pisos-concentrado": {
    title: "Natural Floor Cleaner for Delicate Surfaces",
    description:
      "Natural biodegradable floor cleaner for wood, porcelain tile, laminate and vinyl. No toxic chemicals, safe around pets and children. Ships across Colombia.",
  },
  "detergente-neutro": {
    title: "Hypoallergenic Liquid Detergent",
    description:
      "Nouvie hypoallergenic liquid detergent, free of fragrance and dyes. For sensitive skin, dermatitis, babies and people with allergies. Order on WhatsApp.",
  },
  // --- HOGAR ---
  "desengrasante-multiusos-concentrado": {
    title: "Concentrated Multi-Purpose Degreaser",
    description:
      "Concentrated multi-purpose degreaser, 250 ml: makes 6 spray bottles of 500 ml. Dissolves oven and range-hood grease, mould and limescale. Biodegradable.",
  },
  "atomizador": {
    title: "Reusable Measuring Spray Bottle",
    description:
      "A reusable 375 ml spray bottle marked with every measure needed to mix the Nouvie Home Line concentrates. Get one free when you return bottles.",
  },
  // --- KITS DE INICIO / STARTER KITS ---
  "kit-lavavajilla": {
    title: "Dishwashing Starter Kit with Bottle",
    description:
      "Dishwashing starter kit: 50 ml of concentrated neutral detergent plus a measuring bottle. Makes one 500 ml bottle. Biodegradable and non-toxic.",
  },
  "kit-limpia-vidrios": {
    title: "Glass Cleaner Starter Kit",
    description:
      "Glass cleaner starter kit: 30 ml of concentrate plus a measuring bottle. Makes 12 bottles of 500 ml. Biodegradable and free of toxic chemicals.",
  },
  "kit-desengrasante-multiusos": {
    title: "Multi-Purpose Degreaser Starter Kit",
    description:
      "Degreaser starter kit: 60 ml of concentrate plus a measuring bottle. Makes 2 bottles of 500 ml. Removes grease, mould, limescale and stains.",
  },
  "kit-limpia-pisos": {
    title: "Floor Cleaner Starter Kit",
    description:
      "Floor cleaner starter kit: 30 ml of concentrate plus a measuring bottle. Makes 12 bottles of 500 ml, for every kind of floor. Biodegradable.",
  },
  "kit-lustra-muebles": {
    title: "Furniture Polish Starter Kit",
    description:
      "Furniture polish starter kit: 60 ml of concentrate plus a measuring bottle. For wood, leather, faux leather and laminate. Biodegradable and non-toxic.",
  },
  // --- REPUESTOS / REFILLS ---
  "repuesto-lavavajilla": {
    title: "Dishwashing Refill - Refill Your Kit",
    description:
      "A 50 ml refill of concentrated neutral detergent for your Dishwashing Kit. The same cleaning power, fewer plastic containers and a lower cost per use.",
  },
  "repuesto-limpia-vidrios": {
    title: "Glass Cleaner Refill",
    description:
      "A 30 ml refill of glass cleaner concentrate. Makes 12 bottles of 500 ml and reuses your spray bottle: spotless glass with minimal waste.",
  },
  "repuesto-desengrasante-multiusos": {
    title: "Degreaser Refill - Refill Your Kit",
    description:
      "A 60 ml refill of multi-purpose degreaser concentrate. Makes 2 bottles of 500 ml. Cuts through stubborn grease and cuts your plastic waste.",
  },
  "repuesto-limpia-pisos": {
    title: "Floor Cleaner Refill",
    description:
      "A 30 ml refill of floor cleaner concentrate. Makes 12 bottles of 500 ml. Bright, protected floors with a lower cost per use and less plastic.",
  },
  "repuesto-lustra-muebles": {
    title: "Furniture Polish Refill",
    description:
      "A 50 ml refill of furniture polish concentrate for your kit. The same shine and care as always, reusing the measuring bottle you already own.",
  },
  // --- INSTITUCIONAL ---
  "limpia-vidrios-institucional-concentrado": {
    title: "Institutional Glass and Steel Cleaner",
    description:
      "Institutional concentrate for glass, mirrors, stainless steel and tiles. Leaves a shine, resists fingerprints and removes static electricity.",
  },
  "limpiador-superficies-institucional": {
    title: "Surface and Screen Cleaner",
    description:
      "Institutional cleaner with emulsified silicones for furniture, screens and electronic equipment. Adds shine and protects wood, plastic and leather.",
  },
  "limpia-pisos-institucional": {
    title: "Institutional Floor Cleaner with Wax",
    description:
      "Institutional floor cleaner that cleans, polishes and waxes in one pass. With carnauba wax, for delicate surfaces. High yield by the gallon.",
  },
  "detergente-lavavajillas-institucional": {
    title: "Dishwasher Machine Detergent",
    description:
      "Highly concentrated gel detergent for industrial dishwashers. Pleasant herbal scent, biodegradable, and a high yield per litre once diluted.",
  },
  "desengrasante-institucional": {
    title: "Industrial Degreaser by the Gallon",
    description:
      "High-concentration institutional multi-purpose degreaser for ovens, kitchens and range hoods. Dissolves grease and oils of every kind. Biodegradable.",
  },
};

/** Keywords added to every product page, by category and locale. */
const categoryKeywords: Record<string, Record<ProductCategory, string[]>> = {
  es: {
    hogar: ["limpieza hogar ecológica", "producto biodegradable", "limpieza sin tóxicos"],
    capilar: ["tratamiento capilar natural", "sin sulfatos", "sin parabenos", "cabello saludable"],
    institucional: ["limpieza profesional", "aseo institucional", "biodegradable industrial"],
  },
  en: {
    hogar: ["eco-friendly home cleaning", "biodegradable product", "cleaning without toxins"],
    capilar: ["natural hair treatment", "sulfate free", "paraben free", "healthy hair"],
    institucional: ["professional cleaning", "institutional cleaning", "industrial biodegradable"],
  },
};

export function getProductSeoOverride(
  slug: string,
  locale: string
): ProductSeoOverride | undefined {
  return locale === "en" ? overridesEn[slug] : overridesEs[slug];
}

export function getCategoryKeywords(
  category: ProductCategory,
  locale: string
): string[] {
  return (categoryKeywords[locale] ?? categoryKeywords.es)[category] ?? [];
}
