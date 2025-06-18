import { inriaSerif } from '@/utils/font'
import FAQItem from './FAQItem'

export const FAQSection = () => (
  <section className='bg-[#f5f5f5] py-24 px-4 text-center'>
    <h2
      className={`text-5xl font-bold mb-6 text-[#413A66] ${inriaSerif.className}`}
    >
      FAQs
    </h2>

    <FAQItem
      question='What Indeed Scraper can do for me?'
      answer='Export your Indeed job search results to Excel or CSV with just one click. No coding skills required.'
    />
    <FAQItem
      question='How long does it take to export data using the extension?'
      answer='Export times may vary depending on the number of job postings being exported and the speed of your internet connection.'
    />
  </section>
)
