'use client';

import { useTranslations } from 'next-intl';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className='relative overflow-hidden border-t border-navy/15 bg-white text-navy'>
      <div className='pq-shell pq-section grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start lg:gap-10'>
        <div>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 max-w-3xl text-navy'>{t('title')}</h2>
          <p className='mt-4 max-w-2xl pq-subtitle text-navy/70'>
            {t('description')}
          </p>
        </div>
        <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:mt-8 lg:flex-col lg:items-start'>
          <a href='#contact' className='pq-btn'>
            {t('button1')}
          </a>
          <a href='#contact' className='pq-btn-ghost text-navy'>
            {t('button2')}
          </a>
          <a href='#network' className='pq-btn-ghost text-navy'>
            {t('button3')}
          </a>
        </div>
      </div>
    </section>
  );
}
