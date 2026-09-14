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
    title: 'InferLab — LLM Inference Platform on a Laptop',
    summary:
      'A 10-step, in-public build of a full LLM inference platform on a local kind cluster: vLLM + llm-d gateway, KEDA autoscaling, per-tenant cost proxy, Prometheus/Grafana/Loki observability, and chaos-mesh fault injection. Uses free Colab/Kaggle GPUs so the whole stack runs at zero cloud spend.',
    outcome:
      'Every concept from GPUs to llm-d — routing, autoscaling, KV-cache pressure, SLO burn — reproducible on a laptop.',
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
    title: 'Indus Sahulat — Emergency Healthcare Response System',
    summary:
      'Real-time emergency healthcare platform coordinating patients, hospitals, and drivers. Spring Security with fine-grained RBAC across four user types, WebSocket-based live location tracking, workflow state machines for event dispatch, and Redis-backed location caching to survive peak load.',
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
      'Modular, production-shaped Terraform for a highly available 3-tier AWS stack: VPC subnets, least-privilege security groups, RDS in private subnets, EC2 Auto Scaling behind an ALB with ACM HTTPS, and Route53 DNS. Written as reusable modules with per-module variables and outputs.',
    stack: ['Terraform', 'AWS', 'VPC', 'EC2 ASG', 'ALB', 'RDS', 'Route53', 'ACM'],
    links: { github: 'https://github.com/azizullahkhan16/terraform-IAC-template' },
  },
  {
    title: 'LinkWhiz — URL Shortener with Analytics',
    summary:
      'Spring Boot 3.4 URL shortening service with JWT + OAuth2 (Google, GitHub) auth, PostgreSQL storage, QR-code generation, click analytics, plan-based feature gating, custom aliases, and configurable expiration.',
    stack: ['Spring Boot 3.4', 'Java 17', 'PostgreSQL', 'JWT', 'OAuth2', 'JPA'],
    links: { github: 'https://github.com/azizullahkhan16/linkWhiz-backend' },
  },
  {
    title: 'DirectDrop — Real-Time File & Message Sharing',
    summary:
      'Instant sharing service between devices on the same LAN and across networks — no signup required. Spring Boot + WebSocket for real-time messaging, MongoDB for message history with keyword search, and Cloudinary for file storage. Auto-groups users into chat rooms by IP.',
    stack: ['Spring Boot', 'WebSocket', 'MongoDB', 'Cloudinary'],
    links: { github: 'https://github.com/azizullahkhan16/directDrop-backend' },
  },
  {
    title: 'Graph Visualizer — Pathfinding on Directed Weighted Graphs',
    summary:
      'Java Swing GUI for building directed, weighted graphs and running shortest-path algorithms across them: Dijkstra, Bellman-Ford, A*, Greedy, and Bidirectional Search. Supports interactive vertex/edge editing and save/load of graph state.',
    stack: ['Java', 'Swing', "Dijkstra", 'Bellman-Ford', 'A*'],
    links: { github: 'https://github.com/azizullahkhan16/RoutePlanner' },
  },
]
