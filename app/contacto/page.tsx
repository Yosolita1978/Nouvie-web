import type { Metadata } from "next";
import { WhatsAppIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto - Escríbenos por WhatsApp",
  description: "Contáctanos por WhatsApp para pedidos, asesoría o preguntas sobre productos Nouvie. Síguenos en Instagram, YouTube y Facebook. Atención personalizada en Colombia.",
  keywords: [
    "contacto Nouvie Colombia",
    "WhatsApp Nouvie",
    "comprar productos ecológicos Colombia",
    "asesoría productos de limpieza",
    "Nouvie redes sociales",
  ],
  alternates: {
    canonical: "https://www.nouvie.co/contacto",
  },
  openGraph: {
    title: "Contacto | Nouvie Colombia",
    description: "Escríbenos por WhatsApp para pedidos y asesoría. Atención personalizada.",
    url: "https://www.nouvie.co/contacto",
  },
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nouvieofficial",
    icon: InstagramIcon,
    label: "@nouvieofficial",
    color: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@NouVieColombia",
    icon: YouTubeIcon,
    label: "@NouVieColombia",
    color: "hover:bg-red-50 hover:text-red-600 hover:border-red-200"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nouviecol",
    icon: FacebookIcon,
    label: "/nouviecol",
    color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
  },
];

export default function ContactoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-nouvie-pale-blue/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nouvie-navy mb-6 animate-fade-up">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-2xl px-4 lg:px-8 text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
              <WhatsAppIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-nouvie-navy mb-4">
              WhatsApp
            </h2>
            <p className="text-gray-600 mb-8">
              La forma más rápida de comunicarte con nosotros
            </p>
            <a
              href="https://wa.me/573158326422"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 lg:py-20 bg-nouvie-navy">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 animate-fade-up">
            Síguenos en redes sociales
          </h2>
          <p className="text-white/70 text-center mb-12 animate-fade-up animation-delay-100">
            Mantente al día con nuestros productos y consejos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up animation-delay-200">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 transition-all ${social.color}`}
              >
                <social.icon className="w-8 h-8 text-white" />
                <div>
                  <p className="font-semibold text-white">{social.name}</p>
                  <p className="text-sm text-white/70">{social.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
