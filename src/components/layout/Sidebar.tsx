'use client'
import * as React from 'react'
import {
  User,
  FlaskConical,
  Briefcase,
  Code2,
  Mail,
  PenSquare,
  Github,
  Linkedin,
  ExternalLink,
  PanelLeftClose,
  PanelLeftOpen,
  History,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { sidebarLinks } from '@/data/sidebar-links'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { RecentChats } from '@/components/layout/RecentChats'
import type { ChatSession } from '@/hooks/useChat'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User, FlaskConical, Briefcase, Code2, Mail,
}

const AVATAR_COLORS = [
  '#7c3aed', '#2563eb', '#16a34a', '#d97706',
  '#db2777', '#0891b2', '#dc2626', '#9333ea', '#0d9488', '#c2410c',
]

function getAvatarColor(name: string): string {
  let hash = 0
  for (const char of name) hash = char.charCodeAt(0) + ((hash << 5) - hash)
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
}

const initials = profile.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
const avatarColor = getAvatarColor(profile.name)

function InitialsAvatar() {
  return (
    <img
      src={profile.avatarUrl}
      alt={profile.name}
      className="h-9 w-9 rounded-full object-cover shrink-0"
      onError={e => {
        const el = e.currentTarget
        el.style.display = 'none'
        const fallback = document.createElement('div')
        fallback.className = 'h-9 w-9 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0'
        fallback.style.backgroundColor = avatarColor
        fallback.textContent = initials
        el.parentNode?.insertBefore(fallback, el)
      }}
    />
  )
}

// ─── Expanded sidebar ──────────────────────────────────────────────────────────

interface SidebarFullProps {
  onLinkClick: (prompt: string, label: string) => void
  onReset: () => void
  onToggle?: () => void
  onClose?: () => void
  currentSection?: string
  pinnedSessions: ChatSession[]
  userSessions: ChatSession[]
  activeSessionId: string | null
  onSwitchSession: (id: string) => void
  onDeleteSession: (id: string) => void
}

function SidebarFull({ onLinkClick, onReset, onToggle, onClose, currentSection: _currentSection, pinnedSessions, userSessions, activeSessionId, onSwitchSession, onDeleteSession }: SidebarFullProps) {
  const handleLink = (prompt: string, label: string) => { onLinkClick(prompt, label); onClose?.() }
  const handleReset = () => { onReset(); onClose?.() }

  return (
    <div className="flex h-full flex-col">
      {/* Top: collapse toggle + wordmark */}
      <div className="px-3 py-3 flex items-center gap-2">
        {onToggle && (
          <button
            onClick={onToggle}
            className={cn(
              'h-8 w-8 flex items-center justify-center rounded-lg shrink-0',
              'text-[var(--muted-foreground)] hover:bg-violet-500/10 hover:text-violet-400 transition-colors'
            )}
            aria-label="Collapse sidebar"
          >
            <PanelLeftClose className="h-5 w-5" />
          </button>
        )}
        <span
          className="flex-1 text-base font-bold truncate font-heading"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {profile.name}
        </span>
      </div>

      {/* New Chat */}
      <div className="px-3">
        <Button variant="outline" className="w-full justify-start gap-2 text-sm" onClick={handleReset}>
          <PenSquare className="h-4 w-4 shrink-0" />
          New Chat
        </Button>
      </div>

      <Separator className="my-3 shrink-0" />

      {/* Explore — fixed */}
      <div className="px-3 space-y-1 shrink-0">
        <p className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
          Explore
        </p>
        {sidebarLinks.map((link) => {
          const Icon = iconMap[link.icon] ?? User
          return (
            <button
              key={link.label}
              onClick={() => handleLink(link.prompt, link.label)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm',
                'text-[var(--foreground)] hover:bg-violet-500/10 hover:text-violet-400',
                'transition-colors text-left group'
              )}
            >
              <Icon className="h-4 w-4 shrink-0 text-[var(--muted-foreground)] group-hover:text-violet-400 transition-colors" />
              {link.label}
            </button>
          )
        })}
      </div>

      <Separator className="my-3 shrink-0" />

      {/* Recent — scrollable between the two separators */}
      <div className="flex-1 px-3 min-h-0 overflow-hidden">
        <RecentChats
          pinnedSessions={pinnedSessions}
          userSessions={userSessions}
          activeId={activeSessionId}
          onSwitch={onSwitchSession}
          onDelete={onDeleteSession}
          onClose={onClose}
        />
      </div>

      <Separator className="my-3 shrink-0" />



      {/* Social links */}
      <div className="px-3 space-y-1">
        <p className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
          Links
        </p>
        {profile.links.github && (
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors">
            <Github className="h-4 w-4 shrink-0" />
            GitHub
            <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
          </a>
        )}
        {profile.links.linkedin && (
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors">
            <Linkedin className="h-4 w-4 shrink-0" />
            LinkedIn
            <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
          </a>
        )}
        {profile.links.email && (
          <a href={`mailto:${profile.links.email}`}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors">
            <Mail className="h-4 w-4 shrink-0" />
            Email
          </a>
        )}
      </div>

      {/* Bottom: initials + model badge */}
      <div className="px-2 py-2 border-t border-[var(--border)]">
        <div className={cn(
          'flex items-center gap-3 px-2 py-2 rounded-xl',
          'hover:bg-violet-500/10 transition-colors cursor-default'
        )}>
          <InitialsAvatar />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[var(--foreground)] truncate leading-tight">
              {profile.name}
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500 shrink-0" />
              <span className="text-[10px] font-medium text-violet-400 tracking-wide truncate">
                {profile.modelLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Collapsed icon-only sidebar ───────────────────────────────────────────────

interface SidebarCollapsedProps {
  onLinkClick: (prompt: string, label: string) => void
  onReset: () => void
  onToggle: () => void
  onOpenRecent: () => void
}

function SidebarCollapsed({ onLinkClick, onReset, onToggle, onOpenRecent }: SidebarCollapsedProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex h-full flex-col items-center py-3 gap-1">

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onToggle}
              className="h-9 w-9 flex items-center justify-center rounded-lg text-[var(--muted-foreground)] hover:bg-violet-500/10 hover:text-violet-400 transition-colors mb-1"
              aria-label="Expand sidebar"
            >
              <PanelLeftOpen className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">Expand sidebar</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onReset}
              className="h-9 w-9 flex items-center justify-center rounded-lg text-[var(--muted-foreground)] hover:bg-violet-500/10 hover:text-violet-400 transition-colors"
            >
              <PenSquare className="h-4 w-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">New Chat</TooltipContent>
        </Tooltip>

        <Separator className="my-1 w-6" />

        {sidebarLinks.map((link) => {
          const Icon = iconMap[link.icon] ?? User
          return (
            <Tooltip key={link.label}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onLinkClick(link.prompt, link.label)}
                  className="h-9 w-9 flex items-center justify-center rounded-lg text-[var(--muted-foreground)] hover:bg-violet-500/10 hover:text-violet-400 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">{link.label}</TooltipContent>
            </Tooltip>
          )
        })}

        <Separator className="my-1 w-6" />
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onOpenRecent}
              className="h-9 w-9 flex items-center justify-center rounded-lg text-[var(--muted-foreground)] hover:bg-violet-500/10 hover:text-violet-400 transition-colors"
              aria-label="Recent chats"
            >
              <History className="h-4 w-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">Recent chats</TooltipContent>
        </Tooltip>

        <div className="flex-1" />

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="cursor-default">
              <InitialsAvatar />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">{profile.name}</TooltipContent>
        </Tooltip>

      </div>
    </TooltipProvider>
  )
}

// ─── Main export ───────────────────────────────────────────────────────────────

interface SidebarProps {
  onSubmit: (text: string, section?: string) => void
  onReset: () => void
  mobileOpen: boolean
  onMobileClose: () => void
  collapsed?: boolean
  onToggleCollapse?: () => void
  currentSection?: string
  noAside?: boolean
  pinnedSessions: ChatSession[]
  userSessions: ChatSession[]
  activeSessionId: string | null
  onSwitchSession: (id: string) => void
  onDeleteSession: (id: string) => void
}

export function Sidebar({
  onSubmit,
  onReset,
  mobileOpen,
  onMobileClose,
  collapsed = false,
  onToggleCollapse,
  currentSection,
  noAside = false,
  pinnedSessions,
  userSessions,
  activeSessionId,
  onSwitchSession,
  onDeleteSession,
}: SidebarProps) {
  const handleLink = (prompt: string, label: string) => onSubmit(prompt, label)

  // Delay switching layout so width transition finishes before content swaps
  const [displayCollapsed, setDisplayCollapsed] = React.useState(collapsed)
  React.useEffect(() => {
    if (collapsed) {
      // Collapsing: swap to icon-only immediately (text is clipped by shrinking width)
      setDisplayCollapsed(true)
    } else {
      // Expanding: wait for width to open up before showing full content
      const t = setTimeout(() => setDisplayCollapsed(false), 200)
      return () => clearTimeout(t)
    }
  }, [collapsed])

  return (
    <>
      {!noAside && (
        <aside
          className={cn(
            'flex flex-col border-r border-[var(--border)] bg-[var(--card)] h-screen sticky top-0',
            'transition-[width] duration-300 ease-in-out overflow-hidden',
            collapsed ? 'w-[60px]' : 'w-[260px]'
          )}
        >
          {displayCollapsed ? (
            <SidebarCollapsed
              onLinkClick={handleLink}
              onReset={onReset}
              onToggle={onToggleCollapse!}
              onOpenRecent={onToggleCollapse!}
            />
          ) : (
            <SidebarFull
              onLinkClick={handleLink}
              onReset={onReset}
              onToggle={onToggleCollapse}
              currentSection={currentSection}
              pinnedSessions={pinnedSessions}
              userSessions={userSessions}
              activeSessionId={activeSessionId}
              onSwitchSession={onSwitchSession}
              onDeleteSession={onDeleteSession}
            />
          )}
        </aside>
      )}

      <Sheet open={mobileOpen} onOpenChange={(open) => !open && onMobileClose()}>
        <SheetContent side="left" className="w-[280px] p-0 bg-[var(--card)]">
          <SidebarFull
            onLinkClick={handleLink}
            onReset={onReset}
            onClose={onMobileClose}
            currentSection={currentSection}
            pinnedSessions={pinnedSessions}
            userSessions={userSessions}
            activeSessionId={activeSessionId}
            onSwitchSession={onSwitchSession}
            onDeleteSession={onDeleteSession}
          />
        </SheetContent>
      </Sheet>
    </>
  )
}
