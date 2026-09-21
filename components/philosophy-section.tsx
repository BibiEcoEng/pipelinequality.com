'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

export function PhilosophySection() {
  const t = useTranslations('philosophy');

  return (
    <section className='border-y border-line bg-light-gray'>
      <div className='mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20'>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-[2rem]'>
          {t('title')}
        </h2>
        <div className='mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center'>
          <div className='space-y-4 text-[15px] leading-relaxed text-steel-gray'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
          <div className='border-l-[3px] border-accent bg-white px-6 py-8 lg:px-10'>
            <p className='text-[11px] font-semibold tracking-[0.18em] text-brand uppercase'>
              {t('principleLabel')}
            </p>
            <p className='mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl'>
              {t('principle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
