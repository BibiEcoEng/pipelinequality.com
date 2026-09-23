'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const current = blocks[active];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='services'
      ref={sectionRef}
      className='relative overflow-hidden bg-white text-navy'
    >
      <div
        className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent'
        aria-hidden
      />

      <div className='pq-shell pq-section'>
        <p
          className={`pq-index transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {t('keyAreasTitle')}
        </p>
        <h2 className='sr-only'>{t('title')}</h2>
        <div
          className={`mt-6 grid items-start gap-8 lg:mt-8 lg:grid-cols-[1fr_0.95fr] lg:gap-14 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Left: interactive service list */}
          <div className='min-w-0'>
            <div className='space-y-0 border-t border-navy/10'>
              {blocks.map((service, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={service.title}
                    type='button'
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    className={`group relative block w-full border-b border-navy/10 py-5 text-left transition-colors duration-500 ${
                      isActive ? 'bg-navy/[0.02]' : 'hover:bg-navy/[0.015]'
                    }`}
                  >
                    <span
                      className={`absolute top-0 bottom-0 left-0 w-[2px] origin-top bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'
                      }`}
                      aria-hidden
                    />

                    <div className='flex items-baseline gap-4 pl-4 sm:gap-5 sm:pl-5'>
                      <span
                        className={`font-sans text-[11px] font-semibold tracking-[0.18em] transition-colors duration-400 ${
                          isActive ? 'text-accent' : 'text-navy/35'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`block text-[1.05rem] leading-snug font-semibold tracking-[-0.02em] transition-colors duration-400 ${
                          isActive ? 'text-navy' : 'text-navy/55 group-hover:text-navy/80'
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className='overflow-hidden'>
                        <ul className='mt-3 space-y-1.5 pl-4 sm:pl-[3.25rem]'>
                          {service.items.map((item, itemIndex) => (
                            <li
                              key={item}
                              className={`pq-subtitle text-navy/70 before:mr-2 before:text-accent before:content-["▸"] transition-all duration-500 ${
                                isActive
                                  ? 'translate-x-0 opacity-100'
                                  : 'translate-x-2 opacity-0'
                              }`}
                              style={{
                                transitionDelay: isActive ? `${80 + itemIndex * 35}ms` : '0ms',
                              }}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: image stage */}
          <div className='relative lg:sticky lg:top-28'>
            <div className='relative overflow-hidden bg-[#0a2748] pq-panel-cut shadow-[0_24px_60px_-28px_rgba(1,42,96,0.35)]'>
              <div className='relative aspect-[5/4] w-full sm:aspect-[4/3] lg:aspect-[5/4]'>
                {serviceImages.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={blocks[index]?.title ?? ''}
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active === index
                        ? 'scale-100 opacity-100'
                        : 'scale-105 opacity-0'
                    }`}
                  />
                ))}
                <div
                  className='pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent'
                  aria-hidden
                />
                <div
                  className='pointer-events-none absolute top-0 right-0 h-10 w-10 border-t-2 border-r-2 border-accent'
                  aria-hidden
                />
              </div>

              <div className='absolute right-0 bottom-0 left-0 p-5 sm:p-6'>
                <p className='font-sans text-[11px] font-semibold tracking-[0.16em] text-accent uppercase'>
                  {String(active + 1).padStart(2, '0')} / {String(blocks.length).padStart(2, '0')}
                </p>
                <p
                  key={current?.title}
                  className='mt-1 max-w-sm text-[1.05rem] leading-snug font-semibold tracking-[-0.02em] text-white animate-[pqFadeUp_0.55s_cubic-bezier(0.16,1,0.3,1)_both]'
                >
                  {current?.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
