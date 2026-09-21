'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

type IconName = 'engineering' | 'inspection' | 'docs' | 'project';

type ServiceBlock = {
  title: string;
  summary: string;
  items: string[];
  image: string;
  icon: IconName;
};

function TechnicalIcon({ name }: { name: IconName }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (name === 'engineering') {
    return (
      <svg {...common}>
        <path d='M4 19V5h10l6 6v8H4z' />
        <path d='M14 5v6h6' />
        <path d='M8 13h5M8 16h8' />
      </svg>
    );
  }
  if (name === 'inspection') {
    return (
      <svg {...common}>
        <circle cx='10' cy='10' r='5.5' />
        <path d='M14.5 14.5 20 20' />
        <path d='M8 10h4M10 8v4' />
      </svg>
    );
  }
  if (name === 'docs') {
    return (
      <svg {...common}>
        <path d='M7 3.5h7l4 4V20.5H7z' />
        <path d='M14 3.5V8h4' />
        <path d='M10 12h6M10 15h6M10 18h4' />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx='8' cy='8' r='2.4' />
      <circle cx='16' cy='8' r='2.4' />
      <circle cx='12' cy='16' r='2.4' />
      <path d='M9.8 9.5 11.2 14M14.2 9.5 12.8 14M10 8h4' />
    </svg>
  );
}

const serviceImages = [
  '/client/service-engineering.jpg',
  '/client/service-welding.jpg',
  '/client/service-docs.jpg',
  '/client/service-project.jpg',
];

const serviceIcons: IconName[] = [
  'engineering',
  'inspection',
  'docs',
  'project',
];

export function ServicesOverview() {
  const t = useTranslations('services');
  const blocks = t.raw('blocks') as ServiceBlock[];

  return (
    <section id='services' className='bg-light-gray'>
      <div className='mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20'>
        <div className='max-w-2xl'>
          <SectionLabel>{t('title')}</SectionLabel>
          <h2 className='text-3xl font-bold tracking-tight text-navy sm:text-[2rem]'>
            {t('scopeTitle')}
          </h2>
          <p className='mt-4 text-[15px] leading-relaxed text-steel-gray'>
            {t('description')}
          </p>
        </div>

        <div className='mt-10 space-y-5'>
          {blocks.map((service, index) => (
            <article
              key={service.title}
              className={`grid overflow-hidden border border-line bg-white lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className='relative min-h-[220px] lg:min-h-[280px]'>
                <img
                  src={serviceImages[index]}
                  alt={service.title}
                  className='absolute inset-0 h-full w-full object-cover'
                />
              </div>
              <div className='flex flex-col justify-center p-6 sm:p-8 lg:p-10'>
                <div className='mb-3 flex items-center gap-3'>
                  <span className='flex h-10 w-10 shrink-0 items-center justify-center text-navy'>
                    <TechnicalIcon name={serviceIcons[index]} />
                  </span>
                  <h3 className='text-lg font-semibold text-navy'>
                    {service.title}
                  </h3>
                </div>
                <p className='text-[14px] leading-relaxed text-steel-gray'>
                  {service.summary}
                </p>
                <ul className='mt-5 grid gap-2 sm:grid-cols-2'>
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] text-navy before:mr-1.5 before:text-brand before:content-['▸']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
