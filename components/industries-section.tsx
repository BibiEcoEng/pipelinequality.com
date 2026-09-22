'use client';

import { useTranslations } from 'next-intl';

type Industry = {
  title: string;
  items: string[];
};

const industryImages = [
  '/client/industry-offshore.jpg?v=3',
  '/client/industry-pipeline.jpg?v=3',
  '/client/industry-oilgas.jpg?v=4',
  '/client/industry-chemical.jpg?v=3',
  '/client/industry-energy.jpg?v=3',
  '/client/industry-epc.jpg?v=4',
  '/client/industry-construction.jpg?v=3',
  '/client/industry-maintenance.jpg?v=3',
];

export function IndustriesSection() {
  const t = useTranslations('industries');
  const items = t.raw('sectors') as Industry[];

  return (
    <section id='industries' className='bg-white'>
      <div className='pq-shell py-14 sm:py-16 lg:py-18'>
        <p className='pq-index'>06 — {t('label')}</p>
        <h2 className='mt-4 text-navy'>{t('title')}</h2>

        <div className='mt-12 space-y-0 border-t border-navy/10'>
          {items.map((item, index) => (
            <article
              key={item.title}
              className='grid items-start gap-6 border-b border-navy/10 py-8 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12'
            >
              <div>
                <p className='pq-index text-accent/80'>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className='mt-2 text-navy'>{item.title}</h3>
                <ul className='mt-4 space-y-2'>
                  {item.items.map((entry) => (
                    <li key={entry} className='pq-subtitle text-steel-gray'>
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='relative aspect-[16/9] w-full overflow-hidden bg-light-gray lg:aspect-[16/10]'>
                <img
                  src={industryImages[index]}
                  alt={item.title}
                  className='absolute inset-0 h-full w-full object-cover object-center'
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
