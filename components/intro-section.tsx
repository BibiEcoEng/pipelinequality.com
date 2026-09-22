'use client';

import { useTranslations } from 'next-intl';

export function IntroSection() {
  const t = useTranslations('intro');

  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='pq-shell pq-section grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12'>
        <div className='order-2 lg:order-1'>
          <div className='relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6] lg:aspect-[4/5]'>
            <img
              src='/client/intro-inspection.jpg'
              alt={t('imageAlt')}
              className='absolute inset-0 h-full w-full object-cover object-center'
            />
          </div>
        </div>

        <div className='order-1 lg:order-2 lg:pt-2'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 max-w-xl text-navy'>{t('headline')}</h2>
          <div className='mt-5 max-w-md space-y-4 pq-subtitle text-steel-gray'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
