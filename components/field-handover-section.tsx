'use client';

import { useTranslations } from 'next-intl';

type Stage = {
  id: string;
  title: string;
  items: string[];
};

export function FieldHandoverSection() {
  const t = useTranslations('fieldHandover');
  const stages = t.raw('stages') as Stage[];

  return (
    <section id='process' className='bg-light-gray text-navy'>
      <div className='pq-shell pq-section'>
        <div className='max-w-2xl lg:max-w-none'>
          <p className='pq-index'>{t('label')}</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
        </div>

        <div className='mt-8 grid gap-0 border-t border-navy/10 lg:grid-cols-3'>
          {stages.map((stage, index) => (
            <article
              key={stage.id}
              className={`border-b border-navy/10 py-5 lg:border-b-0 lg:px-5 lg:py-6 ${
                index < stages.length - 1 ? 'lg:border-r lg:border-navy/10' : ''
              } ${index === 0 ? 'lg:pl-0' : ''} ${
                index === stages.length - 1 ? 'lg:pr-0' : ''
              }`}
            >
              <h3 className='text-navy'>{stage.title}</h3>
              <ul className='mt-4 space-y-1.5'>
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className='pq-subtitle text-navy/70 before:mr-2 before:text-accent before:content-["▸"]'
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
