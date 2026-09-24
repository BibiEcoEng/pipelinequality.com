'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

type ServiceBlock = {
  title: string;
  items: string[];
};

const serviceImages = [
  { src: '/client/service-engineering.jpg?v=9' },
  { src: '/client/service-welding.jpg?v=6' },
  { src: '/client/service-docs-yard.jpg?v=7' },
  {
    src: '/client/service-project.jpg?v=7',
    mobileSrc: '/client/service-project-mobile.jpg?v=1',
  },
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
          className={`mt-6 grid items-start gap-8 lg:mt-8 lg:grid-cols-2 lg:gap-14 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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

          {/* Right: editorial image stage */}
          <div className='relative mx-auto w-full max-w-[18.5rem] sm:max-w-[22rem] md:max-w-[26rem] lg:mx-0 lg:max-w-none lg:sticky lg:top-28'>
            <div className='pq-service-visual'>
              <div className='pq-service-visual__glow' aria-hidden />
              <div className='pq-service-visual__back' aria-hidden />

              <div className='pq-service-visual__frame'>
                <div className='pq-service-visual__media'>
                  {serviceImages.map((image, index) => (
                    <picture key={image.src}>
                      {image.mobileSrc ? (
                        <source
                          media='(min-width: 1024px)'
                          srcSet={image.src}
                        />
                      ) : null}
                      <img
                        src={image.mobileSrc ?? image.src}
                        alt={blocks[index]?.title ?? ''}
                        className={`pq-service-visual__img${
                          active === index ? ' is-active' : ''
                        }`}
                      />
                    </picture>
                  ))}
                  <div className='pq-service-visual__veil' aria-hidden />
                  <div className='pq-service-visual__mark' aria-hidden>
                    <span />
                    <span />
                  </div>
                </div>

                <div className='pq-service-visual__caption'>
                  <p key={current?.title} className='pq-service-visual__title pq-fade-up'>
                    {current?.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
