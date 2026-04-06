"use client"

import { useTranslations } from 'next-intl'
import { Check } from "lucide-react"

export function ServicesOverview() {
  const t = useTranslations('services')
  const serviceAreas = t.raw('serviceAreas') as string[]

  return (
    <section className="bg-white py-8 md:py-20 lg:py-28" id="services">
     <div className="space-y-16 mb-16">

  {/* 🔹 Field Inspection (FULL BLOCK) */}
  <div className="space-y-6">
    
    {/* TEXT */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
        {t('sections.fieldInspection.title')}
      </h3>
      <p className="text-charcoal mb-4">
        {t('sections.fieldInspection.description')}
      </p>
      <ul className="space-y-3">
        {(t.raw('sections.fieldInspection.items') as string[]).map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-muted-gold mt-1 flex-shrink-0" />
            <span className="text-sm md:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* IMAGE (NOW ALWAYS UNDER TEXT) */}
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img
        src="/ndt_close.png"
        alt="Field Inspection"
        className="w-full h-64 md:h-80 object-cover"
      />
    </div>

  </div>

  {/* 🔹 Remote MDR (FULL BLOCK) */}
  <div className="space-y-6">
    
    {/* TEXT */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
        {t('sections.remoteMDR.title')}
      </h3>
      <p className="text-charcoal mb-4">
        {t('sections.remoteMDR.description')}
      </p>
      <ul className="space-y-3">
        {(t.raw('sections.remoteMDR.items') as string[]).map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-muted-gold mt-1 flex-shrink-0" />
            <span className="text-sm md:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* IMAGE */}
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img
        src="/weld_tracking.png"
        alt="Remote MDR"
        className="w-full h-64 md:h-80 object-cover"
      />
    </div>

  </div>

</div>
    </section>
  )
}