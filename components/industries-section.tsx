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
        <p className='pq-index'>{t('label')}</p>
        <h2 className='mt-3 text-navy'>{t('title')}</h2>

        <div className='mt-8 space-y-0 border-t border-navy/10'>
          {items.map((item, index) => (
            <article
              key={item.title}
              className='group grid items-center gap-6 border-b border-navy/10 py-7 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-8'
            >
              <div className='min-w-0'>
                <div className='flex items-baseline gap-4'>
                  <span className='font-sans text-[11px] font-semibold tracking-[0.18em] text-accent'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='font-sans text-[1.05rem] font-semibold tracking-[-0.02em] text-navy'>
                    {item.title}
                  </h3>
                </div>
                <ul className='mt-3 space-y-1.5 sm:pl-[2.75rem]'>
                  {item.items.map((entry) => (
                    <li
                      key={entry}
                      className='pq-subtitle text-navy/70 before:mr-2 before:text-accent before:content-["▸"]'
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='pq-service-visual pq-service-visual--landscape w-full max-w-xl lg:max-w-none lg:justify-self-end'>
                <div className='pq-service-visual__glow' aria-hidden />
                <div className='pq-service-visual__back' aria-hidden />

                <div className='pq-service-visual__frame'>
                  <div className='pq-service-visual__media'>
                    <img
                      src={industryImages[index]}
                      alt={item.title}
                      className='pq-service-visual__img is-static is-active'
                    />
                    <div className='pq-service-visual__veil' aria-hidden />
                    <div className='pq-service-visual__mark' aria-hidden>
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className='pq-service-visual__caption'>
                    <p className='pq-service-visual__index'>
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(items.length).padStart(2, '0')}
                    </p>
                    <p className='pq-service-visual__title'>{item.title}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
