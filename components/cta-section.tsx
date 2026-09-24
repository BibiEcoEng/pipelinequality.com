'use client';

import { useTranslations } from 'next-intl';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className='relative overflow-hidden border-t border-navy/15 bg-white text-navy'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl lg:max-w-5xl'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-navy/70'>{t('description')}</p>
        </div>

        <div className='mt-6 flex flex-col items-start gap-y-2.5 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-3'>
          <a
            href='#contact'
            className='pq-btn shrink-0 whitespace-nowrap !gap-2 !px-3.5 !py-2.5 text-[10px] tracking-[0.12em] lg:!gap-[0.85rem] lg:!px-[1.35rem] lg:!py-4 lg:text-[11px] lg:tracking-[0.14em]'
          >
            {t('button1')}
          </a>
          <a
            href='#contact'
            className='pq-btn-ghost shrink-0 whitespace-nowrap !py-2 text-[10px] tracking-[0.12em] text-navy lg:!py-4 lg:text-[11px] lg:tracking-[0.14em]'
          >
            {t('button2')}
          </a>
          <a
            href='#network'
            className='pq-btn-ghost shrink-0 whitespace-nowrap !py-2 text-[10px] tracking-[0.12em] text-navy lg:!py-4 lg:text-[11px] lg:tracking-[0.14em]'
          >
            {t('button3')}
          </a>
        </div>
      </div>
    </section>
  );
}
