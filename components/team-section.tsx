'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

export function TeamSection() {
  const t = useTranslations('team');
  const roles = t.raw('roles') as string[];

  return (
    <section id='network' className='bg-white'>
      <div className='pq-shell grid py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-18'>
        <div>
          <SectionLabel index='04'>{t('label')}</SectionLabel>
          <h2 className='text-navy'>{t('title')}</h2>
          <p className='mt-5 pq-subtitle text-steel-gray'>
            {t('paragraph1')}
          </p>
        </div>
        <div className='mt-10 lg:mt-0'>
          <p className='pq-index mb-4'>{t('networkLabel')}</p>
          <ul className='divide-y divide-line border-y border-line'>
            {roles.map((role) => (
              <li
                key={role}
                className='flex items-center gap-3 py-2.5 text-[13px] font-semibold text-navy'
              >
                <span className='h-px w-4 bg-brand' />
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
