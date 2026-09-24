'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { Link } from '@/navigation';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
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

  const links = [
    { href: '/#services', label: tNav('services') },
    { href: '/#industries', label: tNav('industries') },
    { href: '/#experience', label: tNav('experience') },
    { href: '/#contact', label: tNav('contact') },
  ];

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

      <div className='pq-shell py-8 lg:py-10'>
        <div className='flex items-center gap-3'>
          <img
            src='/logo-mark-white.png'
            alt='Pipeline Quality'
            className='h-9 w-auto object-contain'
          />
          <p className='font-sans text-[13px] font-semibold tracking-[0.14em] text-white uppercase'>
            Pipeline Quality
          </p>
        </div>

        <p className='mt-4 max-w-xl font-sans text-[0.9375rem] leading-[1.65] font-normal text-white/80'>
          {t('description')}
        </p>

        <div className='mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10'>
          <div className='flex flex-wrap gap-x-5 gap-y-2'>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='font-sans text-[12px] font-semibold tracking-[0.12em] text-white/80 uppercase transition hover:text-accent'
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className='min-w-0 space-y-1.5 sm:text-right'>
            <a
              href='mailto:info@pipelinequality.com'
              className='block font-sans text-[15px] font-semibold tracking-tight text-white transition hover:text-accent'
            >
              info@pipelinequality.com
            </a>
            <p className='font-sans text-[13px] font-normal text-white/80'>
              {t('location')}
            </p>
            <div className='flex items-center gap-2 sm:justify-end'>
              <button
                type='button'
                onClick={() => switchLocale('en')}
                className={`font-sans text-[12px] font-semibold tracking-[0.16em] ${
                  locale === 'en' ? 'text-accent' : 'text-white/80'
                }`}
              >
                EN
              </button>
              <span className='text-white/20'>/</span>
              <button
                type='button'
                onClick={() => switchLocale('de')}
                className={`font-sans text-[12px] font-semibold tracking-[0.16em] ${
                  locale === 'de' ? 'text-accent' : 'text-white/80'
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-white/20'>
        <div className='pq-shell flex flex-col gap-3 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5'>
          <p className='font-sans text-[12px] font-normal text-white/80'>
            {t('copyright')}
          </p>
          <div className='flex flex-wrap gap-x-5 gap-y-2'>
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='font-sans text-[11px] font-semibold tracking-[0.08em] text-white/80 uppercase transition hover:text-white'
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
