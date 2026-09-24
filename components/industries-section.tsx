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
              className='grid items-center gap-5 border-b border-navy/10 py-6 sm:gap-6 lg:grid-cols-2 lg:gap-10 lg:py-6'
            >
              {/* Left text — unchanged from previous industries layout */}
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

              {/* Image frame only — same editorial treatment as What We Offer */}
              <div className='pq-service-visual pq-service-visual--landscape w-full'>
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
