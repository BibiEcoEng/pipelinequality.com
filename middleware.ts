import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './routing';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // First visit: always English. After the user picks a language,
  // NEXT_LOCALE cookie is used (needed for switcher with localePrefix: 'never').
  if (!request.cookies.has('NEXT_LOCALE')) {
    const headers = new Headers(request.headers);
    headers.set('accept-language', 'en');
    return handleI18nRouting(
      new NextRequest(request.url, {
        headers,
        method: request.method,
      })
    );
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
