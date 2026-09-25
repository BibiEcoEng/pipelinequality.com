'use client';

import { useTranslations } from 'next-intl';

export function IntroSection() {
  const t = useTranslations('intro');

  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='pq-shell pq-section'>
        <div className='max-w-5xl text-left lg:max-w-none'>
          <h2 className='text-navy'>{t('headline')}</h2>
          <div className='mt-5 max-w-5xl space-y-4 text-[1.0625rem] leading-[1.7] font-normal text-navy/70 lg:mt-6 lg:max-w-none lg:text-[1.125rem] lg:leading-[1.75]'>
            <p className='max-w-none'>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
