'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faq');
  const items = t.raw('items') as Array<{ question: string; answer: string }>;

  return (
    <section className='relative overflow-hidden bg-navy text-white'>
      <p className='pointer-events-none absolute top-8 right-4 pq-display text-[clamp(5rem,18vw,14rem)] leading-none text-white/[0.04] select-none sm:right-10'>
        FAQ
      </p>

      <div className='pq-shell relative py-20 lg:py-28'>
        <div className='max-w-xl'>
          <p className='pq-index'>15 — {t('title')}</p>
          <h2 className='mt-3 text-white'>{t('title')}</h2>
        </div>

        <div className='mt-14 border-t border-white/15'>
          {items.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border-b border-white/15 transition-colors duration-400 ${
                  open ? 'bg-white/[0.03]' : ''
                }`}
              >
                <button
                  type='button'
                  onClick={() => setOpenIndex(open ? null : index)}
                  className='grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-7 text-left sm:gap-8'
                  aria-expanded={open}
                >
                  <span className='pq-index mt-1'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className={`transition-colors duration-300 ${
                      open ? 'text-white' : 'text-white/75'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className='relative mt-2 h-4 w-4 shrink-0'
                    aria-hidden
                  >
                    <span className='absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-accent' />
                    <span
                      className={`absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-accent transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        open ? 'scale-y-0' : 'scale-y-100'
                      }`}
                    />
                  </span>
                </button>
                <div
                  className='grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className='overflow-hidden'>
                    <p className='max-w-3xl pr-10 pb-8 pl-12 text-[15px] leading-relaxed text-white/60 sm:pl-16'>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
