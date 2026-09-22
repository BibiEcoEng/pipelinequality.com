'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations('faq');
  const items = t.raw('items') as Array<{ question: string; answer: string }>;

  return (
    <section className='relative overflow-hidden bg-navy text-white'>
      <div className='pq-shell relative py-14 sm:py-16 lg:py-18'>
        <div className='max-w-xl'>
          <p className='pq-index'>Ask</p>
          <h2 className='mt-3 text-white'>{t('title')}</h2>
        </div>

        <div className='mt-8 border-t border-white/15'>
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
                  className='grid w-full grid-cols-[auto_1fr_auto] items-start gap-3 py-4 text-left sm:gap-6 sm:py-5'
                  aria-expanded={open}
                >
                  <span className='pq-index mt-0.5'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-[0.95rem] leading-snug font-semibold tracking-[-0.015em] transition-colors duration-300 sm:text-[1.05rem] ${
                      open ? 'text-white' : 'text-white/75'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className='relative mt-1.5 h-3.5 w-3.5 shrink-0'
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
                    <p className='max-w-3xl pr-8 pb-4 pl-10 text-[14px] leading-relaxed text-white/65 sm:pl-14'>
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
