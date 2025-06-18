'use client'
import { useState } from 'react'
import { inriaSerif } from '@/utils/font'

export default function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full max-w-6xl mx-auto mb-8 rounded-lg shadow-2xl overflow-hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center p-12 text-left bg-white text-[22px] text-[#413A66] font-bold text-base rounded-lg border-l-8 border-[#413A66] ${inriaSerif.className}`}
      >
        {question}
        {isOpen ? ChevronUpIcon : ChevronDownIcon}
      </button>

      {isOpen && (
        <div
          className={`bg-[#413A66]/13 text-left text-bold text-lg text-[#413A66] p-12 rounded-lg ${inriaSerif.className}`}
        >
          {answer}
        </div>
      )}
    </div>
  )
}

const ChevronUpIcon = (
  <svg
    width='40'
    height='40'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    viewBox='0 0 24 24'
  >
    <path d='M18 15l-6-6-6 6' />
  </svg>
)

const ChevronDownIcon = (
  <svg
    width='40'
    height='40'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    viewBox='0 0 24 24'
  >
    <path d='M6 9l6 6 6-6' />
  </svg>
)
