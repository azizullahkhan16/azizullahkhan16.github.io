import { intents } from '@/data/responses'
import { profile } from '@/data/profile'

export function matchIntent(input: string): string {
  const lower = input.toLowerCase()
  const words = lower.split(/\s+/)

  let bestScore = 0
  let bestResponse = profile.fallbackResponse

  for (const intent of intents) {
    const score = intent.keywords.filter(
      (kw) => words.includes(kw) || lower.includes(kw)
    ).length
    if (score > bestScore) {
      bestScore = score
      bestResponse = intent.response
    }
  }

  return bestResponse
}
