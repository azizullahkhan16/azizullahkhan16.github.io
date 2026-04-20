'use client'
import { useState, useCallback } from 'react'
import { matchIntent } from '@/lib/matcher'
import { profile } from '@/data/profile'

export type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const submit = useCallback(
    (text: string) => {
      if (!text.trim() || isLoading) return

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: 'user',
        content: text.trim(),
      }
      setMessages((prev) => [...prev, userMsg])
      setIsLoading(true)

      setTimeout(() => {
        const response = matchIntent(text)
        const assistantMsg: Message = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: response,
        }
        setMessages((prev) => [...prev, assistantMsg])
        setIsLoading(false)
      }, profile.typingDelay)
    },
    [isLoading]
  )

  const reset = useCallback(() => {
    setMessages([])
    setIsLoading(false)
  }, [])

  return { messages, isLoading, submit, reset }
}
