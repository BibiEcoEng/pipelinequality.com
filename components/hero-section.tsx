'use client';

import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id='home'
      className='relative min-h-[92svh] overflow-hidden bg-[#0a2748] text-white lg:min-h-[78vh]'
    >
      <img
        src='/client/hero-monopile.jpg?v=3'
        alt={t('imageAlt')}
        className='absolute inset-0 h-full w-full scale-[1.03] object-cover object-[70%_40%] brightness-[1.04] contrast-[1.08] saturate-[1.02]'
      />

      <div
        className='absolute inset-0 bg-[linear-gradient(115deg,rgba(1,42,96,0.72)_0%,rgba(1,42,96,0.42)_38%,rgba(1,42,96,0.18)_62%,rgba(1,42,96,0.06)_100%)]'
        aria-hidden
      />
      <div
        className='absolute inset-0 bg-[linear-gradient(to_top,rgba(1,42,96,0.5)_0%,rgba(1,42,96,0.15)_36%,transparent_70%)]'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_88%_28%,rgba(251,114,0,0.12)_0%,transparent_48%)]'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_12%_55%,rgba(1,42,96,0.5)_0%,transparent_60%)]'
        aria-hidden
      />

      <div className='relative flex min-h-[92svh] flex-col justify-end pb-10 pt-28 sm:pb-14 lg:min-h-[78vh] lg:justify-center lg:pb-16 lg:pt-24'>
        <div className='pq-shell'>
          {/* Left edge = accent bars. Brand / tagline / line / buttons share that edge. */}
          <div className='max-w-[42rem]'>
            <h1 className='pq-hero-brand pq-fade-up m-0 text-white'>{t('brand')}</h1>

            <p className='pq-fade-up pq-fade-up-delay-1 mt-4 pq-subtitle m-0 font-semibold text-white lg:mt-5'>
              {t('titleLine1')} {t('titleLine2')}
            </p>

            <div className='pq-fade-up pq-fade-up-delay-1 mt-5 h-px w-20 bg-accent pq-line-grow lg:mt-6' />

            <div className='pq-fade-up pq-fade-up-delay-2 mt-5 space-y-2.5 lg:mt-6'>
              <div className='flex items-stretch gap-3'>
                <span className='w-0.5 shrink-0 bg-accent' aria-hidden />
                <p className='pq-subtitle m-0 font-semibold text-white'>{t('subtitle')}</p>
              </div>
              <div className='flex items-stretch gap-3'>
                <span className='w-0.5 shrink-0 bg-white/40' aria-hidden />
                <p className='pq-subtitle m-0 font-semibold text-white/95'>{t('subtitleLine2')}</p>
              </div>
            </div>

            <div className='pq-fade-up pq-fade-up-delay-3 mt-7 flex flex-wrap items-center gap-4 lg:mt-8'>
              <a href='#contact' className='pq-btn'>
                {t('cta1')}
              </a>
              <a
                href='#network'
                className='inline-flex items-center border border-white/50 bg-navy/45 px-5 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-[2px] transition hover:border-white hover:bg-white/10'
              >
                {t('cta2')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
