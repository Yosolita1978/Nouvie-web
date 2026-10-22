import { getTranslations } from 'next-intl/server';
import { WhatsAppIcon } from '@/components/icons';

// Round WhatsApp button fixed to the bottom-right corner on every page.
// It hides itself on product pages, which have their own order buttons
// (see .whatsapp-float in globals.css).
export async function WhatsAppFloat() {
  const t = await getTranslations('footer');
  const href = `https://wa.me/573158326422?text=${encodeURIComponent(t('whatsappFloatMessage'))}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsappFloatLabel')}
      className="whatsapp-float fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
