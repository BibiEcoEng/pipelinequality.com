'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

export function PartnersSection() {
  const t = useTranslations('partners');

  return (
    <section id='partners' className='bg-light-gray'>
      <div className='pq-shell pq-section'>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='max-w-3xl text-navy lg:max-w-5xl'>{t('title')}</h2>
        <p className='mt-5 max-w-2xl pq-subtitle text-steel-gray lg:max-w-4xl'>
          {t('paragraph1')}
        </p>
        <p className='mt-4 max-w-2xl pq-subtitle text-steel-gray lg:max-w-4xl'>
          {t('paragraph2')}
        </p>
        <div className='mt-8'>
          <a
            href='mailto:info@pipelinequality.com'
            className='inline-flex items-center justify-center border border-navy/15 bg-white px-3.5 py-2.5 text-[10px] font-semibold tracking-[0.1em] text-navy uppercase transition duration-300 hover:border-accent hover:bg-accent hover:text-white lg:px-5 lg:py-3 lg:text-[13px] lg:tracking-[0.04em]'
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
