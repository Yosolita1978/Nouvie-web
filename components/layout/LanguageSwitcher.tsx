'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const otherLocale = locale === 'es' ? 'en' : 'es';
  const label = locale === 'es' ? 'EN' : 'ES';

  function handleSwitch() {
    // For dynamic routes (e.g. /productos/[slug]), pass params along with pathname
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const href = Object.keys(params).length > 0
      ? { pathname: pathname as any, params }
      : pathname as any;
    router.replace(href, { locale: otherLocale });
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
