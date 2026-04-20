'use client'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

interface TooltipProviderProps {
  children: React.ReactNode
  delayDuration?: number
}

const TooltipContext = React.createContext<{
  open: boolean
  triggerRect: DOMRect | null
}>({ open: false, triggerRect: null })

function TooltipProvider({ children }: TooltipProviderProps) {
  return <>{children}</>
}

function Tooltip({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [triggerRect, setTriggerRect] = React.useState<DOMRect | null>(null)

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setTriggerRect(e.currentTarget.getBoundingClientRect())
    setOpen(true)
  }
  const handleMouseLeave = () => setOpen(false)

  return (
    <TooltipContext.Provider value={{ open, triggerRect }}>
      <div
        className="relative inline-flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

function TooltipTrigger({
  children,
  asChild: _asChild,
  ...props
}: { children: React.ReactNode; asChild?: boolean } & React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>
}

function TooltipContent({
  className,
  children,
  side = 'top',
  sideOffset = 4,
  ...props
}: {
  className?: string
  children: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  sideOffset?: number
} & React.HTMLAttributes<HTMLDivElement>) {
  const { open, triggerRect } = React.useContext(TooltipContext)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!open || !triggerRect || !mounted) return null

  const gap = sideOffset + 4
  let style: React.CSSProperties = {}

  if (side === 'right') {
    style = {
      position: 'fixed',
      top: triggerRect.top + triggerRect.height / 2,
      left: triggerRect.right + gap,
      transform: 'translateY(-50%)',
    }
  } else if (side === 'left') {
    style = {
      position: 'fixed',
      top: triggerRect.top + triggerRect.height / 2,
      left: triggerRect.left - gap,
      transform: 'translate(-100%, -50%)',
    }
  } else if (side === 'top') {
    style = {
      position: 'fixed',
      top: triggerRect.top - gap,
      left: triggerRect.left + triggerRect.width / 2,
      transform: 'translate(-50%, -100%)',
    }
  } else {
    style = {
      position: 'fixed',
      top: triggerRect.bottom + gap,
      left: triggerRect.left + triggerRect.width / 2,
      transform: 'translateX(-50%)',
    }
  }

  return createPortal(
    <div
      style={style}
      className={cn(
        'z-[9999] overflow-hidden rounded-md bg-[var(--foreground)] px-3 py-1.5',
        'text-xs text-[var(--background)] shadow-md pointer-events-none whitespace-nowrap',
        className
      )}
      {...props}
    >
      {children}
    </div>,
    document.body
  )
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent }
