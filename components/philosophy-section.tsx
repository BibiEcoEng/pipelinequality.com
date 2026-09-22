'use client';

import { useTranslations } from 'next-intl';

export function PhilosophySection() {
  const t = useTranslations('philosophy');

  return (
    <section className='bg-light-gray'>
      <div className='pq-shell py-20 lg:py-28'>
        <p className='pq-index'>04 — {t('label')}</p>
        <div className='mt-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
          <div>
            <h2 className='max-w-2xl text-navy'>{t('title')}</h2>
            <div className='mt-8 max-w-xl space-y-5 pq-subtitle text-steel-gray'>
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
              <p>{t('paragraph3')}</p>
            </div>
          </div>
          <div className='relative flex min-h-[240px] items-center justify-center bg-navy px-8 py-12 text-white sm:min-h-[280px] sm:px-10 lg:min-h-[320px]'>
            <div className='absolute top-0 right-0 h-16 w-16 border-t-2 border-r-2 border-accent sm:h-20 sm:w-20' />
            <div className='relative z-10 max-w-[18ch] text-center'>
              <p className='text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-balance uppercase'>
                {t('principle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
