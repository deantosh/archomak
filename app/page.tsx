'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import FeaturedProducts from '@/components/featured-products'
import WhyArchomakTech from '@/components/why-archomak-tech'
// import ProductBenefits from '@/components/product-benefits'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <WhyArchomakTech />
      {/* <ProductBenefits /> */}
      <Footer />
    </main>
  )
}
