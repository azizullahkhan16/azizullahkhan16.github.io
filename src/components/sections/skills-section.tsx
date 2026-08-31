import { Section } from '@/components/section'
import { skills } from '@/data/skills'

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="text-sm font-semibold mb-3">{group.group}</h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[13px] px-3 py-1 bg-card border border-border rounded text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
