'use client'
import { useState, useRef, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface InputBarProps {
  onSubmit: (text: string) => void
  isLoading: boolean
}

export function InputBar({ onSubmit, isLoading }: InputBarProps) {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    const maxHeight = 5 * 24 + 32 // 5 rows * ~24px line height + padding
    el.style.height = Math.min(el.scrollHeight, maxHeight) + 'px'
  }, [])

  const handleSubmit = useCallback(() => {
    const text = value.trim()
    if (!text || isLoading) return
    onSubmit(text)
    setValue('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }, [value, isLoading, onSubmit])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    adjustHeight()
  }

  const canSubmit = value.trim().length > 0 && !isLoading

  return (
    <div className="px-4 pb-4 pt-2">
      <div
        className={cn(
          'relative flex items-end gap-2 rounded-2xl border bg-[var(--card)] p-3 transition-colors',
          'border-[var(--border)] focus-within:border-violet-500'
        )}
      >
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          disabled={isLoading}
          rows={1}
          className={cn(
            'flex-1 resize-none bg-transparent text-sm text-[var(--foreground)]',
            'placeholder:text-[var(--muted-foreground)] focus:outline-none',
            'leading-6 min-h-[24px] max-h-[152px] py-0.5',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        />
        <Button
          size="icon"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={cn(
            'h-8 w-8 shrink-0 rounded-xl transition-all',
            canSubmit
              ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-500/30'
              : 'bg-[var(--border)] text-[var(--muted-foreground)] cursor-not-allowed'
          )}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
      <p className="mt-1.5 text-center text-xs text-[var(--muted-foreground)]">
        Press{' '}
        <kbd className="rounded border border-[var(--border)] px-1 py-0.5 text-xs font-mono">
          Enter
        </kbd>{' '}
        to send &middot;{' '}
        <kbd className="rounded border border-[var(--border)] px-1 py-0.5 text-xs font-mono">
          Shift + Enter
        </kbd>{' '}
        for newline
      </p>
    </div>
  )
}
