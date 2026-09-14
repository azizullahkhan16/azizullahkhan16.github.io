import { Section } from '@/components/section'
import { experience } from '@/data/experience'

export function ExperienceSection() {
  if (experience.length === 0) return null
  return (
    <Section id="work" index="02" title="work">
      <h2 className="eyebrow">Where I&apos;ve built things.</h2>
      <p className="lede">
        Two engineering roles across ~2.5 years — from shipping backends to owning the platform.
        Every metric below is one I moved.
      </p>
      {experience.map((exp) => {
        const [start, end] = exp.dates.split(' — ')
        return (
          <div key={`${exp.role}-${exp.org}`} className="exp-item">
            <div className="exp-when">
              {start}
              <br />—<br />
              {end}
              {exp.current && <div className="now">now</div>}
            </div>
            <div>
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-org">
                {exp.org}
                {exp.location && (
                  <>
                    <span className="dot">/</span>
                    {exp.location}
                  </>
                )}
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: bullet }} />
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </Section>
  )
}
