'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const tCTA = useTranslations('cta');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    const scrollY = window.scrollY;
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 50);
    setIsLangOpen(false);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
  ];

  const currentLang =
    languages.find((lang) => lang.code === locale) || languages[0];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (href?.startsWith('#')) {
      if (pathname === `/${locale}` || pathname === `/${locale}/` || pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          const offset = 72;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({
            top: offsetPosition,
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

  return (
    <header className='sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 lg:gap-6 lg:px-8'>
        <a
          href='#home'
          onClick={handleSmoothScroll}
          className='flex shrink-0 items-center'
        >
          <img
            src='/logo-horizontal.png'
            alt='Pipeline Quality'
            className='h-9 w-auto object-contain md:h-10'
          />
        </a>

        <nav className='ml-auto hidden items-center gap-5 lg:flex'>
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleSmoothScroll}
              className='whitespace-nowrap text-[13px] font-medium text-steel-gray transition hover:text-navy'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='hidden items-center gap-2 lg:flex'>
          <a
            href='#contact'
            onClick={handleSmoothScroll}
            className='inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap bg-accent px-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition hover:bg-accent-hover'
          >
            {tCTA('button1')}
          </a>

          <div className='relative'>
            <button
              type='button'
              onClick={() => setIsLangOpen(!isLangOpen)}
              className='flex h-10 items-center gap-2 border border-line px-3 text-navy'
              aria-label='Language'
            >
              <Globe className='h-4 w-4' />
              <span className='text-[12px] font-semibold'>
                {currentLang.code.toUpperCase()}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isLangOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isLangOpen && (
              <div className='absolute right-0 z-50 mt-1 w-44 overflow-hidden border border-line bg-white shadow-lg'>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type='button'
                    onClick={() => switchLocale(lang.code)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-light-gray ${
                      locale === lang.code ? 'bg-orange-50' : ''
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className='font-medium text-navy'>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          type='button'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center border border-line text-navy lg:hidden'
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className='border-t border-line bg-white lg:hidden'>
          <nav className='mx-auto flex max-w-7xl flex-col px-5 py-4'>
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleSmoothScroll}
                className='border-b border-line py-3.5 text-[14px] font-medium text-navy'
              >
                {item.label}
              </a>
            ))}
            <a
              href='#contact'
              onClick={handleSmoothScroll}
              className='mt-4 inline-flex h-11 items-center justify-center bg-accent px-5 text-[12px] font-semibold tracking-[0.04em] text-white uppercase'
            >
              {tCTA('button1')}
            </a>
            <div className='mt-3 flex gap-2'>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type='button'
                  onClick={() => {
                    switchLocale(lang.code);
                    closeMenu();
                  }}
                  className={`flex-1 py-2.5 text-[12px] font-semibold ${
                    locale === lang.code
                      ? 'bg-accent text-white'
                      : 'border border-line text-navy'
                  }`}
                >
                  {lang.flag} {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
