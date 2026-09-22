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
      {/* Full navy panel under copy — never place text on the photo colors */}
      <div
        className='absolute inset-0 bg-[linear-gradient(90deg,#012A60_0%,#012A60_58%,rgba(1,42,96,0.94)_70%,rgba(1,42,96,0.55)_88%,rgba(1,42,96,0.35)_100%)]'
        aria-hidden
      />

      <div className='relative flex min-h-[100svh] flex-col justify-end pb-10 pt-28 sm:pb-14 lg:justify-center lg:pb-20 lg:pt-24'>
        <div className='pq-shell'>
          <div className='max-w-[36rem]'>
            <p className='pq-fade-up pq-display text-[clamp(2.6rem,8vw,5.6rem)] text-white'>
              Pipeline
              <span className='block text-white'>Quality</span>
            </p>

            <div className='pq-fade-up pq-fade-up-delay-1 mt-6 h-px w-24 bg-accent pq-line-grow sm:mt-8' />

            <h1 className='pq-fade-up pq-fade-up-delay-1 mt-6 max-w-xl text-white'>
              {t('titleLine1')} {t('titleLine2')}
            </h1>

            {/* Two clearly divided rows — services vs industries */}
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

        <div className='pq-shell mt-14 hidden lg:block'>
          <div className='flex max-w-[36rem] items-end justify-between border-t border-white/20 pt-5'>
            <p className='max-w-xs text-[12px] leading-relaxed tracking-[0.04em] text-white/70'>
              {t('availability')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
