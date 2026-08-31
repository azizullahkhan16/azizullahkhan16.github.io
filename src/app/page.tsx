import { Nav } from '@/components/nav'
import { Hero } from '@/components/sections/hero'
import { EducationSection } from '@/components/sections/education-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { CertificationsSection } from '@/components/sections/certifications-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <footer className="max-w-[900px] mx-auto px-6 py-8 text-center text-[13px] text-muted-foreground border-t border-border">
        &copy; {new Date().getFullYear()} Azizullah Khan
      </footer>
    </div>
  )
}
