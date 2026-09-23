'use client';

import { useTranslations } from 'next-intl';

export function IntroSection() {
  const t = useTranslations('intro');

  return (
    <section className='relative overflow-hidden border-b border-navy/15 bg-white'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
          <h2 className='text-navy'>{t('headline')}</h2>
          <div className='mt-5 space-y-4 pq-subtitle text-navy/70 lg:mt-6'>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
