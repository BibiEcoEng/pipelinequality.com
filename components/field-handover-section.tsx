'use client';

import { useTranslations } from 'next-intl';

type Stage = {
  id: string;
  title: string;
  text: string;
  items: string[];
};

export function FieldHandoverSection() {
  const t = useTranslations('fieldHandover');
  const stages = t.raw('stages') as Stage[];

  return (
    <section id='process' className='bg-navy text-white'>
      <div className='pq-shell py-20 lg:py-28'>
        <div className='max-w-2xl'>
          <p className='pq-index'>03 — {t('label')}</p>
          <h2 className='mt-4 text-white'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-white/80'>{t('description')}</p>
        </div>

        <div className='mt-12 grid gap-0 border-t border-white/25 lg:grid-cols-3'>
          {stages.map((stage, index) => (
            <article
              key={stage.id}
              className={`border-b border-white/25 py-8 lg:border-b-0 lg:px-6 lg:py-10 ${
                index < stages.length - 1 ? 'lg:border-r lg:border-white/25' : ''
              } ${index === 0 ? 'lg:pl-0' : ''} ${
                index === stages.length - 1 ? 'lg:pr-0' : ''
              }`}
            >
              <p className='pq-index text-accent'>{stage.id}</p>
              <h3 className='mt-3 text-white'>{stage.title}</h3>
              <ul className='mt-5 space-y-1.5'>
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className='text-[13px] leading-snug font-normal tracking-normal text-white/85 before:mr-2 before:text-accent before:content-["▸"]'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
