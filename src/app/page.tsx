"use client"

import { HeroHeader } from "@/components/hero-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ContentSection } from "@/components/content-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroHeader />
      <HeroSection />
      <ServicesSection />
      <ContentSection />
      <CTASection />
      <Footer />
    </div>
  )
}
