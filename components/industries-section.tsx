'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

type Industry = {
  title: string;
  items: string[];
};

const industryImages = [
  { src: '/client/industry-offshore.jpg', position: 'object-center' },
  { src: '/client/industry-pipeline.jpg', position: 'object-center' },
  { src: '/client/industry-oilgas.jpg', position: 'object-[center_68%]' },
  { src: '/client/industry-chemical.jpg', position: 'object-[center_42%]' },
  { src: '/client/industry-energy.jpg', position: 'object-center' },
  { src: '/client/industry-epc.jpg', position: 'object-[center_48%]' },
  { src: '/client/industry-construction.jpg', position: 'object-[center_30%]' },
  { src: '/client/industry-maintenance.jpg', position: 'object-[center_12%]' },
];

export function IndustriesSection() {
  const t = useTranslations('industries');
  const items = t.raw('sectors') as Industry[];

  return (
    <section id='industries' className='bg-white'>
      <div className='mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20'>
        <div className='max-w-2xl'>
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className='text-3xl font-bold tracking-tight text-navy sm:text-[2rem]'>
            {t('title')}
          </h2>
          <p className='mt-4 text-[15px] leading-relaxed text-steel-gray'>
            {t('intro')}
          </p>
        </div>
        <div className='mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
          {items.map((item, index) => (
            <article
              key={item.title}
              className='flex h-full flex-col overflow-hidden border border-line bg-light-gray'
            >
              <div className='relative aspect-[4/5] bg-navy'>
                <img
                  src={industryImages[index].src}
                  alt={item.title}
                  className={`absolute inset-0 h-full w-full object-cover ${industryImages[index].position}`}
                />
              </div>
              <div className='flex flex-1 flex-col p-5'>
                <h3 className='text-[15px] font-semibold text-navy'>
                  {item.title}
                </h3>
                <ul className='mt-3 space-y-1.5'>
                  {item.items.map((entry) => (
                    <li
                      key={entry}
                      className="text-[12px] leading-snug text-steel-gray before:mr-1.5 before:text-brand before:content-['▸']"
                    >
                      {entry}
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
