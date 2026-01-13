import Link from 'next/link';
import Image from 'next/image';
import { WhatsAppIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from '@/components/icons';

const socialLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/573001234567', icon: WhatsAppIcon },
  { name: 'Instagram', href: 'https://instagram.com/nouvie', icon: InstagramIcon },
  { name: 'YouTube', href: 'https://youtube.com/@nouvie', icon: YouTubeIcon },
  { name: 'Facebook', href: 'https://facebook.com/nouvie', icon: FacebookIcon },
];

export function Footer() {
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
      </div>
    </footer>
  );
}
