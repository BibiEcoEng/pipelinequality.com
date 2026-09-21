'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

type Group = {
  title: string;
  items: string[];
};

export function StandardsSection() {
  const t = useTranslations('standards');
  const groups = t.raw('groups') as Group[];

  return (
    <section id='standards' className='border-y border-line bg-white'>
      <div className='mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20'>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-[2rem]'>
          {t('title')}
        </h2>
        <p className='mt-4 max-w-2xl text-[15px] leading-relaxed text-steel-gray'>
          {t('description')}
        </p>
        <div className='mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {groups.map((group, index) => (
            <div
              key={group.title}
              className={`bg-light-gray p-5 ${
                index === groups.length - 1
                  ? 'sm:col-span-2 lg:col-span-3 xl:col-span-2'
                  : ''
              }`}
            >
              <p className='text-[11px] font-semibold tracking-[0.14em] text-brand uppercase'>
                {group.title}
              </p>
              <ul className='mt-3 space-y-1.5'>
                {group.items.map((item) => (
                  <li key={item} className='text-[13px] font-medium text-navy'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className='mt-6 max-w-3xl text-[13px] leading-relaxed text-steel-gray'>
          {t('scopeNote')}
        </p>
      </div>
    </section>
  );
}
