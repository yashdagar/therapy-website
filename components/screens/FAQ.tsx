"use client"

import React, { useState } from 'react'

const FAQ = () => {

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7e7e6b]! mb-4">
            Frequently Asked Questions
            </h2>
        </div>

        <div className="space-y-0">
            {[
            {
                question: "Do you accept insurance?",
                answer: "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement. Many clients find that their insurance covers a portion of out-of-network therapy costs."
            },
            {
                question: "Are online sessions available?",
                answer: "Yes—all virtual sessions are conducted via Zoom. Virtual sessions are available Monday, Wednesday, and Friday from 1 PM to 5 PM, providing the same quality of care as in-person sessions."
            },
            {
                question: "What is your cancellation policy?",
                answer: "24-hour notice is required for cancellations. This allows me to offer the time slot to other clients who may need it. Cancellations made less than 24 hours in advance will be charged the full session fee."
            }
            ].map((faq, index) => (
            <div key={index} className="not-last-of-type:border-b border-[#47473a]/50">
                <div className="w-full px-6 pt-4 pb-2 text-left flex justify-between items-center">
                    <span className="text-lg font-medium! text-[#47473a]">{faq.question}</span>
                    <div
                    className='hover:bg-[#e9e9e0] p-4 rounded-full transition-all duration-500'
                    onClick={() => toggleFaq(index)}
                    >
                        <svg 
                            className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="#47473a" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openFaq === index 
                    ? 'opacity-100 max-h-64 md:max-h-32 pb-6' 
                    : 'opacity-0 max-h-0'
                }`}>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default FAQ
