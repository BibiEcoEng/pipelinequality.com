'use client';

import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id='home'
      className='relative min-h-[92svh] overflow-hidden bg-navy text-white lg:min-h-[78vh]'
    >
      <img
        src='/client/hero-monopile.jpg?v=3'
        alt={t('imageAlt')}
        className='absolute inset-0 h-full w-full scale-[1.03] object-cover object-[70%_40%] brightness-[1.04] contrast-[1.08] saturate-[1.02]'
      />

      {/* Balanced wash: photo stays visible, navy + soft orange blend for brand */}
      <div
        className='absolute inset-0 bg-[linear-gradient(115deg,rgba(1,42,96,0.72)_0%,rgba(1,42,96,0.42)_38%,rgba(1,42,96,0.18)_62%,rgba(1,42,96,0.06)_100%)]'
        aria-hidden
      />
      <div
        className='absolute inset-0 bg-[linear-gradient(to_top,rgba(1,42,96,0.5)_0%,rgba(1,42,96,0.15)_36%,transparent_70%)]'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_88%_28%,rgba(251,114,0,0.12)_0%,transparent_48%)]'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_12%_55%,rgba(1,42,96,0.5)_0%,transparent_60%)]'
        aria-hidden
      />

      <div className='relative flex min-h-[92svh] flex-col justify-end pb-10 pt-28 sm:pb-14 lg:min-h-[78vh] lg:justify-center lg:pb-16 lg:pt-24'>
        <div className='pq-shell'>
          <div className='max-w-[40rem]'>
            <h1 className='pq-hero-brand pq-fade-up text-[clamp(2.5rem,8vw,3.75rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-white'>
              {t('brand')}
            </h1>

            <p className='pq-fade-up pq-fade-up-delay-1 mt-4 max-w-2xl text-[clamp(1.2rem,3vw,1.6rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-white lg:mt-5 lg:text-[1.35rem]'>
              {t('titleLine1')}
              <span className='block'>{t('titleLine2')}</span>
            </p>

            <div className='pq-fade-up pq-fade-up-delay-1 mt-5 h-px w-20 bg-accent pq-line-grow lg:mt-6' />

            <div className='pq-fade-up pq-fade-up-delay-2 mt-5 max-w-lg space-y-2.5 lg:mt-6'>
              <p className='border-l-2 border-accent pl-3 text-[14px] leading-snug font-semibold text-white sm:text-[15px]'>
                {t('subtitle')}
              </p>
              <p className='border-l-2 border-white/40 pl-3 text-[14px] leading-snug font-semibold text-white/95 sm:text-[15px]'>
                {t('subtitleLine2')}
              </p>
            </div>

            <div className='pq-fade-up pq-fade-up-delay-3 mt-7 flex flex-wrap items-center gap-4 lg:mt-8'>
              <a href='#contact' className='pq-btn'>
                {t('cta1')}
              </a>
              <a
                href='#network'
                className='inline-flex items-center border border-white/50 bg-navy/45 px-5 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-[2px] transition hover:border-white hover:bg-white/10'
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
