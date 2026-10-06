'use client'

import { useState } from 'react'
import { Section } from '@/components/section'
import { projects, type Project } from '@/data/projects'

function ProjectCard({ project, indexLabel }: { project: Project; indexLabel: string }) {
  return (
    <article className="project">
      <div className="idx">{indexLabel}</div>
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
  )
}

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section id="builds" index="04" title="builds">
      <h2 className="eyebrow">Things I&apos;ve shipped.</h2>
      <p className="lede">
        Systems I built to understand systems better, end-to-end, from cluster fabric down to
        schema.
      </p>
      <div className="projects-grid">
        {featured.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            indexLabel={`P.${String(i + 1).padStart(2, '0')}`}
          />
        ))}
      </div>
      {rest.length > 0 && (
        <>
          <div
            className={`grid-collapse${showAll ? ' open' : ''}`}
            aria-hidden={!showAll}
          >
            <div className="grid-collapse-inner">
              <div className="projects-grid grid-collapse-grid">
                {rest.map((project, i) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    indexLabel={`P.${String(featured.length + i + 1).padStart(2, '0')}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="projects-more">
            <button
              type="button"
              className="see-more"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
            >
              {showAll ? 'Show fewer' : 'See more'}
              <span className="arrow" aria-hidden="true">
                {showAll ? '↑' : '↓'}
              </span>
            </button>
          </div>
        </>
      )}
    </Section>
  )
}
