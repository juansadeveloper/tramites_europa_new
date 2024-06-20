"use client";
import React, { useState } from 'react';

import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need a visa to work in another EU country?",
      answer: "No, as an EU citizen, you have the right to work in any EU country without needing a visa or work permit.",
    },
    {
      question: "How do I register my residence in another EU country?",
      answer: "You usually need to register with the local authorities (e.g., town hall or police station) within a certain period after arrival. The exact process varies by country.",
    },
    {
      question: "What kind of health insurance do I need?",
      answer: "You must have health insurance that covers you in the host country. This can be public or private insurance. The European Health Insurance Card (EHIC) is useful for short-term stays.",
    },
    {
      question: "Can I transfer my social security benefits to another EU country?",
      answer: "Yes, EU regulations allow you to transfer certain social security benefits, like unemployment and pensions, when you move to another EU country.",
    },
    {
      question: "Do I need to open a local bank account?",
      answer: "It's advisable to open a local bank account for salary payments and everyday transactions. Requirements for opening an account vary by country.",
    },
    {
      question: "Is my EU driver's license valid in another EU country?",
      answer: "Yes, an EU driver's license is generally valid throughout the EU. However, you may need to register it or exchange it for a local license after a certain period.",
    },
    {
      question: "Do I need to speak the local language?",
      answer: "While many people in the EU speak English, learning the local language can be very beneficial for integration, daily life, and job opportunities.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-2">Frequently Asked Questions</h2>
      <h2 className="text-2xl font-bold text-center mb-8">ABOUT WORKING AND LIVING IN EUROPE</h2>
      <div className="rounded-lg shadow-md max-w-[800px] mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border-b py-2 px-2 rounded-t-lg rounded-b-lg hover:bg-neutral-100">
            <button
              className="w-full px-4 py-2 text-left text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center gap-3">
                <span>{faq.question}</span>
                <span>{activeIndex === index ? <RiArrowUpSLine /> : <RiArrowDownSLine /> }</span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 text-gray-700">
                {faq.answer.replace(/'/g, '&apos;')}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
