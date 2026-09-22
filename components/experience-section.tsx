'use client';

import { useTranslations } from 'next-intl';

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section id='experience' className='relative overflow-hidden bg-navy text-white'>
      <div className='absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-navy/80 to-transparent lg:block' />

      <div className='pq-shell relative py-20 lg:py-28'>
        <div className='max-w-2xl'>
          <p className='pq-index'>06 — {t('label')}</p>
          <h2 className='mt-4 text-white'>{t('title')}</h2>
          <p className='mt-6 pq-subtitle text-white/80'>
            {t('paragraph1')}
          </p>
          <p className='mt-4 text-[14px] leading-relaxed text-white/55'>
            {t('paragraph2')}
          </p>
        </div>

        <div className='mt-14 grid gap-px bg-white/15 sm:grid-cols-2'>
          <div className='bg-navy p-7 sm:p-8'>
            <p className='text-[11px] font-bold tracking-[0.16em] text-accent uppercase'>
              {t('offshoreTitle')}
            </p>
            <p className='mt-4 text-[14px] leading-relaxed text-white/70'>
              {t('offshoreText')}
            </p>
          </div>
          <div className='bg-navy p-7 sm:p-8'>
            <p className='text-[11px] font-bold tracking-[0.16em] text-accent uppercase'>
              {t('industrialTitle')}
            </p>
            <p className='mt-4 text-[14px] leading-relaxed text-white/70'>
              {t('industrialText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
