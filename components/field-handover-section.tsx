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
      <div className='mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20'>
        <div className='max-w-2xl'>
          <div className='mb-3 flex items-center gap-3'>
            <span className='h-px w-8 bg-accent' />
            <p className='text-[12px] font-semibold tracking-[0.18em] text-white/70 uppercase'>
              {t('label')}
            </p>
          </div>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-[2rem]'>
            {t('title')}
          </h2>
          <p className='mt-4 text-[15px] leading-relaxed text-white/70'>
            {t('description')}
          </p>
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch'>
          {stages.map((stage, index) => (
            <div key={stage.id} className='contents'>
              <div className='flex h-full flex-col border border-white/15 bg-white/5 p-5'>
                <div className='flex items-center gap-3'>
                  <span className='flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white'>
                    <FlowIcon stage={stage.title} />
                  </span>
                  <div>
                    <p className='text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase'>
                      {stage.id}
                    </p>
                    <h3 className='text-sm font-semibold tracking-[0.1em] text-white uppercase'>
                      {stage.title}
                    </h3>
                  </div>
                </div>
                <p className='mt-4 text-[13px] leading-relaxed text-white/65'>
                  {stage.text}
                </p>
                <ul className='mt-auto flex flex-wrap gap-2 pt-4'>
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className='border border-white/15 px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-white/80 uppercase'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {index < stages.length - 1 && (
                <div className='hidden items-center justify-center self-center lg:flex'>
                  <span className='flex h-8 w-8 items-center justify-center border border-white/20 text-sm text-white/50'>
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
