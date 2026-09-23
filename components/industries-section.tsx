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
  '/client/industry-epc.jpg?v=6',
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

        <div className='mt-8 space-y-0 border-t border-navy/15'>
          {items.map((item, index) => {
            const isEpc = index === 5;
            return (
              <article key={item.title} className='border-b border-navy/15 py-6'>
                <h3 className='font-sans font-semibold text-navy'>{item.title}</h3>
                <ul className='mt-3 space-y-1.5'>
                  {item.items.map((entry) => (
                    <li
                      key={entry}
                      className='font-sans text-[0.9375rem] leading-[1.65] font-normal tracking-normal text-navy/70'
                    >
                      {entry}
                    </li>
                  ))}
                </ul>

                <div
                  className={`relative mt-5 w-full max-w-3xl overflow-hidden border border-navy/15 bg-white ${
                    isEpc
                      ? 'aspect-[4/5] sm:aspect-[5/6]'
                      : 'aspect-[16/10] sm:aspect-[16/9]'
                  }`}
                >
                  <img
                    src={industryImages[index]}
                    alt={item.title}
                    className='absolute inset-0 h-full w-full object-contain object-center'
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
