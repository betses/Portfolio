import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with payment integration, real-time inventory management, and admin dashboard.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    image: '/modern-ecommerce-dashboard.png',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management tool with real-time updates, team workspaces, and progress tracking.',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    image: '/task-management-interface.png',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Data visualization dashboard with interactive charts, custom metrics, and export functionality.',
    tags: ['TypeScript', 'Express', 'Chart.js', 'PostgreSQL'],
    image: '/analytics-dashboard-charts.png',
  },
  {
    title: 'Social Media API',
    description:
      'RESTful API for social networking with authentication, post management, and real-time notifications.',
    tags: ['Node.js', 'Express', 'JWT', 'Redis'],
    image: '/api-documentation-interface.png',
  },
  {
    title: 'Blog Platform',
    description:
      'Content management system with markdown support, SEO optimization, and comment moderation.',
    tags: ['Next.js', 'MDX', 'Supabase', 'TypeScript'],
    image: '/modern-blog-interface.jpg',
  },
  {
    title: 'Weather Forecast App',
    description:
      'Real-time weather application with location services, interactive maps, and 7-day forecasts.',
    tags: ['React', 'OpenWeather API', 'Mapbox', 'Tailwind'],
    image: '/weather-app-interface.png',
  },
]

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Recent Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
