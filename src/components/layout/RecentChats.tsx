'use client'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ChatSession } from '@/hooks/useChat'

interface RecentChatsProps {
  pinnedSessions: ChatSession[]
  userSessions: ChatSession[]
  activeId: string | null
  onSwitch: (id: string) => void
  onDelete: (id: string) => void
  onClose?: () => void
}

export function RecentChats({
  pinnedSessions,
  userSessions,
  activeId,
  onSwitch,
  onDelete,
  onClose,
}: RecentChatsProps) {
  const all = [
    ...pinnedSessions,
    ...[...userSessions].sort((a, b) => b.createdAt - a.createdAt),
  ]

  const handleSwitch = (id: string) => {
    onSwitch(id)
    onClose?.()
  }

  return (
    <div className="flex flex-col h-full">
      <p className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] shrink-0">
        Recent
      </p>

      <div className="flex-1 min-h-0 overflow-y-auto space-y-0.5 pr-1">
        {all.map(session => (
          <div key={session.id} className="group relative">
            <button
              onClick={() => handleSwitch(session.id)}
              className={cn(
                'w-full flex items-center px-3 py-2 rounded-lg text-sm text-left',
                'hover:bg-violet-500/10 hover:text-violet-400 transition-colors',
                !session.pinned && 'pr-8',
                activeId === session.id && 'bg-violet-500/10 text-violet-400'
              )}
            >
              <span className="truncate">{session.title}</span>
            </button>
            {!session.pinned && (
              <button
                onClick={(e) => { e.stopPropagation(); onDelete(session.id) }}
                className={cn(
                  'absolute right-1 top-1/2 -translate-y-1/2',
                  'h-6 w-6 flex items-center justify-center rounded',
                  'opacity-0 group-hover:opacity-100 transition-opacity',
                  'text-[var(--muted-foreground)] hover:text-red-400 hover:bg-red-500/10'
                )}
                aria-label={`Delete "${session.title}"`}
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
