import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { WhatsAppIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from '@/components/icons';

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
