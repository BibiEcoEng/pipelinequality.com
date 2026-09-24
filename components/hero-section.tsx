'use client';

import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id='home'
      className='relative min-h-[92svh] overflow-hidden bg-[#071c33] text-white lg:min-h-[78vh]'
    >
      <picture>
        <source
          media='(min-width: 1024px)'
          srcSet='/client/hero-monopile.jpg?v=4'
        />
        <img
          src='/client/hero-monopile-mobile.jpg?v=1'
          alt={t('imageAlt')}
          className='absolute inset-0 h-full w-full scale-[1.03] object-cover object-[50%_42%] brightness-[0.92] contrast-[1.08] saturate-[1.05] lg:object-[68%_42%]'
        />
      </picture>

      {/* Base film — keeps bright sky/ground from washing out type */}
      <div className='absolute inset-0 bg-navy/40' aria-hidden />

      {/* Left text column scrim */}
      <div
        className='absolute inset-0 bg-[linear-gradient(105deg,rgba(1,42,96,0.88)_0%,rgba(1,42,96,0.72)_28%,rgba(1,42,96,0.38)_52%,rgba(1,42,96,0.12)_72%,transparent_88%)]'
        aria-hidden
      />

      {/* Bottom scrim — mobile/tablet copy sits low */}
      <div
        className='absolute inset-0 bg-[linear-gradient(to_top,rgba(1,42,96,0.82)_0%,rgba(1,42,96,0.48)_22%,rgba(1,42,96,0.18)_42%,transparent_62%)] lg:bg-[linear-gradient(to_top,rgba(1,42,96,0.55)_0%,rgba(1,42,96,0.22)_18%,transparent_42%)]'
        aria-hidden
      />

      {/* Top bar — nav legibility */}
      <div
        className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(1,42,96,0.55)_0%,rgba(1,42,96,0.22)_14%,transparent_28%)]'
        aria-hidden
      />

      {/* Soft brand warmth, kept light */}
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_90%_20%,rgba(251,114,0,0.1)_0%,transparent_45%)]'
        aria-hidden
      />

      <div className='relative flex min-h-[92svh] flex-col justify-end pb-10 pt-28 sm:pb-14 lg:min-h-[78vh] lg:justify-center lg:pb-16 lg:pt-24'>
        <div className='pq-shell'>
          <div className='max-w-[42rem] [text-shadow:0_1px_2px_rgba(1,42,96,0.55),0_8px_24px_rgba(1,42,96,0.35)]'>
            <h1 className='pq-hero-brand pq-fade-up m-0 text-white'>{t('brand')}</h1>

            <p className='pq-fade-up pq-fade-up-delay-1 mt-4 pq-subtitle m-0 font-semibold text-white lg:mt-5'>
              {t('titleLine1')} {t('titleLine2')}
            </p>

            <div className='pq-fade-up pq-fade-up-delay-1 mt-5 h-px w-20 bg-accent pq-line-grow shadow-[0_0_12px_rgba(251,114,0,0.45)] lg:mt-6' />

            <div className='pq-fade-up pq-fade-up-delay-2 mt-5 space-y-2.5 lg:mt-6'>
              <div className='flex items-stretch gap-3'>
                <span className='w-0.5 shrink-0 bg-accent shadow-[0_0_8px_rgba(251,114,0,0.5)]' aria-hidden />
                <p className='pq-subtitle m-0 font-semibold text-white'>{t('subtitle')}</p>
              </div>
              <div className='flex items-stretch gap-3'>
                <span className='w-0.5 shrink-0 bg-white/55' aria-hidden />
                <p className='pq-subtitle m-0 font-semibold text-white'>{t('subtitleLine2')}</p>
              </div>
            </div>

            <div className='pq-fade-up pq-fade-up-delay-3 mt-7 flex flex-wrap items-center gap-3 [text-shadow:none] lg:mt-8 lg:gap-4'>
              <a
                href='#contact'
                className='pq-btn !gap-2.5 !px-4 !py-2.5 text-[10px] tracking-[0.12em] lg:!gap-[0.85rem] lg:!px-[1.35rem] lg:!py-4 lg:text-[11px] lg:tracking-[0.14em]'
              >
                {t('cta1')}
              </a>
              <a
                href='#network'
                className='inline-flex items-center border border-white/70 bg-navy/70 px-4 py-2.5 text-[10px] font-semibold tracking-[0.12em] text-white uppercase shadow-[0_4px_18px_rgba(1,42,96,0.35)] backdrop-blur-[3px] transition hover:border-white hover:bg-navy/85 lg:px-5 lg:py-3.5 lg:text-[11px] lg:tracking-[0.14em]'
              >
                {t('cta2')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
