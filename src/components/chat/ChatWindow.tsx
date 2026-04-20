'use client'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'
import { SuggestedQuestions } from './SuggestedQuestions'
import type { Message } from '@/hooks/useChat'

interface ChatWindowProps {
  messages: Message[]
  isLoading: boolean
  onSuggestedQuestion: (question: string) => void
  disableStream?: boolean
  activeId: string | null
}

export function ChatWindow({
  messages,
  isLoading,
  onSuggestedQuestion,
  disableStream = false,
  activeId,
}: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const justSwitchedRef = useRef(false)
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  // Scroll to top when session changes
  useEffect(() => {
    justSwitchedRef.current = true
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
    setShowScrollBtn(false)
    const t = setTimeout(() => { justSwitchedRef.current = false }, 50)
    return () => clearTimeout(t)
  }, [activeId])

  // Scroll to bottom on new messages (skip if we just switched sessions)
  useEffect(() => {
    if (justSwitchedRef.current) return
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return
    const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
    setShowScrollBtn(distFromBottom > 100)
  }

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const lastAssistantIndex = messages
    .map((m, i) => ({ m, i }))
    .filter(({ m }) => m.role === 'assistant')
    .at(-1)?.i

  return (
    <div className="flex-1 overflow-hidden relative">
      <div
        ref={containerRef}
        className="h-full overflow-y-auto"
        onScroll={handleScroll}
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
                  isLatest={!disableStream && index === lastAssistantIndex}
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

      {/* Scroll-to-bottom button */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            onClick={scrollToBottom}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/30 transition-colors"
            aria-label="Scroll to bottom"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
