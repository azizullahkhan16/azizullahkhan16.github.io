import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
  noBorder?: boolean
}

export function Section({ id, index, title, children, noBorder }: SectionProps) {
  return (
    <section id={id} className={`block${noBorder ? ' no-border' : ''}`}>
      <div className="page with-rail">
        <div className="rail">
          <span className="index">{index}</span>
          <span className="title">{title}</span>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
