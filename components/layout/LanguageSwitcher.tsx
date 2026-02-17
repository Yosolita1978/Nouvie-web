'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === 'es' ? 'en' : 'es';
  const label = locale === 'es' ? 'EN' : 'ES';

  function handleSwitch() {
    router.replace(pathname as "/", { locale: otherLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className="rounded-lg border-2 border-nouvie-navy px-3 py-1.5 text-sm font-bold tracking-wider text-nouvie-navy transition-colors hover:bg-nouvie-navy hover:text-white"
    >
      {label}
    </button>
  );
}
