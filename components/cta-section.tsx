'use client';

import { useTranslations } from 'next-intl';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className='relative overflow-hidden bg-accent'>
      <div className='pq-shell grid gap-10 py-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:py-20'>
        <div>
          <p className='text-[11px] font-bold tracking-[0.18em] text-white/70 uppercase'>
            {t('label')}
          </p>
          <h2 className='mt-4 max-w-3xl text-white'>{t('title')}</h2>
          <p className='mt-5 max-w-2xl pq-subtitle text-white/80'>
            {t('description')}
          </p>
        </div>
        <div className='flex flex-col gap-5 lg:items-end'>
          <a
            href='#contact'
            className='inline-flex items-center bg-navy px-6 py-4 text-[11px] font-bold tracking-[0.14em] text-white uppercase transition hover:bg-navy'
          >
            {t('button1')}
          </a>
          <a href='#network' className='pq-btn-ghost text-white'>
            {t('button3')}
          </a>
        </div>
      </div>
    </section>
  );
}
