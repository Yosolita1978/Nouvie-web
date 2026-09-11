import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  // Sin deteccion por Accept-Language: /productos/x lleva siempre a
  // /es/productos/x, para todo el mundo. Es lo que permite que middleware.ts
  // redirija con 308 (permanente) en vez de 307: un destino que cambia segun
  // el navegador del visitante no se puede cachear como permanente.
  //
  // Google indexaba /productos/x y /es/productos/x por separado y las dos se
  // repartian el posicionamiento. Nouvie vende solo en Colombia y el idioma
  // por defecto ya es espanol; quien quiera ingles tiene el selector y las
  // URLs /en/... siguen funcionando si se enlazan directamente.
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/nosotros': {
      es: '/nosotros',
      en: '/about',
    },
    '/productos': {
      es: '/productos',
      en: '/products',
    },
    // The three product lines. These are static segments, so Next resolves them
    // before '/productos/[slug]' — declare them first here too, for the same
    // reason. No product slug is named hogar, capilar or institucional.
    '/productos/hogar': {
      es: '/productos/hogar',
      en: '/products/home',
    },
    '/productos/capilar': {
      es: '/productos/capilar',
      en: '/products/hair-care',
    },
    '/productos/institucional': {
      es: '/productos/institucional',
      en: '/products/institutional',
    },
    '/productos/[slug]': {
      es: '/productos/[slug]',
      en: '/products/[slug]',
    },
    '/testimonios': {
      es: '/testimonios',
      en: '/testimonials',
    },
    '/filosofia': {
      es: '/filosofia',
      en: '/philosophy',
    },
    '/promomix': '/promomix',
    '/bioptimo': '/bioptimo',
    '/catalogo': {
      es: '/catalogo',
      en: '/catalog',
    },
    '/contacto': {
      es: '/contacto',
      en: '/contact',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
