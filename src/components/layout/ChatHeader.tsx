'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ChatHeaderProps {
  onMenuClick?: () => void
  currentSection?: string
}

export function ChatHeader({ onMenuClick, currentSection }: ChatHeaderProps) {
  const { theme, setTheme } = useTheme()

  return (
    <header
      className={cn(
        'flex items-center justify-between px-4 py-3',
        'sticky top-0 z-10',
        'border-b border-white/10',
        'bg-white/30 backdrop-blur-xl dark:bg-white/5',
        'shadow-sm'
      )}
    >
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-8 w-8"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </Button>

        {/* Chat title — only shown when a section is active */}
        {currentSection && (
          <span
            className="text-sm font-semibold text-[var(--foreground)] font-heading"
          >
            {currentSection}
          </span>
        )}
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          aria-label="Share"
        >
          <Share2 className="h-4 w-4" />
        </Button>
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
