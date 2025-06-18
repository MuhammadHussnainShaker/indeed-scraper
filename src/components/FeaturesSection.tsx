import { inriaSerif } from '@/utils/font'

export const FeaturesSection = () => (
  <section className='bg-[#f5f5f5] py-24 px-4 text-center'>
    <h2
      className={`text-5xl font-bold mb-24 text-[#413A66] ${inriaSerif.className}`}
    >
      Our Standout Feature’s
    </h2>

    <div className='max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      <div className='relative overflow-hidden bg-[#FFFFFF] rounded-lg shadow-2xl p-6 text-left '>
        <div
          className={`absolute bg-[url('/pattern-1.svg')] bg-cover bg-no-repeat w-[380] h-[447] bottom-0 left-0`}
        />
        <div className={`text-[#413A66] text-2xl mb-14`}>
          <img
            src='/categorizer-icon.svg'
            alt='Categorizer Icon'
            className='w-[50] h-[50]'
          />
        </div>
        <h3
          className={`text-3xl font-bold mb-8 text-[#413A66] ${inriaSerif.className}`}
        >
          AI-Powered Job Categorizer
        </h3>
        <p
          className={`text-sm font-bold text-[#413A66] ${inriaSerif.className}`}
        >
          Effortlessly run an automated tool that scrapes and profiles job
          listings by keyword. Then, automatically categorize them by skills,
          technologies, or roles. For example, identify JavaScript- or
          PHP-specific roles within broader "Software Engineering" search
          results.
        </p>
      </div>

      <div className='relative overflow-hidden bg-[#FFFFFF] rounded-lg shadow-2xl p-6 text-left'>
        <div
          className={`absolute bg-[url('/pattern-2.svg')] bg-cover bg-no-repeat w-[380] h-[447] bottom-0 left-0`}
        />
        <div className={`text-[#413A66] text-2xl mb-14`}>
          <img
            src='/jisgaw-icon.svg'
            alt='Categorizer Icon'
            className='w-[50] h-[50]'
          />
        </div>
        <h3
          className={`text-3xl font-bold mb-8 text-[#413A66] ${inriaSerif.className}`}
        >
          Built-in Filters in Chrome Extension
        </h3>
        <p
          className={`text-sm font-bold text-[#413A66] ${inriaSerif.className}`}
        >
          Easily apply all Indeed filters and features directly from the
          extension—no need to visit the website. Find the right jobs faster,
          right within your browser.
        </p>
      </div>

      <div className='relative overflow-hidden bg-[#FFFFFF] rounded-lg shadow-2xl p-6 text-left'>
        <div
          className={`absolute bg-[url('/pattern-3.svg')] bg-cover bg-no-repeat w-[380] h-[447] bottom-0 left-0`}
        />
        <div className={`text-[#413A66] text-2xl mb-14`}>
          <img
            src='/tag-icon.svg'
            alt='Categorizer Icon'
            className='w-[50] h-[50]'
          />
        </div>
        <h3
          className={`text-3xl font-bold mb-8 text-[#413A66] ${inriaSerif.className}`}
        >
          Affordable Pricing
        </h3>
        <p
          className={`text-sm font-bold text-[#413A66] ${inriaSerif.className}`}
        >
          Maximize value without breaking the bank—get powerful job scraping and
          profiling tools at an affordable price.
        </p>
      </div>
    </div>
  </section>
)
