import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://nouvie-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nouvie - Productos de Limpieza Ecológicos y Tratamientos Capilares | Colombia",
    template: "%s | Nouvie Colombia",
  },
  description: "Productos de limpieza biodegradables y tratamientos capilares naturales. 100% libres de químicos tóxicos, sulfatos y parabenos. Cuidamos tu salud y el planeta. Envíos a toda Colombia.",
  keywords: [
    "productos ecológicos Colombia",
    "limpieza biodegradable",
    "tratamiento capilar natural",
    "Nouvie Colombia",
    "productos sin químicos tóxicos",
    "limpieza hogar ecológica",
    "shampoo sin sulfatos",
    "productos cruelty free Colombia",
    "aseo institucional biodegradable",
    "productos de limpieza seguros",
  ],
  authors: [{ name: "Nouvie SAS", url: siteUrl }],
  creator: "Nouvie SAS",
  publisher: "Nouvie SAS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Nouvie Colombia",
    title: "Nouvie - Productos de Limpieza Ecológicos y Tratamientos Capilares",
    description: "Productos biodegradables, libres de químicos tóxicos. Línea hogar, institucional y capilar. 100% seguros para tu familia y el planeta.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nouvie - The Gift from Nature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nouvie - Productos Ecológicos Colombia",
    description: "Limpieza biodegradable y tratamientos capilares naturales. Sin químicos tóxicos.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1B2B4B" },
    { media: "(prefers-color-scheme: dark)", color: "#1B2B4B" },
  ],
};

// JSON-LD Structured Data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nouvie SAS",
  alternateName: "Nouvie Colombia",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-nouvie.png`,
  description: "Empresa colombiana de productos de limpieza ecológicos y tratamientos capilares naturales. 100% biodegradables y libres de químicos tóxicos.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
    addressLocality: "Colombia",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-315-832-6422",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.instagram.com/nouvieofficial",
    "https://www.youtube.com/@NouVieColombia",
    "https://www.facebook.com/nouviecol",
  ],
};

// JSON-LD for Local Business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nouvie Colombia",
  image: `${siteUrl}/images/logo-nouvie.png`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+57-315-832-6422",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
