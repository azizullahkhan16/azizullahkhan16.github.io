import Image from 'next/image'
import { profile } from '@/data/profile'
import { education } from '@/data/education'

export function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const primaryEdu = education[0]

  return (
    <section id="hero" className="hero">
      <div className="page hero-grid">
        <div className="rail">
          <span className="index">00</span>
          <span className="title">intro</span>
        </div>
        <div>
          <div className="hero-inner">
            <div>
              <h1>
                Powering the <em>AI</em>&nbsp;you use,
                <br />
                from behind the scenes.
              </h1>

              <p className="pitch">
                <strong>Software Engineer, Infrastructure</strong> at {profile.affiliation}. I
                build and run the platform our AI applications sit on. That layer decides how
                deployable, scalable, and reliable production serving actually is. Moving deeper
                into the infrastructure of{' '}
                <strong>training and inference at scale</strong>: fault-tolerant training
                clusters, autoscaling GPU pools under agentic and long-context load, and
                observability that catches non-deterministic failures before users do.
              </p>

              <div className="socials">
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
                {profile.socials.github && (
                  <a href={profile.socials.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                  </a>
                )}
                {profile.socials.linkedin && (
                  <a href={profile.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                )}
                {profile.socials.orcid && (
                  <a href={profile.socials.orcid} aria-label="ORCID" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.516.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>
                  </a>
                )}
                {profile.socials.scholar && (
                  <a href={profile.socials.scholar} aria-label="Google Scholar" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" /></svg>
                  </a>
                )}
              </div>
            </div>

            <div className="hero-portrait">
              <div className="frame">
                <Image
                  src={`${basePath}${profile.avatarUrl}`}
                  alt={profile.name}
                  width={220}
                  height={220}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="meta-strip">
            <div className="cell">
              <div className="k">Currently</div>
              <div className="v">
                SWE-I, Infrastructure
                <br />
                <small>{profile.affiliation} · Remote</small>
              </div>
            </div>
            <div className="cell">
              <div className="k">Focus</div>
              <div className="v">
                AI Infrastructure
                <br />
                <small>training + inference at scale</small>
              </div>
            </div>
            <div className="cell">
              <div className="k">Studied at</div>
              <div className="v">
                {primaryEdu?.monogram ?? 'IBA Karachi'} · CS
                <br />
                <small>
                  {primaryEdu?.gpa && `${primaryEdu.gpa} CGPA`}
                </small>
              </div>
            </div>
            <div className="cell">
              <div className="k">Next</div>
              <div className="v">
                Research master&apos;s
                <br />
                <small>applying&nbsp;now</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
