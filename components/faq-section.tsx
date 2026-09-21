"use client"

import { useState } from "react"
import { useTranslations } from 'next-intl'
import { Plus, Minus } from "lucide-react"
import { SectionLabel } from '@/components/section-label'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const t = useTranslations('faq')
  const items = t.raw('items') as Array<{ question: string, answer: string }>

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-[2rem]">{t('title')}</h2>
        </div>

        <div className="mt-10 space-y-0">
          {items.map((faq, index) => (
            <div key={index} className="border-b border-line">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
              >
                <span className="text-[16px] font-semibold text-navy pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-accent flex-shrink-0" />
                )}
              </button>
              {openIndex === index && <div className="pb-5 text-[14px] leading-relaxed text-steel-gray">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
