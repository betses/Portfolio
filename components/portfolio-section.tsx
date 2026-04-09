'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Eye } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all' ? data.projects : data.projects.filter((p) => p.category === activeFilter)

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="section-title mb-4">Portfolio</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <p className="section-subtitle max-w-3xl">
          Selected production work focused on practical engineering outcomes, AI integrations, and reliable delivery.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {data.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium capitalize transition-all ${
              activeFilter === category
                ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                : 'surface-soft text-muted-foreground hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative surface-soft rounded-xl md:rounded-2xl overflow-hidden hover:border-accent transition-all duration-300"
          >
            <div className="aspect-4/3 overflow-hidden bg-background">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug">{project.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md border border-border bg-background/60 text-[11px] md:text-xs text-muted-foreground tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 md:gap-3 pt-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent text-accent-foreground rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Live
                </a>
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-secondary border border-border text-foreground rounded-lg text-xs md:text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Details
                </Link>
              </div>
            </div>

            <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2.5 md:px-3 py-1 md:py-1.5 bg-background/90 backdrop-blur-sm border border-border rounded-lg text-xs font-medium text-accent capitalize">
              {project.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
