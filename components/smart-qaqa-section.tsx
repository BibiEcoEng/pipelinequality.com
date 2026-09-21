'use client';

import { useTranslations } from 'next-intl';

export function SmartQAQCSection() {
  const t = useTranslations('smartQAQC');

  return (
    <section id='bw-digit' className='bg-navy text-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20'>
        <div>
          <div className='mb-3 flex items-center gap-3'>
            <span className='h-px w-8 bg-accent' />
            <p className='text-[12px] font-semibold tracking-[0.18em] text-white/70 uppercase'>
              {t('label')}
            </p>
          </div>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-[2rem]'>
            {t('title')}
          </h2>
          <p className='mt-5 text-[15px] leading-relaxed text-white/70'>
            {t('description')}
          </p>
          <div className='mt-8'>
            <a
              href='https://www.bwdigit.com'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center bg-accent px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-white uppercase transition hover:bg-accent-hover'
            >
              {t('cta')}
            </a>
          </div>
        </div>
        <div className='grid gap-3 sm:grid-cols-2'>
          <div className='relative min-h-[220px] overflow-hidden border border-white/15'>
            <img
              src='/client/bw-field.jpg'
              alt={t('fieldAlt')}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-navy/35' />
            <div className='absolute right-0 bottom-0 left-0 p-4'>
              <p className='text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase'>
                {t('fieldLabel')}
              </p>
              <p className='mt-1 text-sm font-medium text-white'>
                {t('fieldText')}
              </p>
            </div>
          </div>
          <div className='relative min-h-[220px] overflow-hidden border border-white/15'>
            <img
              src='/client/bw-digital.jpg'
              alt={t('docsAlt')}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-navy/40' />
            <div className='absolute right-0 bottom-0 left-0 p-4'>
              <p className='text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase'>
                {t('docsLabel')}
              </p>
              <p className='mt-1 text-sm font-medium text-white'>
                {t('docsText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
