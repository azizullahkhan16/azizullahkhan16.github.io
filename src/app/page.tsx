import { Nav } from '@/components/nav'
import { Hero } from '@/components/sections/hero'
import { ThinkingSection } from '@/components/sections/thinking-section'
import { PublicationsSection } from '@/components/sections/publications-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { CertificationsSection } from '@/components/sections/certifications-section'
import { RecentSection } from '@/components/sections/recent-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ThinkingSection />
      <PublicationsSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <RecentSection />
      <ContactSection />
      <div className="page">
        <footer className="site">
          <div className="left">© {new Date().getFullYear()} Azizullah Khan</div>
          <div>Deployed on GitHub Pages</div>
        </footer>
      </div>
    </>
  )
}
