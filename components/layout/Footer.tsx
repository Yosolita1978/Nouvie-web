import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { WhatsAppIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from '@/components/icons';
import { BUSINESS_ADDRESS_LINE, GOOGLE_MAPS_URL } from '@/lib/business-info';

const socialLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/573158326422', icon: WhatsAppIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/nouvie_colombia', icon: InstagramIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/@NouVieColombia', icon: YouTubeIcon },
  { name: 'Facebook', href: 'https://www.facebook.com/nouviecol', icon: FacebookIcon },
];

export async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/nouvie-logo.png"
              alt="Nouvie"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nouvie-turquoise transition-colors hover:text-nouvie-blue"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-7 w-7" />
              </a>
            ))}
          </div>
        </div>

        {/* Address + women-owned badge — both match the Google Maps listing,
            which is where the women-owned attribute is shown, so the badge
            links there too. */}
        <div className="mt-4 flex flex-col items-center gap-2 text-sm text-gray-600 sm:flex-row sm:justify-between">
          <p className="text-center sm:text-left">
            {BUSINESS_ADDRESS_LINE}
            {' · '}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-xs font-medium text-nouvie-turquoise underline underline-offset-2 transition-colors hover:text-nouvie-blue"
            >
              {t('viewOnMaps')}
            </a>
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-nouvie-turquoise/40 bg-nouvie-turquoise/10 px-3 py-1 text-xs font-semibold text-nouvie-navy transition-colors hover:bg-nouvie-turquoise/20"
          >
            <svg className="h-3.5 w-3.5 text-purple-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {t('womenOwned')}
          </a>
        </div>

        {/* Colophon */}
        <div className="mt-6 flex flex-col items-center gap-1 border-t border-gray-100 pt-5 text-center text-sm text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <p>{t('lastUpdated')}</p>
          <p>
            {t('credit')}{' '}
            <a
              href="https://www.comadrelab.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-nouvie-turquoise underline underline-offset-2 transition-colors hover:text-nouvie-blue"
            >
              ComadreLab.dev
            </a>
            {' · \u00A9 2026. '}
            {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
