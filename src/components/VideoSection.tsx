import { inriaSerif } from '@/utils/font'

export const VideoSection = () => (
  <section className='bg-[#413A66]/15 py-24 px-4 text-center'>
    <h2
      className={`text-5xl font-bold mb-6 text-[#413A66] ${inriaSerif.className}`}
    >
      How it Works
    </h2>
    <p
      className={`text-[14px] text-bold text-[#413A66]  mx-auto  ${inriaSerif.className}`}
    >
      Effortlessly extract job titles, salaries, locations, and apply links from
      Indeed and download them in a structured format.
    </p>
    <div className='max-w-6xl mx-auto mt-12'>
      <iframe
        width='1120'
        height='630'
        src='https://www.youtube.com/embed/UXyxJ6jpwMg?si=QSHYgM5f3QwW0qgm'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  </section>
)
