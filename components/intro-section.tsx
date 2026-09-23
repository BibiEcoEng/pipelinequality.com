'use client';

import { useTranslations } from 'next-intl';

export function IntroSection() {
  const t = useTranslations('intro');

  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='pq-shell pq-section'>
        <div className='mx-auto max-w-3xl text-center lg:max-w-4xl'>
          <h2 className='text-navy'>{t('headline')}</h2>
          <div className='mx-auto mt-5 max-w-2xl space-y-4 pq-subtitle text-steel-gray lg:mt-6 lg:max-w-3xl'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
