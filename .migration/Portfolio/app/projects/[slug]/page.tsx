import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Eye } from 'lucide-react'
import { getProjectBySlug, portfolioData, profileData } from '@/lib/portfolio-data'

type ProjectPageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: `Project Not Found | ${profileData.name}`,
    }
  }

  return {
    title: `${project.title} | ${profileData.name}`,
    description: project.description,
  }
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        <article className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="aspect-16/7 bg-secondary overflow-hidden">
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5 md:p-8 space-y-8">
            <header className="space-y-4">
              <div className="inline-flex items-center rounded-lg border border-border bg-secondary px-3 py-1 text-xs md:text-sm capitalize text-accent">
                {project.category}
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
                {project.title}
              </h1>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                {project.overview}
              </p>

              <div className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                <p>
                  <span className="text-foreground font-medium">Role:</span> {project.role}
                </p>
                <p>
                  <span className="text-foreground font-medium">Timeline:</span> {project.timeline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-4 h-4" />
                  Live project
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Reference link
                </a>
              </div>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-border bg-secondary p-4 md:p-5">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Problem</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
              <div className="space-y-3 rounded-xl border border-border bg-secondary p-4 md:p-5">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Solution</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-border bg-secondary p-4 md:p-5">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Architecture</h2>
                <ul className="space-y-2">
                  {project.architecture.map((item) => (
                    <li key={item} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-border bg-secondary p-4 md:p-5">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Responsibilities</h2>
                <ul className="space-y-2">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-3 rounded-xl border border-border bg-secondary p-4 md:p-5">
              <h2 className="text-lg md:text-xl font-semibold text-foreground">Outcomes</h2>
              <ul className="space-y-2">
                {project.outcomes.map((item) => (
                  <li key={item} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    - {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  )
}
