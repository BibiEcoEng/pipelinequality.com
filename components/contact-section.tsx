'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from './contact-form';

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className='border-t border-navy/15 bg-white' id='contact'>
      <div className='pq-shell pq-section'>
        <div className='max-w-3xl lg:max-w-5xl'>
          <p className='pq-index'>Contact</p>
          <h2 className='mt-3 text-navy'>{t('title')}</h2>
          <p className='mt-4 pq-subtitle text-navy/70'>{t('description')}</p>
          <p className='mt-5 hidden text-[13px] text-navy/70 lg:block'>{t('subtitle')}</p>
        </div>

        <div className='mt-8 max-w-3xl border-t border-navy/15 pt-8 lg:max-w-5xl'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
