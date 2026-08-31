export interface Project {
  title: string
  summary: string
  outcome?: string
  stack: string[]
  links: {
    github?: string
    demo?: string
    writeup?: string
  }
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Indus Sahulat — Emergency Healthcare Response System',
    summary:
      'Real-time emergency healthcare platform improving coordination between patients, hospitals, and drivers. Integrated Spring Security with fine-grained RBAC, WebSocket-based real-time tracking, and Redis-backed location caching.',
    outcome: '~10% reduction in ambulance response time, ~20% decrease in DB writes during peak loads',
    stack: ['Spring Boot', 'PostgreSQL', 'Redis', 'WebSocket', 'Spring Security'],
    links: { github: 'https://github.com/azizullahkhan16' },
    featured: true,
  },
  {
    title: 'AWS Cloud Infrastructure Deployment',
    summary:
      'Highly available 3-tier architecture on AWS across multiple availability zones with public/private subnets, internet-facing load balancer, autoscaling, and Jenkins CI/CD pipeline with Route 53 domain routing.',
    outcome: 'Automated build and deployment across multi-AZ infrastructure',
    stack: ['AWS', 'Jenkins', 'CI/CD', 'Route 53', 'EC2', 'VPC'],
    links: { github: 'https://github.com/azizullahkhan16' },
    featured: true,
  },
]
