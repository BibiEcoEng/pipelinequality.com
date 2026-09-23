'use client';

import { useTranslations } from 'next-intl';

type Industry = {
  title: string;
  items: string[];
};

const industryImages = [
  {
    src: '/client/industry-offshore.jpg?v=5',
    // landscape monopile
    frame: 'aspect-[16/10] sm:aspect-[16/9]',
  },
  {
    src: '/client/industry-pipeline.jpg?v=5',
    // wide pipe interior
    frame: 'aspect-[16/10] sm:aspect-[16/9]',
  },
  {
    src: '/client/industry-oilgas.jpg?v=5',
    // portrait process module — taller frame so it is not cropped
    frame: 'aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]',
  },
  {
    src: '/client/industry-chemical.jpg?v=5',
    // portrait vessel lift
    frame: 'aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]',
  },
  {
    src: '/client/industry-energy.jpg?v=3',
    frame: 'aspect-[16/10] sm:aspect-[16/9]',
  },
  {
    src: '/client/industry-epc.jpg?v=5',
    // portrait fabrication
    frame: 'aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]',
  },
  {
    src: '/client/industry-construction.jpg?v=4',
    frame: 'aspect-[16/10] sm:aspect-[16/9]',
  },
  {
    src: '/client/industry-maintenance.jpg?v=4',
    frame: 'aspect-[16/10] sm:aspect-[16/9]',
  },
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
          {items.map((item, index) => {
            const media = industryImages[index];
            return (
              <article
                key={item.title}
                className='grid items-center gap-5 border-b border-navy/10 py-6 sm:gap-6 lg:grid-cols-2 lg:gap-10 lg:py-7'
              >
                <div>
                  <h3 className='text-navy'>{item.title}</h3>
                  <ul className='mt-3 space-y-1.5'>
                    {item.items.map((entry) => (
                      <li key={entry} className='pq-subtitle text-steel-gray'>
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative w-full overflow-hidden bg-light-gray ${media.frame}`}
                >
                  <img
                    src={media.src}
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
