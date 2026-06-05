'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CloseIcon } from '@/components/icons';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const t = useTranslations('navigation');
  const tHeader = useTranslations('header');

  const navigation = [
    { name: t('home'), href: '/' as const },
    { name: t('about'), href: '/nosotros' as const },
    { name: t('products'), href: '/productos' as const },
    { name: t('testimonials'), href: '/testimonios' as const },
    { name: t('philosophy'), href: '/filosofia' as const },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/25"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white px-6 py-6 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-nouvie-navy">{tHeader('menu')}</span>
          <button
            type="button"
            className="rounded-md p-2.5"
            onClick={onClose}
          >
            <span className="sr-only">{tHeader('closeMenu')}</span>
            <CloseIcon className="h-6 w-6 text-nouvie-navy" />
          </button>
        </div>

        <nav className="mt-6 flow-root">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-nouvie-navy hover:bg-nouvie-pale-blue/30"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={{ pathname: '/', hash: 'distribuidores' }}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-nouvie-navy hover:bg-nouvie-pale-blue/30"
              onClick={onClose}
            >
              {t('distributor')}
            </Link>
            <Link
              href="/contacto"
              className="block rounded-lg px-3 py-3 text-base font-semibold text-white bg-nouvie-turquoise hover:bg-nouvie-light-blue mt-4"
              onClick={onClose}
            >
              {t('contact')}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
