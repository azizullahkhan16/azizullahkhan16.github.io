export interface StackLayer {
  layerNumber: string
  layerName: string
  category: string
  items: string[]
  primaryItem?: string
}

export const stack: StackLayer[] = [
  {
    layerNumber: 'L.05',
    category: 'watch',
    layerName: 'Observability',
    items: ['Prometheus', 'Grafana', 'Azure Monitor', 'PagerDuty', 'Langfuse'],
  },
  {
    layerNumber: 'L.04',
    category: 'serve',
    layerName: 'Application',
    items: ['FastAPI', 'Spring Boot', 'Node.js', 'React', 'Python', 'Java', 'TypeScript'],
  },
  {
    layerNumber: 'L.03',
    category: 'store',
    layerName: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'ClickHouse'],
  },
  {
    layerNumber: 'L.02',
    category: 'orchestrate',
    layerName: 'Platform',
    items: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD Pipelines', 'Linux'],
  },
  {
    layerNumber: 'L.01',
    category: 'run',
    layerName: 'Cloud fabric',
    items: ['Azure', 'AWS'],
    primaryItem: 'Azure',
  },
]
