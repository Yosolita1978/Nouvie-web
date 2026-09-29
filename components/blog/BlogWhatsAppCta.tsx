import { WhatsAppIcon } from "@/components/icons";

const WHATSAPP_URL = `https://wa.me/573158326422?text=${encodeURIComponent(
  "Hola, leí el blog de Nouvie y tengo una pregunta"
)}`;

/** Navy box at the end of the blog pages: "¿Dudas sobre tu cabello o tu hogar?" */
export function BlogWhatsAppCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-nouvie-navy px-6 py-10 md:px-12 md:py-14">
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-nouvie-blue/60"
        />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <h2 className="blog-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] text-white">
            ¿Dudas sobre tu{" "}
            <em className="blog-accent text-[1.12em] text-nouvie-turquoise">cabello</em> o tu
            hogar?
          </h2>
          <div>
            <p className="leading-relaxed text-white/85">
              Escríbenos por WhatsApp y te recomendamos el producto indicado. También te avisamos
              cuando publiquemos un artículo nuevo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-nouvie-turquoise px-6 py-3 text-sm font-semibold text-nouvie-navy transition-colors hover:bg-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
