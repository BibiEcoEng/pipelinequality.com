'use client';

import { useTranslations } from 'next-intl';

type Stage = {
  id: string;
  title: string;
  text: string;
  items: string[];
};

function FlowIcon({ stage }: { stage: string }) {
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

  if (stage === 'Field' || stage === 'Feld') {
    return (
      <svg {...common}>
        <path d='M4 18V8l8-4 8 4v10' />
        <path d='M9 18v-5h6v5' />
        <path d='M4 18h16' />
      </svg>
    );
  }
  if (stage === 'Quality Control' || stage === 'Qualitätskontrolle') {
    return (
      <svg {...common}>
        <path d='M9 11.5 11 13.5 15.5 9' />
        <circle cx='12' cy='12' r='8.5' />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d='M5 6h14v12H5z' />
      <path d='M8 10h8M8 13h8M8 16h5' />
    </svg>
  );
}

export function FieldHandoverSection() {
  const t = useTranslations('fieldHandover');
  const stages = t.raw('stages') as Stage[];

  return (
    <section id='process' className='bg-navy text-white'>
      <div className='pq-shell py-20 lg:py-28'>
        <div className='max-w-2xl'>
          <p className='pq-index'>03 — {t('label')}</p>
          <h2 className='mt-4 text-white'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-white/80'>
            {t('description')}
          </p>
        </div>

        <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className='relative flex h-full flex-col border border-white/25 bg-white/5 p-5'
            >
              {index < stages.length - 1 && (
                <span
                  className='absolute top-1/2 -right-3 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center bg-navy text-xs text-white/70 lg:flex'
                  aria-hidden
                >
                  →
                </span>
              )}
              <div className='flex items-center gap-3'>
                <span className='flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white'>
                  <FlowIcon stage={stage.title} />
                </span>
                <div>
                  <p className='pq-index text-white/70'>{stage.id}</p>
                  <h3 className='mt-1 text-white uppercase tracking-[0.08em]'>
                    {stage.title}
                  </h3>
                </div>
              </div>
              <p className='mt-4 pq-subtitle text-white/80'>
                {stage.text}
              </p>
              <ul className='mt-auto flex flex-wrap gap-2 pt-4'>
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className='border border-white/15 px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em] text-white/80 uppercase'
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
