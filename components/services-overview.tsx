'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type ServiceBlock = {
  title: string;
  items: string[];
};

const serviceImages = [
  '/client/service-engineering.jpg?v=5',
  '/client/service-welding.jpg?v=5',
  '/client/service-docs-yard.jpg?v=5',
  '/client/service-project.jpg?v=5',
];

export function ServicesOverview() {
  const [active, setActive] = useState(0);
  const t = useTranslations('services');
  const blocks = t.raw('blocks') as ServiceBlock[];
  const current = blocks[active];

  return (
    <section id='services' className='bg-white text-navy'>
      <div className='pq-shell pq-section'>
        <div>
          <h2 className='max-w-3xl text-navy'>{t('title')}</h2>
        </div>

        <div className='relative mt-6 aspect-[16/9] w-full overflow-hidden border border-navy/15 bg-white sm:aspect-[2.1/1] lg:aspect-[2.2/1]'>
          {serviceImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={blocks[index]?.title ?? ''}
              className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                active === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className='absolute top-0 right-0 h-10 w-10 border-t-2 border-r-2 border-accent sm:h-12 sm:w-12' />
        </div>

        <div className='mt-5 grid gap-0 border-t border-navy/15 sm:grid-cols-2 lg:grid-cols-4'>
          {blocks.map((service, index) => {
            const isActive = active === index;
            return (
              <button
                key={service.title}
                type='button'
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                className={`border-b border-navy/15 px-0 py-3 text-left transition-colors duration-400 lg:border-b-0 lg:border-r lg:border-navy/15 lg:px-4 lg:py-4 lg:last:border-r-0 ${
                  isActive ? 'text-navy' : 'text-navy/70 hover:text-navy'
                }`}
              >
                <span className='block text-[0.95rem] leading-snug font-semibold tracking-[-0.015em]'>
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className='mt-4 border-t border-navy/15 pt-4'>
          <ul className='grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3'>
            {current?.items.map((item) => (
              <li
                key={item}
                className='text-[13px] leading-snug text-navy/70 before:mr-2 before:text-accent before:content-["▸"]'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
