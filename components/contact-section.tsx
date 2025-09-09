"use client"

import { Card, CardContent } from "@/../components/ui/card"
import { ContactForm } from "@/../components/shared/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">Get in Touch</h2>
          <p className="text-xl text-zinc-400 text-balance max-w-2xl mx-auto">
            Have questions about Kulos? Want to learn more about our technology? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-zinc-800/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700/50 group-hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-zinc-100 transition-colors">
                  Email Us
                </h3>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">hello@kulos.com</p>
                <p className="text-zinc-500 text-sm">We'll get back to you within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-zinc-800/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700/50 group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-6 h-6 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-zinc-100 transition-colors">
                  Visit Us
                </h3>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">San Francisco, CA</p>
                <p className="text-zinc-500 text-sm">By appointment only</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-zinc-800/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700/50 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-6 h-6 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-zinc-100 transition-colors">
                  Call Us
                </h3>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">+1 (555) 123-4567</p>
                <p className="text-zinc-500 text-sm">Mon-Fri, 9AM-6PM PST</p>
              </div>
            </div>
          </div>
          <Card className="bg-zinc-900/50 border-zinc-800 hover:shadow-2xl hover:border-zinc-700 transition-all duration-500 hover:scale-105 transform">
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
