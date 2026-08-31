import { Section } from '@/components/section'
import { profile } from '@/data/profile'

export function ContactSection() {
  return (
    <Section id="contact" title="Contact" alt>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Feel free to reach out if you want to discuss research, collaboration, or opportunities.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="text-accent hover:underline text-sm font-medium"
        >
          {profile.email}
        </a>
        {profile.socials.github && (
          <a
            href={profile.socials.github}
            className="text-accent hover:underline text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {profile.socials.linkedin && (
          <a
            href={profile.socials.linkedin}
            className="text-accent hover:underline text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
        {profile.socials.scholar && (
          <a
            href={profile.socials.scholar}
            className="text-accent hover:underline text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
        )}
      </div>
    </Section>
  )
}
