'use client';

import { useTranslations } from 'next-intl';

export function SmartQAQCSection() {
  const t = useTranslations('smartQAQC');

  return (
    <section id='bw-digit' className='border-t border-line bg-light-gray'>
      <div className='pq-shell pq-section grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10'>
        <div>
          <p className='pq-index'>10 — {t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className='mt-4 max-w-lg pq-subtitle text-steel-gray'>
            {t('description')}
          </p>
          <div className='mt-7'>
            <a
              href='https://www.bwdigit.com'
              target='_blank'
              rel='noreferrer'
              className='pq-btn'
            >
              {t('cta')}
            </a>
          </div>
        </div>

        <div className='grid grid-cols-2 items-stretch gap-3 lg:gap-3'>
          <div className='relative aspect-[4/5] max-h-[280px] overflow-hidden lg:aspect-auto lg:h-[220px] lg:max-h-none'>
            <img
              src='/client/bw-field.jpg'
              alt={t('fieldAlt')}
              className='absolute inset-0 h-full w-full object-cover object-center'
            />
          </div>

          <div className='relative aspect-[4/5] max-h-[280px] overflow-hidden lg:aspect-auto lg:h-[220px] lg:max-h-none'>
            <img
              src='/client/bw-digital.jpg?v=2'
              alt={t('docsAlt')}
              className='absolute inset-0 h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
