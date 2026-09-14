'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Section } from '@/components/section'
import { certifications, type Certification } from '@/data/certifications'

const VISIBLE = 6

function CertCard({ cert }: { cert: Certification }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const Wrapper = cert.credentialUrl ? 'a' : 'div'
  const wrapperProps = cert.credentialUrl
    ? { href: cert.credentialUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {}
  const className = `cert${cert.upcoming ? ' upcoming' : ''}`
  return (
    <Wrapper className={className} {...wrapperProps}>
      {cert.upcoming && <span className="cert-ribbon">ongoing</span>}
      <div className="cert-badge">
        {cert.badgeImage ? (
          <Image
            src={`${basePath}${cert.badgeImage}`}
            alt={`${cert.title} badge`}
            width={68}
            height={68}
          />
        ) : (
          <span className="cert-code-placeholder">{cert.code}</span>
        )}
      </div>
      <h3 className="cert-title">{cert.title}</h3>
      <div className="cert-meta">
        <span>
          {cert.issuer}
          {cert.issuer === 'Microsoft' && ` · ${cert.code}`}
        </span>
        {cert.upcoming ? (
          <span className="in-prep">in prep</span>
        ) : (
          cert.credentialUrl && <span className="verify">verify ↗</span>
        )}
      </div>
    </Wrapper>
  )
}

export function CertificationsSection() {
  const [showAll, setShowAll] = useState(false)
  if (certifications.length === 0) return null
  const visible = certifications.slice(0, VISIBLE)
  const hidden = certifications.slice(VISIBLE)

  return (
    <Section id="signals" index="05" title="signals">
      <h2 className="eyebrow">Verified along the way.</h2>
      <p className="lede">
        External signals from Microsoft and NVIDIA. Verified credentials link out; ones currently
        in prep are labelled <em>ongoing</em>.
      </p>
      <div className="certs-grid">
        {visible.map((cert) => (
          <CertCard key={cert.code} cert={cert} />
        ))}
      </div>
      {hidden.length > 0 && (
        <>
          <div
            className={`grid-collapse${showAll ? ' open' : ''}`}
            aria-hidden={!showAll}
          >
            <div className="grid-collapse-inner">
              <div className="certs-grid grid-collapse-grid">
                {hidden.map((cert) => (
                  <CertCard key={cert.code} cert={cert} />
                ))}
              </div>
            </div>
          </div>
          <div className="certs-more">
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
