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
    <footer className='bg-navy text-white'>
      <div className='h-1 bg-accent' />

      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
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

          <p className='mt-5 font-sans text-[0.9375rem] leading-[1.65] font-normal text-white/80'>
            {t('description')}
          </p>

          <div className='mt-6 flex flex-wrap gap-x-5 gap-y-2'>
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

          <div className='mt-8 space-y-3 border-t border-white/20 pt-6'>
            <a
              href='mailto:info@pipelinequality.com'
              className='block font-sans text-[16px] font-semibold tracking-tight text-white transition hover:text-accent'
            >
              info@pipelinequality.com
            </a>
            <p className='font-sans text-[13px] font-normal text-white/80'>
              {t('location')}
            </p>
            <div className='flex flex-wrap items-center gap-x-5 gap-y-2'>
              <a
                href='https://www.linkedin.com/company/pipelinequality/'
                target='_blank'
                rel='noopener noreferrer'
                className='font-sans text-[12px] font-semibold tracking-[0.12em] text-white/80 uppercase transition hover:text-accent'
              >
                LinkedIn
              </a>
              <a
                href='https://wa.me/491728137111'
                target='_blank'
                rel='noopener noreferrer'
                className='font-sans text-[12px] font-semibold tracking-[0.12em] text-white/80 uppercase transition hover:text-accent'
              >
                WhatsApp
              </a>
              <span className='hidden text-white/20 sm:inline' aria-hidden>
                |
              </span>
              <div className='flex items-center gap-2'>
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
