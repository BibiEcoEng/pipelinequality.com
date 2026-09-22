'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from './contact-form';

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className='bg-light-gray' id='contact'>
      <div className='pq-shell py-20 lg:py-28'>
        <div className='grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
          <div>
            <p className='pq-index'>Contact</p>
            <h2 className='mt-4 text-navy'>{t('title')}</h2>
            <p className='mt-5 text-[15px] leading-relaxed text-steel-gray'>
              {t('description')}
            </p>
            <div className='mt-10 space-y-3 border-t border-navy/10 pt-8'>
              <a
                href='mailto:info@pipelinequality.com'
                className='block text-[18px] font-semibold text-navy transition hover:text-accent'
              >
                info@pipelinequality.com
              </a>
              <p className='text-[13px] text-steel-gray'>{t('subtitle')}</p>
            </div>
          </div>
          <div className='bg-white p-6 sm:p-8 lg:p-10'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
