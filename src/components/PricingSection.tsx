import { inriaSerif } from '@/utils/font'

export const PricingSection = () => (
  <section className='py-16 bg-[#f4f4f4] text-[#413A66]'>
    <div className='text-center mb-48'>
      <h2
        className={`text-5xl font-bold mb-6 text-[#413A66] ${inriaSerif.className}`}
      >
        Pricing
      </h2>
      <p
        className={`text-sm text-bold text-[#413A66] mx-auto ${inriaSerif.className}`}
      >
        Get started for free. Go pro when you're ready, cancel anytime.
      </p>
    </div>

    <div className='flex flex-col md:flex-row justify-center gap-3 px-4 max-w-5xl mx-auto'>
      {/* Free Card's Section */}
      <div className='bg-white rounded-2xl shadow-2xl px-6 py-12 w-full min-w-[360px] text-center'>
        <h3
          className={`text-5xl font-bold mb-6 text-[#413A66] ${inriaSerif.className}`}
        >
          Free
        </h3>
        <p
          className={`text-5xl font-bold mb-6 text-[#7ED1FF] ${inriaSerif.className}`}
        >
          $0
        </p>
        <p
          className={`text-[22px] font-bold mb-6 text-[#413A66] ${inriaSerif.className}`}
        >
          Basic Support
        </p>
        <ul
          className={`mt-6 space-y-1 text-[22px] text-left text-[#413A66] ${inriaSerif.className}`}
        >
          <li className='flex items-center'>
            <img
              src='/tick-bullet.svg'
              alt='Categorizer Icon'
              className='w-[18] h-[18] mr-1'
            />

            <span>Export 30 jobs at a time.</span>
          </li>
          <li className='flex items-center'>
            <img
              src='/tick-bullet.svg'
              alt='Categorizer Icon'
              className='w-[18] h-[18] mr-1'
            />

            <span>Export data to XLSX or CSV.</span>
          </li>
        </ul>
        <button className='mt-12 bg-[#413A66] text-white px-4 py-2 text-base rounded-md'>
          Try for free
        </button>
      </div>

      {/* Monthly Card's Section */}
      <div className='bg-[#413A66] rounded-2xl shadow-2xl px-6 py-12 w-full min-w-[360px]  text-center transform -mt-24 -mb-4'>
        <h3
          className={`text-5xl font-bold mb-12 text-white ${inriaSerif.className}`}
        >
          Monthly
        </h3>
        <p
          className={`text-5xl font-bold mb-12 text-[#7ED1FF] ${inriaSerif.className}`}
        >
          $9.99/mo
        </p>
        <p
          className={`text-[22px] font-bold mb-12 text-white ${inriaSerif.className}`}
        >
          $9.99 billed monthly
        </p>
        <ul
          className={`mt-16 space-y-1 text-[22px] text-left text-white ${inriaSerif.className}`}
        >
          <li className='flex items-center'>
            <img
              src='/tick-bullet.svg'
              alt='Categorizer Icon'
              className='w-[18] h-[18] mr-1'
            />

            <span>Export 5000 jobs at a time.</span>
          </li>
          <li className='flex items-center'>
            <img
              src='/tick-bullet.svg'
              alt='Categorizer Icon'
              className='w-[18] h-[18] mr-1'
            />

            <span>Export data to XLSX or CSV.</span>
          </li>
        </ul>
        <button className='mt-24 bg-[#7ED1FF] text-white px-4 py-2 text-base rounded-md'>
          Get Started
        </button>
      </div>

      {/* Yearly Card's Section */}
      <div className='bg-white rounded-2xl shadow-2xl px-6 py-12 w-full min-w-[360px] text-center'>
        <h3
          className={`text-5xl font-bold mb-6 text-[#413A66] ${inriaSerif.className}`}
        >
          Yearly (save 25%)
        </h3>
        <p
          className={`text-5xl font-bold mb-6 text-[#7ED1FF] ${inriaSerif.className}`}
        >
          $0
        </p>
        <p
          className={`text-[22px] font-bold mb-6 text-[#413A66] ${inriaSerif.className}`}
        >
          Basic Support
        </p>
        <ul
          className={`mt-6 space-y-1 text-[22px] text-left text-[#413A66] ${inriaSerif.className}`}
        >
          <li className='flex items-center'>
            <img
              src='/tick-bullet.svg'
              alt='Categorizer Icon'
              className='w-[18] h-[18] mr-1'
            />

            <span>Export 30 jobs at a time.</span>
          </li>
          <li className='flex items-center'>
            <img
              src='/tick-bullet.svg'
              alt='Categorizer Icon'
              className='w-[18] h-[18] mr-1'
            />

            <span>Export data to XLSX or CSV.</span>
          </li>
        </ul>
        <button className='mt-12 bg-[#413A66] text-white px-4 py-2 text-base rounded-md'>
          Try for free
        </button>
      </div>
    </div>
  </section>
)
