import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  // Keep the address bar as pipelinequality.com (no /en or /de)
  localePrefix: 'never',
  // Always open in English unless the user switches language
  localeDetection: false,
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
