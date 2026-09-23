import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  // Keep the address bar as pipelinequality.com (no /en or /de)
  localePrefix: 'never',
  // Cookie must be read so language switching works; first visit
  // is forced to English in middleware (ignore browser language).
  localeDetection: true,
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
