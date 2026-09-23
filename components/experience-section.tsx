'use client';

import { useTranslations } from 'next-intl';

const bodyText =
  'text-[1.0625rem] leading-[1.7] font-normal text-navy/70 lg:text-[1.125rem]';

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section id='experience' className='bg-white text-navy'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className={`mt-4 ${bodyText}`}>{t('intro')}</p>

          <div className='mt-8 space-y-7 border-t border-navy/15 pt-7'>
            <div>
              <p className='pq-index'>{t('referenceLabel')}</p>
              <h3 className='mt-2 font-sans text-[1.05rem] font-semibold tracking-[-0.02em] text-navy'>
                {t('referenceTitle')}
              </h3>
              <p className={`mt-2 ${bodyText}`}>{t('referenceText')}</p>
            </div>

            <div>
              <p className='pq-index'>{t('scopeTitle')}</p>
              <p className={`mt-2 ${bodyText}`}>{t('scopeText')}</p>
            </div>

            <div>
              <p className='pq-index'>{t('trackTitle')}</p>
              <p className={`mt-2 ${bodyText}`}>{t('trackText')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
