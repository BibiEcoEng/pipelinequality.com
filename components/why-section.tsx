'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

type Reason = {
  title: string;
  description: string;
};

export function WhySection() {
  const t = useTranslations('why');
  const reasons = t.raw('reasons') as Reason[];

  return (
    <section className='bg-white' id='why'>
      <div className='pq-shell pq-section'>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='text-navy'>{t('title')}</h2>
        <div className='mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2 xl:grid-cols-3'>
          {reasons.map((item) => (
            <div key={item.title} className='border-t border-line pt-4'>
              <h3 className='text-navy'>{item.title}</h3>
              <p className='mt-2 pq-subtitle text-steel-gray'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
