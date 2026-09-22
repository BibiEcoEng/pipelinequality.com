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
      <div className='pq-shell py-20 lg:py-28'>
        <div>
            <p className='pq-index'>05 — {t('label')}</p>
            <h2 className='mt-4 text-navy'>{t('title')}</h2>
          </div>
        </div>

        <div className='mt-14 space-y-0 border-t border-navy/10'>
          {items.map((item, index) => (
            <article
              key={item.title}
              className='group grid items-start gap-6 border-b border-navy/10 py-8 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12'
            >
              <div className='flex gap-4 sm:gap-6'>
                <p className='pq-display shrink-0 text-[2rem] leading-none text-navy/10 transition-colors duration-400 group-hover:text-accent/40 sm:text-[2.25rem]'>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className='min-w-0 flex-1'>
                  <h3 className='text-navy'>{item.title}</h3>
                  <ul className='mt-4 space-y-2'>
                    {item.items.map((entry) => (
                      <li
                        key={entry}
                        className='pq-subtitle text-steel-gray'
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='relative aspect-[16/10] w-full max-w-full justify-self-stretch overflow-hidden bg-light-gray'>
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
