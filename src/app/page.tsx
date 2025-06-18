import { Button } from '@/components/Button'
import { FAQSection } from '@/components/FaqsSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { FooterSection } from '@/components/FooterSection'
import { HeroSection } from '@/components/HeroSection'
import { PricingSection } from '@/components/PricingSection'
import { VideoSection } from '@/components/VideoSection'
import { inriaSerif } from '@/utils/font'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <VideoSection />
      <FAQSection />
      <PricingSection />
      <FooterSection />
    </>
  )
}
