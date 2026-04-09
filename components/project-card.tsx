import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="mb-4 overflow-hidden border border-border bg-card">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
        {title}
      </h3>
      <p className="mb-4 text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
