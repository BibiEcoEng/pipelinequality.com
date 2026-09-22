'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    const scrollY = window.scrollY;
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setTimeout(() => window.scrollTo(0, scrollY), 50);
  };

  const links = [
    { href: `/${locale}#services`, label: tNav('services') },
    { href: `/${locale}#industries`, label: tNav('industries') },
    { href: `/${locale}#experience`, label: tNav('experience') },
    { href: `/${locale}#contact`, label: tNav('contact') },
  ];

  const legal = [
    { href: `/${locale}/privacy`, label: t('privacyPolicy') },
    locale === 'de'
      ? { href: `/${locale}/agb`, label: t('terms') }
      : { href: `/${locale}/terms`, label: t('terms') },
    locale === 'de'
      ? { href: `/${locale}/impressum`, label: t('imprint') }
      : { href: `/${locale}/legal-notice`, label: t('imprint') },
  ];

  return (
    <footer className='bg-navy-deep text-white'>
      <div className='h-1 bg-accent' />

      <div className='pq-shell py-16 lg:py-20'>
        <div className='grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end'>
          <div>
            <p className='pq-display text-[clamp(2.4rem,7vw,4.5rem)] text-white'>
              Pipeline
              <span className='text-accent'> Quality</span>
            </p>
            <p className='mt-5 max-w-md text-[14px] leading-relaxed text-white/50'>
              {t('description')}
            </p>
            <div className='mt-8 flex flex-wrap gap-x-6 gap-y-3'>
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-[12px] font-semibold tracking-[0.12em] text-white/70 uppercase transition hover:text-accent'
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className='space-y-6 lg:text-right'>
            <a
              href='mailto:info@pipelinequality.com'
              className='block text-[18px] font-semibold tracking-tight text-white transition hover:text-accent'
            >
              info@pipelinequality.com
            </a>
            <p className='text-[13px] text-white/45'>{t('location')}</p>
            <div className='flex gap-5 lg:justify-end'>
              <a
                href='https://www.linkedin.com/company/pipelinequality/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase transition hover:text-accent'
              >
                LinkedIn
              </a>
              <a
                href='https://wa.me/491728137111'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase transition hover:text-accent'
              >
                WhatsApp
              </a>
            </div>
            <div className='flex items-center gap-3 lg:justify-end'>
              <button
                type='button'
                onClick={() => switchLocale('en')}
                className={`text-[12px] font-bold tracking-[0.16em] ${
                  locale === 'en' ? 'text-accent' : 'text-white/40'
                }`}
              >
                EN
              </button>
              <span className='text-white/20'>/</span>
              <button
                type='button'
                onClick={() => switchLocale('de')}
                className={`text-[12px] font-bold tracking-[0.16em] ${
                  locale === 'de' ? 'text-accent' : 'text-white/40'
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>

        <div className='border-t border-white/10 pb-8'>
          <div className='pq-shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-[12px] text-white/40'>{t('copyright')}</p>
            <div className='flex flex-wrap gap-x-5 gap-y-2'>
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-[11px] tracking-[0.08em] text-white/35 uppercase transition hover:text-white/70'
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className='pq-shell pb-2'>
            <p className='text-[11px] leading-relaxed text-white/30'>{t('brandNote')}</p>
          </div>
        </div>
    </footer>
  );
}
