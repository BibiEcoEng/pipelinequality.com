'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

type Step = {
  id: string;
  title: string;
  text: string;
};

export function ProcessSection() {
  const t = useTranslations('workProcess');
  const steps = t.raw('steps') as Step[];

  return (
    <section id='how-we-work' className='bg-white'>
      <div className='pq-shell pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-16'>
        <SectionLabel index='09'>{t('label')}</SectionLabel>
        <h2 className='text-navy'>{t('title')}</h2>
        <div className='mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5'>
          {steps.map((step, index) => (
            <div key={step.id} className='relative min-w-0'>
              <div className='pq-index'>{step.id}</div>
              <div className='mt-2 flex items-center'>
                <h3 className='shrink-0 text-navy'>{step.title}</h3>
                {index < steps.length - 1 && (
                  <span
                    className='hidden flex-1 -mr-8 items-center justify-center text-sm leading-none text-brand/40 lg:flex'
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </div>
              <p className='mt-2 pq-subtitle text-steel-gray'>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
