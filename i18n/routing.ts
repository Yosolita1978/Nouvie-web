import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
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
