'use client';

import { useTranslations } from 'next-intl';

export function PhilosophySection() {
  const t = useTranslations('philosophy');

  return (
    <section className='bg-navy text-white'>
      <div className='pq-shell py-14 sm:py-16 lg:py-18'>
        <p className='pq-index text-accent'>04 — {t('label')}</p>
        <div className='mt-6 max-w-3xl'>
          <h2 className='text-white'>{t('title')}</h2>
          <div className='mt-6 space-y-4 pq-subtitle text-white/80'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
            <p>{t('paragraph3')}</p>
          </div>
          <p className='mt-10 border-t border-white/20 pt-8 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-white'>
            {t('principle')}
          </p>
        </div>
      </div>
    </section>
  );
}
