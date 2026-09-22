'use client';

import { useTranslations } from 'next-intl';

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section id='experience' className='bg-navy text-white'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-white'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-white/80'>{t('intro')}</p>
        </div>

        <div className='mt-8 max-w-3xl space-y-6 border-t border-white/15 pt-8'>
          <div>
            <p className='text-[12px] font-bold tracking-[0.12em] text-accent uppercase'>
              {t('referenceLabel')}
            </p>
            <h3 className='mt-2 text-[1.05rem] font-semibold text-white sm:text-[1.15rem]'>
              {t('referenceTitle')}
            </h3>
            <p className='mt-3 pq-subtitle text-white/80'>{t('referenceText')}</p>
          </div>

          <div>
            <p className='text-[12px] font-bold tracking-[0.12em] text-accent uppercase'>
              {t('scopeTitle')}
            </p>
            <p className='mt-3 pq-subtitle text-white/80'>{t('scopeText')}</p>
          </div>

          <div>
            <p className='text-[12px] font-bold tracking-[0.12em] text-accent uppercase'>
              {t('trackTitle')}
            </p>
            <p className='mt-3 pq-subtitle text-white/80'>{t('trackText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
