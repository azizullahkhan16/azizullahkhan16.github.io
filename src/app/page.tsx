'use client'
import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { ChatArea } from '@/components/chat/ChatArea'
import { useChat } from '@/hooks/useChat'

const LG = 1024 // collapse breakpoint

export default function Home() {
  const { messages, isLoading, submit, reset } = useChat()
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

  const handleSidebarSubmit = (text: string, section?: string) => {
    submit(text)
    if (section) setCurrentSection(section)
  }

  const handleReset = () => {
    reset()
    setCurrentSection('')
  }

  return (
    <div className="flex h-screen w-full overflow-hidden app-bg">
      <div className="hidden md:block shrink-0">
        <Sidebar
          onSubmit={handleSidebarSubmit}
          onReset={handleReset}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(prev => !prev)}
          currentSection={currentSection}
        />
      </div>

      {/* Mobile sidebar (no wrapper needed — Sheet is portalled) */}
      <div className="md:hidden">
        <Sidebar
          onSubmit={handleSidebarSubmit}
          onReset={handleReset}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
          collapsed={false}
          onToggleCollapse={() => {}}
          currentSection={currentSection}
        />
      </div>

      <ChatArea
        messages={messages}
        isLoading={isLoading}
        onSubmit={submit}
        onMenuClick={() => setMobileOpen(true)}
        currentSection={currentSection}
      />
    </div>
  )
}
