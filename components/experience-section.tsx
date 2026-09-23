'use client';

import { useTranslations } from 'next-intl';

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section id='experience' className='bg-white text-navy'>
      <div className='pq-shell pq-section'>
        <div className='max-w-2xl'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-navy/70'>{t('paragraph1')}</p>
          <p className='mt-3 pq-subtitle text-navy/70'>{t('paragraph2')}</p>
        </div>

        <div className='mt-8 grid gap-px border border-navy/15 bg-navy/15 sm:grid-cols-2'>
          <div className='bg-white p-6 sm:p-7'>
            <p className='text-[11px] font-semibold tracking-[0.16em] text-accent uppercase'>
              {t('offshoreTitle')}
            </p>
            <p className='mt-3 pq-subtitle text-navy/70'>{t('offshoreText')}</p>
          </div>
          <div className='bg-white p-6 sm:p-7'>
            <p className='text-[11px] font-semibold tracking-[0.16em] text-accent uppercase'>
              {t('industrialTitle')}
            </p>
            <p className='mt-3 pq-subtitle text-navy/70'>
              {t('industrialText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
