import type { Metadata } from 'next'
import { profile } from '@/data/profile'
import { ThemeToggle } from '@/components/theme-toggle'
import './academic.css'

export const metadata: Metadata = {
  title: 'Azizullah Khan',
  description:
    'Azizullah Khan, a student and aspiring systems researcher interested in distributed systems, networking, and distributed ML training and serving systems.',
  alternates: { canonical: 'https://azizullahkhan16.github.io/' },
  openGraph: {
    type: 'website',
    url: 'https://azizullahkhan16.github.io/',
    siteName: 'Azizullah Khan',
    title: 'Azizullah Khan',
    description:
      'A student and aspiring systems researcher, applying to thesis-based Master’s programs for Fall 2027.',
    images: [{ url: '/og-academic.png', width: 1200, height: 630, alt: 'Azizullah Khan, student and aspiring systems researcher' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azizullah Khan',
    description:
      'A student and aspiring systems researcher, applying to thesis-based Master’s programs for Fall 2027.',
    images: ['/og-academic.png'],
  },
}

const IBA = 'https://iba.edu.pk/'
const DSD = 'https://datasciencedojo.com/'
const EJENTO = 'https://ejento.ai/'
const SUPERVISOR = 'https://www.iba.edu.pk/faculty-profile.php?ftype=&id=sahaider'

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default function Home() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const cv = `${base}${profile.academicCvPath}`

  return (
    <div className="ac">
      <header className="ac-nav">
        <div className="ac-wrap ac-nav-row">
          <a href="#about" className="ac-brand">Azizullah Khan</a>
          <nav aria-label="Primary">
            <a href="#about">About</a>
            <span aria-hidden="true">/</span>
            <Ext href={cv}>Resume</Ext>
            <span aria-hidden="true">/</span>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="ac-wrap">
        <section id="about" className="ac-about">
          <figure className="ac-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${base}${profile.avatarUrl}`} alt="Azizullah Khan" width={230} height={260} />
          </figure>
          <h2>About Me</h2>
          <p>
            Hi! I’m Azizullah, a student and aspiring systems researcher. I completed my Bachelor’s
            in Computer Science at the{' '}
            <Ext href={IBA}>Institute of Business Administration (IBA), Karachi</Ext> in 2025, where
            I did my final-year project under <Ext href={SUPERVISOR}>Dr. Sajjad Haider</Ext>. I’m now
            applying to thesis-based Master’s programs in Computer Science for <strong>Fall 2027</strong>.
          </p>
          <p>
            Since graduating, I’ve been a Software Engineer on the infrastructure team at{' '}
            <Ext href={DSD}>Data Science Dojo</Ext>, where I help run the cloud platform behind{' '}
            <Ext href={EJENTO}>Ejento AI</Ext>.
          </p>
          <p>
            When I’m not wrestling with experiments, you’ll probably find me out on a run, chasing a
            football or planning my next trip.
          </p>
        </section>

        <section id="research">
          <h2>Research Interest</h2>
          <p>
            My interest in systems started in the classroom. In Operating Systems, I asked:{' '}
            <em>is a hash function faster inside the kernel or behind a system call?</em>{' '}
            (Surprisingly, the system call is nearly free. Starting a process is what costs.) In
            Parallel and Distributed Computing, I measured when splitting graph algorithms across
            processes actually makes them faster. At work, I run into the same questions on
            large-scale production clusters. In graduate school, I want to explore them in{' '}
            <strong>distributed systems</strong> and <strong>networking</strong>, especially in{' '}
            <strong>distributed ML training and serving systems</strong>.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ol className="ac-projects">
            <li>
              <Ext href="https://ir.iba.edu.pk/fyp-bscs/22/">
                Indus Sahulat: Real-Time Emergency Response for Indus Hospital &amp; Health Network ↗
              </Ext>
              <p className="ac-authors">
                Final-year project, supervised by Dr. Sajjad Haider ·{' '}
                <Ext href="https://github.com/azizullahkhan16/indus-sahulat-backend">Code</Ext>
              </p>
              <p>
                Connects patients, hospitals and ambulance drivers in real time, so the medical team
                is ready by the time the patient arrives.
              </p>
            </li>
            <li>
              <Ext href="https://doi.org/10.5281/zenodo.23002316">
                Below the Granularity Floor: Measuring Python Multiprocessing Overhead in
                Shortest-Path Algorithms ↗
              </Ext>
              <p className="ac-authors">
                <strong>Azizullah Khan</strong>, Abdullah Iqbal, Haseeb Ahmed ·{' '}
                <Ext href="https://github.com/azizullahkhan16/parallel-sssp-experiments">Code</Ext>
              </p>
              <p>
                Parallel Dijkstra, Bellman–Ford and A* never beat their sequential versions.
                Parallelism only pays off at about a millisecond of work per task.
              </p>
            </li>
            <li>
              <Ext href="https://doi.org/10.5281/zenodo.23002506">
                Where Should a Hash Function Live? Measuring Kernel, User-Space, and System-Call
                Costs for SHA-256 on xv6-riscv ↗
              </Ext>
              <p className="ac-authors"><strong>Azizullah Khan</strong>, Abdullah Iqbal</p>
              <p>
                SHA-256 built three ways on xv6: in the kernel, in user space and behind a system
                call. Process creation, not the system call, drives the cost.
              </p>
            </li>
          </ol>
        </section>

        <section id="experience">
          <h2>Professional Experience</h2>
          <div className="ac-entry">
            <div className="ac-entry-head">
              <strong>Software Engineer I, Infrastructure</strong>
              <span className="ac-year">2025–Present</span>
            </div>
            <div className="ac-entry-org"><Ext href={DSD}>Data Science Dojo</Ext></div>
            <p>
              Working on <Ext href={EJENTO}>Ejento AI</Ext>, a platform that lets companies build
              and run AI agents inside their own cloud.
            </p>
            <ul>
              <li>
                Troubleshoot and maintain the production Kubernetes clusters, and roll out upgrades
                with no downtime for users.
              </li>
              <li>Designed a secure hub-and-spoke network connecting eight environments.</li>
              <li>
                Built centralized monitoring that cut incident detection time from about an hour to
                eight minutes.
              </li>
              <li>
                Developed a multi-tenant billing service and set up tracing for every LLM call and
                its cost.
              </li>
            </ul>
          </div>
        </section>

        <section id="teaching">
          <h2>Teaching Experience</h2>
          <p>Teaching Assistant, <Ext href={IBA}>IBA Karachi</Ext>:</p>
          <ul>
            <li>
              <strong>CSE 141: Introduction to Programming</strong> (Fall 2023). Ran weekly labs,
              designed assignments and mentored first-year students. Course was taught in C++.
            </li>
            <li>
              <strong>CSE 142: Object-Oriented Programming Techniques</strong> (Spring 2024).
              Designed assignments and helped students debug their programs.
            </li>
          </ul>
        </section>

        <section id="leadership">
          <h2>Leadership</h2>
          <ul>
            <li>
              <strong>Module Head, Competitive Programming</strong>,{' '}
              <Ext href="https://css.iba.edu.pk/">IBA Computer Science Society</Ext> (2024–25). Led the
              module, which drew 100+ teams, the society’s highest registrations. Received the Best
              Module Head Award for its planning and execution.
            </li>
            <li>
              <strong>Module Head, Databases</strong>,{' '}
              <Ext href="https://dss.iba.edu.pk/">IBA Data Science Society</Ext> (2023–24). Led the
              databases module, organizing its challenges and coordinating the team behind it.
            </li>
          </ul>
        </section>

        <section id="education">
          <h2>Educational Background</h2>
          <div className="ac-entry">
            <div className="ac-entry-head">
              <strong>BS Computer Science</strong>
              <span className="ac-year">2021–2025</span>
            </div>
            <div className="ac-entry-org">
              <Ext href={IBA}>IBA Karachi</Ext>, Pakistan · CGPA 3.76/4.0
            </div>
          </div>
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>Dean’s List, IBA Karachi.</li>
            <li>Best Module Head Award, IBA Computer Science Society, 2024–25.</li>
            <li>Microsoft Certified: Azure DevOps Engineer Expert.</li>
            <li>NVIDIA-Certified Associate: AI Infrastructure &amp; Operations.</li>
          </ul>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <ul className="ac-skills">
            <li><strong>Programming Languages:</strong> Python, C++, Java, Go, TypeScript</li>
            <li><strong>Systems &amp; Cloud:</strong> Linux, Kubernetes, Docker, Slurm, Azure, AWS</li>
            <li><strong>Databases:</strong> PostgreSQL, MongoDB, Redis</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            I’m always happy to talk about research. Reach me at{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
          <ul className="ac-contact">
            <li><Ext href={profile.socials.github}>GitHub</Ext></li>
            <li><Ext href={profile.socials.linkedin}>LinkedIn</Ext></li>
            <li><Ext href={profile.socials.orcid}>ORCID</Ext></li>
            <li><Ext href={cv}>Resume (PDF)</Ext></li>
          </ul>
        </section>
      </main>

      <footer className="ac-wrap ac-footer">
        <span>© {new Date().getFullYear()} Azizullah Khan</span>
        <a href={`${base}/portfolio/`}>Full portfolio →</a>
      </footer>
    </div>
  )
}
