'use client'

import { useState, useEffect } from 'react'
import { profile } from '@/data/profile'
import { ThemeToggle } from './theme-toggle'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[900px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium transition-colors ${
                active === id
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={`${basePath}${profile.cvPath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3 ml-auto">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <>
                  <path d="M3 5h14" />
                  <path d="M3 10h14" />
                  <path d="M3 15h14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium transition-colors ${
                active === id
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={`${basePath}${profile.cvPath}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
