"use client"

import { Button } from "@/../components/ui/button"
import { Badge } from "@/../components/ui/badge"
import { Parallax } from "react-scroll-parallax"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Parallax speed={-20} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-gray-900 to-black" />
      </Parallax>
      <Parallax speed={-10} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </Parallax>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <Badge className="mb-6 bg-zinc-800/50 text-zinc-300 border-zinc-700">The Future of Wearable Tech</Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-white bg-gradient-to-r from-white to-zinc-400 bg-clip-text">
          Meet Kulos
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 text-balance mb-8 leading-relaxed">
          Health • Payments • One tap
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent"
          >
            Watch Demo
          </Button>
        </div>
      </div>

      <Parallax speed={-30} className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 shadow-2xl animate-pulse" />
        <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-zinc-600/30 to-zinc-800/30 animate-ping" />
      </Parallax>
    </section>
  )
}
