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
      <div className='pq-shell pq-section'>
        <p className='pq-index'>06 — {t('label')}</p>
        <h2 className='mt-4 text-navy'>{t('title')}</h2>

        <div className='mt-8 space-y-0 border-t border-navy/10 lg:mt-8'>
          {items.map((item, index) => (
            <article
              key={item.title}
              className='grid items-center gap-5 border-b border-navy/10 py-6 sm:gap-6 lg:grid-cols-2 lg:gap-10 lg:py-5'
            >
              <div>
                <p className='pq-index text-accent/80'>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className='mt-1.5 text-navy'>{item.title}</h3>
                <ul className='mt-3 space-y-1.5'>
                  {item.items.map((entry) => (
                    <li key={entry} className='pq-subtitle text-steel-gray'>
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='relative aspect-[16/9] w-full overflow-hidden bg-light-gray lg:aspect-auto lg:h-[160px]'>
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
