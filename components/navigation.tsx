'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function Navigation() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('nav');
  const tCTA = useTranslations('cta');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    const scrollY = window.scrollY;
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setTimeout(() => window.scrollTo(0, scrollY), 50);
    setIsLangOpen(false);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'de', name: 'DE' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (href?.startsWith('#')) {
      if (pathname === `/${locale}` || pathname === `/${locale}/` || pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          const offset = 0;
          const elementPosition = element.getBoundingClientRect().top;
          window.scrollTo({
            top: elementPosition + window.scrollY - offset,
            behavior: 'smooth',
          });
        }
      } else {
        router.push(`/${locale}${href}`);
      }
    } else if (href) {
      router.push(href);
    }
    closeMenu();
  };

  const links = [
    { href: '#services', label: t('services') },
    { href: '#process', label: t('process') },
    { href: '#industries', label: t('industries') },
    { href: '#experience', label: t('experience') },
    { href: '#contact', label: t('contact') },
  ];

  const solid = scrolled && !isMobileMenuOpen;
  const onDark = !solid;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-white/95 text-navy shadow-[0_1px_0_rgba(1,42,96,0.08)] backdrop-blur'
            : 'bg-gradient-to-b from-navy/55 via-navy/25 to-transparent text-white'
        }`}
      >
        <div className='pq-shell flex h-[4.5rem] items-center gap-6'>
          <a
            href='#home'
            onClick={handleSmoothScroll}
            className='group flex shrink-0 items-center gap-3'
            aria-label='Pipeline Quality'
          >
            <img
              src={onDark ? '/logo-mark-white.png' : '/logo-mark.png'}
              alt=''
              className='h-11 w-auto object-contain sm:h-12'
            />
            <span className='flex flex-col leading-[1.05]'>
              <span
                className={`text-[13px] font-semibold tracking-[0.16em] uppercase sm:text-[15px] sm:tracking-[0.18em] ${
                  onDark ? 'text-white' : 'text-navy'
                }`}
              >
                Pipeline
              </span>
              <span className='text-[13px] font-semibold tracking-[0.16em] text-accent uppercase sm:text-[15px] sm:tracking-[0.18em]'>
                Quality
              </span>
            </span>
          </a>

          <nav className='ml-auto hidden items-center gap-1 lg:flex'>
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleSmoothScroll}
                className={`relative px-3 py-2 text-[12px] font-semibold tracking-[0.08em] uppercase transition-colors duration-300 after:absolute after:right-3 after:bottom-1 after:left-3 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-400 hover:after:scale-x-100 ${
                  onDark ? 'text-white/75 hover:text-white' : 'text-navy/70 hover:text-navy'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className='hidden items-center gap-5 lg:flex'>
            <div className='relative'>
              <button
                type='button'
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase ${
                  onDark ? 'text-white/80' : 'text-navy'
                }`}
                aria-label='Language'
              >
                {locale.toUpperCase()}
                <span className='text-accent'>+</span>
              </button>
              {isLangOpen && (
                <div className='absolute right-0 z-50 mt-3 min-w-[5.5rem] border border-line bg-white text-navy shadow-xl'>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type='button'
                      onClick={() => switchLocale(lang.code)}
                      className={`block w-full px-4 py-2.5 text-left text-[12px] font-semibold tracking-[0.12em] transition hover:bg-light-gray ${
                        locale === lang.code ? 'text-accent' : ''
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href='#contact'
              onClick={handleSmoothScroll}
              className={`text-[11px] font-semibold tracking-[0.14em] uppercase transition ${
                onDark
                  ? 'text-white drop-shadow-[0_1px_2px_rgba(1,42,96,0.75)] hover:text-accent'
                  : 'text-accent hover:text-navy'
              }`}
            >
              {tCTA('button1')}
            </a>
          </div>

          <button
            type='button'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='ml-auto inline-flex h-11 w-11 items-center justify-center lg:hidden'
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`pq-burger ${onDark ? 'text-white' : 'text-navy'}`}
              data-open={isMobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-navy transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className='flex h-full flex-col justify-between px-6 pt-28 pb-10'>
          <div className='space-y-1'>
            {links.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleSmoothScroll}
                className='group flex items-baseline gap-4 border-b border-white/10 py-4 text-white transition-all duration-500'
                style={{
                  transitionDelay: isMobileMenuOpen ? `${100 + index * 60}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                <span className='text-[clamp(1.6rem,7vw,2.4rem)] font-semibold tracking-[-0.03em]'>
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <div
            className='space-y-6 transition-all duration-500'
            style={{
              transitionDelay: isMobileMenuOpen ? '380ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            <a href='#contact' onClick={handleSmoothScroll} className='pq-btn'>
              {tCTA('button1')}
            </a>
            <div className='flex gap-6'>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type='button'
                  onClick={() => {
                    switchLocale(lang.code);
                    closeMenu();
                  }}
                  className={`text-[13px] font-semibold tracking-[0.16em] ${
                    locale === lang.code ? 'text-accent' : 'text-white/50'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
