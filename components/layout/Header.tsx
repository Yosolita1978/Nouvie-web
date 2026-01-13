'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon } from '@/components/icons';
import { NavLinks } from './NavLinks';
import { MobileNav } from './MobileNav';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/nouvie-logo.png"
            alt="Nouvie - Inicio"
            width={180}
            height={60}
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-2">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2.5"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Abrir menu</span>
          <MenuIcon className="h-6 w-6 text-nouvie-navy" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
