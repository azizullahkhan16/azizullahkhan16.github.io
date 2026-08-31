import { Section } from '@/components/section'
import { certifications } from '@/data/certifications'

export function CertificationsSection() {
  if (certifications.length === 0) return null

  return (
    <Section id="certifications" title="Certifications">
      <div className="space-y-0 divide-y divide-border">
        {certifications.map((cert) => (
          <div key={cert.title} className="py-4 first:pt-0 flex flex-col md:flex-row md:justify-between md:items-start gap-1">
            <div>
              <div className="text-[15px] font-semibold">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cert.title}
                  </a>
                ) : (
                  cert.title
                )}
              </div>
              <div className="text-[13px] text-muted-foreground mt-0.5">
                {cert.issuer}
              </div>
            </div>
            {cert.date && (
              <div className="text-[13px] text-muted-foreground whitespace-nowrap">
                {cert.date}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
