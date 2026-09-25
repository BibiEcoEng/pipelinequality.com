'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { Link } from '@/navigation';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    const scrollY = window.scrollY;
    const nextLocale = newLocale as 'en' | 'de';
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=lax`;
    router.replace(pathname || '/', { locale: nextLocale });
    router.refresh();
    setTimeout(() => window.scrollTo(0, scrollY), 80);
  };

  const legal = [
    { href: '/privacy', label: t('privacyPolicy') },
    locale === 'de'
      ? { href: '/agb', label: t('terms') }
      : { href: '/terms', label: t('terms') },
    locale === 'de'
      ? { href: '/impressum', label: t('imprint') }
      : { href: '/legal-notice', label: t('imprint') },
  ];

  return (
    <footer className='bg-navy text-white'>
      <div className='h-1 bg-accent' />

      <div className='pq-shell py-4 md:py-5 lg:py-6'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8'>
          <a
            href='/#home'
            className='flex items-center gap-3'
            aria-label='Pipeline Quality'
          >
            <span className='inline-flex items-center justify-center bg-white p-1.5'>
              <img
                src='/logo-mark.png?v=2'
                alt=''
                className='h-8 w-auto object-contain sm:h-9'
              />
            </span>
            <p className='font-sans text-[13px] font-semibold tracking-[0.14em] uppercase sm:text-[14px]'>
              <span className='text-white'>Pipeline </span>
              <span className='text-accent'>Quality</span>
            </p>
          </a>

          <div className='flex items-center gap-2'>
            <button
              type='button'
              onClick={() => switchLocale('en')}
              className={`font-sans text-[12px] font-semibold tracking-[0.16em] transition hover:text-accent ${
                locale === 'en' ? 'text-accent' : 'text-white/80'
              }`}
            >
              EN
            </button>
            <span className='text-accent/40'>/</span>
            <button
              type='button'
              onClick={() => switchLocale('de')}
              className={`font-sans text-[12px] font-semibold tracking-[0.16em] transition hover:text-accent ${
                locale === 'de' ? 'text-accent' : 'text-white/80'
              }`}
            >
              DE
            </button>
          </div>
        </div>
      </div>

      <div className='border-t border-accent/25'>
        <div className='pq-shell flex flex-col gap-1.5 py-2.5 md:py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-x-8'>
          <p className='font-sans text-[11px] font-normal text-accent md:text-[12px]'>
            {t('copyright')}
          </p>
          <nav
            aria-label='Legal'
            className='flex w-full flex-nowrap items-center justify-between gap-1.5 lg:w-auto lg:justify-end lg:gap-x-4'
          >
            {legal.map((item, index) => (
              <span key={item.href} className='contents'>
                {index > 0 ? (
                  <span className='shrink-0 text-[9px] text-accent/55' aria-hidden>
                    ·
                  </span>
                ) : null}
                <Link
                  href={item.href}
                  className='shrink-0 whitespace-nowrap font-sans text-[9px] font-semibold tracking-[0.04em] text-white/80 uppercase transition hover:text-accent sm:text-[10px] sm:tracking-[0.06em] md:text-[11px] md:tracking-[0.08em]'
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
