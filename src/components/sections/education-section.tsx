import { Section } from '@/components/section'
import { education } from '@/data/education'

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-0 divide-y divide-border">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="flex flex-col md:flex-row md:justify-between md:items-start py-5 first:pt-0 gap-1"
          >
            <div>
              <div className="text-base font-semibold">{edu.degree}</div>
              <div className="text-sm text-muted-foreground mt-0.5">
                {edu.institution}
              </div>
              {edu.gpa && (
                <div className="text-sm text-muted-foreground">
                  GPA: {edu.gpa}
                </div>
              )}
              {edu.honors && edu.honors.length > 0 && (
                <div className="text-sm text-muted-foreground">
                  {edu.honors.join(' · ')}
                </div>
              )}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="text-sm text-muted-foreground mt-2">
                  <span className="font-medium text-foreground">Coursework: </span>
                  {edu.coursework.join(', ')}
                </div>
              )}
            </div>
            <div className="text-[13px] text-muted-foreground md:text-right whitespace-nowrap">
              {edu.dates}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
