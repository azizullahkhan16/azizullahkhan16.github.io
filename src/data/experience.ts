export interface Experience {
  role: string
  org: string
  dates: string
  location?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer - I (Infrastructure)',
    org: 'Data Science Dojo',
    dates: 'Aug 2025 — Present',
    bullets: [
      'Designed a zero-trust hub-spoke network topology across 8 spokes, privatizing all stateful resources and contributing to SOC2, GDPR, and HIPAA compliance.',
      'Deployed Langfuse on AKS for LLM observability, provisioning ClickHouse, PostgreSQL, and Azure Blob Storage privately with no public endpoints.',
      'Developed modular Infrastructure-as-Code reducing environment provisioning time from ~2 hours to ~20 minutes across 8 environments.',
      'Standardized CI/CD pipelines with caching, parallelization, and SonarQube quality gates, reducing pipeline runtime and enforcing test coverage at build stage.',
      'Owned end-to-end design of a multi-tenant billing service with automated event-driven billing across 8 billing dimensions and 5 tenants.',
      'Built a centralized monitoring service achieving 95%+ tenant test coverage, reducing incident detection time from ~1 hour to 8 minutes.',
      'Established production-grade on-call practices with structured playbooks, enabling independent incident investigation across teams.',
    ],
  },
  {
    role: 'Junior Backend Developer',
    org: 'Salsoft Technologies',
    dates: 'Jan 2024 — Jul 2025',
    bullets: [
      'Developed backend services for three production applications using modular, testable code and structured code reviews.',
      'Implemented role-based access control, real-time notifications, scalable chat systems, and advanced search with dynamic filtering.',
      'Optimized high-traffic APIs with database indexes, query rewrites, and caching, achieving ~5% performance improvement.',
    ],
  },
]
