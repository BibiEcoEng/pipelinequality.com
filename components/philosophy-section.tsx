'use client';

import { useTranslations } from 'next-intl';

export function PhilosophySection() {
  const t = useTranslations('philosophy');

  return (
    <section className='bg-navy text-white'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
          <p className='pq-index text-accent'>{t('label')}</p>

          <p className='mt-6 font-sans text-[clamp(2rem,5vw,3.35rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-white uppercase lg:mt-8'>
            {t('principle')}
          </p>

          <div className='mt-5 h-px w-16 bg-accent lg:mt-6' />

          <h2 className='mt-7 text-white lg:mt-8'>{t('title')}</h2>

          <div className='mt-6 space-y-4 font-sans text-[0.9375rem] leading-[1.7] font-normal text-white/80 lg:mt-7'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
            <p>{t('paragraph3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
