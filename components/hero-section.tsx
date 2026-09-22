'use client';

import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id='home'
      className='relative min-h-[100svh] overflow-hidden bg-navy-deep text-white'
    >
      <img
        src='/client/hero-offshore.jpg'
        alt={t('imageAlt')}
        className='absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[65%_center] lg:object-center'
      />
      <div className='absolute inset-0 bg-[linear-gradient(105deg,rgba(1,26,61,0.92)_0%,rgba(1,26,61,0.78)_38%,rgba(1,26,61,0.28)_62%,rgba(1,26,61,0.15)_100%)]' />
      <div className='absolute inset-y-0 left-0 hidden w-px bg-white/15 lg:block' />
      <div className='absolute inset-y-0 right-0 hidden w-px bg-white/15 lg:block' />

      <div className='relative flex min-h-[100svh] flex-col justify-end pb-10 pt-28 sm:pb-14 lg:justify-center lg:pb-20 lg:pt-24'>
        <div className='pq-shell'>
          <div className='max-w-[42rem]'>
            <p className='pq-fade-up pq-display text-[clamp(2.6rem,8vw,5.6rem)] text-white'>
              Pipeline
              <span className='block text-accent'>Quality</span>
            </p>

            <div className='pq-fade-up pq-fade-up-delay-1 mt-6 h-px w-24 bg-accent pq-line-grow sm:mt-8' />

            <h1 className='pq-fade-up pq-fade-up-delay-1 mt-6 max-w-xl text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-white/95'>
              {t('titleLine1')} {t('titleLine2')}
            </h1>

            <p className='pq-fade-up pq-fade-up-delay-2 mt-5 max-w-md text-[15px] leading-relaxed text-white/75'>
              {t('subtitle')}
              <span className='mt-1 block text-white/55'>{t('subtitleLine2')}</span>
            </p>

            <div className='pq-fade-up pq-fade-up-delay-3 mt-9 flex flex-wrap items-center gap-x-8 gap-y-4'>
              <a href='#contact' className='pq-btn'>
                {t('cta1')}
              </a>
              <a href='#network' className='pq-btn-ghost text-white'>
                {t('cta2')}
              </a>
            </div>
          </div>
        </div>

        <div className='pq-shell mt-14 hidden lg:block'>
          <div className='flex items-end justify-between border-t border-white/15 pt-5'>
            <p className='max-w-xs text-[12px] leading-relaxed tracking-[0.04em] text-white/45'>
              {t('availability')}
            </p>
            <div className='flex gap-8 text-[11px] font-semibold tracking-[0.16em] text-white/40 uppercase'>
              <span>EU · DE</span>
              <span>QA / QC</span>
              <span>Field → Handover</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
