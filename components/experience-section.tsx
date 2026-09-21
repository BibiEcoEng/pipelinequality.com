'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section id='experience' className='bg-light-gray'>
      <div className='mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20'>
        <div className='grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16'>
          <div>
            <SectionLabel>{t('label')}</SectionLabel>
            <h2 className='text-3xl font-bold tracking-tight text-navy sm:text-[2rem]'>
              {t('title')}
            </h2>
            <p className='mt-5 text-[15px] leading-relaxed text-steel-gray'>
              {t('paragraph1')}
            </p>
            <p className='mt-4 text-[14px] leading-relaxed text-steel-gray'>
              {t('paragraph2')}
            </p>
            <p className='mt-4 text-[13px] leading-relaxed text-steel-gray'>
              {t('paragraph3')}{' '}
              <span className='font-medium text-navy'>{t('companies')}</span>
            </p>
          </div>
          <div className='space-y-6 self-center border-l border-line pl-6 lg:pl-10'>
            <div>
              <h3 className='text-[12px] font-semibold tracking-[0.14em] text-brand uppercase'>
                {t('offshoreTitle')}
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-steel-gray'>
                {t('offshoreText')}
              </p>
            </div>
            <div>
              <h3 className='text-[12px] font-semibold tracking-[0.14em] text-brand uppercase'>
                {t('industrialTitle')}
              </h3>
              <p className='mt-2 text-[14px] leading-relaxed text-steel-gray'>
                {t('industrialText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
