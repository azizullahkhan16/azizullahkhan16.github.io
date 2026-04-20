import type { ChatSession } from '@/hooks/useChat'

const STORAGE_KEY = 'portfolio_chat_sessions'
const MAX_SESSIONS = 30

export function loadSessions(): ChatSession[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as ChatSession[]
  } catch {
    return []
  }
}

export function saveSessions(sessions: ChatSession[]): void {
  try {
    const trimmed = [...sessions]
      .sort((a, b) => a.createdAt - b.createdAt)
      .slice(-MAX_SESSIONS)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
  } catch {
    // quota exceeded — silently ignore
  }
}

export function deriveTitle(text: string): string {
  const trimmed = text.trim()
  return trimmed.length > 40 ? trimmed.slice(0, 40) + '…' : trimmed
}
