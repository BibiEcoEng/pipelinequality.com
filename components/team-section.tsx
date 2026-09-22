'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

export function TeamSection() {
  const t = useTranslations('team');
  const roles = t.raw('roles') as string[];

  return (
    <section id='network' className='bg-white'>
      <div className='pq-shell pq-section grid items-start lg:grid-cols-[1.05fr_0.95fr] lg:gap-12'>
        <div>
          <SectionLabel index='04'>{t('label')}</SectionLabel>
          <h2 className='text-navy'>{t('title')}</h2>
          <p className='mt-5 max-w-xl pq-subtitle text-steel-gray'>
            {t('paragraph1')}
          </p>
          <div className='relative mt-8 aspect-[4/3] w-full overflow-hidden bg-light-gray'>
            <img
              src='/client/team-network.jpg'
              alt={t('imageAlt')}
              className='absolute inset-0 h-full w-full object-cover object-center'
            />
          </div>
        </div>
        <div className='mt-10 lg:mt-0'>
          <p className='pq-index mb-3'>{t('networkLabel')}</p>
          <ul className='divide-y divide-line border-y border-line'>
            {roles.map((role) => (
              <li
                key={role}
                className='flex items-center gap-3 py-2 text-[13px] font-semibold text-navy'
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
