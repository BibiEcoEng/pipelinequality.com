'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from './contact-form';


export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className='border-t border-line bg-white py-16 lg:py-20' id='contact'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='mb-10 max-w-3xl'>
          <h2 className='text-3xl font-bold tracking-tight text-navy sm:text-[2rem]'>
            {t('title')}
          </h2>
          <p className='mt-4 text-[15px] leading-relaxed text-steel-gray'>
            {t('description')}
          </p>
        </div>

        {/* Contact Form - Full Width */}
        <div className='max-w-3xl mx-auto'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
