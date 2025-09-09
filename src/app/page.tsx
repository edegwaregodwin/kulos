"use client"

import { HeroSection } from "@/../components/hero-section"
import { AboutSection } from "@/../components/about-section"
import { BuildingSection } from "@/../components/building-section"
import { TeamSection } from "@/../components/team-section"
import { ContactSection } from "@/../components/contact-section"
import { CTASection } from "@/../components/cta-section"

export default function KulosLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <BuildingSection />
      <TeamSection />
      <ContactSection />
      <CTASection />

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-zinc-500">© 2024 Kulos. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
