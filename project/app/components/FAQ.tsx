'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission to your insurance provider for potential reimbursement."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via Zoom on Mondays, Wednesdays, and Fridays from 1 PM–5 PM."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice is required for cancellations. Sessions cancelled with less than 24 hours notice may be subject to the full session fee."
    },
    {
      question: "What therapeutic approaches do you use?",
      answer: "I use a primarily psychodynamic and humanistic approach, enriched by influences from cognitive-behavioral therapy, positive psychology, existentialism, and mindfulness practices."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are typically 50 minutes, while couples sessions are 60 minutes."
    },
    {
      question: "Do you offer in-person sessions?",
      answer: "Yes, in-person sessions are available at my office located at 1287 Maplewood Drive, Los Angeles, CA 90026 on Tuesdays and Thursdays from 10 AM–6 PM."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-serif text-sage-700 mb-12 text-center">
            Therapy
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronDown className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}