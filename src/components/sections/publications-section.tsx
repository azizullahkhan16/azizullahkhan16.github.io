import { Section } from '@/components/section'
import { publications } from '@/data/publications'

export function PublicationsSection() {
  if (publications.length === 0) return null
  return (
    <Section id="pubs" index="03" title="pubs">
      <h2 className="eyebrow">Preprints &amp; reports.</h2>
      <p className="lede">
        Open measurement studies with permanent DOIs. Neither claims a new algorithm; each takes
        a question usually answered by folklore, measures it carefully, and ships the code and data
        so the result can be reproduced.
      </p>
      {publications.map((p, i) => (
        <div key={`${p.year}-${i}`} className="pub-item">
          <div className="pub-meta">
            <span className="type">{p.type}</span>
            <span>{p.year}</span>
          </div>
          <div>
            <h3 className="pub-title">{p.title}</h3>
            <p className="pub-authors" dangerouslySetInnerHTML={{ __html: p.authors }} />
            {p.summary && <p className="pub-summary">{p.summary}</p>}
            <div className="pub-actions">
              {p.links.doi && (
                <a href={p.links.doi} target="_blank" rel="noopener noreferrer">doi ↗</a>
              )}
              {p.links.pdf && (
                <a href={p.links.pdf} target="_blank" rel="noopener noreferrer">pdf ↗</a>
              )}
              {p.links.project && (
                <a href={p.links.project} target="_blank" rel="noopener noreferrer">zenodo ↗</a>
              )}
              {p.links.code && (
                <a href={p.links.code} target="_blank" rel="noopener noreferrer">code ↗</a>
              )}
            </div>
          </div>
        </div>
      ))}
    </Section>
  )
}
