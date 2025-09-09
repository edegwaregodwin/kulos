import { Card, CardContent } from "@/../components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors group">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-zinc-400 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
