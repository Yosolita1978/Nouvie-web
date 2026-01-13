'use client';

import Link from 'next/link';
import { CloseIcon } from '@/components/icons';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes Somos', href: '/nosotros' },
  { name: 'Productos', href: '/productos' },
  { name: 'Testimonios', href: '/testimonios' },
  { name: 'Filosofía', href: '/filosofia' },
  { name: 'Contacto', href: '/contacto' },
];

export function MobileNav({ open, onClose }: MobileNavProps) {
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
          <span className="text-lg font-semibold text-nouvie-navy">Menu</span>
          <button
            type="button"
            className="rounded-md p-2.5"
            onClick={onClose}
          >
            <span className="sr-only">Cerrar menu</span>
            <CloseIcon className="h-6 w-6 text-nouvie-navy" />
          </button>
        </div>

        <nav className="mt-6 flow-root">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-nouvie-navy hover:bg-nouvie-pale-blue/30"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
