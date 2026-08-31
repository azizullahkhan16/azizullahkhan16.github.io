export interface SkillGroup {
  group: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    group: 'Cloud Platforms',
    items: ['Azure', 'AWS'],
  },
  {
    group: 'Infrastructure & DevOps',
    items: ['Linux', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'],
  },
  {
    group: 'Observability',
    items: ['Prometheus', 'Grafana', 'Azure Monitor', 'PagerDuty'],
  },
  {
    group: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    group: 'Frameworks',
    items: ['FastAPI', 'Spring Boot', 'Node.js', 'React.js'],
  },
  {
    group: 'Database Systems',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
]
