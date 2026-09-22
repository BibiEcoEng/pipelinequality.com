'use client';

import { useTranslations } from 'next-intl';

export function PhilosophySection() {
  const t = useTranslations('philosophy');

  return (
    <section className='bg-navy text-white'>
      <div className='pq-shell pq-section'>
        <p className='pq-index text-accent'>{t('label')}</p>
        <div className='mt-4 max-w-3xl lg:mt-5'>
          <h2 className='text-white'>{t('title')}</h2>
          <div className='mt-4 space-y-3 pq-subtitle text-white/80 lg:mt-5'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
            <p>{t('paragraph3')}</p>
          </div>
          <p className='mt-7 border-t border-white/20 pt-5 text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-white lg:mt-8 lg:pt-6'>
            {t('principle')}
          </p>
        </div>
      </div>
    </section>
  );
}
