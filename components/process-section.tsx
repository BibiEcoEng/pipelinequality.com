'use client';

import { useLocale, useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

type Step = {
  id: string;
  title: string;
  text: string;
};

export function ProcessSection() {
  const t = useTranslations('workProcess');
  const locale = useLocale();
  const steps = t.raw('steps') as Step[];

  return (
    <section id='how-we-work' className='border-t border-navy/15 bg-white'>
      <div className='pq-shell pq-section'>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='max-w-3xl text-navy lg:max-w-5xl'>{t('title')}</h2>
        <div className='mt-6 grid gap-6 border-t border-navy/15 pt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5'>
          {steps.map((step, index) => (
            <div key={step.id} className='min-w-0'>
              <div className='flex items-baseline gap-2'>
                <h3 className='min-w-0 text-navy'>{step.title}</h3>
                {index < steps.length - 1 && (
                  <span
                    className='hidden shrink-0 text-sm leading-none text-navy/30 xl:inline'
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </div>
              <p
                lang={locale}
                className='mt-2 break-words hyphens-auto pq-subtitle text-navy/70'
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
