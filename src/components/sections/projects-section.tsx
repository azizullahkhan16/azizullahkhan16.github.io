import { Section } from '@/components/section'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" alt>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="text-base font-semibold mb-1">{project.title}</h3>
            {project.outcome && (
              <div className="text-[13px] font-medium text-accent mb-2">
                {project.outcome}
              </div>
            )}
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 bg-section-bg border border-border rounded text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            {(project.links.github || project.links.demo || project.links.writeup) && (
              <div className="flex gap-3 mt-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="text-[12px] font-medium text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="text-[12px] font-medium text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo →
                  </a>
                )}
                {project.links.writeup && (
                  <a
                    href={project.links.writeup}
                    className="text-[12px] font-medium text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Write-up →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
