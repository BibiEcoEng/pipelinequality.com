'use client';

import { useTranslations } from 'next-intl';

type ServiceBlock = {
  title: string;
  items: string[];
};

const serviceImages = [
  '/client/service-engineering.jpg?v=5',
  '/client/service-welding.jpg?v=5',
  '/client/service-docs-yard.jpg?v=7',
  '/client/service-project.jpg?v=6',
];

export function ServicesOverview() {
  const t = useTranslations('services');
  const blocks = t.raw('blocks') as ServiceBlock[];

  return (
    <section id='services' className='bg-white text-navy'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl'>
          <p className='pq-index'>{t('keyAreasTitle')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          {t('description') ? (
            <p className='mt-4 pq-subtitle text-navy/70'>{t('description')}</p>
          ) : null}
        </div>

        <div className='mt-8 space-y-0 border-t border-navy/10'>
          {blocks.map((service, index) => (
            <article
              key={service.title}
              className='grid items-center gap-6 border-b border-navy/10 py-7 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-8'
            >
              <div className='min-w-0'>
                <h3 className='font-sans text-[1.05rem] font-semibold tracking-[-0.02em] text-navy'>
                  {service.title}
                </h3>
                <ul className='mt-3 space-y-1.5'>
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className='pq-subtitle text-navy/75 before:mr-2 before:text-accent before:content-["▸"]'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='relative w-full max-w-sm overflow-hidden bg-light-gray sm:max-w-md lg:max-w-none lg:justify-self-end'>
                <div className='aspect-[16/10] max-h-56 w-full sm:max-h-64'>
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <div
                  className='pointer-events-none absolute top-0 right-0 h-8 w-8 border-t-2 border-r-2 border-accent'
                  aria-hidden
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
