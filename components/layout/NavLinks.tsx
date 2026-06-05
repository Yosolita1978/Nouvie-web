'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function NavLinks() {
  const t = useTranslations('navigation');

  const navigation = [
    { name: t('about'), href: '/nosotros' as const },
    { name: t('products'), href: '/productos' as const },
    { name: t('testimonials'), href: '/testimonios' as const },
    { name: t('philosophy'), href: '/filosofia' as const },
  ];

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-lg bg-nouvie-navy px-4 py-2 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-nouvie-blue"
        >
          {item.name}
        </Link>
      ))}
      <Link
        href={{ pathname: '/', hash: 'distribuidores' }}
        className="rounded-lg bg-nouvie-navy px-4 py-2 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-nouvie-blue"
      >
        {t('distributor')}
      </Link>
      <Link
        href="/contacto"
        className="rounded-lg bg-nouvie-turquoise px-4 py-2 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-nouvie-light-blue"
      >
        {t('contact')}
      </Link>
    </>
  );
}
