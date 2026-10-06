import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Azizullah Khan · AI Infrastructure Engineer',
  description:
    'Software Engineer, Infrastructure at Data Science Dojo. I build and run the platform behind LLM applications (networking, observability, multi-tenant billing) and publish reproducible measurement studies on systems performance.',
  keywords: [
    'AI infrastructure',
    'LLM infrastructure',
    'ML systems',
    'platform engineering',
    'Kubernetes',
    'Azure',
    'observability',
    'performance measurement',
  ],
  authors: [{ name: 'Azizullah Khan', url: 'https://azizullahkhan16.github.io' }],
  alternates: { canonical: 'https://azizullahkhan16.github.io/portfolio/' },
  openGraph: {
    type: 'website',
    url: 'https://azizullahkhan16.github.io/portfolio/',
    siteName: 'Azizullah Khan',
    title: 'Azizullah Khan · AI Infrastructure Engineer',
    description:
      'I build and run the platform behind LLM applications, and publish reproducible measurement studies on systems performance.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Azizullah Khan. Powering the AI you use, from behind the scenes.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azizullah Khan · AI Infrastructure Engineer',
    description:
      'I build and run the platform behind LLM applications, and publish reproducible measurement studies on systems performance.',
    images: ['/og.png'],
  },
}

export default function Portfolio() {
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
