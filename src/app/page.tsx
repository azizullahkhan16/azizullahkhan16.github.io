'use client'
import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { ChatArea } from '@/components/chat/ChatArea'
import { useChatSessions } from '@/hooks/useChatSessions'
import { sidebarLinks } from '@/data/sidebar-links'
import { toSlug } from '@/lib/slug'

const LG = 1024 // collapse breakpoint

export default function Home() {
  const { pinnedSessions, sessions, activeId, messages, isLoading, submit, reset, switchSession, deleteSession, renameSession } = useChatSessions()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentSection, setCurrentSection] = useState<string>('')

  // Auto-collapse sidebar when viewport narrows below lg
  useEffect(() => {
    const sync = () => setSidebarCollapsed(window.innerWidth < LG)
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  // Auto-submit if a shared ?q=<slug> param is present in the URL
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('q')
    if (!q) return
    const link = sidebarLinks.find(l => toSlug(l.label) === q)
    if (link) {
      submit(link.prompt, link.label)
      setCurrentSection(link.label)
    }
    window.history.replaceState({}, '', window.location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSidebarSubmit = (text: string, section?: string) => {
    submit(text, section)
    if (section) setCurrentSection(section)
  }

  const handleReset = () => {
    reset()
    setCurrentSection('')
  }

  const handleSwitchSession = (id: string) => {
    const target = [...pinnedSessions, ...sessions].find(s => s.id === id)
    switchSession(id)
    setCurrentSection(target?.section ?? target?.title ?? '')
  }

  const isPinnedActive = activeId !== null && pinnedSessions.some(s => s.id === activeId)

  const handleRename = (title: string) => {
    if (activeId) {
      renameSession(activeId, title)
      setCurrentSection(title)
    }
  }

  const handleDeleteActive = () => {
    if (activeId) {
      deleteSession(activeId)
      setCurrentSection('')
    }
  }

  return (
    <div className="flex h-screen w-full overflow-hidden app-bg">
      <div className="hidden lg:block shrink-0">
        <Sidebar
          onSubmit={handleSidebarSubmit}
          onReset={handleReset}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(prev => !prev)}
          currentSection={currentSection}
          pinnedSessions={pinnedSessions}
          userSessions={sessions}
          activeSessionId={activeId}
          onSwitchSession={handleSwitchSession}
          onDeleteSession={deleteSession}
        />
      </div>

      {/* Mobile — Sheet only, no desktop aside */}
      <Sidebar
        noAside
        onSubmit={handleSidebarSubmit}
        onReset={handleReset}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
        currentSection={currentSection}
        pinnedSessions={pinnedSessions}
        userSessions={sessions}
        activeSessionId={activeId}
        onSwitchSession={handleSwitchSession}
        onDeleteSession={deleteSession}
      />

      <ChatArea
        messages={messages}
        isLoading={isLoading}
        onSubmit={submit}
        onMenuClick={() => setMobileOpen(true)}
        currentSection={currentSection}
        disableStream={pinnedSessions.some(s => s.id === activeId)}
        activeId={activeId}
        onRename={isPinnedActive ? undefined : handleRename}
        onDelete={isPinnedActive ? undefined : handleDeleteActive}
      />

    </div>
  )
}
