'use client';

import { useTranslations } from 'next-intl';
import { SectionLabel } from '@/components/section-label';

type Block = {
  title: string;
  items: string[];
};

export function DigitalQualitySection() {
  const t = useTranslations('digitalQuality');
  const blocks = t.raw('blocks') as Block[];

  return (
    <section id='digital-quality' className='bg-white'>
      <div className='mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20'>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-[2rem]'>
          {t('title')}
        </h2>
        <p className='mt-4 max-w-2xl text-[15px] leading-relaxed text-steel-gray'>
          {t('description')}
        </p>
        <div className='mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {blocks.map((block) => (
            <div key={block.title} className='border-t border-line pt-5'>
              <h3 className='text-xl leading-snug font-semibold text-navy'>
                {block.title}
              </h3>
              <ul className='mt-3 space-y-1.5'>
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-steel-gray before:mr-1.5 before:text-brand before:content-['▸']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
