'use client';

import { useTranslations } from 'next-intl';

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section id='experience' className='bg-navy text-white'>
      <div className='pq-shell pq-section'>
        <div className='mx-auto w-full max-w-4xl'>
          <p className='pq-index font-sans'>{t('label')}</p>
          <h2 className='mt-3 font-sans font-semibold text-white'>
            {t('title')}
          </h2>
          <p className='mt-4 font-sans text-[0.9375rem] leading-[1.65] font-normal text-white/80'>
            {t('intro')}
          </p>

          <div className='mt-8 space-y-8 border-t border-white/15 pt-8'>
            <div>
              <p className='pq-index font-sans'>{t('referenceLabel')}</p>
              <h3 className='mt-3 font-sans font-semibold text-white'>
                {t('referenceTitle')}
              </h3>
              <p className='mt-3 font-sans text-[0.9375rem] leading-[1.65] font-normal text-white/80'>
                {t('referenceText')}
              </p>
            </div>

            <div>
              <p className='pq-index font-sans'>{t('scopeTitle')}</p>
              <p className='mt-3 font-sans text-[0.9375rem] leading-[1.65] font-normal text-white/80'>
                {t('scopeText')}
              </p>
            </div>

            <div>
              <p className='pq-index font-sans'>{t('trackTitle')}</p>
              <p className='mt-3 font-sans text-[0.9375rem] leading-[1.65] font-normal text-white/80'>
                {t('trackText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
