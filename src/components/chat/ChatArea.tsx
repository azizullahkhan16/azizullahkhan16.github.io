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
  disableStream?: boolean
  activeId: string | null
  onRename?: (title: string) => void
  onDelete?: () => void
}

export function ChatArea({
  messages,
  isLoading,
  onSubmit,
  onMenuClick,
  currentSection,
  disableStream = false,
  activeId,
  onRename,
  onDelete,
}: ChatAreaProps) {
  return (
    <div className="flex flex-col flex-1 h-screen overflow-hidden">
      <ChatHeader onMenuClick={onMenuClick} currentSection={currentSection} onRename={onRename} onDelete={onDelete} />
      <ChatWindow
        messages={messages}
        isLoading={isLoading}
        onSuggestedQuestion={onSubmit}
        disableStream={disableStream}
        activeId={activeId}
      />
      {/* Input centered with max width like Claude */}
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-0">
        <InputBar onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </div>
  )
}
