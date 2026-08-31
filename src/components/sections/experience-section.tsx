import { Section } from '@/components/section'
import { experience } from '@/data/experience'

export function ExperienceSection() {
  if (experience.length === 0) return null

  return (
    <Section id="experience" title="Experience" alt>
      <div className="space-y-0 divide-y divide-border">
        {experience.map((exp) => (
          <div
            key={`${exp.role}-${exp.org}`}
            className="flex flex-col md:flex-row md:justify-between md:items-start py-5 first:pt-0 gap-1"
          >
            <div>
              <div className="text-[15px] font-semibold">{exp.role}</div>
              <div className="text-sm text-muted-foreground mt-0.5">
                {exp.org}
                {exp.location && ` · ${exp.location}`}
              </div>
              <ul className="mt-2 space-y-1">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                    • {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-[13px] text-muted-foreground md:text-right whitespace-nowrap">
              {exp.dates}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
