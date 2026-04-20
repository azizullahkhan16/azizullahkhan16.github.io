'use client'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { useStreamText } from '@/hooks/useStreamText'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import type { Message } from '@/hooks/useChat'

interface MessageBubbleProps {
  message: Message
  isLatest?: boolean
}

function UserBubble({ content }: { content: string }) {
  return (
    <div className="flex justify-end px-4 py-2">
      <div
        className={cn(
          'max-w-[75%] rounded-2xl rounded-br-sm px-4 py-3',
          'bg-violet-600 text-white',
          'text-sm leading-relaxed'
        )}
      >
        {content}
      </div>
    </div>
  )
}

function AssistantBubble({
  content,
  isLatest,
}: {
  content: string
  isLatest: boolean
}) {
  const { displayed, isDone } = useStreamText(
    isLatest ? content : content,
    isLatest ? profile.streamSpeed : 0
  )

  const text = isLatest ? displayed : content
  const showCursor = isLatest && !isDone

  return (
    <div className="px-4 py-2">
      <div
        className={cn(
          'max-w-[82%] rounded-2xl rounded-tl-sm px-4 py-3',
          'bg-[var(--card)] border border-[var(--border)]',
          'text-sm'
        )}
      >
        <div className="prose-chat">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        {showCursor && (
          <span className="cursor-blink ml-0.5 text-violet-500 font-light">
            ▋
          </span>
        )}
      </div>
    </div>
  )
}

export function MessageBubble({ message, isLatest = false }: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {message.role === 'user' ? (
        <UserBubble content={message.content} />
      ) : (
        <AssistantBubble content={message.content} isLatest={isLatest} />
      )}
    </motion.div>
  )
}
