'use client';

import { useTranslations } from 'next-intl';

export function SmartQAQCSection() {
  const t = useTranslations('smartQAQC');

  return (
    <section id='bw-digit' className='border-t border-navy/15 bg-white'>
      <div className='pq-shell pq-section grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10'>
        <div className='min-w-0 max-w-xl'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-navy/70'>{t('description')}</p>
          <div className='mt-6'>
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

        <div className='grid min-w-0 grid-cols-2 gap-3'>
          <img
            src='/client/bw-field.jpg?v=3'
            alt={t('fieldAlt')}
            width={1024}
            height={764}
            className='aspect-[3/4] h-auto w-full object-cover object-[center_30%]'
          />
          <img
            src='/client/bw-digital.jpg?v=3'
            alt={t('docsAlt')}
            width={1280}
            height={720}
            className='aspect-[3/4] h-auto w-full object-cover object-center'
          />
        </div>
      </div>
    </section>
  );
}
