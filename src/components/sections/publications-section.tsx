import { Section } from '@/components/section'
import { publications } from '@/data/publications'

export function PublicationsSection() {
  if (publications.length === 0) return null
  return (
    <Section id="pubs" index="02" title="pubs">
      <h2 className="eyebrow">Writeups &amp; reports.</h2>
      <p className="lede">
        Working notes, design documents, and course reports — the way I try research ideas on
        paper before shipping them.
      </p>
      <div className="pub-note">Placeholder entries — swap for real writeups</div>
      {publications.map((p, i) => (
        <div key={`${p.year}-${i}`} className="pub-item">
          <div className="pub-meta">
            <span className="type">{p.type}</span>
            <span>{p.year}</span>
          </div>
          <div>
            <h3 className="pub-title">{p.title}</h3>
            <p className="pub-authors" dangerouslySetInnerHTML={{ __html: p.authors }} />
            <div className="pub-actions">
              {p.links.pdf && (
                <a href={p.links.pdf} target="_blank" rel="noopener noreferrer">pdf ↗</a>
              )}
              {p.links.project && (
                <a href={p.links.project} target="_blank" rel="noopener noreferrer">project ↗</a>
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
