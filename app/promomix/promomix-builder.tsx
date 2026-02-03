"use client";

import { useState } from "react";
import { formatCOP } from "@/lib/format";
import {
  HOGAR_PRODUCTS,
  CAPILAR_PRODUCTS,
  ALL_PROMOMIX_PRODUCTS,
  PROMOMIX_MINIMUM,
  WHATSAPP_NUMBER,
  type PromoMixProduct,
} from "@/lib/promomix-config";

// ============================================
// Main Builder Component
// ============================================

export function PromoMixBuilder() {
  const [selection, setSelection] = useState<Record<string, number>>({});
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  function updateQuantity(productId: string, delta: number) {
    setSelection((prev) => {
      const current = prev[productId] ?? 0;
      const next = Math.max(0, current + delta);
      const updated = { ...prev };
      if (next === 0) {
        delete updated[productId];
      } else {
        updated[productId] = next;
      }
      return updated;
    });
  }

  function getQuantity(productId: string): number {
    return selection[productId] ?? 0;
  }

  // Computed values
  const totalAtPromoPrice = ALL_PROMOMIX_PRODUCTS.reduce(
    (sum, p) => sum + p.promoPrice * getQuantity(p.id),
    0
  );

  const totalAtRegular = ALL_PROMOMIX_PRODUCTS.reduce(
    (sum, p) => sum + p.basePrice * getQuantity(p.id),
    0
  );

  const savings = totalAtRegular - totalAtPromoPrice;
  const remaining = PROMOMIX_MINIMUM - totalAtPromoPrice;
  const isValid = totalAtPromoPrice >= PROMOMIX_MINIMUM;
  const overage =
    totalAtPromoPrice > PROMOMIX_MINIMUM
      ? totalAtPromoPrice - PROMOMIX_MINIMUM
      : 0;
  const hasSelection = Object.keys(selection).length > 0;
  const progressPercent = Math.min(
    100,
    (totalAtPromoPrice / PROMOMIX_MINIMUM) * 100
  );

  const selectedProducts = ALL_PROMOMIX_PRODUCTS.filter(
    (p) => getQuantity(p.id) > 0
  );

  const totalItems = Object.values(selection).reduce((a, b) => a + b, 0);

  function buildWhatsAppUrl(): string {
    const lines: string[] = [
      "¡Hola! Quiero solicitar un PromoMix 2026.",
      "",
      "*Mi selección:*",
    ];

    for (const product of selectedProducts) {
      const qty = getQuantity(product.id);
      const subtotal = qty * product.promoPrice;
      lines.push(`- ${qty}x ${product.name} (${formatCOP(subtotal)})`);
    }

    lines.push("");
    lines.push("*Resumen:*");
    lines.push(`Total productos: ${formatCOP(totalAtPromoPrice)}`);
    lines.push(`Ahorro vs precio regular: ${formatCOP(savings)}`);

    if (customerName.trim() || customerPhone.trim()) {
      lines.push("");
      lines.push("*Mis datos:*");
      if (customerName.trim()) lines.push(`Nombre: ${customerName.trim()}`);
      if (customerPhone.trim())
        lines.push(`Teléfono: ${customerPhone.trim()}`);
    }

    lines.push("");
    lines.push("Espero su confirmación. ¡Gracias!");

    const message = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* ============================================ */}
      {/* HERO — Editorial luxury feel */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-nouvie-navy">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nouvie-turquoise/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-nouvie-gold/10 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
          {/* Top label */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-nouvie-turquoise text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-nouvie-turquoise" />
              Promoción exclusiva 2026
            </span>
          </div>

          {/* Main headline — asymmetric, editorial */}
          <div className="mt-6 md:mt-8 animate-fade-up animation-delay-100">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight">
              Promo
              <span className="text-nouvie-gold italic">Mix</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="mt-4 md:mt-6 max-w-lg animate-fade-up animation-delay-200">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Arma tu combinación ideal de productos Nouvie.
              <span className="text-white font-medium"> Desde $300.000</span> con
              descuentos exclusivos.
            </p>
          </div>

          {/* Value props — horizontal on desktop */}
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-8 animate-fade-up animation-delay-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-nouvie-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Precio especial</p>
                <p className="text-white/40 text-xs">Línea Hogar</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-nouvie-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Precio especial</p>
                <p className="text-white/40 text-xs">Línea Capilar</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h1.5L6 7.5h12l1.125 6.75h1.5" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Envío no incluido</p>
                <p className="text-white/40 text-xs">Coordinamos la entrega</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider wave */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ============================================ */}
      {/* BUDGET TRACKER — Sticky, dark, premium */}
      {/* ============================================ */}
      <div className="sticky top-20 z-30 bg-nouvie-navy/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Progress ring on mobile, bar on desktop */}
            <div className="flex-1">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${
                    isValid
                      ? overage > 0
                        ? "bg-linear-to-r from-amber-400 to-amber-500"
                        : "bg-linear-to-r from-emerald-400 to-emerald-500"
                      : "bg-linear-to-r from-nouvie-turquoise to-nouvie-light-blue"
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Amount display */}
            <div className="flex items-center gap-3 shrink-0">
              {hasSelection && savings > 0 && (
                <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 text-xs font-medium">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Ahorras {formatCOP(savings)}
                </span>
              )}

              <div className="text-right">
                <span className="text-white font-bold text-sm tabular-nums">
                  {formatCOP(totalAtPromoPrice)}
                </span>
                <span className="text-white/30 text-xs font-normal ml-1">
                  / {formatCOP(PROMOMIX_MINIMUM)}
                </span>
              </div>

              {/* Status pill */}
              <div className="shrink-0">
                {!hasSelection && (
                  <span className="text-white/30 text-xs hidden sm:inline">Agrega productos</span>
                )}
                {hasSelection && !isValid && (
                  <span className="inline-flex items-center bg-white/10 text-white/80 text-xs font-medium px-2.5 py-1 rounded-full">
                    Faltan {formatCOP(remaining)}
                  </span>
                )}
                {isValid && overage === 0 && (
                  <span className="inline-flex items-center bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                    Completo
                  </span>
                )}
                {isValid && overage > 0 && (
                  <span className="inline-flex items-center bg-amber-500/20 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                    +{formatCOP(overage)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* PRODUCT SECTIONS */}
      {/* ============================================ */}
      <div className="max-w-6xl mx-auto px-4">
        {/* LÍNEA HOGAR */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-nouvie-gold text-xs font-semibold tracking-[0.15em] uppercase">
                Línea Hogar
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-nouvie-navy mt-1">
                Limpieza <span className="italic">Ecológica</span>
              </h2>
            </div>
            <span className="hidden sm:inline-flex items-center bg-rose-50 text-rose-600 text-sm font-bold px-4 py-2 rounded-full border border-rose-200">
              Precio especial
            </span>
          </div>

          {/* Mobile discount badge */}
          <div className="sm:hidden mb-6">
            <span className="inline-flex items-center bg-rose-50 text-rose-600 text-sm font-bold px-4 py-2 rounded-full border border-rose-200">
              Precio especial en toda la línea
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {HOGAR_PRODUCTS.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getQuantity(product.id)}
                onUpdateQuantity={(delta) => updateQuantity(product.id, delta)}
                accentColor="rose"
                index={i}
              />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex-1 h-px bg-nouvie-navy/10" />
          <span className="text-nouvie-navy/20 text-xs tracking-widest uppercase">Mix</span>
          <div className="flex-1 h-px bg-nouvie-navy/10" />
        </div>

        {/* LÍNEA CAPILAR */}
        <section className="pt-8 pb-12 md:pt-10 md:pb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-nouvie-turquoise text-xs font-semibold tracking-[0.15em] uppercase">
                Línea Capilar
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-nouvie-navy mt-1">
                Cuidado <span className="italic">Natural</span>
              </h2>
            </div>
            <span className="hidden sm:inline-flex items-center bg-amber-50 text-amber-700 text-sm font-bold px-4 py-2 rounded-full border border-amber-200">
              Precio especial
            </span>
          </div>

          {/* Mobile discount badge */}
          <div className="sm:hidden mb-6">
            <span className="inline-flex items-center bg-amber-50 text-amber-700 text-sm font-bold px-4 py-2 rounded-full border border-amber-200">
              Precio especial en toda la línea
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {CAPILAR_PRODUCTS.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getQuantity(product.id)}
                onUpdateQuantity={(delta) => updateQuantity(product.id, delta)}
                accentColor="amber"
                index={i}
              />
            ))}
          </div>
        </section>
      </div>

      {/* ============================================ */}
      {/* SUMMARY + CTA — Dark, conversion-focused */}
      {/* ============================================ */}
      <section className="bg-nouvie-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-nouvie-turquoise/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-nouvie-gold/5 rounded-full blur-[60px]" />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 py-12 md:py-16">
          {/* Section header */}
          <div className="text-center mb-8">
            <span className="text-nouvie-gold text-xs font-semibold tracking-[0.15em] uppercase">
              Tu PromoMix
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">
              {hasSelection ? "Resumen" : "Tu mix está vacío"}
            </h2>
          </div>

          {/* Selected products */}
          {hasSelection && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 md:p-6 mb-8">
              <div className="space-y-3">
                {selectedProducts.map((product) => {
                  const qty = getQuantity(product.id);
                  return (
                    <div
                      key={product.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white/70">
                          {qty}
                        </span>
                        <span className="text-white/80 text-sm">
                          {product.name}
                        </span>
                      </div>
                      <span className="text-white font-semibold text-sm tabular-nums">
                        {formatCOP(qty * product.promoPrice)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm">
                    {totalItems} {totalItems === 1 ? "producto" : "productos"}
                  </span>
                  <span className="text-white text-xl font-bold tabular-nums">
                    {formatCOP(totalAtPromoPrice)}
                  </span>
                </div>
                {savings > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400/70 text-sm">
                      Tu ahorro
                    </span>
                    <span className="text-emerald-400 font-semibold text-sm tabular-nums">
                      -{formatCOP(savings)}
                    </span>
                  </div>
                )}
                {overage > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400/70 text-sm">
                      Excedente
                    </span>
                    <span className="text-amber-400 font-semibold text-sm tabular-nums">
                      +{formatCOP(overage)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Empty state */}
          {!hasSelection && (
            <div className="text-center py-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-white/30 text-sm">
                Selecciona productos arriba para armar tu mix
              </p>
            </div>
          )}

          {/* Customer info */}
          <div className="mb-8">
            <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-3">
              Tus datos (opcional)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                id="customer-name"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Nombre"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:ring-1 focus:ring-nouvie-turquoise/50 focus:border-nouvie-turquoise/50 transition-colors"
              />
              <input
                id="customer-phone"
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Teléfono"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:ring-1 focus:ring-nouvie-turquoise/50 focus:border-nouvie-turquoise/50 transition-colors"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            {isValid ? (
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-emerald-500 text-white font-bold px-10 py-4.5 rounded-2xl text-base hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] min-h-[56px]"
              >
                <svg className="h-5 w-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar PromoMix por WhatsApp
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white/5 text-white/30 font-semibold px-10 py-4.5 rounded-2xl text-base cursor-not-allowed border border-white/5 min-h-[56px]"
              >
                {hasSelection
                  ? `Faltan ${formatCOP(remaining)} para completar`
                  : "Selecciona productos para continuar"}
              </button>
            )}

            <p className="text-white/20 text-xs mt-4">
              Envío no incluido. Te contactaremos para coordinar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================
// Product Card — Minimal, tactile
// ============================================

interface ProductCardProps {
  product: PromoMixProduct;
  quantity: number;
  onUpdateQuantity: (delta: number) => void;
  accentColor: "rose" | "amber";
  index: number;
}

const cardStyles = {
  rose: {
    active: "border-rose-200 bg-white shadow-lg shadow-rose-500/5",
    inactive: "border-transparent bg-white shadow-sm hover:shadow-md hover:border-rose-100",
    discount: "text-rose-500",
    price: "text-nouvie-navy",
    buttonActive: "bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700",
    buttonInactive: "bg-rose-50 text-rose-300",
    countBg: "bg-rose-50 text-rose-600",
    subtotal: "text-rose-500",
    tag: "bg-rose-50 text-rose-500 border-rose-100",
  },
  amber: {
    active: "border-amber-200 bg-white shadow-lg shadow-amber-500/5",
    inactive: "border-transparent bg-white shadow-sm hover:shadow-md hover:border-amber-100",
    discount: "text-amber-500",
    price: "text-nouvie-navy",
    buttonActive: "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700",
    buttonInactive: "bg-amber-50 text-amber-300",
    countBg: "bg-amber-50 text-amber-600",
    subtotal: "text-amber-600",
    tag: "bg-amber-50 text-amber-600 border-amber-100",
  },
};

function ProductCard({
  product,
  quantity,
  onUpdateQuantity,
  accentColor,
}: ProductCardProps) {
  const s = cardStyles[accentColor];
  const isActive = quantity > 0;
  const savings = product.basePrice - product.promoPrice;

  return (
    <div
      className={`rounded-2xl border p-4 md:p-5 transition-all duration-300 ${
        isActive ? s.active : s.inactive
      }`}
    >
      {/* Top row: name + size */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-semibold text-nouvie-navy text-[15px] leading-snug">
          {product.name}
        </h3>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${s.tag}`}>
          {product.size}
        </span>
      </div>

      {/* Savings label */}
      <p className={`text-xs font-medium mb-3 ${s.discount}`}>
        Ahorras {formatCOP(savings)}
      </p>

      {/* Prices */}
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-xs text-gray-300 line-through tabular-nums">
          {formatCOP(product.basePrice)}
        </span>
        <span className={`text-lg font-bold tabular-nums ${s.price}`}>
          {formatCOP(product.promoPrice)}
        </span>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => onUpdateQuantity(-1)}
            disabled={quantity === 0}
            className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg font-medium transition-all duration-200 ${
              quantity === 0 ? s.buttonInactive + " cursor-not-allowed" : s.buttonActive
            }`}
            aria-label={`Reducir cantidad de ${product.name}`}
          >
            −
          </button>
          <span className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold transition-colors ${
            isActive ? s.countBg : "text-gray-300"
          }`}>
            {quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(1)}
            className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg font-medium transition-all duration-200 ${s.buttonActive}`}
            aria-label={`Aumentar cantidad de ${product.name}`}
          >
            +
          </button>
        </div>

        {isActive && (
          <span className={`text-sm font-bold tabular-nums ${s.subtotal}`}>
            {formatCOP(quantity * product.promoPrice)}
          </span>
        )}
      </div>
    </div>
  );
}
