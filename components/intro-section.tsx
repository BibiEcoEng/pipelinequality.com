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
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent px-5 py-6' aria-hidden />
          </div>
        </div>

        <div className='order-1 lg:order-2 lg:pb-8'>
          <h2 className='max-w-xl text-navy'>{t('headline')}</h2>
          <div className='mt-5 max-w-md space-y-4 pq-subtitle text-steel-gray'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
