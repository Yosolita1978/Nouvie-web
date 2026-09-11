'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

/** Exactly what router.replace() accepts: the typed route union from i18n/routing.ts. */
type Href = Parameters<ReturnType<typeof useRouter>['replace']>[0];

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const otherLocale = locale === 'es' ? 'en' : 'es';
  const label = locale === 'es' ? 'EN' : 'ES';

  function handleSwitch() {
    // For dynamic routes (e.g. /productos/[slug]), the pathname alone is not
    // enough — router.replace also needs the params that fill its segments.
    //
    // usePathname() returns the current route as a plain string and useParams()
    // returns Record<string, string | string[]>, while replace() takes the
    // typed Href union from i18n/routing.ts. TypeScript cannot see that the
    // value we just read is one of those routes, so one cast is unavoidable
    // here. It is narrowed to the real Href type rather than `any`, so the
    // call itself stays type-checked.
    const href = (
      Object.keys(params).length > 0 ? { pathname, params } : pathname
    ) as Href;

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
