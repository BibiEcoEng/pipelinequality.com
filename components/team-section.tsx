'use client';

import { useTranslations } from 'next-intl';

export function TeamSection() {
  const t = useTranslations('team');
  const roles = t.raw('roles') as string[];

  return (
    <section id='network' className='bg-white'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-navy/70'>{t('paragraph1')}</p>
        </div>

        <div className='mt-8 border-t border-line pt-6'>
          <p className='pq-index'>{t('networkLabel')}</p>
          <ul className='mt-4 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3'>
            {roles.map((role) => (
              <li
                key={role}
                className='border-b border-line py-3 font-sans text-[0.9375rem] font-semibold leading-snug text-navy'
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
