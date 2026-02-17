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
    '/contacto': {
      es: '/contacto',
      en: '/contact',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
