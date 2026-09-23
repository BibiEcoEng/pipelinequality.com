'use client';

import { useTranslations } from 'next-intl';

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section id='experience' className='bg-white text-navy'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-navy/70'>{t('intro')}</p>

          <div className='relative mt-6 aspect-[3/4] w-full overflow-hidden border border-navy/15 bg-white sm:aspect-[4/5]'>
            <img
              src='/client/experience-sif.jpg?v=1'
              alt={t('referenceTitle')}
              className='absolute inset-0 h-full w-full object-contain object-center'
            />
          </div>

          <div className='mt-8 space-y-7 border-t border-navy/15 pt-7'>
            <div>
              <p className='pq-index'>{t('referenceLabel')}</p>
              <h3 className='mt-2 font-sans text-[1.05rem] font-semibold tracking-[-0.02em] text-navy'>
                {t('referenceTitle')}
              </h3>
              <p className='mt-2 pq-subtitle text-navy/70'>{t('referenceText')}</p>
            </div>

            <div>
              <p className='pq-index'>{t('scopeTitle')}</p>
              <p className='mt-2 pq-subtitle text-navy/70'>{t('scopeText')}</p>
            </div>

            <div>
              <p className='pq-index'>{t('trackTitle')}</p>
              <p className='mt-2 pq-subtitle text-navy/70'>{t('trackText')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
