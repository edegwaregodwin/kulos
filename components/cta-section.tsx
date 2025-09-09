"use client"

import { Button } from "@/../components/ui/button"
import { Parallax } from "react-scroll-parallax"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 relative overflow-hidden">
      <Parallax speed={-10} className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-zinc-800/15 rounded-full blur-3xl" />
      </Parallax>
      <Parallax speed={-6} className="absolute inset-0">
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-zinc-700/20 rounded-full blur-2xl" />
      </Parallax>
      <Parallax speed={-3} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-zinc-600/10 rounded-full blur-xl" />
      </Parallax>

      <div className="container mx-auto px-6 text-center relative z-10">
        <Parallax scale={[0.8, 1.2]} opacity={[0.4, 1]} rotate={[-2, 2]} translateY={[-20, 20]}>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">Ready for the Future?</h2>
          <p className="text-xl text-zinc-400 text-balance mb-8 max-w-2xl mx-auto">
            Stay updated on our progress and be the first to know when Kulos becomes available.
          </p>
        </Parallax>

        <Parallax speed={-2} scale={[0.9, 1.1]} translateY={[10, -10]}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent hover:scale-110 hover:border-zinc-600 hover:text-zinc-200 transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-1 group"
            >
              <span className="group-hover:animate-pulse">Stay Updated</span>
            </Button>
          </div>
        </Parallax>
      </div>
    </section>
  )
}
