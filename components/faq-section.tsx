'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faq');
  const items = t.raw('items') as Array<{ question: string; answer: string }>;

  return (
    <section className='relative overflow-hidden bg-navy text-white'>
      <div className='pq-shell pq-section relative'>
        <div className='max-w-xl'>
          <p className='pq-index'>FAQ</p>
          <h2 className='mt-2 text-white'>{t('title')}</h2>
        </div>

        <div className='mt-6 border-t border-white/15 lg:mt-8'>
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
                  className='grid w-full grid-cols-[1fr_auto] items-start gap-3 py-3.5 text-left sm:gap-5 lg:py-3.5'
                  aria-expanded={open}
                >
                  <span
                    className={`text-[0.9rem] leading-snug font-semibold tracking-[-0.015em] transition-colors duration-300 lg:text-[0.95rem] ${
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
                    <p className='max-w-3xl pr-8 pb-3.5 text-[13px] leading-relaxed text-white/65 lg:pb-3'>
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
