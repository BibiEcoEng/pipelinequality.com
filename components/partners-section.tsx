'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

export function PartnersSection() {
  const t = useTranslations('partners');

  return (
    <section id='partners' className='bg-white'>
      <div className='pq-shell pq-section'>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='max-w-3xl text-navy'>{t('title')}</h2>
        <p className='mt-5 max-w-2xl pq-subtitle text-navy/70'>
          {t('paragraph1')}
        </p>
        <p className='mt-4 max-w-2xl pq-subtitle text-navy/70'>
          {t('paragraph2')}
        </p>
        <div className='mt-8'>
          <a
            href='mailto:info@pipelinequality.com'
            className='inline-flex items-center justify-center border border-navy/15 bg-white px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-navy uppercase transition hover:border-navy/30'
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
