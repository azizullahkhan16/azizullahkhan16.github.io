import Image from 'next/image'
import { profile } from '@/data/profile'
import { interests } from '@/data/interests'
import { education } from '@/data/education'

export function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <section id="about" className="bg-section-bg">
      <div className="max-w-[900px] mx-auto px-6 pt-14 pb-14 md:pt-16 md:pb-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
          <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-4 border-border flex-shrink-0">
            <Image
              src={`${basePath}${profile.avatarUrl}`}
              alt={profile.name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-[32px] font-bold leading-tight">
              {profile.name}
            </h1>
            <p className="text-[17px] text-muted-foreground mt-1">
              {profile.positioning}
            </p>
            <p className="text-sm text-muted-foreground">
              {profile.affiliation}
            </p>
            <p className="mt-4 text-foreground leading-relaxed max-w-[520px]">
              {profile.bio}
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-5 justify-center md:justify-start">
              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-accent hover:bg-accent-light transition-colors"
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-accent hover:bg-accent-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              )}
              {profile.socials.scholar && (
                <a
                  href={profile.socials.scholar}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-accent hover:bg-accent-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
                </a>
              )}
              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-accent hover:bg-accent-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              )}
              {profile.socials.twitter && (
                <a
                  href={profile.socials.twitter}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-accent hover:bg-accent-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Interests + Education inline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 pt-8 border-t border-border">
          <div>
            <h3 className="text-base font-semibold mb-3">Research Interests</h3>
            <ul className="space-y-1.5">
              {interests.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Education</h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <div className="text-sm font-semibold">{edu.degree}</div>
                  <div className="text-[13px] text-muted-foreground">
                    {edu.institution} · {edu.dates}
                  </div>
                  {edu.gpa && (
                    <div className="text-[13px] text-muted-foreground">
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
