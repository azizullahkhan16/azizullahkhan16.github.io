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
    role: 'Software Engineer - I · Infrastructure',
    org: 'Data Science Dojo',
    location: 'Remote',
    dates: 'Aug 2025 — Present',
    current: true,
    bullets: [
      'Productionized <strong>AKS end-to-end</strong> — pool separation and scheduled node upgrades with <span class="metric">zero user-visible downtime</span>; every new service inherits alerting and observability from day one.',
      'Made the cluster <strong>reproducible from source</strong> — git + Key Vault only. Full teardown-to-restore in <span class="metric">one pipeline run</span>.',
      'Deployed and <strong>production-hardened Langfuse on AKS</strong> — the <span class="metric">first observability layer</span> for our LLM apps: every prompt, trace, and cost, per-tenant, no public endpoints.',
      'Designed a <strong>zero-trust hub-spoke network across <span class="metric">8 spokes</span></strong> — the foundation behind our SOC2, GDPR, HIPAA posture and enterprise-tier deals.',
      'Modular IaC cut environment provisioning from <span class="metric">~2 h → ~20 min</span> across <span class="metric">8 environments</span>.',
      'Owned a <strong>multi-tenant, event-driven billing service</strong> — <span class="metric">8 dimensions × 5 tenants</span>.',
      'Centralized monitoring across the tenant fleet — <span class="metric">95%+ coverage</span>; MTTD ~1 h → <span class="metric">~8 min</span> (<span class="metric">~7× faster</span>).',
    ],
  },
  {
    role: 'Junior Backend Developer',
    org: 'Salsoft Technologies',
    location: 'Karachi',
    dates: 'Jan 2024 — Jul 2025',
    bullets: [
      'Shipped backend services for <strong>three production applications</strong> — all <span class="metric">still live</span>, code-reviewed and test-covered end-to-end.',
      'Built the <strong>cross-cutting layer new features still compose on</strong> — fine-grained RBAC, WebSocket real-time, in-app chat, dynamic-filter search.',
      'Held <strong>p95 flat on hot-path APIs</strong> through the product’s fastest feature-growth stretch.',
    ],
  },
]
