# Technical Decisions Log

## 2026-01-29 — PromoMix: Hardcoded product data instead of database queries

**Context:** PromoMix is a promotional campaign page with fixed products and discounts.

**Decision:** Store all product data in `lib/promomix-config.ts` as static arrays instead of querying the database.

**Rationale:**
- Promo products and prices are fixed for the campaign
- No need for admin editing — changes go through code deploys
- Eliminates API route and database query overhead
- Page loads faster as a purely client-side experience

**Trade-off:** If products or prices change, a code change and deploy is required.

---

## 2026-01-29 — PromoMix: WhatsApp as order channel

**Context:** Needed a way for customers to submit their PromoMix selections.

**Decision:** Generate a pre-filled WhatsApp message with the full order details instead of building a checkout/order system.

**Rationale:**
- Nouvie already uses WhatsApp for customer communication
- No need for order database tables, payment processing, or order status tracking
- Customers get immediate human interaction
- Simplest path to a working order flow

**Trade-off:** No automated order tracking or analytics on conversion rates.

---

## 2026-01-29 — PromoMix: Client-side only (no server components)

**Context:** The builder needs real-time interactivity (quantity controls, live totals).

**Decision:** Use `"use client"` with React `useState` hooks. No server actions or API routes.

**Rationale:**
- All data is static (hardcoded config)
- All calculations are simple arithmetic
- No data to fetch or persist server-side
- Keeps the implementation minimal

**Trade-off:** No server-side rendering of dynamic content, but the page metadata is still server-rendered via `page.tsx`.

---

## 2026-02-17 — Homepage tagline: "biodegradables" instead of "ecológicos"

**Context:** The main homepage heading said "Productos ecológicos para tu hogar y bienestar."

**Decision:** Changed to "Fórmulas limpias y biodegradables para tu hogar y bienestar."

**Rationale:**
- Products are 100% biodegradable but not fully ecological
- Previous wording overstated the environmental claim
- New tagline is accurate and highlights two real product attributes (clean formulas + biodegradable)

**Trade-off:** None — this is a correction for honesty. [SHARED]

---

## 2026-02-17 — Bilingual catalog: simultaneous display instead of locale switching

**Context:** The catalog needs to work in both Spanish and English for international trade events (Macrorueda).

**Decision:** Show both languages simultaneously on the same page (Spanish primary, English in italic/gray below) instead of using the locale switcher to show one language at a time.

**Rationale:**
- A single PDF can be shared with both Spanish and English-speaking contacts
- No need to generate/maintain two separate PDFs
- Matches how bilingual print catalogs typically look
- Both audiences can read it without switching

**Trade-off:** Page is denser with two languages. Acceptable for a catalog format.

---

## 2026-02-17 — Catalog: not in navigation, direct URL only

**Context:** The catalog page is a specialized print-oriented view, not a browsing page.

**Decision:** The catalog is accessible only via direct URL (`/catalogo` or `/en/catalogo`). It is not added to the site navigation.

**Rationale:**
- Target audience receives the URL directly (email, WhatsApp)
- Avoids confusing regular website visitors with a print-optimized layout
- Keeps the main navigation clean

**Trade-off:** Users can't discover the catalog by browsing the site.

---

## 2026-02-17 — Catalog print: Chrome only, break-before: page

**Context:** Each product section (Hogar, Capilar, Institucional) should start on a new page when printed to PDF.

**Decision:** Use CSS `break-before: page` on `.catalog-section` elements. Tested and verified in Chrome. Safari has rendering issues with print page breaks.

**Rationale:**
- Chrome's print-to-PDF is the most reliable browser for CSS page breaks
- `break-before: page` is the standard CSS property for this
- Added `.catalog-page-break` utility class for sub-sections needing their own page

**Trade-off:** Print/PDF output is Chrome-dependent. Safari users may get different results.

---

## 2026-02-17 — Product detail page: force-dynamic instead of SSG

**Context:** All product detail pages (`/[locale]/productos/[slug]`) returned 500 errors in production with `DYNAMIC_SERVER_USAGE`. The page had `generateStaticParams()` (SSG) but also used `getLocale()`, `getTranslations()`, and a Prisma database call — all dynamic server functions incompatible with static rendering in Next.js 16.

**Decision:** Replaced `generateStaticParams()` with `export const dynamic = 'force-dynamic'` so the page is always server-rendered on demand.

**Rationale:**
- The page fetches live prices from the database (needs to be fresh)
- `getLocale()` from next-intl reads from the request (inherently dynamic)
- The products listing page (`/productos`) already works this way without issues
- Static generation of product pages provided no real benefit since prices change

**Trade-off:** No static caching — every visit hits the server. Acceptable because database queries are fast and prices need to be current.

---

## 2026-02-17 — Institucional listing price derived from presentation prices

**Context:** Institucional products have multiple presentations (sizes) with individual prices in the DB (e.g., 1 Litro, 1 Galón). The product detail page showed these correctly, but the listing pages (`/productos`, `/catalogo`) showed "Solicitar cotización" because the general `product.price` was undefined — the slug-based matching failed due to size suffixes in DB names.

**Decision:** After populating presentation prices from the DB, derive the general display price from the **lowest presentation price**. Set `hasDbPrice: true` so listing pages show "Desde $XX,XXX".

**Rationale:**
- Presentation prices already come from the DB and are correct
- The lowest price is the most useful "starting from" value for the listing
- Avoids needing to fix the slug-based matching which is fragile for names with sizes
- Single change in `lib/products.ts` fixes both `/productos` and `/catalogo` pages

**Trade-off:** The listing price is always the cheapest presentation, not a "base" price. This is standard e-commerce practice ("Desde / From").
