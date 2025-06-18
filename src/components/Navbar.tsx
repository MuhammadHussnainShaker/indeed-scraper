'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './Button'
import Image from 'next/image'
import { inriaSerif } from '@/utils/font'

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Guides', href: '#guides' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image src='/logo.svg' alt='Logo' width={58} height={58} />
          <span className='text-3xl font-bold space-x-1'>
            <span className={`text-[#413A66] ${inriaSerif.className}`}>
              Indeed
            </span>
            <span className={`text-[#62A4C3] ${inriaSerif.className}`}>
              Scraper
            </span>
          </span>
        </Link>
        <nav className='flex items-center gap-16 mr-44'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-base text-[#62A4C3] hover:text-[#413A66] font-bold hover:underline'
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Button text='Get Started' className='bg-[#413A66] ' />
      </div>
    </header>
  )
}
