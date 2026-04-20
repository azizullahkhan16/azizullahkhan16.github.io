'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, Share2, ChevronDown, Pencil, Trash2, Check, X, Link } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { toSlug } from '@/lib/slug'
import { useState, useRef, useEffect } from 'react'
import { profile } from '@/data/profile'

interface ChatHeaderProps {
  onMenuClick?: () => void
  currentSection?: string
  onRename?: (title: string) => void
  onDelete?: () => void
}

// ─── Share popup ──────────────────────────────────────────────────────────────

function SharePopup({ url, onClose }: { url: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', esc)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={ref}
        className={cn(
          'w-[360px] rounded-2xl border border-white/10',
          'bg-[var(--card)] shadow-2xl',
          'p-5'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-[var(--foreground)]">Share this chat</p>
          <button
            onClick={onClose}
            className="h-6 w-6 flex items-center justify-center rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-violet-500/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* URL row */}
        <div className={cn(
          'flex items-center gap-2 rounded-xl px-3 py-2.5',
          'bg-[var(--background)] border border-[var(--border)]'
        )}>
          <Link className="h-3.5 w-3.5 shrink-0 text-[var(--muted-foreground)]" />
          <span className="flex-1 text-xs text-[var(--foreground)] truncate font-mono">
            {url}
          </span>
        </div>

        {/* Copied indicator */}
        <p className="mt-2.5 text-xs text-violet-400 flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5" />
          Link copied to clipboard
        </p>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ChatHeader({ onMenuClick, currentSection, onRename, onDelete }: ChatHeaderProps) {
  const { theme, setTheme } = useTheme()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [renaming, setRenaming] = useState(false)
  const [renameValue, setRenameValue] = useState('')
  const [shareUrl, setShareUrl] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!dropdownOpen) return
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [dropdownOpen])

  useEffect(() => {
    if (renaming) {
      setRenameValue(currentSection ?? '')
      setTimeout(() => inputRef.current?.select(), 0)
    }
  }, [renaming, currentSection])

  const handleRenameSubmit = () => {
    if (renameValue.trim()) onRename?.(renameValue.trim())
    setRenaming(false)
  }

  const showDropdown = currentSection && (onRename || onDelete)

  const handleShare = async () => {
    const slug = currentSection ? toSlug(currentSection) : ''
    const url = slug
      ? `${window.location.origin}${window.location.pathname}?q=${slug}`
      : `${window.location.origin}${window.location.pathname}`

    // Always copy to clipboard immediately
    try { await navigator.clipboard.writeText(url) } catch { /* denied */ }

    // Show popup
    setShareUrl(url)
  }

  return (
    <header
      className={cn(
        'flex items-center justify-between px-4 py-3',
        'sticky top-0 z-10',
        'bg-transparent'
      )}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-8 w-8"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </Button>

        {/* Chat title with dropdown */}
        {currentSection && (
          renaming ? (
            <input
              ref={inputRef}
              value={renameValue}
              onChange={e => setRenameValue(e.target.value)}
              onBlur={handleRenameSubmit}
              onKeyDown={e => {
                if (e.key === 'Enter') handleRenameSubmit()
                if (e.key === 'Escape') setRenaming(false)
              }}
              className="text-base font-semibold font-heading bg-transparent border-b border-violet-400 outline-none text-[var(--foreground)] w-48"
            />
          ) : (
            <div className="relative min-w-0" ref={dropdownRef}>
              <button
                onClick={() => showDropdown && setDropdownOpen(prev => !prev)}
                className={cn(
                  'flex items-center gap-1 text-base font-semibold text-[var(--foreground)] font-heading max-w-[140px] sm:max-w-xs truncate',
                  showDropdown && 'hover:text-violet-400 transition-colors'
                )}
              >
                <span className="truncate">{currentSection}</span>
                {showDropdown && (
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', dropdownOpen && 'rotate-180')} />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-40 rounded-xl border border-white/10 bg-[var(--background)]/90 backdrop-blur-xl shadow-lg overflow-hidden z-50">
                  {onRename && (
                    <button
                      onClick={() => { setDropdownOpen(false); setRenaming(true) }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[var(--foreground)] hover:bg-violet-500/10 hover:text-violet-400 transition-colors"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      Rename
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => { setDropdownOpen(false); onDelete() }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>

      <div className="flex items-center gap-1 shrink-0">
        {/* Share button + popup */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className={cn('h-8 w-8 transition-colors', shareUrl && 'text-violet-400')}
            aria-label="Share"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>

          {shareUrl && (
            <SharePopup url={shareUrl} onClose={() => setShareUrl(null)} />
          )}
        </div>

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </header>
  )
}
