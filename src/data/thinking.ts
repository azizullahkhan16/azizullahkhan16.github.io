export interface Question {
  label: string
  body: string
  tag: string
}

export const thinkingLede =
  "The three ML infrastructure problems I’m studying now — and <em>actively seeking research collaborations</em> to go deeper on."

export const questions: Question[] = [
  {
    label: 'Q.01',
    body: 'How do we <em>serve AI workloads efficiently</em> when a single request can be milliseconds or minutes, tokens or tool graphs, and the same GPU has to hold prompts, prefix caches, and KV state for tenants that don’t trust each other?',
    tag: '→ continuous batching · KV-cache management · prefill/decode disaggregation · multi-tenant scheduling',
  },
  {
    label: 'Q.02',
    body: 'What does <em>monitoring</em> mean for a system whose failures aren’t crashes but drift — where P95 latency is only half the story, and the SLO is a quality signal that has to be computed from traces, evals, and user feedback rather than measured off a socket?',
    tag: '→ trace-based evaluation · LLM-as-judge · online quality metrics · alertable regressions',
  },
  {
    label: 'Q.03',
    body: 'How do training and inference clusters <em>stay reliable at scale</em> when jobs run for weeks, hardware fails silently, and a single straggling GPU can stall a global optimizer or a global queue?',
    tag: '→ fault-tolerant training · elastic scheduling · silent-data-corruption detection · checkpoint/restore at scale',
  },
]
