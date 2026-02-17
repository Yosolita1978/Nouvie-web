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
