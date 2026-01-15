import Link from 'next/link';

const navigation = [
  { name: 'QUIÉNES SOMOS', href: '/nosotros' },
  { name: 'PRODUCTOS', href: '/productos' },
  { name: 'TESTIMONIOS', href: '/testimonios' },
  { name: 'FILOSOFÍA', href: '/filosofia' },
];

export function NavLinks() {
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="rounded-lg bg-nouvie-navy px-4 py-2 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-nouvie-blue"
        >
          {item.name}
        </Link>
      ))}
      <Link
        href="/contacto"
        className="rounded-lg bg-nouvie-turquoise px-4 py-2 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-nouvie-light-blue"
      >
        CONTACTO
      </Link>
    </>
  );
}
