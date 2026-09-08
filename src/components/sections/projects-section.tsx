import { Section } from '@/components/section'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <Section id="builds" index="03" title="builds">
      <h2 className="eyebrow">Things I&apos;ve shipped.</h2>
      <p className="lede">
        Personal and university projects where I owned the whole system — from network topology
        to database schema.
      </p>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article key={project.title} className="project">
            <div className="idx">P.{String(i + 1).padStart(2, '0')}</div>
            <h3>{project.title}</h3>
            {project.outcome && <div className="outcome">{project.outcome}</div>}
            <p className="summary">{project.summary}</p>
            <div className="stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {(project.links.github || project.links.demo || project.links.writeup) && (
              <div className="links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    github <span className="arrow">↗</span>
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    demo <span className="arrow">↗</span>
                  </a>
                )}
                {project.links.writeup && (
                  <a href={project.links.writeup} target="_blank" rel="noopener noreferrer">
                    write-up <span className="arrow">↗</span>
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
