'use client';

import { useTranslations } from 'next-intl';

export function SmartQAQCSection() {
  const t = useTranslations('smartQAQC');

  return (
    <section id='bw-digit' className='border-t border-navy/15 bg-white'>
      <div className='pq-shell pq-section grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10'>
        <div className='min-w-0 max-w-xl self-center'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-navy/70'>{t('description')}</p>
          <div className='mt-6'>
            <a
              href='https://www.bwdigit.com'
              target='_blank'
              rel='noreferrer'
              className='pq-btn !gap-2 !px-3.5 !py-2.5 text-[10px] tracking-[0.12em] lg:!gap-[0.85rem] lg:!px-[1.35rem] lg:!py-4 lg:text-[11px] lg:tracking-[0.14em]'
            >
              {t('cta')}
            </a>
          </div>
        </div>

        <div className='flex min-w-0 w-full items-center justify-center self-center'>
          <div className='pq-service-visual pq-service-visual--landscape w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-[26rem]'>
            <div className='pq-service-visual__glow' aria-hidden />
            <div className='pq-service-visual__back' aria-hidden />
            <div className='pq-service-visual__frame'>
              <div className='pq-service-visual__media'>
                <img
                  src='/client/bw-digit.jpg?v=3'
                  alt={t('docsAlt')}
                  width={1536}
                  height={1024}
                  className='pq-service-visual__img is-static is-active is-bw-digit'
                />
                <div className='pq-service-visual__veil' aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
