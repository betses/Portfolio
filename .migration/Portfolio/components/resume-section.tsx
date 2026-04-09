import { BookOpen, Briefcase } from 'lucide-react'
import { resumeData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <h2 className="section-title mb-4">Resume</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <p className="section-subtitle max-w-3xl">
          Experience, education, and core technical strengths focused on practical delivery.
        </p>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Education</h3>
        </div>
        <div className="space-y-4">
          {data.education.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border/70 last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent ring-4 ring-accent/15" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed surface-soft rounded-lg p-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Experience</h3>
        </div>
        <div className="space-y-4">
          {data.experience.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border/70 last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent ring-4 ring-accent/15" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed surface-soft rounded-lg p-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">My Skills</h3>
        <div className="space-y-5 md:space-y-6">
          {data.skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-xs md:text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs md:text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
