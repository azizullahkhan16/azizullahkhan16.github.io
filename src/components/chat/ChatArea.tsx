'use client'
import { ChatHeader } from '@/components/layout/ChatHeader'
import { ChatWindow } from './ChatWindow'
import { InputBar } from './InputBar'
import type { Message } from '@/hooks/useChat'

interface ChatAreaProps {
  messages: Message[]
  isLoading: boolean
  onSubmit: (text: string) => void
  onMenuClick?: () => void
  currentSection?: string
}

export function ChatArea({
  messages,
  isLoading,
  onSubmit,
  onMenuClick,
  currentSection,
}: ChatAreaProps) {
  return (
    <div className="flex flex-col flex-1 h-screen overflow-hidden">
      <ChatHeader onMenuClick={onMenuClick} currentSection={currentSection} />
      <ChatWindow
        messages={messages}
        isLoading={isLoading}
        onSuggestedQuestion={onSubmit}
      />
      {/* Input centered with max width like Claude */}
      <div className="w-full max-w-3xl mx-auto w-full">
        <InputBar onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </div>
  )
}
