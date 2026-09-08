'use client'

import { useEffect } from 'react'

const REVEAL_SELECTORS = [
  'h2.eyebrow',
  '.lede',
  '.thinking-lede',
  '.pub-note',
  '.q-block',
  '.pub-item',
  '.news-item',
  '.project',
  '.cert',
  '.exp-item',
  '.layer',
  '.contact-wrap',
  '.hero .status',
  '.hero h1',
  '.hero .pitch',
  '.hero .socials',
  '.hero .meta-strip',
  '.hero-portrait',
].join(',')

const STAGGER_SELECTORS = ['.q-block', '.pub-item', '.news-item', '.project', '.cert', '.exp-item', '.layer']

export function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const els = document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS)
    els.forEach((el) => el.setAttribute('data-reveal', ''))

    // Stagger delay within sibling groups
    STAGGER_SELECTORS.forEach((sel) => {
      const groups = new Map<Element, HTMLElement[]>()
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        const parent = el.parentElement
        if (!parent) return
        if (!groups.has(parent)) groups.set(parent, [])
        groups.get(parent)!.push(el)
      })
      groups.forEach((items) => {
        items.forEach((el, i) => {
          el.style.transitionDelay = `${i * 70}ms`
        })
      })
    })

    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('revealed'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    )
    els.forEach((el) => io.observe(el))

    // Cursor spotlight for project cards
    const cards = document.querySelectorAll<HTMLElement>('.project')
    const handlers = new Map<HTMLElement, (e: MouseEvent) => void>()
    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      handlers.set(card, onMove)
      card.addEventListener('mousemove', onMove)
    })

    return () => {
      io.disconnect()
      handlers.forEach((h, card) => card.removeEventListener('mousemove', h))
    }
  }, [])

  return null
}
