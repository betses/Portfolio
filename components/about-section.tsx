import { PenTool, Code, Smartphone, Zap } from 'lucide-react'
import { aboutData } from '@/lib/portfolio-data'

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
}

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* About Me */}
      <div>
        <h2 className="section-title mb-4">About Me</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4 section-subtitle">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="flex gap-3 md:gap-4 p-4 md:p-6 surface-soft rounded-xl md:rounded-2xl hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0">
                  <IconComponent className="w-full h-full text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.testimonials.slice(0, 4).map((testimonial, index) => (
            <div key={index} className="p-4 md:p-6 surface-soft rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl object-cover"
                />
                <h4 className="text-base md:text-lg font-semibold text-foreground">{testimonial.name}</h4>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Clients</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {data.clients.map((client, index) => (
            <div
              key={index}
              className="h-20 md:h-24 surface-soft rounded-xl md:rounded-2xl flex items-center justify-center p-4 md:p-6 hover:border-accent transition-colors"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
