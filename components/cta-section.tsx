'use client';

import { useTranslations } from 'next-intl';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className='relative overflow-hidden border-t border-white/10 bg-navy'>
      <div className='pq-shell grid gap-8 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-10 lg:py-20'>
        <div>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 max-w-3xl text-white'>{t('title')}</h2>
          <p className='mt-4 max-w-2xl pq-subtitle text-white/80'>
            {t('description')}
          </p>
        </div>
        <div className='flex flex-col gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-end'>
          <a href='#contact' className='pq-btn'>
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
