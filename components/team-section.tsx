"use client"

import { TeamMemberCard } from "@/../components/shared/team-member-card"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former Apple engineer with 10+ years in wearable tech. Passionate about creating technology that disappears into your life.",
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Security expert and hardware architect. Previously led payment security at Square. Ensures Kulos meets the highest standards.",
    },
    {
      name: "Marcus Thompson",
      role: "Head of Design",
      bio: "Award-winning industrial designer. Former design lead at Fitbit. Believes technology should be beautiful and intuitive.",
    },
  ]

  return (
    <section id="team" className="py-24 bg-zinc-950/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">Meet Our Team</h2>
          <p className="text-xl text-zinc-400 text-balance">
            Passionate innovators dedicated to reimagining wearable technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} name={member.name} role={member.role} bio={member.bio} />
          ))}
        </div>
      </div>
    </section>
  )
}
