'use client';

import { useTranslations } from 'next-intl';

export function IntroSection() {
  const t = useTranslations('intro');

  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='pq-shell grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16 lg:py-28'>
        <div className='order-2 lg:order-1'>
          <div className='relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]'>
            <img
              src='/client/intro-inspection.jpg'
              alt={t('imageAlt')}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent px-5 py-6'>
              <p className='text-[11px] font-semibold tracking-[0.16em] text-white/80 uppercase'>
                {t('caption')}
              </p>
            </div>
          </div>
        </div>

        <div className='order-1 lg:order-2 lg:pb-8'>
          <p className='pq-display text-[clamp(4rem,12vw,8rem)] text-navy/[0.07] select-none'>
            01
          </p>
          <h2 className='-mt-8 max-w-xl text-navy sm:-mt-12'>
            {t('headline')}
          </h2>
          <div className='mt-8 max-w-md space-y-5 border-l-2 border-accent pl-5 pq-subtitle text-steel-gray'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
          <p className='mt-8 max-w-sm text-[13px] font-semibold tracking-[0.04em] text-navy'>
            {t('tagline')}
          </p>
        </div>
      </div>
    </section>
  );
}
