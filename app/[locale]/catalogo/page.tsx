import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getProducts, getUsdRate } from "@/lib/products";
import { getTranslatedProducts } from "@/lib/get-translated-product";
import { PrintButton } from "@/components/catalog/PrintButton";
import type { Product } from "@/lib/products";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";

const es = esMessages.catalog;
const en = enMessages.catalog;

function fmt(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function fmtUsd(copPrice: number, rate: number): string {
  const usd = copPrice / rate;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(usd);
}

function getPrice(p: Product): number | null {
  if (p.bundlePrice) return p.bundlePrice;
  if (p.price && p.hasDbPrice) return p.price;
  return null;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("catalog");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    robots: { index: false, follow: false },
  };
}

// ============================================
// Product card component
// ============================================
function Card({
  p,
  en: enP,
  color,
  imgBoxClass,
  usdRate,
}: {
  p: Product;
  en: Product | undefined;
  color: "rose" | "amber" | "sky";
  imgBoxClass: string;
  usdRate: number | null;
}) {
  const price = getPrice(p);
  const borderColor = { rose: "border-rose-100", amber: "border-amber-100", sky: "border-sky-100" }[color];
  const badgeBg = { rose: "bg-rose-50", amber: "bg-amber-50", sky: "bg-sky-50" }[color];
  const badgeText = { rose: "text-rose-600", amber: "text-amber-600", sky: "text-sky-600" }[color];
  const priceText = { rose: "text-rose-700", amber: "text-amber-700", sky: "text-sky-700" }[color];
  const gradFrom = { rose: "from-rose-50", amber: "from-amber-50", sky: "from-sky-50" }[color];
  const gradTo = { rose: "to-orange-50", amber: "to-yellow-50", sky: "to-indigo-50" }[color];

  return (
    <div className={`catalog-product-card bg-white rounded-xl border ${borderColor} overflow-hidden`}>
      <div className={`${imgBoxClass} bg-gradient-to-br ${gradFrom} ${gradTo} flex items-center justify-center`}>
        <Image src={p.image} alt={p.name} width={160} height={160} className="object-contain max-h-full" />
      </div>
      <div className="catalog-card-body p-2.5">
        {p.badge && (
          <span className={`inline-block px-2 py-0.5 ${badgeBg} ${badgeText} text-[9px] font-bold uppercase tracking-wide rounded-full mb-1`}>
            {p.badge}
          </span>
        )}
        <h4 className="font-bold text-gray-900 text-[11px] leading-tight">{p.name}</h4>
        {enP && enP.name !== p.name && (
          <p className="text-gray-400 text-[10px] italic leading-tight">{enP.name}</p>
        )}
        <p className="text-gray-500 text-[10px] mt-0.5 line-clamp-2 leading-snug">{p.tagline}</p>
        {enP && enP.tagline !== p.tagline && (
          <p className="text-gray-400 text-[9px] italic line-clamp-1 leading-snug">{enP.tagline}</p>
        )}
        {price && (
          <div className="mt-1">
            <div className={`${priceText} font-bold text-sm`}>{fmt(price)}</div>
            {usdRate && <div className="text-gray-400 text-[10px]">{fmtUsd(price, usdRate)} USD</div>}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// Section banner
// ============================================
function SectionBanner({
  esTitle,
  enTitle,
  esSub,
  enSub,
  badges,
  gradient,
  badgeStyle,
  topBadge,
}: {
  esTitle: string;
  enTitle: string;
  esSub: string;
  enSub: string;
  badges: { e: string; n: string }[];
  gradient: string;
  badgeStyle: string;
  topBadge?: string;
}) {
  return (
    <div className={`catalog-section-banner ${gradient} px-6 py-10 text-center`}>
      {topBadge && (
        <span className={`inline-block px-3 py-1 ${badgeStyle} text-[10px] font-bold uppercase tracking-widest rounded-full mb-3`}>
          {topBadge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-0.5">{esTitle}</h2>
      <p className="text-lg text-gray-400 font-light mb-2">{enTitle}</p>
      <p className="text-sm text-gray-600 max-w-lg mx-auto">{esSub}</p>
      <p className="text-xs text-gray-400 italic max-w-lg mx-auto mb-4">{enSub}</p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {badges.map(({ e, n }) => (
          <span key={e} className={`px-3 py-1 ${badgeStyle} text-[10px] font-semibold rounded-full`}>
            {e === n ? e : `${e} / ${n}`}
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Main page
// ============================================
export default async function CatalogoPage() {
  const [rawProducts, usdRate] = await Promise.all([getProducts(), getUsdRate()]);
  const productsEs = getTranslatedProducts(rawProducts, "es");
  const productsEn = getTranslatedProducts(rawProducts, "en");

  const enMap = new Map<string, Product>();
  for (const p of productsEn) enMap.set(p.slug, p);

  const hogarConc = productsEs.filter(
    (p) => p.category === "hogar" && !p.bundlePrice && p.slug !== "atomizador"
  );
  const hogarKits = productsEs.filter(
    (p) => p.category === "hogar" && p.bundlePrice !== undefined
  );
  const treatments = productsEs.filter(
    (p) => p.category === "capilar" && p.bundlePrice !== undefined && !p.parentTreatmentSlug
  );
  const individuals = productsEs.filter(
    (p) => p.category === "capilar" && p.parentTreatmentSlug !== undefined
  );
  const instProducts = productsEs.filter((p) => p.category === "institucional");

  return (
    <div className="bg-white">
      {/* ==================== COVER ==================== */}
      <section className="catalog-cover relative min-h-screen flex flex-col items-center justify-center bg-nouvie-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] print:hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-2 border-white" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-2 border-white" />
        </div>
        <div className="absolute top-6 right-6 z-10 no-print">
          <PrintButton label="PDF" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="mx-auto mb-8 inline-block bg-white rounded-2xl px-8 py-4 shadow-lg shadow-black/20">
            <Image src="/nouvie-logo.png" alt="Nouvie" width={220} height={88} className="object-contain" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">{es.cover.title}</h1>
          <p className="text-2xl md:text-3xl font-light text-white/50 mb-1">{en.cover.title}</p>
          <p className="text-7xl md:text-9xl font-extralight text-white/20 mb-6">{es.cover.year}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              { e: es.cover.badge1, n: en.cover.badge1 },
              { e: es.cover.badge2, n: en.cover.badge2 },
              { e: es.cover.badge3, n: en.cover.badge3 },
            ].map(({ e, n }) => (
              <span key={e} className="px-5 py-2 border border-nouvie-turquoise/40 text-nouvie-turquoise text-sm font-medium rounded-full">
                {e === n ? e : `${e} / ${n}`}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6 mb-4">
            <Image src="/images/sellos/biodegradable.jpeg" alt="Biodegradable" width={56} height={56} className="rounded-full bg-white p-0.5" />
            <Image src="/images/sellos/libre-sulfatos.jpeg" alt="Libre de Sulfatos" width={56} height={56} className="rounded-full bg-white p-0.5" />
            <Image src="/images/sellos/no-toxico.jpeg" alt="No Tóxico" width={56} height={56} className="rounded-full bg-white p-0.5" />
            <Image src="/images/sellos/producto-sostenible.png" alt="Producto Sostenible" width={56} height={56} className="rounded-full bg-white p-0.5" />
          </div>
          <p className="font-serif italic text-nouvie-gold text-xl">{es.cover.tagline}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-nouvie-turquoise to-transparent" />
      </section>

      {/* ==================== USD DISCLAIMER ==================== */}
      {usdRate && (
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 text-center">
          <p className="text-gray-600 text-xs">
            {es.footer.usdDisclaimer} · 1 USD = {fmt(usdRate)}
          </p>
          <p className="text-gray-400 text-[10px] italic">
            {en.footer.usdDisclaimer}
          </p>
          <a
            href="https://suameca.banrep.gov.co/estadisticas-economicas/informacionSerie/1.1/tasa_cambio_peso_colombiano_dolar_comportamiento_mercado_dolar_dia_tiempo_real"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 text-[10px] hover:underline"
          >
            {es.footer.usdSource}
          </a>
        </div>
      )}

      {/* ==================== HOGAR ==================== */}
      <section className="catalog-section">
        <SectionBanner
          esTitle={es.hogar.title}
          enTitle={en.hogar.title}
          esSub={es.hogar.subtitle}
          enSub={en.hogar.subtitle}
          badges={[
            { e: es.hogar.badge1, n: en.hogar.badge1 },
            { e: es.hogar.badge2, n: en.hogar.badge2 },
            { e: es.hogar.badge3, n: en.hogar.badge3 },
          ]}
          gradient="bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50"
          badgeStyle="bg-white/80 text-rose-700 border border-rose-200"
        />

        {/* Concentrates */}
        <div className="catalog-section-content px-4 py-6 max-w-6xl mx-auto">
          <div className="catalog-grid-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {hogarConc.map((p) => (
              <Card key={p.slug} p={p} en={enMap.get(p.slug)} color="rose" imgBoxClass="catalog-img-box aspect-square p-3" usdRate={usdRate} />
            ))}
          </div>
        </div>

        {/* Kits */}
        {hogarKits.length > 0 && (
          <div className="catalog-section-content px-4 pb-6 max-w-6xl mx-auto">
            <h3 className="text-base font-bold text-gray-900 mb-0.5 text-center">Kits Listos para Usar</h3>
            <p className="text-xs text-gray-400 italic mb-3 text-center">Ready-to-Use Kits</p>
            <div className="catalog-grid-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {hogarKits.map((p) => (
                <Card key={p.slug} p={p} en={enMap.get(p.slug)} color="rose" imgBoxClass="catalog-img-box aspect-square p-3" usdRate={usdRate} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ==================== CAPILAR ==================== */}
      <section className="catalog-section">
        <SectionBanner
          esTitle={es.capilar.title}
          enTitle={en.capilar.title}
          esSub={es.capilar.subtitle}
          enSub={en.capilar.subtitle}
          badges={[
            { e: es.capilar.badge1, n: en.capilar.badge1 },
            { e: es.capilar.badge2, n: en.capilar.badge2 },
            { e: es.capilar.badge3, n: en.capilar.badge3 },
          ]}
          gradient="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"
          badgeStyle="bg-white/80 text-amber-700 border border-amber-200"
        />

        {/* Treatments */}
        <div className="catalog-section-content px-4 py-6 max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-0.5 text-center">{es.capilar.treatmentsTitle}</h3>
          <p className="text-sm text-gray-400 italic mb-5 text-center">{en.capilar.treatmentsTitle}</p>

          <div className="catalog-grid-3 grid grid-cols-1 md:grid-cols-3 gap-5">
            {treatments.map((t) => {
              const enT = enMap.get(t.slug);
              const price = getPrice(t);
              const steps = t.steps?.length ?? 0;
              return (
                <div key={t.slug} className="catalog-product-card catalog-treatment-card bg-white rounded-xl border border-amber-100 overflow-hidden">
                  <div className="catalog-img-box-lg aspect-[3/2] bg-gradient-to-br from-amber-50 to-yellow-50 p-4 flex items-center justify-center">
                    <Image src={t.image} alt={t.name} width={240} height={180} className="object-contain max-h-full" />
                  </div>
                  <div className="catalog-card-body p-4">
                    <span className="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-700 text-[9px] font-bold uppercase tracking-wide rounded-full mb-2">
                      {es.capilar.fullKit} · {steps} pasos/steps
                    </span>
                    <h4 className="font-bold text-gray-900 text-base leading-tight">{t.name}</h4>
                    {enT && enT.name !== t.name && (
                      <p className="text-gray-400 text-xs italic leading-tight">{enT.name}</p>
                    )}
                    <p className="text-gray-600 text-xs mt-1">{t.tagline}</p>
                    {enT && enT.tagline !== t.tagline && (
                      <p className="text-gray-400 text-[10px] italic">{enT.tagline}</p>
                    )}
                    {t.steps && (
                      <div className="mt-2 space-y-1">
                        {t.steps.map((s) => {
                          const enS = enT?.steps?.[s.step - 1];
                          return (
                            <div key={s.step} className="flex items-center gap-1.5">
                              <span className="shrink-0 w-5 h-5 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-bold text-[10px]">
                                {s.step}
                              </span>
                              <span className="text-[11px] font-medium text-gray-800">
                                {s.name}
                                {enS && enS.name !== s.name && (
                                  <span className="text-gray-400 italic font-normal"> / {enS.name}</span>
                                )}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {price && (
                      <div className="mt-3 pt-2 border-t border-amber-100">
                        <div>
                          <span className="text-amber-700 font-bold text-lg">{fmt(price)}</span>
                          <span className="text-gray-400 text-[10px] ml-1">/ kit</span>
                        </div>
                        {usdRate && <div className="text-gray-400 text-[11px]">{fmtUsd(price, usdRate)} USD</div>}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Individual capilar */}
        {individuals.length > 0 && (
          <div className="catalog-section-content catalog-page-break px-4 pb-6 max-w-6xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-0.5 text-center">{es.capilar.individualsTitle}</h3>
            <p className="text-xs text-gray-400 italic mb-3 text-center">{en.capilar.individualsTitle}</p>
            <div className="catalog-grid-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {individuals.map((p) => (
                <Card key={p.slug} p={p} en={enMap.get(p.slug)} color="amber" imgBoxClass="catalog-img-box-sm aspect-square p-3" usdRate={usdRate} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ==================== INSTITUCIONAL ==================== */}
      <section className="catalog-section">
        <SectionBanner
          esTitle={es.institucional.title}
          enTitle={en.institucional.title}
          esSub={es.institucional.subtitle}
          enSub={en.institucional.subtitle}
          badges={[]}
          gradient="bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50"
          badgeStyle="bg-sky-100 text-sky-700"
          topBadge={`${es.institucional.badge} / ${en.institucional.badge}`}
        />

        <div className="catalog-section-content px-4 py-6 max-w-6xl mx-auto">
          <div className="catalog-grid-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {instProducts.map((p) => {
              const enP = enMap.get(p.slug);
              return (
                <div key={p.slug} className="catalog-product-card bg-white rounded-xl border border-sky-100 overflow-hidden">
                  <div className="catalog-img-box aspect-[4/3] bg-gradient-to-br from-sky-50 to-indigo-50 p-4 flex items-center justify-center">
                    <Image src={p.image} alt={p.name} width={180} height={140} className="object-contain max-h-full" />
                  </div>
                  <div className="catalog-card-body p-3">
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">{p.name}</h4>
                    {enP && enP.name !== p.name && (
                      <p className="text-gray-400 text-[10px] italic leading-tight">{enP.name}</p>
                    )}
                    <p className="text-gray-500 text-[10px] mt-0.5 leading-snug">{p.tagline}</p>
                    {enP && enP.tagline !== p.tagline && (
                      <p className="text-gray-400 text-[9px] italic leading-snug">{enP.tagline}</p>
                    )}

                    {p.specs && p.specs.length > 0 && (
                      <div className="mt-2">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-sky-600 mb-1">
                          {es.institucional.specs} / {en.institucional.specs}
                        </p>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-0">
                          {p.specs.map((s) => (
                            <div key={s.label} className="text-[10px]">
                              <span className="text-gray-400">{s.label}:</span>{" "}
                              <span className="text-gray-700 font-medium">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {p.presentations && p.presentations.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-sky-100">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-sky-600 mb-1">
                          {es.institucional.presentations} / {en.institucional.presentations}
                        </p>
                        <div className="space-y-0.5">
                          {p.presentations.map((pr) => (
                            <div key={pr.size} className="flex items-center justify-between text-[11px]">
                              <span className="text-gray-700">{pr.size}</span>
                              <div className="text-right">
                                <span className="text-sky-700 font-bold">
                                  {pr.price ? fmt(pr.price) : es.product.consultPrice}
                                </span>
                                {pr.price && usdRate && (
                                  <div className="text-gray-400 text-[9px]">{fmtUsd(pr.price, usdRate)} USD</div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <section className="catalog-footer bg-nouvie-navy text-white px-6 py-10 text-center">
        <div className="mx-auto mb-3 inline-block bg-white rounded-xl px-5 py-2">
          <Image src="/nouvie-logo.png" alt="Nouvie" width={130} height={52} className="object-contain" />
        </div>
        <p className="font-serif italic text-nouvie-gold text-base mb-6">The Gift from Nature</p>
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <div>
            <p className="text-white/50 text-[10px] uppercase tracking-wider mb-0.5">
              {es.footer.whatsappLabel} / {en.footer.whatsappLabel}
            </p>
            <p className="font-semibold text-sm">{es.footer.whatsapp}</p>
          </div>
          <div>
            <p className="text-white/50 text-[10px] uppercase tracking-wider mb-0.5">Web</p>
            <p className="font-semibold text-sm">{es.footer.website}</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 max-w-md mx-auto">
          <p className="text-white/40 text-[10px]">{es.footer.priceDisclaimer}</p>
          <p className="text-white/30 text-[9px] italic">{en.footer.priceDisclaimer}</p>
          <p className="text-white/30 text-[10px] mt-2">{es.footer.copyright}</p>
        </div>
      </section>
    </div>
  );
}
