import { Section } from '@/components/section'
import { profile } from '@/data/profile'

interface Row {
  method: string
  value: string
  href: string
  cta: string
  external?: boolean
}

export function ContactSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const rows: Row[] = [
    {
      method: 'email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      cta: 'compose →',
    },
  ]
  if (profile.socials.scholar) {
    rows.push({
      method: 'scholar',
      value: profile.socials.scholar.replace(/^https?:\/\//, ''),
      href: profile.socials.scholar,
      cta: 'visit ↗',
      external: true,
    })
  }
  if (profile.socials.github) {
    rows.push({
      method: 'github',
      value: profile.socials.github.replace(/^https?:\/\//, ''),
      href: profile.socials.github,
      cta: 'visit ↗',
      external: true,
    })
  }
  if (profile.socials.linkedin) {
    rows.push({
      method: 'linkedin',
      value: profile.socials.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com/, ''),
      href: profile.socials.linkedin,
      cta: 'visit ↗',
      external: true,
    })
  }
  rows.push({
    method: 'résumé',
    value: profile.cvPath.replace(/^\//, ''),
    href: `${basePath}${profile.cvPath}`,
    cta: 'download ↓',
    external: true,
  })

  return (
    <Section id="ping" index="07" title="ping" noBorder>
      <div className="contact-wrap">
        <div className="kicker">
          <span className="dot" />
          Reachable · usually within a day
        </div>
        <h2>
          Open to labs, teams, and&nbsp;the
          <br />
          <em>questions</em> above.
        </h2>
        <p className="sub">
          Especially if you&apos;re building LLM or AI workload infra, hiring for platform
          engineering, or working on any of the three questions I keep coming back to. Email
          lands first.
        </p>
        {rows.map((row) => (
          <a
            key={row.method}
            className="contact-row"
            href={row.href}
            target={row.external ? '_blank' : undefined}
            rel={row.external ? 'noopener noreferrer' : undefined}
          >
            <span className="method">{row.method}</span>
            <span className="value">{row.value}</span>
            <span className="cta">{row.cta}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
