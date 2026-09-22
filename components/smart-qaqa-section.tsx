'use client';

import { useTranslations } from 'next-intl';

export function SmartQAQCSection() {
  const t = useTranslations('smartQAQC');

  return (
    <section id='bw-digit' className='border-t border-line bg-light-gray'>
      <div className='pq-shell grid gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24'>
        <div>
          <p className='pq-index'>{t('label')}</p>
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
        <div className='grid grid-cols-2 gap-3 lg:gap-4'>
          <div className='relative aspect-[3/4] overflow-hidden'>
            <img
              src='/client/bw-field.jpg'
              alt={t('fieldAlt')}
              className='absolute inset-0 h-full w-full object-cover object-center'
            />
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-4'>
              <p className='pq-index'>{t('fieldLabel')}</p>
              <p className='mt-1 pq-subtitle text-white'>{t('fieldText')}</p>
            </div>
          </div>
          <div className='relative aspect-[3/4] overflow-hidden self-end'>
            <img
              src='/client/bw-digital.jpg'
              alt={t('docsAlt')}
              className='absolute inset-0 h-full w-full object-cover object-center'
            />
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-4'>
              <p className='pq-index'>{t('docsLabel')}</p>
              <p className='mt-1 pq-subtitle text-white'>{t('docsText')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
