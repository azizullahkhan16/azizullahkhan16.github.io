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
    title: 'InferLab: LLM Inference Platform on a Laptop',
    summary:
      'A full LLM inference platform built in public on a local kind cluster: vLLM + llm-d gateway, KEDA autoscaling, a per-tenant cost proxy, Prometheus/Grafana/Loki, and chaos-mesh fault injection, all on free Colab/Kaggle GPUs at zero cloud spend.',
    outcome:
      'Every concept from GPUs to llm-d (routing, autoscaling, KV-cache pressure, SLO burn) reproducible on a laptop.',
    stack: [
      'Kubernetes (kind)',
      'vLLM',
      'llm-d',
      'KEDA',
      'Prometheus',
      'Grafana',
      'Loki',
      'chaos-mesh',
      'FastAPI',
    ],
    links: { github: 'https://github.com/azizullahkhan16/inferlab' },
    featured: true,
  },
  {
    title: 'Indus Sahulat: Emergency Healthcare Response System',
    summary:
      'Real-time emergency-response platform coordinating patients, hospitals, and drivers: fine-grained RBAC across four roles, WebSocket live-location tracking, workflow state machines for dispatch, and Redis-backed caching to survive peak load.',
    outcome:
      '~10% reduction in ambulance response time · ~20% fewer DB writes during peak traffic',
    stack: [
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'Redis',
      'WebSocket',
      'JWT',
    ],
    links: { github: 'https://github.com/azizullahkhan16/indus-sahulat-backend' },
    featured: true,
  },
  {
    title: 'Terraform AWS IaC Template',
    summary:
      'Modular, production-shaped Terraform for a highly available 3-tier AWS stack: VPC subnets, least-privilege security groups, private-subnet RDS, EC2 Auto Scaling behind an ALB with ACM HTTPS, and Route53 DNS.',
    stack: ['Terraform', 'AWS', 'VPC', 'EC2 ASG', 'ALB', 'RDS', 'Route53', 'ACM'],
    links: { github: 'https://github.com/azizullahkhan16/terraform-IAC-template' },
  },
  {
    title: 'LinkWhiz: URL Shortener with Analytics',
    summary:
      'Spring Boot URL shortener with JWT + OAuth2 (Google, GitHub) auth, click analytics, QR codes, plan-based feature gating, and custom aliases.',
    stack: ['Spring Boot 3.4', 'Java 17', 'PostgreSQL', 'JWT', 'OAuth2', 'JPA'],
    links: { github: 'https://github.com/azizullahkhan16/linkWhiz-backend' },
  },
  {
    title: 'DirectDrop: Real-Time File & Message Sharing',
    summary:
      'Instant file and message sharing between devices, no signup required: Spring Boot + WebSocket messaging, MongoDB history with keyword search, and IP-based auto-grouping into rooms.',
    stack: ['Spring Boot', 'WebSocket', 'MongoDB', 'Cloudinary'],
    links: { github: 'https://github.com/azizullahkhan16/directDrop-backend' },
  },
  {
    title: 'Graph Visualizer: Pathfinding on Directed Weighted Graphs',
    summary:
      'Java Swing tool for building directed, weighted graphs and running shortest-path algorithms over them (Dijkstra, Bellman-Ford, A*, Greedy, Bidirectional), with interactive editing and save/load.',
    stack: ['Java', 'Swing', "Dijkstra", 'Bellman-Ford', 'A*'],
    links: { github: 'https://github.com/azizullahkhan16/RoutePlanner' },
  },
]
