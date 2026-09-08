export interface NewsItem {
  date: string
  kind: string
  text: string
}

export const news: NewsItem[] = [
  {
    date: 'Sep 2026',
    kind: 'Reading',
    text: 'FlashAttention-3 and mixture-of-depths papers; taking notes on serving-time implications.',
  },
  {
    date: 'Aug 2026',
    kind: 'Shipped',
    text: 'Deployed Langfuse for LLM observability at Data Science Dojo — ClickHouse, Postgres, and Blob all behind private endpoints.',
  },
  {
    date: 'Jul 2026',
    kind: 'Ops',
    text: 'Centralized monitoring rolled out — incident detection dropped from ~1 h to 8 min across 5 tenants.',
  },
  {
    date: 'Jun 2026',
    kind: 'IaC',
    text: 'Modular Terraform rollout across 8 environments; provisioning ~2 h → ~20 min.',
  },
  {
    date: 'Aug 2025',
    kind: 'Joined',
    text: 'Started at Data Science Dojo as Software Engineer — I on the Infrastructure team.',
  },
  {
    date: 'May 2025',
    kind: 'Milestone',
    text: 'Graduated BS Computer Science, IBA Karachi — magna cum laude, 3.76 GPA.',
  },
]
