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
            <div className='mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-steel-gray'>
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
            </div>
          </div>
          <div className='relative flex items-end bg-navy p-8 text-white sm:p-10 lg:min-h-[280px]'>
            <div className='absolute top-0 right-0 h-20 w-20 border-t-2 border-r-2 border-accent' />
            <div>
              <p className='text-[11px] font-bold tracking-[0.18em] text-accent uppercase'>
                {t('principleLabel')}
              </p>
              <p className='mt-4 text-[clamp(1.8rem,3.5vw,2.75rem)] leading-[1.05] font-bold tracking-[-0.03em]'>
                {t('principle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
