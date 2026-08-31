import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  title: string
  alt?: boolean
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, alt, children, className }: SectionProps) {
  return (
    <div className={cn(alt && 'bg-section-bg')}>
      <section
        id={id}
        className={cn('max-w-[900px] mx-auto px-6 py-14 md:py-20', className)}
      >
        <h2 className="text-[22px] font-bold mb-6 pb-2 border-b-2 border-accent inline-block">
          {title}
        </h2>
        {children}
      </section>
    </div>
  )
}
