import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

/**
 * next-intl redirige al prefijo de idioma con 307 (temporal). Para Google un
 * 307 significa "sigue indexando la URL vieja", asi que /productos/x y
 * /es/productos/x acabaron indexadas por separado y repartiendose el
 * posicionamiento: en Search Console la misma pagina aparecia dos veces, una
 * en el puesto 12 y otra en el 28.
 *
 * 308 es el equivalente permanente de 307 (conserva el metodo HTTP, a
 * diferencia de 301) y consolida las dos en una.
 *
 * Esto solo es correcto porque localeDetection esta desactivado en
 * i18n/routing.ts: el destino ya no depende del Accept-Language del visitante,
 * asi que "permanente" es cierto para todos. Si algun dia se vuelve a activar
 * la deteccion, hay que quitar esta conversion: un 308 cacheado apuntando al
 * idioma equivocado no se puede deshacer desde el servidor.
 */
export default function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);

  if (response.status === 307) {
    const destino = response.headers.get('location');
    if (destino) {
      // Se conservan las cabeceras que ya puso next-intl (la cookie de idioma
      // y el Link de alternates); solo cambia el codigo de estado.
      return NextResponse.redirect(destino, { status: 308, headers: response.headers });
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
