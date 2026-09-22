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
      <div className='pq-shell py-20 lg:py-28'>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='text-3xl font-semibold tracking-tight text-navy sm:text-[2rem]'>
          {t('title')}
        </h2>
        <div className='mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8'>
          {steps.map((step, index) => (
            <div key={step.id} className='relative min-w-0'>
              <div className='text-[12px] font-bold tracking-[0.14em] text-brand'>
                {step.id}
              </div>
              <div className='mt-3 flex items-center'>
                <h3 className='shrink-0 text-2xl leading-none font-semibold tracking-tight text-navy'>
                  {step.title}
                </h3>
                {index < steps.length - 1 && (
                  <span
                    className='hidden flex-1 -mr-8 items-center justify-center text-sm leading-none text-brand/40 lg:flex'
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </div>
              <p className='mt-3 text-[13px] leading-relaxed text-steel-gray'>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
