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
  '/client/industry-construction.jpg?v=4',
  '/client/industry-maintenance.jpg?v=4',
];

export function IndustriesSection() {
  const t = useTranslations('industries');
  const items = t.raw('sectors') as Industry[];

  return (
    <section id='industries' className='bg-white'>
      <div className='pq-shell pq-section'>
        <p className='pq-index font-sans'>{t('label')}</p>
        <h2 className='mt-3 font-sans font-semibold text-navy'>{t('title')}</h2>

        <div className='mt-8 space-y-0 border-t border-navy/10'>
          {items.map((item, index) => (
            <article
              key={item.title}
              className='grid items-start gap-5 border-b border-navy/10 py-6 sm:gap-6 lg:grid-cols-2 lg:gap-10 lg:py-6'
            >
              <div>
                <h3 className='font-sans font-semibold text-navy'>{item.title}</h3>
                <ul className='mt-3 space-y-1.5'>
                  {item.items.map((entry) => (
                    <li
                      key={entry}
                      className='font-sans text-[0.9375rem] leading-[1.65] font-normal tracking-normal text-navy/75'
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='relative aspect-[16/10] w-full overflow-hidden bg-light-gray sm:aspect-[16/9]'>
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
