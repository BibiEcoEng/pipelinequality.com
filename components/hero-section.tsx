'use client';

import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id='home'
      className='relative min-h-[100svh] overflow-hidden bg-navy text-white'
    >
      <img
        src='/client/hero-offshore.jpg?v=4'
        alt={t('imageAlt')}
        className='absolute inset-0 h-full w-full object-cover object-[78%_center]'
      />
      {/* Soft wash — photo stays visible; copy stays readable */}
      <div
        className='absolute inset-0 bg-[linear-gradient(to_top,rgba(1,42,96,0.88)_0%,rgba(1,42,96,0.55)_38%,rgba(1,42,96,0.28)_62%,rgba(1,42,96,0.18)_100%)] lg:bg-[linear-gradient(90deg,rgba(1,42,96,0.82)_0%,rgba(1,42,96,0.55)_42%,rgba(1,42,96,0.22)_72%,rgba(1,42,96,0.08)_100%)]'
        aria-hidden
      />

      <div className='relative flex min-h-[100svh] flex-col justify-end pb-10 pt-28 sm:pb-14 lg:justify-center lg:pb-20 lg:pt-24'>
        <div className='pq-shell'>
          <div className='max-w-[40rem]'>
            <h1 className='pq-fade-up text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.08] font-semibold tracking-[-0.025em] text-white'>
              {t('titleLine1')}
              <span className='block'>{t('titleLine2')}</span>
            </h1>

            <div className='pq-fade-up pq-fade-up-delay-1 mt-6 h-px w-24 bg-accent pq-line-grow sm:mt-8' />

            <div className='pq-fade-up pq-fade-up-delay-2 mt-6 max-w-lg space-y-3'>
              <p className='border-l-2 border-accent pl-3 text-[14px] leading-snug font-semibold text-white sm:text-[15px]'>
                {t('subtitle')}
              </p>
              <p className='border-l-2 border-white/35 pl-3 text-[14px] leading-snug font-semibold text-white/90 sm:text-[15px]'>
                {t('subtitleLine2')}
              </p>
            </div>

            <div className='pq-fade-up pq-fade-up-delay-3 mt-9 flex flex-wrap items-center gap-4'>
              <a href='#contact' className='pq-btn'>
                {t('cta1')}
              </a>
              <a
                href='#network'
                className='inline-flex items-center border border-white/40 bg-navy/40 px-5 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition hover:border-white hover:bg-white/10'
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
