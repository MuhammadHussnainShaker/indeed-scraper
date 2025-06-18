import { inriaSerif } from '@/utils/font'

export const FooterSection = () => (
  <footer className='bg-[#413A66] text-white  pt-52'>
    <div className='flex gap-8 justify-between pb-52 px-72'>
      <div className='min-w-[344px] max-w-96 '>
        <div className='flex items-center gap-2 mb-14'>
          <img src='/logo-white.svg' alt='Logo' className='w-[80px] h-[80px]' />
          <span className={`text-4xl font-bold ${inriaSerif.className}`}>
            Indeed Scraper
          </span>
        </div>
        <p className={`text-[22px] font-bold ${inriaSerif.className}`}>
          Effortlessly extract job titles, salaries, locations, and apply links
          from Indeed
        </p>
      </div>

      <div className='max-w-52 flex flex-col justify-between'>
        <h4
          className={`text-[22px] font-bold uppercase ${inriaSerif.className} mt-6`}
        >
          About
        </h4>
        <p
          className={`text-lg font-bold leading-relaxed ${inriaSerif.className}`}
        >
          Effortlessly extract job titles, salaries, locations, and apply links
          from Indeed
        </p>
      </div>

      <div className='max-w-52 flex flex-col justify-between'>
        <h4
          className={`text-[22px] font-bold uppercase ${inriaSerif.className} mt-6`}
        >
          Legal
        </h4>
        <p
          className={`text-lg font-bold leading-relaxed ${inriaSerif.className}`}
        >
          Effortlessly extract job titles, salaries, locations, and apply links
          from Indeed
        </p>
      </div>

      <div className='max-w-52 flex flex-col justify-between'>
        <h4
          className={`text-[22px] font-bold uppercase ${inriaSerif.className} mt-6`}
        >
          Contact
        </h4>
        <p
          className={`text-lg font-bold leading-relaxed ${inriaSerif.className}`}
        >
          Effortlessly extract job titles, salaries, locations, and apply links
          from Indeed
        </p>
      </div>
    </div>

    <div className='bg-black text-center font-medium text-base py-9 mt-8'>
      ©2025–PRESENT Indeed Scraper. All rights Reserved
    </div>
  </footer>
)
