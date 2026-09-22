'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type ServiceBlock = {
  title: string;
  summary: string;
  items: string[];
};

const serviceImages = [
  '/client/service-engineering.jpg',
  '/client/service-welding.jpg',
  '/client/service-docs-yard.jpg',
  '/client/service-project.jpg',
];

export function ServicesOverview() {
  const [active, setActive] = useState(0);
  const t = useTranslations('services');
  const blocks = t.raw('blocks') as ServiceBlock[];
  const current = blocks[active];

  return (
    <section id='services' className='bg-navy text-white'>
      <div className='pq-shell py-20 lg:py-28'>
        <div>
          <p className='pq-index'>02 — {t('title')}</p>
          <h2 className='mt-4 max-w-3xl text-white'>{t('scopeTitle')}</h2>
        </div>

        <div className='relative mt-10 aspect-[21/9] overflow-hidden sm:mt-12 lg:aspect-[2.4/1]'>
          {serviceImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={blocks[index]?.title ?? ''}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                active === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div
            className='pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-navy/10'
            aria-hidden
          />
          <div className='absolute top-0 right-0 h-12 w-12 border-t-2 border-r-2 border-accent sm:h-14 sm:w-14' />
        </div>

        <div className='mt-6 grid gap-1 border-t border-white/25 sm:grid-cols-2 lg:grid-cols-4'>
          {blocks.map((service, index) => {
            const isActive = active === index;
            return (
              <button
                key={service.title}
                type='button'
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                className={`border-b border-white/25 px-0 py-4 text-left transition-colors duration-400 lg:border-b-0 lg:border-r lg:border-white/25 lg:px-4 lg:py-5 lg:last:border-r-0 ${
                  isActive ? 'text-white' : 'text-white/75 hover:text-white'
                }`}
              >
                <span
                  className={`block text-[11px] font-semibold tracking-[0.16em] ${
                    isActive ? 'text-accent' : 'text-white/70'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className='mt-1.5 block text-[1.05rem] leading-snug font-semibold tracking-[-0.015em]'>
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className='mt-6 grid gap-6 border-t border-white/25 pt-6'>
          <ul className='grid gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3'>
            {current?.items.map((item) => (
              <li
                key={item}
                className='text-[13px] leading-snug text-white before:mr-2 before:text-accent before:content-["▸"]'
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
