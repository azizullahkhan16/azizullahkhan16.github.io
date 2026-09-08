import Image from 'next/image'
import { Section } from '@/components/section'
import { certifications } from '@/data/certifications'

export function CertificationsSection() {
  if (certifications.length === 0) return null
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <Section id="signals" index="06" title="signals">
      <h2 className="eyebrow">Verified along the way.</h2>
      <p className="lede">
        External signals from Microsoft and NVIDIA. Each links to a live credential.
      </p>
      <div className="certs-grid">
        {certifications.map((cert) => {
          const Wrapper = cert.credentialUrl ? 'a' : 'div'
          const wrapperProps = cert.credentialUrl
            ? { href: cert.credentialUrl, target: '_blank', rel: 'noopener noreferrer' }
            : {}
          return (
            <Wrapper key={cert.code} className="cert" {...wrapperProps}>
              <div className="cert-badge">
                <Image
                  src={`${basePath}${cert.badgeImage}`}
                  alt={`${cert.title} badge`}
                  width={68}
                  height={68}
                />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-meta">
                <span>
                  {cert.issuer}
                  {cert.issuer === 'Microsoft' && ` · ${cert.code}`}
                </span>
                {cert.credentialUrl && <span className="verify">verify ↗</span>}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </Section>
  )
}
