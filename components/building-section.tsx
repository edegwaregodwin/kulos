"use client"

import { FeatureCard } from "@/../components/shared/feature-card"
import { CreditCard, Heart, Smartphone } from "lucide-react"
import { Parallax } from "react-scroll-parallax"

export function BuildingSection() {
  const features = [
    {
      icon: CreditCard,
      title: "Contactless Payments",
      description:
        "Pay instantly with a simple tap. Secure, fast, and convenient payments without reaching for your wallet or phone. Bank-level encryption keeps every transaction safe.",
    },
    {
      icon: Heart,
      title: "Health Tracking",
      description:
        "Monitor your heart rate, sleep patterns, and activity levels with medical-grade sensors. Get insights that help you live healthier every day.",
    },
    {
      icon: Smartphone,
      title: "Smart Connectivity",
      description:
        "Stay connected with smart notifications and controls. Manage your digital life without being tied to your phone. Universal compatibility with all devices.",
    },
  ]

  return (
    <section id="building" className="py-24 relative overflow-hidden">
      <Parallax speed={-8} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-800/30" />
      </Parallax>
      <Parallax speed={-12} className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-zinc-800/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-zinc-700/15 rounded-full blur-2xl" />
      </Parallax>
      <Parallax speed={-4} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-zinc-600/10 rounded-full blur-lg" />
      </Parallax>

      <div className="container mx-auto px-6 relative z-10">
        <Parallax opacity={[0.2, 1]} scale={[0.9, 1]} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">What We Are Building</h2>
          <p className="text-xl text-zinc-400 text-balance max-w-2xl mx-auto">
            Three core technologies working in perfect harmony to create the ultimate wearable experience.
          </p>
        </Parallax>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Parallax key={index} speed={-2 - index} rotate={[-1, 1]} scale={[0.95, 1.05]}>
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}
