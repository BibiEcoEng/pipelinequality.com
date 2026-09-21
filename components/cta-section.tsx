'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className='bg-light-gray'>
      <div className='mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20'>
        <div className='max-w-3xl'>
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className='text-3xl font-bold tracking-tight text-navy sm:text-[2rem]'>
            {t('title')}
          </h2>
          <p className='mt-5 text-[15px] leading-relaxed text-steel-gray'>
            {t('description')}
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <a
              href='#contact'
              className='inline-flex items-center justify-center bg-accent px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-white uppercase transition hover:bg-accent-hover'
            >
              {t('button1')}
            </a>
            <a
              href='#contact'
              className='inline-flex items-center justify-center border border-navy/15 bg-white px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-navy uppercase transition hover:border-navy/30'
            >
              {t('button2')}
            </a>
            <a
              href='#network'
              className='inline-flex items-center justify-center border border-navy/15 bg-white px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-navy uppercase transition hover:border-navy/30'
            >
              {t('button3')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
