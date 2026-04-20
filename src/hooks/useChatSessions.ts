'use client'
import { useState, useCallback, useMemo, useRef } from 'react'
import { prebuiltChats } from '@/data/prebuilt-chats'
import { loadSessions, saveSessions, deriveTitle } from '@/lib/sessions'
import { matchIntent } from '@/lib/matcher'
import { profile } from '@/data/profile'
import type { Message, ChatSession } from '@/hooks/useChat'

const PREBUILT = prebuiltChats

export function useChatSessions() {
  // In-memory ephemeral continuations of prebuilt chats
  const [pinnedMessages, setPinnedMessages] = useState<Record<string, Message[]>>(
    () => Object.fromEntries(PREBUILT.map(s => [s.id, s.messages]))
  )

  const [sessions, setSessions] = useState<ChatSession[]>(() => loadSessions())
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const pendingIdRef = useRef<string | null>(null)

  const isPinned = PREBUILT.some(s => s.id === activeId)

  const messages = useMemo(() => {
    if (activeId === null) return []
    if (isPinned) return pinnedMessages[activeId] ?? []
    return sessions.find(s => s.id === activeId)?.messages ?? []
  }, [activeId, isPinned, pinnedMessages, sessions])

  const submit = useCallback((text: string, section?: string) => {
    if (!text.trim() || isLoading) return

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text.trim(),
    }

    if (isPinned && activeId !== null) {
      // Ephemeral — update in-memory only
      const targetId = activeId
      setPinnedMessages(prev => ({
        ...prev,
        [targetId]: [...(prev[targetId] ?? []), userMsg],
      }))
      setIsLoading(true)
      setTimeout(() => {
        const response = matchIntent(text)
        const assistantMsg: Message = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: response,
        }
        setPinnedMessages(prev => ({
          ...prev,
          [targetId]: [...(prev[targetId] ?? []), assistantMsg],
        }))
        setIsLoading(false)
      }, profile.typingDelay)
      return
    }

    if (activeId === null) {
      // New user session
      const newId = crypto.randomUUID()
      pendingIdRef.current = newId
      setActiveId(newId)

      const newSession: ChatSession = {
        id: newId,
        title: deriveTitle(text),
        messages: [userMsg],
        createdAt: Date.now(),
        section,
      }

      setSessions(prev => {
        const updated = [newSession, ...prev]
        saveSessions(updated)
        return updated
      })

      setIsLoading(true)
      setTimeout(() => {
        const response = matchIntent(text)
        const assistantMsg: Message = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: response,
        }
        const targetId = pendingIdRef.current ?? newId
        setSessions(prev => {
          const updated = prev.map(s =>
            s.id === targetId ? { ...s, messages: [...s.messages, assistantMsg] } : s
          )
          saveSessions(updated)
          return updated
        })
        setIsLoading(false)
      }, profile.typingDelay)
      return
    }

    // Existing user session
    const targetId = activeId
    setSessions(prev => {
      const updated = prev.map(s =>
        s.id === targetId ? { ...s, messages: [...s.messages, userMsg] } : s
      )
      saveSessions(updated)
      return updated
    })

    setIsLoading(true)
    setTimeout(() => {
      const response = matchIntent(text)
      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response,
      }
      setSessions(prev => {
        const updated = prev.map(s =>
          s.id === targetId ? { ...s, messages: [...s.messages, assistantMsg] } : s
        )
        saveSessions(updated)
        return updated
      })
      setIsLoading(false)
    }, profile.typingDelay)
  }, [activeId, isLoading, isPinned])

  const newSession = useCallback(() => {
    setActiveId(null)
    setIsLoading(false)
  }, [])

  const switchSession = useCallback((id: string) => {
    setActiveId(id)
    setIsLoading(false)
  }, [])

  const deleteSession = useCallback((id: string) => {
    const isPinnedSession = PREBUILT.some(s => s.id === id)
    if (isPinnedSession) return
    setSessions(prev => {
      const updated = prev.filter(s => s.id !== id)
      saveSessions(updated)
      return updated
    })
    setActiveId(prev => (prev === id ? null : prev))
  }, [])

  const renameSession = useCallback((id: string, title: string) => {
    const isPinnedSession = PREBUILT.some(s => s.id === id)
    if (isPinnedSession) return
    setSessions(prev => {
      const updated = prev.map(s => s.id === id ? { ...s, title } : s)
      saveSessions(updated)
      return updated
    })
  }, [])

  return {
    pinnedSessions: PREBUILT,
    sessions,
    activeId,
    messages,
    isLoading,
    submit,
    reset: newSession,
    newSession,
    switchSession,
    deleteSession,
    renameSession,
  }
}
