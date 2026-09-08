'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/data/profile'
import { ThemeToggle } from './theme-toggle'

const sections = [
  { id: 'hero', label: 'intro' },
  { id: 'thinking', label: 'thinking' },
  { id: 'pubs', label: 'pubs' },
  { id: 'builds', label: 'builds' },
  { id: 'work', label: 'work' },
  { id: 'stack', label: 'stack' },
  { id: 'signals', label: 'signals' },
  { id: 'recent', label: 'recent' },
  { id: 'ping', label: 'ping' },
]

export function Nav() {
  const [active, setActive] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <nav className="top">
      <div className="page">
        <div className="row">
          <div className="brand"><strong>Azizullah&nbsp;Khan</strong></div>
          <div className="right">
            <ul>
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className={active === id ? 'active' : ''}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`${basePath}${profile.cvPath}`}
              className="resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              résumé ↗
            </a>
            <ThemeToggle />
            <button
              className="mobile-toggle"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
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
      </div>
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-menu-inner">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileOpen(false)}
              className={active === id ? 'active' : ''}
              tabIndex={mobileOpen ? 0 : -1}
            >
              {label}
            </a>
          ))}
          <a
            href={`${basePath}${profile.cvPath}`}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={mobileOpen ? 0 : -1}
          >
            résumé ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
