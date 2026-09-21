'use client';

import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');
  const chips = t.raw('chips') as string[];

  return (
    <section
      className='relative min-h-[82vh] overflow-hidden bg-navy-deep text-white'
      id='home'
    >
      <img
        src='/client/hero-offshore.jpg'
        alt={t('imageAlt')}
        className='absolute inset-0 h-full w-full object-cover object-center'
      />
      <div className='absolute inset-0 bg-navy-deep/55' />
      <div className='relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-5 py-20 lg:px-8'>
        <div className='max-w-3xl'>
          <div className='mb-5 flex items-center gap-3'>
            <span className='h-px w-10 bg-accent' />
            <p className='text-[12px] font-semibold tracking-[0.2em] text-white/75 uppercase'>
              {t('tagline')}
            </p>
          </div>
          <h1 className='text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]'>
            {t('titleLine1')}
            <span className='mt-2 block'>{t('titleLine2')}</span>
          </h1>
          <p className='mt-6 max-w-xl text-[15px] leading-relaxed text-white/88 sm:text-base'>
            {t('subtitle')}
            <br />
            {t('subtitleLine2')}
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <a
              href='#contact'
              className='inline-flex items-center justify-center bg-accent px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-white uppercase transition hover:bg-accent-hover'
            >
              {t('cta1')}
            </a>
            <a
              href='#network'
              className='inline-flex items-center justify-center border border-white/50 bg-white/5 px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-white uppercase transition hover:border-white hover:bg-white/10'
            >
              {t('cta2')}
            </a>
          </div>
          <div className='mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/20 pt-5 text-[11px] font-medium tracking-[0.08em] text-white/70 uppercase'>
            {chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
