'use client';

import { useTranslations } from 'next-intl';

type Industry = {
  title: string;
  items: string[];
};

export function IndustriesSection() {
  const t = useTranslations('industries');
  const items = t.raw('sectors') as Industry[];

  return (
    <section id='industries' className='bg-white'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
        </div>

        <div className='mt-8 border-t border-line'>
          {items.map((item) => (
            <article
              key={item.title}
              className='grid gap-4 border-b border-line py-7 lg:grid-cols-[minmax(12rem,0.9fr)_1.6fr] lg:gap-10 lg:py-8'
            >
              <h3 className='font-sans text-[1.05rem] font-semibold leading-snug tracking-[-0.015em] text-navy lg:pt-0.5'>
                {item.title}
              </h3>
              <ul className='grid gap-x-8 gap-y-0 sm:grid-cols-2'>
                {item.items.map((entry) => (
                  <li
                    key={entry}
                    className='border-b border-line/80 py-2.5 font-sans text-[0.9375rem] font-normal leading-snug text-navy/75 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0'
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
