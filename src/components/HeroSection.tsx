import { inriaSerif } from '@/utils/font'

export const HeroSection = () => (
  <section
    className='relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center'
    style={{ backgroundImage: "url('/banner-image.png')" }}
  >
    <div className='absolute'></div>

    <div className='relative z-10  px-4 '>
      <h1
        className={`text-6xl text-[#92D8FF] font-bold ${inriaSerif.className}`}
      >
        Indeed Scraper
      </h1>
      <p className={`mt-4 text-lg max-w-2xl mx-auto  ${inriaSerif.className}`}>
        Effortlessly extract job titles, salaries, locations, and apply links
        from Indeed.
      </p>
      <div className='w-full flex justify-center'>
        <button className='mt-16 bg-[#92D8FF] hover:opacity-90 text-[#413A66] px-4 py-2 rounded-md transition flex items-center space-x-2'>
          <img src='/chrome-icon.svg' alt='Chrome' className='w-7 h-7' />
          <span>Add to Chrome</span>
        </button>
      </div>
    </div>
  </section>
)
