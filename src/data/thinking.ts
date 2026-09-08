export interface Question {
  label: string
  body: string
  tag: string
}

export const thinkingLede =
  "The three systems questions I keep running into at work — the ones I want to <em>spend more time on</em>."

export const questions: Question[] = [
  {
    label: 'Q.01',
    body: 'How should LLM inference infrastructure adapt as <em>prompts increasingly control compute-time</em> — long-context, tool loops, and agentic chains — rather than emitting a single bounded generation?',
    tag: '→ inference scheduling · batching · KV-cache reuse',
  },
  {
    label: 'Q.02',
    body: 'What does <em>observability</em> mean when the system under test is a language model? P95 latency is only half the story once outputs are non-deterministic and quality is the SLO.',
    tag: '→ eval-in-the-loop · trace semantics · alertable quality metrics',
  },
  {
    label: 'Q.03',
    body: 'How do <em>zero-trust patterns survive multi-tenancy</em> when prompt inputs, retrieval indices, and serving weights all cross the same tenant boundary in a single request?',
    tag: '→ isolation · private endpoints · privacy in shared serving',
  },
]
