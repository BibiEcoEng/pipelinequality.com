"use client"

import { useTranslations } from 'next-intl'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  const t = useTranslations('legal.terms')
  const servicesList = t.raw('servicesList') as string[]

  return (
    <main className="min-h-screen bg-[var(--navy)] text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-12 text-center text-white">{t('title')}</h1>
          
          <div className="bg-white/5 rounded-lg p-8 md:p-12 space-y-8 border border-white/10 text-gray-200 leading-loose">
            
            {/* Intro */}
            <p>{t('intro')}</p>

            {/* Services */}
            <div>
              <p className="font-semibold text-white mb-4">{t('servicesTitle')}</p>
              <ul className="space-y-2 list-disc pl-5">
                {servicesList.map((service, index) => (
                  <li key={index} className="pl-2">{service}</li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-white/10 my-8" />

            {/* Brands & Partner */}
            <p>{t('brandsNote')}</p>
            <p className="font-semibold text-white">{t('partnerNote')}</p>

            <div className="h-px bg-white/10 my-8" />

            {/* Liability */}
            <div className="bg-red-500/5 border border-red-500/20 p-6 rounded text-gray-200">
               <p className="whitespace-pre-line">{t('liability')}</p>
            </div>

            {/* Law & Jurisdiction */}
            <div className="space-y-4 pt-4">
              <p>{t('law')}</p>
              <p>{t('jurisdiction')}</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
