'use client'
import { useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'
import { SuggestedQuestions } from './SuggestedQuestions'
import type { Message } from '@/hooks/useChat'

interface ChatWindowProps {
  messages: Message[]
  isLoading: boolean
  onSuggestedQuestion: (question: string) => void
}

export function ChatWindow({
  messages,
  isLoading,
  onSuggestedQuestion,
}: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const lastAssistantIndex = messages
    .map((m, i) => ({ m, i }))
    .filter(({ m }) => m.role === 'assistant')
    .at(-1)?.i

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto"
    >
      {messages.length === 0 && !isLoading ? (
        <SuggestedQuestions onSelect={onSuggestedQuestion} />
      ) : (
        <div className="py-4 max-w-3xl mx-auto w-full">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <MessageBubble
                key={message.id}
                message={message}
                isLatest={index === lastAssistantIndex}
              />
            ))}
          </AnimatePresence>
          <AnimatePresence>
            {isLoading && <TypingIndicator />}
          </AnimatePresence>
          <div ref={bottomRef} className="h-4" />
        </div>
      )}
    </div>
  )
}
