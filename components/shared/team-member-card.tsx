import { Card, CardContent } from "@/../components/ui/card"

interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
}

export function TeamMemberCard({ name, role, bio }: TeamMemberCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
      <CardContent className="p-6">
        <div className="w-24 h-24 bg-zinc-800 rounded-full mb-4 mx-auto" />
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
          <p className="text-zinc-400">{role}</p>
        </div>
        <p className="text-zinc-300 leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  )
}
