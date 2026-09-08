export interface Experience {
  role: string
  org: string
  dates: string
  location?: string
  current?: boolean
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer — I · Infrastructure',
    org: 'Data Science Dojo',
    location: 'Remote',
    dates: 'Aug 2025 — Present',
    current: true,
    bullets: [
      'Designed a zero-trust hub-spoke network across <span class="metric">8 spokes</span>, privatizing every stateful resource — contributing to SOC2, GDPR, HIPAA compliance posture.',
      'Deployed <strong>Langfuse on AKS</strong> for LLM observability with ClickHouse, Postgres, and Blob provisioned without a single public endpoint.',
      'Wrote modular IaC that dropped environment provisioning from <span class="metric">~2 h → ~20 min</span> across 8 environments.',
      'Standardized CI/CD with caching, parallelization, and SonarQube quality gates; enforced test coverage at build time.',
      'Owned a multi-tenant billing service — <span class="metric">8 dimensions × 5 tenants</span>, event-driven.',
      'Built centralized monitoring with <span class="metric">95%+ tenant coverage</span>; incident detection dropped from ~1 h to <span class="metric">8 min</span>.',
      'Established production-grade on-call practices with structured playbooks, enabling independent incident investigation across teams.',
    ],
  },
  {
    role: 'Junior Backend Developer',
    org: 'Salsoft Technologies',
    location: 'Karachi',
    dates: 'Jan 2024 — Jul 2025',
    bullets: [
      'Shipped backend services for three production applications — modular, testable, code-reviewed.',
      'Built RBAC, real-time notifications, scalable chat, and advanced dynamic-filter search.',
      'Optimized high-traffic APIs with indexes, query rewrites, and caching for a <span class="metric">~5% perf gain</span>.',
    ],
  },
]
