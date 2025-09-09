"use client"

import { Parallax } from "react-scroll-parallax"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-zinc-950/50 relative overflow-hidden">
      <Parallax speed={-5} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-transparent" />
      </Parallax>
      <Parallax speed={-8} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl" />
      </Parallax>
      <Parallax speed={-3} className="absolute inset-0">
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-700/10 rounded-full blur-2xl" />
      </Parallax>

      <div className="container mx-auto px-6 relative z-10">
        <Parallax scale={[0.8, 1.0]} opacity={[0.3, 1]} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">About Kulos</h2>
          <p className="text-xl md:text-2xl text-zinc-400 text-balance max-w-3xl mx-auto leading-relaxed">
            Kulos represents the next evolution in wearable technology. We believe that technology should enhance your
            life without overwhelming it. Our smart ring is designed to be invisible yet powerful, elegant yet
            functional. It's wearable tech reimagined for those who demand both style and substance.
          </p>
        </Parallax>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <Parallax speed={-3} rotate={[-2, 2]} className="transform">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                We envision a world where technology seamlessly integrates into your daily life without disruption.
                Kulos is more than just a smart ring—it's a philosophy of minimalist innovation that puts the user
                experience first.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Built for the future of living, Kulos combines cutting-edge technology with timeless design to create
                something truly extraordinary.
              </p>
            </div>
          </Parallax>
          <Parallax speed={5} scale={[0.9, 1.0]} rotate={[0, 5]}>
            <div className="w-full h-96 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="w-48 h-48 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full shadow-2xl animate-pulse" />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  )
}
