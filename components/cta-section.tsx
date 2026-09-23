'use client';

import { useTranslations } from 'next-intl';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className='relative overflow-hidden border-t border-navy/15 bg-white text-navy'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-navy/70'>{t('description')}</p>

          <div className='mt-6 flex flex-wrap items-center gap-x-6 gap-y-3'>
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
      </div>
    </section>
  );
}
