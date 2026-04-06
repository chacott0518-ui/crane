import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import CraneInfo from '@/components/sections/CraneInfo'
import Features from '@/components/sections/Features'
import ServiceArea from '@/components/sections/ServiceArea'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <CraneInfo />
      <Features />
      <ServiceArea />
      <Footer />
    </main>
  )
}