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
        src='/client/hero-offshore.jpg'
        alt={t('imageAlt')}
        className='absolute inset-0 h-full w-full object-cover object-[78%_center] sm:object-[70%_center] lg:object-[62%_center]'
      />
      {/* Solid navy behind copy so text never sits on bright yellow highlights */}
      <div
        className='absolute inset-0 bg-[linear-gradient(105deg,#012A60_0%,#012A60_42%,rgba(1,42,96,0.88)_58%,rgba(1,42,96,0.35)_78%,rgba(1,42,96,0.2)_100%)]'
        aria-hidden
      />
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

            <h1 className='pq-fade-up pq-fade-up-delay-1 mt-6 max-w-xl text-white'>
              {t('titleLine1')} {t('titleLine2')}
            </h1>

            <div className='pq-fade-up pq-fade-up-delay-2 pq-subtitle mt-5 max-w-md space-y-1.5 text-white/85'>
              <p>{t('subtitle')}</p>
              <p>{t('subtitleLine2')}</p>
            </div>

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
