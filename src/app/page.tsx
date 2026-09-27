import { Nav } from '@/components/nav'
import { BackToTop } from '@/components/back-to-top'
import { Hero } from '@/components/sections/hero'
import { ThinkingSection } from '@/components/sections/thinking-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { PublicationsSection } from '@/components/sections/publications-section'
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
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <RecentSection />
      <ContactSection />
      <div className="page">
        <footer className="site">
          <div className="left">© {new Date().getFullYear()} Azizullah Khan</div>
          <div>
            <span className="footer-long">Deployed on GitHub Pages</span>
            <span className="footer-short">GitHub Pages</span>
          </div>
        </footer>
      </div>
      <BackToTop />
    </>
  )
}
