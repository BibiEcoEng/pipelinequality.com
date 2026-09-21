'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

export function IntroSection() {
  const t = useTranslations('intro');

  return (
    <section className='bg-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20'>
        <div>
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className='text-3xl font-bold tracking-tight text-navy sm:text-[2rem]'>
            {t('headline')}
          </h2>
          <div className='mt-5 space-y-4 text-[15px] leading-relaxed text-steel-gray'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
        </div>
        <div className='relative aspect-[4/3] overflow-hidden'>
          <img
            src='/client/intro-inspection.jpg'
            alt={t('imageAlt')}
            className='absolute inset-0 h-full w-full object-cover object-center'
          />
          <div className='absolute right-0 bottom-0 left-0 bg-navy/85 px-4 py-3 text-[11px] font-medium tracking-[0.1em] text-white uppercase'>
            {t('caption')}
          </div>
        </div>
      </div>
    </section>
  );
}
