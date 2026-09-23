'use client';

import { useTranslations } from 'next-intl';

export function PhilosophySection() {
  const t = useTranslations('philosophy');
  const points = [t('paragraph1'), t('paragraph2'), t('paragraph3')];

  return (
    <section className='bg-light-gray text-navy'>
      <div className='pq-shell pq-section'>
        <div className='grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16'>
          <div>
            <p className='pq-index'>{t('label')}</p>
            <h2 className='mt-3 max-w-2xl text-navy'>{t('title')}</h2>

            <ul className='mt-7 space-y-5 border-t border-navy/10 pt-7 lg:mt-8 lg:pt-8'>
              {points.map((point) => (
                <li
                  key={point}
                  className='grid grid-cols-[auto_1fr] gap-4 pq-subtitle text-navy/70'
                >
                  <span
                    className='mt-2.5 h-px w-6 shrink-0 bg-accent'
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='border-t border-accent pt-6 lg:border-t-0 lg:border-l lg:border-accent lg:pt-0 lg:pl-10'>
            <p className='font-sans text-[1.15rem] leading-snug font-semibold tracking-[-0.02em] text-navy uppercase sm:text-[1.25rem] lg:whitespace-nowrap'>
              {t('principle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
